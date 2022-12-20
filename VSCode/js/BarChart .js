//1 랜덤 데이터를 1초마다 추가하고 첫번째 레이블 삭제, 마지막 레이블을 추가함.
/*
2 jsp에 넣기 전, 로그 데이터를 내부 변수로 넣어서 출력
ㄴ이 시점에서 데이터 추가 삭제는 고려 안함
3. 막대 그래프를 추가하기로 함.
/*
 * utils.js
 * charts.js 만들기 위한 utils.js 부분
 * 공식 사이트에서 제공하는 utils.js
 */

//테스트용 댐 json 데이터, jsp에 넣진 말 것.
const damObject = [
  {
    damId: "1001",
    damName: "DAM1001",
    waterLevel: "391",
    light: "80",
    workNmpr: "5",
    lastMesur: "2022/12/16 17:44:31",
    updtDt: "2022-12-16 17:44:38",
  },
  {
    damId: "1002",
    damName: "DAM1002",
    waterLevel: "860",
    light: "100",
    workNmpr: "4",
    lastMesur: "2022/12/16 15:12:56",
    updtDt: "2022-12-16 15:13:09",
  },
  {
    damId: "1003",
    damName: "DAM1003",
    waterLevel: "760",
    light: "120",
    workNmpr: "27",
    lastMesur: "2022/12/16 15:13:20",
    updtDt: "2022-12-16 15:13:33",
  },
  {
    damId: "2182",
    damName: "DAM2182",
    waterLevel: "430",
    light: "42",
    workNmpr: "20",
    lastMesur: "2022/12/18 17:02:02",
    updtDt: "2022-12-18 17:02:12",
  },
  {
    damId: "3750",
    damName: "DAM3750",
    waterLevel: "493",
    light: "26",
    workNmpr: "0",
    lastMesur: "2022/12/18 17:02:03",
    updtDt: "2022-12-18 17:02:12",
  },
];

("use strict");

//색깔
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
var MONTHS = damObject.map((ele) => {
  return ele.damName;
});

// 차트에 표현할 컬러
var chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(0, 0, 150)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
  waterblue: "rgba(11, 189, 249, 0.65)", //차트 채우기 색은 여기다.
  sunyellow: "rgba(255, 187, 61, 0.89)",
};

//ㅁㅁㅁㅁㅁㅁㅁㅁ차트에 대한 대부분의 설정ㅁㅁㅁㅁㅁ.
var config = {
  type: "bar",
  data: {
    labels: MONTHS,
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
    backgroundColor: "rgb(255, 205, 86)",
    //차트 위의 데이터셋 뜨는거.
    legend: {
      display: false,
    },
    //선 그래프에서 있는 점을 숨길 때.
    elements: {
      point: {
        radius: 0,
      },
    },
    title: {
      display: false,
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
      //y축 설정
      xAxes: [
        {
          ticks: {
            //fontColor: "rgba(12, 13, 13, 1)",
            fontSize: 14,
          },
          gridLines: {
            //color: "rgba(87, 152, 23, 1)",
            lineWidth: 0,
          },
        },
      ],
      //y축 설정
      yAxes: [
        {
          id: "Water",
          position: "left",
          ticks: {
            // beginAtZero: true; //y축 0부터 시작
            min: 0, //범위 설정
            max: 1000,
            fontSize: 14,
            fontColor: "rgba(11, 189, 249)",
          },
          gridLines: {
            lineWidth: 1,
          },
        },
        {
          id: "Light",
          position: "right",
          ticks: {
            // beginAtZero: true; //y축 0부터 시작
            min: 0, //범위 설정
            max: 200,
            fontSize: 14,
            fontColor: "red",
          },
          gridLines: {
            lineWidth: 0,
          },
        },
      ],
    },
  },
};
//---테스트용 랜덤 값-------------------------------
// 10 ~ 20 사이 랜덤값 생성
var randomScalingFactor = function () {
  return Math.round(Samples.utils.rand(10, 20));
};
//-----------------------------테스트용 랜덤 값----
//--물, 빛 데이터 넣어서 데이터 샘플 생성.-------------------------------

waterArr = damObject.map((ele) => {
  return ele.waterLevel;
});

lightArr = damObject.map((ele) => {
  return ele.light;
});

// 새로운 데이터 만들기
var datasetSample_Water = {
  label: "시간당 수위",
  yAxisID: "Water",
  backgroundColor: window.chartColors.waterblue,
  //borderColor: window.chartColors.red,
  data: waterArr,
};
var datasetSample_light = {
  label: "조도 센서",
  yAxisID: "Light",
  backgroundColor: window.chartColors.red,
  //borderColor: window.chartColors.red,
  data: lightArr,
};

// 윈도우가 로드가 될때
window.onload = function () {
  // line1 ========================================================
  // 생성할 canvas 요소
  var line1 = document.getElementById("line1").getContext("2d");
  // config 파일 복사
  var line1Config = JSON.parse(JSON.stringify(config));
  // 데이터셋 생성하기
  var line1DatasetSample = JSON.parse(JSON.stringify(datasetSample_Water));

  //  ======================================================== line1
  // // line2 ========================================================
  var line2 = document.getElementById("line1").getContext("2d");
  var line2Config = JSON.parse(JSON.stringify(config));
  var line2DatasetSample = JSON.parse(JSON.stringify(datasetSample_light));

  // //  ======================================================== line2
  //데이터셋으로 push하는 차트 데이터를 각각 만들고 차례대로 push한다.
  // 데이터 채우기
  line1Config.data.datasets.push(line1DatasetSample);
  line1Config.data.datasets.push(line2DatasetSample);
  // 타이틀값
  line1Config.options.title.text = "Area Chart Title";
  // 차트 생성하기
  window.line1 = new Chart(line1, line1Config);
};
