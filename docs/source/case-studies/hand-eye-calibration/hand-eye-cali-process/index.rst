Hand-Eye Calibration Process
===============================
To gather the data required to perform the calibration involves a robot making a series of planned movements (10 to 20 are recommended), either human-operated or automatically. At the end of each movement, the camera takes an image of the calibration object. The calibration object pose is extracted from the image, and the robot pose is registered from the controller. To achieve good calibration quality, the robot poses used when the camera takes images of the calibration object should be:

    - sufficiently distinct

    - using all the robot joints

This results in a diversity of perspectives with different viewing angles. The images below illustrate the required diversity of imaging poses for eye-to-hand and eye-in-hand systems. At the same time, the calibration object should be fully visible in the field of view of the camera.


The task is then to solve homogeneous transformation equations to estimate the rotational and translational components of the locations of the calibration object and those of the hand-eye transformation.



Hand-eye calibration process steps:

.. Tip::
    It is recommended to Warm-up the camera and run Infield Correction before running hand-eye calibration. Use the same capture cycle during warmup, infield correction, and hand-eye calibration as in your application. To further reduce the impact of temperature dependent performance factors, enable Thermal Stabilization.

1. Move the robot to a new posture

2. Register the end-effector pose

3. Image the calibration object (obtain its pose)

4. Repeat steps 1-3 multiple times, e.g. 10 - 20

5. Compute hand-eye transform