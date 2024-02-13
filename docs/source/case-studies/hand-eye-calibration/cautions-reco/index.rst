Cautions And Recommendations
=================================

Image quality
-----------------------------
It is important that the camera images of the calibration object are well exposed and that they are in focus. To ensure the calibration object is within the depth of field it is recommended to use higher factors-number values and compensate with larger exposure times. Also, the same aperture setting should be used for all the images to avoid unnecessary fluctuations due to different aperture sizes. It is important not to choose similar views for the hand-eye calibration images, but excite all six degrees of freedom of the calibration object and that of the robot.

DaoAI API
---------------------------
DaoAI point clouds are given in mm. Translation part of the Hand-Eye output pose in DaoAI API is also in mm. Therefore, the translation part of the input robot poses for Hand-Eye must also be in mm.

Detectable fiducial marker
---------------------------
If the calibration object is a DaoAI calibration board ensure that the fiducial/ArUco marker is visible for all poses. Otherwise, the algorithm will fail when it is trying to detect the checkerboard.

Eye-to-hand
-------------------------
During the eye-to-hand calibration process, the calibration object is mounted on the robot end-effector and moves with the robot. It can be fixed directly to a flange or held by a gripper. The exact location for mounting is not important because the relative pose between the calibration object and the end-effector does not have to be known. It is important that the calibration object does not move relative to the flange or the gripper during the motion; it has to be is fixed or held tightly. It is recommended that mounting brackets, as well as the calibration plate itself, are made of rigid materials. It is also crucial that the calibration object is still during image acquisition. A good routine is to wait a couple of seconds after the robot moves with the calibration object. This allows the whole structure to stabilize in case there are post-motion vibrations. Robot motion should be smooth with controlled accelerations to avoid shaking and dislocation of the calibration object.

Eye-in-hand
--------------------------
During the eye-in-hand calibration process, the calibration object is stationary, placed in the robot’s workspace where the end-effector mounted camera can see it from different perspectives. The exact location of the calibration object is not important because it is not necessary to know its pose relative to the robot’s base. However, the calibration object must not move during the calibration and should, therefore, be tightly fixed.


Environment conditions
-------------------------
Temperature changes have some impact on performance. Hence it is recommended to ensure that the temperature during the hand-eye calibration is somewhat stable. This can be done with Warm-up procedure. It is a good idea to keep it similar to the working conditions when the system is going to be set in operation. To further reduce the impact of temperature dependent performance factors, enable Thermal Stabilization.

Choosing the correct method
--------------------------
Some hand-eye calibration methods compute camera intrinsic parameters along with extrinsic parameters and the relative pose between the camera and the robot frame. We do not recommend these approaches because they treat a DaoAI camera as an uncalibrated 2D camera, rather than a well-calibrated 3D camera.

Each DaoAI camera unit goes through an extensive calibration process, which includes determining the intrinsic parameters of its 2D color camera. Our calibration uses a complex camera model with more intrinsic parameters than some well-known pinhole camera models, e.g., OpenCV camera model. Since DaoAI camera model is proprietary, our internal camera intrinsics are not available in the SDK. However, DaoAI SDK does offer approximations of OpenCV and Halcon models (see Camera Intrinsics) from our camera model. Because information is lost in approximation, using hand-eye calibration methods that utilize OpenCV or Halcon intrinsics is not the best approach either.

Since DaoAI cameras provide 3D data, it is possible to calculate camera extrinsics from the point cloud. DaoAI Hand-Eye Calibration method utilizes this benefit and that is why it is the recommended approach and the one that works best with our cameras. There are alternative, non-DaoAI methods, that utilize the possibility to calculate camera extrinsics from the point cloud. These methods rely purely on point cloud data and an example is hand-eye calibration based on CAD matching.

Accuracy and recalibration
-----------------------
The picking accuracy of a vision-guided robotic system depends on the combined accuracy of the camera, hand-eye calibration, machine vision software, and robot’s positioning. Robots are in general highly repeatable but not accurate. Temperature, joint friction, payload, and manufacturing tolerances are some of the factors that cause the robot to deviate from its preprogrammed positioning. However, robot pose accuracy can be improved by calibrating the robot itself, which is highly recommended for complex systems with multiple factors that affect the picking accuracy. If the robot loses the calibration, the picking accuracy will deteriorate. Repeating the calibration (robot and/or hand-eye) can compensate for such deteriorated performance. It is also necessary to repeat the hand-eye calibration after dismounting the camera from a fixed structure or a robot and mounting it back on.

Read more about :ref:`Hand-Eye Calibration Residuals`. 