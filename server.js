const http = require("http");
const app = require("./app");


const server = http.createServer(app);
let PORT = 2001;
server.listen(PORT, function () {
console.log(`The server in running succesfuli on port: ${PORT}, http://localhost:${PORT}`);
});


// const mongodb = require("mongodb");
// let db;         
// const connectionString = "mongodb://NEO@neo.decd3sr.mongodb.net:27017/reja";

// mongodb.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }, (err, client) => {
//     if (err) console.log("ERROR on connection MongoDB");
//     else {

//         console.log("mongoDB muofaqtlik ulandi");
//         module.exports = client;
//         const app = require("./app");
//         const server = http.createServer(app);
//         let PORT = 2001;
//         server.listen(PORT, function () {
//         console.log(`The server in running succesfuli on port: ${PORT}, http://localhost:${PORT}`);
//        });

//     }
// });


