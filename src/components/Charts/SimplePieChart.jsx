import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const SimplePieChart = props => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="attendees_bkts"
        isAnimationActive
        data={props.data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default SimplePieChart;
