import Image from "next/image";
import React from "react";

const Contact = ({ src, name }) => {
  //   console.log(src, "<= src");
  console.log(name, "<=contact.name");
  return (
    <div>
      <div className="relative flex items-center space-x-4 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
        <Image
          className=" rounded-full"
          objectFit="cover"
          src={src}
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="font-medium text-gray-700">{name}</p>
        <div className="absolute h-2 w-2 bg-green-500 bottom-3 left-6 rounded-full animate-bounce "></div>
      </div>
    </div>
  );
};

export default Contact;
