---
layout: page
title: Safe and Efficient Robot Collaboration System
permalink: /research/serocs.html
---

### Contents:

* [Introduction](#id1)
* [Tasks](#id2)
* [Videos](#id4)
* [Publications](#id5)
* [Sponsor](#id6)
* [Joining Our Group](#join)

<!-- Title your work here -->

<!-- Add your own introduction here -->

### <a name="id1"></a>Introduction

In factory automation, humans and robots comprise the two major work forces. Traditionally, humans and robots have not physically collaborated with each other during operation, in significant part because full automation with robots was the goal.  In recent years, however, it has been recognized that there are tremendous advantages if robots are brought out of their cages and to allow them to share work space with and to collaborate with humans to take advantage of the best of two worlds – on one hand, the reliable execution of tasks by robots without wear handling objects of a wide range of sizes and weights, and on the other hand, the intelligence of humans and their five senses-based adaptability and flexibility.  For collaboration between humans and robots to be successful, it is a prerequisite to ensure the safety of the humans in such collaboration.  At the same time, it is important to ensure that robots collaborate with humans to ensure the best performance possible. The goal of this project is to establish a set of design principles of safe and efficient robot collaboration systems (SERoCS) for the next generation co-robots, which consists of robust cognition algorithms for environment monitoring, optimal task planning algorithms for safe human-robot collaboration, and safe motion planning and control algorithms for safe human-robot interactions (HRI).  The proposed SERoCS will significantly expand the skill sets of the co-robots and prevent or minimize occurrences of human-robot collision and robot-robot collision during operation.
There are three main modules in the SERoCS system.<br/>
* Task 1. Environment Monitoring with Human Motion Prediction using camera captured signals<br/>
* Task 2. Task Planning with Skill Library that enables to co-robots to deal with difficult tasks<br/>
* Task 3. Safe and Efficient Motion Planning and Control in Real Time.<br/>


We also want to evaluate the overall performance of our system and provide some guidance for module and system design principles, therefore we have:<br/>
* Task 4. Evaluation of the SERoCS by Analyses, Simulations and Experiments <br/>





<img width = "60%" src="{{ site.baseurl }}/assets/images/research/nri/SERoCS.png" title="Architecture">
<div class="image-caption">SERoCS Architecture</div>


### <a name="id2"></a>Tasks
<!-- JL Edit -->
<table style="position:relative;">
<tr></tr><tr>
<td>
<div markdown="1">
* <b>Task 1. Environment Monitoring with Human Motion Prediction using camera captured signals</b> <br>
| [Brief](javascript:showhide("vib1")) | [More](https://arxiv.org/abs/1903.02199) |

</div>
<div id="vib1" style="display:none;">
Co-robots can better assist the human worker by reasoning and predicting the worker's behavior. In this task, we develop the prediction module that captures past human movements and utilizes these human motions as well as the prior knowledge of the collaborative tasks' structure. The prediction module makes predictions on both the worker's future motion and the worker's intention.
</div>

</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/4DlgnFjfwkY" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
<!--<div class="image-caption">Zero Time Delay Input Shaping</div>-->
</td>

<!-- JL Edit -->
<tr>
<td>
<div markdown="1">
* <b>Task 2. Task Planning with Skill Library that enables to co-robots to deal with difficult tasks</b>

Subtopic 2.1. Skill library for intelligent co-robots
| [Brief](javascript:showhide("skill")) | [More](https://ieeexplore.ieee.org/abstract/document/8593668) |
<div id="skill" style="display: none;">
In task 2, we aim to expend the robot skill library. We teach the robot in many ways such as learning from human demostration and analogy learning. The goal is to teach the robot skills and allow the robot to generalize the skill to similer applications.  
</div>

Subtopic 2.2. Task planning for intelligent co-robots
| [Brief](javascript:showhide("task_plan")) |
<div id="task_plan" style="display: none;">
Coming soon.
</div>

</div>
</td>

<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/7LBxCXpZTXk" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
<!--<div class="image-caption">Zero Time Delay Input Shaping</div>-->
</td>

<!--3 JL Edit -->
<tr>
<td>
<div markdown="1">
* <b>Task 3. Safe and Efficient Motion Planning and Control in Real Time</b> <br>
| [Brief](javascript:showhide("vib3")) | [More](https://jessicaleu24.github.io/ACC2020.html) |

</div>
<div id="vib3" style="display:none;">
Co-robots works in dynamic environments, where human worker and other robots move aroung in the robot's workspace. A motion planning module that enables safe and efficient motion planning and control in real time is a crutial part in realizing the SERoCS system. We build a module that takes in information and prediction result from T1, as well as the plan and skills from T2. Given the motion objective, the motion planning module makes the robot move safely and efficiently.
</div>

</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/Ywwfg77dmB8" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
<!--<div class="image-caption">Zero Time Delay Input Shaping</div>-->
</td>

<!-- 4 JL Edit -->
<tr>
<td>
<div markdown="1">
* <b>Task 4. Evaluation of the SERoCS by Analyses, Simulations and Experiments</b> <br>
| [Brief](javascript:showhide("vib4")) | [More](https://arxiv.org/abs/2001.09550) |

</div>
<div id="vib4" style="display:none;">
In T4, we proposed several metrices to evaluate each module and the co-robot system. We also evaluate the system combining motion planning and different human motion prediction methods.
</div>

</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/RFs9fatPLko" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
<!--<div class="image-caption">Zero Time Delay Input Shaping</div>-->
</td>

<table></table>

<div markdown="1">

### <a name="id4"></a>Videos
<!-- <img width = "60%" src="{{ site.baseurl }}/assets/images/research/nri/T3.gif" title="Architecture"> -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/wfle8Ry7z54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### <a name="id5"></a>Publications
* H.-C. Lin, C. Liu, and M. Tomizuka, “Fast robot motion planning with collision avoidance and temporal optimization,” in <i>2018 15th International Conference on Control, Automation, Robotics and
Vision (ICARCV)</i>, Singapore, 2018, pp. 29–35.<br/>
* C. Liu, T. Tang, H.-C. Lin, Y. Cheng, and M. Tomizuka, “SERoCS: Safe and efficient robot collaborative systems for next generation intelligent industrial co-robots,” <i>arXiv:1809.08215</i>, 2018.<br/>
* H.-C. Lin, T. Tang, Y. Fan, and M. Tomizuka, “A framework for robot grasp transferring with nonrigid transformation,” in <i>2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</i>, Madrid, 2018, pp. 2941–2948.<br/>
* Y. Cheng, W. Zhao, C. Liu, and M. Tomizuka, “Human motion prediction using semi-adaptable neural networks,” in <i>2019 American Control Conference (ACC). IEEE</i>, 2019, pp. 4884–4890.<br/>
* J. Leu and M. Tomizuka, “Motion planning for industrial mobile robots with closed-loop stability enhanced prediction,” in <i>ASME 2019 Dynamic Systems and Control Conference</i>. American Society of Mechanical Engineers Digital Collection.<br/>
* J. Leu, R. Lim, and M. Tomizuka, “Safe and coordinated hierarchical receding horizon control for mobile manipulators,” in <i>Proc. American Control Conference (ACC 2020)</i>, accepted, Jun. 2020.<br/>
* W. Zhao, L. Sun, C. Liu, and M. Tomizuka, “Experimental evaluation of human motion prediction: Toward safe and efficient human robot collaboration,” in <i>Proc. American Control Conference (ACC 2020)</i>, accepted, Jun. 2020.<br/>
*  Y. Cheng, L. Sun, and M. Tomizuka, “Towards efficient human robot collaboration with robust plan
recognition and trajectory prediction,” in <i>IEEE Robotics and Automation Letters</i>, 2020.



<!-- If you have any sponsors, you can just list them here -->
### <a name="id6"></a>Sponsor

* [National Science Foundation](https://www.nsf.gov)


### <a name="join"></a>Join Our Group 

Please send an email to Professor Masayoshi Tomizuka (tomizuka@berkeley.edu) and Dr. Liting Sun (litingsun@berkeley.edu) if you are interested in our [Research Topics](#id2) in Human-Robot Interaction and joining our group. 

- We are welcoming Berkeley students to directly work with us, or students out of Berkeley to visit us. We also accept virtual visit to work with us remotely for those with difficulties to conduct a physical visit. Please note that an experience will not be recognized without a formal interview and approval by the faculty and postdocs.
- For prospective Ph.D. students, please apply to the Mechanical Engineering Department of UC Berkeley by December 1st and send an email to address your strengths and interests.

Please make sure that the following aspects are well covered in your application email. 

- Indicate in the email about your 1) primary goal of the research experience and particular interests; 2) start and end dates for working with us; 3) uniqueness and strength on research experiences/publications and/or skills and knowledge; 4) long-term/career goals.

- Attach a CV including your 1) home university, major, GPA and ranking; 2) research/working experiences; 3) publications/patents (if any); 4) skill set on coding/software/hardware and corresponding proficiency; 5) knowledge set on methods/algorithms.

- Attach a brief introduction (within 5 pages of slides) showing the core methods/algorithms and main results and demos of your previous research or working experiences. Links to cloud storage are welcome for large files.

- Attach all publications (including submitted paper) or well-formatted project final reports if any. Links to cloud storage or online publications are welcome.

  </div>