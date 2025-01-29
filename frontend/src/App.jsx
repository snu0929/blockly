// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapView from './MapView';

const App = () => {
  const [routeData, setRouteData] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    axios.get('http://localhost:8285/api/vehicle/route')
      .then((response) => {
        console.log(response.data); // Log the data to see if it's correct
        setRouteData(response.data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching route data:', error);
        setLoading(false); // Stop loading even in case of error
      });
  }, []);

  return (
    <div>
      <h1>Vehicle Movement on Map</h1>
      {loading ? (
        <p>Loading map...</p> // Display loading message
      ) : routeData.length > 0 ? (
        <MapView routeData={routeData} />
      ) : (
        <p>No route data available.</p> // If no data is available
      )}
    </div>
  );
};

export default App;
