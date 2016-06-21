var ObjectId = require('mongodb').ObjectID;

//Route to homepage - list all
exports.index = function(req, res){
	var db = req.mongoDb;
  db.collection('httprequests').find().toArray(function(err, result) {
  if (err) return console.log(err)    
    res.render('homepage.ejs', {data: result})
	})
};

//Route to zone routes
exports.zones = function(req, res){
console.log('Log: ' + req.url)
var db = req.mongoDb;
db.collection('httprequests').find({'urlext' : req.url}).toArray(function(err, result) {
  if (err) return console.log(err)  
	  if (result.length > 0){
		  //set the response type, eg, xml, json, text, text
		  res.status(result[0].statuscode)
		  if (result[0].datatype == 'JSON')		  
			  res.setHeader('Content-Type', 'application/json');
		  else if (result[0].datatype == 'XML')
			  res.setHeader('Content-Type', 'text/xml');
		  else if (result[0].datatype == 'HTML')
			  res.setHeader('Content-Type', 'text/html');
		  
		  res.end(result[0].reqres);}
	  else {res.sendStatus(404)}
	})
	};

//Route to add new http req page
exports.addpage = function(req, res){
  res.render('addReq');
};

//Route to add new http req page ERROR page, should update to use JS to notify user
exports.addpageerr = function(req, res){
  res.render('addReqerr');
};

//Route to save a new http request
exports.savepage = function(req,res){    
    var input = JSON.parse(JSON.stringify(req.body));    
    var db = req.mongoDb;
	console.log(input);  

		//check if urlext already exists, if yes return to savepage **need to add clientside js to notify user
		var db = req.mongoDb;
		db.collection('httprequests').find({'urlext' : input.urlext}).toArray(function(err, result) {
  if (err) return console.log(err)  
	  if (result.length > 0){
		  res.status(200).redirect('/addErr');}
	  else {
		  db.collection('httprequests').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  });}
	})
		//
       
};

//Route to edit http request
exports.editpage = function(req, res){    
    var id = req.params.id;
    var db = req.mongoDb;
	console.log('ID: ' + id)
	db.collection('httprequests').find({'_id' : new ObjectId(id)}).toArray(function(err, result) {
  if (err) return console.log(err)  
	  //console.log(result[0])
	  res.render('editReq',{data:result});
	})   
};

//Route to save an editted http request
exports.savereq = function(req,res){    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;    
    
      var db = req.mongoDb;
	console.log(input);
        
       db.collection('httprequests').update({'_id' : new ObjectId(id)}, {$set: {'statuscode': input.statuscode, 'datatype': input.datatype, 'reqres': input.reqres}}, function(err, result) {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')  
			});
};

//Route to delete a http request
exports.deletereq = function(req,res){          
     var id = req.params.id;    
      var db = req.mongoDb;        
       db.collection('httprequests').remove({'_id' : new ObjectId(id)}, function(err, result) {
    if (err) return console.log(err)
    console.log('removed from database')
    res.redirect('/')  
			}); 
     
};


