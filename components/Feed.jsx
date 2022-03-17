import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex-grow justify-center h-screen pt-6 pb-44 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
