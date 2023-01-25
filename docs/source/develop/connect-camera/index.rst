Connecting Camera
=====================

.. contents:: 
   :local:

Introduction
-------------


This tutorial describes how to use the DaoAI SDK to capture point clouds and 2D images.

For MATLAB see Zivid Capture Tutorial for MATLAB.

Prerequisites
~~~~~~~~~~~~~~~

    - install DaoAI Camera Studio

Initialize
------------

Calling any of the APIs in the DaoAI SDK requires initializing the Zivid application and keeping it alive while the program runs.

.. tabs::

   .. tab:: C++

      .. code-block:: C++
         
         Zivid::Application zivid;

   .. tab:: C#

      .. code-block:: c#

         var zivid = new Zivid.NET.Application();

   .. tab:: Python

      .. code-block:: python

         app = zivid.Application()

Connect
-----------

Capture
---------

Now we can capture a 3D image. Whether there is a single acquisition or multiple acquisitions (HDR) 
is given by the number of ``acquisitions`` in ``settings``.

Load
~~~~~~

Once saved, the frame can be loaded from a ZDF file.

Capture 2D
~~~~~~~~~~~

If we only want to capture a 2D image, which is faster than 3D, we can do so via the 2D API.

.. Capture point cloud?

