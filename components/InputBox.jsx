import { useSession } from "next-auth/react";
import Image from "next/image";
import { React, useState, useRef } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";

// This import loads the firebase namespace.
import firebase from "firebase/compat/app";

const InputBox = () => {
  const session = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.data.user.name,
        email: session.data.user.email,
        image: session.data.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImage = (e) => {
    e.preventDefault();
    console.log("add image");

    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="mt-6 p-5 bg-white text-gray-500 rounded-2xl font-medium shadow-md">
      <div className="flex items-center space-x-4">
        <Image
          className="rounded-full"
          src={session.data.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="flex-grow bg-gray-100 text-gray-700 rounded-full h-12 px-5 outline-none "
            type="text"
            placeholder={`What's on your mind, ${session.data.user.name}?`}
          ></input>
          <button className="hidden" onClick={sendPost} type="submit">
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="h-10 object-contain"
              src={imageToPost}
              alt="uploaded"
            />
            <p className="text-xs text-red-500">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly border-t mt-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs md:text-sm lg:text-base">Live video</p>
        </div>

        <div
          onClick={() => {
            filePickerRef.current.click();
          }}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs md:text-sm lg:text-base">Photo/video</p>
          <input ref={filePickerRef} onChange={addImage} type="file" hidden />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-3 00" />
          <p className="text-xs sm:text-sm lg:text-base">Feeling/activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
