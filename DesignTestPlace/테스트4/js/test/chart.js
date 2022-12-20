const ctx = document.getElementById("myChart");

var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// 차트에 표현할 컬러
var chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

// DEPRECATED
window.randomScalingFactor = function () {
  return Math.round(Samples.utils.rand(-100, 100));
};

// -100 ~ 100 사이 랜덤값 생성
var randomScalingFactor = function () {
  return Math.round(Samples.utils.rand(-100, 100));
};

new Chart(ctx, {
  type: "line", //차트 타입
  data: {
    labels: [
      "0h",
      "1h",
      "2h",
      "3h",
      "4h",
      "5h",
      "6h",
      "7h",
      "8h",
      "9h",
      "10h",
      "11h",
      "12h",
    ], //x축 레이블
    datasets: [
      {
        label: "Water Level", //단위
        data: [12.5, 19, 18.5, 15, 12, 13, 14.5, 12, 14, 13, 12, 13, 12.3], //각 레이블 당 들어갈 값
        borderWidth: 1, //차트 선 두께
        borderColor: "rgb(0,0,255)", //선 색깔
        fill: {
          //선 아래 채우기 옵션
          target: "start", // origin:기준선 사이로 채워짐,start:x축부터 채워짐
          above: "rgba(15, 255, 255, 0.3)", // 에리어 채우기색(기준선 위)
          below: "rgb(255, 0, 0)", // 에이러 색 채우기(기준선 아래)
        },
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, //y축 0부터 시작
      },
    },
  },
});

// 첫번째 값 제거
document
  .getElementById("firstRemoveData")
  .addEventListener("click", function () {
    // 모든 차트 순회하기 위한 KEY 값 배열
    var keys = Object.keys(Chart.instances);
    // 차트 순회하기
    keys.forEach((elem) => {
      // 데이터 값 세팅
      console.log(Chart.instances[elem].config.data);
      Chart.instances[elem].config.data.labels.shift();
      Chart.instances[elem].config.data.datasets.forEach(function (dataset) {
        // 첫번쨰 배열값 제거
        dataset.data.shift();
      });
      // 데이터 업데이트
      Chart.instances[elem].update();
    });
  });

// 데이터 추가 버튼
document.getElementById("addData").addEventListener("click", function () {
  // 모든 차트 순회하기 위한 KEY 값 배열
  var keys = Object.keys(Chart.instances);
  // 차트 순회하기
  keys.forEach((elem) => {
    // 차트 옵션의 달력 값 지정
    var month =
      MONTHS[Chart.instances[elem].config.data.labels.length % MONTHS.length];
    // 차트 키 값
    console.log(elem);
    // 달력값
    console.log(month);
    // 차트 객체
    console.log(Chart.instances[elem]);
    // 차트 객체의 달력값 (라벨 지정)
    Chart.instances[elem].config.data.labels.push(month);
    // 데이터 값 세팅
    Chart.instances[elem].config.data.datasets.forEach(function (dataset) {
      dataset.data.push(randomScalingFactor());
    });
    // 데이터 업데이트
    Chart.instances[elem].update();
  });
});
