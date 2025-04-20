import { Link } from "react-router-dom";
import GeoLogo from "./GeoLogo";
import LangaugeDropdown from "./LanguageDropdown";
import NavigationBar from "./NavagationBar";

function LeftContent({ color }: { color: string }) {
  return (
    <Link to="/" className="w-28">
      <GeoLogo color={color} />
    </Link>
  );
}

function RightContent() {
  return <LangaugeDropdown textColor="" />;
}

export default function SignNavBar() {
  const color = "#2ecacc";
  return <NavigationBar
    leftContent={<LeftContent color={color} />}
    rightContent={<RightContent />}
    bgColor="none"
    height="h-[5rem]"
  />;
}
