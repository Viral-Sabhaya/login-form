
const img_Data = document.getElementById("image");

const img = new Image();
window.onload = img_Data.addEventListener('change', () => {
   const file = img_Data.files[0];
   const fr = new FileReader();
   fr.readAsDataURL(file);
   fr.addEventListener('load', () => {
      const url = fr.result
      img.src = url;
   })
});


function validation() {

   let role, name, surname, email, phoneNumber, gender, country, city, state, image, pinCode, password, checkboxes, cPass;

   role = document.getElementById("role").value;
   name = document.getElementById("firstName")?.value;
   surname = document.getElementById("lastName").value;
   email = document.getElementById("email").value;
   phoneNumber = document.getElementById("phoneNumber").value;
   gender = document.querySelector('input[name="gender"]:checked')?.value;
   country = document.getElementById("country").value;
   city = document.getElementById("city").value;
   state = document.getElementById("countryState").value;
   pinCode = document.getElementById("pinCode").value;
   password = document.getElementById("password").value;
   cPass = document.getElementById("confirm_password").value;
   image = document.getElementById("image").value;
   checkboxes = document.querySelectorAll('input[type=checkbox]:checked');


   // --------------------------validation on form ---------------------------

   // --------------------------name validation-----------------------------

   var regex = /^[a-zA-Z]{2,30}$/;
   if (name == "" || name == null) {
      document.getElementById('valid-name').innerHTML = 'Please Enter Name';
   } else if (name.match(regex)) {
      document.getElementById('valid-name').innerHTML = ''
      if (name.length <= 2) {
         document.getElementById('valid-name').innerHTML = 'Minimum 3 letters required'
      }
      else {
         document.getElementById('valid-name').innerHTML = ''
      }
   } else {
      document.getElementById('valid-name').innerHTML = 'Please Enter Name'
   }

   // ------------------------surname validation---------------------------

   if (surname == "" || surname == null) {
      document.getElementById('valid-uname').innerHTML = 'Please Enter Name';
   } else if (surname.match(regex)) {
      document.getElementById('valid-uname').innerHTML = ''
      if (surname.length <= 2) {
         document.getElementById('valid-uname').innerHTML = 'Minimum 3 letters required'
      }
      else {
         document.getElementById('valid-uname').innerHTML = ''
      }
   } else {
      document.getElementById('valid-uname').innerHTML = 'Please Enter Name'
   }

   // -----------------------email validation--------------------------------

   var emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   ;
   if (email == "" || email == null) {
      document.getElementById('valid-email').innerHTML = 'Please Enter email';
   } else if (email.match(emailReg)) {
      document.getElementById('valid-email').innerHTML = '';
   } else {
      document.getElementById('valid-email').innerHTML = 'email is not valid';
   }

   // ---------------------------phone-number----------------------------------

   var contReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

   if (phoneNumber == null || phoneNumber == "") {
      document.getElementById("valid-cont").innerHTML = "please enter your number";
   } else if (phoneNumber.match(contReg)) {
      document.getElementById("valid-cont").innerHTML = "";
   } else {
      document.getElementById('valid-cont').innerHTML = "enter valid number";
   }

   // -----------------------------password ------------------------------------

   var passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;

   if (password == null || password == "") {
      document.getElementById("valid-pass").innerHTML = "Please Enter Password";
   } else if (password.match(passReg)) {
      document.getElementById("valid-pass").innerHTML = "";
   } else {
      document.getElementById("valid-pass").innerHTML = "7 to 15 characters which contain at least one numeric digit and a special character";
   }

   if (cPass == null || cPass == "") {
      document.getElementById("valid-cpass").innerHTML = "please enter password";
   } else if (cPass == password) {
      document.getElementById("valid-cpass").innerHTML = "";
   } else {
      document.getElementById("valid-cpass").innerHTML = "Password not same";
   }

   // ----------------------------Gender------------------------------------------

   if (gender == null || gender == "") {
      document.getElementById("valid-gender").innerHTML = "please select gender";
   } else {
      document.getElementById("valid-gender").innerHTML = "";
   }

   // --------------------------CheckBox Hobby-------------------------------------

   if (checkboxes.length == null || checkboxes.length == "") {
      document.getElementById("valid-hobby").innerHTML = "please select checkboxes";
   } else {
      document.getElementById("valid-hobby").innerHTML = "";
   }

   // ---------------------------Image-----------------------------------------

   if (image.length == null || image.length == "") {
      document.getElementById("valid-image").innerHTML = "please select image";
   } else {
      document.getElementById("valid-image").innerHTML = "";
   }

   // -------------------------------PinCode-----------------------------------

   if (pinCode == null || pinCode == "") {
      document.getElementById("valid-pin").innerHTML = "Please Enter pinCode";
   } else {
      document.getElementById("valid-pin").innerHTML = "";
   }

   // -----------------------------Country Chang-------------------------------------

   if (country == null || country == "") {
      document.getElementById("valid-country").innerHTML = "Please Select Country";
   }
   else {
      document.getElementById("valid-country").innerHTML = "";
   }

   if (state == null || state == "") {
      document.getElementById("valid-state").innerHTML = "Please Select State";
   }
   else {
      document.getElementById("valid-state").innerHTML = "";
   }

   if (city == null || city == "") {
      document.getElementById("valid-city").innerHTML = "Please Select City";
   }
   else {
      document.getElementById("valid-city").innerHTML = "";
   }

   // ----------------------validation over--------------------------------------------
}
function changeFname() {
   var regex = /^[a-zA-Z]{2,30}$/;
   let fName = document.getElementById("firstName").value;
   if (fName == "" || fName == null) {
      document.getElementById('valid-name').innerHTML = 'Please Enter Name';
   } else if (fName.match(regex)) {
      document.getElementById('valid-name').innerHTML = ''
      if (fName.length <= 2) {
         document.getElementById('valid-name').innerHTML = 'Minimum 3 letters required'
      }
      else {
         document.getElementById('valid-name').innerHTML = ''
      }
   } else {
      document.getElementById('valid-name').innerHTML = 'Please Enter Name'
   }
}
function changeUname() {
   var regex = /^[a-zA-Z]{2,30}$/;
   let uName = document.getElementById("lastName").value;
   if (uName == "" || uName == null) {
      document.getElementById('valid-uname').innerHTML = 'Please Enter Name';
   } else if (uName.match(regex)) {
      document.getElementById('valid-uname').innerHTML = ''
      if (uName.length <= 2) {
         document.getElementById('valid-uname').innerHTML = 'Minimum 3 letters required'
      }
      else {
         document.getElementById('valid-uname').innerHTML = ''
      }
   } else {
      document.getElementById('valid-uname').innerHTML = 'Please Enter Name'
   }
}

function changeEmail() {
   let email = document.getElementById("email").value;
   emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   if (email == "" || email == null) {
      document.getElementById('valid-email').innerHTML = 'Please Enter Email';
   } else if (email.match(emailReg)) {
      document.getElementById('valid-email').innerHTML = '';
   } else {
      document.getElementById('valid-email').innerHTML = 'Email is not valid';
   }
}

function changePass() {
   let pass = document.getElementById("password").value;
   let cPass = document.getElementById("confirm_password").value;

   passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;

   if (pass == null || pass == "") {
      document.getElementById("valid-pass").innerHTML = "please enter password";
   } else if (pass.match(passReg)) {
      document.getElementById("valid-pass").innerHTML = "";
      if (pass == cPass) {
         document.getElementById("valid-cpass").innerHTML = "";
      } else {
         document.getElementById("valid-cpass").innerHTML = "Password not same";
      }
   }
   else {
      document.getElementById("valid-pass").innerHTML = "7 to 15 characters which contain at least one numeric digit and a special character";
   }
}

function changeCpass() {
   let cPass = document.getElementById("confirm_password").value;
   let pass = document.getElementById("password").value
   if (cPass == null || cPass == "") {
      document.getElementById("valid-cpass").innerHTML = "Please Enter Password";
   } else if (cPass == pass) {
      document.getElementById("valid-cpass").innerHTML = "";
   } else {
      document.getElementById("valid-cpass").innerHTML = "Password not same";
   }
}

function changePhone() {
   contReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   let phonenum = document.getElementById("phoneNumber").value;
   if (phonenum == null || phonenum == "") {
      document.getElementById("valid-cont").innerHTML = "Please Enter Your Number";
   } else if (phonenum.match(contReg)) {
      document.getElementById("valid-cont").innerHTML = "";
   } else {
      document.getElementById('valid-cont').innerHTML = "Enter 10 digit number";
   }
}

function changeGender() {
   let gender = document.querySelector("input[name=gender]:checked") ? document.querySelector("input[name=gender]:checked").value : "";
   if (gender == null || gender == "") {
      document.getElementById("valid-gender").innerHTML = "please select gender";
   } else {
      document.getElementById("valid-gender").innerHTML = "";
   }
}

function checkboxChang() {
   let checkboxes = document.querySelector('input[type=checkbox]:checked') ? document.querySelector('input[type=checkbox]:checked').value : "";
   if (checkboxes == null || checkboxes == "") {
      document.getElementById("valid-hobby").innerHTML = "please select checkboxes";
   } else {
      document.getElementById("valid-hobby").innerHTML = "";
   }
}

function changeImg() {
   let img = document.getElementById("image").value;
   if (img.length == null || img.length == "") {
      document.getElementById("valid-image").innerHTML = "please select image";
   } else {
      document.getElementById("valid-image").innerHTML = "";
   }
}

function changePin() {
   let pincode = document.getElementById("pinCode").value;

   if (pincode == null || pincode == "") {
      document.getElementById("valid-pin").innerHTML = "Please Enter pinCode";
   } else {
      document.getElementById("valid-pin").innerHTML = " ";
   }
}

function changeCountry() {
   let country = document.getElementById("country").value;

   if (country == null || country == "") {
      document.getElementById("valid-country").innerHTML = "Please Select Country";
   }
   else {
      document.getElementById("valid-country").innerHTML = "";
      document.getElementById("valid-state").innerHTML = "";
   }
}

function changeState() {
   let state = document.getElementById("countryState").value;
   if (state == null || state == "") {
      document.getElementById("valid-state").innerHTML = "Please Select State";
   }
   else {
      document.getElementById("valid-state").innerHTML = "";
      document.getElementById("valid-city").innerHTML = "";

   }
}
function changeCity() {
   let city = document.getElementById("city").value;
   if (city == null || city == "") {
      document.getElementById("valid-city").innerHTML = "Please Select City";
   }
   else {
      document.getElementById("valid-city").innerHTML = "";
   }
}

function configureDropDownLists(ddl1, countryState) {

   var india = ['GUJARAT', 'MUMBAI', 'GOA'];
   var canada = ['ALBERTA', 'MANITOBA', 'NUNAVUT'];
   var germany = ['BAVARIA', 'BREMEN', 'HAMBURG'];

   switch (ddl1.value) {

      case 'INDIA':
         countryState.options.length = 0;
         for (i = 0; i < india.length; i++) {
            createOption(countryState, india[i], india[i]);
         }
         break;
      case 'CANADA':
         countryState.options.length = 0;
         for (i = 0; i < canada.length; i++) {
            createOption(countryState, canada[i], canada[i]);
         }
         break;
      case 'GERMANY':
         countryState.options.length = 0;
         for (i = 0; i < germany.length; i++) {
            createOption(countryState, germany[i], germany[i]);
         }
         break;
      default:
         countryState.options.length = 0;
         break;
   }
}

function createOption(Country, text, value) {
   var opt = document.createElement('option');
   opt.value = value;
   opt.text = text;
   Country.options.add(opt);
}

function dropDone(countryState, city) {

   var gujrat = ['SURAT', 'VADODRA', 'AHEMDABAD'];
   var mumbai = ['PUNE', 'NAGPUR', 'THANE'];
   var goa = ['ARAMBOL', 'CANACONA', 'MARGAO'];
   var alberta = ["CALGARY", "EDMONTON", "RED DEER"];
   var manitoba = ["BRANDON", "SELKIRK", "WINKLER"];;
   var nunavut = ["ALERT", "EUREKA", "IQALUIT"];
   var bavaria = ["NUREMBERG", "AUGSBURG", "REGENSBURG"];
   var bremen = ["BLOMENDAL", "ARSTEN", "BREMENI"];;
   var hamburg = ["TRAVEMUENDE", "STADE", "WISMAR"];

   switch (countryState.value) {
      case 'GUJARAT':
         city.options.length = 0;
         for (i = 0; i < gujrat.length; i++) {
            createOption(city, gujrat[i], gujrat[i]);
         }
         break;
      case 'MUMBAI':
         city.options.length = 0;
         for (i = 0; i < mumbai.length; i++) {
            createOption(city, mumbai[i], mumbai[i]);
         }
         break;
      case 'GOA':
         city.options.length = 0;
         for (i = 0; i < goa.length; i++) {
            createOption(city, goa[i], goa[i]);
         }
         break;
      case 'ALBERTA':
         city.options.length = 0;
         for (i = 0; i < alberta.length; i++) {
            createOption(city, alberta[i], alberta[i]);
         }
         break;
      case 'MANITOBA':
         city.options.length = 0;
         for (i = 0; i < manitoba.length; i++) {
            createOption(city, manitoba[i], manitoba[i]);
         }
         break;
      case 'NUNAVUT':
         city.options.length = 0;
         for (i = 0; i < nunavut.length; i++) {
            createOption(city, nunavut[i], nunavut[i]);
         }
         break;
      case 'BAVARIA':
         city.options.length = 0;
         for (i = 0; i < bavaria.length; i++) {
            createOption(city, bavaria[i], bavaria[i]);
         }
         break;
      case 'BREMEN':
         city.options.length = 0;
         for (i = 0; i < bremen.length; i++) {
            createOption(city, bremen[i], bremen[i]);
         }
         break;
      case 'HAMBURG':
         city.options.length = 0;
         for (i = 0; i < hamburg.length; i++) {
            createOption(city, hamburg[i], hamburg[i]);
         }
         break;
      default:
         city.options.length = 0;
         break;
   }
}


var data = new Array();
data = JSON.parse(localStorage.getItem('users'));

var dat = localStorage.getItem("loginuser");

if (dat == null) {

   document.getElementById("submit").addEventListener("click", function (e) {
      e.preventDefault();

      validation();

      let role, name, surname, email, phoneNumber, gender, country, city, state, image, pinCode, password, checkboxes, cPass;

      role = document.getElementById("role").value;
      name = document.getElementById("firstName")?.value;
      surname = document.getElementById("lastName").value;
      email = document.getElementById("email").value;
      phoneNumber = document.getElementById("phoneNumber").value;
      gender = document.querySelector('input[name="gender"]:checked')?.value;
      country = document.getElementById("country").value;
      city = document.getElementById("city").value;
      state = document.getElementById("countryState").value;
      pinCode = document.getElementById("pinCode").value;
      password = document.getElementById("password").value;
      cPass = document.getElementById("confirm_password").value;
      image = document.getElementById("image").value;
      checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

      let values = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
         .map(item => item.value);

      let user_records = new Array();
      user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

      let passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;
      var regex = /^[a-zA-Z]{2,30}$/;

      if ((name == "" || name == null) || (surname == "" || surname == null) || (email == "" || email == null) || (password == "" || password == null) || (cPass == "" || cPass == null) || (gender == "" || gender == null) || (pinCode == "" || pinCode == null) || (image == "" || image == null) || (country == "" || country == null) || (city == "" || city == null) || (state == "" || state == null) || (checkboxes.length == "" || checkboxes.length == null) || (phoneNumber == "" || phoneNumber == null)) {
         // alert("Please Fill Form ");
      } else if ((name.length <= 2) || (surname.length <= 2) || (email.match(emailReg) == null) || (password.match(passReg) == null) || (cPass != password) || (name.match(regex) == null) || (surname.match(regex) == null)) {
         alert("You Fill Wrong Data")
      }
      else if (user_records.some((v) => { return v.email == email })) {
         alert("Duplicate Data");
      }
      else {
         user_records.push({
            "status": true,
            "role": role,
            "name": name,
            "surname": surname,
            "email": email,
            "phoneNumber": phoneNumber,
            "gender": gender,
            "country": country,
            "city": city,
            "state": state,
            "image": img.src,
            "pinCode": pinCode,
            "password": password,
            "cPass": cPass,
            "checkboxes": values
         })
         console.log(user_records);
         localStorage.setItem("users", JSON.stringify(user_records));
         window.location.href = "../signin/signin.html"
         // window.location.reload();
      }
   });
} else {
   myFunction();  // function using for edit the detail 
}

// ----------------------------------- ON DETAIL EDIT ---------------------------------------------------

function myFunction() {

   var dat = localStorage.getItem("loginuser");
   var role = localStorage.getItem("role");

   if (dat) {
      // ------------------- Show Detail ------------------------------------------------------------------

      let detail = data.filter((item) => item.email == dat)

      document.getElementById("role").value = detail[0].role;
      document.getElementById("firstName").value = detail[0].name;
      document.getElementById("lastName").value = detail[0].surname;
      document.getElementById("email").value = detail[0].email;
      document.getElementById("phoneNumber").value = detail[0].phoneNumber;
      document.getElementById("pinCode").value = detail[0].pinCode;
      document.getElementById("country").value = detail[0].country;
      document.getElementById("password").value = detail[0].password;

      let sc = document.getElementById("optionCity");
      sc.setAttribute("value", detail[0].city);
      sc.innerText = detail[0].city;

      let rc = document.getElementById("optionState");
      rc.setAttribute("value", detail[0].state);
      rc.innerText = detail[0].state;

      // ------------------------- Gender Value -------------------------------

      switch (detail[0].gender) {
         case 'male':
            document.getElementById("male").setAttribute("checked", true);
            break;
         case 'female':
            document.getElementById("female").setAttribute("checked", true);
            break;
         case 'other':
            document.getElementById("other").setAttribute("checked", true);
         default:
            // document.getElementById("input[type=radio]:checked").setAttribute("checked", false);
            break;
      }

      // ------------------------- Checkboxes Value -------------------------------

      var x = detail[0].checkboxes;
      for (var z in x) {
         result = x[z];
         switch (result) {
            case 'sports':
               document.getElementById("sport").setAttribute("checked", true);
               break;
            case 'music':
               document.getElementById("music").setAttribute("checked", true);
               break;
            case 'reading':
               document.getElementById("read").setAttribute("checked", true);
               break;
            case 'sports', 'music', 'reading':
               document.getElementById("sport").setAttribute("checked", true);
               document.getElementById("music").setAttribute("checked", true);
               document.getElementById("read").setAttribute("checked", true);
               break;
            case 'sports', 'music':
               document.getElementById("sport").setAttribute("checked", true);
               document.getElementById("music").setAttribute("checked", true);
               break;
            case 'sports', 'reading':
               document.getElementById("sport").setAttribute("checked", true);
               document.getElementById("read").setAttribute("checked", true);
               break;
            case 'music', 'reading':
               document.getElementById("music").setAttribute("checked", true);
               document.getElementById("read").setAttribute("checked", true);
               break;
            default:
               // document.getElementById("input[type=checkbox]:checked").setAttribute("checked", false);
               break;
         }
      }

      // ---------------------For style change -------------------------

      document.getElementById("email").readOnly = true;
      document.querySelector(".form_password + .form_control").style.display = "none";
      document.getElementById("email").style.color = "gray";
      document.getElementById("main_heading").innerHTML = "UPDATE";
      document.querySelector(".cofpaw").style.display = "none";
      document.querySelector("#reset").style.display = "none";
      document.querySelector("#submit").style.display = "none";
      document.querySelector(".from_register").style.display = "none";

      // -------------------- condition for role change in admin and user-----------------

      if (dat == detail[0].email && role == "user") {
         document.querySelector(".form_role").style.display = "none";
      } else {
         document.querySelector(".form_role").style.display = "block";
      }
      // ----------------------------------------------------------------------------

      let btn = document.createElement("button");
      btn.innerHTML = "Save";
      document.getElementById("my_form").appendChild(btn);

      btn.addEventListener("click", function (e) {
         e.preventDefault();
         let sure = confirm("are you sure save data");
         if (sure == true) {
            btn_click();
         } else {
            console.log("sorry");
         }
      });
   }
}

function btn_click() {

   var user_role = localStorage.getItem("role");
   var main = localStorage.getItem("mainUser");

   role = document.getElementById("role").value;
   name = document.getElementById("firstName")?.value;
   surname = document.getElementById("lastName").value;
   email = document.getElementById("email").value;
   phoneNumber = document.getElementById("phoneNumber").value;
   gender = document.querySelector('input[name="gender"]:checked')?.value;
   country = document.getElementById("country").value;
   city = document.getElementById("city").value;
   state = document.getElementById("countryState").value;
   pinCode = document.getElementById("pinCode").value;
   password = document.getElementById("password").value;
   image = document.getElementById("image").value;
   checkboxes = document.querySelectorAll('input[type=checkbox]:checked');


   const values = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
      .map(item => item.value);

   validation();

   let passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;
   var regex = /^[a-zA-Z]{2,30}$/;

   if ((name == "" || name == null) || (surname == "" || surname == null) || (email == "" || email == null) || (password == "" || password == null) || (gender == "" || gender == null) || (pinCode == "" || pinCode == null) || (country == "" || country == null) || (city == "" || city == null) || (state == "" || state == null) || (checkboxes.length == "" || checkboxes.length == null) || (phoneNumber == "" || phoneNumber == null)) {
      // alert("Please Fill Form ");
   } else if ((name.length <= 2) || (surname.length <= 2) || (password.match(passReg) == null) || (name.match(regex) == null) || (surname.match(regex) == null)) {
      alert("You Fill Wrong Data")
   } else {
      if (dat) {
         let data_chang = data.map((item) => {
            if (item.email == email) {
               item.role = role;
               item.name = name;
               item.surname = surname;
               item.email = email;
               item.phoneNumber = phoneNumber;
               item.gender = gender;
               item.country = country;
               item.city = city;
               item.state = state;
               item.pinCode = pinCode;
               item.password = password;
               item.checkboxes = values;
            }
            return item;
         });

         if (user_role == "user") {
            localStorage.setItem("users", JSON.stringify(data_chang));
            window.location.href = "../profile/profile.html"
         } else if (main != dat) {
            // localStorage.removeItem("loginuser");
            // localStorage.setItem("loginuser", dat);
            localStorage.setItem("users", JSON.stringify(data_chang));
            window.location.href = "../userdashbord/dashbord.html"
         } else {
            localStorage.setItem("users", JSON.stringify(data_chang));
            window.location.href = "../profile/profile.html"
         }
      }
   }
}

document.getElementById("reset").addEventListener("click", function () {
   window.location.reload();
});

function back() { window.history.forward(); }
setTimeout("back()", 0);
window.onunload = function () { null };