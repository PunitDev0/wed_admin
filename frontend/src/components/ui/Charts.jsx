import React, { useState } from 'react';
import Chart from 'react-apexcharts'; // Correct wrapper for React integration

function Charts() {
  const [state] = useState({
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
        width={500}
      />
    </div>
  );
}

export default Charts;
