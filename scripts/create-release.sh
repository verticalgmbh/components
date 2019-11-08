#!/bin/bash

git checkout -b release-$1 develop
versionBmpPrj=$(npm version $1)
echo "Changed project package.json to ${versionBmpPrj}"
cd projects/vertical-components
versionBmpLib=$(npm version $1)
echo "Changed library package.json to ${versionBmpLib}"
cd ../..
echo "Create new commit"
git commit -a -m "Bump version number to $1"
echo
echo "Release script done"