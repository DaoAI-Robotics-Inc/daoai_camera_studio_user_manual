
var trackbar = document.getElementById("trackbar");
var widthOutput = document.getElementById("width");
var workingDistanceLabel = document.getElementById("working-distance");
var heightOutput = document.getElementById("height");
var spatialResolutionOutput = document.getElementById("spatial-resolution");
var workingDistance =  parseInt(trackbar.value);
var precision = document.getElementById("precision");
var rel_precision = document.getElementById("rel-precision");
var precision_off20 = document.getElementById("precision-off20");
var rel_precision_off20 = document.getElementById("rel-precision-off20");

const CAMERA_MAP = {
    0 : "BP AMR",
    1 : "BP AMR-GPU",
    2 : "BP-M",
    3 : "BP-L",
    4 : "BP-Laser",
};

const CAMERA_FOCAL_LENGTH = {
    "BP AMR" : 680,
    "BP AMR-GPU" : 680,
    "BP-M" : 1100,
    "BP-L" : 1550,
    "BP-Laser" : 1550,
}

const CAMERA_MIN_WORKING_DISTANCE = {
    "BP AMR" : 500,
    "BP AMR-GPU" : 500,
    "BP-M" : 800,
    "BP-L" : 1000,
    "BP-Laser" : 1000,
}

const CAMERA_MAX_WORKING_DISTANCE = {
    "BP AMR" : 1000,
    "BP AMR-GPU" : 1000,
    "BP-M" : 1800,
    "BP-L" : 3000,
    "BP-Laser" : 3000,
}

const CAMERA_FOV_WIDTH = {
    "BP AMR" : [263,315,368,421,473,526],
    "BP AMR-GPU" : [263,315,368,421,473,526],
    "BP-M" : [345,388,431,474,517,560,603,646,690,733,776],
    "BP-L" : [511,562,614,665,716,767,818,869,920,971,1023,1074,1125,1176,1227,1278,1329,1380,1432,1483,1534],
    "BP-Laser" : [933, 1026, 1119, 1212, 1306, 1399, 1492, 1585, 1679, 1772, 1865, 1958, 2052, 2145, 2238, 2332, 2425, 2518, 2611, 2705, 2798],
}

const CAMERA_FOV_LENGTH = {
    "BP AMR" : [375,474,573,650,716,783],
    "BP AMR-GPU" : [375,474,573,650,716,783],
    "BP-M" : [454,545,637,729,820,897,959,1008,1056,1105,1153],
    "BP-L" : [730,839,948,1057,1166,1275,1384,1493,1602,1711,1783,1855,1926,1997,2068,2139,2210,2282,2353,2424,2495],
    "BP-Laser" : [663, 765, 868, 970, 1072, 1174, 1277, 1379, 1481, 1557, 1620, 1683, 1746, 1809, 1872, 1936, 1999, 2062, 2125, 2188, 2251],
}

const CAMERA_SPATIAL_RESOLUTION = {
    "BP AMR" : [0.29,0.35,0.40,0.46,0.52,0.58],
    "BP AMR-GPU" : [0.29,0.35,0.40,0.46,0.52,0.58],
    "BP-M" : [0.29,0.33,0.37,0.40,0.44,0.47,0.51,0.55,0.58,0.62,0.66],
    "BP-L" : [0.47,0.52,0.56,0.61,0.66,0.70,0.75,0.80,0.84,0.89,0.94,0.99,1.03,1.08,1.13,1.17,1.22,1.27,1.31,1.36,1.41],
    "BP-Laser" : [0.56, 0.62, 0.68, 0.73, 0.79, 0.85, 0.9, 0.96, 1.02, 1.07, 1.13, 1.19, 1.24, 1.3, 1.36, 1.41, 1.47, 1.52, 1.58, 1.64, 1.69],
}

const CAMERA_PRECISION = {
    "BP AMR" : [0.07,0.07,0.06,0.07,0.10,0.17],
    "BP AMR-GPU" : [0.07,0.07,0.06,0.07,0.10,0.17],
    "BP-M" : [0.03,0.04,0.05,0.08,0.09,0.13,0.17,0.22,0.26,0.32,0.38],
    "BP-L" : [0.13,0.15,0.17,0.15,0.12,0.13,0.10,0.05,0.06,0.12,0.12,0.19,0.2,0.21,0.22,0.22,0.31,0.32,0.33,0.43,0.53],
    "BP-Laser" : [],
}

const CAMERA_PRECISION_OFF20 = {
    "BP AMR" : [0.22,0.53,0.69,0.86,1.03,1.22],
    "BP AMR-GPU" : [0.22,0.53,0.69,0.86,1.03,1.22],
    "BP-M" : [0.03,0.04,0.07,0.10,0.12,0.16,0.20,0.25,0.30,0.36,0.42],
    "BP-L" : [0.40,0.45,0.51,0.52,0.53,0.58,0.58,0.57,0.61,0.71,0.74,0.84,0.87,0.90,0.94,0.97,1.08,1.12,1.16,1.28,1.14],
    "BP-Laser" : [],
}

const CAMERA_PRECISION_PERCENT = {
    "BP AMR" : [0.05,0.04,0.03,0.03,0.04,0.06],
    "BP AMR-GPU" : [0.05,0.04,0.03,0.03,0.04,0.06],
    "BP-M" : [0.02,0.02,0.02,0.03,0.03,0.04,0.05,0.06,0.07,0.08,0.09],
    "BP-L" : [0.05,0.05,0.05,0.04,0.03,0.03,0.02,0.01,0.01,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.06],
    "BP-Laser" : [],
}

const CAMERA_PRECISION_OFF20_PERCENT = {
    "BP AMR" : [0.16,0.31,0.37,0.40,0.43],
    "BP AMR-GPU" : [0.16,0.31,0.37,0.40,0.43],
    "BP-M" : [0.02,0.02,0.03,0.04,0.04,0.05,0.06,0.07,0.08,0.09,0.10],
    "BP-L" : [0.15,0.15,0.15,0.14,0.13,0.13,0.12,0.11,0.11,0.12,0.12,0.13,0.13,0.13,0.13,0.13,0.14,0.14,0.14,0.15,0.16],
    "BP-Laser" : [],
}



const MAX_CAMERA_FOV_LENGTH = Math.max(...CAMERA_FOV_LENGTH["BP-L"]);
const MIN_CAMERA_FOV_LENGTH = Math.min(...CAMERA_FOV_WIDTH["BP AMR"]);
const MAX_CAMERA_FOV_WIDTH = Math.max(...CAMERA_FOV_LENGTH["BP-L"]); // intended to use length
const MIN_CAMERA_FOV_WIDTH = Math.min(...CAMERA_FOV_WIDTH["BP AMR"]);
const MAX_CAMERA_FOV_WORK_DISTANCE = CAMERA_MAX_WORKING_DISTANCE["BP-L"];
const MIN_CAMERA_FOV_WORK_DISTANCE = CAMERA_MIN_WORKING_DISTANCE["BP AMR"];

function updateOutputBar(distance) {
    var camera = cameraSelected();
    var max = Number(trackbar.max);
    var min = Number(trackbar.min);
    index = (trackbar.value - min) / 100;

    var width = CAMERA_FOV_LENGTH[CAMERA_MAP[camera]][index];
    var height = CAMERA_FOV_WIDTH[CAMERA_MAP[camera]][index];
    var spatialResolution = CAMERA_SPATIAL_RESOLUTION[CAMERA_MAP[camera]][index];
    var camera_precision = CAMERA_PRECISION[CAMERA_MAP[camera]][index];
    var camera_precision_percent = CAMERA_PRECISION_PERCENT[CAMERA_MAP[camera]][index];
    var camera_precision_off20 = CAMERA_PRECISION_OFF20[CAMERA_MAP[camera]][index];
    var camera_precision_off20_percent = CAMERA_PRECISION_OFF20_PERCENT[CAMERA_MAP[camera]][index];
   
    workingDistanceLabel.textContent = trackbar.value;
    widthOutput.textContent = width;
    heightOutput.textContent = height;
    spatialResolutionOutput.textContent = spatialResolution;

    precision.textContent = camera_precision;
    rel_precision.textContent = camera_precision_percent;
    precision_off20.textContent = camera_precision_off20;
    rel_precision_off20.textContent = camera_precision_off20_percent;
}

//render Length
function renderLength() {
    var canvasLength = document.getElementById("canvas-length");
    var ctx = canvasLength.getContext("2d");

    ctx.clearRect(0, 0, canvasLength.width, canvasLength.height);
    ctx.strokeStyle = "black"

    var canvasWidth = canvasLength.width;
    var canvasHeight = canvasLength.height;
    
    // y min & max is defined wrt to the entire camera series.
    var yMin = 0; // min, from bp-amr 
    var yMax = MAX_CAMERA_FOV_WORK_DISTANCE; // max, from bp-L
    var yInterval = 100; // data every 100mm 
    
    // Define x,y data based on camera data
    var camera = cameraSelected();
    var xValues = CAMERA_FOV_LENGTH[CAMERA_MAP[camera]];
    var xMax = MAX_CAMERA_FOV_LENGTH; // max, from length: bp-L
    var xMin = MIN_CAMERA_FOV_LENGTH; // min, from length: bp-mar

    // generate y values
    distance_min = CAMERA_MIN_WORKING_DISTANCE[CAMERA_MAP[camera]];
    distance_max = CAMERA_MAX_WORKING_DISTANCE[CAMERA_MAP[camera]];
    var yCount = Math.floor((distance_max - distance_min) / yInterval) + 1;
    var yValues = [];
    for (var i = 0; i < yCount; i++) {
        var y = distance_min + i * yInterval;
        yValues.push(y);
    }
    
    // Calculate scale on the canvas for data values
    var yScale =  (canvasHeight) / (yMax - yMin) ;
    var xScale = (canvasWidth/2.5) / (xMax - xMin)  ;
    
    // draw background
    ctx.fillStyle = "#fdeaf1"; //not recommended 
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "#e9f6f4";
    ctx.fillRect(0, yValues[0] * yScale, canvasWidth, (yValues[yCount-1]) * yScale - yValues[0] * yScale);

    ctx.font = "12px Arial";
    ctx.fillStyle = "#4f93a6";
    var offset = 10;
    ctx.fillText("工作距离区间", 0, yValues[0] * yScale + 20);
    
    // draw right half of FOV
    ctx.beginPath();
    for (var i = 0; i < xValues.length; i++) {
        var x = canvasWidth/2 + xValues[i]* xScale;
        var y = yValues[i] * yScale;
        if (i === 0) {
        // 将起始点移动到第一个坐标位置
        ctx.moveTo(x, y);
    } else {
        // 连接坐标点
        ctx.lineTo(x, y);
        }
    }
    ctx.stroke(); 

    // Mirror draw left half of FOV
    ctx.beginPath();
    for (var i = 0; i < xValues.length; i++) {
        var x = canvasWidth/2 - xValues[i]* xScale;
        var y = yValues[i] * yScale;
        if (i === 0) {
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        }
    }
    ctx.stroke(); 

    //draw vertical line representing working distance 
    ctx.beginPath();
    ctx.strokeStyle = "red"
    ctx.moveTo(canvasWidth/2,30);
    ctx.lineTo(canvasWidth/2, trackbar.value * yScale);
    ctx.stroke(); 
    //

    //draw horizontal line representing FOV-length
    ctx.beginPath();
    ctx.strokeStyle = "#4a8fa4"
    ctx.moveTo(canvasWidth/2,trackbar.value * yScale);
    ctx.lineTo(canvasWidth/2 + xValues[index] * xScale ,trackbar.value * yScale );
    ctx.moveTo(canvasWidth/2,trackbar.value * yScale);
    ctx.lineTo(canvasWidth/2 - xValues[index] * xScale ,trackbar.value * yScale );
    ctx.stroke(); 
    //

    // draw text for FOV-length
    ctx.font = "12px Arial";
    ctx.fillStyle = "#4a8fa4";
    var offset = 10;
    var length = (String(xValues[index]) + " mm");
    ctx.fillText(length, canvasWidth/2 + offset , trackbar.value * yScale - offset);

}

//render Width
function renderWidth() {
    var canvas_Width = document.getElementById("canvas-width");
    var ctx = canvas_Width.getContext("2d");

    ctx.clearRect(0, 0, canvas_Width.width, canvas_Width.height);
    ctx.strokeStyle = "black"

    var canvasWidth = canvas_Width.width;
    var canvasHeight = canvas_Width.height;
    
    // y min & max is defined wrt to the entire camera series.
    var yMin = 0; // min, from bp-amr 
    var yMax = MAX_CAMERA_FOV_WORK_DISTANCE; // max, from bp-L
    var yInterval = 100; // data every 100mm 
    
    // Define x,y data based on camera data
    var camera = cameraSelected();
    var xValues = CAMERA_FOV_WIDTH[CAMERA_MAP[camera]];
    var xMax = MAX_CAMERA_FOV_WIDTH; // max, from length: bp-L
    var xMin = MIN_CAMERA_FOV_WIDTH; // min, from length: bp-mar

    // 计算 y 值的数量

    distance_min = CAMERA_MIN_WORKING_DISTANCE[CAMERA_MAP[camera]];
    distance_max = CAMERA_MAX_WORKING_DISTANCE[CAMERA_MAP[camera]];

    var yCount = Math.floor((distance_max - distance_min) / yInterval) + 1;
    
    // generate y values
    var yValues = [];
    for (var i = 0; i < yCount; i++) {
        var y = distance_min + i * yInterval;
        yValues.push(y);
    }
    
    // Calculate scale on the canvas for data values
    var yScale =  (canvasHeight) / (yMax - yMin) ;
    var xScale = (canvasWidth/2.5) / (xMax - xMin)  ;
    
    // draw background
    ctx.fillStyle = "#fdeaf1"; //not recommended 
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "#e9f6f4";
    ctx.fillRect(0, yValues[0] * yScale, canvasWidth, (yValues[yCount-1]) * yScale - yValues[0] * yScale);
    
    ctx.font = "12px Arial";
    ctx.fillStyle = "#4f93a6";
    var offset = 10;
    ctx.fillText("工作距离区间", 0, yValues[0] * yScale + 20);

    // draw right half of FOV
    ctx.beginPath();
    
    for (var i = 0; i < xValues.length; i++) {
        var x = canvasWidth/2 + xValues[i]* xScale;
        var y = yValues[i] * yScale;
        if (i === 0) {
        // 将起始点移动到第一个坐标位置
        ctx.moveTo(x, y);
    } else {
        // 连接坐标点
        ctx.lineTo(x, y);
        }
    }
    ctx.stroke(); 

    // Mirror draw left half of FOV
    ctx.beginPath();
    for (var i = 0; i < xValues.length; i++) {
        var x = canvasWidth/2 - xValues[i]* xScale;
        var y = yValues[i] * yScale;
        if (i === 0) {
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        }
    }
    ctx.stroke(); 

    //draw vertical line representing working distance 
    ctx.beginPath();
    ctx.strokeStyle = "red"
    ctx.moveTo(canvasWidth/2,30);
    ctx.lineTo(canvasWidth/2,trackbar.value * yScale);
    ctx.stroke(); 
    //

    //draw horizontal line representing FOV-length
    ctx.beginPath();
    ctx.strokeStyle = "#4a8fa4"
    ctx.moveTo(canvasWidth/2,trackbar.value * yScale);
    ctx.lineTo(canvasWidth/2 + xValues[index] * xScale ,trackbar.value * yScale );
    ctx.moveTo(canvasWidth/2,trackbar.value * yScale);
    ctx.lineTo(canvasWidth/2 - xValues[index] * xScale ,trackbar.value * yScale );
    ctx.stroke(); 
    //

    // draw text for FOV-length
    ctx.font = "12px Arial";
    ctx.fillStyle = "#4a8fa4";
    var offset = 10;
    var length = (String(xValues[index]) + " mm");
    ctx.fillText(length, canvasWidth/2 + offset , trackbar.value * yScale - offset);
}

function updateInputBar(){
    var camera = cameraSelected();
    trackbar.min = String(CAMERA_MIN_WORKING_DISTANCE[CAMERA_MAP[camera]]);
    trackbar.max = String(CAMERA_MAX_WORKING_DISTANCE[CAMERA_MAP[camera]]);
    trackbar.value = CAMERA_FOCAL_LENGTH[CAMERA_MAP[camera]];
    updateOutput();
}

function cameraSelected(){
    var input = document.getElementsByClassName("camera-model-checkbox");
    for(i in input){
        if (input[i].checked) {
            // Camera selected
            return i
        }
    }
}

function updateOutput(){
    var distance = parseInt(trackbar.value);
    updateOutputBar(distance);
    renderLength();
    renderWidth();
}

//Event Listener: 
function onSetToDefaultDistance(){
    updateInputBar();
}

//Event Listener: 
function onSelectCamera(){
    updateInputBar();
}

//Event Listener: 
trackbar.addEventListener("input", function() {
    updateOutput();
});




// Initialiazation
var input = document.getElementsByClassName("camera-model-checkbox");
input[3].checked = true; // Set default camera
updateInputBar();

var inputs = document.getElementsByClassName("camera-model");
for (key in CAMERA_MAP) {
    inputs[key].textContent = CAMERA_MAP[key];
}

updateOutput();
