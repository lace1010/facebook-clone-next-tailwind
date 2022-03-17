import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center mt-10">
      <Image
        src="https://links.papareact.com/5me"
        alt="icon"
        width={200}
        height={200}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className=" mt-11 p-5 cursor-pointer bg-blue-500 text-white rounded-full text-center"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
