import Image from "next/image";
import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-4 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <div className="relative rounded-full h-5 w-5 sm:h-8 sm:w-8">
          <Image className="absolute rounded-full" src={src} layout="fill" />
        </div>
      )}
      {Icon && <Icon className="h-5 w-5 sm:h-8 sm:w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium text-gray-700">{title}</p>
    </div>
  );
};

export default SidebarRow;
