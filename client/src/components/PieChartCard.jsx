import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function PieChartCard({ leads }) {
  const data = [
    {
      name: "New",
      value: leads.filter(
        (lead) => lead.status === "New"
      ).length,
    },
    {
      name: "Contacted",
      value: leads.filter(
        (lead) => lead.status === "Contacted"
      ).length,
    },
    {
      name: "Qualified",
      value: leads.filter(
        (lead) => lead.status === "Qualified"
      ).length,
    },
    {
      name: "Converted",
      value: leads.filter(
        (lead) => lead.status === "Converted"
      ).length,
    },
    {
      name: "Lost",
      value: leads.filter(
        (lead) => lead.status === "Lost"
      ).length,
    },
  ];

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#8B5CF6",
    "#EF4444",
  ];

  return (
    <div className="bg-slate-900 p-6 rounded-xl mt-8">
      <h2 className="text-xl font-bold mb-4">
        Lead Status Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartCard;