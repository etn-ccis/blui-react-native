#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

# echo -e "${BLUE}Building components...${NC}"
# bash ./packages/progress-icons/scripts/buildIcons.sh

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./examples/showcase/node_modules/@brightlayer-ui/react-native-progress-icons"
mkdir -p "./examples/showcase/node_modules/@brightlayer-ui/react-native-progress-icons/dist"
rm -rf "./examples/workflow/node_modules/@brightlayer-ui/react-native-progress-icons"
mkdir -p "./examples/workflow/node_modules/@brightlayer-ui/react-native-progress-icons/dist"

echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";

cp ./packages/progress-icons/package.json ./examples/showcase/node_modules/@brightlayer-ui/react-native-progress-icons/package.json
cp -r ./packages/progress-icons/dist/ ./examples/showcase/node_modules/@brightlayer-ui/react-native-progress-icons/dist
cp ./packages/progress-icons/package.json ./examples/workflow/node_modules/@brightlayer-ui/react-native-progress-icons/package.json
cp -r ./packages/progress-icons/dist/ ./examples/workflow/node_modules/@brightlayer-ui/react-native-progress-icons/dist
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BBLUE}Linking Components: ${NC}"
if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-progress-icons/package.json ]; then echo -e "${BRED}Progress Icons Not Linked${NC}" && exit 1; fi
if [ ! -s ./examples/showcase/node_modules/@brightlayer-ui/react-native-progress-icons/dist ];
    then
        if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-progress-icons/dist/index.js ];
        then echo -e "${BRED}Progress Icons Not Linked${NC}" && exit 1;
        fi;
fi
if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-progress-icons/package.json ]; then echo -e "${BRED}Progress Icons Not Linked${NC}" && exit 1; fi
if [ ! -s ./examples/workflow/node_modules/@brightlayer-ui/react-native-progress-icons/dist ];
    then
        if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-progress-icons/dist/index.js ];
        then echo -e "${BRED}Progress Icons Not Linked${NC}" && exit 1;
        fi;
fi
echo -e "${GRAY}Complete${NC}\r\n"