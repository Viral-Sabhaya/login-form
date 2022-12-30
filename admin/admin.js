
var role = localStorage.getItem("role");
console.log(role);

if (role == "admin") {
   document.getElementById("user_data").addEventListener("click", function () {
      window.location.href = "../userdashbord/dashbord.html"
   });

   document.getElementById("profile").addEventListener("click", function () {
      window.location.href = "../profile/profile.html"
   });

   document.getElementById("exit").addEventListener("click", function () {
      localStorage.removeItem("loginuser");
      localStorage.removeItem("mainUser");
      localStorage.removeItem("role");
      window.location.href = "../signin/signin.html"
   });
}else{
   window.location.href="../signin/signin.html"
}


function back() { window.history.forward(); }
setTimeout("back()", 0);
window.onunload = function () { null };
