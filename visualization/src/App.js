import React, { Component } from 'react';
import echarts from 'echarts';
import tracedData from './trace.json';

import './App.css';

class App extends Component {

  componentDidMount() {
    // construct data
    const readyToRenderData = tracedData.map(item => {
      if (item.name === 'weiwei') {
        return [item.left, item.bottom];
      }
    });

    // construct yvshenmde
    const readyToRenderDataTwo = tracedData.map(item => {
      if (item.name === 'yvshenmde') {
        return [item.left, item.bottom];
      }
    });

    console.log('readyToRenderData', readyToRenderData);

    this.myChart = echarts.init(document.getElementById('renderChart'));

    this.option = {
        xAxis: {},
        yAxis: {},
        dataZoom: [
            {
                type: 'slider',
                xAxisIndex: 0,
                filterMode: 'empty'
            },
            {
                type: 'slider',
                yAxisIndex: 0,
                filterMode: 'empty'
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                filterMode: 'empty'
            },
            {
                type: 'inside',
                yAxisIndex: 0,
                filterMode: 'empty'
            }
        ],
        series: [{
            symbolSize: 20,
            data: readyToRenderData,
            type: 'scatter'
        }, {
          symbolSize: 20,
          data: readyToRenderDataTwo,
          type: 'scatter'
        }]
    };
  
   this.myChart.setOption(this.option);
  }

  render() {
    return (
      <div className="App">
        <div id="renderChart"></div>
      </div>
    );
  }
}

export default App;
