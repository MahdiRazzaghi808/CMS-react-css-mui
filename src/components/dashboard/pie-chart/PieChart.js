import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            label: '# of Votes',
            data: [70, 20, 10],
            backgroundColor: [
                '#285fd3',
                '#ff8b26',
                '#ffc533',

            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 4,
        },
    ],
};

export default function pieChart() {
    return <Pie data={data} />;
}
