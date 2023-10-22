console.log("I will be cloud architect that work remotely!");

const Hapi = require('@hapi/hapi');

const init = async () => {

    // Server init
    const server = Hapi.server({
        port: 5001,
        host: 'localhost',
    });

    // Server start
    await server.start();
    console.log(`Server is running on ${server.info.uri}`);

    //Server route
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return 'Home page.';
            }
        },
        {
            method: 'GET',
            path: '/about',
            handler: (request, h) => {
                return 'About page.';
            }
        },
    ]);
}

init();