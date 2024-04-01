import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import useGeolocation from "./useGeolocation";

const markerIcon = new Icon({
  iconUrl: "src/Images/marker.jpg",
  iconSize: [38, 38],
});

function BasicMap() {
  const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
  const location = useGeolocation();

  useEffect(()=>{
    const fetchLocationData = async () => {
      const result = await fetch(
        "https://geolocation-tracker-be.onrender.com/api/v1/map/create",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(location),
        }
      );

      const cities = await result.json();
      console.log(cities);
    };
    fetchLocationData();
  }, [location])

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
         {location.loaded && !location.error && (
             <Marker
               position={[location.coordinates.lat, location.coordinates.lng]}
               icon={markerIcon}
             >
               <Popup>You are here</Popup>
             </Marker>
           )
         }
         
     
     
    </MapContainer>
  );
}
export default BasicMap;
