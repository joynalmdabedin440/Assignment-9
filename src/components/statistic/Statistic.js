import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistic = ({ quz }) => {
    const data = [quz];
    console.log(data);

    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="name"
                    stroke="#8884d8"
                    strokeDasharray="5 5"
                />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#82ca9d"
                    strokeDasharray="3 4 5 2"
                />
            </LineChart>
        </div>
    );
};

export default Statistic;