Hand-Eye Calibration Process
===============================
To gather the data required to perform the calibration involves a robot making a series of planned movements (10 to 20 are recommended), either human-operated or automatically. At the end of each movement, the camera takes an image of the calibration object. The calibration object pose is extracted from the image, and the robot pose is registered from the controller. To achieve good calibration quality, the robot poses used when the camera takes images of the calibration object should be:

    - sufficiently distinct

    - using all the robot joints

This results in a diversity of perspectives with different viewing angles. The images below illustrate the required diversity of imaging poses for eye-to-hand and eye-in-hand systems. At the same time, the calibration object should be fully visible in the field of view of the camera.