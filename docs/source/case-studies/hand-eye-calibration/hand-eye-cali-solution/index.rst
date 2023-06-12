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

     - Heading row 1, column 2
    
   * - The calibration object is of known geometry. Thus, it can 
   
       be detected from the camera image. Further, its pose 
       
       relative to the camera () can be estimated.
     -
     
   * - To calculate the relative pose between the camera and 
   
       the robot (), we somehow need to close the circle 
       
       between the poses.

     - Row 2, column 2
     
   * - The pose of the end-effector relative to the robot base (

       ) is also known, provided by the robot controller.

     - Row 2, column 2

   * - The missing pose that will close the pose circle is the 
   
       pose of the object relative to the end-effector ().

     - Row 2, column 2

   * - To get ‘rid’ of this pose or ‘fix’ it, we can mount the 
   
       calibration object onto the end-effector.

     - Row 2, column 2

   * - Now it seems we have everything to close the pose circle 
   
       and thus calculate the pose of the camera relative to the 
       
       robot (). However, it is not that simple.

     - Row 2, column 2

   * - This is because we haven’t really got ‘rid’ of the relative 
   
       pose (). However, we have made it constant. Now, 
 
       will not change during the motion of the robot.

       This enables us to move a robot to a set of different 
       
       postures. For each one, can be expressed as a 
       
       function of the remaining two variable, known poses:

            1. Robot to end-effector 

            2. Camera to calibration object and one 
            
               constant, unknown pose.

       With this set of equations, it is possible to utilize an 
       
       optimization technique, such as Tsai’s method, to 
       
       calculate the desired pose .
     - Row 2, column 2


Eye-in-hand
------------------------------
How to solve the eye-in-hand calibration?

.. list-table:: 
   :widths: 25 25

   * - The situation is very similar for eye-in-hand systems. In 
   
       this case the calibration object is fixed to the work 
       
       environment. Thus, it is ensured that its pose relative to 
       
       the robot base is constant during the robot motion. 

     -  Row 2, column 2

   * - This allows us to express the pose of the camera relative 
   
       to the end-effector () as a function of two variable, 
       
       known poses:

            1. Robot to end-effector 

            2. Camera to calibration object and one 
            
               constant, unknown pose.

       Just as in the eye-to-hand configuration case, we can 
       
       solve for.

     - Row 2, column 2



