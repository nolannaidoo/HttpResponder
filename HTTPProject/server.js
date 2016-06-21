//Nolan Naidoo
//19 June 2016
//Tools Development Team Lead

//Ive answered this assessment using the following modules: NodeJS, Express, MongoDB, EJS, Body-Parser
//Please start the database server before running this scripts
//On first start, the database will be empty

//Nice to haves: form input validation (forward slash, correct formatting), clientside JS interaction to notify user of existing records

const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))
var httpreq = require(__dirname + '/routes/httpreq'); 

//Open database connection, keep database object exposed and start the app server on port 2001
//On first start
MongoClient.connect('mongodb://localhost:27017/httpproject', (err, database) => {
  if (err) return console.log(err)
 //Keeping a relation to the database object for future use across routes
  var Db = function(request, response, next){
    request.mongoDb = database;
    next();
  };
  
  //Define routing - /* is our response target for consumption
	app.get('/', Db, httpreq.index);	  
	app.get('/add', httpreq.addpage);	
	app.get('/addErr', httpreq.addpageerr);
	app.post('/add',Db, httpreq.savepage);	
	app.get('/delete/:id', Db, httpreq.deletereq);
	app.get('/edit/:id', Db , httpreq.editpage);
	app.post('/edit/:id', Db,httpreq.savereq);
	app.get('/*', Db, httpreq.zones); //Define this route last as this will route for user HTTP Requests, if not defined last, this will over ride prior routes with the same base
	app.post('/*', Db, httpreq.zones);
	app.put('/*', Db, httpreq.zones);
	
	//start the app server
  app.listen(2001, () => {
    console.log('Server started on 2001')
  })
})



