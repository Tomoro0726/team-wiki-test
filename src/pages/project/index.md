---
layout: '../../layouts/markdown.astro'
title: 'article01ページ'
---
# How to make
## Public page
This page contains an overview of the cultural festival, a timetable, a map, and more.
https://github.com/gladevise/remark-link-card

## My page
You can use various functions such as issuing tickets and downloading QR codes for vouchers from My page.
# Development objectives
Development objectives from the perspective of each user.
## All users
・Create an account
・Set account settings (name, class, etc.)
・Delete an account
・Reset password
・View public pages
## Student side (general)
・Issue tickets for invited guests
・Download vouchers distributed by the PTA
・Reserve arena ticket slots
※All tickets and vouchers are QR codes.
## Student side/Teaching staff (operation)
- Scanning/management of invitation tickets
- Scanning/management of gift certificates
- Management of video page URL/publicity
- Management of arena live streaming page URL/publicity
- Management of hops and text of public pages
- Creation/management of special invitation tickets
- Role assignment function as mentioned above
- Bulk management function for roles
## General visitors/Parents
-Ticket reservation function for arena
# Technology stack
## Application
Docker containers are deployed and running on a kubernetes cluster at home.
#### WEB server
All pages run on NodeJS×Express. We considered using React, but almost all students at our school use Chromebooks, and many users find browser-side rendering slow, so we use server-side rendering except for some functions on my page.
#### API server
Runs on NodeJS×Graphql. We use the standard Prisma for ORM.
#### Global IP address search (beta version)
As we will explain later, this is a server that searches for the closest CDN from a user request. This is built using Go.

## Infrastructure & Database
I bought most of the equipment on Yahoo! Auctions.

#### Home Kubernetes Cluster
I have built four physical servers at home and have built a cluster. In addition, all nodes are virtualized and run on Proxmox in preparation for maintenance of the physical chassis. This allows for regular backups of the entire VM and live migration when cleaning the physical chassis.

![](https://storage.googleapis.com/zenn-user-upload/febccff4cacc-20231230.jpg)
I also had the opportunity to present my home Kubernetes Cluster at Kubernetes Meetup Tokyo 61, where I also spoke in detail.

https://www.youtube.com/watch?v=C4u2QtGymTw&t=8127s

#### Home Network
I connect a Yamaha RTX1200 to the NURO Hikari ONU and expose it as a DMZ to expose various servers. The internal network can also be accessed from an OpenVPN server built on the Raspberry Pi. This allows for secure access even when away from home.
![](https://storage.googleapis.com/zenn-user-upload/5df2890dde0b-20231230.jpg)
#### Home storage
There is one NAS with a RAID1 configuration. VM backup data and log data are stored here. In addition, it is regularly synchronized with Google Drive, which the school has a contract with, using rclone, so it is a safe configuration even if the home burns down.
#### CDN and distributed backup VPS
This website is expected to receive a large amount of access in a short period of time, so a CDN network to distribute access to static data is distributed and built on VPSs of various cloud service providers (AWS, Sakura VPS, Xserver). The reason for building the CDN network ourselves is to conduct experiments to realize a CDN network that can instantly purge dynamic images in the future. Micro Kubernetes is installed on each VPS, and MinIO (S3-compatible open source block storage software) and Nginx run on a single node.
#### Database
MySQL runs on Sakura Internet's VPS. We do not use an on-premise database because we want to protect data even if our house burns down and because we want to protect personal information.
#### Cloudflare DNS
We do not use a proxy, only the DNS function. We find it very useful because changes are reflected quickly and registration is free.
# Development schedule
November: Requirement definition/selection of architecture and libraries
December: API specification determination and infrastructure consideration
2023
January: Started designing my page, etc. with Illustrator
February: Started creating the core program for my page
April: Approval for the website functions was received from various parties
July: Creation of the core program for my page was completed
Early August: Created various functions for my page
Late August: Created/tested release of automatic deployment program for k8s and VPS
Early September: Creation of additional functions, functional modifications/load testing
Late September: Release
# Ingenuity
## Design of my page
All the design was done using Illustrator. Designs are often haphazard, so I received advice from many people from the early stages. In order to reduce the amount of work required during development as much as possible, I tried to design components that use many common parts.

#### Initial design ①
![](https://storage.googleapis.com/zenn-user-upload/efd5af4b736f-20231231.png)
When I first started designing, I thought that a "dark design & English" would somehow look cool. However, I received feedback that black didn't look like a school festival, so I decided to reconsider the color.

#### Initial design ②
![](https://storage.googleapis.com/zenn-user-upload/eb3bcb239c9a-20231231.png)
![](https://storage.googleapis.com/zenn-user-upload/b0c1b1118f54-20231231.png)
I left the color considerations to someone who was good at it, and decided to at least create the shape, so I created the design for the input part and the pop-up to a certain extent. (The two design proposals above are functions that we were unable to implement in the end, but the copied and pasted components are used in many other functions.)

#### Initial design ③
![](https://storage.googleapis.com/zenn-user-upload/9c602e0b6dd8-20231231.png)
This is the final proposal, refined after considering colors. The colors are cute and appropriate for a school festival.

## My Page Front-end
This time, we will reproduce the design we made in Illustrator with HTML, CSS, and JS. We carefully designed it so that the ratio and consistency of the components would be maintained on all screen sizes. In addition, as we will explain later, we planned to implement a function to switch between multiple accounts for the organization function, so we implemented animations for that purpose.

#### Implementing the design
https://youtu.be/ARvyZzOlZLc
*The design in the video is the old version before the colors were changed.
Animejs was used to implement the animations. In addition, SCSS is used to write CSS, making it easy to reuse code once written, and the variable function makes it easy to change colors, etc. 
```css
//Overall background
$background: #e7f0f5;
//Background for each block
$block-background: #fff;
//Rounded corner value for block
$square-radius: 1vh;
//Overall font
$default-font: "Yu Gothic", YuGothic, "Yu Gothic Medium", "Yu Gothic Medium", "Yu Gothic", "Yu Gothic", sans-serif;
//Default font color
$font-color: #323232;
```
```python
import json
import sys
import io
import random
import csv
import pprint
import collections



sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')
setting= open(r'male_setting.json','r',encoding="utf-8_sig")
setting = json.load(setting)
users= open(r'male.json','r',encoding="utf-8_sig")
users = json.load(users)
flag=0

#かぶり検証用関数
def has_duplicates(seq):
    return len(seq) != len(set(seq))

#ユーザー検索関数
def user_search(user_id):
  for i in range(0,len(users["users"])):
    if users["users"][i]["id"]==user_id:
      return users["users"][i]
  return 0


while flag==0:
  print("Phase1...")
    #グループの初期化
  groups={}
  group_count=0
  for i in range(0,len(setting["group-list"])):
    group_count=group_count+setting["group-list"][i]["count"]
    group_name=str(setting["group-list"][i]["hc"])
    groups[group_name]=[]
    for a in range(0,setting["group-list"][i]["count"]):
      init=[]
      for e in range(0,setting["group-list"][i]["hc"]):
        init.append(0)
      groups[group_name].append(init)
  #各グループに1人目のユーザーを割り当てる
  #無関係なユーザーをランダムを抽出する
  first_users_count=0
  first_users_list=[]
  while first_users_count<group_count:
    first_user_random=random.choice(users["users"])["id"]
    first_user_check=0
    for i in range(0,len(groups)):
      for a in range(0,len(groups[list(groups.keys())[i]])):
        if groups[list(groups.keys())[i]][a][0]!=0:
          user_check=user_search(groups[list(groups.keys())[i]][a][0])
          for e in range(0,len(user_check["member-list"])):
            if user_check["member-list"][e]==first_user_random["id"]:
              first_user_check=first_user_check+1
    if first_user_check==0:
      for i in range(0,len(first_users_list)):
        if first_users_list[i]==first_user_random:
          first_user_check=first_user_check+1
    if first_user_check==0:
      first_users_list.append(first_user_random)
      first_users_count=first_users_count+1
  #かぶり検証
  if has_duplicates(first_users_list):
    print("Phase1 Not Success")
  else:
    print("Phase1 Success")
  #抽出したユーザーをグループに割り当てる
  for i in range(0,len(groups)):
    for a in range(0,len(groups[list(groups.keys())[i]])):
      groups[list(groups.keys())[i]][a][0]=first_users_list[0]
      first_users_list.pop(0)
  # 各グループに2人目以降のユーザーを割り当てる
  # 割り当てるべき人数を把握する
  print("Phase2...")
  still_users_count=0
  for i in range(0,len(groups)):
    for a in range(0,len(groups[list(groups.keys())[i]])):
      for e in range(0,len(groups[list(groups.keys())[i]][a])):
        if groups[list(groups.keys())[i]][a][e]==0:
          still_users_count=still_users_count+1
  while still_users_count>0:
    for i in range(0,len(groups)):
      for a in range(0,len(groups[list(groups.keys())[i]])):
        if 0 in groups[list(groups.keys())[i]][a]:
          # candidate_users_example=[1,[12,67]}]
          candidate_users=[]
          candidate_users_point=0
          for e in range(0,len(users["users"])):
            user_point=0
            for r in range(0,len(groups[list(groups.keys())[i]][a])):
              if(groups[list(groups.keys())[i]][a][r]!=0):
                #既に班に含まれていないかの検証
                ingrouop_check=0
                for k in range(0,len(groups)):
                  for j in range(0,len(groups[list(groups.keys())[k]])):
                    for l in range(0,len(groups[list(groups.keys())[k]][j])):
                      if groups[list(groups.keys())[k]][j][l]==users["users"][e]["id"]:
                          ingrouop_check=ingrouop_check+1
                # 幸福度の計算
                if ingrouop_check==0:
                  # 班員視点での検証
                  for t in range(0,len(user_search(groups[list(groups.keys())[i]][a][r])["member-list"])):
                    if user_search(groups[list(groups.keys())[i]][a][r])["member-list"][t]==users["users"][e]["id"]:
                      user_point=user_point+1
                  # ユーザー視点での検証
                  for t in range(0,len(users["users"][e]["member-list"])):
                    if users["users"][e]["member-list"][t]==groups[list(groups.keys())[i]][a][r]:
                      user_point=user_point+1
                  print("Try:"+str(users["users"][e]["name"])+" Point:"+str(user_point))
                  # candidate_usersへの追加を行う
                  if(candidate_users_point<user_point):
                    candidate_users_point=user_point
                    candidate_users.clear()
                    candidate_users.append(users["users"][e]["id"])
                  elif(candidate_users_point==user_point):
                    candidate_users_point=user_point
                    candidate_users.append(users["users"][e]["id"])
          #candidate_usersからランダムに選ぶ
          candidate_users_random=random.choice(candidate_users)
          #groupsに追加する
          groups[list(groups.keys())[i]][a][groups[list(groups.keys())[i]][a].index(0)]=candidate_users_random
          #still_users_countを減らす
          still_users_count=still_users_count-1
    flag=1
#かぶり検証
all=[]
for i in range(len(groups)):
  for a in range(len(groups[list(groups.keys())[i]])):
    for e in range(len(groups[list(groups.keys())[i]][a])):
      all.append(groups[list(groups.keys())[i]][a][e])

if has_duplicates(all):
  print("Phase2 Not Success")
else:
  print("Phase2 Success")

#IDと名前の変換
for i in range(0,len(groups)):
    for a in range(0,len(groups[list(groups.keys())[i]])):
      for e in range(0,len(groups[list(groups.keys())[i]][a])):
        groups[list(groups.keys())[i]][a][e]=user_search(groups[list(groups.keys())[i]][a][e])["name"]

with open('output1.csv', 'w',encoding='utf_8_sig') as f:
    writer = csv.writer(f)
    for i in range(len(groups)):
      for a in range(len(groups[list(groups.keys())[i]])):
          writer.writerow(eval(str(groups[list(groups.keys())[i]][a])))


print(groups)
```

#### Connecting to the backend
This was probably the most difficult task. I implemented the SPA using only vanilla JS without using React or jQuery. There are several reasons why I stuck to SPA, but the biggest reason is that I wanted to be able to switch functions seamlessly. The left side of the screen remains unchanged even if the functions you use change, so I wanted to make the most of the common parts I received and only load the HTML, CSS, and JS for the functions I use. Although it is only a small part of it, I will leave this as a memorial to the core program of My Page.
