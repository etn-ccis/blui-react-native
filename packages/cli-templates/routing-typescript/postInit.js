#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const npmrcPath = path.join(process.cwd(), '.npmrc');

fs.writeFileSync(npmrcPath, 'legacy-peer-deps=true\n');