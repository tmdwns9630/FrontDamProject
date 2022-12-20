console.log("실험을 시작하지");

//테스트용 댐 json 데이터
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

//사이드바의 댐 리스트 출력 함수
const damListPrint = () => {
  //const damList = document.querySelector("#DamList");

  var damInfo = damObj.map((ele) => {
    return (
      '<li class="has-subnav"><a href="#" class="dam" id="' +
      ele.damId +
      '"><i class="fa fa-laptop fa-2x"></i><span class="nav-text">' +
      ele.damId +
      "</span></a></li>"
    );
  });
  for (var i = 0; i < damInfo.length; i++) {
    // console.log(i);
    $("#DamList").append(damInfo[i]);
    $("#" + damObj[i].damId).attr(
      "href",
      "/DetailView?damid=" + damObj[i].damId
    );
  }
};

//데이터 카드 html 코드 만드는 함수
//로 테이블 만드는 코드로 개조한 함수
const tableinfo = (ele) => {
  return `
  <tr class="sensor_row">
    <td class="sensor_td" id="DAM_NAME ">
      ${ele.damName}
    </td>
    <td class="sensor_td" id="WATER_LEVEL">
      ${ele.waterLevel} mm
    </td>
    <td class="sensor_td" id="LIGHT">
      ${ele.light} Lx
    </td>
    <td class="sensor_td" id="WORK_NMPR">
      ${ele.workNmpr} 명
    </td>
  </tr>
  `;
};

//홈 화면에 댐 데이터 카드 목록을 출력하는 함수.
const tablePrint = () => {
  $(".sensor_row").remove(); //기본으로 있던 데이터를 지워주고 작성.
  const cardList = document.querySelector(".sensor_table");
  var card = damObj.map((ele) => {
    return tableinfo(ele);
  });
  card.forEach((value) => {
    cardList.innerHTML += value;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  //console.log("갑자기 왜그래");
  damListPrint();
  tablePrint();
});
