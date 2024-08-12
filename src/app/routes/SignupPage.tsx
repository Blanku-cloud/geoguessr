import Dropdown from "../../components/Dropdown";
import GeoLogo from "../../components/GeoLogo";
import LangaugeSVG from "../../components/LanguageSVG";
import NavigationBar from "../../components/NavagationBar";

function leftContent(color: string) {
  return <GeoLogo color={color} />;
}

function rightContent() {
  const dropDownArr: Array<string> = [
    "ENGLISH",
    "DEUTSCH",
    "ESPAÑOL",
    "日本語",
  ];
  return (
    <Dropdown
      type="langauge"
      selections={dropDownArr}
      logo={<LangaugeSVG />}
      downarrow="▾"
      italic={true}
      onChange={handleLanguageChange}
      currentValue={chosenLanguage}
    />
  );
}

export default function Signup() {
  const color = "2ecacc";
  return (
    <div>
      <NavigationBar leftContent={leftContent(color)} />
    </div>
  );
}
