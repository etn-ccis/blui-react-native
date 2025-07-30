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

### 📁 Watch Package Structure

The hot reloading system uses a `watchPackages` directory structure within each example app to simulate node_modules without interfering with actual npm dependencies:

```
examples/
├── showcase/
│   └── watchPackages/
│       └── @brightlayer-ui/
│           ├── react-native-components/     # Synced from packages/component-library/dist
│           ├── react-native-themes/         # Synced from packages/themes/dist
│           └── react-native-progress-icons/ # Synced from packages/progress-icons/dist
├── designPatterns/
│   └── watchPackages/
│       └── @brightlayer-ui/
│           ├── react-native-components/
│           ├── react-native-themes/
│           └── react-native-progress-icons/
└── workflowexample-expo/
    └── watchPackages/
        └── @brightlayer-ui/
            └── react-native-auth-workflow/  # Synced from packages/auth-workflows/dist
```

### 🔧 Individual Package Watchers

You can also watch specific packages individually:

```shell
# Watch specific packages
yarn watch:components      # Components library only
yarn watch:themes         # Themes library only
yarn watch:workflow       # Auth workflows only
yarn watch:progressIcons  # Progress icons only
```

### 📊 Package-to-App Mapping

Each package syncs to specific example applications:

| Package | Example Apps | Watch Command |
|---------|-------------|---------------|
| **Components** | `showcase`, `designPatterns` | `yarn watch:components` |
| **Themes** | `showcase`, `designPatterns` | `yarn watch:themes` |
| **Progress Icons** | `showcase`, `designPatterns` | `yarn watch:progressIcons` |
| **Auth Workflows** | `workflowexample-expo` | `yarn watch:workflow` |

### 🛠️ How Hot Reloading Works

1. **File Watching**: Uses `chokidar` to monitor TypeScript/TSX files in package `src/` directories
2. **Incremental Build**: Compiles only changed files using TypeScript's incremental compilation
3. **ESM Compatibility**: Runs `tsc-esm-fix` to ensure ES module compatibility
4. **File Sync**: Copies built files (`.js`, `.d.ts`, `.map`) to `watchPackages` directories
5. **Metro Reload**: Updates file timestamps to trigger React Native Metro bundler reload

### 🎨 Color-Coded Logging

The unified watcher uses color-coded logs to distinguish between packages:

- **🔵 Components**: Blue
- **🟢 Themes**: Green  
- **🔵 Auth Workflows**: Cyan
- **🟣 Progress Icons**: Magenta

### ⚡ Performance Features

- **Incremental Builds**: Only rebuilds changed files for faster compilation
- **Parallel Watching**: All packages watched concurrently for maximum efficiency
- **Smart Sync**: Only copies files that have actually changed
- **Background Processing**: Non-blocking file operations

### 🚀 Development Tips

1. **Start watcher first**: Run `yarn watch:all` before starting example apps for best experience
2. **Save triggers rebuild**: Any save in package `src/` directories triggers automatic rebuild and sync
3. **Check logs**: Color-coded logs help identify which package is being processed
4. **Graceful shutdown**: Use `Ctrl+C` to properly stop all watchers

### 🔍 Troubleshooting

If hot reloading isn't working:

1. **Check watcher status**: Ensure `yarn watch:all` is running without errors
2. **Verify file paths**: Check that `watchPackages` directories exist in example apps
3. **Restart Metro**: Sometimes Metro bundler needs restart (`r` in Metro terminal)
4. **Check TypeScript errors**: Build errors prevent file sync - check watcher logs
5. **Clean and rebuild**: Stop watcher, delete `dist/` and `watchPackages/`, restart
