SDK Sample
=================================

.. contents:: 
   :local:


Capture tutorial
---------------------

This tutorial describes how to use the DaoAI SDK to capture point clouds and 2D images.

Prerequisites
~~~~~~~~~~~~~~~~~~~

    - install DaoAI Camera Studio

Setup
------------------

Calling any of the APIs in the DaoAI Camera SDK requires initializing the DaoAI application and keeping it alive while the program runs.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++
         
         // Setup ==========================================================================================================
         // Declare an error return object to check for errors throughout the application.
         DaoAI::SlcSdkError ret;

         // Create a new DaoAI application instance.
         DaoAI::Application* app = new DaoAI::Application();

         // Specify directory for logging. Logs contain detailed error and process information. 
         std::string logging_directory = "../../Logs/";
         ret = app->startLogging(logging_directory);
         if (hasError(ret)) { return -1; } // Check for errors

         // If using remote cameras, specify remote IP address
         std::string remote_ip = "192.168.1.2";

         // Declare camera map that will be used to fetch all connected DaoAI Cameras.
         std::map<std::string, DaoAI::Camera*> cameras;

         // Get cameras from application. This step must be completed before attempting to connect to any camera.
         ret = app->getCameras(cameras, remote_ip);
         if (hasError(ret)) { return -1; } // Check for errors

         if (cameras.size() == 0) {
            return -1; // Must detect at least one camera.
         }
         std::cout << cameras.size() << " cameras detected." << std::endl;
         for (std::pair<std::string, DaoAI::Camera*> pair : cameras) {
            std::cout << "	" << pair.first << std::endl; // Print serial numbers of detected cameras.
         }

         // Declare pointer to DaoAI Camera object.
         DaoAI::Camera* cam;

   .. group-tab:: C#

      .. code-block:: c#

         // Setup ==========================================================================================================
         // Declare an error return object to check for errors throughout the application.
         DaoAINETError err;

         // Create a new DaoAI application instance.
         Application app = new Application();

         // Specify directory for logging. Logs contain detailed error and process information. 
         string logging_directory = "../../../../../Logs/";

         err = app.startLogging(logging_directory);

         if (HasError(err)) { return; } // Check for errors


         // If using remote cameras, specify remote IP address
         string remote_ip = "192.168.1.2";

         // Declare a dictionary of cameras that will be used to fetch all connected DaoAI Cameras.
         // Dictionaries are included in the Systems.Collections.Generic namespace.
         Dictionary<string, Camera> cameras = new Dictionary<string, Camera>();

         // Get cameras from application. This step must be completed before attempting to connect to any camera.
         err = app.getCameras(ref cameras, remote_ip);
         if (HasError(err)) { return; } // Check for errors

         if (cameras.Count == 0)
         {
               return; // Must detect at least one camera.
         }
         Console.WriteLine(cameras.Count + " cameras detected.");

         foreach (KeyValuePair<string, Camera> pair in cameras)
         {
               Console.WriteLine("   " + pair.Key);  // Print serial numbers of detected cameras.
         }
         
   .. group-tab:: Python

      .. code-block:: python


Connecting to a Camera
------------------------

Connecting to camera can have 3 Options.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Connecting to a camera =========================================================================================
         // A DaoAI Camera must be connected before it can be used for captures. 
         // OPTION 1: Connecting to the first detected DaoAI Camera.
         ret = app->connectCamera(cam);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->disConnect();
         if (hasError(ret)) { return -1; } // Check for errors

         // OPTION 2: Connect to specific camera by serial number.
         std::string serial_num = cameras.begin()->first; // Grab serial number from first camera in map.
         // Method A
         ret = app->connectCamera(serial_num, cam);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = app->disconnectCamera(serial_num); // Can also disconnect cam by serial number.
         if (hasError(ret)) { return -1; } // Check for errors
         // Method B
         cam = cameras[serial_num];
         ret = cam->connect();
         if (hasError(ret)) { return -1; } // Check for errors
         ret = app->disconnectCamera(serial_num);
         if (hasError(ret)) { return -1; } // Check for errors

         // OPTION 3: Connecting any camera found in camera map.
         if (cameras.size() > 0) {
            cam = cameras.begin()->second;
         }
         ret = cam->connect();
         if (hasError(ret)) { return -1; } // Check for errors

   .. group-tab:: C#

      .. code-block:: c#

         // Connecting to a camera =========================================================================================
         // A DaoAI Camera must be connected before it can be used for captures. 
         // OPTION 1: Connecting to the first detected DaoAI Camera.
         err = app.connectCamera(ref cam);
         if (HasError(err)) { return; } // Check for errors
         err = cam.disConnect();
         if (HasError(err)) { return; } // Check for errors

         // OPTION 2: Connect to specific camera by serial number.
         string serial_num = cameras.Keys.First(); // Grab serial number from first camera in dictionary.
               // Method A
         err = app.connectCamera(serial_num, ref cam);
         if (HasError(err)) { return; } // Check for errors
         err = cam.disConnect();
         if (HasError(err)) { return; } // Check for errors
               // Method B
         cam = cameras[serial_num];
         err = cam.connect();
         if (HasError(err)) { return; } // Check for errors
         err = cam.disConnect();
         if (HasError(err)) { return; } // Check for errors

         // OPTION 3: Connecting any camera found in camera map.
         if (cameras.Count > 0)
         {
               cam = cameras.Values.First();
         }
         err = cam.connect();
         if (HasError(err)) { return; } // Check for errors

   .. group-tab:: Python

      .. code-block:: python


Camera Actions
-----------------

Get serial number, camera intrinsic parameters, and camera settings information.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Camera Actions =================================================================================================
         // Some camera actions will require the camera to be connected, be sure to check documentation and error messages.
         // Check if a camera is connected.
         if (!cam->isConnected()) {
            return -1;
         }

         // Get serial number of this camera.
         serial_num = cam->getSerialNumber();
         std::cout << "Serial number of connected camera is " << serial_num << std::endl;

         // Get camera intrinsic parameters.
         std::vector<float> intrinsic_params;
         ret = cam->getIntrinsicParam(intrinsic_params);
         if (hasError(ret)) { return -1; } // Check for errors

         // Get current settings used by this camera.
         DaoAI::Settings settings = cam->getSettings();

   .. group-tab:: C#

      .. code-block:: c#

         // Camera Actions =================================================================================================
         // Some camera actions will require the camera to be connected, be sure to check documentation and error messages.
         // Check if a camera is connected.
         if (!cam.isConnected())
         {
               return;
         }

         // Get serial number of this camera.
         serial_num = cam.getSerialNumber();
         Console.WriteLine("Serial number of connected camera is " + serial_num);

         // Get camera intrinsic parameters.
         float[] intrinsic_params = new float[] { };
         err = cam.getIntrinsicParam(ref intrinsic_params);
         if (HasError(err)) { return; } // Check for errors

         // Get current settings used by this camera.
         Settings settings = cam.getSettings();

   .. group-tab:: Python

      .. code-block:: python

Camera Settings
-------------------

Create camera settings and load from camera setting file.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Camera Settings ================================================================================================
         // DaoAI Settings can be used with a camera to tweak parameters during capture and the reconstruction process.
         DaoAI::Settings new_settings;
         int icurr, imin, imax; // Use these to inquire integer settings.
         double dcurr, dmin, dmax; // Use these to inquire double settings.
         bool bcurr; // Use this to inquire boolean settings.
         std::string scurr; // Use this to inquire string settings.
         bool is_enabled; // Use this to check if a setting is enabled.
         int inewval; // Use this to set a new integer value to a setting.
         double dnewval; // Use this to set a new double value to a setting.
         bool bnewval; // Use this to set a new boolean value to a setting.
         // Creating new empty Camera Settings
         new_settings = DaoAI::Settings();
         // Loading existing Camera Settings from file.
         std::string path_to_settings = "../../Examples/sample_settings.cfg";
         new_settings = DaoAI::Settings(path_to_settings);
         // Cloning settings
         new_settings = DaoAI::Settings(settings);

   .. group-tab:: C#

      .. code-block:: c#

         // Camera Settings ================================================================================================
         // DaoAI Settings can be used with a camera to tweak parameters during capture and the reconstruction process.
         Settings new_settings;
         int icurr = -1, imin = -1, imax = -1; // Use these to inquire integer settings.
         double dcurr = -1.0, dmin = -1.0, dmax = -1.0; // Use these to inquire double settings.
         bool bcurr = false; // Use this to inquire boolean settings.
         string scurr = ""; // Use this to inquire string settings.
         bool is_enabled = false; // Use this to check if a setting is enabled.
         int inewval = 0; // Use this to set a new integer value to a setting.
         double dnewval = 0.0; // Use this to set a new double value to a setting.
         bool bnewval = true ; // Use this to set a new boolean value to a setting.
         
         // Creating new empty Camera Settings
         new_settings = new Settings();
         // Loading existing Camera Settings from file.
         string path_to_settings = "../../../../../Examples/sample_settings.cfg";
         new_settings = new Settings(path_to_settings);
         // Cloning settings
         new_settings = new Settings(settings);

   .. group-tab:: Python

      .. code-block:: python


Acquisition Frames
~~~~~~~~~~~~~~~~~~~~~~~

Configure aAcquisition frames parameters.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Acquisition Frames
         // Acquisition frames specify parameters to be used during image capture. A settings object can support up to 10.
         //     Each acquisition frame has three modififiable parameters: Brightness, Gain and ExposureStop.
         //     See documentation for details.
         DaoAI::AcquisitionFrame af;

         // Create default AcquisitionFrame
         af = DaoAI::AcquisitionFrame();

         // Create AcquisitionFrame with initial values
         int brightness = 3;
         double gain = 2.0;
         int exposure_stop = -1;
         af = DaoAI::AcquisitionFrame(brightness, gain, exposure_stop);

         // View the current value and acceptable bounds for any AcquisitionFrame parameter.
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::ExposureStop, icurr, imin, imax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "Current exposure stop: " << icurr << ". Exposure stop can be configured to any value between " << imin << " - " << imax << std::endl;
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::ExposureStop, icurr); // Inquire only current value.
         if (hasError(ret)) { return -1; } // Check for errors

         // Configure any AcquisitionFrame parameter to a custom value.
         ret = af.configureSetting(DaoAI::AcquisitionFrame::ExposureStop, 2);
         if (hasError(ret)) { return -1; } // Check for errors

         // Double parameters can also be retreived and modified with double values.
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::Gain, dcurr, dmin, dmax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "Current gain: " << dcurr << ". Gain can be configured to any value between " << dmin << " - " << dmax << std::endl;
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::Gain, dcurr); // Inquire only current value.
         if (hasError(ret)) { return -1; } // Check for errors

         ret = af.configureSetting(DaoAI::AcquisitionFrame::Gain, 2);
         if (hasError(ret)) { return -1; } // Check for errors

         // Using the incorrect type to configure or inquire a parameter will be successful but will return a warning.
         ret = af.inquireSetting(DaoAI::AcquisitionFrame::Gain, icurr, imin, imax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << ret.details() << std::endl; // Warning about possible data loss, attempting to read double as int.
         dnewval = 1.5;
         ret = af.configureSetting(DaoAI::AcquisitionFrame::ExposureStop, dnewval);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << ret.details() << std::endl; // Warning about possible data loss, attempting to set int with double.

         // Add acquisition frame to settings. 
         int index; // Index of added acquisition frame.
         ret = new_settings.addAcquisitionFrame(af, index);
         if (hasError(ret)) { return -1; } // Check for errors

         // Get acquisition frame
         DaoAI::AcquisitionFrame returned_af;
         ret = new_settings.getAcquisitionFrame(returned_af, 1);
         if (hasError(ret)) { return -1; } // Check for errors

         // Delete acquisition frame at index.
         ret = new_settings.deleteAcquisitionFrame(index);
         if (hasError(ret)) { return -1; } // Check for errors

         // Add acquisition frame without getting index.
         ret = new_settings.addAcquisitionFrame(af);
         if (hasError(ret)) { return -1; } // Check for errors

         // Modify and replace the acquisition frame at index 1.
         ret = af.configureSetting(DaoAI::AcquisitionFrame::Brightness, 2);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.modifyAcquisitionFrame(af, 1);
         if (hasError(ret)) { return -1; } // Check for errors

         std::map<int, DaoAI::AcquisitionFrame> mofaf;
         // Get copy of entire map of acquisition frames.
         ret = new_settings.getAcquisitionFrames(mofaf);
         if (hasError(ret)) { return -1; } // Check for errors

         // Set map of acquisition frames to settings.
         mofaf[1] = DaoAI::AcquisitionFrame(1, 0, 1);
         mofaf[2] = DaoAI::AcquisitionFrame(2, 2, 2);
         ret = new_settings.setAcquisitionFrames(mofaf);
         if (hasError(ret)) { return -1; } // Check for errors

   .. group-tab:: C#

      .. code-block:: c#

         // Acquisition Frames
         // Acquisition frames specify parameters to be used during image capture. A settings object can support up to 10.
         //     Each acquisition frame has three modififiable parameters: Brightness, Gain and ExposureStop.
         //     See documentation for details.
         AcquisitionFrame af;

         // Create default AcquisitionFrame
         af = new AcquisitionFrame();

         // Create AcquisitionFrame with initial values
         int brightness = 3;
         double gain = 2.0;
         int exposure_stop = -1;
         af = new AcquisitionFrame(brightness, gain, exposure_stop);

         // View the current value and acceptable bounds for any AcquisitionFrame parameter.
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.ExposureStop, ref icurr, ref imin, ref imax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("Current exposure stop: " + icurr + ". Exposure stop can be configured to any value between " + imin + " - " + imax);
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.ExposureStop, ref icurr); // Inquire only current value.
         if (HasError(err)) { return; } // Check for errors

         // Configure any AcquisitionFrame parameter to a custom value.
         err = af.configureSetting(AcquisitionFrame.AcquisitionFrameSetting.ExposureStop, 2);
         if (HasError(err)) { return; } // Check for errors

         // Double parameters can also be retreived and modified with double values.
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.Gain, ref dcurr, ref dmin, ref dmax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("Current gain: " + dcurr + ". Gain can be configured to any value between " + dmin + " - " + dmax);
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.Gain, ref dcurr); // Inquire only current value.
         if (HasError(err)) { return; } // Check for errors

         err = af.configureSetting(AcquisitionFrame.AcquisitionFrameSetting.Gain, 2.1);
         if (HasError(err)) { return; } // Check for errors

         // Using the incorrect type to configure or inquire a parameter will be successful but will return a warning.
         err = af.inquireSetting(AcquisitionFrame.AcquisitionFrameSetting.Gain, ref icurr, ref imin, ref imax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine(err.details()); // Warning about possible data loss, attempting to read double as int.
         dnewval = 1.5;
         err = af.configureSetting(AcquisitionFrame.AcquisitionFrameSetting.ExposureStop, dnewval);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine(err.details()); // Warning about possible data loss, attempting to set int with double.

         // Add acquisition frame to settings. 
         int index = -1; // Index of added acquisition frame.
         err = new_settings.addAcquisitionFrame(af, ref index);
         if (HasError(err)) { return; } // Check for errors

         // Get acquisition frame
         AcquisitionFrame returned_af = new AcquisitionFrame();
         err = new_settings.getAcquisitionFrame(ref returned_af, 1);
         if (HasError(err)) { return; } // Check for errors

         // Delete acquisition frame at index.
         err = new_settings.deleteAcquisitionFrame(index);
         if (HasError(err)) { return; } // Check for errors

         // Add acquisition frame without getting index.
         err = new_settings.addAcquisitionFrame(af);
         if (HasError(err)) { return; } // Check for errors

         // Modify and replace the acquisition frame at index 1.
         err = af.configureSetting(AcquisitionFrame.AcquisitionFrameSetting.Brightness, 2);
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.modifyAcquisitionFrame(af, 1);
         if (HasError(err)) { return; } // Check for errors

         Dictionary<int, AcquisitionFrame> mofaf = new Dictionary<int, AcquisitionFrame>();
         // Get copy of entire dictionary of acquisition frames currently saved in settings.
         err = new_settings.getAcquisitionFrames(ref mofaf);
         if (HasError(err)) { return; } // Check for errors

         // Set map of acquisition frames to settings. Remember that the acquisition frame dictionary is one-indexed.
         mofaf[1] = new AcquisitionFrame(1, 0, 1);
         mofaf[2] = new AcquisitionFrame(2, 2, 2);
         err = new_settings.setAcquisitionFrames(mofaf);
         if (HasError(err)) { return; } // Check for errors

   .. group-tab:: Python

      .. code-block:: python

Capture Assistant
~~~~~~~~~~~~~~~~~~~~

Auto compute acquisition frame settings by analyzing scene given a time buget.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Capture Assistant
         // Analyze scene and generate acquisition frame settings, the total time for all acquisition frames will be less than the time budget. 
         //		The higher time budget is, the more acquisition frames will be generated.
         std::map<int, DaoAI::AcquisitionFrame> ca_mofaf;
         ret = cam->captureAssistant(1.0, ca_mofaf);  // Generate a map of acquisition frames with time budget of 1 sec.
         if (hasError(ret)) { return -1; }
         ret = new_settings.setAcquisitionFrames(ca_mofaf);  // Set the generated acquisition frames to camera settings
         if (hasError(ret)) { return -1; }
         ret = cam->setSettings(new_settings);  // Apply the camera settings to camera
         if (hasError(ret)) { return -1; }
         DaoAI::Frame ca_frm;
         ret = cam->capture(ca_frm);  // Capture point cloud
         if (hasError(ret)) { return -1; }

   .. group-tab:: C#

      .. code-block:: c#

         // Capture Assistant
         // Analyze scene and generate acquisition frame settings, the total time for all acquisition frames will be less than the time budget. 
         //		The higher time budget is, the more acquisition frames will be generated.
         Dictionary<int, AcquisitionFrame> ca_mofaf = new Dictionary<int, AcquisitionFrame>();
         err = cam.captureAssistant(1.0, ref ca_mofaf);  // Generate a map of acquisition frames with time budget of 1 sec.
         if (HasError(err)) { return; }
         err = new_settings.setAcquisitionFrames(ca_mofaf);  // Set the generated acquisition frames to camera settings
         if (HasError(err)) { return; }
         err = cam.setSettings(new_settings);  // Apply the camera settings to camera
         if (HasError(err)) { return; }
         Frame ca_frm = new Frame();
         err = cam.capture(ref ca_frm);  // Capture point cloud
         if (HasError(err)) { return; }

   .. group-tab:: Python

      .. code-block:: python


Filter Settings
~~~~~~~~~~~~~~~~~~~~

Create, read, and modify Filter settings.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Filter Settings
         // Filter settings specify parameters that are used during 3D reconstruction. For a full list of filter settings 
         //      and their descriptions consult settings.h and the documentation.
         // Enable or Disable filter settings. 
         ret = new_settings.enableFilterSetting(DaoAI::Settings::OutlierThreshold, true); // Enable outlier filter
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.enableFilterSetting(DaoAI::Settings::GaussianFilter, false); // Disable gaussian filter
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.enableFilterSetting(DaoAI::Settings::FillGaps, true); // Enable Fill Gaps
         if (hasError(ret)) { return -1; } // Check for errors

         // Check if a filter setting is enabled.
         ret = new_settings.checkEnableFilterSetting(DaoAI::Settings::OutlierThreshold, is_enabled); // Check if outlier filter is enabled.
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Outlier filter is enabled!" << std::endl; }
         ret = new_settings.checkEnableFilterSetting(DaoAI::Settings::GaussianFilter, is_enabled); // Check if gaussian filter is enabled.
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Gaussian filter is enabled!" << std::endl; }
         ret = new_settings.checkEnableFilterSetting(DaoAI::Settings::FillGaps, is_enabled); // Enable Fill Gaps
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Fill gaps is enabled!" << std::endl; }

         // Get the current value and valid range of a filter setting.
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::OutlierThreshold, dcurr, dmin, dmax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "Outlier threshold filter has a current value of " << dcurr << ", with a valid range of " << dmin << " - " << dmax << std::endl;
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::OutlierThreshold, dcurr); // Can also get current value without checking range.
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::GaussianFilter, icurr, imin, imax);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "Gaussian filter has a current value of " << icurr << ", with a valid range of " << imin << " - " << imax << std::endl;
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::GaussianFilter, icurr); // Can also get current value without checking range.
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::FillGaps, bcurr);
         if (hasError(ret)) { return -1; } // Check for errors

         // Configure a filter setting.
         inewval = 2;
         dnewval = 3.4;
         bnewval = true;
         ret = new_settings.configureFilterSetting(DaoAI::Settings::OutlierThreshold, dnewval);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.configureFilterSetting(DaoAI::Settings::GaussianFilter, inewval);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.configureFilterSetting(DaoAI::Settings::FillXFirst, bnewval);
         if (hasError(ret)) { return -1; } // Check for errors

         // For numeric filter settings, using a type mismatch getter or setter will work successfully but issue a warning.
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::OutlierThreshold, icurr);
         if (hasError(ret)) { return -1; } // Expect no error (status = DaoAI::SlcSdkSuccess)
         std::cout << ret.details() << std::endl; // Print warning message for using int value to retrieve a double parameter.
         dnewval = 1.5;
         ret = new_settings.inquireFilterSetting(DaoAI::Settings::GaussianFilter, dnewval);
         if (hasError(ret)) { return -1; } // Expect no error (status = DaoAI::SlcSdkSuccess)
         std::cout << ret.details() << std::endl; // Print warning message for using double value to set an integer parameter.


   .. group-tab:: C#

      .. code-block:: c#

         // Filter Settings
         // Filter settings specify parameters that are used during 3D reconstruction. For a full list of filter settings 
         //      and their descriptions consult settings.h and the documentation.
         // Enable or Disable filter settings. 
         err = new_settings.enableFilterSetting(Settings.FilterSetting.OutlierThreshold, true); // Enable outlier filter
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.enableFilterSetting(Settings.FilterSetting.GaussianFilter, false); // Disable gaussian filter
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.enableFilterSetting(Settings.FilterSetting.FillGaps, true); // Enable Fill Gaps
         if (HasError(err)) { return; } // Check for errors

         // Check if a filter setting is enabled.
         err = new_settings.checkEnableFilterSetting(Settings.FilterSetting.OutlierThreshold, ref is_enabled); // Check if outlier filter is enabled.
         if (HasError(err)) { return; } // Check for errors
         if (is_enabled) { Console.WriteLine("Outlier filter is enabled!"); }
         err = new_settings.checkEnableFilterSetting(Settings.FilterSetting.GaussianFilter, ref is_enabled); // Check if gaussian filter is enabled.
         if (HasError(err)) { return; } // Check for errors
         if (is_enabled) { Console.WriteLine("Gaussian filter is enabled!" ); }
         err = new_settings.checkEnableFilterSetting(Settings.FilterSetting.FillGaps, ref is_enabled); // Enable Fill Gaps
         if (HasError(err)) { return; } // Check for errors
         if (is_enabled) { Console.WriteLine("Fill gaps is enabled!"); }

         // Get the current value and valid range of a filter setting.
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.OutlierThreshold, ref dcurr, ref dmin, ref dmax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("Outlier threshold filter has a current value of " + dcurr + ", with a valid range of " + dmin + " - " + dmax);
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.OutlierThreshold, ref dcurr); // Can also get current value without checking range.
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.GaussianFilter, ref icurr, ref imin, ref imax);
         if (HasError(err)) { return; } // Check for errors
         Console.WriteLine("Gaussian filter has a current value of " + icurr + ", with a valid range of " + imin + " - " + imax);
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.GaussianFilter, ref icurr); // Can also get current value without checking range.
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.FillGaps, ref bcurr);
         if (HasError(err)) { return; } // Check for errors

         // Configure a filter setting.
         inewval = 2;
         dnewval = 3.4;
         bnewval = true;
         err = new_settings.configureFilterSetting(Settings.FilterSetting.OutlierThreshold, dnewval);
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.configureFilterSetting(Settings.FilterSetting.GaussianFilter, inewval);
         if (HasError(err)) { return; } // Check for errors
         err = new_settings.configureFilterSetting(Settings.FilterSetting.FillXFirst, bnewval);
         if (HasError(err)) { return; } // Check for errors

         // For numeric filter settings, using a type mismatch getter or setter will work successfully but issue a warning.
         err = new_settings.inquireFilterSetting(Settings.FilterSetting.OutlierThreshold, ref icurr);
         if (HasError(err)) { return; } // Expect no error (status = SlcSdkSuccess)
         Console.WriteLine(err.details()); // Print warning message for using int value to retrieve a double parameter.
         dnewval = 1.5;
         err = new_settings.configureFilterSetting(Settings.FilterSetting.GaussianFilter, dnewval);
         if (HasError(err)) { return; } // Expect no error (status = SlcSdkSuccess)
         Console.WriteLine(err.details()); // Print warning message for using double value to set an integer parameter.

   .. group-tab:: Python

      .. code-block:: python

System Settings
~~~~~~~~~~~~~~~~~~~~

Create, read, and export System settings.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // System Settings
         // System settings are miscellaneous parameters that describe and affect the DaoAI System. For a full list of system  
         //      settings and their descriptions consult settings.h and the documentation.
         //      NOTE: Many of these system settings are read-only, and may not be accurate for current camera system 
         //            unless getting the updated settings object directly from a camera [DaoAI::Camera.getSettings()].
         // Enable or Disable System Setting
         ret = new_settings.configureSystemSetting(DaoAI::Settings::ExtraWhitePatternEnable, false);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = new_settings.configureSystemSetting(DaoAI::Settings::TemperatureRegulationEnable, true);
         if (hasError(ret)) { return -1; } // Check for errors

         // Check if a system setting is enabled.
         ret = new_settings.checkEnableSystemSetting(DaoAI::Settings::ExtraWhitePatternEnable, is_enabled);
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Extra white pattern is enabled!" << std::endl; }
         ret = new_settings.checkEnableSystemSetting(DaoAI::Settings::TemperatureRegulationEnable, is_enabled);
         if (hasError(ret)) { return -1; } // Check for errors
         if (is_enabled) { std::cout << "Temperature regulation is enabled!" << std::endl; }

         // Get the current value of a system setting.
         ret = new_settings.inquireSystemSetting(DaoAI::Settings::GPUAvailable, bcurr);
         if (hasError(ret)) { return -1; } // Check for errors
         if (bcurr) { std::cout << "GPU is Available on your system!" << std::endl; }
         ret = new_settings.inquireSystemSetting(DaoAI::Settings::CameraModel, scurr);
         if (hasError(ret)) { return -1; } // Check for errors
         std::cout << "This camera has model " << scurr << std::endl;

         // Save and export settings.
         std::string save_settings_path = "../../Examples/example_setting_save.cfg";
         ret = new_settings.exportSettings(save_settings_path);
         if (hasError(ret)) { return -1; } // Check for errors

   .. group-tab:: C#

      .. code-block:: c#

        // System Settings
        // System settings are miscellaneous parameters that describe and affect the DaoAI System. For a full list of system  
        //      settings and their descriptions consult settings.h and the documentation.
        //      NOTE: Many of these system settings are read-only, and may not be accurate for current camera system 
        //            unless getting the updated settings object directly from a camera [Camera.getSettings()].
        // Enable or Disable System Setting
        err = new_settings.configureSystemSetting(Settings.SystemSetting.ExtraWhitePatternEnable, false);
        if (HasError(err)) { return; } // Check for errors

        // Check if a system setting is enabled.
        err = new_settings.checkEnableSystemSetting(Settings.SystemSetting.ExtraWhitePatternEnable, ref is_enabled);
        if (HasError(err)) { return; } // Check for errors
        if (is_enabled) { Console.WriteLine("Extra white pattern is enabled!"); }
        err = new_settings.checkEnableSystemSetting(Settings.SystemSetting.TemperatureRegulationEnable, ref is_enabled);
        if (HasError(err)) { return; } // Check for errors
        if (is_enabled) { Console.WriteLine("Temperature regulation is enabled!"); }

        // Get the current value of a system setting.
        err = new_settings.inquireSystemSetting(Settings.SystemSetting.GPUAvailable, ref bcurr);
        if (HasError(err)) { return; } // Check for errors
        if (bcurr) { Console.WriteLine("GPU is Available on your system!"); }
        err = new_settings.inquireSystemSetting(Settings.SystemSetting.CameraModel, ref scurr);
        if (HasError(err)) { return; } // Check for errors
        Console.WriteLine("This camera has model " + scurr);

        // Save and export settings.
        string save_settings_path = "../../../../../Examples/example_setting_save.cfg";
        err = new_settings.exportSettings(save_settings_path);
        if (HasError(err)) { return; } // Check for errors

   .. group-tab:: Python

      .. code-block:: python

Capture
------------------

Capture image.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Camera Captures ================================================================================================
         // Declare a DaoAI Frame object to which capture data will be written
         DaoAI::Frame frm;
         // Capture with default settings (assuming no settings has been set to camera).
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors

         // Capture with custom settings
         // OPTION 1: Capture with settings. Settings saved by camera for future captures.
         ret = cam->capture(new_settings, frm);
         if (hasError(ret)) { return -1; } // Check for errors
         // OPTION 2: Set settings object to camera to use in capture.
         ret = cam->setSettings(new_settings);
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors
         // OPTION 3: Load settings from file to camera to use in capture.
         ret = cam->setSettings("../../Examples/sample_settings.cfg");
         if (hasError(ret)) { return -1; } // Check for errors
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; } // Check for errors

         // Use HDR image as captured frame's color
         ret = new_settings.enableFilterSetting(DaoAI::Settings::ShowHDR, true);
         if (hasError(ret)) { return -1; }
         ret = cam->setSettings(new_settings);
         if (hasError(ret)) { return -1; }
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; }
         // Use the first acquisition frame image as captured frame's color
         ret = new_settings.enableFilterSetting(DaoAI::Settings::ShowHDR, false);
         if (hasError(ret)) { return -1; }
         ret = cam->setSettings(new_settings);
         if (hasError(ret)) { return -1; }
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; }

         // Enable computation using local GPU (for BP-AMR and USB interface 3D cameras only)
         ret = cam->enableGPU(true);
         if (hasError(ret)) { return -1; }
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; }
         // Disable computation using local GPU, use CPU instead (for BP-AMR and USB interface 3D cameras only)
         ret = cam->enableGPU(false);
         if (hasError(ret)) { return -1; }
         ret = cam->capture(frm);
         if (hasError(ret)) { return -1; }

         // Enable temperature regulation
         ret = cam->enableTempRegulation(true);
         if (hasError(ret)) { return -1; }
         // Disable temperature regulation
         ret = cam->enableTempRegulation(false);
         if (hasError(ret)) { return -1; }

   .. group-tab:: C#

      .. code-block:: c#

         // Camera Captures ================================================================================================
         // Declare a DaoAI Frame object to which capture data will be written
         Frame frm = new Frame();
         // Capture with default settings (assuming no settings has been set to camera).
         err = cam.capture(ref frm);
         if (HasError(err)) { return; } // Check for errors

         // Capture with custom settings
         // OPTION 1: Capture with settings. Settings saved by camera for future captures.
         err = cam.capture(new_settings, ref frm);
         if (HasError(err)) { return; } // Check for errors
         // OPTION 2: Set settings object to camera to use in capture.
         err = cam.setSettings(new_settings);
         if (HasError(err)) { return; } // Check for errors
         err = cam.capture(ref frm);
         if (HasError(err)) { return; } // Check for errors
         // OPTION 3: Load settings from file to camera to use in capture.
         err = cam.setSettings("../../../../../Examples/sample_settings.cfg");
         if (HasError(err)) { return; } // Check for errors
         err = cam.capture(ref frm);
         if (HasError(err)) { return; } // Check for errors

         // Use HDR image as captured frame's color
         err = new_settings.enableFilterSetting(Settings.FilterSetting.ShowHDR, true);
         if (HasError(err)) { return; }
         err = cam.setSettings(new_settings);
         if (HasError(err)) { return; }
         err = cam.capture(ref frm);
         if (HasError(err)) { return; }
         // Use the first acquisition frame image as captured frame's color
         err = new_settings.enableFilterSetting(Settings.FilterSetting.ShowHDR, false);
         if (HasError(err)) { return; }
         err = cam.setSettings(new_settings);
         if (HasError(err)) { return; }
         err = cam.capture(ref frm);
         if (HasError(err)) { return; }
         // Check if local GPU is available
         Settings temp_settings = cam.getSettings();
         bool is_available = false;
         err = temp_settings.inquireSystemSetting(Settings.SystemSetting.GPUAvailable, ref is_available);
         if (HasError(err)) { return; }
         // Enable computation using local GPU (for BP-AMR and USB interface 3D cameras only)
         if (is_available)
         {
            err = cam.enableGPU(true);
            if (HasError(err)) { return; }
            err = cam.capture(ref frm);
            if (HasError(err)) { return; }
         }
         // Disable computation using local GPU, use CPU instead (for BP-AMR and USB interface 3D cameras only)
         if (is_available)
         {
            err = cam.enableGPU(false);
            if (HasError(err)) { return; }
            err = cam.capture(ref frm);
            if (HasError(err)) { return; }
         }
         // Enable temperature regulation
         err = cam.enableTempRegulation(true);
         if (HasError(err)) { return; }
         // Disable temperature regulation
         err = cam.enableTempRegulation(false);
         if (HasError(err)) { return; }

   .. group-tab:: Python

      .. code-block:: python

Frames
--------------

Save and load image.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Frames =========================================================================================================
         DaoAI::Frame new_frame;
         // Create new empty frame
         new_frame = DaoAI::Frame();
         // Copy constructor
         new_frame = DaoAI::Frame(frm);

         // Check if frame has data
         if (!new_frame.isEmpty()) { std::cout << "Success: Frame contains data from 3D capture!" << std::endl; }

         // Save a frame. File extension .dcf is the preferred DaoAI frame format, but saving also supports .pcd and .ply formats.
         std::string save_frame_path = "../../Examples/example_frame_save.dcf";
         ret = new_frame.save(save_frame_path);
         if (hasError(ret)) { return -1; } // Check for errors

         // Load a frame from file. Supports .dcf files.
         ret = new_frame.load("../../Examples/sample_frame.dcf");
         if (hasError(ret)) { return -1; } // Check for errors

         // Get point cloud data.
         DaoAI::PointCloud pcl;
         ret = frm.getPointCloud(pcl);
         if (hasError(ret)) { return -1; } // Check for errors

   .. group-tab:: C#

      .. code-block:: c#

         // Frames =========================================================================================================
         Frame new_frame;
         // Create new empty frame
         new_frame = new Frame();
         // Copy constructor
         new_frame = new Frame(frm);

         // Check if frame has data
         if (!new_frame.isEmpty()) { Console.WriteLine("Success: Frame contains data from 3D capture!"); }

         // Save a frame. File extension .dcf is the preferred DaoAI frame format, but saving also supports .pcd and .ply formats.
         string save_frame_path = "../../../../../Examples/example_frame_save.dcf";
         err = new_frame.save(save_frame_path);
         if (HasError(err)) { return; } // Check for errors

         // Load a frame from file. Supports .dcf files.
         err = new_frame.load("../../../../../Examples/sample_frame.dcf");
         if (HasError(err)) { return; } // Check for errors

         // Get point cloud data.
         PointCloud pcl = new PointCloud();
         err = frm.getPointCloud(ref pcl);
         if (HasError(err)) { return; } // Check for errors

   .. group-tab:: Python

      .. code-block:: python


Point Cloud
------------------

Create, get and read Point Cloud data.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Point Cloud ====================================================================================================
         // Point cloud contains the coordinate and color information from the 3D Capture Frame.
         DaoAI::PointCloud new_pcl;
         // Create new point cloud.
         new_pcl = DaoAI::PointCloud(); // Empty point cloud.
         new_pcl = DaoAI::PointCloud(100, 100); // Specify dimensions of created point cloud.
         new_pcl = DaoAI::PointCloud(pcl); // Copy point cloud.
         // Clone a point cloud.
         new_pcl = pcl.clone();
         // Get point cloud structure information.
         int size = new_pcl.getSize();
         int height = new_pcl.getHeight(); // Number of rows.
         int width = new_pcl.getWidth(); // Number of columns.
         if (!new_pcl.isEmpty()) { std::cout << "Point cloud contains capture data!" << std::endl; }
         // Get point cloud data information.
         std::vector<float> x_values = new_pcl.getVecX(); // 2D vector of all the x-coordinates in the point cloud.
         std::vector<float> y_values = new_pcl.getVecX(); // 2D vector of all the y-coordinates in the point cloud.
         std::vector<float> z_values = new_pcl.getVecX(); // 2D vector of all the z-coordinates in the point cloud.
         std::vector<float> confident_values = new_pcl.getVecConfident(); // 2D vector of point cloud confidence values.
         std::vector<uint32_t> rgba_values = new_pcl.getVecRgba(); // 2D vector of all the RGBA values in the point cloud. 0xAARRGGBB format.
         std::vector<uint8_t> r_values = new_pcl.getVecR(); // 2D vector of all the r-values in the point cloud.
         std::vector<uint8_t> g_values = new_pcl.getVecG(); // 2D vector of all the g-values in the point cloud.
         std::vector<uint8_t> b_values = new_pcl.getVecB(); // 2D vector of all the b-values in the point cloud.
         std::vector<uint8_t> a_values = new_pcl.getVecA(); // 2D vector of all the a-values in the point cloud.
         // Get individual point from point cloud. 
         DaoAI::Point pt;
         int idx = rand() % size;
         pt = new_pcl(idx); // Get any point using a 1D index between [0, size).
         int row = rand() % height; int col = rand() % width;
         pt = new_pcl(row, col); // Get any point using a 2D index pair (row, column).
         // Get pointer to first point in the point cloud.
         DaoAI::Point* first_pt = new_pcl.getDataPtr();

   .. group-tab:: C#

      .. code-block:: c#

         // Point Cloud ====================================================================================================
         // Point cloud contains the coordinate and color information from the 3D Capture Frame.
         PointCloud new_pcl;
         // Create new point cloud.
         new_pcl = new PointCloud(); // Empty point cloud.
         new_pcl = new PointCloud(100, 100); // Specify dimensions of created point cloud.

         // Clone a point cloud.
         new_pcl = pcl.clone();

         // Get point cloud structure information.
         int size = (int) new_pcl.getSize();
         int height = (int) new_pcl.getHeight(); // Number of rows.
         int width = (int) new_pcl.getWidth(); // Number of columns.
         if (!new_pcl.isEmpty()) { Console.WriteLine("Point cloud contains capture data!"); }
         // Get point cloud data information.
         List<float> x_values = new_pcl.getVecX(); // 2D vector of all the x-coordinates in the point cloud.
         List<float> y_values = new_pcl.getVecX(); // 2D vector of all the y-coordinates in the point cloud.
         List<float> z_values = new_pcl.getVecX(); // 2D vector of all the z-coordinates in the point cloud.
         List<float> confident_values = new_pcl.getVecConfident(); // 2D vector of point cloud confidence values.
         List<uint> rgba_values = new_pcl.getVecRgba(); // 2D vector of all the RGBA values in the point cloud. 0xAARRGGBB format.
         List<byte> r_values = new_pcl.getVecR(); // 2D vector of all the r-values in the point cloud.
         List<byte> g_values = new_pcl.getVecG(); // 2D vector of all the g-values in the point cloud.
         List<byte> b_values = new_pcl.getVecB(); // 2D vector of all the b-values in the point cloud.
         List<byte> a_values = new_pcl.getVecA(); // 2D vector of all the a-values in the point cloud.
                                                            // Get individual point from point cloud. 
         Random rnd = new Random();
         int idx = rnd.Next(0, size);

         Point pt;
         pt = new_pcl.getPoint((uint) idx); // Get any point using a 1D index between [0, size).
         int row = rnd.Next(0, height); int col = rnd.Next(0, width);
         pt = new_pcl.getPoint((uint) row, (uint) col); // Get any point using a 2D index pair (row, column).

   .. group-tab:: Python

      .. code-block:: python

Point
------------------

Get and read Point data.

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Point ==========================================================================================================
         // Point contains the coordinate and color information of an individual point.
         // Get point data.
         float x = pt.getX();
         float y = pt.getY();
         float z = pt.getZ();
         float confident = pt.getConfident();
         uint8_t r = pt.getR();
         uint8_t g = pt.getG();
         uint8_t b = pt.getB();
         uint8_t a = pt.getA();
         uint32_t rgba = pt.getRgba(); // 0xAARRGGBB format (ARGB)
         // Set point data.
         DaoAI::Point new_point;
         new_point.setX(1);
         new_point.setY(2);
         new_point.setZ(3);
         new_point.setConfident(0.4);
         new_point.setRgba(0x00FF0000); // Set to red.
         new_point.setRgb(0x00, 0xFF, 0x00); // Set to green.
         new_point.setRgba(0x00, 0x00, 0xFF, 0x00); // Set to blue.

   .. group-tab:: C#

      .. code-block:: c#

         // Point ==========================================================================================================
         // Point contains the coordinate and color information of an individual point.
         // Get point data.
         float x = pt.getX();
         float y = pt.getY();
         float z = pt.getZ();
         float confident = pt.getConfident();
         byte r = pt.getR();
         byte g = pt.getG();
         byte b = pt.getB();
         byte a = pt.getA();
         uint rgba = pt.getRgba(); // 0xAARRGGBB format (ARGB)
                                       // Set point data.
         Point new_point = new Point();
         new_point.setX(1);
         new_point.setY(2);
         new_point.setZ(3);
         new_point.setConfident(0.4f);
         new_point.setRgba(0x00FF0000); // Set to red.
         new_point.setRgb(0x00, 0xFF, 0x00); // Set to green.
         new_point.setRgba(0x00, 0x00, 0xFF, 0x00); // Set to blue.

   .. group-tab:: Python

      .. code-block:: python

Clean Up
-----------

.. tabs::

   .. group-tab:: C++

      .. code-block:: C++

         // Clean Up =======================================================================================================
         ret = cam->disConnect();
         if (hasError(ret)) { return -1; } // Check for errors
         delete cam;

         ret = app->stopLogging();
         if (hasError(ret)) { return -1; } // Check for errors

         std::cout << "End of sample program!" << std::endl;
         return 1;

   .. group-tab:: C#

      .. code-block:: c#

         // Clean Up =======================================================================================================
         err = cam.disConnect();
         if (HasError(err)) { return; } // Check for errors

         err = app.stopLogging();
         if (HasError(err)) { return; } // Check for errors

         Console.WriteLine("End of sample program!");
         
         System.Threading.Thread.Sleep(20000);

   .. group-tab:: Python

      .. code-block:: python