// var MenuItem = function(name) {
//   this.name = name
//   this.subMenus = []
// }
//
// MenuItem.prototype.setName = function(newName) {
//   this.name = newName
// }
//
// MenuItem.prototype.addSubMenu = function(subMenuItem) {
//   if !(subMenuItem instanceof MenuItem) return
//
//   this.subMenus.push(subMenuItem)
// }


// var VirtualButton = function(name) {
//   this.name = name
//
// }

// VirtualButton.prototype.EventHappened = function(event) {
//   console.log(typeof(this), event)
// }

// HTML page button click
// <button type="button" id="btnYellowCircle">
// document.getElementById('btnYellowCircle').addEventListener('click', function(ev) {
//   console.log(ev)
// })


// var HardwareButton = function(name) {
//   this.name = name
//   this.virtualButton = undefined
// }

// HardwareButton.prototype.setVirtualButton = function(vButton) {
//   // sanity check
//   if !(vButton instanceof VirtualButton) return
//
//   // set value
//   this.virtualButton = vButton
// }
//
// HardwareButton.prototype.forwardSignal = function(event) {
//   this.virtualButton.EventHappened(event.name)
// }

// var HardwareScreen = function(cols, rows) {
//   if (col < 1 || rows < 1) return
//
//   this.rows = rows
//   this.cols = cols
// }

// HardwareScreen.prototype.setvirtualInterface = function(htmlId) {
//   this.interface = document.getElementById(htmlId)
// }

// HardwareScreen.prototype.renderText = function(str) {
//   if (len(str) > cols) {
//     textFinal = str.substring(0,cols)
//   } else {
//     textFinal = strText
//   }
// }
//
// HardwareScreen.prototype.setText = function(strText) {
//   // clear
//   this.interface.value = ""
//
//   // html-specific interface
//   var finalText = strText;
//   this.interface.value = finalText;
//
// }
//
// HardwareScreen.prototype.appendText = function(strText) {
//   // html-specific interface
//   if (len(this.interface.value) > 0) this.interface.value += "\n"
//   this.interface.value += this.renderText(strText)
//
// }

// function displayMenu(MenuItem, HardwareScreen) {
//   //sanity check
//   if (!(MenuItem instanceof MenuItem)) return;
//   if (!(HardwareScreen instanceof HardwareScreen)) return;
//   // calls renderText on each entry
//   // calls setText on first entry
//   this.HardwareScreen.interface.value = this.HardwareScreen.setText(this.HardwareScreen.renderText(this.MenuItem.subMenus[0].name));
//   // loops through rest of main menu
//   for (i = 1, i < MenuItem.subMenus.length, i++) {
//     if this.MenuItem.subMenus.length < this HardwareScreen.rows return;
//     this.HardwareScreen.interface.value = this.HardwareScreen.appendText(renderText(this.MenuItem.subMenus[i].name))
//   }
//   // calls appendText for each entry
//   // switch()
// }




// var HardwareEnum = {
//   Button0 = "Button0",
//   Button1 = "Button1",
//   Button2 = "Button2",
//   Button3 = "Button3",
//   Button4 = "Button4",
//   Button5 = "Button5",
//   Button6 = "Button6",
//   Button7 = "Button7",
// }
//
// var VirtualEnum = {
//   Red = "Red",
//   Green = "Green",
//   Blue = "Blue",
//   Yellow = "Yellow",
//   Up = "Up",
//   Down = "Down",
//   Left = "Left",
//   Right = "Right"
// }

// var screen = new HardwareScreen(40,4)
// screen.setvirtualInterface("screen")

// screen.displayText("really long string of text that should not fit on the whole screen. k got it?")
// screen.displayText("text 2")
// screen.displayText("text3")
//
//
// var hwBtn0 = new HardwareButton(HardwareEnum.Button0)
// var hwBtn1 = new HardwareButton(HardwareEnum.Button1)
// var hwBtn2 = new HardwareButton(HardwareEnum.Button2)
// var hwBtn3 = new HardwareButton(HardwareEnum.Button3)
//
//
// var aButton = new VirtualButton("A")
// var bButton = new VirtualButton("B")
// var xButton = new VirtualButton("X")
// var yButton = new VirtualButton("Y")
//
//
// hwBtn0.setVirtualButton(aButton)
// hwBtn1.setVirtualButton(bButton)
// hwBtn2.setVirtualButton(xButton)
// hwBtn3.setVirtualButton(yButton)





// // Defining the menu
// // define inital menu
// var mainmenu = new MenuItem("nick")
// console.log(mainmenu.name)
//
// // rename menu
// mainmenu.setName("root")
// console.log(mainmenu.name)
//
// // create submenu
// var submenu1 = new MenuItem("mapButtons")
// // add submenu to root menu
// mainmenu.addSubMenu(submenu1)
// console.log(mainmenu.subMenus[0]) // "mapbuttons"
