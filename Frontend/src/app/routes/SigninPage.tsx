import { Link } from "react-router-dom";
import AppleSVG from "../../components/AppleSVG";
import GeoLogo from "../../components/GeoLogo";
import GoogleSVG from "../../components/GoogleSVG";
import LangaugeDropdown from "../../components/LanguageDropdown";
import MetaSVG from "../../components/MetaSVG";
import NavigationBar from "../../components/NavagationBar";
import GreenButton from "../../components/GreenButton";
import WaysToLogin from "../../components/WaysToLogin";
import MessageBoxProps from "../../components/MessageBox";
import WarningSVG from "../../components/WarningSVG";
import ErrorSVG from "../../components/ErrorSVG";
import { useState } from "react";
import { UserLoginInfo } from "../../types/types";

function LeftContent({ color }: { color: string }) {
  return (
    <div className="w-28">
      <GeoLogo color={color} />
    </div>
  );
}

function RightContent() {
  return <LangaugeDropdown textColor="" />;
}

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

async function emailLogin(authId: string, password: string): Promise<void> {
  const url: string = "http://localhost:8080/api/user/auth-from-email";
  const request: Request = new Request(url, {
    method: "POST",
    body: JSON.stringify({
      authId: authId,
      password: password,
      method: "email",
    }),
  });
  try {
    const response = await fetch(request).then(async (res) => {
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      } else {
        return res.json();
      }
    });

    const userData: Promise<UserLoginInfo> = await response.json();
    console.log(userData);
  } catch (error: unknown) {
    console.error(error);
  }
}

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  ("");
  const [showSignInEmail, setShowSignInEmail] = useState(false);

  const color = "#2ecacc";

  const onSubmit = (): boolean | void => {
    if (!email || !password) {
      setShowSignInEmail(true);
    } else {
      emailLogin(email, password);
    }
  };

  return (
    <div className="signup-bg h-screen font-titilliumWeb">
      <NavigationBar
        leftContent={<LeftContent color={color} />}
        rightContent={<RightContent />}
        bgColor="none"
        height="h-[5rem]"
      />
      <div className="flex justify-center items-center flex-col h-[calc(100vh-5rem)]">
        <div className="w-80 flex flex-col items-center">
          {showSignInEmail && (
            <DisplaySignInEmail emailFeild={email} passwordFeild={password} />
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
            <p className="hover:text-white">Create an account</p>
          </div>
        </div>
      </div>
    </div>
  );
}
