How To Get Good Quality Data On DaoAI Calibration Board
========================================================

This tutorial aims to present how to acquire good quality point clouds of DaoAI checkerboard for hand-eye calibration. It is a crucial step to get the hand-eye calibration algorithm to work as well as to achieve the desired accuracy. The goal is to configure a DaoAI HDR setting that gives high-quality point clouds regardless of where the DaoAI checkerboard is seen in the working space.

It is assumed that you have already specified the robot poses at which you want to take images of the DaoAI checkerboard. Check out how to select appropriate poses for hand-eye calibration.


.. Note::
    When using DaoAI calibration board, the entire calibration board, including fiducial marker, must be visible for each pose.


We will talk about two specific poses, the ‘near’ pose, and the ‘far’ pose. The ‘near’ pose is the robot pose where the imaging distance between the camera and the checkerboard is the least. For eye-in hand systems, that is the pose where the robot mounted camera approaches closest to the checkerboard. For eye-to-hand systems, it is the one where the robot positions the checkerboard closest to the stationary camera.

.. .. image:: images/1.png
..         :scale: 90%


The ‘far’ pose is the robot pose where the imaging distance between the camera and the checkerboard is the largest. For eye-in hand systems, that is the pose where the robot mounted camera pulls furthest away from the checkerboard. For eye-to-hand systems, it is the one where the robot positions the checkerboard furthest away from the stationary camera.

.. .. image:: images/2.png
..          :scale: 90%
 
The expected result is illustrated below:

.. image:: images/3.png
          :scale: 90%

Read :ref:`Camera Settings` to get the default setting of different DaoAI Camera.

Let’s see how to realize the :ref:`Hand-Eye Calibration Process` .