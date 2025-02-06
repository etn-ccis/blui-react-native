# React Native Showcase Demo

[![Build](https://github.com/etn-ccis/blui-react-native-showcase-demo/actions/workflows/blui-ci.yml/badge.svg?branch=master)](https://github.com/etn-ccis/blui-react-native-showcase-demo/actions/workflows/blui-ci.yml) [![codecov](https://codecov.io/gh/etn-ccis/blui-react-native-showcase-demo/branch/master/graph/badge.svg?token=6KBS9UWAXP)](https://codecov.io/gh/etn-ccis/blui-react-native-showcase-demo)

This applications is a demo applications that is used to demonstrate and test various Brightayer UI components, resources, etc.

It is used as a git submodule for:

-   [react-native-component-library](https://github.com/etn-ccis/blui-react-native-component-library)
-   [react-native-themes](https://github.com/etn-ccis/blui-react-native-themes)

It can also be run as a standalone application or used as a starting point for your own applications.

It includes:

-   Brightayer UI themes and typography
-   React Native Paper UI components
-   Brightayer UI components
-   Right-to-Left support

## To run the project

Clone the repository:

```
git clone https://github.com/etn-ccis/blui-react-native-showcase-demo
```

Install the dependencies:

```
yarn install
```

or

```
npm install
```

Install Pods (for iOS):
```
cd ios
pod install
cd ..
```

and run the start command:

```
yarn <ios | android>
```

or

```
npm run <ios | android>
```

## Contributors

### Making changes as a submodule

When using this repository as a submodule, it can be treated as if you had checked out this repository directly. You can make changes in the submodule folder and commit them up to a branch in the same way you would if you checked out the repository on its own, e.g.:

```
cd folder/path/to/submodule
// make some changes
git checkout -b feature/my-feature-branch
git add -A
git commit -m "Made some changes to the submodule"
git push -u origin feature/my-feature-branch
```

You can then make a PR in this repository to merge your feature branch into the dev branch. Once the changes are merged into the dev branch, you'll want to make sure that any repositories that share this example are updated to get the latest changes (see below).

### Propogating changes to other projects

If you make changes to this example, ensure that you update the submodule pointer in the component library and themes repositories (along with any others that use this demo), e.g.:

```
git clone <parent_repository>
cd parent_repository
git submodule update --remote //this is the command to update the pointer
// Create a new branch and add/commit/push the updated pointer to the parent repository
```

Most parent repositories will have an NPM script to update the pointer.
