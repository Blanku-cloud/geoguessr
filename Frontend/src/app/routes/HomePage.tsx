import HomeNavBar from "../../components/HomeNavBar";
import { useApp } from "../../stores/UseUser";
import Home from "../../components/Home";

export default function HomePage() {
  const user = useApp().user;
  console.log(user);
  return (
    <>
      <HomeNavBar />
      <Home />
    </>
  );
}
