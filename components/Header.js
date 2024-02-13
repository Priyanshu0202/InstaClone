"use client";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HomeIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";
import Link from "next/link";
const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="relative h-24 w-24 hidden lg:inline-grid cursor-pointer">
          <Link href="/">
            <Image
              src="https://links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
              alt="insta_name"
            />
          </Link>
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            alt="insta_logo"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 items-center flex pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <Link href="/">
            <HomeIcon className="navbtn" />
          </Link>
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navbtn">
                <PaperAirplaneIcon className="navbtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-sm w-5 h-5 bg-red-500 justify-center flex animate-pulse rounded-full text-white items-center">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="navbtn"
                onClick={() => {
                  setOpen(true);
                }}
              />
              <UserGroupIcon className="navbtn" />
              <HeartIcon className="navbtn" />
              <img
                src={session.user.image}
                alt="profile picture"
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>SignIn</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
