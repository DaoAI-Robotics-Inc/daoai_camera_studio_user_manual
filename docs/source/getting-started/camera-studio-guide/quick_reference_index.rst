Quick Reference Index
=======================

File
------------

.. list-table:: 
   :widths: 25 50
   :header-rows: 1

   * - File
     - Function
   * - Load Setting
     - Load camera settings from file.
   * - Save Settings
     - Save the current camera settings.
   * - Save Settings As
     - Export the current camera settings.
   * - Load 3D Data
     - Load point cloud data from file.
   * - Save 3D Data
     - Save point cloud data to file.
   * - Temperature Control
     - Enable/Disable temperature control system.

View
------------

.. list-table:: 
   :widths: 25 50
   :header-rows: 1

   * - View
     - Function
   * - Show Operator Console
     - Toggle show or hide console.

Help
------------

.. list-table:: 
   :widths: 25 50
   :header-rows: 1

   * - Help
     - Function
   * - Search Online Help
     - Open the DaoAI Camera Studio User Manual in the browser.
   * - About DaoAI Studio
     - Show help page, with software version and contact information.

Hotkeys
------------

+------------------------+-------------------+----------------------------------------------------------+
| File                   | Shortcut          | Function                                                 |
+========================+===================+==========================================================+
| Save Settings          | Ctrl + S          | Save the current camera settings.                        |
+------------------------+-------------------+----------------------------------------------------------+
| Save Settings As       | Crtl + Shift + S  | Export the current camera settings.                      |
+------------------------+-------------------+----------------------------------------------------------+

Filters
---------

Please refer to the :ref:`Filters` page for more details.

+-----------------------------+---------------------------------------------------------------------------------------------------+
| Filters                     | Function                                                                                          |
+=============================+===================================================================================================+
| Intensity Threshold         | Filters out outliers caused by low quality pixels within dark areas in an image.                  |
+-----------------------------+---------------------------------------------------------------------------------------------------+
| Outlier Threshold           | Filters out points based on their distance from their nearest neighbouring point.                 |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Phase Quality Filter        | Filters out low contrast areas.                                                                   |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Gaussian Filter             | Use a moving average window to apply a smoothing effect on the point cloud.                       |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Median Filter               | Use a median sliding window to apply a smoothing effect on the point cloud.                       |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Face Normal Filter          | Filters out points which surface normal vector is at an angle larger than face normal value.      |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Remove Small Area           | Removes small chunk of isolated point cloud.                                                      |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Smooth Filter               | Rounds the depth value of an organized point cloud to the nearest mm.                             |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Fill Gaps                   | Fill in missing point cloud via interpolation.                                                    |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Saturation Filter           | Removes overexposed areas.                                                                        |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Contrast Distortion Filter  | Removes or corrects point cloud based on contrast.                                                |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
| Color Balance               | Adjusts image's colour by making the image closer to one of R, G, B.                              |
+-----------------------------+---------------------------------------------------------------------------------------------------+ 
