import * as SR from '@microsoft/signalr';

let connection;

const connect = async () => {
    connection = fetch(`${process.env.REACT_APP_API}/negotiate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(initialiseConnection)
        .catch(err => {
            throw new Error('Unable to negotiate connection to SignalR');
        });
    return connection;
};

const initialiseConnection = async ({ url, accessToken }) => {
    connection = new SR.HubConnectionBuilder()
        .configureLogging(SR.LogLevel.Critical)
        .withUrl(url, { accessTokenFactory: () => accessToken })
        .withAutomaticReconnect()
        .build();

    connection.onclose(() => {
    })
    connection.onreconnecting(err => {
        console.log('signalr reconnecting because: ', err)
    });
    await connection.start();

    return connection;
};

const disconnect = async () => {
    return connection.stop();
}

const signalr = {
    connect, disconnect
}

export default signalr;