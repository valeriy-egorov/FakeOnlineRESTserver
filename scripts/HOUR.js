// ДАННЫЕ ЗА ЧАС

//1)Переменные myAIR, myGROUND - сдлеать глобальными
//2.Заполнять и отображает переменные my* одной функцией с параметром ИНТЕРВАЛ(НАЗВАНИЕ ИНТИЕРВАЛА)

document.querySelector("#timeHour").onclick = async function GET_HOUR() {
    const Requ = new Request("http://localhost:8000/give_data/hour");
    const Resp = await fetch(Requ);
    const D = await Resp.json();
    let myAIR = null;
    let my_airHUMID = null;
    let my_groundHUM = null;
    const ColorLeft = 'rgb(255, 100, 100)';
    const ColorRight = 'rgb(100, 100, 255)';
    moment.locale('ru') 
    //console.log(D)

// ОТРИСОВКА ГРАФИКА ТЕМПЕРАТУРЫ
const type = 'line';                              
let TEMP = {                                     
    labels: [],
    datasets: [{
        data: [],
        label: "Первый",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,  
        fill: false,
        borderColor: "#000000", },        
    {
        data: [],
        label: "Второй",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        fill: false,
        borderColor: "#0000FF"}, 
    {
        data: [],
        label: "Третий",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#00FF00",
        fill: false},
    { 
        data: [],
        label: "Четвертый",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#FF0000",
        fill: false}, 
    {
        data: [],
        label: "Средняя температура",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#5c0000",
        fill: false
    }]};

const options_TEMP = {
        locale: "ru-RU",
        animation: true,
        plugins: {
            title: {
                display: true,
                text: 'Графики температуры'}},
        layout: {padding: {top: 80}},
        scales: {
          x: {
            type: 'time',
        title: {
          display: true,
          text: "Время"},
            time: {
          isoWeekday: true,
          minUnit: 'minute',
            displayFormats: {	
                millisecond: 'mm:ss.SSS',
                second: 'hh:mm',
                minute: 'hh:mm',
                hour: 'MMM hh:mm',
                day: 'MMM hh:mm',
                week: 'MMM hh:mm',
                month: 'MMM yyyy',
                quarter: 'MMM yyyy',
                year: 'MMM yyyy'}},
            ticks: {
                source: "data",	
                color: "black",
        display: true,
              font: {
                weight: "bold"},
        grid: {
              drawTicks: true,
              borderColor: "black",
        enabled: true,
        drawTicks: true,
        lineWidth: 1}},
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        border: {
            color: ColorLeft},
            ticks: {
              color: ColorLeft},
        title: {
          display: true,
          color: ColorLeft,
          text: "Температура",
        },
        grid: {
            color: ColorRight,
            drawOnChartArea: false}
            }
        }
    }
}

// ОТРИСОВКА ГРАФИКА ВЛАЖНОСТИ ВОЗДУХА
let HUMID_air = {                                     
    labels: [],
    datasets: [{
        data: [],
        label: "Первый",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,  
        fill: false,
        borderColor: "#000000"}, 
    {
        data: [],
        label: "Второй",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        fill: false,
        borderColor: "#0000FF"}, 
    {
        data: [],
        label: "Третий",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#00FF00",
        fill: false},
    { 
        data: [],
        label: "Четвертый",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#FF0000",
        fill: false}]};

const options_HUMAIR = {
        locale: "ru-RU",
        animation: true,
        plugins: {
            title: {
                display: true,
                text: 'Графики влажности воздуха'}},
        layout: {padding: {top: 80}},
        scales: {
          x: {
            type: 'time',
        title: {
          display: true,
          text: "Время"},
            time: {
          isoWeekday: true,
          minUnit: 'minute',
            displayFormats: {	
                millisecond: 'mm:ss.SSS',
                second: 'hh:mm',
                minute: 'hh:mm',
                hour: 'MMM hh:mm',
                day: 'MMM hh:mm',
                week: 'MMM hh:mm',
                month: 'MMM yyyy',
                quarter: 'MMM yyyy',
                year: 'MMM yyyy'}},
            ticks: {
                source: "data",	
                color: "black",
        display: true,
              font: {
                weight: "bold"},
        grid: {
              drawTicks: true,
              borderColor: "black",
        enabled: true,
        drawTicks: true,
        lineWidth: 1}},
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        border: {
            color: ColorLeft},
            ticks: {
              color: ColorLeft},
        title: {
          display: true,
          color: ColorLeft,
          text: "Влажность",
        },
        grid: {
            color: ColorRight,
            drawOnChartArea: false}
            }
        }
    }
}

// ОТРИСОВКА ГРАФИКА ВЛАЖНОСТИ ПОЧВЫ
let HUMID_ground = {                                     
    labels: [],
    datasets: [{
        data: [],
        label: "Первый",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,  
        fill: false,
        borderColor: "#000000"}, 
    {
        data: [],
        label: "Второй",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        fill: false,
        borderColor: "#0000FF"}, 
    {
        data: [],
        label: "Третий",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#00FF00",
        fill: false},
    { 
        data: [],
        label: "Четвертый",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#FF0000",
        fill: false}, 
    { 
        data: [],
        label: "Пятый",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#800080",
        fill: false},
    { 
        data: [],
        label: "Шестой",
        lineTension: 0.3,
        yAxisID: 'y',
        showLine: true,
        borderColor: "#F80",
        fill: false}]};
const options_GROUND = {
        locale: "ru-RU",
        animation: true,
        plugins: {
            title: {
                display: true,
                text: 'Графики влажности воздуха'}},
        layout: {padding: {top: 80}},
        scales: {
          x: {
            type: 'time',
        title: {
          display: true,
          text: "Время"},
            time: {
          isoWeekday: true,
          minUnit: 'minute',
            displayFormats: {	
                millisecond: 'mm:ss.SSS',
                second: 'hh:mm',
                minute: 'hh:mm',
                hour: 'MMM hh:mm',
                day: 'MMM hh:mm',
                week: 'MMM hh:mm',
                month: 'MMM yyyy',
                quarter: 'MMM yyyy',
                year: 'MMM yyyy'}},
            ticks: {
                source: "data",	
                color: "black",
        display: true,
              font: {
                weight: "bold"},
        grid: {
              drawTicks: true,
              borderColor: "black",
        enabled: true,
        drawTicks: true,
        lineWidth: 1}},
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        border: {
            color: ColorLeft},
            ticks: {
              color: ColorLeft},
        title: {
          display: true,
          color: ColorLeft,
          text: "Влажность",
        },
        grid: {
            color: ColorRight,
            drawOnChartArea: false}
            }
        }
    }
}


// ЗАПОЛНЕНИЕ ГРАФИКА ТЕМПЕРАТУРЫ ДАННЫМИ
let air; 
for (air in D.DATA) {
    let s = D.DATA[air].data.air;
    let time_air = D.DATA[air].timeAIR
    TEMP.labels.push(time_air)
let value_air;
for (value_air in s){
    if (s[value_air].id == 1) {
        TEMP.datasets[0].data.push(s[value_air].temperature)
    } else if (s[value_air].id == 2) {
        TEMP.datasets[1].data.push(s[value_air].temperature)
    } else if (s[value_air].id == 3) {
        TEMP.datasets[2].data.push(s[value_air].temperature)
    } else if (s[value_air].id == 4) {
        TEMP.datasets[3].data.push(s[value_air].temperature)
    }
if (myAIR != null){
    myAIR.update()}}
if (myAIR != null) {
    myAIR.clear();
    myAIR.destroy()}
}
console.log(myAIR);
myAIR = new Chart(document.getElementById("airTemperature2"), {type, data: TEMP, options: options_TEMP})

// ЗАПОЛНЕНИЕ ГРАФИКА ВЛАЖНОСТИ ВОЗДУХА ДАННЫМИ
let humid; 
for (humid in D.DATA) {
    let y = D.DATA[humid].data.air;
    let time_air = D.DATA[humid].timeAIR
    HUMID_air.labels.push(time_air)
let value_humid;
for (value_humid in y){
    if (y[value_humid].id == 1) {
        HUMID_air.datasets[0].data.push(y[value_humid].humidity)
    } else if (y[value_humid].id == 2) {
        HUMID_air.datasets[1].data.push(y[value_humid].humidity)
    } else if (y[value_humid].id == 3) {
        HUMID_air.datasets[2].data.push(y[value_humid].humidity)
    } else if (y[value_humid].id == 4) {
        HUMID_air.datasets[3].data.push(y[value_humid].humidity)
    }
if (my_airHUMID != null){
    my_airHUMID.update()}}
if (my_airHUMID != null) {
    my_airHUMID.clear();
    my_airHUMID.destroy();}
my_airHUMID = new Chart(document.getElementById("airHumidity2"), {type, data: HUMID_air, options: options_HUMAIR})}                  

// ЗАПОЛНЕНИЕ ГРАФИКА ВЛАЖНОСТИ ПОЧВЫ ДАННЫМИ
let ground; 
for (ground in D.DATA) {
    let x = D.DATA[ground].data.ground;
    let time_ground = D.DATA[ground].timeGROUND
    HUMID_ground.labels.push(time_ground)
let value_ground; 
for (value_ground in x){
    if (x[value_ground].id == 1) {
        HUMID_ground.datasets[0].data.push(x[value_ground].humidity)
    } else if (x[value_ground].id == 2) {
        HUMID_ground.datasets[1].data.push(x[value_ground].humidity)
    } else if (x[value_ground].id == 3) {
        HUMID_ground.datasets[2].data.push(x[value_ground].humidity)
    } else if (x[value_ground].id == 4) {
        HUMID_ground.datasets[3].data.push(x[value_ground].humidity)
    } else if (x[value_ground].id == 5) {
        HUMID_ground.datasets[4].data.push(x[value_ground].humidity)
    } else if (x[value_ground].id == 6) {
        HUMID_ground.datasets[5].data.push(x[value_ground].humidity)
    } 
if (my_groundHUM != null){
    my_groundHUM.update()}}
if (my_groundHUM != null) {
    my_groundHUM.clear();
    my_groundHUM.destroy();}
my_groundHUM = new Chart(document.getElementById("groundHumidity2"), {type, data: HUMID_ground, options: options_GROUND})} 

}

