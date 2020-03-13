const net = require('net');
const readline = require('readline');

let bossName = ['Radamantis'];

let line = readline.createInterface({
    input: process.stdin
});

let clients = [];

let server = net.createServer((socket) => {
    socket.on('data', (chunk) => {
        let request = JSON.parse(chunk.toString('utf-8'));
        let clientsocket = clients.find(x => x === request.headers.uuid);
        if (!clientsocket) clients.push({ uuid: request.headers.uuid, socket: socket });
    });
});

line.on('line', (input) => {
    let client = clients.find(x => x.uuid == input)
    client.socket.write(`${bossName} says: ${input}`);
});

server.listen({ host: '0.0.0.0', port: 3000 }, () => {
    console.log('server is on.');
});
