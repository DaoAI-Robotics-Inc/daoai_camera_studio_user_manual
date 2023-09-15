手眼标定解决方案
================================
上一篇教程介绍了手眼标定需要解决的问题， 本篇教程将描述手眼标定解决方案的背景思想。eye-to-hand和eye-in-hand的核心思想是一样的，因此我们将先详细描述eye-to-hand的解决方案，然后再说明eye-in-hand与之的区别。

.. note::
    手眼标定并不需要工具或知道其位姿（如果安装了工具）， 工具中心点 (TCP) 的值不会影响手眼标定的结果。在本文和以后的教程中，末端执行器是指工具法兰/末端连杆（end-link）。

Eye-to-hand
------------------------------
如何进行eye-to-hand标定？

.. list-table:: 
   :widths: 25 25 

   * - 第一步是选择一个用于校准的对象，例如一个棋盘格。
      
       DaoAI的棋盘格将在本教程的下一部分进行介绍。

     - .. image:: images/hand1.png
          :scale: 40%
    
   * - 校准对象具有已知的几何形状。因此，它可以从相机
   
       图像中检测出来。此外，可以估算出它相对于相机的姿势(|1|)。
     
     - .. image:: images/hand2.png
          :scale: 40%
     
   * - 为了计算相机和机器人之间的相对姿势 (|2|) ，我们需要以
   
       某种方式将各个姿势之间的循环封闭起来。这是手眼校准的
       
       关键步骤，通过将不同坐标系中的姿势相互关联，从而得到了
       
       相机和机器人之间的相对姿势信息。 

     - .. image:: images/hand3.png
          :scale: 40%
     
   * - 末端执行器相对于机器人基座的姿势 (|3|) 也是已知的，
   
       由机器人控制器提供。这个信息是手眼校准中的一个重要输入，
       
       帮助确定相机和机器人之间的相对姿势。

     - .. image:: images/hand4.png 
          :scale: 40%

   * - 缺失的姿势，将会封闭姿势圈的是物体相对于末端执行器的姿势。
   
       这个姿势是手眼校准中需要估计的重要参数，它帮助确定了相机
       
       和机器人末端执行器之间的相对姿势，从而使系统能够准确地
       
       执行抓取等操作 (|4|)。

     - .. image:: images/hand5.png
          :scale: 40%

   * - 为了消除或固定这个姿势，我们可以将校准对象安装在末端执行器上。
   
       这样，校准对象的姿势将与末端执行器的姿势保持一致，从而简化了
       
       手眼校准过程，因为物体相对于末端执行器的姿势在这种情况下
       
       不再是未知的。这种配置通常称为"眼在手"配置。

     - .. image:: images/tohand.png
          :scale: 40%

   * - 现在看起来我们已经拥有了一切来封闭姿势圈，因此可以计算相机
   
       相对于机器人的姿势 (|5|) 。然而，事情并不那么简单。手眼校准
       
       是一个复杂的过程，其中包含许多参数和变换，需要进行精确的
       
       数学计算和分析，以确保获得准确的结果。因此，虽然有了所有
       
       必要的信息，但手眼校准仍然需要仔细的处理和计算。

     - .. image:: images/tohand1.png 
          :scale: 40%


   * - 这是因为我们并没有真正消除相对姿势 (|4|) 。然而，我们已经
   
       将它固定了。现在，在机器人运动过程中，|4| 不会发生变化。

       这使我们能够将机器人移动到一组不同的姿势。对于每一个姿势，
       
       |5| 可以表示为剩下的两个已知姿势的函数：

            1. 机器人到末端执行器 |3| 

            2. 相机到标定对象 |1| 以及一个不变的、未知的位姿
              
               |4|。

       通过这组方程，可以利用优化技术（例如蔡氏方法）来计算所需的姿势。
       
       这种方法允许我们从已知的姿势信息中计算出相机相对于机器人的姿势，
       
       从而实现手眼校准。这是一个复杂的数学过程，通常需要计算机算
       
       法来执行。手眼校准的目标是获得高精度的结果，以确保机器人能够
       
       准确地定位和操作目标对象。 |5|.

     - .. image:: images/tohand2.png
          :scale: 40%



Eye-in-hand
------------------------------
如何进行eye-in-hand标定？

.. list-table:: 
   :widths: 25 25

   * - 对于Eye-in-hand，情况非常类似。在这种情况下，校准对象固定在
   
       工作环境中。因此，在机器人运动期间，可以确保它相对于机器人
       
       基座的姿势是恒定的。这种情况下，同样可以使用手眼校准方法来
       
       计算相机相对于机器人的姿势。Eye-to-hand和Eye-in-hand系统在
       
       校准过程中的核心思想是相似的，但涉及到不同的配置。

     -  .. image:: images/inhand1.png
          :scale: 40%

   * - 这使我们可以将相机相对于末端执行器的位姿  (|6|)

       表示为两个变量的函数，已知姿势：

            1. 机器人到末端执行器的姿势 |3|

            2. 相机到校准对象的姿势 |1| 
            
               一个恒定的未知姿势  |7|.

       通过这些信息，我们可以解出 |6|.从而确定了相机相对于末
       
       端执行器的姿势。这是眼在手配置下的手眼校准过程。手眼校准
       
       的目标是精确地计算相机与机器人末端执行器之间的相对姿势，
       
       以支持视觉引导机器人应用。

     - .. image:: images/inhand2.png
          :scale: 40%

现在我们已经解释了如何解决手眼标定的问题，接下来让我们了解一下:ref:`标定对象`.


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

.. |4| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <msubsup>
        <mi><b>H</b></mi>
        <mrow data-mjx-texclass="ORD">
          <mi><b>O</b></mi>
          <mi><b>B</b></mi>
          <mi><b>J</b></mi>
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

.. |7| raw:: html
    
    <math xmlns="http://www.w3.org/1998/Math/MathML">      
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
    </math>