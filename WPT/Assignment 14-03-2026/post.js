// 6. Build a simple Node.js web application serving both HTTP GET and POST methods


const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.write("GET Req Received");
        res.end();
    }

    if (req.method === "POST") {
        res.write("POST Req Received");
        res.end();
    }

});

server.listen(3000, () => console.log("Server running on port 3000"));
