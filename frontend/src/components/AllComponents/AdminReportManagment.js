
import { useDispatch } from "react-redux";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { IoHomeOutline } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { FaEllipsis } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AdminReportManagement = () => {
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(true);
  const [report, setReport] = useState(null);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

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

  useEffect(() => {
    dispatch(getAdminReport()).then((action) => {
      const data1 = [
        { name: 'Total SMS', value: action.payload.total_sms },
        { name: 'Daily Sent SMS', value: action.payload.daily_sent_sms },
        { name: 'Monthly Sent SMS', value: action.payload.monthly_sent_sms },
        { name: 'Yearly Sent SMS', value: action.payload.yearly_sent_sms },
      ];
      setData1(data1);
      const data = [
        {
          name: 'Total',
          customer: action.payload.total_new
        },
        {
          name: 'Daily',
          customer: action.payload.daily_new
        },
        {
          name: 'Monthly',
          customer: action.payload.monthly_new
        },
        {
          name: 'Yearly',
          customer: action.payload.yearly_new
        }
      ];
      setData(data);
      setReport(action.payload);
    });
  }, [dispatch]);

  return (
    <>
      <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
        <div className="flex items-center justify-between">
          <h1 className="text-[#5a5c69] text-[28px]  font-normal cursor-pointer">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">

          {/* <Link to={"/pages/detailreport"}> */}


            <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
              <div>
                <h1 className="text-[#B589DF] text-[18px]  font-bold text-center">Total Customer</h1>
                <h1 className="text-[20px]  font-bold text-[#5a5c69] mt-[5px]  text-center">{report?.total_new || 0}</h1>
              </div>
              {/* <IoHomeOutline /> */}
            </div>
          {/* </Link> */}
          
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
            {/* <Link to={"/pages/dailyreportdetail"}style={{ textDecoration: 'none' }}> */}
              <div>
                <h1 className="text-[#89dfa3] text-[18px]  font-bold text-center">Daily Customer </h1>
                <h1 className="text-[20px]  font-bold text-[#5a5c69] mt-[5px]  text-center">{report?.daily_new || 0}</h1>
              </div>

              {/* <IoHomeOutline /> */}
            {/* </Link> */}

          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
            {/* <Link to={"/pages/monthlyreportdetail"}style={{ textDecoration: 'none' }}> */}
              <div>
                <h2 className="text-[#FFBB28] text-[18px]  font-bold text-center">Monthly Customer</h2>
                <h1 className="text-[20px]  font-bold text-[#5a5c69] mt-[5px] text-center">{report?.monthly_new || 0}</h1>

              </div>

              {/* <IoHomeOutline /> */}
            {/* </Link> */}

          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-150 ease-out">
            {/* <Link to={"/pages/yearlyreportdetail"}style={{ textDecoration: 'none' }}> */}
              <div>
                <h2 className="text-[#FF8042] text-[18px]  font-bold text-center">Yearly Customer</h2>
                <h1 className="text-[20px]  font-bold text-[#5a5c69] mt-[5px] text-center">{report?.yearly_new || 0}</h1>
              </div>

              {/* <IoHomeOutline /> */}
            {/* </Link> */}

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[25px] pb-[15px]">
          

          <div className="h-[400px] rounded-[8px] bg-white border-l-[4px] border-[#cbcbce] p-4">
            <h1 className="text-[#5a5c69] text-[20px] leading-[24px] font-bold mb-[10px]">Customer Overview</h1>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
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
                <Line type="monotone" dataKey="customer" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="h-[400px] rounded-[8px] bg-white border-l-[4px] border-[#9d9fa5] p-4">
            <h1 className="text-[#5a5c69] text-[20px] leading-[24px] font-bold mb-[10px]">SMS Overview</h1>
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
    </>
  );
};

export default AdminReportManagement;