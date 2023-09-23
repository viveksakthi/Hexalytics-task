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
); // Inbuild in chart.js

// Chart options
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' ,
        align: 'start',
      },
      datalabels: {
        display: false
      },
    },
  }; 
  
  const labels = ['Emp 1', 'Emp 2', 'Emp 3', 'Emp 4', 'Emp 5', 'Emp 6'];
  
  // Chart data
  const data = {    
    daily: {
        labels,
        datasets: [
            {
              label: 'Assigned',
              data: labels.map(() => Math.floor(Math.random() * 30)),
              backgroundColor: '#CDE5CD',
            },
            {
              label: 'Completed',
              data: labels.map(() =>  Math.floor(Math.random() * 30)),
              backgroundColor: '#019049',
            },
            {
              label: 'Escalated',
              data: labels.map(() =>  Math.floor(Math.random() * 30)),
              backgroundColor: '#FFA600',
            },
          ],
    },
    weekly: {
        labels,
        datasets: [
            {
              label: 'Assigned',
              data: labels.map(() => Math.floor(Math.random() * 30)),
              backgroundColor: '#CDE5CD',
            },
            {
              label: 'Completed',
              data: labels.map(() =>  Math.floor(Math.random() * 30)),
              backgroundColor: '#019049',
            },
            {
              label: 'Escalated',
              data: labels.map(() =>  Math.floor(Math.random() * 30)),
              backgroundColor: '#FFA600',
            },
          ],
    },
    monthly: {
        labels,
        datasets: [
            {
              label: 'Assigned',
              data: labels.map(() => Math.floor(Math.random() * 30)),
              backgroundColor: '#CDE5CD',
            },
            {
              label: 'Completed',
              data: labels.map(() =>  Math.floor(Math.random() * 30)),
              backgroundColor: '#019049',
            },
            {
              label: 'Escalated',
              data: labels.map(() =>  Math.floor(Math.random() * 30)),
              backgroundColor: '#FFA600',
            },
          ],
    }
  }; 

  const PerformanceChart = ({ period }) => {

    const res = data[period];

    return(
        <div>
            <Bar options={options} data={res} />
        </div>
    );
  }
  export default PerformanceChart;