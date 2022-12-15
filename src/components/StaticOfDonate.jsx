import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
)
const data = {
    labels: [
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
    ],
    datasets: [
        {
            label: "XAYRIYA QILINGAN MABLAG’",
            data: [1500000, 1690000, 2000000, 2310000, 1700000, 1500000, 5320000],
            backgroundColor: '#3E975B',
            border: 0,
            outline: 'none',
            borderRadius: '20px'
        },
        {
            label: 'ISHLATILGAN MAGLAG’',
            data: [1200000, 1360000, 1800000, 2220000, 1570000, 1200000, 5320000],
            backgroundColor: '#BF504C',
            border: 0,
            outline: 'none',
            borderRadius: '20px'
        },
    ]
}

const options = {
    plugins: {
        legend: true
    },
    scales: {
        y: {
            // min: 3,
            // max: 6
        }
    }
}

const StaticOfDonate = () => {
    return (
        <div className="cards">
            <h1>Xayriya qilingan mablag’ statistikasi (so'mda)</h1>

            <Bar
                data={data}
                options={options}
            ></Bar>

        </div>
    )
}

export default StaticOfDonate