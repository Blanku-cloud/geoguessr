import BlackWhiteButton from "./BlackWhiteButton";
import Map from "../assets/maps.webp";
import SoloDuel from "../assets/solo-duels.webp";
import StandOff from "../assets/standoff.webp";
import { useApp } from "../stores/UseUser";
import request from "../helper";
import { GenerateLocation, PlayButtonCampaign } from "../types/types";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { setCampaignData } = useApp();
  const navigate = useNavigate();
  const startCampaign = async (type: "m" | "s"): Promise<void> => {
    let url = "";
    const options: RequestInit = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (type == "s") {
      url = "api/campaign/generate-coord";
    } else if (type == "m") {
      console.log("empty");
    }

    request<GenerateLocation>(url, options)
      .then((data) => {
        console.log("Success:", data);
        const campaignData = {
          gameMode: type,
          coordinate: {
            lat: data.lat,
            lng: data.lng,
          },
        };
        setCampaignData(campaignData);
        localStorage.setItem("campaign", JSON.stringify(campaignData));
        navigate("/campaign");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const PlayButton = () => {
    const data: PlayButtonCampaign[] = [
      {
        imgSrc: Map,
        text: "Play Campaign!",
        type: "s",
      },
      {
        imgSrc: SoloDuel,
        text: "Play Solo Duel!",
        type: "m",
      },
    ];
    return data.map((ele) => (
      <div className="flex flex-col items-center" key={ele.text}>
        <div className="w-20 mb-3">
          <img src={ele.imgSrc} alt="Map" />
        </div>
        <BlackWhiteButton handleClick={() => startCampaign(ele.type)}>
          {ele.text}
        </BlackWhiteButton>
      </div>
    ));
  };
  return (
    <div className="bg-home-bg w-screen h-screen bg-cover bg-center font-titilliumWeb">
      <div className="flex">
        <div className="flex justify-center items-center w-[30%] h-screen">
          <div className="flex flex-col w-40 gap-3">
            <PlayButton />
          </div>
          <div></div>
        </div>
        <div className="flex justify-center items-center w-[70%] h-screen">
          <div className="w-1/2">
            <img src={StandOff} alt="stand off" />
          </div>
        </div>
      </div>
    </div>
  );
}
