import { useEffect, useState } from "react";
import axios from "axios";
import { SubjectChart } from "./SubjectChart";
import { TopGroupAList } from "./TopGroupAlist";
export const Report = () => {
  const [chartData, setChartData] = useState([]);
  const [topGroupA, setTopGroupA] = useState([]);

  useEffect(() => {
    // Fetch chart data
    axios.get("https://hoangphucbackend-production.up.railway.app/api/report/")
      .then((res) => {
        setChartData(res.data); 
    })
    .catch((err) => console.error("Chart error:", err));

    // Fetch top 10 students
    axios.get("https://hoangphucbackend-production.up.railway.app/api/top10/")
      .then((res) => setTopGroupA(res.data))
      .catch((err) => console.error("Top 10 error:", err));
  }, []);
  return (
    <section
      id="report"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Feature Report</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(chartData).map(([subject, data]) => (
            <SubjectChart key={subject} subject={subject} data={data} />
          ))}
        </div>

        <TopGroupAList students={topGroupA} />
      </div>
    </section>
  );
};
