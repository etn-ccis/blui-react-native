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
# bash ./packages/themes/scripts/buildThemes.sh

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./examples/showcase/node_modules/@brightlayer-ui/react-native-themes"
mkdir -p "./examples/showcase/node_modules/@brightlayer-ui/react-native-themes"
rm -rf "./examples/workflow/node_modules/@brightlayer-ui/react-native-themes"
mkdir -p "./examples/workflow/node_modules/@brightlayer-ui/react-native-themes"
rm -rf "./examples/designPatterns/node_modules/@brightlayer-ui/react-native-themes"
mkdir -p "./examples/designPatterns/node_modules/@brightlayer-ui/react-native-themes"

rm -rf "./examples/expoShowcase/node_modules/@brightlayer-ui/react-native-themes"
mkdir -p "./examples/expoShowcase/node_modules/@brightlayer-ui/react-native-themes/dist"
rm -rf "./examples/workflowexample-expo/node_modules/@brightlayer-ui/react-native-themes"
mkdir -p "./examples/workflowexample-expo/node_modules/@brightlayer-ui/react-native-themes"

echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";

# cp ./packages/themes/package.json ./examples/showcase/node_modules/@brightlayer-ui/react-native-themes/package.json
cp -r ./packages/themes/dist/ ./examples/showcase/node_modules/@brightlayer-ui/react-native-themes/
# cp ./packages/themes/package.json ./examples/workflow/node_modules/@brightlayer-ui/react-native-themes/package.json
cp -r ./packages/themes/dist/ ./examples/workflow/node_modules/@brightlayer-ui/react-native-themes/
# cp ./packages/themes/package.json ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-themes/package.json
cp -r ./packages/themes/dist/ ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-themes/
cp -r ./packages/themes/dist/ ./examples/expoShowcase/node_modules/@brightlayer-ui/react-native-themes/


cp -r ./packages/themes/dist/ ./examples/workflowexample-expo/node_modules/@brightlayer-ui/react-native-themes/
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BBLUE}Linking Components: ${NC}"
if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-themes/package.json ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi
if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-themes/index.js ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi
# if [ ! -s ./examples/showcase/node_modules/@brightlayer-ui/react-native-themes/dist ];
#     then
#         if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-themes/dist/index.js ];
#         then echo -e "${BRED}Themes Not Linked to showcase${NC}" && exit 1;
#         fi;
# fi
if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-themes/package.json ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi
if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-themes/index.js ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi
# if [ ! -s ./examples/workflow/node_modules/@brightlayer-ui/react-native-themes/dist ];
#     then
#         if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-themes/dist/index.js ];
#         then echo -e "${BRED}Themes Not Linked to workflow${NC}" && exit 1;
#         fi;
# fi
if [ ! -f ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-themes/package.json ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi
if [ ! -f ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-themes/index.js ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi
# if [ ! -s ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-themes/dist ];
#     then
#         if [ ! -f ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-themes/dist/index.js ];
#         then echo -e "${BRED}Themes Not Linked to Design Patterns${NC}" && exit 1;
#         fi;
# fi
if [ ! -f ./examples/expoShowcase/node_modules/@brightlayer-ui/react-native-themes/package.json ]; then echo -e "${BRED}Themes Not Linked to expo showcase${NC}" && exit 1; fi
if [ ! -f ./examples/expoShowcase/node_modules/@brightlayer-ui/react-native-themes/index.js ]; then echo -e "${BRED}Themes Not Linked to expo showcase${NC}" && exit 1; fi
if [ ! -f ./examples/workflowexample-expo/node_modules/@brightlayer-ui/react-native-themes/package.json ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi
if [ ! -f ./examples/workflowexample-expo/node_modules/@brightlayer-ui/react-native-themes/index.js ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi

echo -e "${GRAY}Complete${NC}\r\n"