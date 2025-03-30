export const getLineChartConfig = ( data ) => {
    return {
        labels: data.map(item => item.timestamp ? new Date(item.timestamp).toLocaleDateString() : 'N\\A'),
        datasets: [
            {
                label: 'Impressions',
                data: data.map(item => item.impressions || 0),
                borderColor: 'blue',
                fill: false,
            },
            {
                label: 'Clicks',
                data: data.map(item => item.clicks || 0),
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Cost',
                data: data.map(item => item.cost || 0),
                borderColor: 'red',
                fill: false,
            },
        ],
    };
}