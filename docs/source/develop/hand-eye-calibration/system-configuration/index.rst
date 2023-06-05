System Configuration
================================
When it comes to the location of the camera in a vision-guided robotic system, there are two distinct standard configurations, “eye-to-hand” and “eye-in-hand”.

Eye-to-hand
------------------------
Systems with this configuration have a stationary camera located in the robot’s environment, oriented for observing the workspace of the robot arm.

The advantage of this system is that the camera is relatively distant from the robot’s picking work area, so it is not likely that the robot will collide with it. Another benefit of this system configuration is that the image acquisition can be performed at the same time while the robot is moving, which implies potentially lower cycle times.

The downside is that the robot arm may occlude the view of the objects by moving between them and the camera. This can then negatively affect the cycle times. To prevent it from happening, it is necessary to use smart motion planning and synchronize robot motion and image acquisition, which is not trivial. This system is also less flexible because the camera is static and has a constant viewpoint. This means that the FOV cannot be changed and the accuracy of image measurements cannot be increased when required. Finally, there is an extra effort in terms of building the robot cell as it requires a mechanical structure for a camera to be mounted on.


Eye-in-hand
-----------------------
This configuration assumes that the camera is rigidly mounted on the robot’s end-effector and moves with the robot. Most commonly it is mechanically fixed to a flange or a tool.

The advantage of this system lies in its flexibility. If a larger FOV is required, the robot can pull back and do the imaging from afar. Imaging an object from multiple viewpoints allows a more complete 3D model (possibly a full 360-degree model). It can also change the viewpoint of the camera to look from a different angle. This can also help mitigate problems with specular reflections as these will typically appear in different regions when the viewpoint is changed. Another advantage of this system configuration is the absence of potential object occlusions caused by the robot.

One downside of this configuration is that collision avoidance must be implemented with careful control of the robot’s accelerations. This is to avoid damaging the working environment, the camera, and the robot. Another disadvantage of robot mounting is that the camera may not be used for image acquisition when the robot is not in the right position. For instance when it is delivering a part that it has picked up. Also, the robot has to stop moving before grabbing a 3D image. Finally, the weight of the camera reduces the available payload for the gripper and the objects the robot picks.

Now that we’ve introduced the system configurations, next we’ll identify the :ref:`Hand-Eye Calibration Problem`.
