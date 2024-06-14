
import { useDispatch } from "react-redux";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { IoHomeOutline } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { FaEllipsis } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Sidebar from "./Sidebar";
import Axios  from "axios";
const CustomerReport = () => {
  // const dispatch = useDispatch();
  // const [showSuccess, setShowSuccess] = useState(true);
  // const [report, setReport] = useState(null);
  const [data, setData] = useState([]);
  

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const [totalusers, setUserstotal] = useState(0);
  // const [selectedRecord, setSelectedRecord] = useState(null);

  // grap user list
  useEffect(() => {
    fetchUsersTotal();
  }, []);

// fetching employee list 
  const fetchUsersTotal = () => {
    Axios.get('http://localhost:3001/totalusers')
      .then((response) => {
        setUserstotal(response.data.total_users);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  const data1 = [
    { name: 'Total user', value: totalusers },
  
  ];

  return (
    <>
       <MyNavbar/>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">

      <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
        <div className="flex items-center justify-between">
          <h1 className="text-[#293A77] text-[28px]  font-normal cursor-pointer">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">

          {/* <Link to={"/pages/detailreport"}> */}


            <div className="h-[100px] rounded-[8px] bg-[#293A77] border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
              <div>
                <h3 className="text-white text-[16px]  font-bold text-center">Total Users</h3>
                <h5 className="text-white   text-[#5a5c69] mt-[5px]  text-center">{totalusers}</h5>
              </div>
              {/* <IoHomeOutline /> */}
            </div>
          {/* </Link> */}
          
          <div className="h-[100px] rounded-[8px] bg-[#293A77] border-l-[4px] border-[#293A77] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
            {/* <Link to={"/pages/dailyreportdetail"}style={{ textDecoration: 'none' }}> */}
              <div>
                <h3 className="text-white text-[16px]  font-bold text-center">Daily Customer </h3>
                <h5 className="text-white   text-[#5a5c69] mt-[5px]  text-center">20</h5>
              </div>

              {/* <IoHomeOutline /> */}
            {/* </Link> */}

          </div>

          <div className="h-[100px] rounded-[8px] bg-[#293A77] border-l-[4px] border-[#293A77] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
            {/* <Link to={"/pages/monthlyreportdetail"}style={{ textDecoration: 'none' }}> */}
              <div>
                <h5 className="text-white text-[16px]  font-bold text-center">Monthly Customer</h5>
                <h5 className="text-white   text-[#5a5c69] mt-[5px] text-center">40</h5>

              </div>

              {/* <IoHomeOutline /> */}
            {/* </Link> */}

          </div>

          <div className="h-[100px] rounded-[8px] bg-[#293A77] border-l-[4px] border-[#293A77] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
            {/* <Link to={"/pages/yearlyreportdetail"}style={{ textDecoration: 'none' }}> */}
              <div>
                <h2 className="text-white text-[16px]  font-bold text-center">Yearly Customer</h2>
                <h5 className="text-white  text-[#5a5c69] mt-[5px] text-center">20</h5>
              </div>

              {/* <IoHomeOutline /> */}
            {/* </Link> */}

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[25px] pb-[15px]">
          

          <div className="h-[400px] rounded-[8px] bg-white border-l-[4px] border-[#cbcbce] p-4">
            <h1 className="text-[#293A77] text-[20px] leading-[24px] font-bold mb-[10px]">Customer Overview</h1>
            <ResponsiveContainer width="100%" height="100%">
  <LineChart
    width={500}
    height={300}
    data={data1}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="total_users" stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
</ResponsiveContainer>
          </div>
          <div className="h-[400px] rounded-[8px] bg-white border-l-[4px] border-[#293A77]p-4">
            <h1 className="text-[#293A77] text-[20px] leading-[24px] font-bold mb-[10px]">user Favorite Movies Overview</h1>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data1}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
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

export default CustomerReport;