import React, { useEffect, useState } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"; // Routing CSS
import { useSelector } from "react-redux";
import { MapWrapper } from "./map-styled";
import { RootState } from "../../../store/store";

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

  useEffect(() => {
    if (activeTruck) {
      const map = L.map("map").setView([activeTruck.lat, activeTruck.lng], 8);

      // TileLayer qo'shish
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Leaflet Routing Machine orqali yo'nalishni yaratish
      L.Routing.control({
        waypoints: [
          L.latLng(activeTruck.lat, activeTruck.lng),
          L.latLng(activeTruck.destLat, activeTruck.destLng),
        ],
        routeWhileDragging: true, // Yo'lni yangilab turish
        lineOptions: {
          styles: [{ color: "black", weight: "2" }],
        },
      }).addTo(map);

      // Marker va popup qo'shish
      const customIcon = new L.Icon({
        iconUrl:
          "https://icons.veryicon.com/png/o/phone/location2/33-navigation-arrow-1.png",
        iconSize: [30, 30],
        iconAnchor: [12, 41],
      });

      L.marker([activeTruck.lat, activeTruck.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(
          `<strong>${activeTruck.name}</strong><br>Status: ${activeTruck.status}<br>Address: ${activeTruck.address}`
        );

      return () => {
        map.remove(); // Xarita komponenti o'chirilganda tozalash
      };
    }
  }, [activeTruck]);

  return (
    <MapWrapper $active={sidebarActive}>
      <div
        id="map"
        style={{ width: "100%", height: "calc(100vh - 300px)" }}
      ></div>
    </MapWrapper>
  );
}
