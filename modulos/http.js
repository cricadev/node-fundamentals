const http = require("http");

const router = (req, res) => {
  console.log("Nueva petición");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, qué tal");
      res.end();
      break;

    default:
      res.write("Error 404: No sé lo que quieres");
      res.end();
  }

  // res.writeHead(201, { "Content-Type": "text/plain" });

  // res.write("Hola, ya sé usar HTTP de NodeJS");
  // res.end();
};
http.createServer(router).listen(3000);
