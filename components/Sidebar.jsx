import React from "react";
// import { useSession } from "next-auth/client";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import { useSession } from "next-auth/react";
const Sidebar = () => {
  const session = useSession();

  return (
    <div className="max-w-[600px] xl:min-w-[300px] mr-4">
      {/* make one for session image when authenticate is set up */}
      <SidebarRow
        src={session.data.user.image}
        title={session.data.user.name}
      />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  );
};

export default Sidebar;
