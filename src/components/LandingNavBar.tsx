import GGPinSVG from "./GGPinSVG";
import LangaugeSVG from "./LanguageSVG";
import Dropdown from "./Dropdown";
import BlackWhiteButton from "./BlackWhiteButton";
import GreyButton from "./GreyButton";
import GreenButton from "./GreenButton";
import { Link } from "react-router-dom";
import NavigationBar from "./NavagationBar";

interface Props {
  onLanguageChange: (language: string) => void;
}

type ButtonProps = {
  className: string;
  children: React.ReactNode;
};
function RenderButton() {
  const buttons = [
    {
      type: BlackWhiteButton,
      text: "JOIN WITH CODE",
      className: "italic cursor-pointer",
    },
    { type: GreyButton, text: "LOG IN", className: "italic" },
    { type: GreenButton, text: "PLAY NOW", className: "italic" },
  ];

  const renderButton = buttons.map((button, index) => {
    const ButtonComponent = button.type as React.ElementType<ButtonProps>;

    return (
      <ButtonComponent key={index} className={button.className}>
        <Link to="/" className={button.className}>
          {button.text}
        </Link>
      </ButtonComponent>
    );
  });

  return renderButton;
}

function LeftContent() {
  const color = "#3391cd";
  const leftArr = ["WORLD CUP '24", "ORGANIZATIONS", "COMMUNITY AWARDS"];
  const leftList = leftArr.map((items, index) => (
    <p className={"text-gray-400 uppercase"} key={index}>
      {items}
    </p>
  ));
  return (
    <>
      <GGPinSVG color={color} />
      {leftList}
    </>
  );
}

function RightContent({ onLanguageChange }: Props) {
  const dropDownArr: Array<string> = [
    "ENGLISH",
    "DEUTSCH",
    "ESPAÑOL",
    "日本語",
  ];

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage: string = event.target.value;
    onLanguageChange(selectedLanguage); // Call parent callback to update language
  };

  return (
    <>
      <Dropdown
        type="langauge"
        selections={dropDownArr}
        logo={<LangaugeSVG />}
        downarrow="▾"
        italic={true}
        onChange={handleLanguageChange} // Pass down the handler
      />
      <RenderButton />
    </>
  );
}

export default function LandingNavBar({ onLanguageChange }: Props) {
  const bgColor = "bg-off-black";
  return (
    <NavigationBar
      leftContent={<LeftContent />}
      rightContent={<RightContent onLanguageChange={onLanguageChange} />}
      bgColor={bgColor}
    />
  );
}
