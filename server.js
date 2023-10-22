console.log("I will be cloud architect that work remotely!");

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {

    // Server init
    const server = Hapi.server({
        port: 5001,
        host: 'localhost',
    });

    //Server route
    server.route(routes);

    // Server start
    await server.start();
    console.log(`Server is running on ${server.info.uri}`);

}

init();