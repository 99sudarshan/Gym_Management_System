import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { getDayFromDate } from "../../utils";
import {
  retrieveChartData,
  retrieveMonthlyChartData,
} from "../../../api/services/members/membersChartApiService";

const Charts = () => {
  const [monthlyChart, setMonthlyChart] = useState([]);
  const [chartData, setChartData] = useState([]);

  const getAllChartData = async () => {
    const allChartData = await retrieveChartData();
    const allMonthlyChartData = await retrieveMonthlyChartData();
    if (allMonthlyChartData) setMonthlyChart(allMonthlyChartData);
    if (allChartData) setChartData(getDayFromDate(allChartData));
  };

  useEffect(() => {
    getAllChartData();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="bg-slate-100 px-2 w-full sm:w-96 xl:w-[31rem]">
        <h3 className=" py-3 font-bold text-sm text-gray-700">Weekly Report</h3>
        <ResponsiveContainer width="100%" aspect={1.4}>
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 5,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              style={{ fontSize: "0.8rem", margin: "0.2rem" }}
            />
            <YAxis axisLine={false} />
            <Tooltip contentStyle={{ backgroundColor: "#73f00c" }} />
            <Legend />
            <Line
              type="monotone"
              isAnimationActive={true}
              dataKey="guest"
              stroke="#F76F14"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              isAnimationActive={true}
              dataKey="valid"
              stroke="#9a09ed"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-slate-100 px-2 w-full sm:w-96 xl:w-[31rem]">
        <h3 className=" py-3 font-bold text-sm text-gray-700">
          Monthly Report
        </h3>
        <ResponsiveContainer width="100%" aspect={1.4}>
          <BarChart
            data={monthlyChart}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              style={{ fontSize: "0.9rem", margin: "0.2rem" }}
            />
            <YAxis axisLine={false} />
            <Tooltip contentStyle={{ backgroundColor: "#73f00c" }} />
            <Legend />
            <Bar dataKey="guest" fill="#F76F14" isAnimationActive={true} />
            <Bar dataKey="valid" fill="#9a09ed" isAnimationActive={true} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Charts;
