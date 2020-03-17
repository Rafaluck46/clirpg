
const dungeonCli = require('./components/title');
const connection = require('./connection/connection');
const readline = require('readline');

let run = async () => {

    await dungeonCli.initializeDungeonCli();
    let client = await connection.initializeConnection();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.addListener("line", (input) => {
        let headers = connection.headers;
        const objHandShake = {
            headers, body: {
                message: input
            }
        }
        client.write(JSON.stringify(objHandShake));
    });

    client.on('data', function (data) {
        console.log(data.toLocaleString());
    });

    client.on('close', function () {
        console.log('Connection closed');
    });
}

run();
