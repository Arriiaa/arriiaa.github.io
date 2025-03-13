---
layout: page
title: 隐秘矿洞
description: ARPG 项目关卡白盒
img: assets/img/ARPG_Blockout.jpg
importance: 1
category: Individual
related_publications: false
---

本关卡的主要玩法是动作冒险，包含基础战斗、跑跳、探索等核心机制。整体游玩时间预计为15-20分钟，涵盖跑图、战斗、探索以及Boss战等环节。

该关卡的定位是前期连接前两个区域的辅助路线，类似于《艾尔登法环》中史东薇尔城的主干道和断崖路线的关系，提供一条与主线并行的探索路径。

故事设定在中世纪背景下，玩家在前往第二个区域的途中，由于主干道被重兵把守，无法直接通过，只能选择这条较为隐蔽的路线，寻找突破口，最终抵达目标区域。

<!-- 添加视频链接 -->
<strong style="font-size: 24px;">视频演示</strong>
<p>点击下面的链接查看视频演示：</p>
<a href="https://www.bilibili.com/video/BV1tw9iYdEor/" target="_blank" class="btn btn-primary">点击观看视频</a>

<strong style="font-size: 24px;">周期小计</strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/周期小记.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<strong style="font-size: 24px;">项目文件夹备忘 </strong>

<strong>工程文件 </strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/工程文件.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Assets文件.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Assets 角色相关内容（包括玩家角色、npc和敌方的蓝图、static mesh、动画等）

BlockoutSource 关卡内其他无交互功能物体

Bluprints 关卡内所有交互物体

Characters 作为角色相关内容的后备资源（未用到的动画）

Level 关卡内资源的Material、Texture以及自制关卡物体

<strong style="font-size: 24px;">白盒制作流程记录</strong>

<strong style="background-color: yellow;">由于我之前没有做过这类偏大体量的关卡白盒，因此这次是第一次按照工业流程来制作。主要是以练习为主，所以可能会存在很多不足之处和设计上的问题。在制作过程中，我并没有非常严格地从头到尾按步骤进行，而是处于一个串联和输出的阶段，反复进行调整和修改迭代。</strong>

<strong style="font-size: 20px;">1. 构思阶段</strong>

<strong style="font-size: 18px;">确定关卡目标和关卡定位</strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/构思阶段.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

1. 所有的关卡都是玩家和设计师交流的媒介，那么必不可少的就是设计师希望玩家通过这个关卡get到什么？

2. 需要通过这个关卡了解到什么信息？通关后玩家又会去往哪里？是否在关卡内学习到新的技能？

3. 在我的关卡中我首先确认了这个关卡的定位，是在整体游戏主线中的哪个时期，前中后？如果实在游戏前期，那么作为游戏的目标是？作为练习作品的目标是？

<strong style="font-size: 20px;">2. 串联阶段</strong>

<strong style="font-size: 18px;">①气泡图+草稿</strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/气泡+草稿.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

1. 简单思考下整体的结构，通过气泡图完成

2. 整个阶段使用了很多工具，纸面、ipad等等。在思考到的时候就简单记录下。这个阶段整体不太规范，想到啥就画，以至于后期想找到记录都不知道被我放在了哪里。下次制作争取尽量在一个设备的一个文件下 T T

<strong style="font-size: 18px;">②关卡流程</strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Cave Flow.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/关卡流程.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

1. 绘制流程图，想象下空间关系，全部联通下

2. 写一下文字版本的流程描述，叙述一下看看是否ok

3. 在这个阶段还是改了很多，还是由于一开始的构思阶段思考得不够完整

4. 随着白盒制作中修改了部分内容，有些点还是只有搭建的时候才会发现哪些会更好一些

<strong style="font-size: 20px;">3. 输出阶段</strong>

<strong style="font-size: 18px;">①关卡平面图</strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/All.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

1. 整体规划关卡的具体尺寸和空间结构，做到基本统一

2. 第一次使用CAD，以后多用，多练！

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Area 1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Area 2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Area 3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Area 4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Area 5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Area 6.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Area 7.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Area 8.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

1. 尽量把每个区域的每个点位都确定下，方便后续的白盒制作

<strong style="font-size: 18px;">②关卡白盒</strong>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/玩家交互.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/玩家爬梯.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    角色蓝图示例：基本交互以及爬梯系统
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/关卡示例1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/关卡示例2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    关卡区域示例：在关卡搭建中我通常会开启lit模式，消除其他元素的影响，在最后调试时，会调回ulit模式
</div>

1. 完成角色基础运动设置，直接使用ue自带的动作，包括跑跳；再通过蓝图增加蹲下前进等其他运动

2. 完成标准件设计，包括门、升降梯等等

3. 根据平面图将整体搭建一下，先搭建地基，基本完成后，完成墙壁等搭建

4. 各个区域进行细化，在细化过程中修改了部分先前的设计

5. 完成交互物体和敌人物体的功能蓝图，并进行调试

6. 将灯光、敌人和可拾取道具进行布置

7. 从头到尾串联下，全部跑通，记录问题并进行修改 

