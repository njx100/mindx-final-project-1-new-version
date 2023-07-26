import { userDatas, setLocalStorage } from "../modules/databases.js";
// Sign Up function
function signUp() {
  let userData = JSON.parse(localStorage.getItem("dataUser"));
  let name = document.getElementById("signupName").value;
  let id = document.getElementById("signupId").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  //
  if (name && id && email && password) {
    // Retrieve user data from localStorage

    // Check if user already exists
    let existingUser = userData.find(function (user) {
      return user.email === email || user.user_name === id;
    });

    if (existingUser) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        iconColor: "black",
        title: "Id or Email already exists!",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      let user = {
        name: name,
        user_name: id,
        email: email,
        password: password,
        profile_photo: "",
      };
      // push user
      userDatas.push(user);
      // cập nhật local
      setLocalStorage();
      // thông báo
      let Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        iconColor: "#000",
        title: "Signed Up successfully",
      });
      setTimeout(function () {
        // chuyển sang trang login
        window.location.href = "./sign-in.html";
      }, 1500);
    }
  } else {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "warning",
      iconColor: "black",
      title: "Please fill in all the fields!",
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
//gán sự kiện reg acc
const btnSignUp = document.querySelector("button#btn-sign-up");
if (btnSignUp) {
  btnSignUp.addEventListener("click", signUp);
}
// hàm login
function signIn() {
  let userData = JSON.parse(localStorage.getItem("dataUser"));
  let email = document.getElementById("signInEmail").value;
  let password = document.getElementById("signInPassword").value;

  if (email && password) {
    // Retrieve user data from localStorage

    // Check if user exists
    let user = userData.find(function (user) {
      return (
        (user.email === email && user.password === password) ||
        (user.user_name === email && user.password === password)
      );
    });

    if (user) {
      // lưu data vào session
      sessionStorage.setItem("emailUser", user.email);

      // thông báo đăng nhập
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        iconColor: "#000",
        title: "Signed In successfully",
      });
      setTimeout(function () {
        // chuyển sang trang index
        window.location.href = "../index.html";
      }, 1000);
    } else {
      // alert("Invalid Id or Email and password!");
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        iconColor: "black",
        title: "Invalid Id or Email and password!",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  } else {
    // alert("Please fill in all the fields!");
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "warning",
      iconColor: "black",
      title: "Please fill in all the fields!",
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
// gán sự kiện login
const btnSignIn = document.querySelector("button#btn-sign-in");
if (btnSignIn) {
  btnSignIn.addEventListener("click", signIn);
}

let emailSignIn = document.querySelector("#signInEmail");
let passwordSignIn = document.querySelector("#signInPassword");
if (emailSignIn || passwordSignIn) {
  emailSignIn.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn không cho trang web tải lại
      signIn(); // Gọi hàm đăng nhập
    }
  });
  passwordSignIn.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn không cho trang web tải lại
      signIn(); // Gọi hàm đăng nhập
    }
  });
}
