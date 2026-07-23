#!/bin/bash

git init advanced-demo
cd advanced-demo

cat > .gitignore << EOF
node_modules/
*.log
dist/
.env
.DS_Store
EOF

echo "source code" > index.js
echo "secret=abc123" > .env
git add .
git commit -m "Initial project setup with gitignore"

git status

git tag v1.0.0
git tag -a v1.0.1 -m "Release version 1.0.1 with bug fixes"

git tag

git show v1.0.1

git config alias.st status
git config alias.co checkout
git config alias.br branch
git config alias.lg "log --oneline --graph --all"

git lg

git shortlog -sn
