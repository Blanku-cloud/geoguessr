import { useState } from "react";
import Dropdown from "./Dropdown";
import LangaugeSVG from "./LanguageSVG";
import GreenButton from "./GreenButton";
import Popup from "./Popup";
import SadFaceSVG from "./SadFaceSVG";

interface LangaugeDropdownProp{
    textColor: string;
}

export default function LangaugeDropdown({textColor} : LangaugeDropdownProp) {
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
    setLangauge(event.target.value);
  };

  const message = `${langauge} is not supported currently. ${"\n"} Thank you for you undersanding.`;

  return (
    <>
      <Dropdown
        type="langauge"
        selections={dropDownArr}
        logo={<LangaugeSVG />}
        downarrow="▾"
        italic={true}
        onChange={handleLanguageChange}
        currentValue={langauge}
        textColor={textColor}
      />
      {langauge != "ENGLISH" && (
        <Popup
          message={message}
          logo={<SadFaceSVG color="#CC302E" />}
          closeButton={
            <GreenButton
              onClick={() => setLangauge("ENGLISH")}
              paddingX="px-5"
              paddingY="py-1"
              fontSize="text-base"
              className=""
            >
              Switch to ENGLISH
            </GreenButton>
          }
        />
      )}
    </>
  );
}
