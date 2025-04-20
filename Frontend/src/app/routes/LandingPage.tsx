import LandingNavBar from "../../components/LandingNavBar";
import LandingMain from "../../components/LandingMain";
import LandingBody from "../../components/LandingBody";
import { useApp } from "../../stores/UseUser";

export default function LandingPage() {
  const blueColor = "#2ecacc";
  const { user } = useApp();
  console.log(user);
  return (
    <>
      <LandingNavBar color={blueColor} />
      <LandingMain color={blueColor} />
      <LandingBody />
    </>
  );
}
