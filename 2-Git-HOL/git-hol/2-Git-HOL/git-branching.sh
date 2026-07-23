#!/bin/bash

git init branching-demo
cd branching-demo

echo "main content" > main.txt
git add .
git commit -m "Initial commit on main"

git branch feature-login
git checkout feature-login

echo "login feature code" > login.txt
git add .
git commit -m "Add login feature"

git checkout main

git branch feature-signup
git checkout feature-signup

echo "signup feature code" > signup.txt
git add .
git commit -m "Add signup feature"

git checkout main
git merge feature-login -m "Merge feature-login into main"

git merge feature-signup -m "Merge feature-signup into main"

git log --oneline --graph --all

git branch -d feature-login
git branch -d feature-signup

git branch
