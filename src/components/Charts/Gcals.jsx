import React from 'react';
import { BarChart, Bar } from 'recharts';

const Gcals = ({ data }) => {
  return (
    <BarChart width={150} height={40} data={data}>
      <Bar dataKey="total" fill="#8884d8" />
      <Bar dataKey="organized" fill="#3884d8" />
    </BarChart>
  );
};

export default Gcals;
