//machin id -> input value

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value); 
    return value;
  }

  //machine -> balance
function getBalance() {
  const inputAmount = document.getElementById("balance");
  const balance = inputAmount.innerText;
  return number(balance);
}


//machine value -> set balance

function setbalance(value) {
  const balanceinitial = document.getElementById("balance");
  balanceinitial.innerText = value;
}


// machine id > hide all > show id

function showOnly(id) {
  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
   
}