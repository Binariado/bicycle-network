const Bicycle = require('../../models/bicycle');

exports.bicycle_list = function(req, res){
  res.status(200).json({
    bicicle: Bicycle.allBicycle
  });
}

exports.bicycle_create = function(req, res){
  const bicy = new Bicycle(req.body.id, req.body.color, req.body.model);
  bicy.location = [req.body.lat, req.body.lng];

  Bicycle.add(bicy);

  res.status(201).json({
    bicycle: bicy
  })
}

exports.bicycle_delete = function(req, res){
  const bicy = Bicycle.findById(req.body.id);

  if(!bicy){
    res.status(200).json({
      bicycle: "not foud",
    })
  }

  Bicycle.removeById(req.body.id);
  
  res.status(204).send()
}