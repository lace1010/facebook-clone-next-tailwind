import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="group flex items-center cursor-pointer md:px-2 xl:px-7 sm:h-14 hover:bg-gray-100 h rounded-xl hover:text-blue-400 active active:border-b-2 active:border-blue-500 transition ease duration-200">
      <Icon
        className={`mx-auto h-6 text-center sm:h-7 ${
          active ? "text-blue-500" : "text-gray-500"
        } group-hover:text-blue-500`}
      />
    </div>
  );
};

export default HeaderIcon;
