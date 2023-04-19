const { writeFileSync, existsSync, mkdirSync, readFileSync } = require('fs')
const content = readFileSync('src/index.md', 'utf-8')

if (!existsSync('./docs')) mkdirSync('./docs')
writeFileSync('./docs/index.md', content + '\nAdded new line from the dev branch\n', 'utf-8')
console.log('Running index.js from dev branch')
