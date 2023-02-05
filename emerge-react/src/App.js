// import { useState, useEffect } from 'react';
import Map from './components/Map.js';
import './App.css';
// import axios from 'axios';

function App() {
  // const [apiKey, setApiKey] = useState('');
  const apiKey = process.env.REACT_APP_MAP_API_KEY;

  /*
  useEffect(() => {
    // Get Google Maps Key from backend
    try {
      axios.get(`http://${process.env.REACT_APP_SERVER_PORT}/getmapkey`)
      .then((res) => {
        console.log(res);
        setApiKey(res.data);
      });
    }
    catch (e) {
      console.warn('Failed to fetch Google Maps key', e);
    }
    
  }, [])
  */

  return (
    <Map apiKey={apiKey} points={{}} zoomLevel={11} />
  );
}

export default App;
