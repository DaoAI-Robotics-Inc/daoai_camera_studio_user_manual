Filters
--------

This section describes the filters used for pre and post processing images in order to improve the point cloud quality.


Intensity Threshold
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/intensity_threshold.png
    :align: center

|

Our intensity metric is based off of the average pixel intensity value from the four fringe projections from capture. The threshold helps filter out outliers that are caused by 
low quality pixels within dark areas in an image. Generally we see that for objects with low reflectivity, the algorithm is not able conduct 3D reconstruction and thus computes 
incorrect points there. The value of the intensity threshold corresponds to the averaged RGB value we want to filter at.

e.g. When the intensity threshold is 20, all the pixels in the final image with values <= 20 will be filtered out.

.. figure:: images/intensity.png
    :align: center

|

Outlier Threshold
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/outlier_threshold.png
    :align: center

|

Used to filter out points that are more than a certain distance from their nearest neighboring point. For example, if set to 3mm, it is determined whether the straight-line 
distance between two adjacent point is greater than 3mm. If it is greater than 3mm, the point is filtered out. However, if there are multiple outliers close to each other, this 
filter will not be able to filter out those points.

.. figure:: images/outlier_before.png
    :align: center

    Point cloud without outlier threshold set

.. figure:: images/outlier_after.png
    :align: center

    Point cloud with outlier threshold set to 3mm

|

Phase Quality Filter
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/phase_quality.png
    :align: center

|

This filter is used to filter out low contrast areas. The track bar can be used to set the filtering strength. Higher value will filter out more areas. For example, 
using a phase quality filter of 0.3, some area of the floor is filtered out in the point cloud. 

.. figure:: images/phase_quality_before.png
    :align: center

    Point cloud without phase quality set

.. figure:: images/phase_quality_after.png
    :align: center

    Point cloud with phase_quality set to 0.3

|

Gaussian Filter
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/gaussian.png
    :align: center

|

This filter applies a moving average window to each pixel of the captured image. The gaussian kernel size can be set to be 3x3 , 5x5, 7x7, 9x9, 11x11, and 13x13. This applies a 
smoothing effect on the point cloud and also helps to remove outlier points.

.. figure:: images/gaussian_before.png
    :align: center

    Original point cloud

.. figure:: images/gaussian_5x5.png
    :align: center

    Point cloud with Gaussian filter of kernel size 5x5

.. figure:: images/gaussian_9x9.png
    :align: center

    Point cloud with Gaussian filter of kernel size 9x9

|

Median Filter
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/median.png
    :align: center

|

This filter finds the median value of a sliding window to update the current pixel as. The kernel size can be 3x3 or 5x5. This applies a smoothing effect on the point and helps 
remove outlier points.

.. figure:: images/median_before.png
    :align: center

    Original point cloud

.. figure:: images/median_after.png
    :align: center

    Point cloud with median filter of kernel size 5x5

|

Face Normal Filter
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/face_noraml.png
    :align: center

|

This filter analyzes a point cloud polygon mesh to find the surface normal vector of any polygon. If the surface normal vector is at an angle larger than the face normal value 
with respect to the line of sight, then the points are filtered out. On objects with sharp corners and large areas where the surface normal is perpendicular to the line of sight, 
many outliers occur. An example is a box: the walls sometimes create outlier points in the point cloud due to noise, low contrast or over-saturated images. 

Without this filter, the incorrect points show up on the edges of holes, sharp drop offs, vertical faces, and more.

.. figure:: images/face_normal_before.png
    :align: center

    Original point cloud

.. figure:: images/face_normal_after.png
    :align: center

    Point cloud with Face Normal Filter

|

Remove Small Area
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/remove_small_area.png
    :align: center

|

This filter removes small chunks of isolated point cloud. Since noise often appear in the form of small dots, they can be removed using this filter.

.. figure:: images/remove_small_area_before.png
    :align: center

    Original point cloud

.. figure:: images/remove_small_area_after.png
    :align: center

    Point cloud with Remove Small Area

|

Smooth Filter
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/smooth_filter.png
    :align: center

|

This filter is a post-processing filter which rounds the depth value of an organized point cloud to the nearest mm. For example, if the smooth value is 0.5, each of the depth 
values will be rounded to the nearest 0.5mm. This filter is useful in scenarios where images with noise errors causes small oscillations on the point cloud. If you know the model 
is flat and you see small oscillations in the point cloud, you can use this filter to round the data to create a flat model.

.. figure:: images/smooth_before.png
    :align: center

    Original point cloud

.. figure:: images/smooth_after.png
    :align: center

    Point cloud with Smooth Filter

|

Fill Gaps
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/fill_gaps.png
    :align: center

|

Interpolation can be used to caltulate the coordinates of points in areas where points are missing from the point cloud. There will be scenarios where your point cloud is missing 
points in areas due things like reflection, poor lighting, etc. Thresholds can be set for maximum gap area width, depth, and slope, to describe the areas of the point cloud where 
interpolation will occur to calculate and fill in these missing points.

.. figure:: images/fill_before.png
    :align: center

    Original point cloud

.. figure:: images/fill_after.png
    :align: center

    Point cloud with Fill Gaps

|

Saturation Filter
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/saturation.png
    :align: center

|

This filter removes areas that are overexposed. When one of the three RGB channels exceeds 255, it deletes the pixel. Usually G (green) is the first overexposed channel. When 
using the filter, HDR mode is automatically selected and can be manually cancelled if it is not necessary. One of the drawbacks of the filter is that some smooth edges may be 
distorted.

.. figure:: images/saturation_before.png
    :align: center

    Area in red marks the over-saturated area

.. figure:: images/saturation_after.png
    :align: center

    Point cloud with saturation filter

|

Contrast Distortion Filter
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/constrast_distortion.png
    :align: center

|

Contrast distortion occurs due to imperfections in the lens and optical phenomena like diffraction and chromatic aberration. It appears when there is an abrupt contrast change 
from a highly absorptive to a reflective surface (e.g. in a black to white transition on a checkerboard), which leads to measurement errors in the 3D point cloud.

* If “Remove“ is selected, regions of high contrast distortion will be removed from the 3D point cloud.
* If “Correct“ is selected, measurement errors caused by contrast distortion will be compensated based on a “Strength“ value user set on the GUI. The higher “Strength“ value user use, the more measurement error will be compensated. Note that, it's possible to over-compensate the measurement error which looks like “opposite“ contrast distortion.

.. figure:: images/cd_before.png
    :align: center
    :scale: 60%	

    Point cloud color image (contrast distortion visible) 

.. figure:: images/cd_before_green.png
    :align: center
    :scale: 60%	

    Point cloud green image (contrast distortion visible)

.. figure:: images/cd_removed_green.png
    :align: center
    :scale: 60%	

    Using “remove” for contrast distortion

.. figure:: images/cd_correct.png
    :align: center
    :scale: 60%	

    Using “correct” for contrast distortion

|

Color Balance
~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: images/color_balance.png
    :align: center

    Color balance controls

|

By increasing the corresponding value of R/G/B, you can make the image closer to that color. The default value is 1, the minimum is 0.5, and the maximum is 2.

Used when the color of the background environment is slightly inclined to a certain hue. Adjust the balance of other colors. Usually, it does not need to be set up.

Preview options are not available, a single capture is required to see the image effect.

.. figure:: images/color_balance_r.png
    :align: center

    R biased color balance

.. figure:: images/color_balance_g.png
    :align: center

    G biased color balance

.. figure:: images/color_balance_b.png
    :align: center

    B biased color balance

.. figure:: images/color_balance_awb.png
    :align: center

|

Clicking the "AWB" (as the image above) to use the auto white balance tool. After clicking the "AWB", drag to select an area of neutral color (white or gray) and click confirm. 
R, G, B values will be computed so that after applying color balance, the selected area can be adjusted to white.

.. figure:: images/awb_1.png
    :align: center

    drag and select an area in the display

.. figure:: images/awb_2.png
    :align: center

    image after auto white balance

|
