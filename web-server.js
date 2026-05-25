import { createServer } from 'node:http';
import os from 'node:os';

const hostname = 'localhost';

const server = createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello, World!', os.arch());
});

server.listen(3000, hostname, () => {
    console.log('App is runnig on: http://localhost:3000');
});
