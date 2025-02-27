"use client"

import React, { useState } from 'react';
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadialChart = () => {

    const [state, setState] = React.useState({
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    });


    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
                height={350}
            />
        </div>
    );
};

export default RadialChart;