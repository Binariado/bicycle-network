const Bicycle = require('../models/bicycle');

exports.bicycle_list = function(req, res){
  res.render('bicycle/index',{bicys:Bicycle.allBicycle});
}

exports.bicycle_create_get = function(req, res){
  res.render('bicycle/create');
}

exports.bicycle_create_post = function(req, res){
  const bicy = new Bicycle(req.body.id, req.body.color, req.body.model);
  bicy.location = [req.body.lat, req.body.lng];
  Bicycle.add(bicy);

  res.redirect('/bicycles');
}

exports.bicycle_update_get = function(req, res){
  const bicy = Bicycle.findById(req.params.id)
  res.render('bicycle/update',{bicy});
}

exports.bicycle_update_post = function(req, res){
  const bicy = Bicycle.findById(req.params.id);
  bicy.id = req.body.id;
  bicy.color = req.body.color;
  bicy.model = req.body.model;
  bicy.location = [req.body.lat, req.body.lng];

  res.redirect('/bicycles');
}

exports.bicycle_delete_post = function(req, res){
  Bicycle.removeById(req.body.id);
  
  res.redirect('/bicycles');
}
