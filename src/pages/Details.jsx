import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Webcam from "react-webcam";
export default function Details(){
  const location = useLocation();
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const emp = location.state;
  if (!emp){
    return <h3 style={{ textAlign: "center" }}>No employee data found.</h3>;
  }
  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    navigate("/photo", { state: imageSrc });
  };
  return(
    <div className="page-container">
      <h2>Employee Details</h2>
      <div className="card">
        <p><strong>Name:</strong> {emp[0]}</p>
        <p><strong>Position:</strong> {emp[1]}</p>
        <p><strong>City:</strong> {emp[2]}</p>
        <p><strong>Employee ID:</strong> {emp[3]}</p>
        <p><strong>Joining Date:</strong> {emp[4]}</p>
        <p><strong>Salary:</strong> {emp[5]}</p>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          height={240}
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={capturePhoto}
          style={{ backgroundColor: "#007BFF", color: "white" }}>
          Capture Photo
        </button>
      </div>
    </div>
  );
}