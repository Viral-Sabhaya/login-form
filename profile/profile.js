
var data = new Array();
data = JSON.parse(localStorage.getItem('users'));

var dat = localStorage.getItem("loginuser");
let detail = data.filter((item) => item.email == dat);

var main = localStorage.getItem("mainUser");
let main_detail = data.filter((item) => item.email == main);

var rol = localStorage.getItem("role");

const imgDiv = document.querySelector('#prof');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

imgDiv.addEventListener('mouseenter', function () {
   uploadBtn.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function () {
   uploadBtn.style.display = "none";
});


// ------------------------------------------------------------

if (rol == "user") {
   profileData();
   let logout = document.getElementById("back");
   logout.value = "Logout";
   logout.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("loginuser");
      localStorage.removeItem("role");
      window.location.href = "../signin/signin.html"
   })

} else if (rol == "admin") {
   mainData();
} else {
   window.location.href = "../signup/signup.html"
}
// -------------------------------------------------------

function profileData() {

   document.getElementById("name").value = detail[0].name;
   document.getElementById("surname").value = detail[0].surname;
   document.getElementById("email").value = detail[0].email;
   document.getElementById("phoneNumber").value = detail[0].phoneNumber;
   document.getElementById("pincode").value = detail[0].pinCode;
   document.getElementById("country").value = detail[0].country;
   document.getElementById("state").value = detail[0].state;
   document.getElementById("city").value = detail[0].city;
   document.querySelector('#gender').value = detail[0].gender
   document.querySelector('#hobby').value = detail[0].checkboxes;

   const url = detail[0].image;
   const img = new Image();
   img.src = url;
   document.getElementById("prof").appendChild(img);

   email = document.getElementById("email").value;

   file.addEventListener('change', function () {
      //this refers to file
      const choosedFile = this.files[0];
      if (choosedFile) {
         const reader = new FileReader(); //FileReader is a predefined function of JS
         reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
            let chang_image = data.map((item) => {
               if (item.email == email) {
                  item.image = img.src;
               }
               return item;
            });
            localStorage.setItem("users", JSON.stringify(chang_image));
         });
         reader.readAsDataURL(choosedFile);
      }
   });

   // ---------------------- For Input Set Atrribute Read-Only ---------------------

   var elements = document.querySelectorAll("input[type=text]");

   for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute("readonly", true);
   }

   // -------------------------------------------------------------------------------

   document.getElementById("back").addEventListener("click", function () {
      window.location.href = "../admin/admin.html";
   });

   document.getElementById("edit").addEventListener("click", function () {
      window.location.href = "../signup/signup.html";
   });

}

function mainData() {

   document.getElementById("name").value = main_detail[0].name;
   document.getElementById("surname").value = main_detail[0].surname;
   document.getElementById("email").value = main_detail[0].email;
   document.getElementById("phoneNumber").value = main_detail[0].phoneNumber;
   document.getElementById("pincode").value = main_detail[0].pinCode;
   document.getElementById("country").value = main_detail[0].country;
   document.getElementById("state").value = main_detail[0].state;
   document.getElementById("city").value = main_detail[0].city;
   document.querySelector('#gender').value = main_detail[0].gender
   document.querySelector('#hobby').value = main_detail[0].checkboxes;

   const url = main_detail[0].image;
   const img = new Image();
   img.src = url;
   document.getElementById("prof").appendChild(img);

   email = document.getElementById("email").value;
   console.log(email);

   file.addEventListener('change', function () {
      //this refers to file
      const choosedFile = this.files[0];
      if (choosedFile) {
         const reader = new FileReader(); //FileReader is a predefined function of JS
         reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
            let chang_image = data.map((item) => {
               if (item.email == email) {
                  item.image = img.src;
               }
               return item;
            });
            localStorage.setItem("users", JSON.stringify(chang_image));
         });
         reader.readAsDataURL(choosedFile);
      }
   });

   // ---------------------- For Input Set Atrribute Read-Only ---------------------

   var elements = document.querySelectorAll("input[type=text]");
   for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute("readonly", true);
   }

   // -------------------------------------------------------------------------------

   document.getElementById("back").addEventListener("click", function () {
      window.location.href = "../admin/admin.html";
   });

   document.getElementById("edit").addEventListener("click", function () {
      window.location.href = "../signup/signup.html";
   });
}

function back() { window.history.forward(); }
setTimeout("back()", 0);
window.onunload = function () { null };






