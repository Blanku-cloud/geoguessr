import LandingNavBar from "../../components/LandingNavBar";
import LandingMain from "../../components/LandingMain";
import LandingBody from "../../components/LandingBody";

export default function LandingPage() {
  const blueColor = "#2ecacc";

  return (
    <>
      <LandingNavBar color={blueColor} />
      <LandingMain color={blueColor} />
      <LandingBody />
    </>
  );
}
