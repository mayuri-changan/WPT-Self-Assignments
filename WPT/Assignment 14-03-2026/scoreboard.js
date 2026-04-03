// <!-- // Design and implement a web page that displays a live scoreboard. Use AJAX
// // (XMLHttpRequest) to retrieve and interpret JSON data from a URL provided by the faculty-->
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/data') {
        fs.readFile('score.json', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h2>Live Scoreboard</h2>
            <button onclick="loadData()">Load</button>
            <div id="result"></div>

            <script>
                function loadData() {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", "/data", true);

                    xhr.onload = function() {
                        let data = JSON.parse(this.responseText);
                        let output = "";

                        data.forEach(m => {
                            output += m.match + " : " + m.score + "<br>";
                        });

                        document.getElementById("result").innerHTML = output;
                    };

                    xhr.send();
                }
            </script>
        `);
    }

}).listen(3000);

console.log("http://localhost:3000");
