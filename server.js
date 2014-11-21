var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

/** Static files configuration **/
var static_path = __dirname + '/static';
app.use(express.static(static_path));

/* body parser fixed configuration */
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  	extended: true
}));


/**  API **/
app.get('/', function (req, res) {
	res.sendFile(static_path + '/offline.html');
});

app.post('/save', function(request, response){
	// aqui vai salvar o CSV...
	console.log("Peguei o JSON!: ", request.body);      // your JSON
	response.send(request.body);    // echo the result back
});

/** Embedded Server **/
var server = app.listen(3000, function () {

	var host = server.address().address
	var port = server.address().port

	console.log('Aplicação rodando em: http://%s:%s', host, port)

})