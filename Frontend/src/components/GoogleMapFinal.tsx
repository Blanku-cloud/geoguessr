import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { GoogleMapFinalProps } from "../types/types";

export default function GoogleMapFinal({
  acutalLat,
  acutalLng,
  userLat,
  userLng,
}: GoogleMapFinalProps) {
  return (
    <Map
      defaultCenter={{ lat: 22.54992, lng: 0 }}
      defaultZoom={3}
      gestureHandling="greedy"
      disableDefaultUI={true}
      zoomControl={true}
      mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
    >
      <AdvancedMarker position={{ lat: userLat, lng: userLng }} />
      <AdvancedMarker position={{ lat: acutalLat, lng: acutalLng }}>
        <Pin
          background={"#0f9d58"}
          borderColor={"#006425"}
          glyphColor={"#60d98f"}
        />
      </AdvancedMarker>
    </Map>
  );
}
