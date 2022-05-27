const footballers = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    speed: 25,
    inches: 1.8,
    age: 22,
    introduction: () => {
      return "Futbolistas " + this.name + " " + this.surname + " " + this.speed;
    },
  },
  {
    name: "Valerija",
    surname: "Valeraitė",
    speed: 32,
    inches: 1.8,
    age: 19,
  },
  {
    name: "Antanas",
    surname: "Antanaitis",
    speed: 26,
    inches: 1.75,
    age: 20,
    introduction: () => {
      return "Futbolistas " + this.name + " " + this.surname + " " + this.speed;
    },
  },
  {
    name: "Vidas",
    surname: "Vidutis",
    speed: 28,
    inches: 1.7,
    age: 24,
    introduction: () => {
      return (
        "Futbolistas " +
        this.name +
        " " +
        this.surname +
        " " +
        this.speed +
        " km/h"
      );
    },
  },
];

footballers.sort((a, b) => {
  return b.speed - a.speed;
});

footballers.forEach(function (element, index) {
  index + 1;

  var divas = document.createElement("div");
  divas.innerHTML =
    "Futbolininkas " +
    element.name +
    " " +
    element.surname +
    " " +
    element.speed +
    " km/h;";
  document.body.appendChild(divas);
});
console.log(footballers[0]);
var divas3 = document.createElement("div");
divas3.innerHTML =
  "Greičiausiai bėgantis futbolininkas " +
  footballers[0].name +
  footballers[0].surname +
  " " +
  footballers[0].speed +
  " km/h.";
document.body.appendChild(divas3);
divas3.style.marginTop = "20px";

class Car {
  constructor(name, distance, speed) {
    (this.name = name), (this.distance = distance), (this.speed = speed);
  }
}

firstCar = new Car("Volvo", 10000, "60 km/h");

// console.log(firstCar);

var blokas = document.createElement("div");
blokas.innerHTML =
  "Mašina - " +
  firstCar.name +
  ", nuvažiuotas kelias - " +
  firstCar.distance +
  "km.,  greitis - " +
  firstCar.speed;
blokas.style.marginTop = "15px";
document.body.appendChild(blokas);

let button = document.createElement("button");
button.innerHTML = "SUKURTI";
button.setAttribute("id", "sukurti");
document.body.appendChild(button);
button.style.margin = "15px auto";
button.style.background = "lightgreen";
button.style.border = "1px solid lightgreen";
button.style.cursor = "pointer";

button.addEventListener("click", function () {
  secondCar = new Car("Mazda", 500, "50 km/h");
  thirdCar = new Car("Opel", 100, "55 km/h");
  fourthCar = new Car("Reno", 150, "80 km/h");
  fifthCar = new Car("Audi", 500, "70km/h");
  // console.log(fifthCar);
  var blokas2 = document.createElement("div");
  var blokas3 = document.createElement("div");
  var blokas4 = document.createElement("div");
  var blokas5 = document.createElement("div");
  blokas2.innerHTML = "Mašina - " + secondCar.name + ", nuvažiuotas kelias - " + secondCar.distance + "km.,  greitis - " + secondCar.speed;
  blokas3.innerHTML = "Mašina - " + thirdCar.name + ", nuvažiuotas kelias - " + thirdCar.distance + "km.,  greitis - " + thirdCar.speed;
  blokas4.innerHTML = "Mašina - " + fourthCar.name + ", nuvažiuotas kelias - " + fourthCar.distance + "km.,  greitis - " + fourthCar.speed;
  blokas5.innerHTML = "Mašina - " + fifthCar.name + ", nuvažiuotas kelias - " + fifthCar.distance + "km.,  greitis - " + fifthCar.speed;
  document.body.appendChild(blokas2);
  document.body.appendChild(blokas3);
  document.body.appendChild(blokas4);
  document.body.appendChild(blokas5);
});


