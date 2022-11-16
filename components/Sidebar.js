import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24 ">
      {/* Logo */}
      <div className=" p-0  xl:px-1">
        <Image
          width="120"
          height="150"
          src="https://cdn4.vectorstock.com/i/thumb-large/65/03/letter-p-blue-icon-logo-concept-design-vector-24016503.jpg"
        ></Image>
      </div>
      {/* Menu */}
      <div className=" mt-4  mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>
      {/* Button */}
      {session ? (
        <>
          <div className="hoverEffects text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              className="h-10 w-10 rounded-full xl:mr-2"
              src={session.user.image}
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold ">{session.user.name}</h4>
              <p className="text-gray-500">@{session.user.username}</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          </div>
        </>
      ) : (
          <></>
      )}
    </div>
  );
}
