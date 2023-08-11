function validateEmail() {
  var email = document.getElementById("get-access-email").value;
  var rel = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!rel.test(email)) {
    document.getElementById("valid-email").innerHTML =
      "\nPlease Enter a valid email address";
    document.getElementById("get-access-email").style.border = "0.5px solid red";
    document.getElementById("get-access-email").style.color = "red";
    document.getElementById("valid-email").style.font = "bold";
    document.getElementById("valid-email").style.color = "red";
    
    // return false;
  } else {
    document.getElementById("valid-email").innerHTML = "";
    document.getElementById("get-access-email").style.border =
      "0.5px solid rgba(0,0,0,0.3)";
  }
}
function buttonValidateEmail() {
  var email = document.getElementById("get-access-email").value;
  var rel = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!rel.test(email)) {
    document.getElementById("valid-email").innerHTML =
      "Please Enter a valid email address";
    document.getElementById("get-access-email").style.border  = "0.5px solid red";
    document.getElementById("get-access-email").style.color = "red";
    document.getElementById("valid-email").style.fontSize = "bold";
    document.getElementById("valid-email").style.color = "red";


  } else {
    document.getElementById("valid-email").innerHTML = "\n";
    document.getElementById("get-access-email").style.border =
      "0.5px solid rgba(0,0,0,0.3)";
      document.getElementById("get-access-email").style.color = "#b3b3b3";

    // localStorage.setItem("email-name",email);
    // window.location.href = "success.html";
  }
}