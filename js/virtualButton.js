var VirtualButton = function(name) {
  this.name = name;
};

VirtualButton.prototype.EventHappened = function(event) {
  console.log(typeof(this), event)
};
