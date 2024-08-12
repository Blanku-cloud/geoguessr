import LandingNavBar from "../../components/LandingNavBar";
import { useState } from "react";
import Popup from "../../components/Popup";
import SadFaceSVG from "../../components/SadFaceSVG";
import GreenButton from "../../components/GreenButton";
import LandingMain from "../../components/LandingMain";
import LandingBody from "../../components/LandingBody";

export default function LandingPage() {
  const [chosenLanguage, setChosenLanguage] = useState<string>("ENGLISH");
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const handleLanguageChange = (langauge: string) => {
    setChosenLanguage(langauge);
  };

  const message = `${chosenLanguage} is not supported currently. ${"\n"} Thank you for you undersanding.`;

  const handleSwitchToEnglish = () => {
    setChosenLanguage("ENGLISH");
    setPopupVisible(false); // Hide the popup
  };

  const handleLanguageChangeInNavBar = (language: string) => {
    if (language !== chosenLanguage) {
      setPopupVisible(true); // Show the popup when language changes
    }
    handleLanguageChange(language);
  };

  const blueColor = "#2ecacc";

  return (
    <>
      <LandingNavBar
        onLanguageChange={handleLanguageChangeInNavBar}
        chosenLanguage={chosenLanguage}
        color={blueColor}
      />
      <LandingMain color={blueColor} />
      <LandingBody />

      {chosenLanguage !== "ENGLISH" && popupVisible && (
        <Popup
          message={message}
          logo={<SadFaceSVG color="#CC302E" />}
          closeButton={
            <GreenButton
              onClick={handleSwitchToEnglish}
              paddingX="nomo"
              paddingY="py-[1rem]"
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
