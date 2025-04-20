import { useState } from "react";
import GoogleMapFinal from "./GoogleMapFinal";
import { FinishRoundOverlayProps } from "../types/types";
import BlackWhiteButton from "./BlackWhiteButton";
import { useNavigate } from "react-router-dom";
export default function FinishRoundOverlay({
  round,
  offBy,
  points,
  acutalLat,
  acutalLng,
  userLat,
  userLng,
  totalPoints,
  nextCampaign,
}: FinishRoundOverlayProps) {
  const navigate = useNavigate();
  const headBackHome = () => {
    navigate("/home");
  };
  return (
    <div className="absolute w-screen h-screen bg-black  top-0 left-0 flex justify-center items-center flex-col">
      <div className="text-white mb-10 text-4xl">
        <h1>Round: {round} / 3</h1>
      </div>
      <div className="w-[45rem] h-80">
        <GoogleMapFinal
          acutalLat={acutalLat}
          acutalLng={acutalLng}
          userLat={userLat}
          userLng={userLng}
        />
      </div>
      <div className="text-center mt-5">
        <h2 className="text-xl text-white">You were off by {offBy} miles!</h2>
        <h2 className="text-lg text-white">You earn {points} points.</h2>
        <h2 className="text-lg text-white">Total points: {totalPoints}</h2>
      </div>
      <BlackWhiteButton handleClick={round == 3 ? headBackHome : nextCampaign}>
        {round == 3 ? "Go home" : "Start Next Round"}
      </BlackWhiteButton>
    </div>
  );
}
