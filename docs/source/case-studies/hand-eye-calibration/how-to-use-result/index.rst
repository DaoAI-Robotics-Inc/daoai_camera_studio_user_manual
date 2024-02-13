如何使用手眼标定的结果
===============================================
我们已经分析了伴随DaoAI相机和机器视觉软件的机器人拾取物体的要求。这导致了手眼校准问题的描述。如果您不确定如何利用手眼校准的结果，那么您来对地方了。在这里，我们将描述如何将物体的坐标从DaoAI相机坐标系转换为机器人基坐标系。

假设您在DaoAI点云上运行机器视觉软件。它检测到感兴趣的对象，比如这个DaoAI宝石，并估算其位置。描述拾取点的x、y、z值是相对于DaoAI相机的坐标系给出的。

.. Tip::
    在运行应用程序之前，建议使用与手眼校准相同的捕获周期来预热相机。为了进一步减小温度相关性能因素的影响，可以启用热稳定功能。这些步骤有助于确保在应用程序运行期间相机的性能保持稳定。

.. image:: images/1.png
    :scale: 80%

在某些情况下，您的算法还会输出物体的方向，例如横滚、俯仰和偏航角。这些参数也是相对于DaoAI相机的坐标系给出的。这些参数描述了物体的朝向，可以用于指导机器人的操作，以便正确地抓取物体。

.. image:: images/2.png
    :scale: 80%

物体的姿势（位置和方向）可以用齐次变换矩阵来描述。如果您对（机器人）姿势和坐标系不熟悉，请继续阅读以下有关将单个点或整个点云从相机坐标转换为机器人基坐标的数学理论。这将有助于您理解如何将物体的坐标从相机坐标系转换为机器人基坐标系，以便机器人能够准确地执行拾取任务

在下面，您将看到将单个点或整个点云从相机坐标转换为机器人基坐标的数学理论。在实践中，最简单的方法是使用DaoAI SDK支持的转换。这会在数据在CPU上复制之前对数据进行转换，因此非常快速。这有助于将从相机获得的物体位置和方向数据转换为机器人基坐标系中的数据，以便机器人能够准确地执行拾取任务。如果您需要详细的数学理论和算法来执行此转换，请提供相关信息，我将尽力为您提供帮助。

.. tabs::

   .. tab:: Eye-to-hand

      .. image:: images/tohand4.png
          :scale: 50%

      如果您正在处理一个“eye-to-hand”的系统，下面是如何将单个3D点从DaoAI相机转换到机器人基坐标系的方法：

      |1|

      |2|


      要将整个DaoAI点云从相机坐标系转换为机器人基坐标系，请将上述方程应用于点云中的每个点。这将允许您将整个点云中的所有点的坐标从相机坐标系转换为机器人基坐标系，以便机器人可以在正确的坐标系中操作和执行拾取任务。

      另一方面，要将物体相对于DaoAI相机的姿势转换，请应用以下方程：

      |3|

      |4|

      我们假设您的姿势是用齐次变换矩阵来描述的。如果您使用的是这种姿势表示方法，请继续使用相应的转换方程将其从相机坐标系转换到机器人基坐标系或反之。这将有助于确保您的机器人在执行任务时能够准确地理解和操作物体的位置和方向。
      
      得到的姿势是机器人工具中心点（TCP）应该达到的姿势，用于拾取物体。机器人的工具中心点（TCP）与机器人法兰之间的偏移应在机器人侧进行考虑和处理，以确保在执行拾取任务时位置和方向的准确性。这个偏移通常会在机器人的控制系统中配置和管理。

   


   .. tab:: Eye-in-hand


      .. image:: images/inhand1.png
          :scale: 50%

      对于“eye-in-hand”的系统，处理的方法类似。不同之处在于，机器人当前的姿势必须包含在方程中。与其他姿势一样，我们假设机器人的姿势是用齐次变换矩阵来表示的。这个额外的机器人姿势信息将帮助确保在处理从相机坐标系到机器人基坐标系的转换时，考虑到了机器人当前的位置和方向。

      以下方程描述了如何将单个3D点从DaoAI相机转换到机器人基坐标系：

      |5|

      |6|

      要将整个DaoAI点云从相机坐标系转换为机器人基坐标系，请将上述方程应用于点云中的每个点。这将允许您将整个点云中的所有点的坐标从相机坐标系转换为机器人基坐标系，以便机器人可以在正确的坐标系中操作和执行任务

      要将物体相对于DaoAI相机的姿势转换，请使用以下方程：

      |7|

      |8|

      得到的姿势是机器人工具中心点（TCP）应该达到的姿势，用于拾取物体。机器人工具中心点（TCP）与机器人法兰之间的偏移应在机器人侧进行考虑和处理，以确保在执行拾取任务时位置和方向的准确性。这个偏移通常会在机器人的控制系统中配置和管理。



.. |1| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <msup>
        <mi><b>p</b></mi>
        <mrow data-mjx-texclass="ORD">
        <mi><b>R</b></mi>
        <mi><b>O</b></mi>
        <mi><b>B</b></mi>
        </mrow>
    </msup>
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
    <msup>
        <mi><b>p</b></mi>
        <mrow data-mjx-texclass="ORD">
        <mi><b>C</b></mi>
        <mi><b>A</b></mi>
        <mi><b>M</b></mi>
        </mrow>
    </msup>
    </math>

.. |2| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <mtable displaystyle="true" columnalign="right" columnspacing="0em" rowspacing="3pt">
        <mtr>
        <mtd>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>x</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>y</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>z</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>=</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>t</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>&#x22C5;</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>x</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>y</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>z</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
        </mtd>
        </mtr>
    </mtable>
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
    <mtable displaystyle="true" columnalign="right" columnspacing="0em" rowspacing="3pt">
        <mtr>
        <mtd>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>o</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>t</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi>o</mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>=</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>t</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>&#x22C5;</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>o</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>t</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>o</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
        </mtd>
        </mtr>
    </mtable>
    </math>

.. |5| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <msup>
        <mi><b>p</b></mi>
        <mrow data-mjx-texclass="ORD">
        <mi><b>R</b></mi>
        <mi><b>O</b></mi>
        <mi><b>B</b></mi>
        </mrow>
    </msup>
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
    <msup>
        <mi><b>p</b></mi>
        <mrow data-mjx-texclass="ORD">
        <mi><b>C</b></mi>
        <mi><b>A</b></mi>
        <mi><b>M</b></mi>
        </mrow>
    </msup>
    </math>


.. |6| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <mtable displaystyle="true" columnalign="right" columnspacing="0em" rowspacing="3pt">
        <mtr>
        <mtd>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>x</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>y</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>z</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>=</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>e</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>t</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>e</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>&#x22C5;</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>e</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>t</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>e</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>&#x22C5;</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>x</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>y</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <msup>
                    <mi><b>z</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
        </mtd>
        </mtr>
    </mtable>
    </math>


.. |7| raw:: html

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


.. |8| raw:: html

    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <mtable displaystyle="true" columnalign="right" columnspacing="0em" rowspacing="3pt">
        <mtr>
        <mtd>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>o</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>t</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>o</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>=</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>e</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic">t</mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>e</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>r</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>&#x22C5;</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>e</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>t</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>e</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
            <mo>&#x22C5;</mo>
            <mrow data-mjx-texclass="INNER">
            <mo data-mjx-texclass="OPEN">[</mo>
            <mtable columnalign="center" columnspacing="1em" rowspacing="4pt">
                <mtr>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic"><b>R</b></mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>o</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                <mtd>
                    <msubsup>
                    <mi mathvariant="bold-italic">t</mi>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>o</b></mi>
                    </mrow>
                    <mrow data-mjx-texclass="ORD">
                        <mi><b>c</b></mi>
                    </mrow>
                    </msubsup>
                </mtd>
                </mtr>
                <mtr>
                <mtd>
                    <mn><b>0</b></mn>
                </mtd>
                <mtd>
                    <mn><b>1</b></mn>
                </mtd>
                </mtr>
            </mtable>
            <mo data-mjx-texclass="CLOSE">]</mo>
            </mrow>
        </mtd>
        </mtr>
    </mtable>
    </math>