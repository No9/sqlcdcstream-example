var io = require('socket.io').listen(8090);
var mystream = require('sqlcdcstream')

var stm = mystream("Driver={SQL Server Native Client 11.0};Server=(local);Database=nodejstest;Trusted_Connection={Yes}", "dbo", "MOVIES", 1000)
var bsocket; 
stm.on('data', function(data){
		bsocket.broadcast.emit('cdcevent', data);
});

io.sockets.on('connection', function (socket) {
		  bsocket = socket;
});
		