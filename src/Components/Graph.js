import React from 'react';

import '../Styles/ComponentsStyle.css'
import Chart from 'chart.js'

/* renders graphs with gievn data */
export default class Graph extends React.Component {
    componentDidMount(){
        /* 48 weeks in a year */
        let xAxis = []
        for (let i =0 ; i<= 48; i++){
            xAxis[i] = i;
        }
        let dataWholeSales = this.props.data.map((key, i)=>{
            return key.retailerMargin
        })

        /* chart options */
        const options = {
            scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Weeks from ' + this.props.data[0].weekEnding + ' to ' + this.props.data[this.props.data.length - 1].weekEnding
                  }
                }]
              },
            responsive: true, 
            maintainAspectRatio: true, 
            events: ['mousemove'],
        }
        /* chart */ 
        const myc = document.getElementById("chart1").getContext('2d');
            new Chart( myc, {
                type: 'line',
                options,
                data: {
                    labels: xAxis,
                    datasets: [
                        {
                            borderColor:'#367dcf',
                            data: dataWholeSales,
                            fill : false, 
                            label: 'Wholesale Sales ',  
                        }]
                },
            });
    }
    render(){
        return (
            <div>
                <canvas id="chart1"></canvas>
            </div>
        )};
}
