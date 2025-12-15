/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },

  changeVol: function (vol) {
    this.volume = vol;
  },
  changeColor: function (col) {
    this.color = col;
  },
  changePocketNum: function (num) {
    this.pocketNum = num;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
console.log("Volume before:", backpack.volume);
backpack.changeVol(20)
console.log("Volume after:", backpack.volume);
console.log("Color before:", backpack.color);
backpack.changeColor("white")
console.log("Color after:", backpack.color);
console.log("PocketNum before:", backpack.pocketNum);
backpack.changePocketNum(25)
console.log("PocketNum after:", backpack.pocketNum);
