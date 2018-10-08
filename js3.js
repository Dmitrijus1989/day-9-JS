let eatsPlants = true;
let eatsAnimals = true;

let category;
category = eatsPlants ? (eatsAnimals ? "eats all" : "eats only plants") : (eatsAnimals ? "easts animals!!": undefined);
console.log(category);
/*---------------------------------------------------------------------------*/
let month = 11;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
  }
console.log(days+" days in a month");
