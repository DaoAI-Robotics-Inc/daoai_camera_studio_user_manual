API Reference
=================

DaoAI Camera Studio API reference.

.. contents:: 
   :local:


Namespace
-----------

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            namespace DaoAI

      .. group-tab:: C#

         .. code-block:: c#
            
            namespace DaoAI_NET


      .. group-tab:: Python

         .. code-block:: python

Classes
---------

*Class* Application
~~~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            #include "application.h"

      .. group-tab:: C#

         .. code-block:: c#
            
            #include "application.h"


      .. group-tab:: Python

         .. code-block:: python


Public Member Functions
`````````````````````````

   Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API Application();

         .. group-tab:: C#

            .. code-block:: c#
               
               Application();

         .. group-tab:: Python

            .. code-block:: python

   Destructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API ~Application();

         .. group-tab:: C#

            .. code-block:: c#
               
               ~Application();

         .. group-tab:: Python

            .. code-block:: python


   getCameras:
      Get a list of all USB cameras

      .. tabs::

         .. group-tab:: C++

            Parameters: 
               - [out] cameras: A map of all connected DaoAI-supported cameras keyed by serial number.
               - [in] [OPTIONAL] remote_address: A map of all connected DaoAI-supported cameras keyed by serial number.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError getCameras(std::map<std::string, Camera*>& cameras, std::string remote_address = "");
               
         .. group-tab:: C#

            Parameters: 
               - [out] cameras: A map of all connected DaoAI-supported cameras keyed by serial number.
               - [in] [OPTIONAL] remote_address: A map of all connected DaoAI-supported cameras keyed by serial number.
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ getCameras(Dictionary<System::String^, Camera^>^% cameras, System::String^ remote_address);

               DaoAINETError^ getCameras(Dictionary<System::String^, Camera^>^% cameras);
               
         .. group-tab:: Python

            .. code-block:: python

   connectCamera:
      Connect to the next available DaoAI camera.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [in] camera: Camera to connect.
               - [in] [OPTIONAL] settings: Connect to the camera with this settings. Must contain at least one frame.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
               DAOAI_API SlcSdkError connectCamera(Camera*& camera, const Settings& settings = {});

         .. group-tab:: C#

            Parameters: 
               - [in] camera: Camera to connect.
               - [in] [OPTIONAL] settings: Connect to the camera with this settings. Must contain at least one frame.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.
               
            .. code-block:: c#

               DaoAINETError^ connectCamera(Camera^% camera, Settings^ settings);

               DaoAINETError^ connectCamera(Camera^% camera);

         .. group-tab:: Python

            .. code-block:: python

   connectCamera:
      Connect to the DaoAI camera with serial number.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [in] serial_number: Connect to the camera with this serial number.
               - [out] camera: Pointer to the connected camera.
               - [in] [OPTIONAL] settings: Connect to the camera with this settings. Must contain at least one frame.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
                  
               DAOAI_API SlcSdkError connectCamera(const std::string serial_number, Camera*& camera, const Settings &settings = {});

         .. group-tab:: C#

            Parameters: 
               - [in] serial_number: Connect to the camera with this serial number.
               - [out] camera: Pointer to the connected camera.
               - [in] [OPTIONAL] settings: Connect to the camera with this settings. Must contain at least one frame.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ connectCamera(System::String^ serial_number, Camera^% camera, Settings^ settings);
		         
               DaoAINETError^ connectCamera(System::String^ serial_number, Camera^% camera);

         .. group-tab:: Python

            .. code-block:: python

   disconnectCamera:
      Disconnect the DaoAI camera with serial number.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [in] serial_number: Serial number of camera to disconnect.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError disconnectCamera(const std::string serial_number);

         .. group-tab:: C#

            .. code-block:: c#



         .. group-tab:: Python

            .. code-block:: python

   startLogging:
      Enable writing camera log to a  file

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [in] [OPTIONAL] log_path: Specify directory to write logs
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError startLogging(std::string log_path = "");

         .. group-tab:: C#

            Parameters: 
               - [in] [OPTIONAL] log_path: Specify directory to write logs
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ startLogging(System::String^ log_path);

               DaoAINETError^ startLogging();

         .. group-tab:: Python

            .. code-block:: python

   stopLogging:
      Disable writing camera log to a file

      .. tabs::

         .. group-tab:: C++

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError stopLogging();

         .. group-tab:: C#

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.
            
            .. code-block:: c#

               DaoAINETError^ stopLogging();

         .. group-tab:: Python

            .. code-block:: python

|

*Class* Version
~~~~~~~~~~~~~~~~~~
   
   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "application.h"
            namespace Version
            
      .. group-tab:: C#

         .. code-block:: c#


      .. group-tab:: Python

         .. code-block:: python

Public Member Functions
`````````````````````````

   getSDKVersion:
      get the DaoAI SDK version.
      
      .. tabs::

         .. group-tab:: C++

            Return:
               - string: String containing DaoAI SDK version.

            .. code-block:: C++
               
               DAOAI_API std::string getSDKVersion();

         .. group-tab:: C#

            .. code-block:: c#


         .. group-tab:: Python

            .. code-block:: python

|

*Class* Camera
~~~~~~~~~~~~~~~~~~~~


   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            #include "camera.h"

      .. group-tab:: C#

         .. code-block:: c#

            #include "camera.h"

      .. group-tab:: Python

         .. code-block:: python


Public Member Functions
`````````````````````````

   Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API Camera();

         .. group-tab:: C#

            .. code-block:: c#

               Camera();

         .. group-tab:: Python

            .. code-block:: python

   Copy Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API explicit Camera(const std::shared_ptr<Camera>& other);

         .. group-tab:: C#

            .. code-block:: c#


         .. group-tab:: Python

            .. code-block:: python
      
   Move Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API explicit Camera(class CameraImpl &&other);

         .. group-tab:: C#

            .. code-block:: c#


         .. group-tab:: Python

            .. code-block:: python

   Destructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API ~Camera();

         .. group-tab:: C#

            .. code-block:: c#
               
               ~Camera();

         .. group-tab:: Python

            .. code-block:: python

   connect:
      Connect the camera.

      .. tabs::

         .. group-tab:: C++

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError connect();
               
         .. group-tab:: C#

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ connect();

         .. group-tab:: Python

            .. code-block:: python

   disConnect:
      Disconnect the camera.

      .. tabs::

         .. group-tab:: C++

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError disConnect();
               
         .. group-tab:: C#

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ disConnect();

         .. group-tab:: Python

            .. code-block:: python

   isConnected:
      Check if the camera is connected.

      .. tabs::

         .. group-tab:: C++

            Return:
               - bool: returns True if camera is connected, false otherwise.

            .. code-block:: C++

               DAOAI_API bool isConnected() const;
               
         .. group-tab:: C#

            Return:
               - bool: returns True if camera is connected, false otherwise.

            .. code-block:: c#

               System::Boolean isConnected();

         .. group-tab:: Python

            .. code-block:: python

   capture:
      Capture a single frame.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [out] Frame: Capture results will be written to this DaoAI Frame object.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError capture(Frame& frame);
               
         .. group-tab:: C#

            Parameters: 
               - [out] Frame: Capture results will be written to this DaoAI Frame object.
            
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ capture(Frame^% frame);

         .. group-tab:: Python

            .. code-block:: python

   capture:
      Capture a single frame with settings.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [in] settings: DaoAI Settings to use for the capture. Must contain at least one frame.
               - [out] Frame: Capture results will be written to this DaoAI Frame object.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError capture(Settings settings, Frame& frame);
               
         .. group-tab:: C#

            Parameters: 
               - [in] settings: DaoAI Settings to use for the capture. Must contain at least one frame.
               - [out] Frame: Capture results will be written to this DaoAI Frame object.
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ capture(Settings^ settings, Frame^% frame);

         .. group-tab:: Python

            .. code-block:: python

   captureAssistant:
      Analyze scene and generate acquisition frame settings, the total time for all acquisition frames will be less than the time budget. The higher time budget is, the more acquisition frames will be generated.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [in] time_budget: Time budget for acquisition frames, in range of (0.0, 5.0]
               - [in,out] mofaf: A map of AcquisitionFrame settings
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError captureAssistant(double time_budget, std::map<int, AcquisitionFrame> &mofaf);
               
         .. group-tab:: C#

            Parameters: 
               - [in] time_budget: Time budget for acquisition frames, in range of (0.0, 5.0]
               - [in,out] mofaf: A map of AcquisitionFrame settings
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.
            
            .. code-block:: c#

               DaoAINETError^ captureAssistant(System::Double time_budget, System::Collections::Generic::Dictionary<System::Int32, AcquisitionFrame^>^% mofaf);

         .. group-tab:: Python

            .. code-block:: python

   setSettings:
      Set Settings for camera with file path.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [in] file_path: Path to load settings file.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError setSettings(std::string file_path);
               
         .. group-tab:: C#

            Parameters: 
               - [in] file_path: Path to load settings file.
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ setSettings(System::String^ file_path);

         .. group-tab:: Python

            .. code-block:: python

   setSettings:
      Set Settings for camera with settings object.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - [in] settings: Settings object for this camera.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
               DAOAI_API SlcSdkError setSettings(Settings settings);
               
         .. group-tab:: C#

            Parameters: 
               - [in] settings: Settings object for this camera.
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

	            DaoAINETError^ setSettings(Settings^ settings);

         .. group-tab:: Python

            .. code-block:: python

   getSettings:
      Get Settings for camera.

      .. tabs::

         .. group-tab:: C++

            Return:
               - Settings: Current settings structure used by this camera.

            .. code-block:: C++
               
               DAOAI_API Settings getSettings() const;
               
         .. group-tab:: C#

            Return:
               - Settings: Current settings structure used by this camera.

            .. code-block:: c#

               Settings^ getSettings();

         .. group-tab:: Python

            .. code-block:: python

   getSerialNumber:
      Get serialNumber of the camera.

      .. tabs::

         .. group-tab:: C++

            Return:
               - std::string: Serial number of this camera.

            .. code-block:: C++
               
               DAOAI_API std::string getSerialNumber() const;
               
         .. group-tab:: C#

            Return:
               - System::String: Serial number of this camera.

            .. code-block:: c#

               System::String^ getSerialNumber();

         .. group-tab:: Python

            .. code-block:: python

   getIntrinsicParam:
      brief Get IntrinsicParameter of the camera.

      .. tabs::

         .. group-tab:: C++
            
            Parameters:
               - [out] params: A vector of float containing camera intrinsic parameters.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
               DAOAI_API SlcSdkError getIntrinsicParam(std::vector<float>& params) const;
               
         .. group-tab:: C#

            Parameters:
               - [out] params: A vector of float containing camera intrinsic parameters.
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ getIntrinsicParam(array<System::Single>^% params);

         .. group-tab:: Python

            .. code-block:: python


   enableGPU:
      Enable or disable using GPU on local PC for computation.

      .. tabs::

         .. group-tab:: C++
            
            Parameters:
               - toggle[in]: Enable or disable.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
               DAOAI_API SlcSdkError enableGPU(bool toggle);
               
         .. group-tab:: C#

            Parameters:
               - toggle[in]: Enable or disable.
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ enableGPU(System::Boolean toggle);

         .. group-tab:: Python

            .. code-block:: python

   enableTempRegulation:
      Enable or disable temperature regulation.

      .. tabs::

         .. group-tab:: C++
            
            Parameters:
               - toggle[in]: Enable or disable.
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
               DAOAI_API SlcSdkError enableTempRegulation(bool toggle);
               
         .. group-tab:: C#

            Parameters:
               - toggle[in]: Enable or disable.
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ enableTempRegulation(System::Boolean toggle);

         .. group-tab:: Python

            .. code-block:: python

   getCameraImpl:
      Get the shared ptr for the camera.

      .. tabs::

         .. group-tab:: C++

            Return:
               - std::shared_ptr: the shared ptr for the camera.

            .. code-block:: C++
               
               std::shared_ptr<class CameraImpl> getCameraImpl();
               
         .. group-tab:: C#

            .. code-block:: c#

         .. group-tab:: Python

            .. code-block:: python

|

*Class* Settings
~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "settings.h"
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "settings.h"

      .. group-tab:: Python

         .. code-block:: python

AcquisitionFrame Class
```````````````````````````

Public Members & Functions
*****************************

   AcquisitionFrameSetting:
      The acquisition frame settings data structure.

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               enum AcquisitionFrameSetting {
                        Brightness, // Int {0, 3}.
                        Gain, // Double {0, 3}.
                        ExposureStop // Int {-1, 4}.
                     };
               
         .. group-tab:: C#

            .. code-block:: c#

               enum AcquisitionFrameSetting {
                        Brightness, // Int {0, 3}.
                        Gain, // Double {0, 3}.
                        ExposureStop // Int {-1, 4}.
                     };

         .. group-tab:: Python

            .. code-block:: python

   Constructor:
      Constructor with initial inputs for acquisition frame setting.

      .. tabs::

         .. group-tab:: C++

            Parameters:
               - brightness[in]: brightness for the setting.
               - gain[in]: gain for the setting.
               - exposure_stop[in]: exposure stop for the setting.

            .. code-block:: C++
               
               DAOAI_API AcquisitionFrame(int brightness, double gain, int exposure_stop);
               
         .. group-tab:: C#

            Parameters:
               - brightness[in]: brightness for the setting.
               - gain[in]: gain for the setting.
               - exposure_stop[in]: exposure stop for the setting.

            .. code-block:: c#

               AcquisitionFrame(System::Int32 brightness, System::Double gain, System::Int32 exposure_stop);
         
         .. group-tab:: Python

            .. code-block:: python

   Constructor:
      Constructor with default values for acquisition frame setting.

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
		         DAOAI_API AcquisitionFrame();
               
         .. group-tab:: C#

            .. code-block:: c#
               
               AcquisitionFrame();

         .. group-tab:: Python

            .. code-block:: python

   inquireSetting:
      Get the current acquisition setting value and range.

      .. tabs::

         .. group-tab:: C++

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - curr[out]: the current value for the field.
               - min[out]: the min value for the field.
               - max[out]: the max value for the field.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
		         DAOAI_API SlcSdkError inquireSetting(AcquisitionFrameSetting setting, int& curr, int& min, int& max);
               
         .. group-tab:: C#

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - curr[out]: the current value for the field.
               - min[out]: the min value for the field.
               - max[out]: the max value for the field.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireSetting(AcquisitionFrameSetting setting, System::Int32% curr, System::Int32% min, System::Int32% max);

         .. group-tab:: Python

            .. code-block:: python

   inquireSetting:
      Get the current acquisition setting value.

      .. tabs::

         .. group-tab:: C++

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - curr[out]: current value for the field.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
		         DAOAI_API SlcSdkError inquireSetting(AcquisitionFrameSetting setting, int& curr);

         .. group-tab:: C#

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - curr[out]: current value for the field.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireSetting(AcquisitionFrameSetting setting, System::Int32% curr);

         .. group-tab:: Python

            .. code-block:: python

   inquireSetting:
      Get the current acquisition setting value and range in double (gain).

      .. tabs::

         .. group-tab:: C++

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - curr[out]: the current value for the field, type double (for field gain).
               - min[out]: the min value for the field.
               - max[out]: the max value for the field.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
               DAOAI_API SlcSdkError inquireSetting(AcquisitionFrameSetting setting, double& curr, double& min, double& max);
               
         .. group-tab:: C#

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - curr[out]: the current value for the field, type double (for field gain).
               - min[out]: the min value for the field.
               - max[out]: the max value for the field.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireSetting(AcquisitionFrameSetting setting, System::Double% curr, System::Double% min, System::Double% max);

         .. group-tab:: Python

            .. code-block:: python

   inquireSetting:
      Get the current acquisition setting value in double (gain).

      .. tabs::

         .. group-tab:: C++

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - curr[out]: the current value for the field, type double (for field gain).

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
                  DAOAI_API SlcSdkError inquireSetting(AcquisitionFrameSetting setting, double& curr);
               
         .. group-tab:: C#

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - curr[out]: the current value for the field, type double (for field gain).

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireSetting(AcquisitionFrameSetting setting, System::Double% curr);

         .. group-tab:: Python

            .. code-block:: python

   configureSetting:
      Set the acquisition setting value.
      
      .. tabs::

         .. group-tab:: C++

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - new_val[in]: the new value to assign to.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
		         DAOAI_API SlcSdkError configureSetting(AcquisitionFrameSetting setting, int new_val);

               
         .. group-tab:: C#

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - new_val[in]: the new value to assign to.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ configureSetting(AcquisitionFrameSetting setting, System::Int32 new_val);

         .. group-tab:: Python

            .. code-block:: python

   configureSetting:
      Set the acquisition setting value in double (gain).

      .. tabs::

         .. group-tab:: C++

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - new_val[in]: the new value (double for gain) to assign to.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++
               
		         DAOAI_API SlcSdkError configureSetting(AcquisitionFrameSetting setting, double new_val);
               
         .. group-tab:: C#

            Parameters:
               - AcquisitionFrameSetting[in]: acquisition frame setting to inquire [brightness, gain, exposure_stop].
               - new_val[in]: the new value (double for gain) to assign to.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ configureSetting(AcquisitionFrameSetting setting, System::Double new_val);

         .. group-tab:: Python

            .. code-block:: python

Settings Class
``````````````````

Public Members & Functions
*****************************

   FilterSetting:
      The filter settings data structure.

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               enum FilterSetting {
                  IntensityThreshold, // Double {0, 3}. Enable/Disable. Get/Set.
                  OutlierThreshold, // Double {0, inf}. Enable/Disable. Get/Set.
                  SaturationFilter, // Bool. Enable/Disable. Get/Set.
                  ContrastDistortionMode, // Int {0, 2}.	 0: Off, 1: Remove Distortion, 2: Correct Distortion. Get/Set.
                  ContrastDistortionStrength, // Int {0, 15000}. Get/Set.
                  GaussianFilter, // Int {0, 5}. Enable/Disable. Get/Set.
                  MedianFilter, // Int {0, 1}. Enable/Disable. Get/Set.
                  FaceNormalFilter, // Double {0, 40}. Enable/Disable. Get/Set.
                  SmoothFilter, // Int {0, 6}. Enable/Disable. Get/Set.
                  FillGaps, // Bool. Enable/Disable. Get/Set.
                  WidthThreshold, // Double {0, 500}. Get/Set.
                  SlopeThreshold, // Double {0, inf}. Get/Set.
                  DepthThreshold, // Double {0, 500}. Get/Set.
                  FillXFirst, // Bool. Get/Set.
                  FillBidirectional, // Bool. Get/Set.
                  PhaseQualityThreshold, // Double {0, 50}. Enable/Disable. Get/Set.
                  ConnectedAreaFilter, // Double {0, 10}. Enable/Disable. Get/Set.
                  ShowHDR // Bool. Enable/Disable. Get/Set.
               };
               
         .. group-tab:: C#

            .. code-block:: c#

               enum class FilterSetting {
                        IntensityThreshold, // Double {0, 3}. Enable/Disable. Get/Set.
                        OutlierThreshold, // Double {0, inf}. Enable/Disable. Get/Set.
                        SaturationFilter, // Bool. Enable/Disable. Get/Set.
                        ContrastDistortionMode, // Int {0, 2}.	 0: Off, 1: Remove Distortion, 2: Correct Distortion. Get/Set.
                        ContrastDistortionStrength, // Int {0, 15000}. Get/Set.
                        GaussianFilter, // Int {0, 5}. Enable/Disable. Get/Set.
                        MedianFilter, // Int {0, 1}. Enable/Disable. Get/Set.
                        FaceNormalFilter, // Double {0, 40}. Enable/Disable. Get/Set.
                        SmoothFilter, // Int {0, 6}. Enable/Disable. Get/Set.
                        FillGaps, // Bool. Enable/Disable. Get/Set.
                        WidthThreshold, // Double {0, 500}. Get/Set.
                        SlopeThreshold, // Double {0, inf}. Get/Set.
                        DepthThreshold, // Double {0, 500}. Get/Set.
                        FillXFirst, // Bool. Get/Set.
                        FillBidirectional, // Bool. Get/Set.
                        PhaseQualityThreshold, // Double {0, 50}. Enable/Disable. Get/Set.
                        ConnectedAreaFilter, // Double {0, 10}. Enable/Disable. Get/Set.
                        ShowHDR // Bool. Enable/Disable. Get/Set.
                     };

         .. group-tab:: Python

            .. code-block:: python

   SystemSetting:
      The system settings data structure.

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               enum SystemSetting {
                  CameraModel, // String. Get only.
                  TemperatureSensorAvailable, // Bool. Get only.
                  TemperatureRegulationEnable, // Bool. Get only.
                  GPUAvailable, // Bool. Get only.
                  GPUEnable, // Bool. Get only.
                  Version, // String. Get only.
                  ExtraWhitePatternEnable // Bool. Enable/Disable. Get/Set.
               };

         .. group-tab:: C#

            .. code-block:: c#

               enum class SystemSetting {
                  CameraModel, // String. Get only.
                  TemperatureSensorAvailable, // Bool. Get only.
                  TemperatureRegulationEnable, // Bool. Get only.
                  GPUAvailable, // Bool. Get only.
                  GPUEnable, // Bool. Get only.
                  Version, // String. Get only.
                  ExtraWhitePatternEnable // Bool. Enable/Disable. Get/Set.
               };

         .. group-tab:: Python

            .. code-block:: python

   Constructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
               DAOAI_API Settings();
               
         .. group-tab:: C#

            .. code-block:: c#
               
               Settings();

         .. group-tab:: Python

            .. code-block:: python

   Copy Constructor:
      .. tabs::

         .. group-tab:: C++

            Parameters:
               - other[out]: another setting object to copy to.

            .. code-block:: C++
               
               DAOAI_API explicit Settings(const std::shared_ptr<Settings>& other);
               
         .. group-tab:: C#

            Parameters:
               - other[out]: another setting object to copy to.

            .. code-block:: c#

               Settings(Settings^ other);

         .. group-tab:: Python

            .. code-block:: python

   Destructor:
      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++
               
		         DAOAI_API ~Settings();
               
         .. group-tab:: C#

            .. code-block:: c#

               ~Settings();

         .. group-tab:: Python

            .. code-block:: python


   Constructor:
      Constructor load settings from settings workspace.
      
      .. tabs::

         .. group-tab:: C++

            Parameters:
               - file_path[in]: The path to the workspace

            .. code-block:: C++

		         DAOAI_API Settings(const std::string& file_path);
               
         .. group-tab:: C#

            Parameters:
               - file_path[in]: The path to the workspace

            .. code-block:: c#

               Settings(System::String^ file_path);

         .. group-tab:: Python

            .. code-block:: python

   exportSettings:
      Export current camera settings.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - file_name[in]: The path to save the camera settings.
               
            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError exportSettings(const std::string& file_path);

         .. group-tab:: C#
            
            Parameters: 
               - file_name[in]: The path to save the camera settings.
               
            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ exportSettings(System::String^ file_path);

         .. group-tab:: Python

            .. code-block:: python

   addAcquisitionFrame:
      Add an aquisition frame to settings to use in 3D capture with index.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - af[in]: AcquisitionFrame object to write.
               - index[out]: Index where this frame is written.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError addAcquisitionFrame(AcquisitionFrame af, int& index);

         .. group-tab:: C#
            
            Parameters: 
               - af[in]: AcquisitionFrame object to write.
               - index[out]: Index where this frame is written.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ addAcquisitionFrame(AcquisitionFrame^ af, System::Int32% index);

         .. group-tab:: Python

            .. code-block:: python

   addAcquisitionFrame:
      Add an aquisition frame to settings to use in 3D capture.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - af[in]: AcquisitionFrame object to write.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

	         	DAOAI_API SlcSdkError addAcquisitionFrame(AcquisitionFrame af);

         .. group-tab:: C#
            
            Parameters: 
               - af[in]: AcquisitionFrame object to write.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ addAcquisitionFrame(AcquisitionFrame^ af);

         .. group-tab:: Python

            .. code-block:: python

   getAcquisitionFrame:
      Retreive the aquisition frame object from the given index.

      .. tabs::

         .. group-tab:: C++

            Parameters: 
               - af[out]: AcquisitionFrame object to which data will be written.
               - index[in]: Index to retrieve frame.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

	         	DAOAI_API SlcSdkError getAcquisitionFrame(AcquisitionFrame& af, int index);

         .. group-tab:: C#

            Parameters: 
               - af[out]: AcquisitionFrame object to which data will be written.
               - index[in]: Index to retrieve frame.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ getAcquisitionFrame(AcquisitionFrame^% af, System::Int32 index);

         .. group-tab:: Python

            .. code-block:: python

   modifyAcquisitionFrame:
      Modify an aquisition frame to settings at a given index.

      .. tabs::

         .. group-tab:: C++

            Parameters: 
               - af[in]: AcquisitionFrame object to write.
               - index[in]: Index of AcquisitionFrame to modify data.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError modifyAcquisitionFrame(AcquisitionFrame af, int index);

         .. group-tab:: C#

            Parameters: 
               - af[in]: AcquisitionFrame object to write.
               - index[in]: Index of AcquisitionFrame to modify data.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ modifyAcquisitionFrame(AcquisitionFrame^ af, System::Int32 index);

         .. group-tab:: Python

            .. code-block:: python

   deleteAcquisitionFrame:
      Delete an aquisition frame at a given index.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - index[in]: Index of AcquisitionFrame to delete.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError deleteAcquisitionFrame(int index);

         .. group-tab:: C#
            
            Parameters: 
               - index[in]: Index of AcquisitionFrame to delete.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ deleteAcquisitionFrame(System::Int32 index);

         .. group-tab:: Python

            .. code-block:: python

   setAcquisitionFrames:
      Write a map of AcquisitionFrames to settings to be used in D3 Capture.

      .. tabs::

         .. group-tab:: C++

            Parameters: 
               - mofaf[in]: Map of int to AcquisitionFrame objects to write.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

         		DAOAI_API SlcSdkError setAcquisitionFrames(std::map<int, AcquisitionFrame> mofaf);

         .. group-tab:: C#

            Parameters: 
               - mofaf[in]: Map of int to AcquisitionFrame objects to write.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#
               
               DaoAINETError^ setAcquisitionFrames(System::Collections::Generic::Dictionary<System::Int32, AcquisitionFrame^>^ mofaf);

         .. group-tab:: Python

            .. code-block:: python

   getAcquisitionFrames:
      Retrieve the current map of AcquisitionFrames from settings.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - mofaf[out]: Current acquisition frame map is written to this map.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError getAcquisitionFrames(std::map<int, AcquisitionFrame>& mofaf);

         .. group-tab:: C#
            
            Parameters: 
               - mofaf[out]: Current acquisition frame map is written to this map.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ getAcquisitionFrames(System::Collections::Generic::Dictionary<System::Int32, AcquisitionFrame^>^% mofaf);

         .. group-tab:: Python

            .. code-block:: python

   enableFilterSetting:
      Enable or disable a filter setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to toggle.
               - toggle[in]: Enable or disable.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError enableFilterSetting(FilterSetting setting, bool toggle);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to toggle.
               - toggle[in]: Enable or disable.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ enableFilterSetting(FilterSetting setting, System::Boolean toggle);

         .. group-tab:: Python

            .. code-block:: python

   checkEnableFilterSetting:
      Check if a filter setting is enabled.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to check.
               - is_enabled[out]: Enable status written to this.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError checkEnableFilterSetting(FilterSetting setting, bool& is_enabled);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to check.
               - is_enabled[out]: Enable status written to this.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ checkEnableFilterSetting(FilterSetting setting, System::Boolean% is_enabled);

         .. group-tab:: Python

            .. code-block:: python

   inquireFilterSetting:
      Get the current value and valid range of a filter setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.
               - min[out]: The minimum valid value that this setting can be configured with.
               - max[out]: The maximum valid value that this setting can be configured with.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, int& curr, int& min, int& max);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.
               - min[out]: The minimum valid value that this setting can be configured with.
               - max[out]: The maximum valid value that this setting can be configured with.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Int32% curr, System::Int32% min, System::Int32% max);

         .. group-tab:: Python

            .. code-block:: python

   inquireFilterSetting:
      Get the current value and valid range (double) of a filter setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.
               - min[out]: The minimum valid value that this setting can be configured with.
               - max[out]: The maximum valid value that this setting can be configured with.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

               DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, double& curr, double& min, double& max);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.
               - min[out]: The minimum valid value that this setting can be configured with.
               - max[out]: The maximum valid value that this setting can be configured with.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Double% curr, System::Double% min, System::Double% max);

         .. group-tab:: Python

            .. code-block:: python

   inquireFilterSetting:
      Get the current value of a filter setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, int& curr);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.
               
            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Int32% curr);

         .. group-tab:: Python

            .. code-block:: python

   inquireFilterSetting:
      Get the current value(double) of a filter setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, double& curr);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Double% curr);

         .. group-tab:: Python

            .. code-block:: python

   inquireFilterSetting:
      Get the current value(bool) of a filter setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError inquireFilterSetting(FilterSetting setting, bool& curr);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to check.
               - curr[out]: The current value of this setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireFilterSetting(FilterSetting setting, System::Boolean% curr);

         .. group-tab:: Python

            .. code-block:: python


   configureFilterSetting:
      Configure a filter setting with the given value.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to configure.
               - new_val[in]: The value to write to this setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError configureFilterSetting(FilterSetting setting, int new_val);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to configure.
               - new_val[in]: The value to write to this setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ configureFilterSetting(FilterSetting setting, System::Int32 new_val);

         .. group-tab:: Python

            .. code-block:: python

   configureFilterSetting:
      Configure a filter setting with the given value (double).

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to configure.
               - new_val[in]: The value to write to this setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError configureFilterSetting(FilterSetting setting, double new_val);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to configure.
               - new_val[in]: The value to write to this setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ configureFilterSetting(FilterSetting setting, System::Double new_val);

         .. group-tab:: Python

            .. code-block:: python

   configureFilterSetting:
      Configure a filter setting with the given value (bool).

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The filter to configure.
               - new_val[in]: The value to write to this setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError configureFilterSetting(FilterSetting setting, bool new_val);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The filter to configure.
               - new_val[in]: The value to write to this setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ configureFilterSetting(FilterSetting setting, System::Boolean new_val);

         .. group-tab:: Python

            .. code-block:: python

   configureFilterSetting:
      Enable or disable a system setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The system setting to toggle.
               - toggle[in]: Enable or disable.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError enableSystemSetting(SystemSetting setting, bool toggle);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The system setting to toggle.
               - toggle[in]: Enable or disable.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ enableSystemSetting(SystemSetting setting, System::Boolean toggle);

         .. group-tab:: Python

            .. code-block:: python

   checkEnableSystemSetting:
      Check if a system setting is enabled or disabled.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The system setting to check.
               - is_enabled[out]: Enable status written to this.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError checkEnableSystemSetting(SystemSetting setting, bool& is_enabled);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The system setting to check.
               - is_enabled[out]: Enable status written to this.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ checkEnableSystemSetting(SystemSetting setting, System::Boolean% is_enabled);

         .. group-tab:: Python

            .. code-block:: python

   inquireSystemSetting:
      Check the current value and valid range of a system setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The system setting to check.
               - curr[out]: Current value of system setting.
               - min[out]: Minimum configurable value of system setting.
               - max[out]: Maximum configurable value of system setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError inquireSystemSetting(SystemSetting setting, int& curr, int& min, int& max);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The system setting to check.
               - curr[out]: Current value of system setting.
               - min[out]: Minimum configurable value of system setting.
               - max[out]: Maximum configurable value of system setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireSystemSetting(SystemSetting setting, System::Int32% curr, System::Int32% min, System::Int32% max);

         .. group-tab:: Python

            .. code-block:: python

   inquireSystemSetting:
      Check the current value of a system setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The system setting to check.
               - curr[out]: Current value of system setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError inquireSystemSetting(SystemSetting setting, int& curr);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The system setting to check.
               - curr[out]: Current value of system setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireSystemSetting(SystemSetting setting, System::Int32% curr);

         .. group-tab:: Python

            .. code-block:: python

   inquireSystemSetting:
      Check the current value (bool) of a system setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The system setting to check.
               - curr[out]: Current value of system setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError inquireSystemSetting(SystemSetting setting, bool& curr);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The system setting to check.
               - curr[out]: Current value of system setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireSystemSetting(SystemSetting setting, System::Boolean% curr);

         .. group-tab:: Python

            .. code-block:: python


   inquireSystemSetting:
      Check the current value (string) of a system setting.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The system setting to check.
               - curr[out]: Current value of system setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError inquireSystemSetting(SystemSetting setting, std::string& curr);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The system setting to check.
               - curr[out]: Current value of system setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ inquireSystemSetting(SystemSetting setting, System::String^% val);

         .. group-tab:: Python

            .. code-block:: python

   configureSystemSetting:
      Configure a system setting with given value.

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The system setting to configure.
               - new_val[in]: Value to write to system setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError configureSystemSetting(SystemSetting setting, int new_val);

         .. group-tab:: C#
            
            Parameters: 
               - setting[in]: The system setting to configure.
               - new_val[in]: Value to write to system setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ configureSystemSetting(SystemSetting setting, System::Int32 new_val);

         .. group-tab:: Python

            .. code-block:: python

   configureSystemSetting:
      Configure a system setting with given value (bool).

      .. tabs::

         .. group-tab:: C++
            
            Parameters: 
               - setting[in]: The system setting to configure.
               - new_val[in]: Value to write to system setting.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

            .. code-block:: C++

		         DAOAI_API SlcSdkError configureSystemSetting(SystemSetting setting, bool new_val);

         .. group-tab:: C#
                        
            Parameters: 
               - setting[in]: The system setting to configure.
               - new_val[in]: Value to write to system setting.

            Return:
               - DaoAINETError^: DaoAINETError object handle containing status codes and any error messages.

            .. code-block:: c#

               DaoAINETError^ configureSystemSetting(SystemSetting setting, System::Boolean new_val);

         .. group-tab:: Python

            .. code-block:: python

   getSettingsImpl:
      get shared pointer for settings object.

      .. tabs::

         .. group-tab:: C++

            .. code-block:: C++

		         std::shared_ptr<SettingsImpl> getSettingsImpl();

         .. group-tab:: C#

            .. code-block:: c#

         .. group-tab:: Python

            .. code-block:: python

*Class* SlcSdkError
~~~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "error.h"
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "error.h"

      .. group-tab:: Python

         .. code-block:: python


Public Members & Functions
`````````````````````````````

   SlcSdkStatus:
      The DaoAI SDK status data structure.

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            enum DAOAI_API SlcSdkStatus : int
               {
                  SlcSdkSuccess,
                  SlcSdkErrorInvalidValue,
                  SlcSdkErrorGPUMemoryAllocation,
                  SlcSdkErrorVirtualFunctionCalled,
                  SlcSdkErrorImageAcquisition,
                  SlcSdkErrorFileOperation,
                  SlcSdkErrorDeviceConnection,
                  SlcSdkErrorDeviceOperation,
                  SlcSdkErrorTemperatureRegulation,
                  SlcSdkErrorWorkspaceVersion,
                  SlcSdkErrorRemoteConnection,
                  SlcSdkErrorRemoteVersion
               };
            
      .. group-tab:: C#

         .. code-block:: c#

            public enum class DaoAINETStatus : int {
               SlcSdkSuccess,
               SlcSdkErrorInvalidValue,
               SlcSdkErrorGPUMemoryAllocation,
               SlcSdkErrorVirtualFunctionCalled,
               SlcSdkErrorImageAcquisition,
               SlcSdkErrorFileOperation,
               SlcSdkErrorDeviceConnection,
               SlcSdkErrorDeviceOperation,
               SlcSdkErrorTemperatureRegulation,
               SlcSdkErrorWorkspaceVersion,
               SlcSdkErrorRemoteConnection,
               SlcSdkErrorRemoteVersion
            };


      .. group-tab:: Python

         .. code-block:: python

   Constructor:
      Construct the error class with inital value.

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
               DAOAI_API SlcSdkError(SlcSdkStatus status, std::string detail_text);
            
      .. group-tab:: C#

         .. code-block:: c#

            DaoAINETError(DaoAINETStatus status, System::String^ detail_text);

      .. group-tab:: Python

         .. code-block:: python

   Constructor:
      Construct the error class with default (invalid error) value.

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            DAOAI_API SlcSdkError();
            
      .. group-tab:: C#

         .. code-block:: c#

            DaoAINETError();

      .. group-tab:: Python

         .. code-block:: python


   status:
      Get the status code of the error.

   .. tabs::

      .. group-tab:: C++

         Return:
            - SlcSdkStatus: status code of the error.

         .. code-block:: C++
               
            DAOAI_API SlcSdkStatus status();
            
      .. group-tab:: C#

         Return:
            - DaoAINETStatus: status code of the error.

         .. code-block:: c#

            DaoAINETStatus status();

      .. group-tab:: Python

         .. code-block:: python


   details:
      Get the detailed description of the error.

   .. tabs::

      .. group-tab:: C++

         Return:
            - std::string: detailed description of the error.

         .. code-block:: C++
               
            DAOAI_API std::string details();
            
      .. group-tab:: C#

         Return:
            - System::String: detailed description of the error.

         .. code-block:: c#

            System::String^ details();

      .. group-tab:: Python

         .. code-block:: python



*Class* Frame
~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "frame.h"
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "frame.h"

      .. group-tab:: Python

         .. code-block:: python

Public Members & Functions
`````````````````````````````

   Constructor:
      Construct the error class with inital value.

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
		      DAOAI_API Frame();
            
      .. group-tab:: C#

         .. code-block:: c#

            Frame();

      .. group-tab:: Python

         .. code-block:: python


   **Copy Constructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
		      DAOAI_API explicit Frame(const std::shared_ptr<Frame>& other);
            
      .. group-tab:: C#

         .. code-block:: c#

            Frame(Frame^ a);

      .. group-tab:: Python

         .. code-block:: python


   getPointCloud:
      Get the Point Cloud from the Frame.

   .. tabs::

      .. group-tab:: C++

            Parameters: 
               - [in] pc: PointCloud object to write contained point cloud data to.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++
               
		      DAOAI_API SlcSdkError getPointCloud(PointCloud& pc);
            
      .. group-tab:: C#

            Parameters: 
               - [in] pc: PointCloud object to write contained point cloud data to.

            Return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ getPointCloud(PointCloud^% pc);

      .. group-tab:: Python

         .. code-block:: python

   save:
      Save the frame.

   .. tabs::

      .. group-tab:: C++

            Parameters: 
               - file_name[in]: The path to save the frame. Supports .dcf (DaoAI data format), .ply, .pcd and .daf file suffixes.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++
               
				DAOAI_API SlcSdkError save(const std::string &file_name);
            
      .. group-tab:: C#

            Parameters: 
               - file_name[in]: The path to save the frame. Supports .dcf (DaoAI data format), .ply, .pcd and .daf file suffixes.

            Return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ save(System::String^ file_name);

      .. group-tab:: Python

         .. code-block:: python

   load:
      Save the frame.

   .. tabs::

      .. group-tab:: C++

            Parameters: 
               - file_name[in]: The path to load the frame.

            Return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++
               
				DAOAI_API SlcSdkError load(const std::string &file_name);
            
      .. group-tab:: C#

            Parameters: 
               - file_name[in]: The path to load the frame.

            Return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ load(System::String^ file_name);

      .. group-tab:: Python

         .. code-block:: python

   isEmpty:
      Check whether the frame is empty.

   .. tabs::

      .. group-tab:: C++

            Return:
               - bool: True if frame is empty, false otherwise.

         .. code-block:: C++
               
				DAOAI_API bool isEmpty();
            
      .. group-tab:: C#

            Return:
               - System::Boolean: True if frame is empty, false otherwise.

         .. code-block:: c#

            System::Boolean isEmpty();

      .. group-tab:: Python

         .. code-block:: python

   getFrameImpl:
      Get the shared pointer for frame object.

   .. tabs::

      .. group-tab:: C++

            Return:
               - std::shared_ptr: the shared pointer for frame object.

         .. code-block:: C++
               
				std::shared_ptr<FrameImpl> getFrameImpl();
            
      .. group-tab:: C#

         .. code-block:: c#

      .. group-tab:: Python

         .. code-block:: python


*Class* Point Cloud
~~~~~~~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
            #include "point_cloud.h"
            
      .. group-tab:: C#

         .. code-block:: c#

            #include "point_cloud.h"

      .. group-tab:: Python

         .. code-block:: python

Public Members & Functions
`````````````````````````````

   **Constructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
				DAOAI_API PointCloud();
            
      .. group-tab:: C#

         .. code-block:: c#

            PointCloud();

      .. group-tab:: Python

         .. code-block:: python

   **Copy Constructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
				DAOAI_API explicit PointCloud(const std::shared_ptr<PointCloud>& other);
            
      .. group-tab:: C#

         .. code-block:: c#


      .. group-tab:: Python

         .. code-block:: python

   Destructor:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
               
	      	DAOAI_API ~PointCloud();
            
      .. group-tab:: C#

         .. code-block:: c#

            ~PointCloud();

      .. group-tab:: Python

         .. code-block:: python

   PointCloud:
      Allocate an organized point cloud with a given number of rows and columns

   .. tabs::

      .. group-tab:: C++

            Parameters:
               - rows[in]: the height of the point cloud.
               - cols[in]: the width of the point cloud.

         .. code-block:: C++
               
		      DAOAI_API PointCloud(size_t rows, size_t cols);
            
      .. group-tab:: C#

         Parameters:
            - rows[in]: the height of the point cloud.
            - cols[in]: the width of the point cloud.

         .. code-block:: c#

            PointCloud(System::UInt64 rows, System::UInt64 cols);
            
      .. group-tab:: Python

         .. code-block:: python

   isEmpty:
      Return whether point cloud is empty

   .. tabs::

      .. group-tab:: C++

            return:
               - bool:  whether point cloud is empty.

         .. code-block:: C++
               
		     DAOAI_API bool isEmpty() const;
            
      .. group-tab:: C#

            return:
               - System::Boolean: whether point cloud is empty.

         .. code-block:: c#

            System::Boolean isEmpty();

      .. group-tab:: Python

         .. code-block:: python

   getWidth:
      Return width (number of columns) of point cloud

   .. tabs::

      .. group-tab:: C++

            return:
               - int: width (number of columns) of point cloud.

         .. code-block:: C++
               
		     DAOAI_API int getWidth() const;
            
      .. group-tab:: C#

            return:
               - System::UInt64: width (number of columns) of point cloud.

         .. code-block:: c#

            System::UInt64 getWidth();

      .. group-tab:: Python

         .. code-block:: python

   getHeight:
      Return height (number of rows) of point cloud

   .. tabs::

      .. group-tab:: C++

            return:
               - int: height (number of rows) of point cloud.

         .. code-block:: C++
               
		     DAOAI_API int getHeight() const;
            
      .. group-tab:: C#

            return:
               - System::UInt64: height (number of rows) of point cloud.

         .. code-block:: c#

            System::UInt64 getHeight();


      .. group-tab:: Python

         .. code-block:: python

   getSize:
      Return number of points in point cloud

   .. tabs::

      .. group-tab:: C++

         return:
            - int: size (number of points) of point cloud.

         .. code-block:: C++
               
		     DAOAI_API int getSize() const;
            
      .. group-tab:: C#

         return:
            - int: size (number of points) of point cloud.
               
         .. code-block:: c#

            System::UInt64 getSize();

      .. group-tab:: Python

         .. code-block:: python

   getPoint:
      Obtain a reference to a point given by a 1D linear index (from 0 to number of points).

   .. tabs::

      .. group-tab:: C++

         Parameters:
            - idx[in]: index value
         return:
            - Point: reference to a point

         .. code-block:: C++
               
		     DAOAI_API Point &operator()(size_t idx);
            
      .. group-tab:: C#

         Parameters:
            - idx[in]: index value
         return:
            - Point: reference to a point

         .. code-block:: c#

            Point^ getPoint(System::UInt64 idx);

      .. group-tab:: Python

         .. code-block:: python

   getPoint:
      Obtain a constant reference to a point given by a 1D linear index (from 0 to number of points).

   .. tabs::

      .. group-tab:: C++

         Parameters:
            - idx[in]: index value
            
         return:
            - Point: reference to a point

         .. code-block:: C++
               
		     DAOAI_API const Point &operator()(size_t idx) const;
            
      .. group-tab:: C#

         .. code-block:: c#

      .. group-tab:: Python

         .. code-block:: python

   getPoint:
      Obtain a reference to a point given by row and column, i is Row & j is Column

   .. tabs::

      .. group-tab:: C++

            Parameters:
               - i: row
               - j: col

            return:
               - Point: reference to a point

         .. code-block:: C++
               
            DAOAI_API Point operator()(size_t i, size_t j);
            
      .. group-tab:: C#

            Parameters:
               - i: row
               - j: col

            return:
               - Point: reference to a point

         .. code-block:: c#

            Point^ getPoint(System::UInt64 i, System::UInt64 j);

      .. group-tab:: Python

         .. code-block:: python

   getPoint:
      Obtain a constant reference to a point given by row and column, i is Row & j is Column

   .. tabs::

      .. group-tab:: C++

            Parameters:
               - i: row
               - j: col

            return:
               - Point: reference to a point

         .. code-block:: C++

      		DAOAI_API const Point &operator()(size_t i, size_t j) const;
            
      .. group-tab:: C#

         .. code-block:: c#

      .. group-tab:: Python

         .. code-block:: python

   resize:
      Resize the point cloud to the given number of rows and columns

   .. tabs::

      .. group-tab:: C++

            Parameters:
               - rows: new row number
               - cols: new col number

            return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++

      		DAOAI_API SlcSdkError resize(size_t rows, size_t cols);
            
      .. group-tab:: C#

            Parameters:
               - rows: new row number
               - cols: new col number

            return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ resize(System::UInt64 rows, System::UInt64 cols);

      .. group-tab:: Python

         .. code-block:: python

   getDataPtr:
      Obtain a pointer to the first point in the point cloud

   .. tabs::

      .. group-tab:: C++

         return:
            - Point*: a pointer to the first point in the point cloud.

         .. code-block:: C++

      		DAOAI_API Point* getDataPtr() const;
            
      .. group-tab:: C#
         
         return:
            - Point*: a pointer to the first point in the point cloud.

         .. code-block:: c#

      .. group-tab:: Python

         .. code-block:: python

   getVecX:
      Return a vector of all x coordinate data

   .. tabs::

      .. group-tab:: C++

         return:
            - std::vector<float>: a vector of all x coordinate data

         .. code-block:: C++

		      DAOAI_API std::vector<float> getVecX() const;
            
      .. group-tab:: C#

         return:
            - List<System::Single>: a vector of all x coordinate data

         .. code-block:: c#

            List<System::Single>^ getVecX();

      .. group-tab:: Python

         .. code-block:: python

   getVecY:
      Return a vector of all y coordinate data

   .. tabs::

      .. group-tab:: C++

            return:
               - std::vector<float>: a vector of all y coordinate data

         .. code-block:: C++

		      DAOAI_API std::vector<float> getVecY() const;
            
      .. group-tab:: C#

         return:
            - List<System::Single>: a vector of all y coordinate data

         .. code-block:: c#

            List<System::Single>^ getVecY();

      .. group-tab:: Python

         .. code-block:: python

   getVecZ:
      Return a vector of all z coordinate data

   .. tabs::

      .. group-tab:: C++

            return:
               - std::vector<float>: a vector of all z coordinate data

         .. code-block:: C++

		      DAOAI_API std::vector<float> getVecZ() const;
            
      .. group-tab:: C#

         return:
            - List<System::Single>: a vector of all z coordinate data

         .. code-block:: c#

            List<System::Single>^ getVecZ();

      .. group-tab:: Python

         .. code-block:: python

   getVecRgba:
      Return a vector of all rgba color data

   .. tabs::

      .. group-tab:: C++

         return:
            - std::vector<uint32_t>: a vector of all rgba color data.

         .. code-block:: C++

		      DAOAI_API std::vector<uint32_t> getVecRgba() const;
            
      .. group-tab:: C#

         return:
            - List<System::UInt32>: a vector of all rgba color data.

         .. code-block:: c#

            List<System::UInt32>^ getVecRgba();

      .. group-tab:: Python

         .. code-block:: python

   getVecConfident:
      Return a vector of all confident data

   .. tabs::

      .. group-tab:: C++

         return:
            - std::vector<float>: a vector of all confident data

         .. code-block:: C++

		      DAOAI_API std::vector<float> getVecConfident() const;
            
      .. group-tab:: C#

         return:
            - List<System::Single>: a vector of all confident data;

         .. code-block:: c#

            List<System::Single>^ getVecConfident();

      .. group-tab:: Python

         .. code-block:: python

   getVecR:
      Return a vector of all red channel data

   .. tabs::

      .. group-tab:: C++

         return:
            - std::vector<uint8_t>: a vector of all r data

         .. code-block:: C++

		      DAOAI_API std::vector<uint8_t> getVecR() const;
            
      .. group-tab:: C#

         return:
            - List<System::Byte>: a vector of all r data

         .. code-block:: c#

            List<System::Byte>^ getVecR();

      .. group-tab:: Python

         .. code-block:: python

   getVecG:
      Return a vector of all green channel data

   .. tabs::

      .. group-tab:: C++

            return:
               - std::vector<uint8_t>: a vector of all g data

         .. code-block:: C++

		      DAOAI_API std::vector<uint8_t> getVecG() const;
            
      .. group-tab:: C#

         return:
            - List<System::Byte>: a vector of all g data

         .. code-block:: c#

            List<System::Byte>^ getVecG();

      .. group-tab:: Python

         .. code-block:: python

   getVecB:
      Return a vector of all blue channel data

   .. tabs::

      .. group-tab:: C++

            return:
               - std::vector<uint8_t>: a vector of all b data

         .. code-block:: C++

		      DAOAI_API std::vector<uint8_t> getVecB() const;
            
      .. group-tab:: C#

         return:
            - List<System::Byte>: a vector of all b data

         .. code-block:: c#

            List<System::Byte>^ getVecB();

      .. group-tab:: Python

         .. code-block:: python

   getVecA:
      Return a vector of all Alpha-channel data

   .. tabs::

      .. group-tab:: C++

            return:
               - std::vector<uint8_t>: a vector of all a data

         .. code-block:: C++

		      DAOAI_API std::vector<uint8_t> getVecA() const;
            
      .. group-tab:: C#

         return:
            - List<System::Byte>: a vector of all a data

         .. code-block:: c#

            List<System::Byte>^ getVecA();

      .. group-tab:: Python

         .. code-block:: python

   clone:
      Make a deep copy of the point cloud

   .. tabs::

      .. group-tab:: C++

         return:
            - PointCloud: Copied point cloud.

         .. code-block:: C++

		      DAOAI_API PointCloud clone();
            
      .. group-tab:: C#

         return:
            - PointCloud: Copied point cloud.

         .. code-block:: c#

            PointCloud^ clone();

      .. group-tab:: Python

         .. code-block:: python

   getPointCloudImpl:
      get the shared pointer of point cloud object.

   .. tabs::

      .. group-tab:: C++

            return:
               - std::shared_ptr: shared pointer on point cloud

         .. code-block:: C++

		      DAOAI_API PointCloud getPointCloudImpl();
            
      .. group-tab:: C#

         .. code-block:: c#

      .. group-tab:: Python

         .. code-block:: python


*Class* Point
~~~~~~~~~~~~~~~~

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            #include "point.h"

      .. group-tab:: C#

         .. code-block:: c#

            #include "point.h"

      .. group-tab:: Python

         .. code-block:: python


Public Member Functions
`````````````````````````

   **Constructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            DAOAI_API Point();

      .. group-tab:: C#

         .. code-block:: c#

            DAOAI_API Point();

      .. group-tab:: Python

         .. code-block:: python


   **Destructor**:

   .. tabs::

      .. group-tab:: C++

         .. code-block:: C++
            
            DAOAI_API ~Point() {}

      .. group-tab:: C#

         .. code-block:: c#

            DAOAI_API ~Point();

      .. group-tab:: Python

         .. code-block:: python

   isNaN:
      Return bool if the point is NaN

   .. tabs::

      .. group-tab:: C++

         return:
            - bool: bool if the point is NaN

         .. code-block:: C++

		      DAOAI_API bool isNaN();
            
      .. group-tab:: C#

         return:
            - System::Boolean: bool if the point is NaN

         .. code-block:: c#

            System::Boolean isNaN();

      .. group-tab:: Python

         .. code-block:: python

   getX:
      Get x value from the point. 

   .. tabs::

      .. group-tab:: C++

         return:
            - float: x value from the point. 

         .. code-block:: C++

            DAOAI_API inline float getX() const {
               return this->x_;
            }
            
      .. group-tab:: C#

         return:
            - System::Single: x value from the point. 

         .. code-block:: c#

            System::Single getX();

      .. group-tab:: Python

         .. code-block:: python

   getY:
      Get y value from the point. 

   .. tabs::

      .. group-tab:: C++

         return:
            - float: y value from the point. 

         .. code-block:: C++

            DAOAI_API inline float getY() const {
               return this->y_;
            }
            
      .. group-tab:: C#

         return:
            - System::Single: y value from the point. 

         .. code-block:: c#

            System::Single getY();

      .. group-tab:: Python

         .. code-block:: python

   getZ:
      Get z value from the point. 

   .. tabs::

      .. group-tab:: C++

            return:
               - float: z value from the point. 

         .. code-block:: C++

            DAOAI_API inline float getZ() const {
               return this->z_;
            }
            
      .. group-tab:: C#

         return:
            - System::Single: z value from the point. 

         .. code-block:: c#

            System::Single getZ();

      .. group-tab:: Python

         .. code-block:: python

   getR:
      Get r value from the point. 

   .. tabs::

      .. group-tab:: C++

            return:
               - uint8_t: r value from the point. 

         .. code-block:: C++

            DAOAI_API inline uint8_t getR() const {
               return ((rgba_ >> 16) & 0xff);
            }
            
      .. group-tab:: C#

         return:
            - System::Byte: r value from the point. 

         .. code-block:: c#

            System::Byte getR();

      .. group-tab:: Python

         .. code-block:: python

   getG:
      Get g value from the point. 

   .. tabs::

      .. group-tab:: C++

            return:
               - uint8_t: g value from the point. 

         .. code-block:: C++

            DAOAI_API inline uint8_t getG() const {
               return ((rgba_ >> 8) & 0xff);
            }
            
      .. group-tab:: C#

         return:
            - System::Byte: g value from the point. 

         .. code-block:: c#

            System::Byte getG();

      .. group-tab:: Python

         .. code-block:: python

   getB:
      Get b value from the point. 

   .. tabs::

      .. group-tab:: C++

            return:
               - uint8_t: b value from the point. 

         .. code-block:: C++

            DAOAI_API inline uint8_t getB() const {
               return ((rgba_) & 0xff);
            }
            
      .. group-tab:: C#

         return:
            - System::Byte: b value from the point. 

         .. code-block:: c#

            System::Byte getB();

      .. group-tab:: Python

         .. code-block:: python

   getA:
      Get a value from the point. 

   .. tabs::

      .. group-tab:: C++

            return:
               - uint8_t: a value from the point. 

         .. code-block:: C++

            DAOAI_API inline uint8_t getA() const {
               return ((rgba_ >> 24) & 0xff);
            }
            
      .. group-tab:: C#

         return:
            - System::Byte: a value from the point. 

         .. code-block:: c#

            System::Byte getA();

      .. group-tab:: Python

         .. code-block:: python

   getRgba:
      Get rgba value from the point.
		NOTE: RGBA value is stored in the form 0xAARRGGBB (ARGB format)

   .. tabs::

      .. group-tab:: C++

            return:
               - uint32_t: rgba value from the point.

         .. code-block:: C++

            DAOAI_API inline uint32_t getRgba() const {
               return this->rgba_;
            }
            
      .. group-tab:: C#
         
            return:
               - System::UInt32: rgba value from the point.

         .. code-block:: c#

            System::UInt32 getRgba();

      .. group-tab:: Python

         .. code-block:: python

   getConfident:
      Get confident value from the point.

   .. tabs::

      .. group-tab:: C++

            return:
               - float: confident value from the point.

         .. code-block:: C++

            DAOAI_API inline float getConfident() const {
               return this->confident_;
            }
            
      .. group-tab:: C#

            return:
               - System::Single: confident value from the point.

         .. code-block:: c#

            System::Single getConfident();

      .. group-tab:: Python

         .. code-block:: python

   setX:
      Assign x value to the point.

   .. tabs::

      .. group-tab:: C++

            parameters:
               - x[in]: value to assign
            return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setX(const float x) {
               x_ = x;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            parameters:
               - x[in]: value to assign
            return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ setX(System::Single x)

      .. group-tab:: Python

         .. code-block:: python

   setY:
      Assign y value to the point.

   .. tabs::

      .. group-tab:: C++

            parameters:
               - y[in]: value to assign
            return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setY(const float y) {
               y_ = y;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            parameters:
               - y[in]: value to assign
            return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ setY(System::Single y)

      .. group-tab:: Python

         .. code-block:: python

   setZ:
      Assign z value to the point.

   .. tabs::

      .. group-tab:: C++

            parameters:
               - z[in]: value to assign
            return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setZ(const float z) {
               z_ = z;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            parameters:
               - z[in]: value to assign
            return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ setZ(System::Single z)

      .. group-tab:: Python

         .. code-block:: python

   setRgba:
      Assign rgba value to the point.

   .. tabs::

      .. group-tab:: C++

            parameters:
               - r[in]: red value to assign
               - g[in]: green value to assign
               - b[in]: blue value to assign
               - a[in]: alpha value to assign
            return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setRgba(const uint8_t r, const uint8_t g, const uint8_t b, const uint8_t a)
            {
               rgba_ = static_cast<uint32_t>((a << 24) | (r << 16) | (g << 8) | b);
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            parameters:
               - r[in]: red value to assign
               - g[in]: green value to assign
               - b[in]: blue value to assign
               - a[in]: alpha value to assign
            return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ setRgba(System::Byte r, System::Byte g, System::Byte b, System::Byte a);

      .. group-tab:: Python

         .. code-block:: python

   setRgba:
      Assign rgba value to the point.

   .. tabs::

      .. group-tab:: C++

            parameters:
               - rgba[in]:value to assign

            return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setRgba(const uint32_t rgba)
            {
               rgba_ = rgba;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            parameters:
               - rgba[in]:value to assign
            return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ (System::UInt32 rgba);


      .. group-tab:: Python

         .. code-block:: python

   setRgb:
      Assign rgb value to the point, and alpha channel will be set to 255.

   .. tabs::

      .. group-tab:: C++

            parameters:
               - r[in]: red value to assign
               - g[in]: green value to assign
               - b[in]: blue value to assign

            return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setRgb(const uint8_t r, const uint8_t g, const uint8_t b) {
               this->setRgba(r, g, b, 255);
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            parameters:
               - r[in]: red value to assign
               - g[in]: green value to assign
               - b[in]: blue value to assign

            return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ setRgb(System::Byte r, System::Byte g, System::Byte b);

      .. group-tab:: Python

         .. code-block:: python

   setConfident:
      Assign confident value to the point.

   .. tabs::

      .. group-tab:: C++

            parameters:
               - confident[in]: confident value to assign

            return:
               - SlcSdkError: struct containing status codes and any error messages.

         .. code-block:: C++

            DAOAI_API inline SlcSdkError setConfident(const float confident) {
               confident_ = confident;
               return SlcSdkError(SlcSdkSuccess, "Successfully modified point data.");
            }
            
      .. group-tab:: C#

            parameters:
               - confident[in]: confident value to assign

            return:
               - DaoAINETError^: DaoAINETError class handle containing status codes and any error messages.

         .. code-block:: c#

            DaoAINETError^ setConfident(System::Single confident);

      .. group-tab:: Python

         .. code-block:: python

   **operator =**:

   .. tabs::

      .. group-tab:: C++

            parameters:
               - point[in]: another Point.

            return:
               - Point &: return a reference of a Point.

         .. code-block:: C++

            DAOAI_API Point &operator=(const Point& point);
            
      .. group-tab:: C#

         .. code-block:: c#

      .. group-tab:: Python

         .. code-block:: python


