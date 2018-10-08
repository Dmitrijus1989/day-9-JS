let myLoop = 1;

while (myLoop <= 20) {
  if (myLoop % 3 === 0 && myLoop % 5 === 0) {
    console.log("Fizzbuzz");
  } else if (myLoop % 3 === 0) {
    console.log("Fizz");
  } else if (myLoop % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(myLoop);
  }
  myLoop=myLoop + 1
}

let sec = 60;

while (sec >= 0) {
  if (sec === 0) {
    console.log("Solid rocket booster ignition and liftoff (T-0 seconds)");
  }else if (sec === 6) {
    console.log("main engine start (T-6 seconds)");
  }else if (sec === 10) {
    console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
  }else if (sec === 16) {
    console.log("Activate launch pad sound suppression system (T-16 seconds)");
  }else if (sec === 31) {
    console.log("Ground launch sequenser is go for auto sequence start (T-31 seconds)");
  }else if (sec === 50) {
    console.log("Orbiter transfers from grounded to internal power (T-50 seconds)");
  }else {
    console.log("T-"+sec+" seconds");
  }
  sec=sec-1;
}
