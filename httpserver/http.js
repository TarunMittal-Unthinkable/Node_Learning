const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/") {
    res.end("Hello from Unthinkable Solution");
  } else if (req.url == "/about") {
    res.end("Hello from aboutus page");
  } else if (req.url == "/contact") {
    res.end("Hello from contactus page");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(objData[0].firstName);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404, Page Does not Exit</h1>");
  }
});
server.listen(3000, () => {
  console.log("Server run on 3000");
});
