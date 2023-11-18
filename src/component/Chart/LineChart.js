import React, {} from 'react';
import { Line } from 'react-chartjs-2';

const BarChart = ({data}) => {
    return(
        <div>
            <Line data={data}/>
        </div>
    )
}

export default BarChart;