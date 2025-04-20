import { useState } from "react";
import MyGoogleMap from "../../components/GoogleMap";
import StreetView from "../../components/GoogleMapStreet";
import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps";
import BlackWhiteButton from "../../components/BlackWhiteButton";
import request from "../../helper";
import { GenerateLocation, GetPoints } from "../../types/types";
import FinishRoundOverlay from "../../components/FinishRoundOverlay";

export default function Campaign() {
  let user = localStorage.getItem("user");
  user = user ? JSON.parse(user) : null;
  console.log(user);
  const [game, setGame] = useState({
    round: 1,
    offDistance: 0,
    expectedAns: {
      lat: 0,
      lng: 0,
    },
    points: 0,
    submit: false,
    totalPoints: 0,
  });

  const handleGetPoints = async (): Promise<void> => {
    if (!pin.isPin) {
      console.log("You have not place down a pin!");
      return;
    }
    const url = "api/campaign/cal-points";
    const options: RequestInit = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: pin.lat,
        lng: pin.lng,
      }),
    };

    console.log(pin.lat);
    console.log(pin.lng);

    request<GetPoints>(url, options)
      .then((data) => {
        console.log("Success:", data);
        setGame({
          ...game,
          expectedAns: {
            lat: Math.round(data.acutalLat),
            lng: Math.round(data.acutalLng),
          },
          points: Math.round(data.points),
          offDistance: Math.round(data.offDistance),
          submit: true,
          totalPoints: game.points + Math.round(data.points),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [scaleMap, setScaleMap] = useState(false);
  const [pin, setPin] = useState({
    isPin: false,
    lat: 0,
    lng: 0,
    message: "PLACE YOUR PIN ON THE MAP",
  });

  const nextCampaign = async (): Promise<void> => {
    const options: RequestInit = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = "api/campaign/generate-coord";

    request<GenerateLocation>(url, options)
      .then((data) => {
        console.log("Success:", data);
        const campaignData = {
          coordinate: {
            lat: data.lat,
            lng: data.lng,
          },
        };
        localStorage.setItem("campaign", JSON.stringify(campaignData));
        setGame({
          ...game,
          submit: false,
          round: game.round + 1,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlePinChange = (lat: number, lng: number) => {
    setPin({
      isPin: true,
      lat: lat,
      lng: lng,
      message: "SUBMIT",
    });
  };

  return (
    <div className="relative overflow-hidden">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="w-screen h-screen">
          <GoogleMap defaultCenter={{ lat: 0, lng: 0 }} defaultZoom={10}>
            <StreetView />
          </GoogleMap>
        </div>
        <div
          className="fixed bottom-0 right-3 min-h-80 min-w-96"
          onMouseEnter={() => setScaleMap(true)}
          onMouseLeave={() => setScaleMap(false)}
        >
          <div className={``}>
            <div
              className={`${
                scaleMap ? "w-[37.5rem] h-[22.5rem]" : "w-[25rem] h-[15rem]"
              } transition-all ease-in-out delay-50`}
            >
              <MyGoogleMap handlePinChange={handlePinChange} />
            </div>

            <div className={`my-3 w-full text-center`}>
              <BlackWhiteButton handleClick={handleGetPoints}>
                {pin.message}
              </BlackWhiteButton>
            </div>
          </div>
        </div>
        {game.submit ? (
          <FinishRoundOverlay
            round={game.round}
            offBy={game.offDistance}
            points={game.points}
            acutalLat={game.expectedAns.lat}
            acutalLng={game.expectedAns.lng}
            userLat={pin.lat}
            userLng={pin.lng}
            totalPoints={game.totalPoints}
            nextCampaign={nextCampaign}
          />
        ) : (
          ""
        )}
      </APIProvider>
    </div>
  );
}
