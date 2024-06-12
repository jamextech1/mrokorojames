import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utils/toast-modals";

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [logging, setLogging] = useState<boolean>(false);
  //
  const Login = async (e: any) => {
    e.preventDefault();
    setLogging(true);
    try {
      if (
        email === process.env.NEXT_PUBLIC_EMAIL &&
        password === process.env.NEXT_PUBLIC_PASSWORD
      ) {
        Cookies.set("token", "true", {
          expires: 1,
          sameSite: "strict",
          secure: true,
        });
        SuccessToast("Login Successful");
        router.push("/add-project");
      } else {
        return ErrorToast("Wrong email or password");
      }
    } catch (error: any) {
      ErrorToast("Someting went wrong");
    } finally {
      setLogging(false);
    }
  };
  //
  return (
    <form
      className="w-[95%] sm:w-[450px] mx-auto mt-12 flex flex-col items-center gap-3"
      onSubmit={(e) => Login(e)}
    >
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-[1.5px] text-light-300 border-primary-100 rounded-md py-2 pl-2 w-full outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-[1.5px] text-light-300 border-primary-100 rounded-md py-2 pl-2 w-full outline-none"
      />
      <button
        type="submit"
        className="border-[1.5px] border-primary-100 rounded-md py-2 pl-2 w-full"
      >
        {logging ? "Logging" : "Sign In"}
      </button>
    </form>
  );
};

export default SignInPage;
