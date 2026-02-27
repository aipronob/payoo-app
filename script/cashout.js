
  document.getElementById("cashout").addEventListener("click", function (){


const agentNumber = document.getElementById("input-number");
//1 get the agent number
//2 get the amount and convert to number

const agentNum = agentNumber.value;

if (agentNum === "01726001234"){
  console.log (agentNum);
 }
else {
  alert("Invalid agent Number");
  return;
}

const inputAmount = document.getElementById("input-amount");
const cashoutAmount = inputAmount.value;
console.log (cashoutAmount);

//3 get current balance

  const balance = document.getElementById("balance");
  const balanceamount = balance.innerText;

  console.log ("Balance", balanceamount);

  //new balance

  const newBalance = Number(balanceamount) - Number(cashoutAmount);

  console.log (newBalance);



  })
