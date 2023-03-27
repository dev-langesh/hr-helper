const http = require("http");
const app = require("./app");
const { connectDb } = require("../lib/connectDb");
const { loadDefaultAdminData } = require("../lib/admin/loadDefaultAdminData");

// configuring env
require("dotenv").config();

const PORT = process.env.PORT;

// connecting to db
connectDb();

// loading default admin data
loadDefaultAdminData();

// creating server
const server = http.createServer(app);

server.listen(PORT, () => console.log(`server is ready at ${PORT}`));
