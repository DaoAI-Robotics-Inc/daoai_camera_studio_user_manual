手眼标定的问题
===============================
本教程旨在描述手眼标定解决的问题，以及介绍手眼标定所需的机器人位姿和坐标系。eye-to-hand系统和eye-in-hand系统的问题是相同的。因此，我们将首先对eye-to-hand配置进行说明，然后我们将描述eye-in-hand配置与之的区别。

Eye-to-hand
-----------------------------
机器人如何抓取物体？

.. list-table:: 
   :widths: 20 20

   * - 让我们从一个不涉及到相机的机器人开始。
   
       它有两个主要的坐标系:

       1. 机器人基坐标系

       2. 末端执行器坐标系

     - .. image:: images/tohand.png
          :scale: 40%



   * - 为了能够抓取一个物体，机器人控制器需要知道物体相对于
   
       机器人基坐标系的姿势（位置和方向），同时还需要了解
       
       机器人的几何形状和尺寸。将这两种信息结合起来足以计算
       
       出将末端执行器/夹持器移动到物体附近所需的关节角度。
     
     - .. image:: images/tohand1.png
          :scale: 40%

   * - 假如物体相对于机器人的位姿是未知的，那么这就是
   
       DaoAI 3D视觉发挥作用的地方了。

     - .. image:: images/tohand2.png
          :scale: 40%

DaoAI点云是相对于DaoAI相机的坐标系给出的。在这个坐标系中，原点固定在DaoAI成像镜头的中央（内部2D相机）。机器视觉软件可以在这些数据点的集合上运行检测和定位算法。它可以确定物体在DaoAI相机的坐标系中的姿势。这个信息对于实现精确定位和抓取物体非常重要 (|1|).
 
.. image:: images/together.png
          :scale: 60%

.. list-table:: 
   :widths: 20 20

   * - DaoAI相机现在可以在其视野范围内看到物体，但是物体的坐标是

       相对于相机自己的坐标系的。为了让机器人能够抓取物体，必须将
       
       物体的坐标从相机坐标系转换到机器人基坐标系。这个坐标变换是
       
       为了确保机器人能够准确地定位和抓取物体，因为机器人的动作是
       
       相对于机器人基坐标系的。这个过程通常涉及到手眼校准，以确保
       
       正确的坐标转换和物体定位。

     - .. image:: images/tohand3.png
          :scale: 40%

   * - 实现这一目标的坐标转换是手眼校准的结果。对于手到眼系统，
   
       手眼校准估计的是相机相对于机器人基座的姿势。这个姿势估
       
       计允许我们将相机坐标系中的物体姿势转换为机器人基坐标系
       
       中的姿势，从而使机器人能够精确定位和抓取物体。手眼校准
       
       是实现视觉引导机器人精确操作的重要步骤。 ( |2| ). 
       
       位姿关联完成后，就可以通过关联圈中的任意一种位姿数据
       
       计算出另一姿势 I这可以通过将相机相对于机器人的姿势与
       
       物体相对于相机的姿势进行后置乘法运算来实现： 
      
       |3|

     - .. image:: images/tohand4.png
          :scale: 40%
    
Eye-in-hand
--------------------------
How 机器人如何拾取物体？

.. list-table:: 
   :widths: 20 20

    
   * - DaoAI相机现在可以在其视野范围内看到物体，但是物体
   
       的坐标是相对于相机自己的坐标系的。为了使机器人能够
       
       抓取物体，必须将物体的坐标从相机坐标系转换到机器人
       
       基坐标系。这个坐标转换是为了确保机器人能够准确地
       
       定位和抓取物体，因为机器人的动作是相对于机器人基坐
       
       标系的。这个过程通常涉及到手眼校准，以确保正确的坐标
       
       转换和物体定位。
    
     - .. image:: images/inhand.png
          :scale: 40%

   * - 在这种情况下，坐标转换是间接完成的： |4|

       末端执行器相对于机器人基座的姿势(|5|)是已知的，
       
       并由机器人控制器提供。相机相对于末端执行器的姿势
       
       (|6|)在这种情况下是恒定的，是通过手眼校准估计得到的。
     - .. image:: images/inhand1.png
          :scale: 40%

现在我们已经定义了手眼标定的问题，让我们看看 :ref:`手眼标定解决方案.`.



.. |1| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
          <mi><b>J</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>C</b></mi>
          <mi><b>A</b></mi>
          <mi><b>M</b></mi>
        </mrow>
      </msubsup>
    </math>

.. |2| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>C</b></mi>
          <mi><b>A</b></mi>
          <mi><b>M</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>R</b></mi>
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
        </mrow>
      </msubsup>
    </math>




.. |3| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
          <mi><b>J</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>R</b></mi>
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
        </mrow>
      </msubsup>
      <mo>=</mo>
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>C</b></mi>
          <mi><b>A</b></mi>
          <mi><b>M</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>R</b></mi>
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
        </mrow>
      </msubsup>
      <mo>&#x22C5;</mo>
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
          <mi><b>J</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>C</b></mi>
          <mi><b>A</b></mi>
          <mi><b>M</b></mi>
        </mrow>
      </msubsup>
    </math>


.. |4| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
          <mi><b>J</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>R</b></mi>
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
        </mrow>
      </msubsup>
      <mo>=</mo>
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>E</b></mi>
          <mi><b>E</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>R</b></mi>
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
        </mrow>
      </msubsup>
      <mo>&#x22C5;</mo>
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>C</b></mi>
          <mi><b>A</b></mi>
          <mi><b>M</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>E</b></mi>
          <mi><b>E</b></mi>
        </mrow>
      </msubsup>
      <mo>&#x22C5;</mo>
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
          <mi><b>J</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>C</b></mi>
          <mi><b>A</b></mi>
          <mi><b>M</b></mi>
        </mrow>
      </msubsup>
    </math>


.. |6| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>C</b></mi>
          <mi><b>A</b></mi>
          <mi><b>M</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>E</b></mi>
          <mi><b>E</b></mi>
        
        </mrow>
      </msubsup>
    </math>


.. |5| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>E</b></mi>
          <mi><b>E</b></mi>
        </mrow>
        <mrow data-mjx-texclass="ORD">
          <mi><b>R</b></mi>
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
        </mrow>
      </msubsup>
    </math>