function askForLimitNumber() {
  //const limit = Number.paseInt(prompt("Ingrese el número"));
  const limit = prompt("ingrese número");
  const parsedLimit = Number.parseInt(limit);
  if(limit >= 1 && limit <= 20){
    console.log("el número esta dentro del rango")
    return limit
  } else {
    console.log("el número esta fuera de rango")
    return null;
  }

}

//////////////////////////////////////////////////////////////

const limitNumber = askForLimitNumber();

for (let num1 = 1; num1 <= limitNumber; num1++){
console.log(`${num1} x 5 = ${num1 * 5}`)
}
//for(let x = 1; x <= limitNumber; x++){
//  let result = 1;
//  for(let y = 1; y <= x; y++){
//    result = result * y;
//  }
//  console.log(`El factorial de ${x} es: ${result}`);
//}


for(let factoryNumber = 1; factoryNumber <= limitNumber; factoryNumber){
  let result = 1;
  for(let multiplier = 1; multiplier <= factoryNumber; multiplier++) {
    result = result * multiplier;
  }

  console.log(`El factorial de ${factoryNumber} puede ser ${result}`)
}
console.log({limitNumber});

//function Multiplicar() {
//var vr1 = document.getElementById('t1').value;

//var p = "1 x " + vr1 + "= "+ (parseInt(vr1) * 1) + "<br>"
//   + "2 x " + vr1 + "= "+ (parseInt(vr1) * 2) + "<br>"
//   + "3 x " + vr1 + "= "+ (parseInt(vr1) * 3) + "<br>"
//   + "4 x " + vr1 + "= "+ (parseInt(vr1) * 4) + "<br>"
//   + "5 x " + vr1 + "= "+ (parseInt(vr1) * 5) + "<br>"
//   + "6 x " + vr1 + "= "+ (parseInt(vr1) * 6) + "<br>"
//   + "7 x " + vr1 + "= "+ (parseInt(vr1) * 7) + "<br>"
//   + "8 x " + vr1 + "= "+ (parseInt(vr1) * 8) + "<br>"
//   + "9 x " + vr1 + "= "+ (parseInt(vr1) * 9) + "<br>"
//   + "10 x " + vr1 + "= "+ (parseInt(vr1) * 10) + "<br>"
//   + "11 x " + vr1 + "= "+ (parseInt(vr1) * 11) + "<br>"
//   + "12 x " + vr1 + "= "+ (parseInt(vr1) * 12) + "<br>"
//   + "13 x " + vr1 + "= "+ (parseInt(vr1) * 13) + "<br>"
//   + "14 x " + vr1 + "= "+ (parseInt(vr1) * 14) + "<br>"
//   + "15 x " + vr1 + "= "+ (parseInt(vr1) * 15) + "<br>"
//   + "16 x " + vr1 + "= "+ (parseInt(vr1) * 16) + "<br>"
//   + "17 x " + vr1 + "= "+ (parseInt(vr1) * 17) + "<br>"
//   + "18 x " + vr1 + "= "+ (parseInt(vr1) * 18) + "<br>"
//   + "19 x " + vr1 + "= "+ (parseInt(vr1) * 19) + "<br>"
//   + "20 x " + vr1 + "= "+ (parseInt(vr1) * 20) + "<br>"
//   + "Factorial de " + vr1 + " = " +
//; document.getElementById('promedio').innerHTML = p;
//}
