function ioConnection(io) {io.on('connection', function(socket) { 
        
	console.log("Initiation...") 
	
	

	setInterval(function(){
	var raz = Math.floor(Math.random() * 40) + 1
	var dwa = Math.floor(Math.random() * 40) + 1
	var trzy = Math.floor(Math.random() * 40) + 1
	var cztery = Math.floor(Math.random() * 40) + 1
	var piec = Math.floor(Math.random() * 40) + 1
	var szesc = Math.floor(Math.random() * 40) + 1
        socket.emit('one', {'one': raz});
	socket.emit('two', {'two': dwa});
	socket.emit('three', {'three': trzy});
	socket.emit('four', {'four': cztery});
	socket.emit('five', {'five': piec});
	socket.emit('six', {'six': szesc});
    }, 1000);

});}

module.exports = ioConnection;
