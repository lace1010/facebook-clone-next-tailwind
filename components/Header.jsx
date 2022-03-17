import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  return (
    <div className="flex items-center p-2 lg:p-5 sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Image
          src="https://links.papareact.com/5me"
          alt="icon"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex space-x-2 border rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-5 sm:h-7 text-gray-600" />
          <input
            className="hidden md:inline-flex flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex flex-grow justify-center items-start space-x-15">
        <div className="flex space-x-3 lg:space-x-6">
          <HeaderIcon Icon={HomeIcon} active={true} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Image
          onClick={signOut}
          className="hidden mx-2 cursor-pointer rounded-full "
          src={session.data.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <p
          onClick={signOut}
          className="text-gray-700 cursor-pointer whitespace-nowrap font-semibold pr-3"
        >
          Hunter Lacefield
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
