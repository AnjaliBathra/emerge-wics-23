import { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return "Loading...";
    case Status.FAILURE:
      return "Error";
    case Status.SUCCESS:
      return <GoogleMap />;
    default:
      return;
  }
};

const GoogleMap = () => {
  const center = {
    lat: 10.99835602,
    lng: 77.01502627
  }
  const zoom = 11
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={{ height: '100%'}} />;
}

export default function Map({ points, zoomLevel }) {
  return (
    <div className="google-map" style={{ height: '100%', width: '100%' }}>
      <Wrapper apiKey={process.env.REACT_APP_MAP_API_KEY} render={render}>
        <GoogleMap />
      </Wrapper>
    </div>
  )
}