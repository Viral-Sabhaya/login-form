
document.getElementById("submit").addEventListener("click", function () {

      let email, password;

      email = document.getElementById("email").value;
      password = document.getElementById("password").value;

      let user_records = new Array();
      user_records = JSON.parse(localStorage.getItem("users"));

      const dataLength = user_records?.length || null;

      emailDuplicate = () => {
            if (dataLength !== null) {
                  for (i = 0; i <= dataLength; i++) {
                        // console.log(data[i].Email);
                        if (user_records[i]?.email == email && user_records[i]?.password == password) {
                              // console.log("match", sEmail);
                              // console.log("match", sPass);
                              return true;
                        }
                  }
            }
      };

      if (user_records.some((v) => { return v.email == email && v.password == password && v.role == "user" && v.status == true })) {
            let current_user = user_records.filter((v) => {
                  return v.email == email && v.password == password &&
                        v.role == "user" && v.status == true
            })[0]
            localStorage.setItem('loginuser', current_user.email);
            localStorage.setItem('role', current_user.role);
            // localStorage.setItem("user2", JSON.stringify(user_records[i]));
            window.location.href = "../profile/profile.html"
      }

      else if (user_records.some((v) => { return v.email == email && v.password == password && v.role == "admin" })) {
            let current_user = user_records.filter((v) => {
                  return v.email == email && v.password == password &&
                        v.role == "admin"
            })[0]
            localStorage.setItem('loginuser', current_user.email);
            localStorage.setItem('mainUser', current_user.email);
            localStorage.setItem('role', current_user.role);
            // localStorage.setItem("user2", JSON.stringify(user_records[i]));
            window.location.href = "../admin/admin.html"
      } else if (user_records.some((v) => { return v.email == email && v.password == password && v.status != true })) {
            document.querySelector("#error").innerHTML = "Sorry!!  Your Email Block by Admin";
      }
      else if (user_records.some((v) => { return v.email == email && v.password != password })) {
            document.querySelector("#error").innerHTML = "Please Enter valid Password";
      }
      else if (user_records.some((v) => { return v.email != email && v.password == password })) {
            document.querySelector("#error").innerHTML = "Please Enter Valid Email";
      } 
      else {
            document.querySelector("#error").innerHTML = "Please Enter Email and Password";
      }
});

function text() {
      document.querySelector("#error").innerHTML = " ";
}

function back() { window.history.forward(); }
setTimeout("back()", 0);
window.onunload = function () { null };

