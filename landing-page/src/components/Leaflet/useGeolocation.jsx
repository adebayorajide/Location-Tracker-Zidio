import {useState, useEffect} from 'react'

function useGeolocation() {
  
  const [location, setLocation] = useState({
    //loaded: false,
    lat:"", lng: ""
  });

  // const onSuccess = location => {
  //   setLocation({
  //       lat: location.coords.latitude,
  //       lng: location.coords.longitude,
  //   });
  // };

  // const onError = error => {
  //    setLocation({
  //      loaded: false,
  //      error,
  //    });
  // }

  useEffect(() => {
    // if( !("geolocation" in navigator) ){
    // onError(
    //  {
    //       code: 0,
    //       message: "geolocation not supported"
    //     });
    // }

    navigator.geolocation.getCurrentPosition((location)=>{
      setLocation({
         lat: location.coords.latitude,
         lng: location.coords.longitude,
      })
    })
     
  }, [])
  
  return (
    <div>useGeolocation</div>
  )
}
export default useGeolocation