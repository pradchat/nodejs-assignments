var http = require('http'),
    url = require('url'),
    routes = require('./app.constants'),
    getUrlPath = function(reqUrl) {
        return url.parse(reqUrl).pathname;
    },
    handleResponse = function(res, config) {
        res.writeHead(config.statusCode);
        res.end(JSON.stringify(config.response));
    };

var server = http.createServer(function(req, res) {
    switch(getUrlPath(req.url)) {
        case routes.HOME:
            handleResponse(res, {
                statusCode: 200,
                response: { message: 'This is a `Hello World API`, Welcome to the `Homework Assignment #1`' }
            });
            break;
        default:
            handleResponse(res, {
                statusCode: 404,
                response: { message: 'url not found' }
            });
    }
});

server.listen(3000, function() {
    console.log('server listening at port 3000');
});
