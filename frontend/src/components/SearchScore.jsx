import React, { useState } from "react";
import axios from "axios";

export const SearchScore = () => {
  const [regNumber, setRegNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError("");

    try {
      const response = await axios.get(`https://hoangphucbackend-production.up.railway.app/api/score/${regNumber}/`);
      setResult(response.data);
    } catch (err) {
      setError("Student not found!");
    }
  };

  return (
    <section id="searchscore" className="pt-10 px-4">
      <div className="min-h-screen bg-transparent flex flex-col items-center p-10">
        
        {/* Registration Form */}
        <div className="bg-white shadow rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-bold mb-3 text-center">User Registration</h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter registration number"
              className="border border-gray-300 px-3 py-1.5 rounded w-full text-sm"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-1.5 text-sm rounded hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Score Table */}
        <div className="bg-white shadow rounded-lg p-4 mt-4 w-full max-w-md">
          <h3 className="text-lg font-bold mb-2 text-center">Detailed Scores</h3>
          {result ? (
            <>
              <p className="text-sm text-center mb-3">
                <strong>Reg No:</strong> {result.sbd}
              </p>
              <table className="w-full text-sm border border-gray-200 text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 border-b">Subject</th>
                    <th className="px-3 py-2 border-b">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {result.scores.map((item, index) => (
                    <tr key={index}>
                      <td className="px-3 py-1.5 border-b">
                        {subjectMap[item.subject] || item.subject}
                      </td>
                      <td className="px-3 py-1.5 border-b">{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p className="text-gray-600 text-sm text-center">
              {error || "Detailed view of search scores here!"}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
