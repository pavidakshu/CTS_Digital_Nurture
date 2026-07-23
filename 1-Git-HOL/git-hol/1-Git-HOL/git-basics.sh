#!/bin/bash

mkdir my-first-repo
cd my-first-repo

git init

echo "Hello, Git!" > hello.txt
git status

git add hello.txt
git status

git commit -m "Initial commit - add hello.txt"

echo "Second line" >> hello.txt
git diff

git add .
git commit -m "Update hello.txt with second line"

git log --oneline
