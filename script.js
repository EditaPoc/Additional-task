var footballers =[{
    name: 'Jonas',
    surname: 'Jonaitis',
    speed: 25,
    inches: 1.8,
    age: 22,
    introduction: function() {
        return "Futbolistas " + this.name + " " + this.surname + " " + this.speed;
      }
    
}, 
{
    name: 'Antanas',
    surname: 'Antanaitis',
    speed: 26,
    inches: 1.75,
    age: 20,
    introduction: function() {
        return "Futbolistas " + this.name + " " + this.surname + " " + this.speed;
      }
    }, 
    {
    name: 'Vidas',
    surname: 'Vidutis',
    speed: 24,
    inches: 1.7,
    age: 24,
    introduction: function() {
        return "Futbolistas " + this.name + " " + this.surname + " " + this.speed + " km/h";
      }
}]



footballers.forEach(function(element, index) {
    index + 1;

    var divas = document.createElement('div');
    // document.getElementById("demo").innerHTML = element.name + ' ' + element.surname; 
    divas.innerHTML = 'Futbolininkas ' + element.name + ' ' + element.surname + ' ' + element.speed + ' km/h;';
    document.body.appendChild(divas);
    
});

// console.log(Math.max(...footballers));
// document.getElementById("demo").innerHTML = footballers.introduction(); 
// divas.innerHTML = footballers.introduction();

// console.log(footballers.introduction());
// console.log(footballer2.introduction());
// console.log(footballer3.introduction());
// console.log(footballers);


// function Cars(name, time, distance) {
//         this.name = name,
//         this.distance = distance,
//         this.time = time
    
      
//     };

// var a = 1000;
// var b = 3600;

// console.log ( "Automobilis: " + cars[0].name );
// console.log ( "Valstybinis numeris: " + cars[0].id );
// console.log ( "Nuvažiuotas atstumas: " + cars[0].distance + "m" );
// console.log ( "Laikas: " + cars[0].time + "s" );
// console.log ( "Vidutinis mašinos greitis (km/h) : " + (cars[0].distance/a) / (cars[0].time/b) );

// console.log ( "Automobilis: " + cars[1].name );
// console.log ( "Valstybinis numeris: " + cars[1].id )
// console.log ( "Nuvažiuotas atstumas: " + cars[1].distance + "m" );
// console.log ( "Laikas: " + cars[1].time + "s" );
// console.log ( "Vidutinis mašinos greitis (km/h) : " + (cars[1].distance/a) / (cars[1].time/b) );
