Evaluate Accuracy
=====================

.. contents:: 
   :local:

Camera Accuracy
-------------------

.. image:: ./images/accuracy.PNG

Camera **accuracy** is the comprehesive measure of the camera **trueness** and camera **presision**.

High camera accuracy represents that both camera trueness and camera presision is high: captured image/point cloud
is at a good quality, low in noise, and the reflected object position in camera is the same as the object's acutal position in space.

In oral communication, the term camera **accuracy** is usually refered to camera **trueness**.

Camera Trueness
--------------------

.. image:: ./images/trueness_2.png
    :scale: 45%
.. image:: ./images/trueness_1.png
    :scale: 45%

Camera trueness reflects the error between the position of the object in space and the position captured in the camera.
Camera trueness determines whether the picking process can successfully pick objects in all positions and times within the field of view.

Camera trueness is highest at the camera's focus point, and gradualy decrease as the object moves farther away from the focus point. 
The error of an object's position on the edge of the camera's field of view is higher than the error in the camera's focus. 

This increase in error applies to all axis: x, y and z axis, and the x, y axes have a slightly smaller 
impact relative to the z axis (x and y axis errors <0.1%), while the z axis has a slightly greater impact (z axis errors <0.2%).

The accuracy of a camera is affected by:

    - 3D camera hardware and optical quality
    - Quality of camera calibration
    - Position of the object in the calibrated field of view
    - Camera temperature
    - Camera aging
    - Physical impacts, vibrations, and pressure


Camera Presision
--------------------

Accuracy reflects the quality of captured image or point cloud. 
Whether if there are noises in the captured data, point cloud loss due to high reflective surface. 

High-accuracy point clouds usually have the following characteristics:

    - Dense point cloud and can capture details
        - High resolution
        - Low noise
        - Environmental light resistance
        - Low occlusion
        - High dynamic range
    - Low point cloud error, which is usually caused by the following factors
        - Reflection between objects
        - Surface highlights of objects
        - High-contrast areas
        - Edges of objects.

DaoAI Camera Accuracy
----------------------

DaoAI camera provides 0.2% accuracy, 
with x, y-axis accuracy <0.1% and z-axis offset accuracy error <0.2%. 
This means that, without considering other factors, at a capture distance of 100mm, the camera's accuracy error will be at most 0.2mm. 
Similarly, at a capture distance of 1000mm, the camera's accuracy error will be at most 2mm.

How to Validate Camera Trueness
---------------------------------

Camera trueness can be effected by physical impacts, tempreature, and time of use. 
Therefore validating your camera trueness is important in accheiving successful pickings.
When camera trueness is greater than the acceptable range (< 0.2%) then the camera will need to be calibrated again.

Recall that camera trueness is the error of the captured object position and the actual object position.

To verify this error, we can use a known sized object, the calibration board for example: the distance between the cirlces are known.
We can compare the distance captured by the camera with the actual disctance which we know. 

.. image:: ./images/calibration_board.png

For example, the calibration board has 15 cirlces a in a row, and each one is 24mm away from another, that is, the row should have a distance of 336.
Suppose this distance measured in camera is 335, then the camera trueness can be calculated as (336.5-335)/336 * 100% = 0.15%.


If you have DaoAI Vision Studio installed, you can use the calibration node's presision measure mode to validate camera trueness.

.. image:: ./images/precision_measure.png
