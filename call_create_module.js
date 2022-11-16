const http = require('http');
const url = require('url');

const date_time = require('./create_module');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true).query;
    let txt = `${q.year} ${q.month}`;
    res.write(`The date and time are currently: ${date_time}`);
    res.end(txt)
}).listen(8000);