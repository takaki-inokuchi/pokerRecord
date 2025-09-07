import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const PokerGraphData = ({ records }) => {
  const data = records.map((record, index) => ({
    name: `${index + 1}回`,
    takaki: record.takaki,
    takashi: record.takashi,
    cope: record.cope,
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="takaki" stroke="#1a12bbff" />
          <Line type="linear" dataKey="takashi" stroke="#ff0000ff" />
          <Line type="linear" dataKey="cope" stroke="#fca800ff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
