/*
 * utils.js
 * charts.js 만들기 위한 utils.js 부분
 * 공식 사이트에서 제공하는 utils.js
 */
"use strict";

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};
(function (global) {
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

  var COLORS = [
    "#4dc9f6",
    "#f67019",
    "#f53794",
    "#537bc4",
    "#acc236",
    "#166a8f",
    "#00a950",
    "#58595b",
    "#8549ba",
  ];

  var Samples = global.Samples || (global.Samples = {});
  var Color = Chart.helpers.color;

  function applyDefaultNumbers(config) {
    var cfg = config || {};
    cfg.min = cfg.min || 0;
    cfg.max = cfg.max || 1;
    cfg.from = cfg.from || [];
    cfg.count = cfg.count || 8;
    cfg.decimals = cfg.decimals || 8;
    cfg.continuity = cfg.continuity || 1;

    return cfg;
  }

  Samples.utils = {
    // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
    srand: function (seed) {
      this._seed = seed;
    },

    rand: function (min, max) {
      var seed = this._seed;
      min = min === undefined ? 0 : min;
      max = max === undefined ? 1 : max;
      this._seed = (seed * 9301 + 49297) % 233280;
      return min + (this._seed / 233280) * (max - min);
    },

    numbers: function (config) {
      var cfg = applyDefaultNumbers(config);
      var dfactor = Math.pow(10, cfg.decimals) || 0;
      var data = [];
      var i, value;

      for (i = 0; i < cfg.count; ++i) {
        value = (cfg.from[i] || 0) + this.rand(cfg.min, cfg.max);
        if (this.rand() <= cfg.continuity) {
          data.push(Math.round(dfactor * value) / dfactor);
        } else {
          data.push(null);
        }
      }

      return data;
    },

    labels: function (config) {
      var cfg = config || {};
      var min = cfg.min || 0;
      var max = cfg.max || 100;
      var count = cfg.count || 8;
      var step = (max - min) / count;
      var decimals = cfg.decimals || 8;
      var dfactor = Math.pow(10, decimals) || 0;
      var prefix = cfg.prefix || "";
      var values = [];
      var i;

      for (i = min; i < max; i += step) {
        values.push(prefix + Math.round(dfactor * i) / dfactor);
      }

      return values;
    },

    months: function (config) {
      var cfg = config || {};
      var count = cfg.count || 12;
      var section = cfg.section;
      var values = [];
      var i, value;

      for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
      }

      return values;
    },

    color: function (index) {
      return COLORS[index % COLORS.length];
    },

    transparentize: function (color, opacity) {
      var alpha = opacity === undefined ? 0.5 : 1 - opacity;
      return Color(color).alpha(alpha).rgbString();
    },
  };

  // DEPRECATED
  window.randomScalingFactor = function () {
    return Math.round(Samples.utils.rand(-100, 100));
  };

  // INITIALIZATION

  Samples.utils.srand(Date.now());

  // Google Analytics
  /* eslint-disable */
  if (document.location.hostname.match(/^(www\.)?chartjs\.org$/)) {
    (function (i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "//www.google-analytics.com/analytics.js",
      "ga"
    );
    ga("create", "UA-28909194-3", "auto");
    ga("send", "pageview");
  }
  /* eslint-enable */
})(this);

/*
 * utils.js
 * 끝 부분
 */
// ------------------------------------------------------------

// 차트에 표현할 x 축의 값
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
var config = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [],
  },
  options: {
    // 컨테이너가 수행 할 때 차트 캔버스의 크기를 조정(dafalut : true)
    responsive: true,
    // 크기 조정 이벤트 후 새 크기로 애니메이션하는 데 걸리는 시간(밀리 초) (defalut : 0)
    responsiveAnimationDuration: 1000,
    // (width / height) 크기를 조정할 떄 원래 캔버스 종횡비를 유지 (defalut : true)
    maintainAspectRatio: true,
    // 캔버스 종횡비( width / height, 정사각형 캔버스를 나타내는 값) 높이가 속성으로 또는 스타일 통해 명시적으로 정의된 경우이 옵션은 무시
    aspectRatio: 2,
    // 크기 조정이 발생할 때 호출
    onResize: function () {},
    title: {
      display: true,
      // 차트 제목
      text: "Chart.js Line Chart",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
    },
  },
};

// -100 ~ 100 사이 랜덤값 생성
var randomScalingFactor = function () {
  return Math.round(Samples.utils.rand(-100, 100));
};
// 새로운 데이터 만들기
var datasetSample = {
  label: "label",
  backgroundColor: window.chartColors.red,
  borderColor: window.chartColors.red,
  data: [
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
  ],
};

// 윈도우가 로드가 될때
window.onload = function () {
  // line1 ========================================================
  // 생성할 canvas 요소
  // var line1 = document.getElementById('line1').getContext('2d');
  // config 파일 복사
  var line1Config = JSON.parse(JSON.stringify(config));

  // 데이터셋 생성하기
  var line1DatasetSample = JSON.parse(JSON.stringify(datasetSample));
  /// 라벨
  line1DatasetSample.label = "line1 Dataset Sample";
  // 채우기 옵션
  line1DatasetSample.fill = false;
  // 채웠을 때 색깔
  line1DatasetSample.backgroundColor = window.chartColors.red;
  // 선 색깔
  line1DatasetSample.borderColor = window.chartColors.yellow;
  // 데이터 채우기
  line1Config.data.datasets.push(line1DatasetSample);
  // 타이틀값
  line1Config.options.title.text = "line1/Fill Option = false";
  // 차트 생성하기
  window.line1 = new Chart(line1, line1Config);
  //  ======================================================== line1

  // line2 ========================================================
  var line2 = document.getElementById("line2").getContext("2d");
  var line2Config = JSON.parse(JSON.stringify(config));

  var line2DatasetSample = JSON.parse(JSON.stringify(datasetSample));
  line2DatasetSample.label = "line2 Dataset Sample";
  line2DatasetSample.fill = "origin";
  line2DatasetSample.backgroundColor = window.chartColors.red;
  line2DatasetSample.borderColor = window.chartColors.yellow;

  line2Config.data.datasets.push(line2DatasetSample);
  line2Config.options.title.text = "line2/Fill Option = origin";
  window.line2 = new Chart(line2, line2Config);
  //  ======================================================== line2

  // // line3 ========================================================
  var line3 = document.getElementById("line3").getContext("2d");
  var line3Config = JSON.parse(JSON.stringify(config));
  var line3DatasetSample = JSON.parse(JSON.stringify(datasetSample));

  line3DatasetSample.label = "line3 Dataset Sample";
  line3DatasetSample.fill = "start";
  line3Config.data.datasets.push(line3DatasetSample);
  line3Config.options.title.text = "line3/Fill Option = start";
  line3DatasetSample.backgroundColor = window.chartColors.red;
  line3DatasetSample.borderColor = window.chartColors.yellow;

  window.line3 = new Chart(line3, line3Config);
  // //  ======================================================== line3

  // // line4 ========================================================
  var line4 = document.getElementById("line4").getContext("2d");
  var line4Config = JSON.parse(JSON.stringify(config));

  var line4DatasetSample = JSON.parse(JSON.stringify(datasetSample));
  line4DatasetSample.label = "line4 Dataset Sample";
  line4DatasetSample.fill = "end";
  line4DatasetSample.backgroundColor = window.chartColors.red;
  line4DatasetSample.borderColor = window.chartColors.yellow;

  line4Config.data.datasets.push(line4DatasetSample);
  line4Config.options.title.text = "line4/Fill Option = end";
  window.line4 = new Chart(line4, line4Config);
  //  ======================================================== line4
};

var colorNames = Object.keys(window.chartColors);
// 데이터셋 추가 버튼
document.getElementById("addDataset").addEventListener("click", function () {
  var colorNames = Object.keys(window.chartColors);
  // 새로운 데이터셋 세팅
  var newData = {
    // 라벨
    label: "Dataset",
    // 꼭지점
    backgroundColor: "",
    // 라인색
    borderColor: "",
    data: [],
  };

  var fill = ["end", "start", "origin", false];

  for (let index = 0; index < 4; index++) {
    // 데이터 세팅
    var settingData = JSON.parse(JSON.stringify(newData));
    // 배경
    settingData.backgroundColor = chartColors[colorNames[index + 1]];
    // 선색
    settingData.borderColor = chartColors[colorNames[index + 2]];
    // 라벨
    settingData.label = "new Data line" + (index + 1) + "/ Fill=" + fill[index];
    // 채우기 옵션
    settingData.fill = fill[index];
    // 데이터 채우기
    for (
      var i = 0;
      i < Chart.instances[0].config.data.datasets[0].data.length;
      i++
    ) {
      settingData.data.push(randomScalingFactor());
    }
    // 데이터 반영
    Chart.instances[index].data.datasets.push(settingData);
    // 라인 차트 업데이트
    Chart.instances[index].update();
  }
});

// 데이터 추가 버튼
document.getElementById("addData").addEventListener("click", function () {
  var keys = Object.keys(Chart.instances);
  keys.forEach((elem) => {
    var month =
      MONTHS[Chart.instances[elem].config.data.labels.length % MONTHS.length];
    console.log(elem);
    console.log(month);
    console.log(Chart.instances[elem]);
    Chart.instances[elem].config.data.labels.push(month);
    Chart.instances[elem].config.data.datasets.forEach(function (dataset) {
      dataset.data.push(randomScalingFactor());
    });
    Chart.instances[elem].update();
    console.log(Chart.instances[elem]);
  });
});
