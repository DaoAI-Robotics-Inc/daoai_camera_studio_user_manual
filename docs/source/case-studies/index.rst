Case Studies
==============

.. contents:: 
   :local:
   

Using ROI to Allow Auto Capture Better Generate Frame Parameters 
--------------------------------------------------------------------

"Why is the image so bright when I use Auto Capture? "

.. figure:: images/auto_roi_1.png
    :align: center

|

This is because Auto Capture by defualt takes account of the entire image, trying to have all part visible.
The background is darker than the foreground, and Auto Capture tries to make the background visible so the entire image becomes too bright.

Hence, we need to contrain an Region of Interest so that Auto Capture will only consider this area when generating frame parameters.

1. Enable ROI and drag to select a region then click save.

.. figure:: images/auto_roi_2.png
    :align: center

|

2. Hover mouse over Auto and allocate capture time, then click auto to generate frame parameters.

.. figure:: images/auto_roi_3.png
    :align: center

|

3. You may disable the ROI later as the frame parameters is already generated.

.. figure:: images/auto_roi_4.png
    :align: center

|

Delete a Frame in the Least Impactful Way
-------------------------------------------

"When using multiple frames and the image acquisition time is too long, which frame should I delete?""

.. figure:: images/del_frame_1.png
    :align: center

|

1. If you have More than 3 frames, delete the frame which its brightness is the median of the frames. This way the brightness is least affected after deletion.

.. figure:: images/del_frame_2.png
    :align: center

|

2. If you have 2 frames, combine the two frames by taking the average of their frame settings and replace the first frame, then delete the second frame. This way the brightness is least affected after deletion.

.. figure:: images/del_frame_3.png
    :align: center

|