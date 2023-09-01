const http = require("http");
// on importe le fichier app sur la base server
const app = require("./app");
//on indique au serveur le port sur lequel il devra tourner
app.set("port", process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);
