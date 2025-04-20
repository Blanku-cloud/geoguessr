import AppleSVG from "../../components/AppleSVG";
import GoogleSVG from "../../components/GoogleSVG";
import MetaSVG from "../../components/MetaSVG";
import WaysToLogin from "../../components/WaysToLogin";
import SignNavBar from "../../components/SignNavBar";
import { Link } from "react-router-dom";
import { FormOfSignIn } from "../../types/types";
import SignUpPopup from "../../components/SignUpPopup";
import BlackWhiteButton from "../../components/BlackWhiteButton";
import { useState } from "react";

const formOfSignIn = ({
  handleEmailClick,
}: {
  handleEmailClick: () => void;
}): FormOfSignIn[] => [
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
    textColor: "text-white",
    border: false,
  },
  {
    from: "Meta",
    logo: <MetaSVG />,
    color: "bg-[#4669B0]",
    textColor: "text-while",
    border: false,
  },
  {
    from: "email",
    logo: "",
    color: "bg-transparent",
    textColor: "text-while",
    border: true,
    handleClick: handleEmailClick,
  },
];

// finihing getting sign in going

export default function SigninPage() {
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const handleEmailClick = () => {
    setOpenEmailModal(true);
  };
  return (
    <div className="signup-bg h-screen font-titilliumWeb">
      <SignNavBar />
      {openEmailModal && (
        <SignUpPopup
          closeButton={
            <BlackWhiteButton handleClick={() => setOpenEmailModal(false)}>
              X
            </BlackWhiteButton>
          }
        />
      )}
      <div className="flex justify-center items-center flex-col h-[calc(100vh-5rem)]">
        <h1 className="text-3xl font-bold text-white mb-8 mt-10">
          Get started
        </h1>
        <h2 className="text-2xl font-bold text-yellow-300 mb-5">
          Choose sign-up method
        </h2>
        <div className="flex flex-col gap-5 w-96 items-center">
          <WaysToLogin formsLogin={formOfSignIn({ handleEmailClick })} />
        </div>
        <div className="mt-14 mb-28 text-sm text-gray-400 underline flex justify-center items-center">
          <Link to="/signin" className="hover:text-white">
            <p>Already have an account?</p>
          </Link>
        </div>
        <div className="text-sm text-gray-400">
          <Link to="/terms">
            <p>
              By signing up you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
