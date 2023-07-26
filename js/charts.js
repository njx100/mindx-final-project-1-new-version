import {
  reviewData,
  visitHourData,
  categoriesChart,
  dataCharts,
} from "../modules/databases.js";

// init chart chart earnings , order , pending , revenue , expense
const divChart = document.querySelectorAll("div.chart-inner");
const arrDiv = Array.from(divChart);
arrDiv[0].innerHTML = `<div class="cart rounded-1 mt-2 mt-xl-0 bg-white">
<div class="card-body pt-3">
  <div class="row justify-content-between">
    <div class="col-6">
      <h5 class="text-muted mb-3">Order</h5>
    </div>
    <div class="total col-6"></div>
  </div>
  <div class="percent_1 text-start pd-s"></div>
</div>
<div class="chart-wrapper">
  <div id="chart_order" class="home_chart_widget"></div>
</div>
</div>`;
arrDiv[1].innerHTML = `<div class="cart rounded-1 mt-2 mt-xl-0 bg-white">
<div class="card-body pt-3">
  <div class="row justify-content-between">
    <div class="col-6">
      <h5 class="text-muted mb-3">Pending</h5>
    </div>
    <div class="total col-6"></div>
  </div>
  <div class="percent_2 text-start pd-s"></div>
</div>
<div class="chart-wrapper">
  <div id="chart_pending" class="home_chart_widget"></div>
</div>
</div>`;
arrDiv[2].innerHTML = ` <div class="cart rounded-1 mt-2 bg-white">
<div class="card-body pt-3">
  <div class="row justify-content-between">
    <div class="col-6">
      <h5 class="text-muted mb-3">Revenue</h5>
    </div>
    <div class="total col-6"></div>
  </div>
  <div class="percent_3 text-start pd-s"></div>
</div>
<div class="chart-wrapper">
  <div id="chart_revenue" class="home_chart_widget"></div>
</div>
</div>`;
arrDiv[3].innerHTML = `<div class="cart rounded-1 mt-2 bg-white">
<div class="card-body pt-3">
  <div class="row justify-content-between">
    <div class="col-6">
      <h5 class="text-muted mb-3">Expense</h5>
    </div>
    <div class="total col-6"></div>
  </div>
  <div class="percent_4 text-start pd-s"></div>
</div>
<div class="chart-wrapper">
  <div id="chart_expense" class="home_chart_widget"></div>
</div>
</div>`;
//init chart
const [dataOrder, dataPending, dataEarning, dataExpense] = dataCharts;
// chart right
Highcharts.chart("chart_earnings", {
  chart: {
    type: "column",
  },
  title: {
    text: "EARNINGS",
    align: "left",
  },
  xAxis: {
    categories: categoriesChart,
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
    crosshair: true,
    labels: {
      formatter: function () {
        return this.value + "$";
      },
    },
    gridLineWidth: 0,
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span></br>',
    valueSuffix: "$",
  },
  plotOptions: {
    column: {
      stacking: "normal",
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Expense",
      data: dataExpense,
      color: "#E4E6E9",
    },
    {
      name: "Earning",
      data: dataEarning,
      color: "#F24A4A",
    },
  ],
}); // end chart right

// chart left
// order

Highcharts.chart("chart_order", {
  chart: {
    type: "area",
  },
  title: {
    text: null,
  },

  yAxis: {
    visible: false,
    title: {
      useHTML: false,
      text: null,
    },
  },
  xAxis: {
    visible: false,
    categories: categoriesChart,
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span><br>',
    valueSuffix: "$",
  },
  plotOptions: {
    area: {
      stacking: "normal",
      lineColor: "#EE0D0D",
      lineWidth: 2,
      fillOpacity: 0.5,
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Order",
      data: dataOrder,
      color: "#EE0D0D",
    },
  ],
});
// end order
// pending
Highcharts.chart("chart_pending", {
  chart: {
    type: "area",
  },
  title: {
    text: null,
    align: "left",
  },

  yAxis: {
    visible: false,
    title: {
      useHTML: true,
      text: null,
    },
  },
  xAxis: {
    visible: false,
    categories: categoriesChart,
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span><br>',
    valueSuffix: "$",
  },
  plotOptions: {
    area: {
      stacking: "normal",
      lineColor: "#95CC47",
      lineWidth: 2,
      fillOpacity: 0.5,
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Pending",
      data: dataPending,
      color: "#95CC47",
    },
  ],
});
// end pending
// revenue
Highcharts.chart("chart_revenue", {
  chart: {
    type: "area",
  },
  title: {
    text: null,
    align: "left",
  },

  yAxis: {
    visible: false,
    title: {
      useHTML: true,
      text: "",
    },
  },
  xAxis: {
    visible: false,
    categories: categoriesChart,
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span><br>',
    valueSuffix: "$",
  },
  plotOptions: {
    area: {
      stacking: "normal",
      lineColor: "#40C4FF",
      lineWidth: 2,
      fillOpacity: 0.5,
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Revenue",
      data: dataEarning,
      color: "#40C4FF",
    },
  ],
});
//end revenue
//expense
Highcharts.chart("chart_expense", {
  chart: {
    type: "area",
  },
  title: {
    text: null,
    align: "left",
  },

  yAxis: {
    visible: false,
    title: {
      useHTML: true,
      text: "",
    },
  },
  xAxis: {
    visible: false,
    categories: categoriesChart,
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span><br>',
    valueSuffix: "$",
  },
  plotOptions: {
    area: {
      stacking: "normal",
      lineColor: "#FCB322",
      lineWidth: 2,
      fillOpacity: 0.5,
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Expense",
      data: dataExpense,
      color: "#FCB322",
    },
  ],
});
// end expense
const sumArr = [];
for (let i = 0; i < dataCharts.length; i++) {
  const divIncDec = document.querySelector("div.percent_" + (i + 1));
  const percent = dataCharts[i];
  const incDec =
    ((percent[percent.length - 1] - percent[percent.length - 2]) /
      percent[percent.length - 2]) *
    100;
  let showIncDec = "";
  if (incDec < 0) {
    showIncDec += `<span class="decrease"><i class="fa-solid fa-down-long"></i></i> ${Math.abs(
      incDec.toFixed(1)
    )}%</span><p style="
    color: #808080;
    font-size: 0.9rem;
">Since last month</p>`;
    divIncDec.innerHTML = showIncDec;
  } else {
    showIncDec += `<span class="increase"><i class="fa-solid fa-up-long"></i> ${incDec.toFixed(
      1
    )}%</span><p style="
    color: #808080;
    font-size: 0.9rem;
">Since last month</p>`;
    divIncDec.innerHTML = showIncDec;
  }
  const sum = dataCharts[i].reduce((acc, cur) => acc + cur, 0);
  sumArr.push(sum);
}
const divs = document.querySelectorAll("div.total");
for (let i = 0; i < divs.length; i++) {
  divs[i].innerHTML = `<h4>${sumArr[i].toLocaleString()}</h4>`;
}
// init chart restaurant rating
const food = 220;
const service = 420;
const waiting_time = 260;
const others = 460;
const [review_0, review_1, review_2, review_3] = reviewData;

let total = food + service + waiting_time + others;

// render html element
const restaurantRatingEl = document.querySelector(".restaurant-rating");
// render stars function
const renderStars = (num) => {
  let starArr = [];
  let star = `<span><i class="fa-solid fa-star" style="color: #6c757d;"></i></span>`;
  let negativeStar = `<span><i class="fa-regular fa-star" style="color: #6c757d;"></i></span>`;
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      starArr.push(star);
    } else {
      starArr.push(negativeStar);
    }
  }
  return starArr.join("");
};

const restaurantRatingHTML = `<div class="card border-0">
<div class="card-header bg-white border-0">
  <h4 class="mx-3 mt-3 text-start h5">RESTAURANT RATING</h4>
  <ul
    class="nav nav-tabs card-header-tabs justify-content-end align-items-center me-1 me-lg-5"
  >
    <li class="nav-item rounded">
      <a class="nav-link graph-tab text-dark selected-tab"
        >Graph</a
      >
    </li>
    <li class="nav-item rounded">
      <a class="nav-link reviews-tab text-dark">Reviews</a>
    </li>
  </ul>
</div>
<div class="card-body">
  <div class="graph-tab-content">
    <div class="row justify-content-between align-items-center px-5">
      <div class="col-12 col-md-6 my-4 mx-auto justify-content-center align-items-center position-relative">
        <canvas id="rating-doughnut-chart"></canvas>
      </div>
      <div
        class="col-12 col-md-5 progress-rating-chart justify-content-between"
      >
        <div>
          <div class="row justify-content-between text-start">
            <p class="col-12 col-lg-6 mb-0">Food</p>
            <p class="col-12 col-lg-6 mb-2">${food} (${(
  (food / total) *
  100
).toFixed(2)}%)</p>
          </div>
          <div class="progress">
            <div
              class="progress-bar rounded-pill bg-food"
              style="width: ${(food / total) * 100}%"
              role="progressbar" title="progressbar"
            ></div>
          </div>
        </div>
        <div class="mt-4">
          <div class="row justify-content-between text-start">
            <p class="col-12 col-lg-6 mb-0">Service</p>
            <p class="col-12 col-lg-6 mb-2">${service} (${(
  (service / total) *
  100
).toFixed(2)}%)</p>
          </div>
          <div class="progress">
            <div
              class="progress-bar rounded-pill bg-service"
              style="width: ${(service / total) * 100}%"
              role="progressbar" title="progressbar"
            ></div>
          </div>
        </div>
        <div class="mt-4">
          <div class="row justify-content-between text-start">
            <p class="col-12 col-lg-6 mb-0">Waiting Time</p>
            <p class="col-12 col-lg-6 mb-2">${waiting_time} (${(
  (waiting_time / total) *
  100
).toFixed(2)}%)</p>
          </div>
          <div class="progress">
            <div
              class="progress-bar rounded-pill bg-waiting_time"
              style="width: ${(waiting_time / total) * 100}%"
              role="progressbar" title="progressbar"
            ></div>
          </div>
        </div>
        <div class="mt-4">
          <div class="row justify-content-between text-start">
            <p class="col-12 col-lg-6 mb-0">Others</p>
            <p class="col-12 col-lg-6 mb-2">${others} (${(
  (others / total) *
  100
).toFixed(2)}%)</p>
          </div>
          <div class="progress">
            <div
              class="progress-bar rounded-pill bg-others"
              style="width: ${(others / total) * 100}%"
              role="progressbar" title="progressbar"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- reviews tab content -->
  <div
    class="container-fluid flex-column reviews-tab-content"
  >
  <div class="row">
  <div class="row col-12 justify-content-between">
    <div class="col-auto media">
      <img src="${review_0.img}" alt="" />
    </div>
    <div class="col media-body ml-4 text-start text-secondary">
      <div class="row">
        <div class="row">
          <strong class="col-12 col-sm-auto">${review_0.name}</strong>
          <div class="col d-none d-sm-inline"></div>
          <div class="col-12 col-sm-auto text-start text-sm-end render-stars">
            ${renderStars(review_0.rating)}
          </div>
        </div>
        <p class="col-12">${review_0.review}</p>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="row col-12 justify-content-between">
    <div class="col-auto media">
      <img src="${review_1.img}" alt="" />
    </div>
    <div class="col media-body ml-4 text-start text-secondary">
      <div class="row">
        <div class="row">
          <strong class="col-12 col-sm-auto">${review_1.name}</strong>
          <div class="col d-none d-sm-inline"></div>
          <div class="col-12 col-sm-auto text-start text-sm-end render-stars">
            ${renderStars(review_1.rating)}
          </div>
        </div>
        <p class="col-12">${review_1.review}</p>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="row col-12 justify-content-between">
    <div class="col-auto media">
      <img src="${review_2.img}" alt="" />
    </div>
    <div class="col media-body ml-4 text-start text-secondary">
      <div class="row">
        <div class="row">
          <strong class="col-12 col-sm-auto">${review_2.name}</strong>
          <div class="col d-none d-sm-inline"></div>
          <div class="col-12 col-sm-auto text-start text-sm-end render-stars">
            ${renderStars(review_2.rating)}
          </div>
        </div>
        <p class="col-12">${review_2.review}</p>
      </div>
    </div>
  </div>
</div>

<div class="row">
<div class="row col-12 justify-content-between">
  <div class="col-auto media">
    <img src="${review_3.img}" alt="" />
  </div>
  <div class="col media-body ml-4 text-start text-secondary">
    <div class="row">
      <div class="row">
        <strong class="col-12 col-sm-auto">${review_3.name}</strong>
        <div class="col d-none d-sm-inline"></div>
        <div class="col-12 col-sm-auto text-start text-sm-end render-stars">
          ${renderStars(review_3.rating)}
        </div>
      </div>
      <p class="col-12">${review_3.review}</p>
    </div>
  </div>
</div>
</div>

  </div>
  <!-- reviews tab above -->
</div>
</div>`;
restaurantRatingEl.innerHTML = restaurantRatingHTML;

const ctx = document.getElementById("rating-doughnut-chart");
const graphEl = document.querySelector(".graph-tab");
const reviewsEl = document.querySelector(".reviews-tab");
const graphContentEl = document.querySelector(".graph-tab-content");
const reviewsContentEl = document.querySelector(".reviews-tab-content");

// chart
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Food:", "Service:", "Waiting Time:", "Others:"],
    datasets: [
      {
        data: [food, service, waiting_time, others],
        label: "Total ",
        borderWidth: 1,
        backgroundColor: [
          "rgb(238,13,13)",
          "rgb(64,196,255)",
          "rgb(149,204,71)",
          "rgb(17,17,17)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// active tab
reviewsContentEl.style.display = "none";
graphEl.addEventListener("click", () => {
  graphContentEl.style.display = "block";
  reviewsContentEl.style.display = "none";
  graphEl.classList.remove("selected-tab");
  reviewsEl.classList.remove("selected-tab");
  graphEl.classList.add("selected-tab");
});

reviewsEl.addEventListener("click", () => {
  graphContentEl.style.display = "none";
  reviewsContentEl.style.display = "block";
  graphEl.classList.remove("selected-tab");
  reviewsEl.classList.remove("selected-tab");
  reviewsEl.classList.add("selected-tab");
});
// init visit hour
const visitHrChart = document.querySelector(".visit-hour-chart");
const dayNightContainerEl = document.querySelector(".day-night-container");

// render day night data
const dayNightHTML = `
<div class="row col justify-content-center day-container">
<p class="text-center mb-0">Day</p>
<span class="col-auto"
  ><i class="fa-solid fa-up-long" style="color: #95cc47"></i></span
><strong class="col-auto">82.24%</strong>
</div>
<div class="row col justify-content-center night-container">
<p class="text-center mb-0">Night</p>
<span class="col-auto"
  ><i class="fa-solid fa-down-long" style="color: #ee0b0d"></i></span
><strong class="col-auto">12.24%</strong>
</div>
`;

dayNightContainerEl.innerHTML = dayNightHTML;

// render visit hour chart
new Chart(visitHrChart, {
  type: "line",
  data: {
    labels: visitHourData.map((e) => `${e.day}/${e.month}/${e.year}`),
    datasets: [
      {
        label: "Day",
        data: visitHourData.map((e) => e.customerDay),
        borderWidth: 3,
        borderColor: "#95CC47",
      },
      {
        label: "Night",
        data: visitHourData.map((e) => e.customerNight),
        borderWidth: 3,
        borderColor: "#EE0B0D",
      },
    ],
  },
  options: {
    tension: 0.5,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        offset: true,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
