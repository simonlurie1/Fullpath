import React, { useEffect, useState } from 'react';
import { Card, Table } from 'antd';
import SampleJson from './sample.json';
import { columns } from './TableConfig';
import { getLineChartConfig } from './LineChartConfig';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend,
);


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (SampleJson.data && Array.isArray(SampleJson.data)) {
      setData(SampleJson.data);
    }
  }, []);

  return (
      <div style={{ padding: 20 }}>
        <Card title="Metrics Over Time"  style={{ maxWidth: 900 }}>
              <Line data={getLineChartConfig(data)} />
        </Card>
        <Card title="Detailed Metrics" style={{ marginTop: 20 }}>
          <Table
              dataSource={data}
              columns={columns}
              rowKey="timestamp"
              pagination={{ pageSize: 10 }}
          />
        </Card>
      </div>
  );
};

export default App;
