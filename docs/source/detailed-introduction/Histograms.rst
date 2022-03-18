Histograms
===========

The histogram window provides a visualization of the distribution of the RGB values (0-255) of all the pixels in the image.

|

**Goal:** To have the highest column in the logarithmic histogram to around 128 to avoid 255 overexposures. This can be achieved by adding frames and adjusting exposure levels. 

Click “Histogram” in the upper left corner to toggle the histogram window. The histogram plot will pop up on the screen automatically. Inside this window, there are two different 
tabs for switching between graphs of a linear distribution and logarithmic distribution. Overexposed pixels are marked a red color so you can easily see them. If there are a large 
number of pixels in 255 range, the image is overexposed. Shorter exposure time or lower brightness should be chosen to limit the overexposure.

.. figure:: images/histogram_linear.png
    :align: center
    
    Linear distribution

.. figure:: images/histogram_logarithmic.png
    :align: center
    
    Logarithmic distribution
