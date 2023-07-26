import {
  menu,
  orderList,
  dataTrackOrder,
  userDatas,
} from "../modules/databases.js";
//init sidebar & navbar
const listItems = document.querySelectorAll(".sidebar ul li");
const sidebarEl = document.getElementById("side_nav");
const closeBtnEl = document.querySelector(".sidebar-close-btn");
const sidebarOpenBtnEl = document.querySelector(".open-btn");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
    document.querySelector(".live").classList.remove("live");
    let id = item.dataset.id + "-content";
    document.getElementById(id).classList.add("live");
  });
});

closeBtnEl.addEventListener("click", () => {
  sidebarEl.style.marginLeft = "-250px";
});

sidebarOpenBtnEl.addEventListener("click", () => {
  sidebarEl.style.marginLeft = "0px";
});
// init menu row
let menuRowHTML = "";
for (let i = 0; i < menu.length; i++) {
  menuRowHTML += `
    <div class="col-12 col-md-6 col-lg-3 d-block g-3 my-2 rounded-2">
      <div class="card-image m-0">
        <img src="${menu[i].image}"class="card-img-top rounded-top-1" alt="error">
      </div>
      <div class="card-body bg-white p-4">
        <div class="card-description fs-6">

          <div class="row justify-content-between align-items-center">
            <h5 class="col-8 text-start card-title fs-6">${menu[i].name}</h5>
            <h4 class="col-4">
              <span class="badge badge-primary fs-6 p-2">$${menu[i].price}</span>
            </h4>
          </div>

          <div class="d-flex justify-content-between align-items-center mt-2">
            <p class="mb-0">
              <span>Ordered: </span>
              <strong>${menu[i].totalOrderedQuantity}</strong>
            </p>
            <p class="mb-0">
              <span>Revenue: </span>
              <strong>$${menu[i].totalRevenue}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    `;
}

document.querySelector(".menu-row").innerHTML = menuRowHTML;
// init order list
let orderListHTML = "";
for (let i = 0; i < orderList.length; i++) {
  let infoOrders = orderList[i];
  let status = orderList[i].status;
  let totalPrice = infoOrders.price * infoOrders.quantity;

  if (status === "Pending") {
    status = `<span class="badge text-bg-danger px-2 py-1 text-light">Pending</span>`;
  } else if (status === "Delivered") {
    status = `<span class="badge text-bg-success px-2 py-1 text-light">Delivered</span>`;
  } else if (status === "Cancelled") {
    status = `<span class="badge text-bg-dark px-2 py-1 text-light">Cancelled</span>`;
  } else if (status === "Preparing") {
    status = `<span class="badge text-bg-warning px-2 py-1 text-light">Preparing</span>`;
  } else if (status === "Ordered") {
    status = `<span class="badge text-bg-info px-2 py-1 text-light">Ordered</span>`;
  }

  orderListHTML += `
    <tr>
      <td class="text-secondary">${infoOrders.id}</th>
      <td class="text-secondary">${infoOrders.orderName}</td>
      <td class="text-secondary">${infoOrders.customerName}</td>
      <td class="text-secondary">${infoOrders.location}</td>
      <td class="text-secondary">${infoOrders.deliveryTime}</td>
      <td class="text-secondary">${infoOrders.quantity}</td>
      <td class="text-secondary">$${infoOrders.price}</td>
      <td class="text-secondary"><b>$${totalPrice}</b></td>
      <td class="text-secondary">${status}</td>
      <td class="text-secondary">
      <i class="mx-2 fa fa-pencil color-muted" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"></i>
      <i class="mx-2 fa fa-close color-danger" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Close"></i>
      </td>
    </tr>
  `;
}

document.querySelector("tbody").innerHTML = orderListHTML;

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const closeIcons = document.querySelectorAll(".fa-close");

closeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const row = icon.closest("tr");
    const tooltip = tooltipList.find((t) => t._element === icon);
    const urser = userDatas.find((info) => {
      return emailUser === info.email;
    });
    if (urser) {
      if (tooltip) {
        tooltip.dispose();
      }
      row.remove();
    } else {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        text: "Please login to perform this action!",
        color: "red",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  });
});
// welcome

const dataMember = JSON.parse(localStorage.getItem("dataUser"));
const emailUser = sessionStorage.getItem("emailUser");
const welcome = document.querySelector("div#welcome");
const avaUser = document.querySelector("div.profile-bg");
const hiddenNavUrser = document.querySelector("ul.nav-hidden");
const urserLogout = document.querySelector("a#log-out");

let users = dataMember.find((user) => {
  return user.email === emailUser;
});
if (users) {
  hiddenNavUrser.style = "visibility: visible";
  welcome.innerHTML = `<div class="text-start"><p class="urser-login">Hi!<strong class="text-uppercase" > ${users.name}</strong>, Welcome back!<br/><span style="
  color: #808080;
  font-size: 0.9rem"><i>Your restaurent admin dashboard</i></span></p></div>`;
  avaUser.innerHTML = `<img src="${users.profile_photo}" alt="${users.name}">`;
}

for (let i = 0; i < dataMember.length; i++) {
  let email = dataMember[i].email;
  let avar = dataMember[i].profile_photo;
  if (email === emailUser) {
    if (avar === "") {
      avaUser.innerHTML = `<img src="./images/profile_photos/default.png" alt="${dataMember[i].name}">`;
    }
  }
}
urserLogout.addEventListener("click", () => {
  sessionStorage.removeItem("emailUser");
});
// track order
let button = document.querySelector("button.btn-track-order");
const inputOrder = document.querySelector("input.value-track-order");
button.addEventListener("click", () => {
  const orderStatus = document.querySelector("span#order-status");
  const openOrder = document.querySelector("ul.open");
  const calcelOrder = document.querySelector("ul.calcel");
  let valueOrder = inputOrder.value;
  if (valueOrder === "") {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      text: "Please enter the order code!",
      color: "red",
      showConfirmButton: false,
      timer: 3000,
    });
  } else if (valueOrder !== "") {
    let order = dataTrackOrder.find((item) => {
      return item.id === valueOrder;
    });

    if (order) {
      if (order.cancelled === true) {
        orderStatus.innerHTML = `Your order has been <strong><i>Cancelled</i></strong>`;
        openOrder.style = "display: none";
        calcelOrder.style = "display: table";
        return;
      } else if (order.cancelled === false) {
        let lastTrueIndex = -1;
        Object.keys(order).forEach(function (key, index) {
          if (order[key]) {
            lastTrueIndex = index;
          }
        });
        // check trạng thái order
        let status = Object.keys(order)[lastTrueIndex];
        orderStatus.innerHTML = `Your order is now : <strong class="status">${status}</strong>`;
        openOrder.style = "display: table";
        calcelOrder.style = "display: none";
        // Đổi màu sắc của vị trí cuối cùng có giá trị true
        let listItems = document.querySelectorAll("ul.multi-steps li");
        listItems.forEach((item) => {
          item.classList.remove("active");
        });
        if (lastTrueIndex === 1) {
          listItems[1].classList.add("active");
        } else if (lastTrueIndex > 1) {
          let lastTrueElement = document.querySelector(
            ".multi-steps li:nth-child(" + lastTrueIndex + ")"
          );
          lastTrueElement.classList.add("active");
        }
      }
    } else {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        text: "This order was not found, please check again!",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }
});

// click track order
const listLi = document.querySelectorAll("ul.multi-steps li");
listLi.forEach(function (item) {
  item.addEventListener("click", function () {
    // Xóa lớp "active" của tất cả các phần tử <li> trong danh sách
    listLi.forEach(function (otherItem) {
      otherItem.classList.remove("active");
    });

    // Thêm lớp "active" cho phần tử <li> được click
    item.classList.add("active");
  });
});
