#!/bin/bash

# Import console colors
source "./scripts/terminal-control.sh"

# Function to run a cmd, check for errors and warning & exit if any error is thrown
# run_cmd "cmd" "cmdTitle"
run_cmd() {
  cmd=$1
  cmdTitle=$2

  echo -ne "${Blue}${cmdTitle}${Rst}"
  stderr=$(${cmd} 2>&1 > /dev/null)
  exitCode=$?

  if [ $exitCode -eq 0 ]
  then
    if [ -z "$stderr" ]
    then
      printf "${Green}%$(expr 80 - ${#cmdTitle})s\n${Rst}" "[ PASSED ]"
    else
      printf "${Yellow}%$(expr 80 - ${#cmdTitle})s\n${Rst}" "[  WARN  ]"
      echo -e "${Yellow}${stderr}${Rst}"
    fi
  else
    printf "${Red}%$(expr 80 - ${#cmdTitle})s\n${Rst}" "[ FAILED ]"
    echo -e "${Red}$stderr${Rst}"
    exit
  fi
}

if [ $# -eq 0]
then
  echo -e "${Red}Please define a version type (major, minor, patch)${Rst}"
else
  # Get version type (major, minor, patch)
  $VERSION_TYPE = $1
  if [ $VERSION_TYPE -eq "major"] || [ $VERSION_TYPE -eq "minor"] || [ $VERSION_TYPE -eq "patch"]
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

    if [ $PRJ_VERSION -eq $CMP_VERSION]
    then
        # Create hotfix-branch
        run_cmd "git checkout -b hotfix-$PRJ_VERSION master" "Creating hotfix branch"

        # Change project version
        # Change components library version
        # Create new commit
        # Push changes to remote repo
    else
      echo -e "${Red}Project and component version not equal${Rst}"
    fi
  else
    echo -e "${Red}The version type has to be 'major', 'minor' or 'patch'${Rst}"
  fi
fi

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