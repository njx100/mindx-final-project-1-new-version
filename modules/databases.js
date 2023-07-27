export let restaurantRatings = [220, 420, 260, 460];

// data review
export let reviewData = [
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    name: "Antony Jonus",
    rating: 5,
    review:
      "This place is our go-to spot because the service is outstanding and the management really knows how to take care of their customers.",
  },
  {
    img: "https://images.unsplash.com/photo-1561828970-daff2303fe58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    name: "Terrence Mitchell",
    rating: 3,
    review:
      "I am over the days that they cannot hire and staff our stores properly. I entered the establishment and was NOT greeted",
  },
  {
    img: "https://images.unsplash.com/photo-1552162864-987ac51d1177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    name: "Shacobia A",
    rating: 5,
    review: "Yummy food 😋 😋 great staff 👍👍 I highly recommend it 👌 👌",
  },
  {
    img: "https://images.unsplash.com/photo-1545194827-db87df1649d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    name: "Karen Moe",
    rating: 2,
    review:
      "Every time I come here, I wonder why I come back.They give you like one slice of each kind of meat on a small sub... I always feel like I need to stop somewhere else to fill up. ",
  },
];
// data visit hour
export let visitHourData = [
  {
    day: 1,
    month: 5,
    year: 2023,
    customerDay: 73,
    customerNight: 57,
  },
  {
    day: 2,
    month: 5,
    year: 2023,
    customerDay: 44,
    customerNight: 80,
  },
  {
    day: 3,
    month: 5,
    year: 2023,
    customerDay: 55,
    customerNight: 50,
  },
  {
    day: 4,
    month: 5,
    year: 2023,
    customerDay: 21,
    customerNight: 79,
  },
  {
    day: 5,
    month: 5,
    year: 2023,
    customerDay: 34,
    customerNight: 20,
  },
  {
    day: 6,
    month: 5,
    year: 2023,
    customerDay: 100,
    customerNight: 93,
  },
  {
    day: 7,
    month: 5,
    year: 2023,
    customerDay: 87,
    customerNight: 85,
  },
];
// data chart earnings , order , pending , revenue , expense
export let categoriesChart = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
];
export let dataCharts = [
  [2056, 1905, 2195, 2239, 1766, 2329, 2305, 2658],
  [732, 627, 535, 517, 313, 268, 354, 241],
  [2794, 3400, 3453, 3374, 2842, 3501, 2850, 3422],
  [3132, 2127, 2635, 2117, 1413, 1928, 2154, 1841],
];
// data menu
export let menu = [
  {
    name: "French Costini",
    image: "./images/menu_photos/french-crostini.jpg",
    totalOrderedQuantity: 5290,
    totalRevenue: 7904,
    price: 29,
    ingredients: "French, Spicy",
  },

  {
    name: "Fried Egg Sandwich",
    image: "./images/menu_photos/fried-egg-sandwich.jpg",
    totalOrderedQuantity: 5783,
    totalRevenue: 8460,
    price: 34,
    ingredients: "Egg, Sandwich",
  },

  {
    name: "Pizza Hot Chilli",
    image: "./images/menu_photos/pizza-hot-chili.jpg",
    totalOrderedQuantity: 3862,
    totalRevenue: 6483,
    price: 17,
    ingredients: "Hot, Spicy",
  },

  {
    name: "Lemon Yogurt Parfait",
    image: "./images/menu_photos/lemon-yoghurt.jpg",
    totalOrderedQuantity: 2518,
    totalRevenue: 2789,
    price: 28,
    ingredients: "Juice, Cold",
  },
];
// data order list
export let orderList = [
  {
    id: 54321,
    orderName: "Lemon Yogurt Parfait",
    customerName: "Cristiano Ronaldo",
    location: "Madrid",
    deliveryTime: "08:30",
    quantity: 7,
    price: 28,
    status: "Ordered",
  },
  {
    id: 54565,
    orderName: "Fresh Crostini",
    customerName: "Adam Smith",
    location: "Gulshan",
    deliveryTime: "10:20",
    quantity: 5,
    price: 29,
    status: "Pending",
  },

  {
    id: 54265,
    orderName: "Multigrain Hot Cereal",
    customerName: "John Doe",
    location: "Baridhara",
    deliveryTime: "3:00",
    quantity: 4,
    price: 87,
    status: "Delivered",
  },

  {
    id: 54235,
    orderName: "French Fry",
    customerName: "Maximillian",
    location: "Khilgaon",
    deliveryTime: "2:00",
    quantity: 6,
    price: 65,
    status: "Cancelled",
  },

  {
    id: 54587,
    orderName: "Fried Egg Sandwich",
    customerName: "John Johnson",
    location: "Gulshan",
    deliveryTime: "11:00",
    quantity: 3,
    price: 34,
    status: "Pending",
  },

  {
    id: 54521,
    orderName: "Pizza",
    customerName: "Mike Hussy",
    location: "Banani",
    deliveryTime: "12:00",
    quantity: 5,
    price: 17,
    status: "Preparing",
  },
];
// data urser
export let userDatas = [
  {
    name: "Dang",
    profile_photo: "./images/profile_photos/pfp1.jpeg",
    user_name: "dang111",
    password: "dang123",
    email: "dang111@gmail.com",
  },
  {
    name: "Hai",
    profile_photo: "./images/profile_photos/pfp2.jpeg",
    user_name: "hai222",
    password: "hai123",
    email: "hai222@gmail.com",
  },
  {
    name: "Nhi",
    profile_photo: "./images/profile_photos/pfp3.jpeg",
    user_name: "nhi333",
    password: "nhi321",
    email: "nhi333@gmail.com",
  },
  {
    name: "Thinh",
    profile_photo: "./images/profile_photos/pfp4.jpeg",
    user_name: "thinh444",
    password: "thinh321",
    email: "thinh444@gmail.com",
  },
];
// data track order
export let dataTrackOrder = [
  {
    id: "ORDER-54321",
    ordered: true,
    pending: false,
    preparing: false,
    delivery: false,
    received: false,
    cancelled: false,
  },
  {
    id: "ORDER-54565",
    ordered: true,
    pending: true,
    preparing: false,
    delivery: false,
    received: false,
    cancelled: false,
  },
  {
    id: "ORDER-54265",
    ordered: true,
    pending: true,
    preparing: true,
    delivery: true,
    received: false,
    cancelled: false,
  },
  {
    id: "ORDER-54235",
    ordered: false,
    pending: false,
    preparing: false,
    delivery: false,
    received: false,
    cancelled: true,
  },
  {
    id: "ORDER-54587",
    ordered: true,
    pending: true,
    preparing: false,
    delivery: false,
    received: false,
    cancelled: false,
  },
  {
    id: "ORDER-54521",
    ordered: true,
    pending: true,
    preparing: true,
    delivery: false,
    received: false,
    cancelled: false,
  },
];
//function update local
export function setLocalStorage() {
  localStorage.setItem("dataUser", JSON.stringify(userDatas));
}
// const jsonUserData = JSON.stringify(userDatas)  //chuyển mảng sang string
// localStorage.setItem('dataUser', jsonUserData)  //lưu vào localstorage
let savedDatas = JSON.parse(localStorage.getItem("dataUser"));
if (savedDatas) {
  userDatas = savedDatas;
}
localStorage.setItem("dataUser", JSON.stringify(userDatas));
