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
            return 'Home page cannot be accessed by using this method.';
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
            return 'About page cannot be accessed by using this method.';
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Page is not found.';
        }
    },
];

module.exports = routes;