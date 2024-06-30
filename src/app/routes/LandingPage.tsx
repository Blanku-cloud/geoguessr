import LandingNavBar from "../../components/LandingNavBar";
import { useState } from "react";
import { Language } from "../../types/types";

function checkDefaultLangauge(choosenLangauge: Language) {
  const defaultLangauge = "ENGLISH";
  if (choosenLangauge != defaultLangauge) {
    return false;
  }
  return true;
}

export default function LandingPage() {
  const [choosenLangauge, setChoosenLangauge] = useState<string>("ENGLISH");
  const handleLangaugeChange = (langauge: string) => {
    setChoosenLangauge(langauge);
  };
  console.log(choosenLangauge);

  return (
    <>
      <LandingNavBar onLanguageChange={handleLangaugeChange} />
    </>
  );
}
