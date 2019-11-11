#!/bin/bash

# Import console colors
source "./scripts/terminal-control.sh"

echo -e "--------------------------------------------------------------------------------"
echo -e "Building release package"
echo -e "--------------------------------------------------------------------------------"
echo ""

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

# Go to project directory
cd $(dirname ${0})/..

# Build angular packages with ng-packagr
run_cmd "ng build vertical-components" "Building angular package"

# Bundle scss files into _theming.scss file
run_cmd "scss-bundle" "Bundling scss files"

# Prebuild theme files
src="./projects/vertical-components/assets/themes/"
dest="./dist/vertical-components/prebuilt-themes/"
imp="--importer=node_modules/node-sass-tilde-importer"
run_cmd "node-sass ${src} ${imp} -o ${dest}" "Prebuilding theme files"

# Copy Readme from project directory to dist folder
src="./README.md"
dest="./dist/vertical-components/"
run_cmd "cp ${src} ${dest}" "Copying README.md"

echo ""
echo -e "${Green}--------------------------------------------------------------------------------"
echo -e "Built release package"
echo -e "--------------------------------------------------------------------------------${Rst}"