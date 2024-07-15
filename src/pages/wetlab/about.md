---
layout: '../../layouts/markdown.astro'
title: 'article01ページ'
---

# Text
TextTextTextTextTextTextTextTextTextTextTextTextz
## Text
TextTextTextTextTextTextTextTextTextTextTextText

### Text
*Text*Text**Text**TextTextTextTextTextTextTextTextText

#### Text
TextTextTextTextTextTextTextTextTextTextTextText
```sh
npm create astro@latest -- --template starlight
```

![](https://storage.googleapis.com/zenn-user-upload/eb3bcb239c9a-20231231.png)
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