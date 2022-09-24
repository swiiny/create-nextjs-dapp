#!/usr/bin/env node

console.log('unicorns♥');

console.log(process.argv);

// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);
console.log(args);

process.exit(0); // 0 means there were no errors
