计算器
=============

计算景深
---------------------------

景深（DOF）是指物体可以远离或接近相机而不导致图像模糊的范围。
下面的计算器估计景深，可以指导你定位你的相机和物体。

输入值
~~~~~~~~~~~

.. image:: ./images/input.png

- Circle of Confusion (模糊圈 micrometers, μm)

- Focal length of lens (镜头焦距 in millimeters, mm)

- aperture of the lens (镜头的孔径大小)

- Working distance in millimeters (工作距离, 单位：毫米)

如何使用计算器
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

访问 `计算器网页 <https://www.vision-doctor.com/en/optical-calculations/calculation-depth-of-field.html>`_ 

输入参数到所有输入框，结果将显示为下图。

.. image:: ./images/calculator.png

你可以参考相机的defualt设置来进行输入。

.. list-table:: 
   :header-rows: 1

   * - 型号
     - BP AMR
     - BP AMR-GPU
     - BP-S
     - BP-M
     - BP-L
   * - 模糊圈
     - 3.45
     - 3.45
     - 5.86
     - 5.86
     - 5.86
   * - 镜头焦距
     - 6
     - 6
     - 12.5
     - 16
     - 12.5
   * - 镜头孔径大小
     - f/5.6
     - f/5.6
     - f/5.6
     - f/5.6
     - f/5.6
   * - 工作距离（毫米）
     - 500-1000
     - 500-1000
     - 500-1000
     - 800-1800
     - 1000-3000

摄像机选择工具
------------------------

下面的html页面将帮助你找出适合你需求的相机。

`Camera Selection Tool <../../_static/cameraSelect.html>`_


FOV 计算工具
---------------

使用我们的计算器，您可以确定哪款DaoAI相机在FOV和成像距离方面最适合您的应用。

FOV计算器可以输出给定DaoAI相机型号和成像工作距离的FOV尺寸（宽度和高度）和空间分辨率。

.. raw:: html

  <!DOCTYPE html>
  <link rel="stylesheet" href="../../_static/fovCalc.css">

  <html>
  <body>
      <h1></h1>

      <div id="fov-calculator">
          <div id = "fov-calculator-panel">
              <div id="input-bar">
                  <h2>输入</h2>
                  <ul id = "camera-models">
                      <li>
                          <div class = "camera-model-container">
                              <input id="camera1" onclick="onSelectCamera()" class="camera-model-checkbox" type="radio" name="camera-model-radio" value="">
                              <label for="camera1" onclick="onSelectCamera()" class="camera-model"></label>
                          </div>
                      </li>
                      <li>
                          <div class = "camera-model-container">
                              <input id="camera2" onclick="onSelectCamera()" class="camera-model-checkbox" type="radio" name="camera-model-radio" value="123">
                              <label for="camera2" class="camera-model"></label>
                          </div>
                      </li>
                      <li>
                          <div class = "camera-model-container">
                              <input id="camera3"  onclick="onSelectCamera()" class="camera-model-checkbox" type="radio" name="camera-model-radio" value="">
                              <label for="camera3" class="camera-model"></label>
                          </div>
                      </li>
                      <li>
                          <div class = "camera-model-container">
                              <input id="camera4" onclick="onSelectCamera()" class="camera-model-checkbox" type="radio" name="camera-model-radio" value="">
                              <label for="camera4"  class="camera-model"></label>
                          </div>
                      </li>
                      <li>
                          <div class = "camera-model-container">
                              <input id="camera5" onclick="onSelectCamera()" class="camera-model-checkbox" type="radio" name="camera-model-radio" value="">
                              <label for="camera5" class="camera-model"></label>
                              * (该相机开放于2024 6月后)
                          </div>
                      </li>
                  </ul>
                  <label for="working-distance">工作距离[mm]:</label>
                  <span id="working-distance"></span><br>
                  <input type="range" id="trackbar" min="" max="" value="" step = "100">
                  <button id = "fov-calculator-button" onclick="onSetToDefaultDistance()">设为对焦距离</button>
              </div>
              <div id="output-bar">
                  <h2>输出</h2>
                  <div class="output-container">
                    <label for="width">视野-宽 [mm]:</label>
                    <span id="width"></span>
                  </div>
                  <div class="output-container">
                    <label for="height">视野-高 [mm]:</label>
                    <span id="height"></span>
                  </div>
                  <div class="output-container">
                    <label for="spatial-resolution">空间分辨率 [mm]:</label>
                    <span id="spatial-resolution"></span>
                  </div>
                  <div class="output-container">
                    <label for="precision">室温20℃ VDI/VDE精度 [mm]:</label>
                    <span id="precision"></span>
                  </div>
                  <div class="output-container">
                    <label for="rel-precision">室温20℃ 相对精度 [%]:</label>
                    <span id="rel-precision"></span>
                  </div>
                  <div class="output-container">
                    <label for="precision-off20"> 0-40℃ VDI/VDE精度 [mm]:</label>
                    <span id="precision-off20"></span>
                  </div>
                  <div class="output-container">
                    <label for="rel-precision-off20"> 0-40℃ 相对精度 [%]:</label>
                    <span id="rel-precision-off20"></span>
                  </div>
              </div>
          </div>
          
          <div id="output-graph">
              <div>
                  <h3>侧面视角-宽:</h3>
                  <canvas id="canvas-length" width="300" height="300"></canvas>
              </div>
              <div>
                  <h3>侧面视角-高:</h3>
                  <canvas id="canvas-width" width="300" height="300"></canvas>
              </div>
          <script src="../../_static/fovCalc.js"></script>
          </div>

      </div>
  </body>
  </html>

