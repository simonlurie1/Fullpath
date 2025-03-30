import React, { useEffect, useState } from 'react';
import { Card, Table } from 'antd';
import SampleJson from './sample.json';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (SampleJson.data && Array.isArray(SampleJson.data)) {
      setData(SampleJson.data);
    }
  }, []);


  const columns = [
    {
      title: 'Date',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text) => text ? new Date(text).toLocaleString() : 'N\A',
    },
    { title: 'Impressions', dataIndex: 'impressions', key: 'impressions',
      render: (text) => text ? text.toLocaleString() : 'N\A' },
    { title: 'Clicks', dataIndex: 'clicks', key: 'clicks',
      render: (text) => text ? text.toLocaleString() : 'N\A' },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
      render: (text) => (text ?? '0') + '$',
    },
    { title: 'Conversions', dataIndex: 'conversions', key: 'conversions',
      render: (text) => text ? text.toLocaleString() : 'N\A' },
  ];

  return (
      <div style={{ padding: 20 }}>
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
