const http = require('http');
const fs = require('fs')
const port = 3000;
const port1 = 3001;
const port2 = 3002;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        };
        res.end();
    })
});
const server1 = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    fs.readFile('links.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        };
        res.end();
    })
});
const server2 = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    fs.readFile('about.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        };
        res.end();
    })
});

server.listen(port, function(error) {
    if(error) {
        console.log('404: something went wrong', error)
    } else {
        console.log('Server is istening on port ' + port)
    }
});
server1.listen(port1, function(error) {
    if(error) {
        console.log('404: something went wrong', error)
    } else {
        console.log('Server1 is istening on port ' + port1)
    }
});
server2.listen(port2, function(error) {
    if(error) {
        console.log('404: something went wrong', error)
    } else {
        console.log('Server2 is istening on port ' + port2)
    }
})