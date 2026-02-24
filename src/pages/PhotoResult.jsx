import { useLocation, useNavigate } from "react-router-dom";
export default function PhotoResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state;

  if (!image){
    return <h3 style={{ textAlign: "center" }}>No image captured.</h3>;
  }
  return(
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Photo Captured Successfully</h2>
      <img
        src={image}
        alt="Captured"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "20px",
          maxWidth: "400px"
        }}/>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button
          onClick={() => navigate(-1)}
          style={buttonStyle}>
          Retake Photo
        </button>
        <button
          onClick={() => navigate("/list")}
          style={{ ...buttonStyle, backgroundColor: "#007BFF" }}>
          Back to Employee List
        </button>
      </div>
    </div>
  );
}
const buttonStyle = {
  padding: "8px 15px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};