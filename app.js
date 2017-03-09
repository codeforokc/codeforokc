var express = require("express");
var logfmt = require("logfmt");

var app = express();
app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/docs'));

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
});

console.log('Express server started - port: ' + port);

