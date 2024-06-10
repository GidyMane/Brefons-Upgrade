"use client"

import styles from './chart.module.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: "JAN", activities: 100 },
  { month: "FEB", activities: 200 },
  { month: "MAR", activities: 150 },
  { month: "APR", activities: 300 },
  { month: "MAY", activities: 250 },
  { month: "JUN", activities: 400 },
  { month: "JUL", activities: 350 },
  { month: "AUG", activities: 200 },
  { month: "SEP", activities: 300 },
  { month: "OCT", activities: 250 },
  { month: "NOV", activities: 180 },
  { month: "DEC", activities: 220 }
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Monthly Activities</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis domain={[0, 400]} />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Bar dataKey="activities" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
