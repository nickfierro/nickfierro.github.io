//constructor
var MenuItem = function(name){
  this.name = name;
  this.subMenus = [];
  this.subMenuIndex = 0
};

MenuItem.prototype.addSubMenu = function(subMenuItem) {
  if (!(subMenuItem instanceof MenuItem)) return;
  this.subMenus.push(subMenuItem)
};

// function nextItem() {
//     i = i + 1; // increase i by one
//     i = i % arr.length; // if we've gone too high, start from `0` again
//     return arr[i]; // give us back the item of where we are now
// }

MenuItem.prototype.sortUp = function(){
  var i = this.subMenuIndex;
  i = i + 1; // increase i by one
  i = i % this.subMenus.length; // if we've gone too high, start from `0` again
  this.subMenuIndex = i;
  console.log('subMenuIndex', this.subMenuIndex);
  return this.subMenuIndex + 1; //for selectLine function
};

// function prevItem() {
//     if (i === 0) { // i would become 0
//         i = arr.length; // so put it at the other end of the array
//     }
//     i = i - 1; // decrease by one
//     return arr[i]; // give us back the item of where we are now
// }

MenuItem.prototype.sortDown = function() {
  var i = this.subMenuIndex;
  if (i === 0) { // i would become 0
    i = this.subMenus.length; // so put it at the other end of the array
  }
  i = i - 1; // decrease by one
  this.subMenuIndex = i;
  console.log('subMenuIndex', this.subMenuIndex);
  return this.subMenuIndex + 1; // for selectLine function
};
