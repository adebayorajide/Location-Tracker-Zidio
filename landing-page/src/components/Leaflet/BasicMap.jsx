import { MapContainer,Marker,Popup,TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import { useState } from "react";
import useGeolocation from './useGeolocation'

 const markerIcon = new Icon({
   iconUrl: "src/Images/marker.jpg",
   iconSize: [38, 38],
 });

function BasicMap() {
const [position, setPosition] = useState({lat:51.505,lng:-0.09 })
const location = useGeolocation()
  
return (
  <MapContainer
    center={position}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {location.loaded && !location.error && (<Marker position={[location.coordinates.lat, location.coordinates.lng]}  icon={markerIcon}>
      <Popup>You are here</Popup>
    </Marker>)}
  </MapContainer>
)

}
export default BasicMap;
