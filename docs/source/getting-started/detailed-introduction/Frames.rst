Frames
=======

Frames are used to adjust exposure stop, brightness, and gain levels that are applied when doing captures. Camera Studio allows you to add multiple frames with different settings 
to capture multiple image groups and fine tune the quality of your resulting images.

|

Adding Frames
--------------

When an image does not meet the expected requirements, you can achieve more precise exposure levels by frames by adding more frames and with different exposure file settings. 
For example, two frames set 2 different exposure values as -1 and 0 respectively to make up for the situation that a single frame -1 is too dark or a single frame 0 is too bright.

Click the “+" button on the right frame settings menu in order to add more frames. Similarly, you can click on the trash can icon to delete a corresponding frame. The minimum 
number of frames is 1. 

.. figure:: images/frames_add_remove.png
    :align: center

    Add and remove buttons

.. figure:: images/frames_dropdown.png
    :align: center
    
    Dropdown menu reveals parameters

|

Frame Parameters
-----------------

All three parameters serves the purpose of adjusting final image brightness and each increase of one in any field will double the final image brightness.

When attempting to increase image brightness, you should prioritize "Brightness", then "Exposure Stop", and increase "Gain" last.

.. figure:: images/frames_settings.png
    :align: center
    
|

**Exposure Stop**

Responsible for adjusting the exposure time. The level of exposure stops are -1, 0, 1, 2, 3, 4. Since increasing "Exposure Stop" increases capturing time, you should only increase this field when "Brightness" has reached maximum value. The most commonly used exposure levels are -1, 0, and 1. 


**Brightness**

Responsible for adjusting the brightness of the projecter. The possible values are 1, 2, 3. Changing this field does not increase capturing time and should prioritize this field when adjusting image brightness. 


**Gain**

Responsible for increasing the ISO value or sensitivity of the camera. The span ranges from 0, 1, 2, 3, 4 where 0 is the base point 0dB and 4 corresponds to the highest value 
24dB (each slider increment causes 6dB change). When the gain is increased or decreased by 6dB, the gain effect is twice as much as that of the previous one. The conversion 
formula is: 20 x log (gain multiple) = + /-gain dB value. Increasing "Gain" will reduce signal-noise ratio, therefore we should increase this field lastly.


Point Cloud Color
-------------------

Independently capture the color for Point Cloud.

.. figure:: images/point_cloud_color.png
    :align: center
    
|

When enabled, a settings section will expand as the image above and when capture, will collect an additional image using the setting for the Point Cloud's color.
The additional image will be captured by projecting a white screen.

The settings are similar to "Frame Parameters" except the "Exposure Time", which is in miliseconds, allowing more precisive controls. 
