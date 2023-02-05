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
    // Austin coordinates
    lat: 30.293380764541915,
    lng: -97.75533171171739
  }
  const zoom = 11.75
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={{ height: '100%'}} />;
}

export default function Map({ apiKey, points, zoomLevel }) {
  return (
    <div className="google-map" style={{ height: '100%', width: '100%' }}>
      <Wrapper apiKey={apiKey} render={render}>
        <GoogleMap />
      </Wrapper>
    </div>
  )
}