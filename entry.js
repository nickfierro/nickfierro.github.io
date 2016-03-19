//constructor
var MenuItem = function(name){
  this.name = name;
  this.subMenus = []
};

MenuItem.prototype.addSubMenu = function(subMenuItem) {
  if (!(subMenuItem instanceof MenuItem)) return;

  this.subMenus.push(subMenuItem)
};

//constructor
var HardwareScreen = function(name, cols, rows) {
  if (cols < 1 || rows < 1) return;
  this.name = name;
  this.rows = rows;
  this.cols = cols;
  this.interface = undefined;
};

HardwareScreen.prototype.setvirtualInterface = function(str) {
  this.interface = document.getElementById(str);
};

HardwareScreen.prototype.renderText = function(str) {
  if (str.length > this.cols) {
    textFinal = str.substring(0, this.cols)
  } else {
    textFinal = str
  };
  // can i not return this? or do i have to clear it from memory after?
  return textFinal
};

HardwareScreen.prototype.clearScreen = function(){
  this.interface.value = "";

};

HardwareScreen.prototype.setText = function(str) {
  // clear
  this.interface.value = "";

  // html-specific interface
  var finalText = str;
  this.interface.value = finalText;

};

HardwareScreen.prototype.appendText = function(str) {
  // html-specific interface
  var str = str;
  if (this.interface.value.length > 1){ this.interface.value += "\n"};
  this.interface.value += this.renderText(str)

};

function displayMenu(menuItem, hardwareScreen) {
  //sanity check
  // if (!(MenuItem instanceof MenuItem)) return;
  // if (!(HardwareScreen instanceof HardwareScreen)) return;
  // calls renderText on each entry
  // calls setText on first entry

  // loops through rest of main menu
  for (i = 0; i < menuItem.subMenus.length; i++) {
    var item = menuItem.subMenus[i];
    console.log("displayMenu", item.name);
    // safety check
    if (item > hardwareScreen.rows) break;

    // append menu item
    hardwareScreen.appendText(item.name)
    }
  // switch()
};

//enum
var HardwareEnum = {
  Button0 : "Button0",
  Button1 : "Button1",
  Button2 : "Button2",
  Button3 : "Button3",
  Button4 : "Button4",
  Button5 : "Button5",
  Button6 : "Button6",
  Button7 : "Button7",
};

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

var VirtualEnum = {
  Red : "Red",
  Green : "Green",
  Blue : "Blue",
  Yellow : "Yellow",
  Up : "Up",
  Down : "Down",
  Left : "Left",
  Right : "Right"
};
// screen.displayText("text3")

var VirtualButton = function(name) {
  this.name = name;
};

VirtualButton.prototype.EventHappened = function(event) {
  console.log(typeof(this), event)
};

function mapButtons(){
  for (i = 0; i < hardwareButtons.length; i++){
    hardwareButtons[i].name;
  }
};

var hardwareButtons = [
  new HardwareButton(HardwareEnum.Button0),
  new HardwareButton(HardwareEnum.Button1),
  new HardwareButton(HardwareEnum.Button2),
  new HardwareButton(HardwareEnum.Button3),
  new HardwareButton(HardwareEnum.Button4),
  new HardwareButton(HardwareEnum.Button5),
  new HardwareButton(HardwareEnum.Button6),
  new HardwareButton(HardwareEnum.Button7)
];

var virtualButtons = [
  new VirtualButton(VirtualEnum.Up),
  new VirtualButton(VirtualEnum.Right),
  new VirtualButton(VirtualEnum.Down),
  new VirtualButton(VirtualEnum.Left),
  new VirtualButton(VirtualEnum.Blue),
  new VirtualButton(VirtualEnum.Green),
  new VirtualButton(VirtualEnum.Yellow),
  new VirtualButton(VirtualEnum.Red)
];

// //custom event test
// var hwButtonPress = new Event("hwButtonPress", {"bubbles":true, "cancelable":false});
// console.log('hwButtonPress', hwButtonPress);

var imclicked = function(){
  console.log("i'm clicked!!!!")
};

// add click event to hardware buttons
for(i = 0; i < hardwareButtons.length; i++){
  // document.getElementById(hardwareButtons[i].name).addEventListener("click", imclicked);
  hardwareButtons[i].vbutton = virtualButtons[i];
  document.getElementById(hardwareButtons[i].name).addEventListener('click', function(ev) {
    console.log(ev)
  })
};
//instanciate
var mainMenu = new MenuItem("Main");

var subMenu1 = new MenuItem("Map Buttons");

var subMenu2 = new MenuItem("View Notifications");

mainMenu.addSubMenu(subMenu1);
mainMenu.addSubMenu(subMenu2);
console.log('mainMenu', mainMenu);

//instanciate
var display = new HardwareScreen("display", 40, 4);
console.log('display', display);

display.setvirtualInterface('mydisplay');
console.log('interface',  display.interface);


displayMenu(mainMenu, display);

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
//for console testing only
window.myWeb3Instance = web3;

function getCoinbase(){
  var coinbase = web3.eth.coinbase;
  console.log('coinbase', coinbase);
  display.appendText(coinbase)
};

function getBlock(){
  var blockNumber = web3.eth.blockNumber;
  console.log('blockNumber', blockNumber);
  display.appendText(blockNumber)
};

console.log('web3', web3);
