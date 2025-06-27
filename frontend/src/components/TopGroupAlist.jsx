export const TopGroupAList = ({ students }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-full overflow-x-auto">
      <h3 className="text-xl font-semibold mb-2">Top 10 Group A Students</h3>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">SBD</th>
            <th className="px-4 py-2 border">Toán</th>
            <th className="px-4 py-2 border">Vật Lý</th>
            <th className="px-4 py-2 border">Hóa Học</th>
            <th className="px-4 py-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{s.sbd}</td>
              <td className="px-4 py-2 border">{s.toan}</td>
              <td className="px-4 py-2 border">{s.vat_li}</td>
              <td className="px-4 py-2 border">{s.hoa_hoc}</td>
              <td className="px-4 py-2 border">{s.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
