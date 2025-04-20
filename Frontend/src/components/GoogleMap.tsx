import { Map, MapMouseEvent, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";
import { GoogleMapProps } from "../types/types";

export default function GoogleMap({ handlePinChange }: GoogleMapProps) {
  // Handle the map click event to add a marker
  const handleMapClick = useCallback((ev: MapMouseEvent) => {
    const position = ev.detail.latLng; // Get clicked position (lat, lng)
    // position not exist
    if (!position) {
      return;
    }
    console.log(position);
    setMarkerPosition(position);
    handlePinChange(position?.lat, position?.lng);
  }, []);
  const [makerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  return (
    <Map
      defaultCenter={{ lat: 22.54992, lng: 0 }}
      defaultZoom={3}
      gestureHandling="greedy"
      disableDefaultUI={true}
      zoomControl={true}
      mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
      onClick={handleMapClick} // Handle map click event
    >
      <AdvancedMarker position={makerPosition} />
    </Map>
  );
}
