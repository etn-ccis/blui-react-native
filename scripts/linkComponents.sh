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
# bash ./packages/component-library/scripts/buildComponents.sh

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./examples/showcase/node_modules/@brightlayer-ui/react-native-components"
mkdir -p "./examples/showcase/node_modules/@brightlayer-ui/react-native-components"
rm -rf "./examples/workflow/node_modules/@brightlayer-ui/react-native-components"
mkdir -p "./examples/workflow/node_modules/@brightlayer-ui/react-native-components"
rm -rf "./examples/designPatterns/node_modules/@brightlayer-ui/react-native-components"
mkdir -p "./examples/designPatterns/node_modules/@brightlayer-ui/react-native-components"
rm -rf "./docs/node_modules/@brightlayer-ui/react-native-components"
mkdir -p "./docs/node_modules/@brightlayer-ui/react-native-components"

echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";

# cp ./packages/component-library/package.json ./examples/showcase/node_modules/@brightlayer-ui/react-native-components/package.json
cp -r ./packages/component-library/dist/* ./examples/showcase/node_modules/@brightlayer-ui/react-native-components/
# cp ./packages/component-library/package.json ./examples/workflow/node_modules/@brightlayer-ui/react-native-components/package.json
cp -r ./packages/component-library/dist/* ./examples/workflow/node_modules/@brightlayer-ui/react-native-components/
# cp ./packages/component-library/package.json ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-components/package.json
cp -r ./packages/component-library/dist/* ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-components/
# cp ./packages/component-library/package.json ./docs/node_modules/@brightlayer-ui/react-native-components/package.json
cp -r ./packages/component-library/dist/* ./docs/node_modules/@brightlayer-ui/react-native-components/

echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BBLUE}Linking Components: ${NC}"
if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-components/package.json ]; then echo -e "${BRED}Components Not Linked${NC}" && exit 1; fi
# if [ ! -s ./examples/showcase/node_modules/@brightlayer-ui/react-native-components/dist ];
#     then
#         if [ ! -f ./examples/showcase/node_modules/@brightlayer-ui/react-native-components/dist/index.js ];
#         then echo -e "${BRED}Component Not Linked to showcase${NC}" && exit 1;
#         fi;
# fi
if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-components/package.json ]; then echo -e "${BRED}Components Not Linked${NC}" && exit 1; fi
# if [ ! -s ./examples/workflow/node_modules/@brightlayer-ui/react-native-components/dist ];
#     then
#         if [ ! -f ./examples/workflow/node_modules/@brightlayer-ui/react-native-components/dist/index.js ];
#         then echo -e "${BRED}Components Not Linked to workflow${NC}" && exit 1;
#         fi;
# fi
if [ ! -f ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-components/package.json ]; then echo -e "${BRED}Components Not Linked${NC}" && exit 1; fi
# if [ ! -s ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-components/dist ];
#     then
#         if [ ! -f ./examples/designPatterns/node_modules/@brightlayer-ui/react-native-components/dist/index.js ];
#         then echo -e "${BRED}Components Not Linked to Design Patterns${NC}" && exit 1;
#         fi;
# fi
echo -e "${GRAY}Complete${NC}\r\n"