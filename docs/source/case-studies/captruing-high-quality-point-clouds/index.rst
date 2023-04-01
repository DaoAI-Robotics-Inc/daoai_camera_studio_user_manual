Capturing High Quality Point Clouds
=========================================
DaoAI camera studio have three ways to change the exposure:

- Projector Brightness
- Exposire Time
- Gain

In this tutorial, we will first explore what the different exposure variables are, how they work, and which considerations should be taken when using them. Then we will apply these principles to establish a simple 3D imaging technique that aims at acquiring high-quality point clouds.

**Projector Brightness**

Projector brightness controls the output power and thus the amount of light that is emitted by the projector. Using the projector brightness is the most efficient way to maximize signal-to-noise ratio (SNR). Maximizing projector brightness will maximize the amplitude of the signal received by the camera. This minimizes impact from noise, as long as the reflected light from the projector does not over-saturate the pixel. At the same time as improving the peak signal amplitude, increased brightness also affects the mean intensity of the image. This also means that projector brightness can be used to control exposure, measured in stops.

**Exposure Time**

The exposure time also known as shutter speed is the amount of time that a single camera image is exposed to light. In other words, for how long the shutter remains open.

**Gain**

Gain is a parameter that lets the user configure the pre-amplification of the read-out circuit in the imaging sensor pixels. In photography, it is commonly referred to as ISO. Increasing the gain increases the pre-amplification of the sensor which will increase its sensitivity to light and thus result in brighter images.

3D imaging technique
------------------------------------
In this part of the tutorial, we will present a 3D imaging technique. This technique utilizes the histogram to evaluate our point cloud in a predictable and step-by-step manner, in order to acquire good 3D point clouds. The procedure can be divided into these steps:
  
    - :ref:`Working Distance and Camera Positioning`
    - :ref:`Filters`