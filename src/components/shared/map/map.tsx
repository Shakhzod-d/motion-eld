import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import { MapWrapper } from "./map-styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState, useEffect } from "react";

interface Truck {
  id: number;
  name: string;
  lat: number;
  lng: number;
  status: string;
  address: string;
  destination: string;
  destLat: number;
  destLng: number;
}

interface Props {
  mapData: Truck[];
  activeId: number;
}

function MapFlyTo({ center }: { center: LatLngExpression }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, 8);
    }
  }, [center, map]);

  return null;
}

export function Map({ mapData, activeId }: Props) {
  const [activeTruck, setActiveTruck] = useState<Truck | undefined>(
    mapData.find((truck) => truck.id === activeId)
  );

  const sidebarActive = useSelector(
    (state: RootState) => state.booleans.sidebarActive
  );

  useEffect(() => {
    const selectedTruck = mapData.find((truck) => truck.id === activeId);
    setActiveTruck(selectedTruck);
  }, [activeId, mapData]);

  const center: LatLngExpression = activeTruck
    ? [activeTruck.lat, activeTruck.lng]
    : [37.0902, -95.7129]; // Default center if no active truck is found

  const route: L.LatLngTuple[] = activeTruck
    ? [
        [activeTruck.lat, activeTruck.lng],
        [activeTruck.destLat, activeTruck.destLng],
      ]
    : [];

  const customIcon = new L.Icon({
    iconUrl:
      "https://icons.veryicon.com/png/o/phone/location2/33-navigation-arrow-1.png",
    iconSize: [30, 30],
    iconAnchor: [12, 41],
  });

  return (
    <MapWrapper $active={sidebarActive}>
      <MapContainer
        center={center}
        zoom={2}
        style={{ width: "100%", height: "100vh !important" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <MapFlyTo center={center} />

        {activeTruck && (
          <>
            {route.length > 0 && <Polyline positions={route} color="black" />}
            <Marker
              position={[activeTruck.lat, activeTruck.lng]}
              icon={customIcon}
            >
              <Popup>{activeTruck.destination}</Popup>
            </Marker>
            <Marker position={[activeTruck.destLat, activeTruck.destLng]}>
              <Popup>{activeTruck.destination}</Popup>
            </Marker>
            <Marker
              key={activeTruck.id}
              position={[activeTruck.lat, activeTruck.lng]}
              icon={customIcon}
            >
              <Popup>
                <strong>{activeTruck.name}</strong>
                <br />
                Status: {activeTruck.status}
                <br />
                Address: {activeTruck.address}
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </MapWrapper>
  );
}
