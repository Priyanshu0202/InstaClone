"use client";
import { useSession, signOut } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-3 ml-10">
      {session ? (
        <>
          <img
            className="h-16 rounded-full border p-[2px]"
            src={session?.user.image}
            alt="user-image"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">{session?.user.username}</h2>
            <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
          </div>
          <button
            onClick={signOut}
            className="font-semibold text-blue-400 text-sm hover:bg-blue-100 p-3 rounded-md"
          >
            Sign out
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
