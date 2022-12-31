
var role = localStorage.getItem("role");

document.getElementById("admin").style.backgroundColor = "rgb(115, 7, 7)";


if (role == "admin") {

   document.getElementById("user_data").addEventListener("click", function () {
      User();
      this.style.backgroundColor = "rgb(115, 7, 7)";
      document.getElementById("admin").style.backgroundColor = "crimson";
      document.getElementById("search").value = "";
      document.getElementById("dropdown").removeAttribute('disabled', 'disabled');
      document.getElementById("dropdown").value = "5";
   });

   document.getElementById("profile").addEventListener("click", function () {
      window.location.href = "../profile/profile.html"
   });

   document.getElementById("admin").addEventListener("click", function () {
      Admin();
      this.style.backgroundColor = "rgb(115, 7, 7)";
      document.getElementById("user_data").style.backgroundColor = "crimson";
      document.getElementById("search").value = "";
      document.getElementById("dropdown").removeAttribute('disabled', 'disabled');
      document.getElementById("dropdown").value = "5";



   });

   document.getElementById("exit").addEventListener("click", function () {
      localStorage.removeItem("loginuser");
      localStorage.removeItem("mainUser");
      localStorage.removeItem("role");
      window.location.href = "../signin/signin.html"
   });

} else {
   window.location.href = "../signin/signin.html"
}

Admin();

function back() { window.history.forward(); }
setTimeout("back()", 0);
window.onunload = function () { null };


function Admin() {

   let email = localStorage.getItem("mainUser")
   let users = JSON.parse(localStorage.getItem("users")).filter((item) => item.email != email && item.role == "admin");

   const newAdminData = users.map((item, i) => ({
      'srNo': i + 1,
      ...item
   }));

   let list_tr = document.getElementById('list');

   let pageNo = 1;
   let pageTr = 5;

   let role = localStorage.getItem("role");

   if (role === "admin") {

      function renderTable(newAdminData, detail, pageTr, pageNo) {

         detail.innerHTML = "";
         pageNo--;
         let start_index = pageTr * pageNo;
         let end_index = start_index + pageTr;
         let c = newAdminData.slice(start_index, end_index);

         for (let i = 0; i < c.length; i++) {

            let result = document.createElement("tr");

            result.innerHTML = `<tr>

    <td> ${c[i].srNo}</td>

    <td>${c[i].name}</td>
    <td>${c[i].surname}</td>
    <td>${c[i].email}</td>
    <td>${c[i].phoneNumber}</td>
    <td>${c[i].gender}</td>
    <td>${c[i].country}</td>
    <td>${c[i].city}</td>
    <td>${c[i].state}</td>
    <td>${c[i].pinCode}</td>
    <td>${c[i].checkboxes}</td>

    <td style='text-align:'> <input type='radio'  name='status${i}' onChange="act('${c[i].email}')" 
    ${c[i].status ? "checked" : ""} > Active </input> 
    <input type='radio' name='status${i}' onChange="dct('${c[i].email}')" 
    ${c[i].status ? "" : "checked"}>Deactive </input> </td>

    <td>
    <button class='clear_data' onClick="del('${c[i].email}')">Delete</button>
    </td>
    </tr>`;

            detail.appendChild(result);
         }

         let total_page = Math.ceil(newAdminData.length / pageTr);
         let pagination = document.getElementById('pagination');

         pagination.innerHTML = "";

         for (let i = 1; i < total_page + 1; i++) {
            let btn = pagination_number(i, newAdminData);
            pagination.appendChild(btn);
         }
         if (pagination.innerHTML === "") {
            document.getElementById('next').style.display = "none";
            document.getElementById('prev').style.display = "none";
         }
      }
   } else {
      window.location.href = "../signin/signin.html"
   }

   // --------------------------------Pagination---------------------------------

   function pagination_number(page, newAdminData) {

      let btn = document.createElement('button');
      let prev = document.getElementById('prev');
      let next = document.getElementById('next');

      btn.innerText = page;

      if (pageNo == 1) {
         prev.style.display = 'none';
      } else {
         prev.style.display = 'block';
      }

      if (pageNo == page) {
         btn.classList.add('active');
         next.style.display = 'none';
      } else {
         next.style.display = 'block';
      }

      btn.addEventListener('click', function () {
         pageNo = page;
         btn.classList.add('active');
         renderTable(newAdminData, list_tr, pageTr, pageNo);
      });

      return btn;
   }
   renderTable(newAdminData, list_tr, pageTr, pageNo);

   document.getElementById("prev").addEventListener("click", function () {
      pageNo--;
      renderTable(newAdminData, list_tr, pageTr, pageNo);
   })

   document.getElementById("next").addEventListener("click", function () {
      pageNo++;
      renderTable(newAdminData, list_tr, pageTr, pageNo);
   })


   document.getElementById("dropdown").addEventListener('change', function () {
      let select = this.value;
      pageTr = parseInt(select);
      pageNo = 1;
      renderTable(newAdminData, list_tr, pageTr, pageNo);
   })


   // ---------------------------------- Sorting-------------------------------------

   document.querySelectorAll('#catTable thead tr th').forEach(t => {
      t.addEventListener('click', sort, false);
   });

   let sortCol;
   let sortAsc = false;

   function sort(e) {

      let thisSort = e.target.dataset.sort;

      if (thisSort === "active" || thisSort === "deactive") {
         if (sortCol === thisSort) sortAsc = !sortAsc;
         sortCol = thisSort;
         newAdminData.sort((a, b) => {
            if (a.status < b.status) return sortAsc ? 1 : -1;
            if (a.status > b.status) return sortAsc ? -1 : 1;
            return 0;
         });
         renderTable(newAdminData, list_tr, pageTr, pageNo);
      } else {
         if (sortCol === thisSort) sortAsc = !sortAsc;
         sortCol = thisSort;
         newAdminData.sort((a, b) => {
            if (a[sortCol] < b[sortCol]) return sortAsc ? 1 : -1;
            if (a[sortCol] > b[sortCol]) return sortAsc ? -1 : 1;
            return 0;
         });
         renderTable(newAdminData, list_tr, pageTr, pageNo);
      }
   }

   // ---------------------------Searching Data-------------------------------

   var newArray = [];

   document.getElementById("search").addEventListener("keyup", function () {

      var search = this.value.toLowerCase();

      if (search == "") {
         document.getElementById("dropdown").removeAttribute('disabled', 'disabled');
      } else {
         document.getElementById("dropdown").setAttribute('disabled', 'disabled');
      }

      newArray = newAdminData.filter(function (val) {

         if (val.name.includes(search) || val.surname.includes(search) || val.email.includes(search) ||
            val.phoneNumber.includes(search) || val.pinCode.includes(search) || val.gender.includes(search) ||
            val.country.toLowerCase().includes(search) || val.city.toLowerCase().includes(search) ||
            val.state.toLowerCase().includes(search)) {

            var newObj = {
               name: val.name,
               surname: val.surname,
               email: val.email,
               phoneNumber: val.phoneNumber,
               pinCode: val.pinCode,
               gender: val.gender,
               country: val.country,
               city: val.city,
               state: val.state,
               checkboxes: val.checkboxes
            }
            return newObj;
         }
      })
      renderTable(newArray, list_tr, pageTr, pageNo);

   })
}

function User() {

   let user = JSON.parse(localStorage.getItem("users")).filter((item) => item.role === "user");

   const newData = user.map((item, i) => ({
      'srNo': i + 1,
      ...item
   }));

   let list_tr = document.getElementById('list');

   let pageNo = 1;
   let pageTr = 5;

   let role = localStorage.getItem("role");

   if (role === "admin") {

      function renderTable(newData, detail, pageTr, pageNo) {

         detail.innerHTML = "";
         pageNo--;
         let start_index = pageTr * pageNo;
         let end_index = start_index + pageTr;
         let c = newData.slice(start_index, end_index);

         for (let i = 0; i < c.length; i++) {

            let result = document.createElement("tr");

            result.innerHTML = `<tr>

    <td> ${c[i].srNo}</td>
    <td>${c[i].name}</td>
    <td>${c[i].surname}</td>
    <td>${c[i].email}</td>
    <td>${c[i].phoneNumber}</td>
    <td>${c[i].gender}</td>
    <td>${c[i].country}</td>
    <td>${c[i].city}</td>
    <td>${c[i].state}</td>
    <td>${c[i].pinCode}</td>
    <td>${c[i].checkboxes}</td>

    <td style='text-align:'> <input type='radio'  name='status${i}' onChange="act('${c[i].email}')" 
    ${c[i].status ? "checked" : ""} > Active </input> 
    <input type='radio' name='status${i}' onChange="dct('${c[i].email}')" 
    ${c[i].status ? "" : "checked"}>Deactive </input> </td>

    <td><button class='edt_data' onClick="edt('${c[i].email}')"> Edit </button>
    <button class='clear_data' onClick="del('${c[i].email}')">Delete</button>
    </td>
    </tr>`;

            detail.appendChild(result);
         }

         let total_page = Math.ceil(newData.length / pageTr);
         let pagination = document.getElementById('pagination');

         pagination.innerHTML = "";

         for (let i = 1; i < total_page + 1; i++) {
            let btn = pagination_number(i, newData);
            pagination.appendChild(btn);
         }

         if (pagination.innerHTML === "") {
            document.getElementById('next').style.display = "none";
            document.getElementById('prev').style.display = "none";
         }
      }
   } else {
      window.location.href = "../signin/signin.html"
   }

   // --------------------------------Pagination---------------------------------

   function pagination_number(page, newData) {

      let btn = document.createElement('button');
      let prev = document.getElementById('prev');
      let next = document.getElementById('next');

      btn.innerText = page;

      if (pageNo == 1) {
         prev.style.display = 'none';
      } else {
         prev.style.display = 'block';
      }

      if (pageNo == page) {
         btn.classList.add('active');
         next.style.display = 'none';
      } else {
         next.style.display = 'block';
      }

      btn.addEventListener('click', function () {
         pageNo = page;
         btn.classList.add('active');
         renderTable(newData, list_tr, pageTr, pageNo);
      });

      return btn;
   }
   renderTable(newData, list_tr, pageTr, pageNo);

   document.getElementById("prev").addEventListener("click", function () {
      pageNo--;
      renderTable(newData, list_tr, pageTr, pageNo);
   })

   document.getElementById("next").addEventListener("click", function () {
      pageNo++;
      renderTable(newData, list_tr, pageTr, pageNo);
   })

   document.getElementById("dropdown").addEventListener('change', function () {
      let select = this.value;
      pageTr = parseInt(select);
      pageNo = 1;
      renderTable(newData, list_tr, pageTr, pageNo);
   })

   // ---------------------------------- Sorting-------------------------------------

   document.querySelectorAll('#catTable thead tr th').forEach(t => {
      t.addEventListener('click', sort, false);
   });

   let sortCol;
   let sortAsc = false;

   function sort(e) {

      let thisSort = e.target.dataset.sort;

      if (thisSort === "active" || thisSort === "deactive") {
         if (sortCol === thisSort) sortAsc = !sortAsc;
         sortCol = thisSort;
         newData.sort((a, b) => {
            if (a.status < b.status) return sortAsc ? 1 : -1;
            if (a.status > b.status) return sortAsc ? -1 : 1;
            return 0;
         });
         renderTable(newData, list_tr, pageTr, pageNo);
      } else {
         if (sortCol === thisSort) sortAsc = !sortAsc;
         sortCol = thisSort;
         newData.sort((a, b) => {
            if (a[sortCol] < b[sortCol]) return sortAsc ? 1 : -1;
            if (a[sortCol] > b[sortCol]) return sortAsc ? -1 : 1;
            return 0;
         });
         renderTable(newData, list_tr, pageTr, pageNo);
      }
   }

   // ---------------------------Searching Data-------------------------------


   //   document.getElementById("dropdown").setAttribute("disabled", "disabled");

   var newArray = [];

   document.getElementById("search").addEventListener("keyup", function () {

      var search = this.value.toLowerCase();

      newArray = newData.filter(function (val) {

         if (val.name.includes(search) || val.surname.includes(search) || val.email.includes(search) ||
            val.phoneNumber.includes(search) || val.pinCode.includes(search) || val.gender.includes(search) ||
            val.country.toLowerCase().includes(search) || val.city.toLowerCase().includes(search) ||
            val.state.toLowerCase().includes(search)) {

            var newObj = {
               name: val.name,
               surname: val.surname,
               email: val.email,
               phoneNumber: val.phoneNumber,
               pinCode: val.pinCode,
               gender: val.gender,
               country: val.country,
               city: val.city,
               state: val.state,
               checkboxes: val.checkboxes
            }
            return newObj;
         }
      })
      renderTable(newArray, list_tr, pageTr, pageNo);
   })

}


function edt(email) {
   localStorage.setItem("loginuser", email);
   window.location.href = "../signup/signup.html";
}


function del(email) {

   var dat = new Array();
   dat = JSON.parse(localStorage.getItem("users"));

   let result = confirm("are you sure!! you want to delete data");
   if (result == true) {
      result = dat.filter((item) => item.email !== email);
      localStorage.setItem("users", JSON.stringify(result));
      window.location.reload();
   }
}

function dct(email) {

   var dat = new Array();
   dat = JSON.parse(localStorage.getItem("users"));

   let deactive = false;
   let chang_data = dat.map((item) => {
      if (item.email == email) {
         item.status = deactive;
      }
      return item;
   });
   localStorage.setItem("users", JSON.stringify(chang_data));
}


function act(email) {

   var dat = new Array();
   dat = JSON.parse(localStorage.getItem("users"));

   let active = true;
   let chang_data = dat.map((item) => {
      if (item.email == email) {
         item.status = active;
      }
      return item;
   });
   localStorage.setItem("users", JSON.stringify(chang_data));
}
