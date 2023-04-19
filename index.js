const { writeFileSync, existsSync, mkdirSync } = require('fs')

if (!existsSync('./src')) mkdirSync('./src')
writeFileSync('./src/index.md', new Date() + '\n', 'utf-8')
console.log('Running index.js from main branch')
