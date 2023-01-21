console.clear;
/*
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.0/chart.js" integrity="sha512-dMZihiwDKQBWhUkLvTvGzbOGLoNdFzZhdYRCFOsIbsDQkyakukI3vjB6SpR0iUTwUK7delljKsqfFF50ZWAgwA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.0/chart.min.js" integrity="sha512-qKyIokLnyh6oSnWsc5h21uwMAQtljqMZZT17CIMXuCQNIfFSFF4tJdMOaJHL9fQdJUANid6OB6DRR0zdHrbWAw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.0/chart.umd.js" integrity="sha512-B51MzT4ksAo6Y0TcUpmvZnchoPYfIcHadIaFqV5OR5JAh6dneYAeYT1xIlaNHhhFAALd5FLDTWNt/fkxhwE/oQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.0/chart.umd.min.js" integrity="sha512-0gS26t/01v98xlf2QF4QS1k32/YHWfFs8HfBM/j7gS97Tr8WxpJqoiDND8r1HgFwGGYRs0aRt33EY8xE91ZgJw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="chart.umd.min_v4.2.0.js"></script>
  
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.0/helpers.js" integrity="sha512-vIxnRNglJBGfc2pje+iMmSKeU7kNcYUD0OkrlPyPt2R8SgWoWnkUpsGdBIZ2jktUDhDoi3/AlH/QKTi1f75RmQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.0/helpers.min.js" integrity="sha512-JG3S/EICkp8Lx9YhtIpzAVJ55WGnxT3T6bfiXYbjPRUoN9yu+ZM+wVLDsI/L2BWRiKjw/67d+/APw/CDn+Lm0Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="./helpers.min_4.2.0.js"></script>
<script async type="module">import {helpers} from "./helpers.min_4.2.0.js";counter.count();</script>  

https://cdn.jsdelivr.net/npm/chartjs-plugin-datasource-prometheus/dist/chartjs-plugin-datasource-prometheus.umd.min.js


  <script src="DateTimeAdapter/moment_v2.29.4.js"></script>
  <script src="DateTimeAdapter/moment-with-locales_v2.29.4.js"></script>
  
  <script src="DateTimeAdapter/chartjs-adapter-date-fns_v3.0.0.js"></script>
  
  
  <script src="DateTimeAdapter/luxon_v2.5.2.js"></script>
requirejs(["luxon"], function(DateTimeAdapter/luxon_v2.5.2.js) {...});


<script src="./utils.js"></script>  
<script async type="module">import {utils} from "./utils.js";counter.count();</script>  
*/
/*
Настроить опции RequireJS через метод require.config()
	baseUrl - базовый путь, где лежат все модули
	paths - псевдонимы и пути для модулей, которые находятся в других папках (не baseUrl)
	waitSeconds - таймаут, который загрузчик будет ждать скрипта
	shim - для поддержки модулей сторонних модулей описанных не через define
	map - позволяет ссылаться через алиас на разные файлы для разных сборок
	config - для дополнительных настроек, которые будут доступны в модулях
	packages - указание директорий/пакетов, для множественной загрузки модулей
	context - указание контекста(например: version1, version2)
	deps - массив зависимостей
	callback - вызовется, когда будут загружены зависимости указынные в параметре deps
	enforceDefine - true/false. вызовет ошибку, припопытке загрузки скрипта без define
	xhtml - true/false. использование createElementNS для создания скрипт тегов
	urlArgs - дополнительные параметры при запросе скрипта(удобно использовать решая вопрос кеширования)
	scriptType - тип скрипта, по умолчанию "text/javascript" (можно также "text/javascript;version=1.8")
*/
require.config({
  baseUrl: "./scripts",
  waitSeconds: 15,
/*  shim: {
    "chartjs": {
      deps: ["moment"]//chartjs после загрузки moment
    }
  },*/
  paths: {
    "DT": "DateTimeAdapter",    
    "moment": "DateTimeAdapter/moment-with-locales_v2.29.4",
    "luxon": "DateTimeAdapter/luxon.min_v2.5.2",
    "cam": "DateTimeAdapter/chartjs-adapter-moment_v1.0.1",
    "caf": "DateTimeAdapter/chartjs-adapter-date-fns_v3.0.0",
    "cal": "DateTimeAdapter/chartjs-adapter-luxon_v1.3.0",
//    "chartjs": "chart.umd.min_v4.2.0",
    "chartjs": "chart_v4.2.0",
//    "prometheus": "chartjs-plugin-datasource-prometheus.umd.min_v1.0.12",
  }
});  

var x1 = [10,60,70,80,90,100,110,120,130,140,250];
var y1 = [7,8,8,9,9,9,NaN,11,14,14,15];
const xy1 = [
        {x2: 105.0, y2: 20},
	{x2: 200.1, y2: 10},
        {x2: 205.2, y2: 30},
	{x2: 210.3, y2: 33},
        {x2: 215.4, y2: 23},
	{x2: 220.5, y2: 25},
        {x2: 255.6, y2: null},
	{x2: 260.7, y2: 23},
        {x2: 265.8, y2: 20},
	{x2: 270.9, y2: 10},
        {x2: 275.0, y2: 20}
	];

//require(["moment", "chartjs"], function(moment, Chart) {
//require(["moment", "chartjs"], function(moment, Chart) {
require(["chartjs"], function(Chart) {
require(["luxon"], function(Luxon) {
//require(["moment"], function(moment) {
require(['cal'], function() {
	days = 1;
console.log(Luxon.DateTime.now().plus({days}).toISO());

console.log(Luxon.DateTime("2023-01-19T09:50:05Z"));
//console.log(moment().toISO());
console.log("Chart.version=", Chart.version);
//moment.locale('ru');
//console.log(moment().format('LLLL'));
//console.log(moment.utc('2023-01-19T09:50:05Z'));
/*

2023-01-22T06:01:10.690+03:00
const xy3 = [
        {x2: moment.utc("2023-01-19T09:50:05Z")._i, y2: 20},
	{x2: moment.utc("2023-01-19T10:00:05Z")._i, y2: 10},
        {x2: moment.utc("2023-01-19T10:00:10Z")._i, y2: 30},
	{x2: moment.utc("2023-01-19T10:00:15Z")._i, y2: 33},
        {x2: moment.utc("2023-01-19T10:00:20Z")._i, y2: 23},
	{x2: moment.utc("2023-01-19T10:00:25Z")._i, y2: 25},
        {x2: moment.utc("2023-01-19T10:00:30Z")._i, y2: 26},
	{x2: moment.utc("2023-01-19T10:00:35Z")._i, y2: 23},
        {x2: moment.utc("2023-01-19T10:00:40Z")._i, y2: 20},
	{x2: moment.utc("2023-01-19T10:00:45Z")._i, y2: 10},
        {x2: moment.utc("2023-01-19T10:15:00Z")._i, y2: 20}
	];
*/
/*
const xy2 = [
        {x2: "2023-01-19T09:50:05.690+03:00", y2: 20},
	{x2: "2023-01-19T10:00:05.690+03:00", y2: 10},
        {x2: "2023-01-19T10:00:10.690+03:00", y2: 30},
	{x2: "2023-01-19T10:00:15.690+03:00", y2: 33},
        {x2: "2023-01-19T10:00:20.690+03:00", y2: 23},
	{x2: "2023-01-19T10:00:25.690+03:00", y2: 25},
        {x2: "2023-01-19T10:00:30.690+03:00", y2: 26},
	{x2: "2023-01-19T10:00:35.690+03:00", y2: 23},
        {x2: "2023-01-19T10:00:40.690+03:00", y2: 20},
	{x2: "2023-01-19T10:00:45.690+03:00", y2: 10},
        {x2: "2023-01-19T10:15:00.690+03:00", y2: 20}
	];
*/
const xy2 = [
        {x: 12345678, y: 20},
	{x: 12345688, y: 10},
        {x: 12345698, y: 30},
	{x: 12345778, y: 33},
        {x: 12345878, y: 23},
	{x: 12345978, y: 25},
        {x: 12346078, y: 26},
	{x: 12346678, y: 23},
        {x: 12347678, y: 20},
	{x: 12348678, y: 10},
        {x: 12349678, y: 20}
	];

var Chart1 = new Chart("chart1",
  {
  type: "line",
  data: {
    //labels: sss,
    datasets: [{
      label: "Временной ряд1",
      fill: false,
      lineTension: 0,
      pointRadius: 4,
      pointHoverRadius: 8,
      showLine: true,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: xy2,
      parsing: false,//{xAxisKey: "x2", yAxisKey: "y2"}
    }]
  },
  options: {
    animation: false,
    responsive: true,
    elements: {
      point: {
        pointStyle: "rect"
      }
    },    
    plugins: {
      title: {
        display: true,
        text: "Назначение поля структуры на ось"},
      legend: {
        display: true, 
        labels: {
          fontSize: 10,
          boxWidth: 20}},
      interaction: {
        intersect: false,
	position: "top"},
      },	
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: 'minute',
          // Luxon format string
//          tooltipFormat: 'DD T'
        },
//        title: {
//          display: true,
//          text: 'Date'
//        }
//	min: new moment.utc('2022-12-31'),
//	max: new moment.utc('2023-02-01'),
        // time: {
          // unit: "minute",
          // displayFormats: {
            // minute: "HH:mm"
          // }
        // },
        // ticks: { source: "auto" },
        // offset: false,
        // grid: {
          // //display: false,
          // drawBorder: true,
          // drawOnChartArea: false,
          // drawTicks: true
        // },
        // font: {
//          size: 8
//        }
      },
      // xAxis2: {
        // type: "time",
        // time: {
          // unit: "day"
        // }
      // },
      y: {
        min: 10,
        max: 30,
	suggestedMin: 5,
	suggestedMax: 5,
        title: {
          display: true,
          text: "value"
        }
      }      
    }	
  }
);
});

});
});


/*
      x: {
        type: "time",
        time: {
          // Luxon format string
          tooltipFormat: "DD T"
        },
        title: {
          display: true,
          text: "Date"
        }
      },


      xAxes: {
        type: "time",
        position: "bottom",
        scaleLabel: {
          display: true,
          labelString: "Hour"
        },
        time: {
          unit: "hour",
          displayFormats: {
            hour: "HH:MM:SS"
          },
        }
      },
      yAxes: [{
        type: "linear",
        scaleLabel: {
          display: true,
          labelString: "Year"
        }
      }],

  options: {
    hover: {
      mode: "nearest"
    },
    scales: {
      xAxes: [{
        type: "time",
        position: "bottom",
        scaleLabel: {
          display: true,
          labelString: "Months"
        },
        time: {
          unit: "month",
          displayFormats: {
            month: "MM"
          },
        }
      }],
      yAxes: [ {
        type: "linear",
        ticks: {
          min: 2005,
          max: 2015,
          stepSize: 1
        },
        scaleLabel: {
          display: true,
          labelString: "Year"
        }
      }]
    }
  }
});  -->

</body>
</html>
*/

/*
var getData = function() {
  var dummyDataset = [
    "2007-11-09T00:00:00.000Z",
    "2006-08-04T00:00:00.000Z",
    "2006-08-06T00:00:00.000Z",
    "2008-01-10T00:00:00.000Z"
  ];
  return dummyDataset.map(function(datum) {
    var myMoment = moment(datum);
    return {
      x: myMoment._i,
      y: parseInt(myMoment.format("YYYY")),
    };
  });
};
console.log(getData());
var ctx = document.getElementById("chart2");
var myScatter = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [{
      label: "My First dataset",
      borderColor: "rgb(255, 99, 132)",
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 8,
      showLine: false,
      data: getData(),
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Random Data"
    },
    legend: {
      display: true,
      labels: {
        fontSize: 10,
        boxWidth: 20
      }
    },
    elements: {
      point: {
        pointStyle: "rect"
      }
    },
    hover: {
      mode: "nearest"
    },
    scales: {
      xAxes: [{
        type: "time",
        position: "bottom",
        scaleLabel: {
          display: true,
          labelString: "Months"
        },
        time: {
          unit: "month",
          displayFormats: {
            month: "MM"
          },
        }
      }],
      yAxes: [ {
        type: "linear",
        ticks: {
          min: 2005,
          max: 2015,
          stepSize: 1
        },
        scaleLabel: {
          display: true,
          labelString: "Year"
        }
      }]
    }
  }
});
*/
