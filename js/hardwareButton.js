var HardwareButton = function(name) {
  this.name = name;
  this.button = document.getElementById(name);
  this.vbutton = undefined;
};

HardwareButton.prototype.forwardSignal = function(event) {
  this.virtualButton.EventHappened(event.name)
};

HardwareButton.prototype.setVirtualButton = function(vButton) {
  // sanity check
  if (!(vButton instanceof VirtualButton)) return;

  // set value
  this.virtualButton = vButton
};
