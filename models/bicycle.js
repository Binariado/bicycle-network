const Bicycle = function (id, color, model, location){
  this.id = id;
  this.color = color;
  this.model = model;
  this.location = location;
}

Bicycle.prototype.toString = function(){
  return `id: ${this.id} | color: ${this.color}`;
}

Bicycle.allBicycle = [];
Bicycle.add = function(aBicy){
  Bicycle.allBicycle.push(aBicy);
}

Bicycle.findById = function(aBicyId){
  const bicy = Bicycle.allBicycle.find(x => x.id == aBicyId);
  if(bicy)
    return bicy;
  else 
    throw new Error (`bike with id: ${aBicyId} not found`);
}

Bicycle.removeById = function(aBicyId){
  const bicy = Bicycle.findById(aBicyId);
  for (let index = 0; index < Bicycle.allBicycle.length; index++) {
    const element = Bicycle.allBicycle[index];
    if(element.id == aBicyId){
      Bicycle.allBicycle.splice(index, 1);
      break;
    }
  }
}

const a = new Bicycle(1, 'red', 'veloz', [10.982342, -74.836292]);
const b = new Bicycle(2, 'blue', 'veloz', [10.983184, -74.775524]);

Bicycle.add(a);
Bicycle.add(b);

module.exports = Bicycle;