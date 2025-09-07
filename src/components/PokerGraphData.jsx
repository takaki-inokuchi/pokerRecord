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
  let cumTakaki = 0;
  let cumTakashi = 0;
  let cumCope = 0;

  const data = records.map((record, index) => {
    cumTakaki += Number(record.takaki);
    cumTakashi += Number(record.takashi);
    cumCope += Number(record.cope);
    return {
      name: `${index + 1}回`,
      takaki: cumTakaki,
      takashi: cumTakashi,
      cope: cumCope,
    };
  });

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="takaki" stroke="#8e44ad" />
          <Line type="linear" dataKey="takashi" stroke="#27ae60" />
          <Line type="linear" dataKey="cope" stroke="#f39c12" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
