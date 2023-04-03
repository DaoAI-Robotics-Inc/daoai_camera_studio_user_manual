Using Multiple DaoAI Cameras
=============================

**DaoAI Vision** allows you to operate multiple DaoAI Cameras of the BP series simultaneously (e.g. connecting both BP-S and BP-L).

However, it comes with some limitations: 

    - Each of the DaoAI Cameras must have a unique IP address.
    - Each of the DaoAI Cameras have to be connected using separate ethernet ports.
    - The same holds for any combination of these API calls (connect, update firmware, list cameras) at the same time from multiple threads or processes.

To connect multiple cameras in Vision: 

Select **Platform** → **Platform Configuration** in the tool bar.

.. image:: images/v_platform.png

In the **Camera** tab, click **+** to start adding a new camera, select the appropriate camera model from the dropdown list, then click **Accept** to add the camera.

.. image:: images/v_platform_accept.png

If it is a remote camera, select the **Enable Remote Camera** checkbox and enter its IP address. Click **Update Camera List**, then select the Camera from the list. Click Connect to connect the camera.

.. image:: images/v_platform_added.png

.. note:: 
    For multiple Remote Cameras, make sure you have configured your cameras' IP addresses (see :ref:`Network Configuration`), otherwise you may have issue finding or connecting the cameras.

