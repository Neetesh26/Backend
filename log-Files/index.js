const http = require('http');
const fs = require('fs');

const myServer = http.createServer(
    (req, res) => {

        if (req.url === '/favicon.ico') { return res.end(); }

        const logEntry = `Request received at : ${new Date().toString()} for URL : ${req.url}\n`;
        fs.appendFile('server_log.txt', logEntry, (err, data) => {

            switch (req.url) {
                case '/':
                    res.end('Welcome to the Home Page!\n');
                    break;
                case '/about':
                    res.end('This is the About Page.\n');
                    break;
                default:
                    res.end('404 Not Found\n');

            }
        });

    }
)
myServer.listen(3000, () => {
    console.log('Server is listening on port 3000');
});