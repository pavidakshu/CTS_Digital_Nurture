#!/bin/bash

git init undo-demo
cd undo-demo

echo "stable code" > app.txt
git add .
git commit -m "Add stable app"

echo "work in progress" >> app.txt

git stash

git status

git stash pop

echo "bad change" >> app.txt
git add .
git commit -m "Bad commit"

git revert HEAD --no-edit

git log --oneline

echo "experimental" > experiment.txt
git add .
git commit -m "Experimental commit"

git reset --soft HEAD~1

git status

git log --oneline
