console.log("실험을 시작하지");

//댐 json 데이터
const damObj = [
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

//사이드바에 댐 목록 출력
const damListPrint = () => {
  const damList = document.querySelector("#DamList");
  var dam = damObj.map((ele, idx) => {
    return (
      '<li><a href="#"><i class="fa fa-laptop fa-2x"></i><span class="nav-text">' +
      ele.damId +
      "</span></a></li>"
    );
  });
  dam.forEach((value) => {
    damList.innerHTML += value;
  });
};

//카드에다가 출력하는 정보.
const damCard = (damNum) => {
  const name = document.querySelector("#DAM_NAME");
  const worknum = document.querySelector("#WORK_NMPR");
  const waterSensor = document.querySelector("#WATER_LEVEL");
  const lightSensor = document.querySelector("#LIGHT");

  name.textContent = damObj[damNum].damName;
  worknum.textContent = damObj[damNum].workNmpr;
  waterSensor.textContent = damObj[damNum].waterLevel;
  lightSensor.textContent = damObj[damNum].light;
};

document.addEventListener("DOMContentLoaded", () => {
  damListPrint();
  damCard(1);
});
