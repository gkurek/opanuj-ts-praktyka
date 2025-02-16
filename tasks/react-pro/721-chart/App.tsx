import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import frameworks from './frameworks.json';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <BarChart
        width={800}
        height={400}
        data={frameworks}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="would_use_again" fill="#82ca9d" name="Would use again" />
        <Bar dataKey="would_not_use_again" fill="#ff8042" name="Would not use again" />
        <Bar dataKey="would_like_to_learn" fill="#8884d8" name="Would like to learn" />
        <Bar dataKey="not_interested" fill="#d88884" name="Not interested" />
        <Bar dataKey="never_heard" fill="#888888" name="Never heard of it" />
      </BarChart>
    </div>
  );
}
