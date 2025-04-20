import { useState } from "react";
import GreenButton from "./GreenButton";
import MessageBoxProps from "./MessageBox";
import WarningSVG from "./WarningSVG";
import { jwtDecode } from "jwt-decode";
import request from "../helper";
import { LoginInfoSucess, User } from "../types/types";
import { useApp } from "../stores/UseUser";
import { useNavigate } from "react-router-dom";

interface SignUpPopupProps {
  closeButton: React.ReactNode;
}

export default function SignUpPopup({ closeButton }: SignUpPopupProps) {
  const navigate = useNavigate();
  const { setUser } = useApp();
  const [fields, setFields] = useState({
    email: "",
    password: "",
    reenterPassword: "",
    passwordMatch: false,
    username: "",
  });
  const [messageBox, setMessageBox] = useState({
    show: false,
    message: "",
  });
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      email: e.target.value,
    });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      password: e.target.value,
    });
  };
  const handleReenterPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFields({
      ...fields,
      reenterPassword: e.target.value,
    });
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      username: e.target.value,
    });
  };
  async function createEmailAccount(
    email: string,
    password: string,
    username: string,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
  ): Promise<boolean> {
    const url: string = "api/user/create-user-email";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        authId: email,
        password: password,
        method: "email",
      }),
    };
    request<LoginInfoSucess>(url, options)
      .then((data) => {
        console.log("Success:", data);
        setUser(jwtDecode(data.token));
        localStorage.setItem("user", JSON.stringify(jwtDecode(data.token)));
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error", error);
        return false;
      });

    return true;
  }
  const onSubmit = (): boolean | void => {
    if (fields.password != fields.reenterPassword) {
      setMessageBox({
        show: true,
        message: "Password does not match.",
      });
    } else if (fields.reenterPassword === "" && fields.password === "") {
      setMessageBox({
        show: true,
        message: "Password cannot be empty.",
      });
    } else if (fields.password.length < 5) {
      setMessageBox({
        show: true,
        message: "Password must be longer than 4 characters.",
      });
    } else if (fields.username === "") {
      setMessageBox({
        show: true,
        message: "Username cannot be blank.",
      });
    } else {
      createEmailAccount(
        fields.email,
        fields.password,
        fields.username,
        setUser
      );
    }
  };
  console.log(fields);
  return (
    <div className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 z-40">
      <div className="fixed top-1/2 px-12 py-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-off-black w-[28rem] text-gray-400 text-center rounded-xl p-4 min-h-60	font-titilliumWeb z-50 flex flex-col justify-center">
        <span className="hover:scale-110 absolute top-4 right-4 ">
          {closeButton}
        </span>
        <div className="italic">
          <h2 className="text-2xl font-bold text-white">Almost there!</h2>
          <p className="mx-auto text-center	text-lg text-yellow-400 w-60">
            Just a few more steps and you're ready to go!
          </p>
        </div>
        <div className="my-2">
          {messageBox.show && (
            <MessageBoxProps
              color="#e94560"
              message={messageBox.message}
              logo={<WarningSVG />}
            />
          )}
        </div>
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="mb-5">
            <h3 className="text-white mb-1 italic text-left">Email</h3>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-md w-full h-10 bg-zinc-900 border-gray-500 border p-3 text-white"
              onChange={(e) => handleEmailChange(e)}
            />
          </div>
          <div className="mb-5">
            <h3 className="text-white mb-1 italic text-left">Password</h3>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded-md w-full h-10 bg-zinc-900 border-gray-500 border text-white p-3"
              onChange={(e) => handlePasswordChange(e)}
            />
          </div>
          <div className="mb-5">
            <h3 className="text-white mb-1 italic text-left">
              Reenter Password
            </h3>
            <input
              type="password"
              id="password-2"
              name="password"
              className="rounded-md w-full h-10 bg-zinc-900 border-gray-500 border text-white p-3"
              onChange={(e) => handleReenterPasswordChange(e)}
            />
          </div>
          <div className="mb-5">
            <h3 className="text-white mb-1 italic text-left">Username</h3>
            <input
              type="username"
              id="username"
              name="username"
              className="rounded-md w-full h-10 bg-zinc-900 border-gray-500 border text-white p-3"
              onChange={(e) => handleUsernameChange(e)}
            />
          </div>
          <GreenButton
            height="h-16"
            paddingX="px-5"
            paddingY="py-1"
            className=""
            fontSize="text-base"
            type="submit"
          >
            Sign Up
          </GreenButton>
        </form>
      </div>
    </div>
  );
}
