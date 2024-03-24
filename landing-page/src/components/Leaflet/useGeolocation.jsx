import { Marker, Popup, useMapEvents } from  'react-leaflet'
import {  useState } from "react"
import L from 'leaflet'

function LocationMarker() {
   const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  const markerIcon = new L.icon({
    iconUrl: "src/Images/marker.jpg",
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

    return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
export default LocationMarker