const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Home page.';
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            const requestMethod = request.method;
            return `Home page cannot be accessed by using ${requestMethod} method.`;
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page.';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            const requestMethod = request.method;
            return `About page cannot be accessed by using ${requestMethod} method.`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            const requestPath = request.path;
            return `${requestPath} endpoint is not found.`;
        }
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            const { username = 'guest' } = request.params;
            return `Hi! Welcome to ${username} profile page.`;
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'Anon' } = request.params;
            return `Hello! ${name}.`;
        }
    },
];

module.exports = routes;