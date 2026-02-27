
  document.getElementById("cashout").addEventListener("click", function (){


const agentNumber = document.getElementById("input-number");
//1 get the agent number
//2 get the amount and convert to number
//3 get current balance
const agentNum = agentNumber.value;

if (agentNum === "01726001234"){
  alert("Correct agent Number");
 }
else {
  alert("Invalid agent Number");
  return;
}

const inputAmount = document.getElementById("input-amount");
const cashoutAmount = inputAmount.value;
 if (inputAmount < balance) {
  alert("Valid input");
 }
 else {
  alert ("Wrong amount")
 }

});