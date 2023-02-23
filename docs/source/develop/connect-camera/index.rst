连接摄像机
=================================

.. contents:: 
   :local:

简介
---------------------


本教程介绍了如何使用DaoAI SDK来采集点云和二维图像。

关于MATLAB，请参见DaoAI Capture Tutorial for MATLAB。

前提条件
~~~~~~~~~~~~~~~~~~~

    - 安装DaoAI相机工作室

初始化
------------------

调用DaoAI相机SDK中的任何API都需要初始化DaoAI应用程序，并在程序运行时保持其活力。

.. tabs::

   .. tab:: C++

      .. code-block:: C++
         
         DaoAI::Application DaoAI;

   .. tab:: C#

      .. code-block:: c#

         var DaoAI = new DaoAI.NET.Application();

   .. tab:: Python

      .. code-block:: python

         app = DaoAI.Application()

连接
------------------

捕获
------------------

现在我们可以采集3D图像了。是单次采集还是多次采集（HDR）是由 "设置 "中的 "采集次数 "决定的。

加载
~~~~~~~~~~~~~~~~

一旦保存下来，就可以从ZDF文件中加载画面。

捕获2D
~~~~~~~~~~~~~~~~

如果我们只想捕捉一个2D图像，这比3D要快，我们可以通过2D API来实现。

.. 捕获点云？