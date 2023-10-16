import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale
)

function SpiderChart(props) {

    const data = {
        labels: ['Python', 'SQL', 'Java', 'Spark', 'JavaScript'],
        datasets: [{
            label: 'Skills',
            data: [85, 75, 70, 90, 60],
            backgroundColor: 'rgba(92, 128, 188, 0.2)',
            borderColor: 'rgba(92, 128, 188, 1)',
            borderWidth: 1,
        }]
    }

    const options = {
        scale: {
            ticks: { beginAtZero: true },
            grid: {
                circular: true
            }
        },
        ...props.options1
    }

    return (
        <div className="spider-chart-container">
            <Radar data={props.data1 || data} options={options} />
        </div>
    );
}

export default SpiderChart;
