Calculator
=============

Calculate Depth of View
---------------------------

The depth of field (DOF) is the range within which the object can move away from or towards the camera without resulting in a blurred image. 
The calculator below estimates the depth of field, which can guide you to position your camera and object.

Inputs
~~~~~~~~~~~

.. image:: ./images/input.png

- Circle of Confusion (in micrometers, μm)

- Focal length of lens (in millimeters, mm)

- aperture of the lens

- Working distance in millimeters

How to Use the Calculator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Goto the `Calculator Page <https://www.vision-doctor.com/en/optical-calculations/calculation-depth-of-field.html>`_

Enter values for all input fields, and the result will be displayed as the following image.

.. image:: ./images/calculator.png

You may refer to camera defualt settings for your inputs.

.. list-table:: 
   :header-rows: 1

   * - Models
     - BP AMR
     - BP AMR-GPU
     - BP-S
     - BP-M
     - BP-L
   * - Circle of Confusion
     - 3.45
     - 3.45
     - 5.86
     - 5.86
     - 5.86
   * - Focal Length of Lens
     - 6
     - 6
     - 12.5
     - 16
     - 12.5
   * - Aperture of the Lens
     - f/5.6
     - f/5.6
     - f/5.6
     - f/5.6
     - f/5.6
   * - Working Distance (mm)
     - 500-1000
     - 500-1000
     - 500-1000
     - 800-1800
     - 1000-3000

Camera Selection Tool
------------------------

The following html page will help you figure out which camera is suitable for your need.

`Camera Selection Tool <../../_static/cameraSelect.html>`_


FOV Calculator
------------------

Using our online calculators you can determine which DaoAI camera best fits your application in terms of the FOV and distance of imaging. 

The FOV calculator outputs the size of the FOV (width and height) and spatial resolution for a given DaoAI camera model and the imaging working distance.

.. raw:: html

  <!DOCTYPE html>
  <link rel="stylesheet" href="../../_static/fovCalc.css">

  <html>
  <body>
      <h1></h1>

      <div id="fov-calculator">
          <div id = "fov-calculator-panel">
              <div id="input-bar">
                  <h2>Inputs</h2>
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
                          </div>
                      </li>
                      <li>
                          <div class = "camera-model-container">
                              <input id="camera6" onclick="onSelectCamera()" class="camera-model-checkbox" type="radio" name="camera-model-radio" value="">
                              <label for="camera6" class="camera-model"></label>
                          </div>
                      </li>
                  </ul>
                  <label for="working-distance">Working distance:</label>
                  <span id="working-distance"></span><br>
                  <input type="range" id="trackbar" min="" max="" value="" step = "100">
                  <button id = "fov-calculator-button" onclick="onSetToDefaultDistance()">Set to focal distance [mm]</button>
              </div>
              <div id="output-bar">
                  <h2>Outputs</h2>
                  <div class="output-container">
                    <label for="width">Width [mm]:</label>
                    <span id="width"></span>
                  </div>
                  <div class="output-container">
                    <label for="height">Height [mm]:</label>
                    <span id="height"></span>
                  </div>
                  <div class="output-container">
                    <label for="spatial-resolution">Spatial Resolution [mm]:</label>
                    <span id="spatial-resolution"></span>
                  </div>
                  <div class="output-container">
                    <label for="precision">20℃ VDI/VDE precision [mm]:</label>
                    <span id="precision"></span>
                  </div>
                  <div class="output-container">
                    <label for="rel-precision">20℃ relative precision [%]:</label>
                    <span id="rel-precision"></span>
                  </div>
                  <div class="output-container">
                    <label for="precision-off20"> 0-40℃ VDI/VDE precision [mm]:</label>
                    <span id="precision-off20"></span>
                  </div>
                  <div class="output-container">
                    <label for="rel-precision-off20"> 0-40℃ relative precision [%]:</label>
                    <span id="rel-precision-off20"></span>
                  </div>
              </div>
          </div>
          <div id="output-graph">
              <div>
                  <h3>Side view of width:</h3>
                  <canvas id="canvas-length" width="300" height="300"></canvas>
              </div>
              <div>
                  <h3>Side view of height:</h3>
                  <canvas id="canvas-width" width="300" height="300"></canvas>
              </div>
          <script src="../../_static/fovCalc.js"></script>
          </div>

      </div>
  </body>
  </html>

