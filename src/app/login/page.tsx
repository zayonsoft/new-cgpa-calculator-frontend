"use client";
import { FormEvent, JSX } from "react";
import Image from "next/image";
import { Inter, Montserrat, Poppins } from "next/font/google";
import Link from "next/link";
import OtherLoginInfo from "./components/OtherLoginInfo";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState, useEffect } from "react";
import LoginInputs from "./components/LoginInputs";
import RequestAPI from "../components/RequestAPI";
import MessageModal from "../components/MessageModal";

const inter = Inter({
  subsets: ["latin"], // required
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"], // required
  weight: ["300", "400", "500", "600", "700", "800"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Login(): JSX.Element {
  const [email_or_username, setEmail_or_username] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formOkay, setFormOkay] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    "Something Went Wrong!"
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [messageType, setMessageType] = useState<"success" | "error">("error");

  const [showError, setShowError] = useState<boolean>(false);

  function updateEmail_or_username(new_value: string) {
    if (!loading) {
      setEmail_or_username(new_value);
    }
  }

  function updatePassword(new_value: string) {
    if (!loading) {
      setPassword(new_value);
    }
  }
  useEffect(() => {
    setFormOkay(email_or_username.trim() && password ? true : false);
    if (email_or_username.trim() || password) {
      if (!email_or_username.trim())
        setErrorMessage("Email or Username is required");
      else if (!password) setErrorMessage("Password is Required!");
    } else {
      setErrorMessage("Please fill in your details to log in");
    }
  }, [email_or_username, password]);

  function removeError() {
    // to remove the fill in error when an input is changed
    setShowError(false);
  }

  function modalCloser() {
    setModalOpen(false);
  }

  useEffect(() => {
    removeError();
  }, [email_or_username, password]);

  function submitForm(e: FormEvent, formOkay: boolean) {
    e.preventDefault();

    if (formOkay) {
      // set loading to true
      setLoading(true);

      // Make API call

      const loginForm = new FormData();
      loginForm.append("email_or_username", email_or_username);
      loginForm.append("password", password);

      const loginUrl = "/login";
      RequestAPI()
        .post(loginUrl, loginForm)
        .then((response) => console.log(response))
        .catch((error) => {
          error.message
            ? setErrorMessage(error.message)
            : setErrorMessage("Something went wrong");
          setShowError(true);
          setModalOpen(true);
          setLoading(false);
        });

      // Read response
    } else {
      // show error
      setShowError(true);
      // create a modal to escalate whatever issue
      setModalOpen(true);
    }
  }

  return (
    <>
      <div className="grid relative  grid-cols-2 gap-3 max-[760px]:grid-cols-1 h-full">
        <div className="grid gap-3 relative h-auto grid-rows-[150px_1fr]  max-[760px]:hidden">
          <div className="py-2 pt-17">
            <Image
              className="h-auto"
              src={"/logo.png"}
              alt="Logo"
              width={120}
              height={0}
            />
          </div>
          <div
            className={`${inter.className} -translate-y-1/2 top-1/2 absolute content-start`}
          >
            {/* Just to wrap the content */}
            <div className="grid gap-9 text-white">
              <h1 className="text-xl font-semibold">
                CGPA
                <br />
                CALCULATOR
              </h1>
              <p className="text-sm max-[950px]:text-xs pr-2">
                Track your Grade Point Average (GPA) and Cumulative Grade Point
                Average (CGPA) with ease with our software designed by some of
                the best around.
                <br />
                <br />
                It surely suits your purpose!
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${poppins.className} grid transition ease-in-out duration-900`}
        >
          {/* THE FORM SECTION */}
          <div
            className={
              "bg-white grid w-full max-w-[380px] p-6 m-auto text-[#111111] gap-7 font-semibold transition ease-in-out duration-900  rounded-xl dark:bg-[#1F1F1F]"
            }
          >
            <p
              className={
                "text-[#111111] text-center text-xl transition ease-in-out duration-900 dark:text-[#FFFFFF]"
              }
            >
              Welcome!
            </p>
            <form
              onSubmit={(e) => submitForm(e, formOkay)}
              className="grid gap-3"
              action=""
            >
              <LoginInputs
                email_or_username={email_or_username}
                password={password}
                updateEmail_or_username={updateEmail_or_username}
                updatePassword={updatePassword}
              />

              <div>
                <button
                  className={`${
                    loading
                      ? "bg-[#b4de78] cursor-auto"
                      : "bg-[#9BF718] cursor-pointer"
                  } relative custom-transition ${
                    !loading ? "hover:bg-[#06ab00]" : ""
                  }  w-full rounded-xl text-xs box-border h-10 after:w-7 after:h-7 after:rounded-full after:border-gray-900 after:border-l-gray-400 after:border-5 after:-translate-1/2 after:left-1/2 after:top-1/2 py-3 after:absolute ${
                    !loading ? "after:hidden" : "after:block"
                  } after:bg-transparent after:animate-spin`}
                  type="submit"
                >
                  {!loading ? `Log In` : ""}
                </button>
                {showError ? (
                  <small
                    className={`${montserrat} text-center text-red-800 font-normal text-xs block`}
                  >
                    {errorMessage}
                  </small>
                ) : null}
              </div>
            </form>
            <OtherLoginInfo text="Or Sign In with" />
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <Link
                  className="grid rounded-[15px] justify-items-center  items-center p-2.5 border-black dark:border-[#CBCBCB] hover:bg-[#03030321] hover:border-[#03030321] dark:hover:bg-[#9f9f9f21] dark:hover:border-[#9f9f9f21] border transition ease-in-out duration-900"
                  href={"#"}
                >
                  <span className="grid gap-1 grid-cols-[auto_1fr] items-center transition ease-in-out duration-900 dark:text-[#CBCBCB]">
                    <FaApple />
                    <span className="text-xs font-normal max-[800px]:text-[10px] transition ease-in-out duration-900 dark:text-[#CBCBCB]">
                      Apple
                    </span>
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  className="grid rounded-[15px] justify-items-center items-center p-2.5 border-black dark:border-[#CBCBCB] hover:bg-[#03030321] hover:border-[#03030321] dark:hover:bg-[#9f9f9f21] dark:hover:border-[#9f9f9f21] border transition ease-in-out duration-900"
                  href={"#"}
                >
                  <span className="grid gap-1 items-center grid-cols-[auto_1fr] transition ease-in-out duration-900 dark:text-[#CBCBCB]">
                    <FcGoogle />
                    <span className="text-xs font-normal max-[800px]:text-[10px] transition ease-in-out duration-900">
                      Google
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MessageModal
        message={errorMessage}
        open={modalOpen}
        modalCloser={modalCloser}
        type={messageType}
      />
    </>
  );
}
