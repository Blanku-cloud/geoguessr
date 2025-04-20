import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";
import { Campaign } from "../types/types";

export default function StreetView() {
  const [campaignData, setCampaignData] = useState<Campaign | null>(() => {
    const storedCampaign = localStorage.getItem("campaign");
    return storedCampaign ? (JSON.parse(storedCampaign) as Campaign) : null;
  });

  const map = useMap();
  const streetViewLibrary = useMapsLibrary("streetView");
  const streetViewRef = useRef<HTMLDivElement>(null);
  const [streetView, setStreetView] =
    useState<google.maps.StreetViewPanorama | null>(null);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "campaign" && e.newValue) {
        setCampaignData(JSON.parse(e.newValue) as Campaign);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    const checkLocalStorage = setInterval(() => {
      const storedCampaign = localStorage.getItem("campaign");
      if (storedCampaign) {
        const parsedData = JSON.parse(storedCampaign) as Campaign;
        // Only update if the coordinates have changed
        if (
          parsedData.coordinate.lat !== campaignData?.coordinate.lat ||
          parsedData.coordinate.lng !== campaignData?.coordinate.lng
        ) {
          setCampaignData(parsedData);
        }
      }
    }, 500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(checkLocalStorage);
    };
  }, [campaignData]);

  useEffect(() => {
    if (!streetViewLibrary || !map || !campaignData?.coordinate) return;

    try {
      if (!campaignData.coordinate.lat || !campaignData.coordinate.lng) {
        return;
      }

      if (streetView) {
        streetView.setPosition({
          lat: campaignData.coordinate.lat,
          lng: campaignData.coordinate.lng,
        });
      } else {
        // Initialize new street view
        const panorama = new streetViewLibrary.StreetViewPanorama(
          map.getDiv(),
          {
            position: {
              lat: campaignData.coordinate.lat,
              lng: campaignData.coordinate.lng,
            },
            pov: { heading: 165, pitch: 0 },
            zoom: 1,
            visible: true,
            disableDefaultUI: true,
            showRoadLabels: false,
            linksControl: true,
          }
        );

        map.setStreetView(panorama);
        setStreetView(panorama);
      }
    } catch (error) {
      console.error("Error initializing/updating Street View:", error);
    }
  }, [streetViewLibrary, map, campaignData, streetView]);

  return (
    <div ref={streetViewRef} className="w-full h-96 rounded-lg shadow-lg" />
  );
}
