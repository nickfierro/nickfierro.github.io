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

function mapButtons(){
  for(i = 0; i < hardwareButtons.length; i++){
    // document.getElementById(hardwareButtons[i].name).addEventListener("click", imclicked);
    hardwareButtons[i].vbutton = virtualButtons[i];
    document.getElementById(hardwareButtons[i].name).addEventListener('click', function(ev) {
      console.log(ev)
    })
  }
};

mapButtons();
// //custom event test
// var hwButtonPress = new Event("hwButtonPress", {"bubbles":true, "cancelable":false});
// console.log('hwButtonPress', hwButtonPress);

var imclicked = function(){
  console.log("i'm clicked!!!!")
};

//instanciate
var mainMenu = new MenuItem("Main");

var subMenu1 = new MenuItem("Map Buttons");
var subMenu2 = new MenuItem("View Notifications");
var subMenu3 = new MenuItem("Account");

var subMenu3Menu1 = new MenuItem("Get Coinbase");
subMenu3Menu1.addAction(getCoinbase);

var subMenu3Menu2 = new MenuItem("Get Block Number");
var subMenu3Menu3 = new MenuItem("Get Balance");

mainMenu.addSubMenu(subMenu1);
mainMenu.addSubMenu(subMenu2);
mainMenu.addSubMenu(subMenu3);
subMenu3.addSubMenu(subMenu3Menu1);
subMenu3.addSubMenu(subMenu3Menu2);
subMenu3.addSubMenu(subMenu3Menu3);
console.log('mainMenu', mainMenu);

//instanciate
var display = new HardwareScreen("display", 40, 4);
console.log('display', display);

// next step: set lcd as virtual interface
display.setvirtualInterface('mydisplay');
console.log('interface',  display.interface);

display.displayMenu(mainMenu);

//for console testing only
window.myWeb3Instance = web3;

console.log('web3', web3);

function displaySelected(mi) {
//clear screen
display.clearScreen();
display.displayMenu(mi)
};

function sendAction(mi) {
  mi.performAction(mi.actions[0])
};
