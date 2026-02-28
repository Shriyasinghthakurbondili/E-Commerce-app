import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ Fix marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const TrackingUi = () => {
  const [userPos, setUserPos] = useState(null);
  const [deliveryPos, setDeliveryPos] = useState([17.385, 78.4867]); // start point (Hyderabad demo)
  const [error, setError] = useState(null);

  // 📍 Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos([
          pos.coords.latitude,
          pos.coords.longitude
        ]);
      },
      () => setError("❌ Allow location access")
    );
  }, []);

  // 🚚 Simulate delivery movement
  useEffect(() => {
    if (!userPos) return;

    const interval = setInterval(() => {
      setDeliveryPos((prev) => {
        const latStep = (userPos[0] - prev[0]) * 0.05;
        const lngStep = (userPos[1] - prev[1]) * 0.05;

        return [
          prev[0] + latStep,
          prev[1] + lngStep
        ];
      });
    }, 2000); // moves every 2 sec

    return () => clearInterval(interval);
  }, [userPos]);

  if (error) {
    return (
      <div className="container">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!userPos) {
    return (
      <div className="container">
        <h2>📍 Getting location...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🚚 Live Order Tracking</h1>

      <MapContainer
        center={userPos}
        zoom={13}
        style={{ height: "450px", borderRadius: "12px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 📍 USER */}
        <Marker position={userPos}>
          <Popup>🏠 Your Location</Popup>
        </Marker>

        {/* 🚚 DELIVERY */}
        <Marker position={deliveryPos}>
          <Popup>🚚 Delivery Partner</Popup>
        </Marker>

        {/* 🛣 ROUTE LINE */}
        <Polyline positions={[deliveryPos, userPos]} />
      </MapContainer>
    </div>
  );
};

export default TrackingUi;