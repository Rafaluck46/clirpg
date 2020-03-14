
require('dotenv').config();
const uuidv4 = require('uuid/v4');
const net = require('net');
const socket = new net.Socket();
const { SERVER_IP, PORT } = process.env;
const spinner = require('./../components/spinner')

const headers = { 'uuid': uuidv4() };

module.exports.headers = headers;

module.exports.initializeConnection = () => {

    return new Promise((resolve, reject) => {

        let client = socket.connect(PORT, SERVER_IP, function () {
            const objHandShake = { headers, body: null }
            client.write(JSON.stringify(objHandShake));
            console.log('Connected HandShake');
            spinner.stop();

            resolve(client);
        });

        client.on('error', (err) => {
            reject(err);
        });

    });
};

