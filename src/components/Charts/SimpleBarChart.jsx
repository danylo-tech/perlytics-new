import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleBarChart = props => {
  return (
    <BarChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={props.xaxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={props.col} fill="#8884d8" />
    </BarChart>
  );
};

export default SimpleBarChart;
