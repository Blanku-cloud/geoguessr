import { Link } from "react-router-dom";
import GeoLogo from "./GeoLogo";
import NavigationBar from "./NavagationBar";
import HoverDropDown from "./HoverDropDown";
import CommunityMap from "../assets/community-maps.webp";
import GlobeTrotter from "../assets/globetrotter.webp";
import Lightning from "../assets/lightning-bolt.webp";
import SoloDuel from "../assets/solo-duels.webp"
import TeamDuel from "../assets/team-duels.webp"
import BrCountires from "../assets/br-countries.webp"
import BrDistance from "../assets/br-distance.webp"
import UnrankTeamDuel from "../assets/unranked-team-duels.webp"
import Maps from "../assets/maps.webp";
import {
  SingleplayerProps,
  SingleplayerItemProps,
  MultiplayerProps,
} from "../types/types";

function SingleplayerItem({ name, des, src }: SingleplayerItemProps) {
  return (
    <div
      key={src}
      className="flex gap-3 px-3 py-10 h-20 w-full items-center border-b-[1px] border-stone-200"
    >
      <div className="max-w-14 max-h-12 flex items-center">
        <img src={src}></img>
      </div>
      <div className="flex flex-col text-[clamp(16px,1vw,32px)]">
        <div className="uppercase mb-1">
          <p>{name}</p>
        </div>
        <div>
          <p className="text-xs italic text-purple-300">{des}</p>
        </div>
      </div>
    </div>
  );
}

function Singleplayer({ singleplayer }: SingleplayerProps) {
  return (
    <>
      {singleplayer.map((ele) => (
        <SingleplayerItem key={ele.src} name={ele.name} des={ele.des} src={ele.src} />
      ))}
      <div className="px-3 py-2 flex text-xl">
        <div className="max-w-6 max-h-12 flex items-center">
          <img src={Lightning}></img>
        </div>
        <div>
          <p>Streak</p>
        </div>
      </div>
    </>
  );
}

function Multiplayer({ compe, fun }: MultiplayerProps) {
  return (
    <>
      <div className="px-3 pt-3 pb-2 text-xl w-full items-center border-b-[1px] border-stone-200">
        <p className="text-gray-100 uppercase">Competitive</p>
      </div>
      {compe.map((ele) => (
        <SingleplayerItem key={ele.src} name={ele.name} des={ele.des} src={ele.src} />
      ))}
      <div className="px-3 pt-3 pb-2 text-xl w-full items-center border-b-[1px] border-stone-200">
        <p className="uppercase">Just for fun</p>
      </div>
      {fun.map((ele) => (
        <SingleplayerItem key={ele.src} name={ele.name} des={ele.des} src={ele.src} />
      ))}
    </>
  );
}

function LeftContent({ color }: { color: string }) {
  const singleplayer = [
    {
      name: "campaign",
      des: "Travel around the world and discover new places in this exciting gameplay!",
      src: GlobeTrotter,
    },
    {
      name: "classic maps",
      des: "Explore the global and earn medals with our official map",
      src: Maps,
    },
    {
      name: "community maps",
      des: "Browse and play over 1M+ community created maps!",
      src: CommunityMap,
    },
  ];
  const multiplayerCompetive = [
    {
      name: "duels",
      des: "Duel against opponents in the global competition!",
      src: SoloDuel,
    },
    {
      name: "team duels",
      des: "Team up or find a teammate ready to compete!",
      src: TeamDuel,
    },
  ];
  const multiplayerJustForFun = [
    {
      name: "battle royale countries",
      des: "Stay in the game by guessing the correct country. How long can you last?",
      src: BrCountires,
    },
    {
      name: "battle royal distance",
      des: "Guess closer than your opponents and be the last one standing!",
      src: BrDistance,
    },
    {
      name: "team duels",
      des: "Join forces with a friend and face off against opponents from all over the world!",
      src: UnrankTeamDuel,
    },
  ];
  return (
    <>
      <div>
        <Link to="/" className="scale-50">
          <GeoLogo color={color} width="120" />
        </Link>
      </div>
      <HoverDropDown
        title="Singleplayer"
        element={<Singleplayer singleplayer={singleplayer} />}
      />
      <HoverDropDown
        title="Multiplayer"
        element={
          <Multiplayer
            compe={multiplayerCompetive}
            fun={multiplayerJustForFun}
          />
        }
      />
    </>
  );
}

function RightContent() {
  return <div> </div>;
}

export default function HomeNavBar() {
  return (
    <NavigationBar
      height="h-16"
      bgColor="bg-black"
      leftContent={<LeftContent color="#2ecacc" />}
      rightContent={<RightContent />}
    />
  );
}
