var arrayFans = ["Beyonce"];

arrayFans[0].age = 45;
arrayFans[0].years = 15;
arrayFans[0].level = 95;


function addFan(){
  let fanname1 = document.getElementById('fanname').value;
  let age1 = document.getElementById('age').value;
  let years1 = document.getElementById('years').value;
  let level1 = document.getElementById('level').value;



  fanname1.age = age1;
  fanname1.years = years1;
  fanname1.level = level1;

  arrayFans.push(fanname1);
  console.log(arrayFans);


  document.getElementById('fanname').value = null;
  document.getElementById('age').value = null;
  document.getElementById('years').value = null;
  document.getElementById('level').value = null;


  //Map Fucntion, return fans ages

  const newArrayFans = arrayFans.map( fan => { return fan.age})
  console.log(newArrayFans);

  //Filter function, show fans who are at least 18

  const adults = arrayFans.filter( fan => {if (fan.age >= 18) { return true }})
  console.log(adults);

  //Spread, show most recent fans in order

  console.log(...arrayFans);

  //slice, take the part of the arrayFans

  const partArrayFans = arrayFans.slice(1, arrayFans.length);
  console.log(partArrayFans);

}
