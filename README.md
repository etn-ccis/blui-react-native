# blui-react-native

This blui-react-native leverages the power of nx to manage a collection of Brightlayer UI React Native libraries and example projects within a single codebase. This approach, known as a monorepo, offers a structured and efficient way to develop and maintain multiple interconnected projects.

## Getting Started

Prerequisites:

Node.js and npm installed (https://nodejs.org/en/download/package-manager)

Clone the Repository:

```shell
git clone https://github.com/etn-ccis/blui-react-native.git
```

Install Dependencies:

```shell
cd blui-react-native
yarn install
```

This will install all dependencies for the monorepo and its libraries.

## Development Setup

Build a Library:

```shell
npx nx build <library-name>
```

Run a Library Example:

```shell
npx nx serve <example-name>
```

Start the Development Server (for all examples):

```shell
npx nx serve all
```

Run Tests for a Library/Example:

```shell
npx nx test <library-name/example-name>
```

Run Tests for All Libraries:

```shell
npx nx test all
```

Run Lint for a Library/Example:

```shell
npx nx lint <library-name/example-name>
```

Run Tests for All Libraries:

```shell
npx nx lint all
```

Run Prettier for a Library/Example:

```shell
npx nx format:write <library-name/example-name>
```

Run Tests for All Libraries:

```shell
npx nx format:write all
```
