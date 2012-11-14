var fs = require('fs');
var url=require('url');
var path    =   require('path');
<<<<<<< HEAD
=======
//this is server function to handle http request ..
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
var server = require('http').createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;
    var ext      = path.extname(pathname).toLowerCase();

    console.log(pathname+":"+ext.length);
     if(ext.length==0)
     {
<<<<<<< HEAD

=======
     	console.log("done!!!!");
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
        fs.readFile('./newnowclient.html', 'utf-8', function(error, content) {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(content);
        });
    }
<<<<<<< HEAD
    else if(ext===".css"){
    	console.log("done!!!! css:"+pathname+"\n");
        fs.readFile( __dirname + pathname,function(err,data){
	  	if(err){
	  		console.log(err);
	  		res.writeHead(500);
	  		return res.end('error in loading...');
	   	}

        
	   	res.writeHead(200, {'Content-Type' : 'text/css'});
	   	res.end(data);
	   	console.log(data);
	  });
    }
=======
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
    else if(ext===".js"){
    	console.log("done!!!! js");
        fs.readFile(__dirname + pathname,function(error, content) {
            res.writeHead(200, {'Content-Type' : 'application/javascript'});
            res.end(content);
        });
    }
<<<<<<< HEAD
    else if(ext===".png"){
    	console.log("done!!!! png");
        fs.readFile( __dirname + pathname,function(err,data){
		  	if(err){
		  		console.log(err);
		  		res.writeHead(500);
		  		return res.end('error in loading...');
		   	}

        
	   	res.writeHead(200, {'Content-Type' : 'image/png'});
	   	res.end(data);
	   	console.log(data);
	  });
    }
    else if(ext===".gif"){
    	console.log("done!!!! png");
        fs.readFile( __dirname + pathname,function(err,data){
		  	if(err){
		  		console.log(err);
		  		res.writeHead(500);
		  		return res.end('error in loading...');
		   	}

        
	   	res.writeHead(200, {'Content-Type' : 'image/gif'});
	   	res.end(data);
	   	console.log(data);
	  });
    }
    
});

server.listen(8080);
=======
    
});

var  port=(process.env.PORT || 8080)
server.listen(port);

// import node.js lib like now.js and ntwiter
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
var nowjs = require("now");
var everyone = nowjs.initialize(server);

var twitter = require('ntwitter');
var credentials = require('./credentials.js');

<<<<<<< HEAD

=======
//create new twiiter client
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});
  

<<<<<<< HEAD

=======
//this is function use to stream tweet
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
function streamme(room){
  t.stream(
    'statuses/filter',
    { track: room },
    function(stream) {
        stream.on('data', function(data) {
<<<<<<< HEAD
          if(data && data.user.profile_image_url){ 
	           var newRoom=room.join(',');
	           var obj=Object();
	            obj.text=data.text;
	            obj.pic=data.user.profile_image_url;
=======
          if(data){ 
	           var newRoom=room.join(',');
	           var obj=Object();
	            obj.text=data.text;
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
	            if(data.coordinates && data.coordinates.coordinates){
	            	obj.coordinates=data.coordinates.coordinates;
	             } else if(data.place && data.place.bounding_box){
			      var place = data.place.bounding_box.coordinates[0][0];
			      	obj.coordinates=place;
			     }
<<<<<<< HEAD

=======
			   console.log(obj.coordinates);
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
			   var tweet=JSON.stringify(obj);
	           nowjs.getGroup(newRoom).now.receiveMessage("chetan", tweet);
         }              
        });
    }
);	
}

<<<<<<< HEAD
nowjs.on("connect", function(){

=======

nowjs.on("connect", function(){
  console.log("Joined: " + this.now.name);
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
  this.now.room="love,hate";
  
  nowjs.getGroup(this.now.room).addUser(this.user.clientId);
  var rooms=this.now.room.split(',');
  streamme(rooms);
   
});

nowjs.on("disconnect", function(){
<<<<<<< HEAD

=======
  console.log("Left: " + this.now.name);
>>>>>>> 9ee464c37cda599039cd91ebde98024c6110d89f
});


everyone.now.distributeMessage = function(message){
	//console.log(message);
  everyone.now.receiveMessage(this.now.name, message);
};


everyone.now.changeRoom = function(newRoom){
  //this.now.distributeMessage("[leaving " + this.now.room + "]");
  nowjs.getGroup(this.now.room).removeUser(this.user.clientId);
  
  
  var rooms=newRoom.split(',');
  this.now.room=newRoom;
  nowjs.getGroup(newRoom).addUser(this.user.clientId);
  streamme(rooms);
  
}