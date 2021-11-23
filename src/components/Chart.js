import Chart from 'react-apexcharts'

function Charts() {
    var options = {
        series: [{
            name: 'series1',
            data: [33, 31, 28, 26, 24, 23, 27]
        }],
        chart: {
            height: 50,
            type: 'area',
            zoom: {
                enabled: false,
            },
            toolbar: {
                tools:{
                    download: false,
                }
            }
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'middle',
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                "2018-09-19T00:00:00.000Z", 
                "2018-09-19T01:30:00.000Z", 
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z", 
                "2018-09-19T05:30:00.000Z", 
                "2018-09-19T06:30:00.000Z"
            ]
        },
        tooltip: {
            enabled: false,
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },grid: {
            yaxis: {
                lines: {
                    show: false
                }
            },   
        },yaxis:{
            show: false,
        }
    }
    return(
        <>
        <Chart
            options={options}
            series={options.series}
            type="area"
            width="100%"
            height="200px"
        />
        </>
    );
}

export default Charts;