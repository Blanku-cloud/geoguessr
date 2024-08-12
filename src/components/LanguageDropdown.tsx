import { useState } from "react";
import Dropdown from "./Dropdown";
import LangaugeSVG from "./LanguageSVG";

interface LangaugeDropdownProp {
  onLanguageChange: (language: string) => void;
  chosenLanguage: string;
}

export default function LangaugeDropdown({
  onLanguageChange,
  chosenLanguage,
}: LangaugeDropdownProp) {
  const [langauge, setLangauge] = useState("ENGLISH");

  const dropDownArr: Array<string> = [
    "ENGLISH",
    "DEUTSCH",
    "ESPAÑOL",
    "日本語",
  ];

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onLanguageChange(event.target.value);
  };

  console.log();

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
