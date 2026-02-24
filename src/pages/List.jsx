import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function List(){
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() =>{
    fetchData();
  }, []);
  const fetchData = async () =>{
    try {
      const response = await axios.post(
        "https://backend.jotish.in/backend_dev/gettabledata.php",
        {
          username: "test",
          password: "123456",
        }
      );
      console.log("API Response:", response.data);
      setEmployees(response.data.TABLE_DATA.data);
      setLoading(false);
    } 
    catch (error){
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  if (loading){
    return <h3 style={{ textAlign: "center" }}>Loading data...</h3>;
  }
  return(
  <div className="page-container">
    <h2>Employee List</h2>
    <div style={{ marginBottom: "20px" }}>
  <button
    onClick={() => navigate("/chart")}
    style={{ backgroundColor: "#8B5E3C", color: "white" }}
  >
    View Salary Chart
  </button>
</div>
<div style={{ marginBottom: "20px" }}>
  <button
    onClick={() => navigate("/map")}
    style={{ backgroundColor: "#6c757d", color: "white" }}
  >
    View Employee Map
  </button>
</div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table
        style={{
          borderCollapse: "collapse",
          minWidth: "950px",
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          borderRadius: "8px",
          overflow: "hidden"
        }}>
        <thead>
          <tr style={{ backgroundColor: "#f6d861" }}>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Position</th>
            <th style={headerStyle}>City</th>
            <th style={headerStyle}>Employee ID</th>
            <th style={headerStyle}>Joining Date</th>
            <th style={headerStyle}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr
              key={index}
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #eee"
              }}
              onClick={() =>
                navigate(`/details/${index}`, { state: emp })
              }>
              <td style={cellStyle}>{emp[0]}</td>
              <td style={cellStyle}>{emp[1]}</td>
              <td style={cellStyle}>{emp[2]}</td>
              <td style={cellStyle}>{emp[3]}</td>
              <td style={cellStyle}>{emp[4]}</td>
              <td style={cellStyle}>{emp[5]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

}
const headerStyle = {
  padding: "14px 18px",
  fontWeight: "600",
  textAlign: "center",
};

const cellStyle = {
  padding: "14px 18px",
  textAlign: "center",
};