import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // For display labels on chart

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);// Inbuild in chart.js

// Chart options
const options = {
    responsive: true,      
    plugins: {
      legend: {
        position: 'bottom' ,
        align: 'start',
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        formatter: Math.round,
        font: {
          weight: 'normal',
          size: 10
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
};

const labels = [['Inbound', 'Details'], ['DO', 'Collection'], ['BOE', 'Filling'], ['Shipment', 'Clearance'], ['Shipment', 'Port'], ['GRN', 'Created'], ['Invoice', 'Docs', 'Submitted']];

// Chart data
const data = {
  daily: {
    labels,
    datasets: [
      {
        label: 'Pending Job',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        backgroundColor: '#019049',
        datalabels: {
          color: '#fff'
        }
      },
      {
        label: 'Completed Within SLA',
        data: labels.map(() => Math.floor(Math.random() * 12)),
        backgroundColor: '#CDE5CD',
      },
    ],
  },
  weekly: {
    labels,
    datasets: [
      {
        label: 'Pending Job',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        backgroundColor: '#019049',
        datalabels: {
          color: '#fff'
        }
      },
      {
        label: 'Completed Within SLA',
        data: labels.map(() => Math.floor(Math.random() * 12)),
        backgroundColor: '#CDE5CD',
      },
    ],
  },
  monthly: {
    labels,
    datasets: [
      {
        label: 'Pending Job',
        data: labels.map(() => Math.floor(Math.random() * 5)),
        backgroundColor: '#019049',
        datalabels: {
          color: '#fff'
        }
      },
      {
        label: 'Completed Within SLA',
        data: labels.map(() => Math.floor(Math.random() * 12)),
        backgroundColor: '#CDE5CD',
      },
    ],
  },
  
};

const PendingChart = ({ period }) => {

  const res = data[period];

    return(
        <div>
            <Bar options={options} data={res} />
        </div>
    );
  }
  export default PendingChart;