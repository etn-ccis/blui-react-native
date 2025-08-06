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
        
        // Performance optimizations
        this.buildQueue = new Set();
        this.isBuilding = false;
        this.lastBuildTime = 0;
        this.buildCache = new Map();
        this.esmFixRunning = false;
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

    // Build cache and optimization methods
    getFileHash(filePath) {
        try {
            const stats = fs.statSync(filePath);
            return `${stats.mtime.getTime()}-${stats.size}`;
        } catch {
            return null;
        }
    }

    shouldRebuildFile(filePath) {
        const currentHash = this.getFileHash(filePath);
        const cachedHash = this.buildCache.get(filePath);
        
        if (currentHash !== cachedHash) {
            this.buildCache.set(filePath, currentHash);
            return true;
        }
        return false;
    }

    // Ultra-fast TypeScript build with smart optimizations
    async buildSingleFileOptimized(srcFilePath) {
        const startTime = Date.now();
        const relativePath = path.relative(this.config.libraryPath, srcFilePath);

        try {
            // Check if file actually needs rebuilding
            if (!this.shouldRebuildFile(srcFilePath)) {
                return true;
            }

            // Method 1: Try TypeScript with performance flags
            const success = await this.fastTypeScriptBuild();
            
            if (success) {
                // Schedule ESM fix asynchronously without blocking
                this.scheduleEsmFix();
                
                const elapsed = Date.now() - startTime;
                this.logSuccess(`Built in ${elapsed}ms: ${relativePath}`);
                return true;
            }
            
            throw new Error('TypeScript build failed');
            
        } catch (error) {
            this.logError(`Build failed for ${relativePath}: ${error.message}`);
            throw error;
        }
    }

    // Fast TypeScript compilation with performance optimizations
    async fastTypeScriptBuild() {
        return new Promise((resolve, reject) => {
            try {
                // Use performance-optimized TypeScript flags
                const tscCommand = [
                    'npx tsc',
                    `--project "${this.tsConfigPath}"`,
                    '--incremental',
                    '--assumeChangesOnlyAffectDirectDependencies',
                    '--skipLibCheck', // Skip type checking of declaration files
                    '--noErrorTruncation',
                    '--preserveWatchOutput'
                ].join(' ');

                execSync(tscCommand, {
                    cwd: this.config.libraryPath,
                    stdio: 'pipe',
                    timeout: 30000 // 30 second timeout
                });

                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    // Smart ESM fix scheduling to avoid blocking
    scheduleEsmFix() {
        // Don't run ESM fix if it's already running
        if (this.esmFixRunning) {
            return;
        }

        // Debounce ESM fix to run after build storms settle
        clearTimeout(this.esmFixTimer);
        this.esmFixTimer = setTimeout(async () => {
            await this.runEsmFix();
        }, 200); // Wait 200ms after last build
    }

    // Non-blocking ESM fix
    async runEsmFix() {
        if (this.esmFixRunning) return;
        
        this.esmFixRunning = true;
        try {
            execSync('npx tsc-esm-fix dist', {
                cwd: this.config.libraryPath,
                stdio: 'pipe',
                timeout: 10000 // 10 second timeout
            });
        } catch (error) {
            // ESM fix failures are non-critical, no need to log
        } finally {
            this.esmFixRunning = false;
        }
    }

    // Copy a single file and its related files to all example apps - OPTIMIZED
    copyFileToExamples(distFilePath) {
        const startTime = Date.now();
        const allFiles = this.getRelatedFiles(distFilePath);

        // Copy to all apps in parallel for faster sync
        const copyPromises = this.config.exampleApps.map((appPath) => {
            return new Promise((resolve) => {
                const appNodeModulesPath = path.resolve(__dirname, '..', appPath, this.config.nodeModulesPath);

                try {
                    // Ensure the app's node_modules directory exists
                    if (!fs.existsSync(appNodeModulesPath)) {
                        fs.mkdirSync(appNodeModulesPath, { recursive: true });
                    }

                    // Copy all related files with smart checking
                    allFiles.forEach((filePath) => {
                        const relativePath = path.relative(this.distPath, filePath);
                        const targetPath = path.join(appNodeModulesPath, relativePath);
                        const targetDir = path.dirname(targetPath);

                        // Ensure target directory exists
                        if (!fs.existsSync(targetDir)) {
                            fs.mkdirSync(targetDir, { recursive: true });
                        }

                        // Smart copy: only copy if source is newer or target doesn't exist
                        let shouldCopy = true;
                        if (fs.existsSync(targetPath)) {
                            const sourceStats = fs.statSync(filePath);
                            const targetStats = fs.statSync(targetPath);
                            shouldCopy = sourceStats.mtime > targetStats.mtime || sourceStats.size !== targetStats.size;
                        }

                        if (shouldCopy) {
                            // Copy the file
                            fs.copyFileSync(filePath, targetPath);

                            // Force file modification time update to trigger Metro reload
                            const now = new Date();
                            fs.utimesSync(targetPath, now, now);
                        }
                    });
                    resolve();
                } catch (error) {
                    this.logError(`Failed to copy files to ${appPath}: ${error.message}`);
                    resolve(); // Don't fail the entire operation for one app
                }
            });
        });

        // Wait for all copy operations to complete
        Promise.all(copyPromises).then(() => {
            const elapsed = Date.now() - startTime;
            this.logSuccess(`Synced to ${this.config.exampleApps.length} apps in ${elapsed}ms`);
        });
    }

    // Copy all built files to example apps (for initial setup)
    copyAllFilesToExamples() {
        this.config.exampleApps.forEach((appPath) => {
            const appNodeModulesPath = path.resolve(__dirname, '..', appPath, this.config.nodeModulesPath);
            
            // Clean up existing packages from regular node_modules to avoid conflicts
            this.cleanupNodeModulesPackage(appPath);

            try {
                // Ensure the directory exists
                if (!fs.existsSync(appNodeModulesPath)) {
                    fs.mkdirSync(appNodeModulesPath, { recursive: true });
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
                    }
                });

            } catch (error) {
                this.logError(`Failed to copy all files to ${appPath}: ${error.message}`);
            }
        });

        this.logSuccess(`Initial setup complete - synced to ${this.config.exampleApps.length} apps`);
    }

    // Clean up existing package from regular node_modules to avoid conflicts
    cleanupNodeModulesPackage(appPath) {
        // Extract package name from nodeModulesPath (e.g., '@brightlayer-ui/react-native-components')
        const packageName = this.config.nodeModulesPath.split('/').slice(-2).join('/');
        const regularNodeModulesPath = path.resolve(__dirname, '..', appPath, 'node_modules', packageName);

        try {
            if (fs.existsSync(regularNodeModulesPath)) {
                // Remove the entire package directory
                this.removeDirectory(regularNodeModulesPath);
                this.logSuccess(`Cleaned up conflicting package: ${packageName} from ${appPath}/node_modules`);
            }
        } catch (error) {
            this.logError(`Failed to cleanup ${packageName} from ${appPath}/node_modules: ${error.message}`);
        }
    }

    // Helper function to recursively remove directory
    removeDirectory(dirPath) {
        if (!fs.existsSync(dirPath)) {
            return;
        }

        const files = fs.readdirSync(dirPath);
        
        files.forEach((file) => {
            const filePath = path.join(dirPath, file);
            const stat = fs.lstatSync(filePath);

            if (stat.isDirectory()) {
                this.removeDirectory(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        });

        fs.rmdirSync(dirPath);
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

    // Optimized file change processing with build queue
    async processChangedFile(filePath) {
        // Add to build queue
        this.buildQueue.add(filePath);
        
        // Process queue if not already building
        if (!this.isBuilding) {
            await this.processBuildQueue();
        }
    }

    // Process multiple file changes efficiently in batches
    async processBuildQueue() {
        if (this.isBuilding || this.buildQueue.size === 0) {
            return;
        }

        this.isBuilding = true;
        const startTime = Date.now();
        const filesToBuild = Array.from(this.buildQueue);
        this.buildQueue.clear();

        try {
            if (filesToBuild.length === 1) {
                // Single file - fast path
                await this.processSingleFile(filesToBuild[0]);
            } else {
                // Multiple files - batch build
                await this.processBatchBuild(filesToBuild);
            }

            const elapsed = Date.now() - startTime;
            this.logSuccess(`Processed ${filesToBuild.length} file(s) in ${elapsed}ms`);

        } catch (error) {
            this.logError(`Build queue processing failed: ${error.message}`);
        } finally {
            this.isBuilding = false;
            this.lastBuildTime = Date.now();
            
            // Process any files added during build
            if (this.buildQueue.size > 0) {
                setTimeout(() => this.processBuildQueue(), 100);
            }
        }
    }

    // Process a single file change
    async processSingleFile(filePath) {
        const startTime = Date.now();

        // Build the file with optimizations
        await this.buildSingleFileOptimized(filePath);

        // Get the corresponding dist file path
        const distFilePath = this.getDistPath(filePath);

        // Smart wait for file to exist
        await this.waitForBuildOutput(distFilePath);

        // Copy to all example apps
        this.copyFileToExamples(distFilePath);
    }

    // Process multiple files with smart batching
    async processBatchBuild(filePaths) {
        // Build all files with single TypeScript invocation
        await this.buildSingleFileOptimized(filePaths[0]); // This builds the entire project

        // Process all dist files in parallel
        const copyPromises = filePaths.map(async (srcFilePath) => {
            const distFilePath = this.getDistPath(srcFilePath);
            await this.waitForBuildOutput(distFilePath);
            this.copyFileToExamples(distFilePath);
        });

        await Promise.all(copyPromises);
    }

    // Smart waiting for build output with timeout
    async waitForBuildOutput(distFilePath, timeout = 2000) {
        const startTime = Date.now();
        const checkInterval = 25;
        
        while (Date.now() - startTime < timeout) {
            if (fs.existsSync(distFilePath)) {
                return true;
            }
            await new Promise(resolve => setTimeout(resolve, checkInterval));
        }
        
        this.logError(`Build output timeout for: ${path.basename(distFilePath)}`);
        return false;
    }

    // Optimized initial build with performance focus
    async performInitialBuild() {
        try {
            const startTime = Date.now();
            
            // Use performance-optimized flags for initial build
            const tscCommand = [
                'npx tsc',
                `--project "${this.tsConfigPath}"`,
                '--skipLibCheck', // Skip type checking of .d.ts files
                '--noErrorTruncation',
                '--incremental' // Create .tsbuildinfo for future builds
            ].join(' ');

            execSync(tscCommand, {
                cwd: this.config.libraryPath,
                stdio: 'pipe',
                timeout: 60000 // 60 second timeout for initial build
            });

            // Schedule ESM fix for later (non-blocking)
            this.scheduleEsmFix();

            const elapsed = Date.now() - startTime;
            this.logSuccess(`Initial build completed in ${elapsed}ms`);

        } catch (error) {
            this.logError(`Initial build failed: ${error.message}`);
            throw error;
        }
    }

    // Ensure required directories exist
    ensureDirectories() {
        if (!fs.existsSync(this.distPath)) {
            fs.mkdirSync(this.distPath, { recursive: true });
        }
    }

    // Initialize watcher with ultra-responsive settings
    startWatcher() {
        // Initialize watcher with performance-tuned settings
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
                /.*\.tsbuildinfo$/, // TypeScript build cache
            ],
            persistent: true,
            ignoreInitial: true,
            awaitWriteFinish: {
                stabilityThreshold: 30, // Further reduced for faster response
                pollInterval: 25, // More frequent polling
            },
            // Performance optimizations
            atomic: true,
            alwaysStat: false,
            depth: 10,
            usePolling: false, // Use native file system events when possible
            useFsEvents: true, // Use macOS FSEvents for better performance
        });

        // Smart debouncing that considers build time
        let debounceTimer = null;
        const smartDebouncedProcess = (filePath) => {
            clearTimeout(debounceTimer);
            
            // Shorter debounce if last build was fast, longer if slow
            const timeSinceLastBuild = Date.now() - this.lastBuildTime;
            const debounceDelay = timeSinceLastBuild < 1000 ? 50 : 100;
            
            debounceTimer = setTimeout(() => {
                this.processChangedFile(filePath);
            }, debounceDelay);
        };

        // Watch for file changes with smart debouncing
        this.watcher.on('change', smartDebouncedProcess);
        this.watcher.on('add', smartDebouncedProcess);

        this.watcher.on('ready', () => {
            this.logSuccess('File watcher ready');
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
