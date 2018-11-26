const env = require('./env');
const app = require('./app');
const http = require('http');

// set port number
const port = process.env.PORT || env.PORT;
// set host 
const host = process.env.HOST || env.HOST;
// create server
const server = http.createServer(app);
// initilizing server and start listening it
server.listen(port,host,()=>{
    console.log('listen on '+host+':'+port);
});