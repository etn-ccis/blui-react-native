#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chokidar = require('chokidar');

// Colors for console output
const colors = {
    blue: '\x1b[34m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    bold: '\x1b[1m',
    reset: '\x1b[0m',
};

function log(message, color = colors.blue) {
    console.log(`${color}${message}${colors.reset}`);
}

function logSuccess(message) {
    log(`✅ ${message}`, colors.green);
}

function logWarning(message) {
    log(`⚠️  ${message}`, colors.yellow);
}

function logError(message) {
    log(`❌ ${message}`, colors.red);
}

// Configuration for all packages
const PACKAGES = {
    components: {
        name: 'Components',
        color: colors.blue,
        libraryPath: path.resolve(__dirname, '../packages/component-library'),
        tsConfigPath: 'tsconfig.lib.json',
        nodeModulesPath: 'watchPackages/@brightlayer-ui/react-native-components',
        exampleApps: ['examples/showcase', 'examples/designPatterns', 'examples/expoShowcase'],
    },
    themes: {
        name: 'Themes',
        color: colors.green,
        libraryPath: path.resolve(__dirname, '../packages/themes'),
        tsConfigPath: 'tsconfig.json',
        nodeModulesPath: 'watchPackages/@brightlayer-ui/react-native-themes',
        exampleApps: ['examples/showcase', 'examples/designPatterns', 'examples/expoShowcase'],
    },
    workflow: {
        name: 'Auth Workflows',
        color: colors.cyan,
        libraryPath: path.resolve(__dirname, '../packages/auth-workflows'),
        tsConfigPath: 'tsconfig.json',
        nodeModulesPath: 'watchPackages/@brightlayer-ui/react-native-auth-workflow',
        exampleApps: ['examples/workflowexample-expo', 'examples/workflow'],
    },
    progressIcons: {
        name: 'Progress Icons',
        color: colors.magenta,
        libraryPath: path.resolve(__dirname, '../packages/progress-icons'),
        tsConfigPath: 'tsconfig.lib.json',
        nodeModulesPath: 'watchPackages/@brightlayer-ui/react-native-progress-icons',
        exampleApps: ['examples/showcase', 'examples/designPatterns', 'examples/expoShowcase'],
    },
};

// Create package watcher class
class PackageWatcher {
    constructor(packageKey, config) {
        this.packageKey = packageKey;
        this.config = config;
        this.srcPath = path.join(config.libraryPath, 'src');
        this.distPath = path.join(config.libraryPath, 'dist');
        this.tsConfigPath = path.join(config.libraryPath, config.tsConfigPath);
        this.watcher = null;
    }

    log(message, isError = false) {
        const prefix = `[${this.config.name}]`;
        const color = isError ? colors.red : this.config.color;
        log(`${color}${prefix}${colors.reset} ${message}`);
    }

    logSuccess(message) {
        const prefix = `[${this.config.name}]`;
        log(`${colors.green}${prefix}${colors.reset} ✅ ${message}`);
    }

    logError(message) {
        const prefix = `[${this.config.name}]`;
        log(`${colors.red}${prefix}${colors.reset} ❌ ${message}`);
    }

    // Get relative path from src to dist for a file
    getDistPath(srcFilePath) {
        const relativePath = path.relative(this.srcPath, srcFilePath);
        const distFilePath = path.join(this.distPath, relativePath);

        // Change .tsx/.ts extension to .js
        return distFilePath.replace(/\.(tsx?|ts)$/, '.js');
    }

    // Get all related files (js, d.ts, js.map) for a given base path
    getRelatedFiles(basePath) {
        const files = [];
        const baseWithoutExt = basePath.replace(/\.(js|ts|tsx)$/, '');

        // Add .js file
        const jsFile = baseWithoutExt + '.js';
        if (fs.existsSync(jsFile)) files.push(jsFile);

        // Add .d.ts file
        const dtsFile = baseWithoutExt + '.d.ts';
        if (fs.existsSync(dtsFile)) files.push(dtsFile);

        // Add .js.map file
        const mapFile = jsFile + '.map';
        if (fs.existsSync(mapFile)) files.push(mapFile);

        // Add .d.ts.map file
        const dtsMapFile = dtsFile + '.map';
        if (fs.existsSync(dtsMapFile)) files.push(dtsMapFile);

        return files;
    }

    // Build a specific file using TypeScript compiler
    async buildSingleFile(srcFilePath) {
        return new Promise((resolve, reject) => {
            this.log(`Building file: ${path.relative(this.config.libraryPath, srcFilePath)}`);

            try {
                // Get the relative path for the TypeScript compiler
                const relativeSrcPath = path.relative(this.config.libraryPath, srcFilePath);

                // Use incremental build approach - build the entire project but focus on changed file
                const tscCommand = `npx tsc --project "${this.tsConfigPath}" --incremental`;

                execSync(tscCommand, {
                    cwd: this.config.libraryPath,
                    stdio: 'pipe',
                });

                // Also run tsc-esm-fix to ensure ESM compatibility
                try {
                    execSync('npx tsc-esm-fix dist', {
                        cwd: this.config.libraryPath,
                        stdio: 'pipe',
                    });
                } catch (esmError) {
                    this.log('ESM fix failed, but continuing...', false);
                }

                this.logSuccess(`Built: ${relativeSrcPath}`);
                resolve();
            } catch (error) {
                this.logError(`Failed to build ${srcFilePath}: ${error.message}`);
                reject(error);
            }
        });
    }

    // Copy a single file and its related files to all example apps
    copyFileToExamples(distFilePath) {
        const relativeDistPath = path.relative(this.distPath, distFilePath);
        const allFiles = this.getRelatedFiles(distFilePath);

        this.config.exampleApps.forEach((appPath) => {
            const appNodeModulesPath = path.resolve(__dirname, '..', appPath, this.config.nodeModulesPath);

            try {
                // Ensure the app's node_modules directory exists
                if (!fs.existsSync(appNodeModulesPath)) {
                    fs.mkdirSync(appNodeModulesPath, { recursive: true });
                    this.log(`Created directory: ${path.relative(path.resolve(__dirname, '..'), appNodeModulesPath)}`);
                }

                // Copy all related files
                allFiles.forEach((filePath) => {
                    const relativePath = path.relative(this.distPath, filePath);
                    const targetPath = path.join(appNodeModulesPath, relativePath);
                    const targetDir = path.dirname(targetPath);

                    // Ensure target directory exists
                    if (!fs.existsSync(targetDir)) {
                        fs.mkdirSync(targetDir, { recursive: true });
                    }

                    // Copy the file
                    fs.copyFileSync(filePath, targetPath);

                    // Force file modification time update to trigger Metro reload
                    const now = new Date();
                    fs.utimesSync(targetPath, now, now);

                    this.logSuccess(`Updated: ${path.relative(path.resolve(__dirname, '..'), targetPath)}`);
                });
            } catch (error) {
                this.logError(`Failed to copy files to ${appPath}: ${error.message}`);
            }
        });
    }

    // Copy all built files to example apps (for initial setup)
    copyAllFilesToExamples() {
        this.log('📦 Copying all built files to watch packages...');

        this.config.exampleApps.forEach((appPath) => {
            const appNodeModulesPath = path.resolve(__dirname, '..', appPath, this.config.nodeModulesPath);

            try {
                // Ensure the directory exists
                if (!fs.existsSync(appNodeModulesPath)) {
                    fs.mkdirSync(appNodeModulesPath, { recursive: true });
                    this.log(`Created directory: ${path.relative(path.resolve(__dirname, '..'), appNodeModulesPath)}`);
                }

                // Copy the entire dist directory
                this.copyDirectory(this.distPath, appNodeModulesPath);

                // Also copy package.json, README, etc. from the library
                const filesToCopy = ['package.json', 'README.md', 'LICENSE', 'CHANGELOG.md'];
                const libraryRoot = this.config.libraryPath;

                filesToCopy.forEach((fileName) => {
                    const sourcePath = path.join(libraryRoot, fileName);
                    const targetPath = path.join(appNodeModulesPath, fileName);

                    if (fs.existsSync(sourcePath)) {
                        fs.copyFileSync(sourcePath, targetPath);
                        this.logSuccess(`Copied: ${fileName}`);
                    }
                });

                this.logSuccess(`All files copied to ${appPath}/${this.config.nodeModulesPath}`);
            } catch (error) {
                this.logError(`Failed to copy all files to ${appPath}: ${error.message}`);
            }
        });
    }

    // Helper function to recursively copy directory
    copyDirectory(source, target) {
        if (!fs.existsSync(target)) {
            fs.mkdirSync(target, { recursive: true });
        }

        const files = fs.readdirSync(source);

        files.forEach((file) => {
            const sourcePath = path.join(source, file);
            const targetPath = path.join(target, file);
            const stat = fs.lstatSync(sourcePath);

            if (stat.isDirectory()) {
                this.copyDirectory(sourcePath, targetPath);
            } else {
                fs.copyFileSync(sourcePath, targetPath);
            }
        });
    }

    // Process a changed file
    async processChangedFile(filePath) {
        try {
            const startTime = Date.now();
            this.log(`📝 File changed: ${path.relative(this.config.libraryPath, filePath)}`);

            // Build the file
            await this.buildSingleFile(filePath);

            // Get the corresponding dist file path
            const distFilePath = this.getDistPath(filePath);

            // Wait a moment for the build to complete
            await new Promise((resolve) => setTimeout(resolve, 200));

            // Copy to all example apps
            this.copyFileToExamples(distFilePath);

            const elapsed = Date.now() - startTime;
            this.logSuccess(`✨ Update complete in ${elapsed}ms`);
        } catch (error) {
            this.logError(`Failed to process ${filePath}: ${error.message}`);
        }
    }

    // Initial build to ensure dist folder exists
    async performInitialBuild() {
        return new Promise((resolve, reject) => {
            this.log('🔨 Performing initial build...');

            try {
                const tscCommand = `npx tsc --project "${this.tsConfigPath}"`;
                execSync(tscCommand, {
                    cwd: this.config.libraryPath,
                    stdio: 'pipe',
                });

                // Run tsc-esm-fix
                try {
                    execSync('npx tsc-esm-fix dist', {
                        cwd: this.config.libraryPath,
                        stdio: 'pipe',
                    });
                } catch (esmError) {
                    this.log('ESM fix failed during initial build, but continuing...');
                }

                this.logSuccess('Initial build completed');
                resolve();
            } catch (error) {
                this.logError(`Initial build failed: ${error.message}`);
                reject(error);
            }
        });
    }

    // Ensure required directories exist
    ensureDirectories() {
        if (!fs.existsSync(this.distPath)) {
            fs.mkdirSync(this.distPath, { recursive: true });
            this.log('Created dist directory');
        }
    }

    // Initialize watcher for this package
    startWatcher() {
        this.log(`📂 Watching: ${this.srcPath}`);
        this.log(`🎯 Target apps: ${this.config.exampleApps.join(', ')}`);

        // Initialize watcher with chokidar
        this.watcher = chokidar.watch(this.srcPath, {
            ignored: [
                /node_modules/,
                /\.git/,
                /dist/,
                /.*\.d\.ts$/,
                /.*\.js$/,
                /.*\.map$/,
                /.*\.test\.(ts|tsx)$/,
                /.*\.spec\.(ts|tsx)$/,
            ],
            persistent: true,
            ignoreInitial: true,
            awaitWriteFinish: {
                stabilityThreshold: 100,
                pollInterval: 100,
            },
        });

        // Watch for file changes
        this.watcher.on('change', (filePath) => this.processChangedFile(filePath));
        this.watcher.on('add', (filePath) => this.processChangedFile(filePath));

        this.watcher.on('ready', () => {
            this.logSuccess('👀 File watcher is ready! Watching for changes...');
        });

        this.watcher.on('error', (error) => {
            this.logError(`Watcher error: ${error}`);
        });

        return this.watcher;
    }

    // Initialize this package watcher
    async initialize() {
        try {
            this.ensureDirectories();

            // Perform initial build
            await this.performInitialBuild();

            // Copy all files to watch packages for initial setup
            this.copyAllFilesToExamples();

            // Start watching
            this.startWatcher();

            return true;
        } catch (error) {
            this.logError(`Failed to initialize watcher: ${error.message}`);
            return false;
        }
    }

    // Stop the watcher
    stop() {
        if (this.watcher) {
            this.watcher.close();
            this.log('🛑 Stopped watching');
        }
    }
}

// Main application class
class WatchAllApp {
    constructor() {
        this.watchers = new Map();
        this.isRunning = false;
    }

    async initialize() {
        log(`${colors.bold}🚀 Starting BLUI Multi-Package File Watcher...${colors.reset}`);
        log(
            `${colors.yellow}📦 Packages: ${Object.keys(PACKAGES)
                .map((key) => PACKAGES[key].name)
                .join(', ')}${colors.reset}`
        );

        this.isRunning = true;

        // Initialize all package watchers
        const initPromises = Object.entries(PACKAGES).map(async ([key, config]) => {
            const watcher = new PackageWatcher(key, config);
            this.watchers.set(key, watcher);

            try {
                const success = await watcher.initialize();
                if (!success) {
                    logError(`Failed to initialize ${config.name} watcher`);
                }
                return success;
            } catch (error) {
                logError(`Error initializing ${config.name} watcher: ${error.message}`);
                return false;
            }
        });

        const results = await Promise.all(initPromises);
        const successCount = results.filter((r) => r).length;

        if (successCount === Object.keys(PACKAGES).length) {
            logSuccess(`🎉 All ${successCount} package watchers initialized successfully!`);
            log(`${colors.yellow}Press Ctrl+C to stop all watchers${colors.reset}`);
            log(
                `${colors.blue}💡 Tip: Save any file in any package src/ to trigger auto-build and sync to example apps${colors.reset}`
            );
        } else {
            logWarning(`⚠️  Only ${successCount}/${Object.keys(PACKAGES).length} watchers initialized successfully`);
        }

        // Handle process termination
        process.on('SIGINT', () => {
            this.shutdown();
        });

        process.on('SIGTERM', () => {
            this.shutdown();
        });
    }

    shutdown() {
        if (!this.isRunning) return;

        log('\n🛑 Stopping all file watchers...');
        this.isRunning = false;

        // Stop all watchers
        this.watchers.forEach((watcher, key) => {
            try {
                watcher.stop();
            } catch (error) {
                logError(`Error stopping ${key} watcher: ${error.message}`);
            }
        });

        logSuccess('👋 All watchers stopped. Goodbye!');
        process.exit(0);
    }
}

// Run the application
if (require.main === module) {
    const app = new WatchAllApp();
    app.initialize().catch((error) => {
        logError(`Failed to start application: ${error.message}`);
        process.exit(1);
    });
}

module.exports = {
    WatchAllApp,
    PackageWatcher,
    PACKAGES,
};
