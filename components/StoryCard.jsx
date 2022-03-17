import Image from "next/image";
import React from "react";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-32 md:w-20 lg:h-56 lg:w-36 cursor-pointer overflow-x p-3 transition duration-300 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 md:opacity-100 z-50 rounded-full"
        src={src}
        width={40}
        height={40}
      />
      <Image
        className="object-cover filter brightness-75 rounded-full md:rounded-3xl"
        src={profile}
        layout="fill"
      />
      <p className="absolute hidden lg:block z-50 text-white bottom-0 py-4">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
