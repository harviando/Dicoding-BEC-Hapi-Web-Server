console.log("I will be cloud architect that work remotely!");

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5001,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
}

init();