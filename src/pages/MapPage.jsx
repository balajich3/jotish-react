import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
export default function MapPage() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://backend.jotish.in/backend_dev/gettabledata.php",
        {
          username: "test",
          password: "123456",
        }
      );
      setEmployees(response.data.TABLE_DATA.data);
    } catch (error) {
      console.error(error);
    }
  };
  const cityCoordinates = {
    London: [51.5072, -0.1276],
    Tokyo: [35.6762, 139.6503],
    Edinburgh: [55.9533, -3.1883],
    "New York": [40.7128, -74.006],
    "San Francisco": [37.7749, -122.4194],
  };
  return (
    <div className="page-container">
      <h2>Employee Locations Map</h2>
      <div
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%" }}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {employees.map((emp, index) =>{
            const city = emp[2];
            const coords = cityCoordinates[city];
            if (!coords) return null;
            return(
              <Marker
                key={index}
                position={[
                  coords[0] + Math.random() * 0.02,
                  coords[1] + Math.random() * 0.02,
                ]}>
                <Popup>
                  <strong>{emp[0]}</strong>
                  <br />
                  {emp[1]}
                  <br />
                  {city}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/list")}
          style={{ backgroundColor: "#007BFF", color: "white" }}>
          Back to Employee List
        </button>
      </div>
    </div>
  );
}