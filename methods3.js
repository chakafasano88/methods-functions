// Storing Parameters for Photos Object
function Photo(fileName, location) {
  this.fileName = fileName;
  this.location = location;
};

// Album Object containing an array
function Album(){
  this.photos = [];
};

// Prototype that pushes photo info to an array
Album.prototype.addPhoto = function(photo) {
  this.photos.push(photo)
};

var Paris = new Photo("croissant", "cafe");
var Cannes = new Photo ("movie", "filmFestival")
var Rome = new Photo ("pizza", "pizzaplace");
var Florence = new Photo ("Rembrandt", "museum" );
var Dresden = new Photo ("architecture", "church");
var Munich = new Photo("beer", "beerhaus");

//Created new Albums containing photo variables
var France = new Album()
France.addPhoto(Paris, Cannes);

var Italy = new Album()
Italy.addPhoto(Rome, Florence);

var Germany = new Album()
Germany.addPhoto(Munich, Dresden);

//
Album.prototype.getPhoto = function(num){
  console.log(this.photos[num]);
};

Album.prototype.listItems = function(){
  for (var i = 0; i < this.photos.length; i++){
    console.log(this.photos[i]);
  }
};

France.addPhoto();
