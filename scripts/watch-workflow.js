#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const chokidar = require('chokidar');

// Configuration
const WORKFLOW_LIBRARY_PATH = path.resolve(__dirname, '../packages/auth-workflows');
const SRC_PATH = path.join(WORKFLOW_LIBRARY_PATH, 'src');
const DIST_PATH = path.join(WORKFLOW_LIBRARY_PATH, 'dist');
const TSCONFIG_PATH = path.join(WORKFLOW_LIBRARY_PATH, 'tsconfig.json');

// Example apps that need to be updated
const EXAMPLE_APPS = [
    'examples/workflow',
    'examples/workflowexample-expo',

];

const NODE_MODULES_PATH = 'watchPackages/@brightlayer-ui/react-native-auth-workflow';

// Colors for console output
const colors = {
    blue: '\x1b[34m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    bold: '\x1b[1m',
    reset: '\x1b[0m'
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

function logInfo(message) {
    log(`ℹ️  ${message}`, colors.blue);
}

// Get relative path from src to dist for a file
function getDistPath(srcFilePath) {
    const relativePath = path.relative(SRC_PATH, srcFilePath);
    const distFilePath = path.join(DIST_PATH, relativePath);
    
    // Change .tsx/.ts extension to .js
    return distFilePath.replace(/\.(tsx?|ts)$/, '.js');
}

// Get all related files (js, d.ts, js.map) for a given base path
function getRelatedFiles(basePath) {
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
function buildSingleFile(srcFilePath) {
    return new Promise((resolve, reject) => {
        logInfo(`Building file: ${path.relative(WORKFLOW_LIBRARY_PATH, srcFilePath)}`);
        
        try {
            // Get the relative path for the TypeScript compiler
            const relativeSrcPath = path.relative(WORKFLOW_LIBRARY_PATH, srcFilePath);
            
            // Use incremental build approach - build the entire project but focus on changed file
            const tscCommand = `npx tsc --project "${TSCONFIG_PATH}" --incremental`;
            
            execSync(tscCommand, { 
                cwd: WORKFLOW_LIBRARY_PATH,
                stdio: 'pipe'
            });
            
            // Also run tsc-esm-fix to ensure ESM compatibility
            try {
                execSync('npx tsc-esm-fix dist', {
                    cwd: WORKFLOW_LIBRARY_PATH,
                    stdio: 'pipe'
                });
            } catch (esmError) {
                logWarning('ESM fix failed, but continuing...');
            }
            
            logSuccess(`Built: ${relativeSrcPath}`);
            resolve();
        } catch (error) {
            logError(`Failed to build ${srcFilePath}: ${error.message}`);
            reject(error);
        }
    });
}

// Copy a single file and its related files to all example apps
function copyFileToExamples(distFilePath) {
    const relativeDistPath = path.relative(DIST_PATH, distFilePath);
    const allFiles = getRelatedFiles(distFilePath);
    
    EXAMPLE_APPS.forEach(appPath => {
        const appNodeModulesPath = path.resolve(__dirname, '..', appPath, NODE_MODULES_PATH);
        
        try {
            // Ensure the app's node_modules directory exists
            if (!fs.existsSync(appNodeModulesPath)) {
                fs.mkdirSync(appNodeModulesPath, { recursive: true });
                logInfo(`Created directory: ${path.relative(path.resolve(__dirname, '..'), appNodeModulesPath)}`);
            }
            
            // Copy all related files
            allFiles.forEach(filePath => {
                const relativePath = path.relative(DIST_PATH, filePath);
                const targetPath = path.join(appNodeModulesPath, relativePath);
                const targetDir = path.dirname(targetPath);
                
                // Ensure target directory exists
                if (!fs.existsSync(targetDir)) {
                    fs.mkdirSync(targetDir, { recursive: true });
                }
                
                // Copy the file
                fs.copyFileSync(filePath, targetPath);
                
                logSuccess(`Updated: ${path.relative(path.resolve(__dirname, '..'), targetPath)}`);
            });
            
            // Trigger gentle Metro reload for workflow to avoid hard refresh
            triggerGentleMetroReload();
            
        } catch (error) {
            logError(`Failed to copy files to ${appPath}: ${error.message}`);
        }
    });
}

// Gentle Metro reload function for workflow to avoid hard refresh
function triggerGentleMetroReload() {
    try {
        // For workflow, we use a more gentle approach to avoid hard refresh
        const exampleworkflowDir = path.resolve(__dirname, '../examples/**/watchPackages/@brightlayer-ui/react-native-workflow');
        
        // Create a temporary signal file that gets quickly removed
        const signalFile = path.join(exampleworkflowDir, '.metro-reload-signal');
        
        // Just touch a temporary file briefly
        fs.writeFileSync(signalFile, '// Metro reload signal');
        
        // Remove it immediately to minimize impact
        setImmediate(() => {
            try {
                if (fs.existsSync(signalFile)) {
                    fs.unlinkSync(signalFile);
                }
            } catch (error) {
                // Ignore cleanup errors
            }
        });
        
        console.log('✨ Gentle Metro reload signal sent for workflow');
    } catch (error) {
        console.error('Error triggering gentle Metro reload:', error);
    }
}

// Copy all built files to example apps (for initial setup)
function copyAllFilesToExamples() {
    logInfo('📦 Copying all built files to watch packages...');
    
    EXAMPLE_APPS.forEach(appPath => {
        const appNodeModulesPath = path.resolve(__dirname, '..', appPath, NODE_MODULES_PATH);
        
        try {
            // Ensure the directory exists
            if (!fs.existsSync(appNodeModulesPath)) {
                fs.mkdirSync(appNodeModulesPath, { recursive: true });
                logInfo(`Created directory: ${path.relative(path.resolve(__dirname, '..'), appNodeModulesPath)}`);
            }
            
            // Copy the entire dist directory
            copyDirectory(DIST_PATH, appNodeModulesPath);
            
            // Also copy package.json, README, etc. from the workflow library
            const filesToCopy = ['package.json', 'README.md', 'LICENSE', 'CHANGELOG.md'];
            const workflowLibraryRoot = WORKFLOW_LIBRARY_PATH;
            
            filesToCopy.forEach(fileName => {
                const sourcePath = path.join(workflowLibraryRoot, fileName);
                const targetPath = path.join(appNodeModulesPath, fileName);
                
                if (fs.existsSync(sourcePath)) {
                    fs.copyFileSync(sourcePath, targetPath);
                    logSuccess(`Copied: ${fileName}`);
                }
            });
            
            logSuccess(`All workflow files copied to ${appPath}/${NODE_MODULES_PATH}`);
            
        } catch (error) {
            logError(`Failed to copy all files to ${appPath}: ${error.message}`);
        }
    });
}

// Helper function to recursively copy directory
function copyDirectory(source, target) {
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }
    
    const files = fs.readdirSync(source);
    
    files.forEach(file => {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);
        const stat = fs.lstatSync(sourcePath);
        
        if (stat.isDirectory()) {
            copyDirectory(sourcePath, targetPath);
        } else {
            fs.copyFileSync(sourcePath, targetPath);
        }
    });
}

// Process a changed file
async function processChangedFile(filePath) {
    try {
        const startTime = Date.now();
        log(`\n${colors.bold}📝 Theme file changed: ${path.relative(WORKFLOW_LIBRARY_PATH, filePath)}${colors.reset}`);
        
        // Build the file
        await buildSingleFile(filePath);
        
        // Get the corresponding dist file path
        const distFilePath = getDistPath(filePath);
        
        // Wait a moment for the build to complete
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Copy to all example apps
        copyFileToExamples(distFilePath);
        
        const elapsed = Date.now() - startTime;
        logSuccess(`✨ Theme update complete in ${elapsed}ms\n`);
        
    } catch (error) {
        logError(`Failed to process ${filePath}: ${error.message}`);
    }
}

// Initial build to ensure dist folder exists
function performInitialBuild() {
    return new Promise((resolve, reject) => {
        logInfo('🔨 Performing initial workflow build...');
        
        try {
            const tscCommand = `npx tsc --project "${TSCONFIG_PATH}"`;
            execSync(tscCommand, { 
                cwd: WORKFLOW_LIBRARY_PATH,
                stdio: 'pipe'
            });
            
            // Run tsc-esm-fix
            try {
                execSync('npx tsc-esm-fix dist', {
                    cwd: WORKFLOW_LIBRARY_PATH,
                    stdio: 'pipe'
                });
            } catch (esmError) {
                logWarning('ESM fix failed during initial build, but continuing...');
            }
            
            logSuccess('Initial workflow build completed');
            resolve();
        } catch (error) {
            logError(`Initial build failed: ${error.message}`);
            reject(error);
        }
    });
}

// Initialize watcher
function startWatcher() {
    logInfo('🚀 Starting BLUI workflow Library File Watcher...');
    logInfo(`📂 Watching: ${SRC_PATH}`);
    logInfo(`🎯 Target apps: ${EXAMPLE_APPS.join(', ')}`);
    
    // Initialize watcher with chokidar
    const watcher = chokidar.watch(SRC_PATH, {
        ignored: [
            /node_modules/,
            /\.git/,
            /dist/,
            /.*\.d\.ts$/,
            /.*\.js$/,
            /.*\.map$/,
            /.*\.test\.(ts|tsx)$/,
            /.*\.spec\.(ts|tsx)$/
        ],
        persistent: true,
        ignoreInitial: true,
        awaitWriteFinish: {
            stabilityThreshold: 100,
            pollInterval: 100
        }
    });
    
    // Watch for file changes
    watcher.on('change', processChangedFile);
    watcher.on('add', processChangedFile);
    
    watcher.on('ready', () => {
        logSuccess('👀 Theme file watcher is ready! Watching for changes...');
        log(`${colors.yellow}Press Ctrl+C to stop watching${colors.reset}`);
        log(`${colors.blue}💡 Tip: Save any file in workflow/src/ to trigger auto-build and sync to example apps${colors.reset}`);
    });
    
    watcher.on('error', error => {
        logError(`Watcher error: ${error}`);
    });
    
    // Handle process termination
    process.on('SIGINT', () => {
        log('\n🛑 Stopping file watcher...');
        watcher.close();
        process.exit(0);
    });
    
    return watcher;
}

// Ensure required directories exist
function ensureDirectories() {
    if (!fs.existsSync(DIST_PATH)) {
        fs.mkdirSync(DIST_PATH, { recursive: true });
        logInfo('Created dist directory');
    }
}

// Main function
async function main() {
    try {
        ensureDirectories();
        
        // Perform initial build
        await performInitialBuild();
        
        // Copy all files to watch packages for initial setup
        copyAllFilesToExamples();
        
        // Start watching
        startWatcher();
    } catch (error) {
        logError(`Failed to start watcher: ${error.message}`);
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = {
    startWatcher,
    processChangedFile,
    buildSingleFile,
    copyFileToExamples,
    copyAllFilesToExamples,
    performInitialBuild
};
