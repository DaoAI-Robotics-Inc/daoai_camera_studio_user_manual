Connectivity and Power Supply
========================================

Connectors
---------------------------------
.. tabs::

   .. group-tab:: BP SAMLL

    .. image:: images/small.png
        :align: center

    A. Power Connector 24V,5A DC
    B. Ethernet Connector CAT 6 or higher

   .. group-tab:: BP MEDIUM

    .. image:: images/medium.png
        :align: center

    A. Power Connector 24V,10A DC
    B. Ethernet Connector CAT 6 or higher

   .. group-tab:: BP LARGE

    .. image:: images/large.png
        :align: center

    A. Ethernet Connector CAT 6 or higher
    B. Power Connector 24V,5A DC
   
   .. group-tab:: BP AMR

    .. image:: images/amr.png
        :align: center

    A. Power Connector 24V,5A DC
    B. Ethernet Connector CAT 6 or higher
      
   .. group-tab:: BP AMR-GPU

    .. image:: images/amr_gpu.png
        :align: center

    A. Power Connector 24V,5A DC
    B. Ethernet Connector CAT 6 or higher

    

Power supply interface
^^^^^^^^^^^^^^^^^^^^^^^
.. tabs::

   .. group-tab:: BP SAMLL

    +-----------------------+--------+------------------------------+
    | Pinout                |  Pin   |  Purpose                     | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/1.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  TRGE                        | 
    |                       +--------+------------------------------+
    |                       |   4    |  TGND                        | 
    |                       +--------+------------------------------+
    |                       |   5    |  SGND                        | 
    |                       +--------+------------------------------+
    |                       |   6    |  Reserved, do not connect    | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND: represent the "power ground"
        - AGND: represent the "analog ground"
        - DGND: represent the "digital ground"
        - SGND: represent the "signal ground"


   .. group-tab:: BP MEDIUM

    +-----------------------+--------+------------------------------+
    | Pinout                |  Pin   |  Purpose                     | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/1.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  TRGE                        | 
    |                       +--------+------------------------------+
    |                       |   4    |  TGND                        | 
    |                       +--------+------------------------------+
    |                       |   5    |  SGND                        | 
    |                       +--------+------------------------------+
    |                       |   6    |  Reserved, do not connect    | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND: represent the "power ground"
        - AGND: represent the "analog ground"
        - DGND: represent the "digital ground"
        - SGND: represent the "signal ground"

   .. group-tab:: BP LARGE

    +-----------------------+--------+------------------------------+
    | Pinout                |  Pin   |  Purpose                     | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/1.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  TRGE                        | 
    |                       +--------+------------------------------+
    |                       |   4    |  TGND                        | 
    |                       +--------+------------------------------+
    |                       |   5    |  SGND                        | 
    |                       +--------+------------------------------+
    |                       |   6    |  Reserved, do not connect    | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND: represent the "power ground"
        - AGND: represent the "analog ground"
        - DGND: represent the "digital ground"
        - SGND: represent the "signal ground"

   .. group-tab:: BP AMR

    +-----------------------+--------+------------------------------+
    | Pinout                |  Pin   |  Purpose                     | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/2.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  SGND                        | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND: represent the "power ground"
        - AGND: represent the "analog ground"
        - DGND: represent the "digital ground"
        - SGND: represent the "signal ground"

   
   .. group-tab:: BP AMR-GPU

    +-----------------------+--------+------------------------------+
    | Pinout                |  Pin   |  Purpose                     | 
    +=======================+========+==============================+
    |                       |   1    |  DC24V                       |
    |                       +--------+------------------------------+
    |.. image:: images/2.png|   2    |  RGND                        | 
    |  :align: center       +--------+------------------------------+
    |                       |   3    |  SGND                        | 
    +-----------------------+--------+------------------------------+

    .. tip::
        - PGND: represent the "power ground"
        - AGND: represent the "analog ground"
        - DGND: represent the "digital ground"
        - SGND: represent the "signal ground"




Data cable
^^^^^^^^^^^^^^^^^^^^^^^

.. tabs::

   .. group-tab:: BP SAMLL

    BP Small use a ethernet cable for data transmission.

    The table below provides the ethernet cable pinout.


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP MEDIUM

    BP Medium use a ethernet cable for data transmission.

    The table below provides the ethernet cable pinout.


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP LARGE

    BP Large use a ethernet cable for data transmission.

    The table below provides the ethernet cable pinout.


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP AMR

    BP Amr use a ethernet cable for data transmission.

    The table below provides the ethernet cable pinout.


    .. image:: images/ethernet.png
        :align: center

   .. group-tab:: BP AMR-GPU

    BP Amr-gpu use a ethernet cable for data transmission.

    The table below provides the ethernet cable pinout.


    .. image:: images/ethernet.png
        :align: center



Connecting to the computer
-----------------------------------

.. tabs::

   .. group-tab:: BP SAMLL

    1. Plug the power supply first into the "24V "
    2. Plug the ethernet cable into the camera and connect it to your computer
    3. Plug the power supply into a power outlet.

    .. note::
        On disconnect, follow the procedure in reverse, disconnect mains power first. 
        |br| Ensure that all connections are screwed in tightly. The coupling nut of the M12 screw connectors can in some cases be hard do screw in. However, when installed correctly they provide a robust and reliable connection.       
        |br| Check :ref:`System Requirements` for performance considerations

    Use the AC/DC adapter supplied with the unit to ensure compliance with emission and immunity standards.

    The DaoAI BP Small camera is protected against reverse polarity and against overheating by a thermistor that physically removes the power.

    The DaoAI BP Small camera uses Ethernet communication and needs 1 Gbps for  performance. 
    
    Network Topology
        The DaoAI BP Small camera supports the following network topologies:

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - Direct connection
          - Connection via switch
        * - .. image:: images/amrc.png
                :scale: 38%
          - .. image:: images/amrswitch.png
                :scale: 34% 

    Continue to :ref:`Software Installation` where you will also find Network Configuration.

   
   .. group-tab:: BP MEDIUM

    1. Plug the power supply first into the "24V"
    2. Plug the ethernet cable into the camera and connect it to your computer
    3. Plug the power supply into a power outlet.

    .. note::
        On disconnect, follow the procedure in reverse, disconnect mains power first. 
        |br| Ensure that all connections are screwed in tightly. The coupling nut of the M12 screw connectors can in some cases be hard do screw in. However, when installed correctly they provide a robust and reliable connection.       
        |br| Check :ref:`System Requirements` for performance considerations

    Use the AC/DC adapter supplied with the unit to ensure compliance with emission and immunity standards.

    The DaoAI BP Medium camera is protected against reverse polarity and against overheating by a thermistor that physically removes the power.

    The DaoAI BP Medium camera uses Ethernet communication and needs 1 Gbps for performance.
    
    Network Topology
        The DaoAI BP Medium camera supports the following network topologies:

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - Direct connection
          - Connection via switch
        * - .. image:: images/mediumc.png
                :scale: 38%
          - .. image:: images/mediumswitch.png
                :scale: 34% 

    Continue to :ref:`Software Installation` where you will also find Network Configuration.


   .. group-tab:: BP LARGE

    1. Plug the power supply first into the "24V"
    2. Plug the ethernet cable into the camera and connect it to your computer
    3. Plug the power supply into a power outlet.

    .. note::
        On disconnect, follow the procedure in reverse, disconnect mains power first. 
        |br| Ensure that all connections are screwed in tightly. The coupling nut of the M12 screw connectors can in some cases be hard do screw in. However, when installed correctly they provide a robust and reliable connection.       
        |br| Check :ref:`System Requirements` for performance considerations

    Use the AC/DC adapter supplied with the unit to ensure compliance with emission and immunity standards.

    The DaoAI BP LARGE camera is protected against reverse polarity and against overheating by a thermistor that physically removes the power.

    The DaoAI BP LARGE camera uses Ethernet communication and needs 1 Gbps for performance.

    Network Topology
        The DaoAI BP large camera supports the following network topologies:

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - Direct connection
          - Connection via switch
        * - .. image:: images/largec.png
                :scale: 38%
          - .. image:: images/largeswitch.png
                :scale: 34% 

    Continue to :ref:`Software Installation` where you will also find Network Configuration.

   
   .. group-tab:: BP AMR

    1. Plug the power supply first into the "24V"
    2. Plug the ethernet cable into the camera and connect it to your computer
    3. Plug the power supply into a power outlet.

    .. note::
        On disconnect, follow the procedure in reverse, disconnect mains power first. 
        |br| Ensure that all connections are screwed in tightly. The coupling nut of the M12 screw connectors can in some cases be hard do screw in. However, when installed correctly they provide a robust and reliable connection.       
        |br| Check :ref:`System Requirements` for performance considerations

    Use the AC/DC adapter supplied with the unit to ensure compliance with emission and immunity standards.

    The DaoAI BP AMR camera is protected against reverse polarity and against overheating by a thermistor that physically removes the power.

    The DaoAI BP AMR camera uses Ethernet communication and needs 1 Gbps for performance. 
    
    Network Topology
        The DaoAI BP AMR camera supports the following network topologies:

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - Direct connection
          - Connection via switch
        * - .. image:: images/amrc.png
                :scale: 38%
          - .. image:: images/amrswitch.png
                :scale: 34% 
    
    Continue to :ref:`Software Installation` where you will also find Network Configuration.

      
   .. group-tab:: BP AMR-GPU

    1. Plug the power supply first into the "24V"
    2. Plug the ethernet cable into the camera and connect it to your computer
    3. Plug the power supply into a power outlet.

    .. note::
        On disconnect, follow the procedure in reverse, disconnect mains power first. 
        |br| Ensure that all connections are screwed in tightly. The coupling nut of the M12 screw connectors can in some cases be hard do screw in. However, when installed correctly they provide a robust and reliable connection.       
        |br| Check :ref:`System Requirements` for performance considerations

    Use the AC/DC adapter supplied with the unit to ensure compliance with emission and immunity standards.

    The DaoAI BP AMR camera is protected against reverse polarity and against overheating by a thermistor that physically removes the power.

    The DaoAI BP AMR camera uses Ethernet communication and needs 1 Gbps for performance. 

    Network Topology
        The DaoAI BP AMR-GPU camera supports the following network topologies:

    .. list-table::
        :widths: 25 25 
        :header-rows: 1

        * - Direct connection
          - Connection via switch
        * - .. image:: images/amrc.png
                :scale: 38%
          - .. image:: images/amrswitch.png
                :scale: 34% 

    Continue to :ref:`Software Installation` where you will also find Network Configuration.

     
.. |br| raw:: html

      <br>