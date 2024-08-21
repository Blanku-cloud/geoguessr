import { Link } from "react-router-dom";
import AppleSVG from "../../components/AppleSVG";
import GeoLogo from "../../components/GeoLogo";
import GoogleSVG from "../../components/GoogleSVG";
import LangaugeDropdown from "../../components/LanguageDropdown";
import MetaSVG from "../../components/MetaSVG";
import NavigationBar from "../../components/NavagationBar";
import GreenButton from "../../components/GreenButton";
import WaysToLogin from "../../components/WaysToLogin";
import { useState } from "react";

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

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const color = "#2ecacc";
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
          <form action="submit" className="w-full">
            <div className="mb-5">
              <h3 className="text-white mb-1 italic">Email</h3>
              <input
                type="email"
                id="email"
                name="email"
                required
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
                required
                className="rounded-md w-full h-10 bg-zinc-900 border-gray-500 border text-white p-3"
                onChange={handlePasswordChange}
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
              >
                <input type="submit" value="Log In" />
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
