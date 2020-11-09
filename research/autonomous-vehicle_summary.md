---
layout: page-wide
title: Autonomous Driving Group
permalink: /research/autonomous-vehicle.html
---

### Contents:

* [Introduction](#id1)
* [Facilities and Datasets](#id2)
* [Activities](#id3)
* [Research Topics](#id4)
* [Joining Our Group](#join)
* [Members and Contact](#id5)



## <a name="id1"></a>Introduction

The core focus of our research is to understand the interactive human (driving) behavior and the scene with proper representations, and to predict and emulate the behavior to enable safe and high-quality autonomy for various mobility. In order to sufficiently support the focus, our research scope also expands to the fundamental aspects such as validation/evaluation and dataset construction ([INTERACTION](https://interaction-dataset.com/) dataset for behavior/prediction and [UrbanLoco](https://advdataset2019.wixsite.com/urbanloco) dataset for localization/mapping). We also dive into perception from different perspectives and control for various platforms, and incorporate our behavior-related research insights into these aspects. Our viewpoint is to exploit the synergies of model-based planning/control methods and state-of-the-art machine learning techniques to combine our prior and what we can learn from data. Several recent publications on prediction, decision-making, planning and control for autonomous driving by the group members have received Best Student Paper or Best Paper Finalist in flagship conferences on robotics and intelligent vehicle/transportation, such as *IEEE/RSJ IROS*, *IEEE ITSC* and *IEEE IV*.



## <a name="id2"></a>Facilities and Datasets

### Facilities

<table style="position:relative;">
<tr>
<td>
<img style="width: 100%;" src="{{ site.baseurl }}/assets/images/research/autonomous/facility_data_collection_vehicle.jpg">
</td>
<td>
<img style="width: 100%;" src="{{ site.baseurl }}/assets/images/research/autonomous/facility_simulator.jpg">
</td>
<td>
<img style="width: 100%;" src="{{ site.baseurl }}/assets/images/research/autonomous/facility_autonomous_vehicles.jpg">
</td>
</tr>  
<tr>
<td>
<b>Data-collection vehicle</b>: with a high-end navigation system, and a LiDAR calibrated and synchronized with 6 cameras.
</td>
<td>
<b>Data collection and tests in simulation</b>: Two sets of driving simulator interfaces composed with parts from real vehicles.
</td>
<td>
<b>Autonomous vehicles</b>: Our algorithms were tested on autonomous vehicles in test fields supported by our sponsors.
</td>
</tr>  
</table>

### Datasets

In addition to the hardware and software infrastructures, data is another key asset for research spanning from perception and localization to prediction and planning. We published part of our internal datasets on driving behavior and localization in collaboration with our partners in Europe and Asia to facilitate the research community and accelerate industrial implementations. Please directly request the data via the websites for research purposes, or contact us if you are interested in commercial use.

#### INTERACTION Dataset: highly interactive driving behavior with semantic map

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Densely interactive beahvior and critical situations in complex scenarios: negotiations, inexplicit right-of-way, irrational behavior, near-collision situations, violation of traffic rules.
- Highly accurate trajectories and complete information of surroundings.
- HD maps with full semantics required by prediction and planning algorithms.
- International locations (US, Germany, China) with diversified scenarios (roundabouts, signalized/unsignalized intersections, highway/urban merging and lane change).
- Dataset *[website](https://interaction-dataset.com/)*, and papers (*[arxiv](https://arxiv.org/abs/1910.03088)*, *[IROS19](https://ieeexplore.ieee.org/abstract/document/8967724)*).
- Prediction challenge [*website*](http://challenge.interaction-dataset.com/prediction-challenge/intro)
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/6n6FkYwL08g" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>


#### UrbanLoco Dataset: localization and mapping in dense urban scenes

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Dataset *[website](https://advdataset2019.wixsite.com/urbanloco)*, dataset paper (*[ICRA20](https://arxiv.org/abs/1912.09513)*), [*blog*](https://medium.com/@ourxxbluesky/urbanloco-a-new-challenge-for-urban-mapping-and-localization-200742ea7629).
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/3axr7ICggRw" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>



## <a name="id3"></a>Activities

#### [INTERPRET: INTERACTION-Dataset-based PREdicTion Challenge](http://challenge.interaction-dataset.com)

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
In the field of autonomous driving, it is a consensus in both academia and industry that behavior prediction (e.g., trajectories, actions, intentions) is one of the most challenging problems blocking the realization of full autonomy. Unfortunately, there are yet no benchmark to fairly compare the performance of different prediction models/algorithms, particularly when the influence of prediction performance in a closed-loop format (integrated with different planners) is considered. To expedite research and inspire discussions on the evaluation of prediction models/algorithms, we present the [INTERACTION-dataset](https://interaction-dataset.com/)-based PREdicTion [(INTERPRET) Challenge](http://challenge.interaction-dataset.com). This is a step towards the construction of effective and valuable predictors for the development of autonomous driving.
</div>
</td>
<td>
<img style="width: 100%;" src="{{ site.baseurl }}/assets/images/research/autonomous/INTERPRET.png">
</td>
</tr>
</table>

#### Workshops & competitions in flagship conferences

##### Machine learning community

- **[NeurIPS 2020](https://neurips.cc/) Competition** (December 2020) We will organize a behavior prediction challenge in highly interactive driving scenarios, i.e., the  [INTERPRET Challenge](http://challenge.interaction-dataset.com/prediction-challenge/intro), as a regular competition at NeurIPS 2020! The [INTERACTION Dataset](https://interaction-dataset.com/) will be used in the challenge. Details will be announced soon.
- **[CVPR 2020](http://cvpr2020.thecvf.com) Workshop** (June 2020) The results of the first round [INTERPRET Challenge](http://challenge.interaction-dataset.com/prediction-challenge/intro) will also be presented in CVPR 2020 Workshop organized by Waymo: [Scalability in Autonomous Driving](https://sites.google.com/view/cvpr20-scalability).
- **[ICML 2020](https://icml.cc/) Workshop** (July 2020) Wei Zhan was invited as a speaker to present the [INTERACTION Dataset](https://interaction-dataset.com/) and [INTERPRET Challenge](http://challenge.interaction-dataset.com/prediction-challenge/intro) in the ICML 2020 Workshop on [AI for Autonomous Driving](https://sites.google.com/view/aiad2020).

##### Robotics community

- **[RSS 2020](https://roboticsconference.org) Workshop** (June 2020): Interaction and Decision-Making in Autonomous-Driving, organized by Rowan McAllister, Liting Sun, Igor Gilitschenski, and Daniela Rus.
- **[IROS 2019](https://www.iros2019.org) Workshop** (Macao, November 2019): [Benchmark and Dataset for Probabilistic Prediction of Interactive Human Behavior](https://sites.google.com/berkeley.edu/iros2019-ws-dataset-benmark/home), organized by Wei Zhan, Liting Sun and Masayoshi Tomizuka.

##### Intelligent transportation/vehicle community

- **[IV 2020](https://2020.ieee-iv.org) Joint Workshops** (Las Vegas, postponed to October 2020): [From Benchmarking Behavior Prediction to Socially Compatible Behavior Generation in Autonomous Driving](https://sites.google.com/berkeley.edu/iv20-interaction/home), organized by Wei Zhan, Liting Sun, Maximilian Naumann, Jiachen Li and Masayoshi Tomizuka.
- **[ITSC 2020](https://www.ieee-itsc2020.org) Workshop** (September 2020): [Probabilistic Prediction and Comprehensible Motion Planning for Automated Vehicles – Approaches and Benchmarking](https://ieee-itsc2020.org/wp-content/uploads/2020/03/Probabilistic-Prediction-and-Comprehensible-Motion-Planning-for-Automated-Vehicles-–-Approaches-and-Benchmarking.pdf), organized by Maximilian Naumann, Martin Lauer, Liting Sun, Wei Zhan, Masayoshi Tomizuka, Arnaud de La Fortelle, Christoph Stiller.
- **[IV 2019](https://iv2019.org) Workshop** (Paris, June 2019): [Prediction and Decision Making for Socially Interactive Autonomous Driving](https://sites.google.com/berkeley.edu/iv19-interaction), organized by Wei Zhan, Jiachen Li, Liting Sun, Yeping Hu and Masayoshi Tomizuka.



## <a name="id4"></a>Research Topics

### 1. Prediction, representation and emulation of interactive behavior 

**Application**: prediction, decision-making and behavior planning for autonomous vehicles, comprehension and modeling of interactive, social behavior, (scene/motion) representation learning and construction, imitation and generation of human (driving) behavior.

#### 1.1 Inverse reinforcement learning (IRL, also inverse optimal control) and game theory for human-like behavior generation

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Modeling, learning and imitating social behaviors from humans, from planning behavior to perception behavior: *[IROS18](https://arxiv.org/abs/1808.02633)*, *[IV19](https://arxiv.org/abs/1905.00988)*, [*TechXplore*](https://techxplore.com/news/2019-05-social-perception-scheme-behavior-autonomous.html)
- A hierarchical IRL algorithm to capture the hierarchical structure of human decision-making process: *[ITSC18](https://arxiv.org/abs/1809.02926)*
- Exploring and expressing the irrationality of human behaviors via a risk-sensitivity IRL algorithm: *[ITSC19](https://arxiv.org/abs/1907.08707)*
- A better prediction model by online combination of deep learning models with IRL models: *[ITSC19](https://arxiv.org/abs/1907.10170)*
- Learning generic and suitable cost functions for driving: *[ICRA20](https://ras.papercept.net/proceedings/ICRA20/0320.pdf)*.
- Efficient sampling-based Maximum Entropy IRL: *[RAL](https://arxiv.org/abs/2006.13704)*.
- Modeling the multi-agent interaction based on Game Theory: papers to appear.
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/DQNjaNGoX2g" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>



#### 1.2 Decision and planning under uncertainty with interaction

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Integrated decision/planning with interaction and negotiation: *[ITSC16](https://ieeexplore.ieee.org/abstract/document/7795595/)*, *[ACC16](https://www.researchgate.net/profile/Changliu_Liu/publication/305107862_Enabling_Safe_Freeway_Driving_for_Automated_Vehicles/links/5a7137810f7e9ba2e1cb1d90/Enabling-Safe-Freeway-Driving-for-Automated-Vehicles.pdf)*, [*SAE17*](https://www.sae.org/publications/technical-papers/content/2017-01-1406/), *[IV18-1](http://oss-cn-qingdao.aliyuncs.com/ccm-test/47d772fc485632f5b0e53977ffe59a0c.pdf)*, *[IV18-2](https://ieeexplore.ieee.org/abstract/document/8500702/)*, *[ACC19](https://arxiv.org/abs/1809.09735)*.
- Safety and feasibility in imitation learning: *[IECON17](https://ieeexplore.ieee.org/abstract/document/8216790/)*, *[DSCC18](https://arxiv.org/abs/1707.02515)*, *[IROS19](https://arxiv.org/abs/1903.00640)*.
- Reinforcement learning: *[IROS19](https://arxiv.org/abs/1904.06025)* *(**Best Paper Finalist**)*, *[IV18](https://www.researchgate.net/profile/Jianyu_Chen22/publication/328454880_Deep_Hierarchical_Reinforcement_Learning_for_Autonomous_Driving_with_Distinct_Behaviors/links/5be340a0299bf1124fc2dc59/Deep-Hierarchical-Reinforcement-Learning-for-Autonomous-Driving-with-Distinct-Behaviors.pdf)*, [*IV19*](https://ieeexplore.ieee.org/abstract/document/8813861), *[ITSC19](https://arxiv.org/abs/1904.09503)*, *[arxiv](https://arxiv.org/abs/2001.08726)*.
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/eFEwedfJN94" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>

#### 1.3 Interactive prediction with dynamics, semantic representation and reasoning

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Semantic representation and prediction: *[IV18](https://arxiv.org/abs/1804.03629)* *(**Best Student Paper**)*, [*arxiv*](https://arxiv.org/abs/2004.03053).
- Probabilistic graphical model (*[ITSC18](https://arxiv.org/abs/1809.02927)*, *[ITSC19](https://ieeexplore.ieee.org/abstract/document/8917031)*) and deep generative models (*[IV19](https://arxiv.org/abs/1905.00587)*, *[ICRA19-1](https://arxiv.org/abs/1904.02390)*, *[ICRA19-2](https://ieeexplore.ieee.org/abstract/document/8794130)*, *[IROS19](https://arxiv.org/abs/1905.01631)*) incorporating vehicle kinematics (*[IV19](https://ieeexplore.ieee.org/abstract/document/8813783)*)
- Conditional variational auto-encoder (*[ITSC18](https://arxiv.org/abs/1810.12506)*) and its interpretability (*[IV19](https://arxiv.org/abs/1903.09381)*, [*TechXplore*](https://techxplore.com/news/2019-04-sequential-motions-interacting-agents.html)), as well as the combination with IRL (*[ITSC19](https://arxiv.org/abs/1907.10170)*).
- Graph reasoning (graph neural network): [*arxiv-1*](https://arxiv.org/abs/2004.03053), *[arxiv-2](https://arxiv.org/pdf/2002.06241.pdf)*,  [*arxiv-3*](https://arxiv.org/abs/2003.13924).
- Heterogeneous road users (pedestrian-vehicle interaction): *[ITSC19](https://ieeexplore.ieee.org/abstract/document/8917031)*, [*arxiv*](https://arxiv.org/abs/2003.13924).
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/ku_UWa86nYQ" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>



#### 1.4 Scene/motion representation learning and construction

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Comprehensive scene and motion representation construction: *[IV17](https://ieeexplore.ieee.org/abstract/document/7995789/)*, [*arxiv*](https://arxiv.org/abs/2004.03053).
- Representation learning: [*arxiv*](http://arxiv.org/abs/2003.12464), and papers to appear.
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/HZJVxYPBUbk" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>



### 2. Perception, mapping and localization for humans, vehicles and cities

**Application**: detection/tracking/mapping/localization with onboard sensors, traffic cameras/drones, connectivity, as well as occlusion inference via behavior of others.

#### 2.1 3D detection and segmentation with LiDARs and cameras
<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- 3D point cloud segmentation: *[ECCV20](https://arxiv.org/abs/2004.01803)*.
- 3D detection with LiDAR-camera fusion: *[IV18](https://arxiv.org/abs/1711.06703)*, *[IV19](https://arxiv.org/abs/1811.03818)*, [*arxiv*](https://arxiv.org/abs/1910.04853).
- Uncertainty-aware 3D detection: *[ITSC20](https://arxiv.org/abs/2006.12015)*
- Detection from bird's eye view: *[arxiv](https://arxiv.org/abs/1912.09632)*.
- Visual transformers: *[arxiv](https://arxiv.org/abs/2006.03677)*
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/7q-GKPVHosU" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>


#### 2.2 Mapping, localization and 3D reconstruction

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- 3D point cloud reconstruction and registration: *[IROS19](https://ieeexplore.ieee.org/abstract/document/8967589)*, [*IFAC20*](https://arxiv.org/abs/1912.05016).
- Automatic HD map generation with semantics.
- City-scale mapping and localization.
- Object removal for better mapping and localization.
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/CDp6mocT6C4" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>

#### 2.3 Occluded object detection and tracking via social/cooperative perception

<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Occluded object tracking by inferring from motions of its surrounding objects: [*Trans-ITS*](https://arxiv.org/abs/1908.09031), *[IV18](https://arxiv.org/abs/1809.10237)*. 
- Social perception to infer existence of occluded objects from behavior of others: *[IV19](https://arxiv.org/abs/1905.00988)*, [*TechXplore*](https://techxplore.com/news/2019-05-social-perception-scheme-behavior-autonomous.html).
- Cooperative perception to achieve better detection and tracking of occluded object via connectivity.
</div>
</td>
<td>
<img style="width: 100%;" src="{{ site.baseurl }}/assets/images/research/autonomous/social-perception.png">
</td>
</tr>
</table>




### 3. Validation/test and simulation for autonomy and environments

**Application**: test and evaluation of prediction/planning/perception/localization modules by reconstructing the real world and utilizing high-quality data.

#### 3.1 Prediction benchmark and challenge
<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Fatality-aware evaluation: *[ITSC18](https://arxiv.org/abs/1809.03478)*, *[IV18](https://hal-mines-paristech.archives-ouvertes.fr/hal-01981612/document)*.
- INTERPRET Challenge: [*website*](http://challenge.interaction-dataset.com).
</div>
</td>
<td>
<img style="width: 100%;" src="{{ site.baseurl }}/assets/images/research/autonomous/fatality-metric.png">
</td>
</tr>
</table>


#### 3.2 Uncertainty estimation and evaluation for perception and localization
<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Uncertainty-aware evaluation and labeling analysis for 3D detection: *[IROS20](https://arxiv.org/abs/2003.03644)*.
- Uncertainty estimation in LiDAR-base localization: *[IET EL Letter](https://digital-library.theiet.org/content/journals/10.1049/el.2018.8075)*.
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/aA3pdscot-o" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>



#### 3.3 Testing prediction/decision/planning in simulation
<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- papers to appear
</div>
</td>
</tr>
</table>

### 4. Planning, dynamics and control for autonomous systems

**Application**: Trajectory planning, dynamics modeling and controller design for passenger/delivery/racing vehicles (with connectivity).

#### 4.1 Trajectory planning
<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Constrained iterative LQR and optimization: *[Trans-IV](https://ieeexplore.ieee.org/abstract/document/8671755)*, *[ITSC17](https://www.researchgate.net/profile/Jianyu_Chen22/publication/323789278_Constrained_iterative_LQR_for_on-road_autonomous_driving_motion_planning/links/5be33fd3a6fdcc3a8dc64b57/Constrained-iterative-LQR-for-on-road-autonomous-driving-motion-planning.pdf)*, *[ACC18](https://ieeexplore.ieee.org/abstract/document/8431104)*, *[IV17](https://www.researchgate.net/profile/Changliu_Liu/publication/318800685_Speed_profile_planning_in_dynamic_environments_via_temporal_optimization/links/599b6ec8a6fdcc500349c698/Speed-profile-planning-in-dynamic-environments-via-temporal-optimization.pdf)*.
- Sample-based and graph search: *IFAC20*, *[IV17-1](https://ieeexplore.ieee.org/abstract/document/7995789/),* *[IV17-2](http://www.cs.cmu.edu/~cliu6/files/iv17-1.pdf)*.
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/-VA_6LmLi4U" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>

#### 4.2 Policy transfer, safe learning and control
<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- Policy transfer with robust control: *[Trans-ITS](https://ieeexplore.ieee.org/document/8924943)*, *[ITSC18](https://arxiv.org/abs/1812.03216)* *(**Best Student Paper**)*.
- Safe learning and control.
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/fFKJu2jeHm4" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>


#### 4.3 Vehicle dynamics, state estimation and control
<table style="position:relative;">
<tr>
<td>
<div markdown="1">
- System identification: *IV20*. 
- Adaptive and robust control: papers to appear.
- Estimation and control with connectivity: *[Sensors](https://www.mdpi.com/1424-8220/19/13/2983)*.
- Selective vehicle dynamics and control research in MSC Lab (in collaboration with California PATH) over a decade ago: 
  - Heavy-duty vehicle (truck with trailer) control: [*PATH-report*](https://www.researchgate.net/publication/46439115_Lateral_Control_of_Heavy_Duty_Vehicles_for_Automated_Highway_System_Experimental_Study_on_a_Tractor_Semi-trailer).
  - Automated highway systems: [*Trans-VT*](https://ieeexplore.ieee.org/abstract/document/69979), [*CSM*](https://ieeexplore.ieee.org/abstract/document/334412).
  - Adaptive control: [*Trans-IE*](https://ieeexplore.ieee.org/document/1174058), [*ACC90*](https://ieeexplore.ieee.org/document/4791050).
  - Preview control: [*JDSMC*](https://asmedigitalcollection.asme.org/dynamicsystems/article/115/4/679/417103/Preview-Control-for-Vehicle-Lateral-Guidance-in), [*ACC90*](https://ieeexplore.ieee.org/document/4790840).
  - Adaptive cruise control: [*IJAT*](https://link.springer.com/article/10.1007/s12239-012-0007-6), [*IFAC*](https://www.sciencedirect.com/science/article/pii/S1474667016318390).
  - Combined lateral and longitudinal control: [*SAE-IJPC*](https://saemobilus.sae.org/content/2015-01-0321), [*JDSMC*](https://asmedigitalcollection.asme.org/dynamicsystems/article/123/3/535/460331/Coordinated-Longitudinal-and-Lateral-Motion).
  - Fault tolerant control: [*Trans-Mech*](https://ieeexplore.ieee.org/abstract/document/1395861), [*IFAC*](https://www.sciencedirect.com/science/article/pii/S1474667017339198).
</div>
</td>
<td>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.3%;">
<iframe style = "position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
  src="https://www.youtube.com/embed/RvjI4cpZAAE" frameborder="0" controls="controls" preload="auto" allowfullscreen></iframe>
</div>
</td>
</tr>
</table>


## <a name="join"></a>Joining Our Group

Please send an email to Professor Masayoshi Tomizuka (tomizuka@berkeley.edu) and Dr. Wei Zhan (wzhan@berkeley.edu) if you are interested in our [Research Topics](#id4) and joining our group. 

- We are welcoming Berkeley students to directly work with us, or students out of Berkeley to visit us. We also accept virtual visit to work with us remotely for those with difficulties to conduct a physical visit. Please note that an experience will not be recognized without a formal interview and approval by the faculty and postdocs.
- For prospective Ph.D. students, please apply to the Mechanical Engineering Department of UC Berkeley by December 1st and send an email to address your strength and interest.

Please make sure that the following aspects are well covered in your application email. 

- Indicate in the email on your 1) primary goal of the research experience and particular interests; 2) start and end dates for working with us; 3) uniqueness and strength on research experiences/publications and/or skills and knowledge; 4) long-term/career goals.
- Attach a CV including your 1) home university, major, GPA and ranking; 2) research/working experiences; 3) publications/patents (if any); 4) skill set on coding/software/hardware and corresponding proficiency; 5) knowledge set on methods/algorithms.
- Attach a brief introduction (within 5 pages of slides) showing the core methods/algorithms and main results and demos of your previous research or working experiences. Links to cloud storage are welcome for large files.
- Attach all publications (including submitted paper) or well-formatted project final reports if any. Links to cloud storage or online publications are welcome.



## <a name="id5"></a>Members and Contact

The group lead is Dr. [Wei Zhan](https://scholar.google.com/citations?user=xVN3UxYAAAAJ&hl=en#). The research activities are coordinated by 2 Postdocs (Dr. [Wei Zhan](https://scholar.google.com/citations?user=xVN3UxYAAAAJ&hl=en#) and Dr. [Liting Sun](https://scholar.google.com/citations?user=BitIg-YAAAAJ&hl=en)) and conducted by 14 Ph.D. students (following headshots) with over 10 visiting researchers. 

<img width = "100%" src="{{ site.baseurl }}/assets/images/research/autonomous/headshots.png">

Please contact Dr. Wei Zhan (wzhan@berkeley.edu) and Professor Masayoshi Tomizuka (tomizuka@berkeley.edu) for more information if you are interested in the topics above by

- working with us (join/visit the group or collaborate) from academia, or
- research collaboration from industry.