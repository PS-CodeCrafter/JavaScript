const thermos = {
  name: "Bottle",
  color: "White",

  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

const airPods = {
  name: "AirPods",
  color: {
    case: "Black",
    pieces: "White",
  },

  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

console.log("The thermos object:", thermos);
console.log("The thermos color:", thermos.color);
console.log("The thermos lid:", thermos.lidOpen);

console.log("The Airpods object:", airPods);
console.log("The case color:", airPods.color.case);
console.log("The airpods color:", airPods.color.pieces);
console.log("The airpods lid:", airPods.lidOpen);
