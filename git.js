/**
 * Created by liuyang on 15/12/4.
 */
var process = require('child_process');
var http = require("http");


http.createServer(function (request, response) {

    process.exec('git pull', function (err) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        if (err) {
            response.write("pull error");
        } else {
            response.write('pull success');
            console.log('pull done!');
        }
        response.end();
    });

}).listen(8888);
