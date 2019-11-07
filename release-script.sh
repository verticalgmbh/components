git checkout -b release-$1 develop
echo "Changed main package.json to" npm version $1
cd projects/vertical-components
echo "Changed components package.json to" npm version $1
cd ../..
echo "Create new commit\n"git commit -a -m "Bump version number to $1"
echo "Release script done"