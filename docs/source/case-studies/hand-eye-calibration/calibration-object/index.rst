Calibration Object
============================
The hand-eye calibration process requires using an object of known geometry that can be detected and localized from the camera image. 2D patterns are most commonly used as calibration objects. OpenCV libraries use a checkerboard, while HALCON software uses a dot pattern. Having a 3D camera enables using a 3D calibration object; an example is spheres.

DaoAI uses a checkerboard for the hand-eye calibration. The main DaoAI calibration objects can be found on the DaoAI WebShop. These boards are also used for camera maintenance with infield correction. Each of these boards has a 5x7 checkerboard made of 36 mm checkers and a fiducial marker in the corner. For these boards to be used in hand-eye calibration, both the checkerboard and fiducial marker need to be detectable in each capture.

If the DaoAI calibration object is unavailable, DaoAI hand-eye calibration will also function with the 9x15 grey-white Daoai checkerboards. These boards can be printed out with the PDFs provided below.