import { JSX } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"], // required
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface InputProps {
  email_or_username: string;
  password: string;
  updateEmail_or_username: (new_value: string) => void;
  updatePassword: (new_value: string) => void;
}

export default function LoginInputs({
  email_or_username,
  password,
  updateEmail_or_username,
  updatePassword,
}: InputProps): JSX.Element {
  return (
    <>
      {/* EMAIL OR USERNAME */}
      <div>
        <label
          className="relative top-[11px] left-2.5 inline-block text-[10px] font-normal bg-white p-0.5 py-[3px] transition ease-in-out duration-900 dark:bg-[#1F1F1F] dark:text-[#CBCBCB]"
          htmlFor="username"
        >
          Email or Username
        </label>
        <span className="text-[10px]">
          <input
            id="username"
            name="email_or_username"
            className="w-full outline-none border border-[#000000] dark:border-[#FFFFFF] text-[#0000009d] transition ease-in-out duration-900 dark:text-[#FFFFFF99] rounded-xl p-3 placeholder:text-[#00000099] dark:placeholder:text-[#FFFFFF99]  placeholder:font-normal placeholder:italic"
            type="text"
            value={email_or_username}
            onChange={(e) => updateEmail_or_username(e.target.value)}
            placeholder="Enter your username or email"
          />
        </span>
      </div>

      {/* PASSWORD */}
      <div>
        <label
          className="relative top-[11px] left-2.5 inline-block text-[10px] font-normal bg-white p-0.5 py-[3px] transition ease-in-out duration-900 dark:bg-[#1F1F1F] dark:text-[#CBCBCB]"
          htmlFor="username"
        >
          Password
        </label>
        <span className="grid gap-1 text-[10px]">
          <input
            id="username"
            name="password"
            className="w-full outline-none border border-[#000000] dark:border-[#FFFFFF] text-[#0000009d] transition ease-in-out duration-900 dark:text-[#FFFFFF99] rounded-xl p-3 placeholder:text-[#00000099] dark:placeholder:text-[#FFFFFF99]  placeholder:font-normal placeholder:italic"
            type="text"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
            placeholder="Enter your password"
          />
          <p className="justify-self-end">
            <Link
              className={`${inter.className} font-normal text-[10px]  transition ease-in-out duration-900 hover:underline dark:text-[#FFFFFF]`}
              href={""}
            >
              Forgot Password?
            </Link>
          </p>
        </span>
      </div>
    </>
  );
}
