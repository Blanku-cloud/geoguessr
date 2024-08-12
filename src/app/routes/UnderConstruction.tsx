import Construction from "../../components/ConstructionSVG";
import NavigationBar from "../../components/NavagationBar";
import ExpandButton from "../../components/ExtandButton";
import GreenButton from "../../components/GreenButton";
import GreyButton from "../../components/GreyButton";
import Threelines from "../../components/ThreeLinesSVG";
import SlantOpButton from "../../components/SlantOpButton";
import SlantedMenu from "../../components/SlantedMenu";
import { useState } from "react";

function LeftContent({ handleClick }: { handleClick: () => void }) {
  return (
    <>
      <SlantOpButton handleClick={handleClick}>
        <div className="relative z-30">
          <Threelines />
        </div>
      </SlantOpButton>
      <ExpandButton />
    </>
  );
}

function RightContent() {
  return (
    <>
      <GreenButton
        fontSize="text-base"
        paddingX="px-6"
        paddingY="py-2"
        className=""
      >
        SIGN UP
      </GreenButton>
      <GreyButton
        fontSize="text-base"
        paddingX="px-6"
        paddingY="py-2"
        className=""
      >
        LOG IN
      </GreyButton>
    </>
  );
}

export default function UnderConstruction() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <div className="font-titilliumWeb bg-gradient text-white relative h-screen ">
      <NavigationBar
        height="h-[5rem]"
        leftContent={<LeftContent handleClick={handleMenu} />}
        rightContent={<RightContent />}
        bgColor="none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <Construction />
        <h1 className="text-3xl font-bold">THIS PAGE IS UNDER CONSTRUCTION</h1>
      </div>
      {menu && <SlantedMenu />}
    </div>
  );
}
