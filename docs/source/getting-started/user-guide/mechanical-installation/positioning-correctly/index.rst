Positioning Correctly
=================================
The camera and the projector have an angle with respect to the center axis. This should be considered if it is desired to have the camera perpendicular to the scene.

.. .. tabs::

..    .. group-tab:: BP SAMLL

..     .. image:: images/small.png
..         :align: center

..    .. group-tab:: BP MEDIUM

..     .. image:: images/medium.png
..         :align: center

..    .. group-tab:: BP LARGE

..     .. image:: images/large.png
..         :align: center

   
..    .. group-tab:: BP AMR

..     .. image:: images/amr.png
..         :align: center
   

..    .. group-tab:: BP AMR-GPU

..     .. image:: images/amr.png
..         :align: center
   

If possible, mount the camera at a slight tilt angle to avoid reflections and interference from the background. This also frees up space above the scene for easier access for tools and robots. Check out available DaoAI mounts.

Ambient light might reduce performance. Consider blocking direct light affecting the scene.

.. image:: images/fov.png
    :align: center

.. note::
    Camera tilting is more important if the scene contains specular surfaces.

Please checkout  :ref:`Working Distance and Field-of-View`  Working Distance and Camera Positioning for more information on how to correctly position your camera.

In bin-picking applications
----------------------------------

For bin-picking applications, place the DaoAI BP camera projector above the back edge or above the rear corner of the bin (see images below). Pan and tilt it so that the 2D camera is looking at the center of the bin. The projector rays should not fall on the inner surfaces of the two walls closest to the projector; they should almost be parallel to those two walls. Mounting the camera this way minimizes inter reflections from the bin walls.

.. image:: images/position.png
        :align: center

Cooling clearance
----------------------------------
DaoAI BP LARGE cameras use active and passive cooling, other BP cameras use passive cooling, they all allow some space around the device for airflow, and do not block the air opening on its front and rear sides. See the datasheets for the operating temperature range for your camera.

Signal protection
---------------------------------
Do not install DaoAI BP cameras and cables next to high voltage devices that can generate high levels of electromagnetic disturbance. Do not route camera cabling through the same trunks/conduits with AC power cables and cables emitting high levels of disturbance.

Continue reading about :ref:`Connectivity and Power Supply`.