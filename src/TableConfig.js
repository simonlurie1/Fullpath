export const columns = [
    {
        title: 'Date',
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: (text) => text ? new Date(text).toLocaleDateString() : 'N\\A',
    },
    { title: 'Impressions', dataIndex: 'impressions', key: 'impressions',
        render: (text) => text ? text.toLocaleString() : 'N\\A' },
    { title: 'Clicks', dataIndex: 'clicks', key: 'clicks',
        render: (text) => text ? text.toLocaleString() : 'N\\A' },
    {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost',
        render: (text) => (text ?? '0') + '$',
    },
    { title: 'Conversions', dataIndex: 'conversions', key: 'conversions',
        render: (text) => text ? text.toLocaleString() : 'N\\A' },
];
