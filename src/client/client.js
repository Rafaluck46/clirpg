require('dotenv').config();

const net = require('net');
const uuidv4 = require('uuid/v4');
const socket = new net.Socket();
const readline = require('readline');
const { SERVER_IP, PORT } = process.env;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const headers = {
    'uuid': uuidv4()
};

let client = socket.connect(PORT, SERVER_IP, function () {
    const objHandShake = {
        headers,
        'body': null
    }
    client.write(JSON.stringify(objHandShake));
    console.log('Connected HandShake');
});

rl.addListener("line", (input) => {
    client.write(input);
    console.log(input.toLocaleString());
});

client.on('data', function (data) {
    console.log(data.toLocaleString());
});

client.on('close', function () {
    console.log('Connection closed');
});