document.getElementById("login-btn").addEventListener("click", function (){
  //1 get the mobile number input
  const numberInput = document.getElementById ("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  //2 get the pin input
  const pinInput = document.getElementById ("input-pin");
  const pin = pinInput.value;
  console.log(pin);
  if (contactNumber === "01726009353" && pin === "1234"){
    alert("login successful");
    window.location.assign("/home.html");
  } else {
    alert ("login fail");
    return;
  }

    

  //3 match pin and mobile no
  //4 tru:: >> alert homepage
  //5 true:: alert> return
});