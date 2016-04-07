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

HardwareScreen.prototype.selectLine = function(lineNum) {
    lineNum--; // array starts at 0
    var tarea = this.interface;
    var lines = tarea.value.split("\n");

    // calculate start/end
    var startPos = 0, endPos = tarea.value.length;
    for(var x = 0; x < lines.length; x++) {
        if(x == lineNum) {
            break;
        }
        startPos += (lines[x].length+1);

    }

    var endPos = lines[lineNum].length+startPos;

    // do selection
    // Chrome / Firefox

    if(typeof(tarea.selectionStart) != "undefined") {
        tarea.focus();
        tarea.selectionStart = startPos;
        tarea.selectionEnd = endPos;
        return true;
    }

    // IE
    if (document.selection && document.selection.createRange) {
        tarea.focus();
        tarea.select();
        var range = document.selection.createRange();
        range.collapse(true);
        range.moveEnd("character", endPos);
        range.moveStart("character", startPos);
        range.select();
        return true;
    }

    return false;
};

HardwareScreen.prototype.displayMenu = function(menuItem) {
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
    if (item > this.rows) break;

    // append menu item
    this.appendText(item.name)
  };
  this.selectLine(1)
  // switch()
};
