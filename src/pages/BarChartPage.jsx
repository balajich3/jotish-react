import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
export default function BarChartPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try{
      const response = await axios.post(
        "https://backend.jotish.in/backend_dev/gettabledata.php",
        {
          username: "test",
          password: "123456",
        }
      );
      const employees = response.data.TABLE_DATA.data;
      const firstTen = employees.slice(0, 10).map((emp) => ({
        name: emp[0],
        salary: parseInt(emp[5].replace(/[$,]/g, "")),
      }));
      setData(firstTen);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="page-container">
      <h2>Salary Chart (First 10 Employees)</h2>
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          marginBottom: "20px",
        }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="salary" fill="#8B5E3C" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <button
        onClick={() => navigate("/list")}
        style={{ backgroundColor: "#007BFF", color: "white" }}>
        Back to Employee List
      </button>
    </div>
  );
}