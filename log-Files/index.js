const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer(
    (req, res) => {

        if (req.url === '/favicon.ico') { return res.end(); }
        const parsedUrl = url.parse(req.url, true);
        console.log(parsedUrl);
        
        const logEntry = `Request received at : ${new Date().toString()} for URL : ${req.url}\n`;
        fs.appendFile('server_log.txt', logEntry, (err, data) => {

            switch (parsedUrl.pathname) {
                case '/':
                    res.end(`Welcome ${parsedUrl.query.name}!\n`);
                    break;
                case '/about':
                    res.end('This is the About Page.\n');
                    break;
                    case '/search':
                    res.end(`Search results for: ${parsedUrl.query}\n`);
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