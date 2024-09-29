import ReactApexChart  from 'react-apexcharts'

interface Options {
    chart:{
        background: string,
        padding: number,
        height: number,
        type: string,
        zoom: {
            enabled: boolean
        }
    },
    grid: {
        show: boolean
    },
    dataLabels: {
        enabled: boolean
    },
    stroke: {
        width: number[],
        curve: string
    },
    title: {
        align: string
    },
    xaxis: {
        categories: string[],
        labels: {
            style: {
                color: string[],
                fontSize: string,
            }
        }
    },
    yaxis: {
        labels: {
            formatter: (value: number) => string; 
            style: {
                fontSize: string,
            }
        };
    };
}

interface Series {
    name: string,
    data: number[]
}

type ChartType = 
    | 'line' 
    | 'bar' 
    | 'area' 
    | 'pie' 
    | 'donut' 
    | 'radialBar' 
    | 'scatter' 
    | 'bubble' 
    | 'heatmap' 
    | 'candlestick' 
    | 'boxPlot' 
    | 'radar' 
    | 'polarArea' 
    | 'rangeBar' 
    | 'rangeArea' 
    | 'treemap';

interface Props {
    options: Options,
    series: Series[], 
    type?: ChartType
    height: string | number
    width: number
}

export const Chart = ({ options, series, type, height }:Props) => {
    return (
        <ReactApexChart 
        //@ts-ignore
            options={options} 
            series={series} 
            type={type} 
            height={height}
        />
    )
}