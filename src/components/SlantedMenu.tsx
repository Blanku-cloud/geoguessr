import SettingSVG from "./SettingSVG";
import HomeSVG from "./HomeSVG";
import SupportSVG from "./SpportSVG";
import GiftcardSVG from "./GiftcardSVG";
import { Link } from "react-router-dom";

const gameMode = [
  {
    mode: "singleplayer",
    link: "fill in later",
  },
  {
    mode: "classic maps",
    link: "fill in later",
  },
  {
    mode: "multiplayer",
    link: "fill in later",
  },
];

const miscillieous = [
  {
    item: "party",
    link: "fill in later",
  },
  {
    item: "quiz",
    link: "fill in later",
  },
  {
    item: "shop",
    link: "fill in later",
  },
  {
    item: "communtiy",
    link: "fill in later",
  },
  {
    item: "world cup '24",
    link: "fill in later",
  },
];

const icons = [
  {
    place: "home",
    icon: <HomeSVG />,
    link: "fill in later",
  },
  {
    place: "support",
    icon: <SupportSVG />,
    link: "fill in later",
  },
  {
    place: "setting",
    icon: <SettingSVG />,
    link: "fill in later",
  },
  {
    place: "gift cards",
    icon: <GiftcardSVG />,
    link: "fill in later",
  },
];

export default function SlantedMenu() {
  const mode = gameMode.map((obj) => (
    <Link
      to="/"
      className="hover:text-indigo-300 hover:text-[3.1rem] h-20 flex items-center transition duration-75 ease-in-out"
    >
      {obj.mode}
    </Link>
  ));
  const mis = miscillieous.map((obj) => (
    <Link
      to="/"
      className="transition duration-75 ease-in-out hover:text-indigo-300 hover:text-[2rem] w-fit"
    >
      {obj.item}
    </Link>
  ));
  const icon = icons.map((obj) => (
    <Link to="/" className="flex flex-col items-center hover:text-[1.05rem]">
      {obj.icon}
      {obj.place}
    </Link>
  ));

  return (
    <div className="w-[42rem] absolute top-0 -left-28 h-full bg-black/60 flex justify-center items-center -skew-x-[12deg] z-10 pl-24 transition ease-in-out delay-150">
      <div className="uppercase w-[20rem] skew-x-[12deg]">
        <div className="font-bold italic">
          <div className="flex flex-col text-5xl">{mode}</div>
          <hr className="my-5 border-t-gray-600" />
          <div className="flex flex-col text-3xl space-y-4">{mis}</div>
        </div>
        <div className="flex justify-between mt-8">{icon}</div>
      </div>
    </div>
  );
}
