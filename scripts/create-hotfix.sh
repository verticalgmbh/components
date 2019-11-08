#!/bin/bash

git checkout -b hotfix-$1 master
versionBmpPrj=$(npm version $1)
echo "Changed project package.json to ${versionBmpPrj}"
cd projects/vertical-components
versionBmpLib=$(npm version $1)
echo "Changed library package.json to ${versionBmpLib}"
cd ../..
echo "Create new commit"
git commit -a -m "Bump version number to $1"
echo
echo "Hotfix script done"