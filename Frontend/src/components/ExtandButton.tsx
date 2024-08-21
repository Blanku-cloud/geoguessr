import LeftArrow from "./LeftArrowSVG";
import { useNavigate } from "react-router-dom";

export default function ExpandButton() {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex items-center justify-center max-w-16 transition-max-w duration-[300ms] hover:max-w-64 pointer group"
      onClick={() => navigate("/")}
    >
      <div className="-skew-x-[20deg] h-12 absolute bg-black/30  w-1/2 left-0 rounded-l-md group-hover:bg-black/60"></div>
      <button className="relative overflow-hidden inline-flex text-white z-10 mx-4 items-center">
        <span className=" pr-1 flex justify-center items-center">
          <LeftArrow color="white" />
        </span>
        <span className="font-titilliumWeb text-xl font-bold">
          <p className="w-24">GO BACK</p>
        </span>
      </button>
      <div className="-skew-x-[20deg] h-12 absolute bg-black/30 w-1/2 right-0 rounded-r-md group-hover:bg-black/60"></div>
    </div>
  );
}
