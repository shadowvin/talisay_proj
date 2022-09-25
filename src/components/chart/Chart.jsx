import "./chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    uv: 4000,
    total: 20,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    total: 50,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    total: 30,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    total: 80,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    total: 100,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    total: 120,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    total: 140,
    amt: 2100,
  },
];


const Chart = () => {
  return (
    <div className="chart"> 
     <div className="title"> Visitors Overview </div>
    <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#1CA7EC" activeDot={{ r: 8 }} />
         
        </LineChart>
      </ResponsiveContainer>
     </div> 
  )
}
export default Chart;
