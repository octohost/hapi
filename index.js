var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('0.0.0.0', 8000);

// Add the route
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        reply('hello octohost');
    }
});

// Start the server
server.start();
