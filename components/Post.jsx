import Image from "next/image";
import React from "react";

import { ThumbUpIcon, ShareIcon, ChatAltIcon } from "@heroicons/react/outline";

const Post = ({ name, message, email, timestamp, image, postImage }) => {
  return (
    <div className="flex flex-col mt-6">
      <div className="bg-white p-5 rounded-t-2xl shadow-md">
        <div className="flex items-center space-x-2 ">
          <img
            className="rounded-full"
            src={image}
            alt="uploaded"
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="flex justify-between items-center bg-white rounded-b-2xl shadow-md text-gray-400 border-t">
        <div className="postFooter group">
          <ThumbUpIcon className="h-4 group-hover:text-blue-500" />
          <p className=" group-hover:text-blue-500">Like</p>
        </div>
        <div className="postFooter group">
          <ChatAltIcon className="h-4 group-hover:text-blue-500" />
          <p className=" group-hover:text-blue-500">comment</p>
        </div>
        <div className="postFooter group">
          <ShareIcon className="h-4 group-hover:text-blue-500" />
          <p className=" group-hover:text-blue-500">share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
