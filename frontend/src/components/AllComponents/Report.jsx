
import { useDispatch } from "react-redux";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { IoHomeOutline } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { FaEllipsis } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Sidebar from "./Sidebar";
import Axios from "axios";
const Report = () => {


  const [genreData, setGenreData] = useState([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9b59b6', '#e74c3c', '#34495e', '#2980b9', '#f1c40f', '#7f8c8d'];
  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const response = await Axios.get('http://localhost:8080/genre-data');
        setGenreData(response.data);
      } catch (error) {
        console.error('Error fetching genre data:', error);
      }
    };

    fetchGenreData();
  }, []);


  // Line Chart Data
  const lineChartData = genreData.map((item) => ({
    genre: item.genre,
    count: item.count,
  }));

 // Pie Chart Data
 const pieChartData = genreData.map((item, index) => ({
  name: item.genre,
  value: item.count,
  color: COLORS[index % COLORS.length],
}));

  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto ">

          <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
            <div className="flex items-center justify-between">
              <h1 className="text-[#293A77]  text-[28px]  font-normal cursor-pointer">Dashboard</h1>
            </div>

            <div className=" flex-cols-1 flex overflow-x-auto flex-nowrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-[25px] pb-[15px]">
              <div className="h-[100px]  rounded-[8px] bg-[#293A77] border-l-[4px] border-[#4E73DF] flex flex-col  items-center justify-center px-10 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
                <div>
                  <h3 className="text-white text-[18px] font-bold">TotalGenres</h3>
                </div>
                <div>
                  <h5 className="text-white font-bold">{genreData.reduce((total, item) => total + item.count, 0)}</h5>
                </div>
              </div>
              {/* <Link to={"/pages/detailreport"}> */}

              {genreData.map(({ genre, count }, index) => (
                <div
                  key={genre || `empty-card-${index}`}
                  className={`h-[100px]  rounded-[8px] bg-[#293A77] border-l-[4px] border-[#4E73DF] flex  items-center justify-between px-10 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out ${genre ? '' : 'opacity-50 cursor-not-allowed'
                    }`}
                >
                  <div>
                    <h3 className="text-white text-[18px] font-bold text-center">{genre || 'No Genre'}</h3>
                    <h5 className="text-white font-bold  mt-[5px] text-center">{count}</h5>
                  </div>
                </div>
              ))}

            </div>
{/* /Cahrts are avialabe here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[25px] pb-[15px] h-[90%]">

              <div className="h-[300px] rounded-[8px]  border-l-[4px] border-[#293A77]  p-4">
                <h1 className="text-[#293A77]  text-[20px] leading-[24px] font-bold mb-[10px]">Movies Overview</h1>
                <ResponsiveContainer width="90%" height="90%">
                  <LineChart width={600} height={400} data={lineChartData}>
                    <XAxis dataKey="genre" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="h-[300px] rounded-[8px] bg-white border-l-[4px] border-[#293A77]  p-4">
                <h1 className="text-[#293A77] text-[20px] leading-[24px] font-bold mb-[10px]">Movies Overview</h1>
                <ResponsiveContainer width="100%" height="100%" >
                  <PieChart width={400} height={400}>
                    <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
