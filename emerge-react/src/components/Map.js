import { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MarkerWithLabel } from '@googlemaps/markerwithlabel';

// handle error cases until Google Maps JS API load is complete
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

// Create Google Map
const GoogleMap = ({ points }) => {
  const center = {
    // Austin coordinates
    lat: 30.293380764541915,
    lng: -97.75533171171739
  }
  const zoom = 11.75
  const ref = useRef();

  useEffect(() => {
    // initialize Google Map
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

    // create Markers with Labels
    points.forEach((point) => {
      new MarkerWithLabel({
        position: new window.google.maps.LatLng(point.lat, point.lon),
        clickable: true,
        draggable: false,
        map: map,
        labelContent: point.label, // can also be HTMLElement
        labelAnchor: new window.google.maps.Point(-40, -30),
        labelClass: "labels", // the CSS class for the label
      });
    });
    
  });

  return <div ref={ref} id="map" style={{ height: '100%'}} />;
}



export default function Map({ apiKey, points, zoomLevel }) {
  return (
    <div className="google-map" style={{ height: '100%', width: '100%' }}>
      <Wrapper apiKey={apiKey} render={render}>
        <GoogleMap points={[{lat: 30.293380764541915, lon: -97.75533171171739, label: 'hello' }]} />
      </Wrapper>
    </div>
  )
}