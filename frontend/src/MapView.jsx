import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from './assets/car-top-view.png'
const MapView = ({ routeData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);  // To track the current point index
    const [isMoving, setIsMoving] = useState(true);
    const markerRef = useRef(null);  // To hold the marker reference
    const mapRef = useRef(null);     // To hold the map reference (prevent re-rendering)
    const routeCoordinates = routeData.map((point) => [point.latitude, point.longitude]);

    // Define a custom car icon
    const carIcon = L.icon({
        iconUrl: icon,// Car icon URL
        iconSize: [30, 30], // Icon size
        iconAnchor: [16, 16], // Anchor the icon in the middle
        popupAnchor: [0, -16], // Popup above the icon
    });
    const toggleMovement = () => {
        setIsMoving(!isMoving);
    };

    const resetMovement = () => {
        setCurrentIndex(0);
        markerRef.current.setLatLng(routeCoordinates[0]);
    };

    useEffect(() => {
        if (!routeData || routeData.length === 0) return;

        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([routeData[0].latitude, routeData[0].longitude], 13); // Initial position

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapRef.current);

            L.polyline(routeCoordinates, { color: 'blue', weight: 4 }).addTo(mapRef.current);


            mapRef.current.fitBounds(L.polyline(routeCoordinates).getBounds());

            markerRef.current = L.marker(routeCoordinates[0], { icon: carIcon }).addTo(mapRef.current);
        }

        const moveMarker = () => {
            if (currentIndex < routeCoordinates.length) {

                markerRef.current.setLatLng(routeCoordinates[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                setCurrentIndex(0);
            }
        };


        const interval = setInterval(moveMarker, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [routeData, currentIndex]);

    return <div>
        <div id="map" style={{ height: '500px', width: '100%' }}></div>
        <button onClick={toggleMovement} style={{ marginTop: '10px' }}>
            {isMoving ? "Pause" : "Start"}
        </button>
        <button onClick={resetMovement} style={{ marginTop: '10px', marginLeft: '10px' }}>
            Reset
        </button>
    </div>
};

export default MapView;
