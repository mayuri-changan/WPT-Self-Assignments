// 5. Write a program to create a new file and write some content to it in synchronous mode and
// read and display file contents on standard output in async mode
const fs = require("fs");


fs.writeFileSync("data.txt", "Hello user!");


fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
