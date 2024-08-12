import GGPinSVG from "./GGPinSVG";
import LangaugeSVG from "./LanguageSVG";
import Dropdown from "./Dropdown";
import BlackWhiteButton from "./BlackWhiteButton";
import GreyButton from "./GreyButton";
import GreenButton from "./GreenButton";
import { Link } from "react-router-dom";
import NavigationBar from "./NavagationBar";
import LangaugeDropdown from "./LanguageDropdown";

interface LandingNavBarProps {
  onLanguageChange: (language: string) => void;
  chosenLanguage: string;
  color: string;
}

interface RightContentProps {
  onLanguageChange: (language: string) => void;
  chosenLanguage: string;
}

interface LeftContentProps {
  color: string;
}

type ButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  height?: string;
  fontSize: string;
  paddingX: string;
  paddingY: string;
};

function RenderButton() {
  const buttons: {
    type: ({
      children,
      onClick,
      height,
      fontSize,
      paddingX,
      paddingY,
    }: ButtonProps) => JSX.Element;
    text: string;
    className: string;
    paddingX: string;
    paddingY: string;
    fontSize: string;
  }[] = [
    {
      type: BlackWhiteButton,
      text: "JOIN WITH CODE",
      className: "italic cursor-pointer",
      paddingX: "px-5",
      paddingY: "py-1",
      fontSize: "text-base",
    },
    {
      type: GreyButton,
      text: "LOG IN",
      className: "italic",
      paddingX: "px-5",
      paddingY: "py-1",
      fontSize: "text-base",
    },
    {
      type: GreenButton,
      text: "PLAY NOW",
      className: "italic",
      paddingX: "px-5",
      paddingY: "py-1",
      fontSize: "text-base",
    },
  ];

  const renderButton = buttons.map((button, index) => {
    const ButtonComponent = button.type as React.ElementType<ButtonProps>;

    return (
      <ButtonComponent
        key={index}
        className={button.className}
        paddingX={button.paddingX}
        paddingY={button.paddingY}
        fontSize={button.fontSize}
      >
        <Link to="/" className={button.className}>
          {button.text}
        </Link>
      </ButtonComponent>
    );
  });

  return renderButton;
}

function LeftContent({ color }: LeftContentProps) {
  const leftArr = ["WORLD CUP '24", "ORGANIZATIONS", "COMMUNITY AWARDS"];
  const leftList = leftArr.map((items, index) => (
    <Link to="/" className={"text-gray-400 uppercase"} key={index}>
      {items}
    </Link>
  ));
  return (
    <>
      <GGPinSVG color={color} />
      {leftList}
    </>
  );
}

function RightContent({ onLanguageChange, chosenLanguage }: RightContentProps) {
  return (
    <>
      <LangaugeDropdown
        onLanguageChange={onLanguageChange}
        chosenLanguage={chosenLanguage}
      />
      <RenderButton />
    </>
  );
}

export default function LandingNavBar({
  onLanguageChange,
  chosenLanguage,
  color,
}: LandingNavBarProps) {
  const bgColor = "bg-off-black";
  return (
    <NavigationBar
      height="h-[3.25rem]"
      leftContent={<LeftContent color={color} />}
      rightContent={
        <RightContent
          onLanguageChange={onLanguageChange}
          chosenLanguage={chosenLanguage}
        />
      }
      bgColor={bgColor}
    />
  );
}
