import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";

export const SubjectChart = ({ subject, data }) => {
  const subjectMap = {
    toan: "Toán",
    ngu_van: "Ngữ Văn",
    ngoai_ngu: "Ngoại Ngữ",
    vat_li: "Vật Lý",
    hoa_hoc: "Hóa Học",
    sinh_hoc: "Sinh Học",
    lich_su: "Lịch Sử",
    dia_li: "Địa Lý",
    gdcd: "Giáo Dục Công Dân",
  };

  const chartData = [
    { range: ">=8", count: data[">=8"] },
    { range: "6-8", count: data["6-8"] },
    { range: "4-6", count: data["4-6"] },
    { range: "<4", count: data["<4"] },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full mx-auto">
      <h3 className="text-center font-semibold mb-2">
        {subjectMap[subject] || subject}
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
