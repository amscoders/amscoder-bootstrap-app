function validation() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
        
      if (email == "") {
        document.getElementById('emailcheck').innerHTML = "** email should not be empty";
        return false;
      }

      if (password == "") {
        document.getElementById('passwordcheck').innerHTML = "** password should not be empty";
        return false;
      }

      if ((password.length >= 5) || (password.length <= 10)) {
        document.getElementById('passwordcheck').innerHTML = "** password must be atleast 5 and max 10 characters long";
        return false;
      }
    }
