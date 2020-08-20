function signup_validate(){
  var username = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;
  var cfpass = document.getElementById("cfpass").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(username.length == 0){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6)
  {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
  }

  if(pass.length == 0)
  {
    text = "Password cannot be Empty";
    error_message.innerHTML = text;
    return false;
  }
  else if(pass.length < 5)
  {
    text = "Weak Password";
    error_message.innerHTML = text;
    return false;
  }
  else if(pass.search(/[A-Z]/) == -1)
  {
    text = "Your password must contain Uppercase character";
    error_message.innerHTML = text;
    return false;
  }
  else if(pass.search(/[a-z]/) == -1)
  {
    text = "Your password must contain Lowercase character";
    error_message.innerHTML = text;
    return false;
  }
  else if(pass.search(/\d/) == -1)
  {
    text = "Your password must contain number";
    error_message.innerHTML = text;
    return false;
  }
  else if(pass.search(/[.@$!%*#?&]/) == -1)
  {
    text = "Your password must contain special character";
    error_message.innerHTML = text;
    return false;
  }

  if(cfpass.length == 0)
  {
    text = "Confirm cannot be Empty";
    error_message.innerHTML = text;
    return false;
  }
  else if(pass != cfpass)
  {
    text = "Confirm Password does not match";
    error_message.innerHTML = text;
    return false;
  }
  else{
    location.replace("http://shiko.byethost22.com/login.html");
    return true;
  }
}