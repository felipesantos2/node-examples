import * as fs from 'node:fs';

const file = fs.open('teste.txt', 'r');

console.log(file.read())