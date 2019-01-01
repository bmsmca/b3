var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cart');

var Cart = mongoose.model('Cart_online', mongoose.Schema({
	item_no:String,
	name:String,
	price:String,
	quantity:String,
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/cart', function(req, res){
	Cart.find(function(err, carts){
		if(err)
			res.send(err);
		res.json(carts);
	});
});

app.get('/api/cart/:id', function(req, res){
	Cart.findOne({_id:req.params.id}, function(err, cart){
		if(err)
			res.send(err);
		res.json(cart);
	});
});

app.post('/api/cart', function(req, res){
	Cart.create( req.body, function(err, cart){
		if(err)
			res.send(err);
		res.json(cart);
	});
});

app.delete('/api/cart/:id', function(req, res){
	Cart.findOneAndRemove({_id:req.params.id}, function(err, cart){
		if(err)
			res.send(err);
		res.json(cart);
	});
});

app.put('/api/cart/:id', function(req, res){
	var query = {
		item_no:req.body.item_no,
		name:req.body.name,
		price:req.body.price,
		quantity:req.body.quantity,
	};
	Cart.findOneAndUpdate({_id:req.params.id}, query, function(err, cart){
		if(err)
			res.send(err);
		res.json(cart);
	});
});

app.listen(3001, function(){
	console.log('server is running on port 3001..');
});
