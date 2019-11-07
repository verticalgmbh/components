git checkout -b release-$1 develop
npm version $1
cd projects/vertical-components
npm version $1
cd ../..
git commit -a -m "Bump version number to $1"