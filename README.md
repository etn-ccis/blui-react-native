# blui-react-native

[![](https://img.shields.io/npm/v/@brightlayer-ui/react-native-progress-icons.svg?label=@brightlayer-ui/react-native-progress-icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-native-progress-icons) [![](https://img.shields.io/npm/v/@brightlayer-ui/react-native-auth-workflow.svg?label=@brightlayer-ui/react-native-auth-workflow&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-native-auth-workflow) [![](https://img.shields.io/npm/v/@brightlayer-ui/react-native-components?label=%40brightlayer-ui%2Freact-native-components)](https://www.npmjs.com/package/@brightlayer-ui/react-native-components) [![](https://img.shields.io/npm/v/@brightlayer-ui/react-native-themes.svg?label=@brightlayer-ui/react-native-themes&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-native-themes)

This blui-react-native is the one stop repository for all of the Brightlayer UI React Native packages, showcase examples and consolidated dev docs projects within a single codebase. You need to clone this repo and do `yarn install` at root level, all of the projects dependencies will be installed together, then checkout to any of the project folder and run.

## Included Packages

- [auth-workflow](https://github.com/etn-ccis/blui-react-native/tree/dev/packages/blui-react-native-workflows)

- [cli-templates](https://github.com/etn-ccis/blui-react-native/tree/dev/packages/blui-react-native-cli-templates)

- [components](https://github.com/etn-ccis/blui-react-native/tree/dev/packages/blui-react-native-component-library)

- [progress-icons](https://github.com/etn-ccis/blui-react-native/tree/dev/packages/blui-progress-icons)

- [themes](https://github.com/etn-ccis/blui-react-native/tree/dev/packages/blui-react-native-themes)

## Contributing

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

Run docs project:

```shell
cd docs
yarn dev
```

Run example projects:

```shell
cd examples/showcase
yarn start
```

## Development Workflow & Hot Reloading

This repository includes a sophisticated hot reloading system that enables real-time development across all packages and example applications. The watch system automatically builds and syncs changes from library packages to example apps, providing instant feedback during development.

### 🚀 Quick Start with Hot Reloading

For the best development experience, use the unified watcher that monitors all packages simultaneously:

```shell
# Start watching all packages (recommended)
yarn watch:all
```

This single command will:

- Watch for changes in all 4 packages (components, themes, auth-workflows, progress-icons)
- Automatically rebuild TypeScript files when changed
- Sync built files to relevant example applications
- Provide color-coded logs for easy debugging

### 🚀 Development Tips

1. **Start watcher first**: Run `yarn watch:all` before starting example apps for best experience
2. **Save triggers rebuild**: Any save in package `src/` directories triggers automatic rebuild and sync
3. **Check logs**: Color-coded logs help identify which package is being processed
4. **Graceful shutdown**: Use `Ctrl+C` to properly stop all watchers

### 📊 Package-to-App Mapping

Each package syncs to specific example applications:

| Package            | Example Apps                                 | Watch Command              |
| ------------------ | -------------------------------------------- | -------------------------- |
| **Components**     | `showcase`, `designPatterns`, `expoShowcase` | `yarn watch:components`    |
| **Themes**         | `showcase`, `designPatterns`, `expoShowcase` | `yarn watch:themes`        |
| **Progress Icons** | `showcase`, `designPatterns`, `expoShowcase` | `yarn watch:progressIcons` |
| **Auth Workflows** | `workflowexample-expo`, `workflow`           | `yarn watch:workflow`      |

### 🛠️ How Hot Reloading Works

1. **File Watching**: Uses `chokidar` to monitor TypeScript/TSX files in package `src/` directories
2. **Incremental Build**: Compiles only changed files using TypeScript's incremental compilation
3. **ESM Compatibility**: Runs `tsc-esm-fix` to ensure ES module compatibility
4. **File Sync**: Copies built files (`.js`, `.d.ts`, `.map`) to `watchPackages` directories
5. **Metro Reload**: Updates file timestamps to trigger React Native Metro bundler reload
