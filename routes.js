const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const { name = 'guest', location = 'earth' } = request.query;

            return `Hello ${name} from ${location}, Welcome to Home page.`;
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
            const { lang = 'eng' } = request.query;

            if (lang === 'id') {
                return `Halo! ${name}, Apa kabar?`;
            }

            return `Hello! ${name}, How are You?`;
            
        }
    },
    {
        method: 'POST',
        path: '/users/register',
        handler: (request, h) => {
            const {username, password} = request.payload;

            return `Hello! ${username}, Your password is ${password}.`;
            
        }
    },
    {
        method: 'GET',
        path: '/checking/response',
        handler: (request, h) => {
            return h.response('Done!')
                    .code(201)
                    .header('X-Custom', 'custom-value')
                    .type('text/plain');
            
        }
    },
];

module.exports = routes;