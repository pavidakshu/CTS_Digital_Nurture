#!/bin/bash

git init remote-demo
cd remote-demo

echo "project files" > project.txt
git add .
git commit -m "Initial commit"

git remote add origin https://github.com/<your-username>/remote-demo.git

git push -u origin main

git pull origin main

git clone https://github.com/<your-username>/remote-demo.git cloned-repo

cd cloned-repo
git log --oneline

git remote -v

git fetch origin
git status
