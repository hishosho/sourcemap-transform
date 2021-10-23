
const fs = require('fs');
const path = require('path')
const SourceMap = require('source-map');

const args = process.argv.splice(2)

const line = Number(args[0])
const column = Number(args[1])
const dir = args[2]

console.log('line=', args[0])
console.log('column=', args[1])

// let dir = path.resolve(__dirname, '../../app.08f6b37e.js.map')
 
const { readFileSync } = fs;
const { SourceMapConsumer } = SourceMap;

 
const rawSourceMap = JSON.parse(readFileSync(dir, 'utf8'));
 
SourceMapConsumer.with(rawSourceMap, null, consumer => {
  const pos = consumer.originalPositionFor({
    line,
    column
  });

  console.log(pos);
})
