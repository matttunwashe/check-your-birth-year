function calculate(){
  var number = document.getElementById("number").value;
  // validation to see if user type the right input
    if (number == "" || number == 0 ){
        window.alert("Please type your correct age");
        return;
    }

  // getting the current date
  var date = new Date().getFullYear();
  // subtracts user's input from the current date
  var birthyear = number - date;
  // hides the message untill the button is clicked
  document.getElementById("year").style.display = "block";
  // outputs the message
  document.getElementById("year").innerHTML = "Your birth year is " + birthyear;

}

// this runs the calculate function when the button is clicked
  document.getElementById("button").onclick = function(){
    calculate();
  };
