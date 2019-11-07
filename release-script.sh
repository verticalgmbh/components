git checkout -b release-$1 develop
versionBmpPrj=$(npm version $1)
echo "Changed project package.json to ${versionBmpMain}"
cd projects/vertical-components
versionBmpLib=$(npm version $1)
echo "Changed library package.json to ${versionBmpLib}"
cd ../..
commitMsg=$(git commit -a -m "Bump version number to $1")
echo "Create new commit"
echo $commitMsg
echo "Release script done"