const http = require("http");
const mongodb = require("mongodb");
let db;         
const connectionString = "mongodb+srv://NEO:Ruqo77HUuqKvySrz@neo.decd3sr.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB",err);
    else {

        console.log("mongoDB muofaqtlik ulandi");
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
        console.log(`The server in running succesfuli on port: ${PORT}, http://localhost:${PORT}`);
       });

    }
});


