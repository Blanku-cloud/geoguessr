import { Link } from "react-router-dom";
import AppleSVG from "../../components/AppleSVG";
import GoogleSVG from "../../components/GoogleSVG";
import MetaSVG from "../../components/MetaSVG";
import GreenButton from "../../components/GreenButton";
import WaysToLogin from "../../components/WaysToLogin";
import MessageBoxProps from "../../components/MessageBox";
import WarningSVG from "../../components/WarningSVG";
import ErrorSVG from "../../components/ErrorSVG";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import request from "../../helper";
import { jwtDecode } from "jwt-decode";
import { useApp } from "../../stores/UseUser";
import { LoginInfoSucess, User } from "../../types/types";
import SignNavBar from "../../components/SignNavBar";
import { useNavigate } from "react-router-dom";

const formOfSignIn: {
  from: string;
  logo: React.ReactNode;
  color: string;
  textColor: string;
  border: boolean;
}[] = [
  {
    from: "Google",
    logo: <GoogleSVG />,
    color: "bg-white",
    textColor: "text-black",
    border: false,
  },
  {
    from: "Apple",
    logo: <AppleSVG />,
    color: "bg-black",
    textColor: "text-while",
    border: false,
  },
  {
    from: "Meta",
    logo: <MetaSVG />,
    color: "bg-[#4669B0]",
    textColor: "text-while",
    border: false,
  },
];

interface DisplaySignInEmailProps {
  emailFeild: string;
  passwordFeild: string;
}

function DisplaySignInEmail({
  emailFeild,
  passwordFeild,
}: DisplaySignInEmailProps): React.ReactNode {
  // #e94560
  if (!emailFeild) {
    return (
      <MessageBoxProps
        color="#fecd19"
        message="Please enter a valid email address"
        logo={<WarningSVG />}
      />
    );
  }
  if (!passwordFeild) {
    return (
      <MessageBoxProps
        color="#fecd19"
        message="Please enter a your password"
        logo={<WarningSVG />}
      />
    );
  }
}

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  async function emailLogin(
    authId: string,
    password: string,
    setErrorMessage: Dispatch<SetStateAction<string>>,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
  ): Promise<boolean> {
    const url: string = "api/user/auth-from-email";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authId: authId,
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
        setErrorMessage(error.message);
        console.error("Error:", error);
        return false;
      });
    return true;
  }
  const [showSignInEmail, setShowSignInEmail] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setUser } = useApp();

  const onSubmit = (): boolean | void => {
    if (!email || !password) {
      setShowSignInEmail(true);
    } else {
      emailLogin(email, password, setErrorMessage, setUser);
    }
  };

  return (
    <div className="signup-bg h-screen font-titilliumWeb">
      <SignNavBar />
      <div className="flex justify-center items-center flex-col h-[calc(100vh-5rem)]">
        <div className="w-80 flex flex-col items-center">
          {showSignInEmail && (
            <DisplaySignInEmail emailFeild={email} passwordFeild={password} />
          )}
          {errorMessage && (
            <MessageBoxProps
              color="#e94560"
              message={errorMessage}
              logo={<ErrorSVG />}
            />
          )}
          <form
            action="submit"
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div className="mb-5">
              <h3 className="text-white mb-1 italic">Email</h3>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-md w-full h-10 bg-zinc-900 border-gray-500 border p-3 text-white"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <h3 className="text-white mb-1 italic">Password</h3>
              <input
                type="password"
                id="password"
                name="password"
                className="rounded-md w-full h-10 bg-zinc-900 border-gray-500 border text-white p-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <Link to="/profile/rest-password" className="text-white">
                Forget Password
              </Link>
              <GreenButton
                className="cursor"
                paddingX="px-5"
                paddingY="py-1"
                fontSize="text-base"
                type="submit"
              >
                LOG IN
              </GreenButton>
            </div>
          </form>
          <div className="my-3 text-white text-sm flex items-center w-full">
            <hr className="border-t border-gray-300  w-[calc(50%-4rem)] mr-3" />
            <p className="w-fit text-xs uppercase">or continue with</p>
            <hr className="border-t border-gray-300 w-[calc(50%-4rem)] ml-3" />
          </div>
          <div className="flex flex-col gap-5 w-96 items-center mt-3">
            <WaysToLogin formsLogin={formOfSignIn} />
          </div>
          <div className="mt-10 text-sm text-gray-400 underline flex justify-center items-center cursor-pointer">
            <Link to="/signup" className="text-white">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
