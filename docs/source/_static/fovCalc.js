
var trackbar = document.getElementById("trackbar");
var widthOutput = document.getElementById("width");
var workingDistanceLabel = document.getElementById("working-distance");
var heightOutput = document.getElementById("height");
var spatialResolutionOutput = document.getElementById("spatial-resolution");
var workingDistance =  parseInt(trackbar.value);

const CAMERA_MAP = {
    0 : "BP AMR",
    1 : "BP AMR-GPU",
    2 : "BP-S",
    3 : "BP-M",
    4 : "BP-L",
};

const CAMERA_FOCAL_LENGTH = {
    "BP AMR" : 680,
    "BP AMR-GPU" : 680,
    "BP-S" : 680,
    "BP-M" : 1100,
    "BP-L" : 2200,
}

const CAMERA_MIN_WORKING_DISTANCE = {
    "BP AMR" : 500,
    "BP AMR-GPU" : 500,
    "BP-S" : 500,
    "BP-M" : 800,
    "BP-L" : 1000,
}

const CAMERA_MAX_WORKING_DISTANCE = {
    "BP AMR" : 1000,
    "BP AMR-GPU" : 1000,
    "BP-S" : 1000,
    "BP-M" : 1800,
    "BP-L" : 3000,
}

const CAMERA_FOV_WIDTH = {
    "BP AMR" : [263,315,368,421,473,526],
    "BP AMR-GPU" : [263,315,368,421,473,526],
    "BP-S" : [263,315,368,421,473,526], //暂时没有数据 用AMR 充数，后面要换
    "BP-M" : [345,388,431,474,517,560,603,646,690,733,776],
    "BP-L" : [511,562,614,665,716,767,818,869,920,971,1023,1074,1125,1176,1227,1278,1329,1380,1432,1483,1534],
}
const CAMERA_FOV_LENGTH = {
    "BP AMR" : [375,474,573,650,716,783],
    "BP AMR-GPU" : [375,474,573,650,716,783],
    "BP-S" : [375,474,573,650,716,783],//暂时没有数据 用AMR 充数，后面要换
    "BP-M" : [454,545,637,729,820,897,959,1008,1056,1105,1153],
    "BP-L" : [730,839,948,1057,1166,1275,1384,1493,1602,1711,1783,1855,1926,1997,2068,2139,2210,2282,2353,2424,2495],
}

const CAMERA_SPATIAL_RESOLUTION = {
    "BP AMR" : [0.29,0.35,0.40,0.46,0.52,0.58],
    "BP AMR-GPU" : [0.29,0.35,0.40,0.46,0.52,0.58],
    "BP-S" : [0.29,0.35,0.40,0.46,0.52,0.58],//暂时没有数据 用AMR 充数，后面要换
    "BP-M" : [0.29,0.33,0.37,0.40,0.44,0.47,0.51,0.55,0.58,0.62,0.66],
    "BP-L" : [0.47,0.52,0.56,0.61,0.66,0.70,0.75,0.80,0.84,0.89,0.94,0.99,1.03,1.08,1.13,1.17,1.22,1.27,1.31,1.36,1.41],
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

    var width = CAMERA_FOV_WIDTH[CAMERA_MAP[camera]][index];
    var height = CAMERA_FOV_LENGTH[CAMERA_MAP[camera]][index];
    var spatialResolution = CAMERA_SPATIAL_RESOLUTION[CAMERA_MAP[camera]][index];

    workingDistanceLabel.textContent = trackbar.value;
    widthOutput.textContent = width;
    heightOutput.textContent = height;
    spatialResolutionOutput.textContent = spatialResolution;
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
input[4].checked = true; // Set default camera
updateInputBar();

var inputs = document.getElementsByClassName("camera-model");
for (key in CAMERA_MAP) {
    inputs[key].textContent = CAMERA_MAP[key];
}

updateOutput();
