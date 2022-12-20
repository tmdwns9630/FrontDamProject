console.log("2ck 실험을 시작하지");

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

//카드에다가 출력하는 정보.
/* const damCard = (damNum) => {
  const name = document.querySelector("#DAM_NAME");
  const worknum = document.querySelector("#WORK_NMPR");
  const waterSensor = document.querySelector("#WATER_LEVEL");
  const lightSensor = document.querySelector("#LIGHT");

  name.textContent = damObj[damNum].damId;
  worknum.textContent = damObj[damNum].workNmpr;
  waterSensor.textContent = damObj[damNum].waterLevel;
  lightSensor.textContent = damObj[damNum].light;
};
*/
const cardinfo = (ele) => {
  return `<div class="sensor_area">
        <div class="sensor_block externalCard_black">
          <div class="sensor_name">댐 이름</div>
          <div class="sensor_data" id="DAM_NAME">
            ${ele.damName}
          </div>
        </div>
        <div class="sensor_block externalCard_black">
          <div class="sensor_name">현재 근무자</div>
          <div class="sensor_data" id="WORK_NMPR">
            ${ele.workNmpr} 명
          </div>
        </div>
        <div class="sensor_block externalCard">
          <div class="sensor_name">수위 센서</div>
          <div class="sensor_data" id="WATER_LEVEL">
            ${ele.waterLevel}
          </div>
        </div>

        <div class="sensor_block externalCard">
          <div class="sensor_name">조도 센서</div>
          <div class="sensor_data" id="LIGHT">
            ${ele.light}
          </div>
        </div>
    
        </div>
      `;
};

//홈 화면에 댐 데이터 카드 목록을 출력하는 함수.
const cardPrint = () => {
  const cardList = document.querySelector("#middle_page");
  var card = damObj.map((ele) => {
    return cardinfo(ele);
  });
  card.forEach((value) => {
    cardList.innerHTML += value;
  });
};

//vscode에서는 작동이 안됨
const damListPrint = () => {
  const damList = document.querySelector("#DamList");
  var damInfo = damObj.map((ele) => {
    return (
      '<li class="has-subnav"><a href="#" class="dam"><i class="fa fa-laptop fa-2x"></i><span class="nav-text" id="' +
      ele.damId +
      '">' +
      ele.damId +
      "</span></a></li>"
    );
  });

  for (var i = 0; i < damInfo.length; i++) {
    console.log(i);
    $("#DamList").append(damInfo[i]);
    $(".dam").attr("href", "/DetailView?damid=" + damObj[i].damId);
  }
  
};

document.addEventListener("DOMContentLoaded", () => {
  damListPrint();
  cardPrint();
});
