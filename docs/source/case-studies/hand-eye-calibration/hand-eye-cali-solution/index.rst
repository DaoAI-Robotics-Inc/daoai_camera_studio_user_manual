Hand-Eye Calibration Solution
================================
The previous part of this tutorial presented the problem that the hand-eye calibration needs to solve. This tutorial describes the background idea for a solution. The core idea is the same for eye-to-hand systems and eye-in-hand systems. Therefore, we first provide a detailed solution for the eye-to-hand configuration. Then, we point out the differences in the eye-in-hand configuration.

.. note::
    You don’t need a tool, or to know its pose (if you have one attached ) to do the hand-eye calibration. The Tool Center Point (TCP) value does not affect the hand-eye calibration result. In this article and later tutorials, the end-effector refers to the tool flange/end-link.

Eye-to-hand
------------------------------
How to solve the eye-to-hand calibration?

.. list-table:: 
   :widths: 25 25 

   * - The first step is choosing a calibration object, e.g. a 
   
       checkerboard. DaoAI checkerboards will be covered in the 
       
       next part of this tutorial.

     - .. image:: images/hand1.png
          :scale: 40%
    
   * - The calibration object is of known geometry. Thus, it can 
   
       be detected from the camera image. Further, its pose 
       
       relative to the camera (|1|) can be estimated.
     
     - .. image:: images/hand2.png
          :scale: 40%
     
   * - To calculate the relative pose between the camera and 
   
       the robot (|2|), we somehow need to close the circle 
       
       between the poses.

     - .. image:: images/hand3.png
          :scale: 40%
     
   * - The pose of the end-effector relative to the robot base (|3|

       ) is also known, provided by the robot controller.

     - .. image:: images/hand4.png
          :scale: 40%

   * - The missing pose that will close the pose circle is the 
   
       pose of the object relative to the end-effector (|4|).

     - .. image:: images/hand5.png
          :scale: 40%

   * - To get ‘rid’ of this pose or ‘fix’ it, we can mount the 
   
       calibration object onto the end-effector.

     - .. image:: images/tohand.png
          :scale: 40%

   * - Now it seems we have everything to close the pose circle 
   
       and thus calculate the pose of the camera relative to the 
       
       robot (|5|). However, it is not that simple.

     - .. image:: images/tohand1.png
          :scale: 40%


   * - This is because we haven’t really got ‘rid’ of the relative 
   
       pose (|4|). However, we have made it constant. Now, |4|
 
       will not change during the motion of the robot.

       This enables us to move a robot to a set of different 
       
       postures. For each one, |5| can be expressed as a 
       
       function of the remaining two variable, known poses:

            1. Robot to end-effector |3|

            2. Camera to calibration object |1| and one 
            
               constant, unknown pose |4|.

       With this set of equations, it is possible to utilize an 
       
       optimization technique, such as Tsai’s method, to 
       
       calculate the desired pose |5|.
     - .. image:: images/tohand2.png
          :scale: 40%



Eye-in-hand
------------------------------
How to solve the eye-in-hand calibration?

.. list-table:: 
   :widths: 25 25

   * - The situation is very similar for eye-in-hand systems. In 
   
       this case the calibration object is fixed to the work 
       
       environment. Thus, it is ensured that its pose relative to 
       
       the robot base is constant during the robot motion. 

     -  .. image:: images/inhand1.png
          :scale: 40%

   * - This allows us to express the pose of the camera relative 
   
       to the end-effector (|6|) as a function of two variable, 
       
       known poses:

            1. Robot to end-effector |3|

            2. Camera to calibration object |1| and one 
            
               constant, unknown pose |7|.

       Just as in the eye-to-hand configuration case, we can 
       
       solve for |6|.

     - .. image:: images/inhand2.png
          :scale: 40%

Now that we’ve explained how to solve the hand-eye calibration problem, let’s see learn about :ref:`Calibration Object`.


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