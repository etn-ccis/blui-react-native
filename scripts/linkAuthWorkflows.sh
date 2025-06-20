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

# echo -e "${BLUE}Building Auth Workflows...${NC}"
# bash ./packages/auth-workflows/scripts/buildAuth.sh

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./examples/showcase/node_modules/@brightlayer-ui/react-native-auth-workflow"
mkdir -p "./examples/showcase/node_modules/@brightlayer-ui/react-native-auth-workflow"
rm -rf "./examples/workflow/node_modules/@brightlayer-ui/react-native-auth-workflow"
mkdir -p "./examples/workflow/node_modules/@brightlayer-ui/react-native-auth-workflow"

echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";

# cp ./packages/auth-workflows/package.json ./examples/showcase/node_modules/@brightlayer-ui/react-native-auth-workflow/package.json
cp -r ./packages/auth-workflows/dist/ ./examples/showcase/node_modules/@brightlayer-ui/react-native-auth-workflow/
# cp ./packages/auth-workflows/package.json ./examples/workflow/node_modules/@brightlayer-ui/react-native-auth-workflow/package.json
cp -r ./packages/auth-workflows/dist/ ./examples/workflow/node_modules/@brightlayer-ui/react-native-auth-workflow/
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BBLUE}Linking Components: ${NC}"
if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-auth-workflow/package.json ]; then echo -e "${BRED}Auth Worklow Not Linked${NC}" && exit 1; fi
# if [ ! -s ./examples/showcase/node_modules/@brightlayer-ui/react-native-auth-workflow/dist ];
#     then
#         if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-auth-workflow/dist/index.js ];
#         then echo -e "${BRED}Auth Workflows Not Linked${NC}" && exit 1;
#         fi;
# fi
if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-auth-workflow/package.json ]; then echo -e "${BRED}Auth Worklow Not Linked${NC}" && exit 1; fi
# if [ ! -s ./examples/workflow/node_modules/@brightlayer-ui/react-native-auth-workflow/dist ];
#     then
#         if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-auth-workflow/dist/index.js ];
#         then echo -e "${BRED}Auth Workflows Not Linked${NC}" && exit 1;
#         fi;
# fi
echo -e "${GRAY}Complete${NC}\r\n"