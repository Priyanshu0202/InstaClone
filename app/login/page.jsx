"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import Header from "@/components/Header";
const Login = () => {
  const session = useSession();
  return (
    <>
      <Header />
      <div className=" flex justify-center items-center bg-gray-100">
        <div className="flex flex-col items-center">
          <img
            src="https://imgs.search.brave.com/CKVoog9O3-3hahVPBU8OW2zmQsvel6dvmf0zUpUkSTw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MzQ5NDI1MzY3OTAt/ZGFkOGYzYzBkNzFi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T1h4OGFX/NXpkR0ZuY21GdEpU/SXdiRzluYjN4bGJu/d3dmSHd3Zkh4OE1B/PT0"
            alt="insta logo"
            className="w-44 object-cover rounded-md"
          />
          <p className="text-md italic my-4 text-center">
            Only login with google
          </p>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="text-white bg-red-500 p-3 rounded-lg hover:bg-red-400"
          >
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
