let balance = 0.00;
let checkBalance = true;
let isActive = true;

    if (checkBalance === false) {
      console.log("Thank you, have a nice day");
    } else if (isActive === true && balance > 0) {
      console.log("your balance is $"+balance+".")
    } else if (isActive === false) {
      console.log("your account is no longer active")
    } else if (balance === 0) {
      console.log("your account is empty");
    } else if (balance < 0){
      console.log("your balance is negative, please contact your bank");
    }
