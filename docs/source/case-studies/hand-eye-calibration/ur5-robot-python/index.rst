UR5 Robot + Python: Generate Dataset and perform Hand-Eye Calibration
=========================================

.. contents:: 
   :local:


.. note::
    This tutorial is built and using Universal Robots UR5e.

Introduction
---------------------------------
Accurate hand-eye calibration requires a good dataset, but generating this dataset is not trivial. In this tutorial, we first set up communication between the Daoai camera and the Universal Robots (UR) UR5e. Then, we extract a dataset consisting of 3D images and robot poses. Finally, we use this dataset to do the hand-eye calibration. The sample works for both eye-in-hand and eye-to-hand.

If you are not familiar with hand-eye calibration, we recommend going through Hand-Eye Calibration.

Requirements
-------------------------------

- A UR robot with a standard TCP/IP connection.
- DaoAI Vision installed.
- DaoAI checkerboard for calibration.

Prepare UR5e robot
------------------------------

Modify universal_robots_robot_motion_script.urp robot motion script
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
