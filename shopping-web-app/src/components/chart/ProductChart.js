import React, { useContext , useEffect} from 'react'
import { useState } from 'react';
import Chart from "react-apexcharts";
import { ProductStoreContext } from '../productStoreContext/ProductStoreContext'
import './ProductChart.css';

export default function ProductChart() {
  const [products] = useContext(ProductStoreContext)

  const getBarSeries = () => {
    let data = [];
    products && products.map(item => {
      data.push(item.stock)
    })
    return [
      {
        name: "",
        data: data
      }
    ]
  }

  const getDonutSeries = () => {
    let data = {};
    products && products.map(item => {
      if(data[item.brandName]){
        data[item.brandName] = data[item.brandName] + 1
      } else {
        data[item.brandName] = 1
      }
    })

    let series = [];
    Object.keys(data).forEach(item => {
      series.push(data[item])
    })

    return series;
  }

  const getDonutOptions = () => {
    let data = [];
    products && products.map(item => {
      data.push(item.stock)
    })
    let dataLabels = [];
    products && products.map(item => {
      if(!dataLabels.includes(item.brandName)){
        dataLabels.push(item.brandName)
      }
    })
    return {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: dataLabels,

      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      title: {
        text: 'Product Count For Each Brand'
      },
    }
  }

  const getBarOptions = () => {
    let categories = [];
    products && products.map(item => {
      categories.push(item.productName)
    })
    return {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: categories
      },
      title: {
        text: 'Stock Count For Each Product'
      }
    }
  }





  return (
    <div  className="row">
      <div id='chartContainer'  className=" col s12 m6 l6">
        <div style={{margin : '0.5rem'}} className="card">
        <Chart
          options={getBarOptions()}
          series={getBarSeries()}
          type="bar"
          width="100%"
        />
        </div>
        
      </div>
      <div id='chartContainer'   className=" col s12 m6 l6">
        <div style={{margin : '0.5rem'}} className="card">
        <Chart
          options={getDonutOptions()}
          series={getDonutSeries()}
          type="donut"
          width={500}
        />
        </div>
        
      </div>
    </div>
  )
}