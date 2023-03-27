const http = require("http");
const app = require("./app");
const { connectDb } = require("../lib/connectDb");

require("dotenv").config();

const PORT = process.env.PORT;

connectDb();

const server = http.createServer(app);

server.listen(PORT, () => console.log(`server is ready at ${PORT}`));
