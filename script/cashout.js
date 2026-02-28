document.getElementById("cashout-btn").addEventListener("click", function(){
     //1. agent number validation
     const cashoutNumber = getValueFromInput("input-number");


//2. get the amount

  const inputAmount = getValueFromInput('input-amount');

// new balance
  const currentBalance = getBalance();
    //calculate balance

    const newBalance = currentBalance - Number(inputAmount);
    console.log (newBalance);
    if(newBalance < 0) {
      alert("Invalid amount");
      return;
    }

    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234"){
      alert ("Cashout Successful")
    }
    balanceinitial.innerText = newBalance;


})

// document.getElementById("cashout-btn").addEventListener("click", function() {

//   const inputNumber = document.getElementById("input-number");
//   const agentNumber = inputNumber.value;
    
//   if (agentNumber === '01726001234'){
//     console.log("correct agent")
//     }
//     else {
//       alert ('wrong agent Number')
//       console.log('wrong agent number');
//       return;
//     }

//     const inputAmount = document.getElementById('input-amount');
//     const cashoutAmount = inputAmount.value;
//     // console.log (cashoutAmount);

    const balanceinitial = document.getElementById("balance");
    const balance = balanceinitial.innerText;
    const newBalance = Number(balance) - Number(cashoutAmount);
    

    if (newBalance < 0) {
      alert ("insufficiant Balance");
      return;

    } else {
      console.log("New Balance: ", newBalance);
      balanceinitial.innerText = newBalance;
      console.log(newBalance);
    }

    const inputPin = document.getElementById('cashout-pin');
    const cashoutPin = inputPin.value;
    if (cashoutPin === '1234') {

    } else {
      alert("Wrong Pin");
      return;
    }

// })