import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import './ElectionChart.css';

const data = [
  {
    name: 'Voter Registration',
    duration: 30,
    description: 'Registration window',
  },
  {
    name: 'Candidate Research',
    duration: 60,
    description: 'Time spent researching',
  },
  {
    name: 'Campaigning',
    duration: 90,
    description: 'Active campaign period',
  },
  {
    name: 'Early Voting',
    duration: 14,
    description: 'Early voting window',
  },
  {
    name: 'Election Day',
    duration: 1,
    description: 'The final day to cast votes',
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`${payload[0].payload.description}`}</p>
        <p className="desc">{`Duration: ${payload[0].value} Days`}</p>
      </div>
    );
  }

  return null;
};

const ElectionChart = () => {
  return (
    <div className="chart-container glass-panel">
      <div className="chart-header">
        <BarChart3 className="chart-icon" size={32} />
        <h2>Election Phase Durations</h2>
      </div>
      <p className="chart-subtitle">Estimated duration (in days) for each phase of the election process.</p>
      
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#94a3b8" 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis 
              stroke="#94a3b8" 
              tick={{ fill: '#94a3b8' }}
              label={{ value: 'Duration (Days)', angle: -90, position: 'insideLeft', fill: '#94a3b8', dy: 50 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            <Bar dataKey="duration" radius={[6, 6, 0, 0]} animationDuration={1500}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#10b981' : '#3b82f6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ElectionChart;
