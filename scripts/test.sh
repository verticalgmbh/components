#!/bin/bash

# Import console colors
source "./scripts/terminal-control.sh"

if [ $# -eq 0 ]
then
  echo -e "${Red}Please define a version type (major, minor, patch)${Rst}"
else
  # Get version type (major, minor, patch)
  VERSION_TYPE=$1
  if [[ $VERSION_TYPE = "major" ]]
  then
    echo -e "--------------------------------------------------------------------------------"
    echo -e "Creating hotfix"
    echo -e "--------------------------------------------------------------------------------"
    echo ""

    # Go to project directory
    cd $(dirname ${0})/..

    # Get project and component library version
    PRJ_VERSION=$(node -p -e "require('./package.json').version")
    CMP_VERSION=$(node -p -e "require('./projects/vertical-components/package.json').version")

    if [[ $PRJ_VERSION = $CMP_VERSION ]]
    then
      echo "Programm wird ausgeführt"
    else
      echo -e "${Red}Project and component version not equal${Rst}"
    fi
  else
    echo -e "${Red}The version type has to be 'major', 'minor' or 'patch'${Rst}"
  fi
fi