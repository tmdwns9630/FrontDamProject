<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/DamStyle.css?after" />
    <link rel="stylesheet" type="text/css" href="css/siderbar.css?after" />

    <link
      href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"
      integrity="sha512-QEiC894KVkN9Tsoi6+mKf8HaCLJvyA6QIRzY5KrfINXYuP9NxdIkRQhGq3BZi0J4I7V5SidGM3XUQ5wFiMDuWg=="
      crossorigin="anonymous"
    ></script>
   <title>Dam Project</title>
    <header>
      <nav class="navbar">
        <h3>Dam Dashboard (JSP)</h3>
      </nav>
    </header>
  </head>
  <body>
    <!--  ■■■좌측 사이드바 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
    <nav class="main-menu">
      <img
        class="icon_sun"
        src="https://blog.kakaocdn.net/dn/61zMy/btrh7wm0fCv/IgGApTNnNkY2Y9UVKKWjbK/img.png"
        alt="icon_sun"
        style="width: 60%; max-width: 100px"
      />
      <ul>
        <li>
          <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text" id="btn1"> Dam 1 </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text"> Dam 2 </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text"> Dam 3 </span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text"> Dam 4 </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text"> Dam 5 </span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■좌측 사이드바 ■■■ -->
    <!--  원래 좌 중 우로 구역을 나눴으나 좌, 우를 지움 -->
    <div class="TotalPage border_red_power_dot">
      <!-- 중앙 구역 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
      <div class="middle_page border_blue_dot">
        <div class="sensor_area border_yellow_dot">
          <div class="sensor_block externalCard_black" id="water_level">
            <div class="sensor_name">댐 이름</div>
            <div class="sensor_data" id="DAM_NAME">댐 n</div>
          </div>
          <div class="sensor_block externalCard_black" id="water_level">
            <div class="sensor_name">현재 근무자</div>
            <div class="sensor_data" id="WORK_NMPR">1972 명</div>
          </div>
          <div class="sensor_block externalCard" id="water_level">
            <div class="sensor_name">수위 센서</div>
            <div class="sensor_data" id="WATER_LEVEL">12345</div>
          </div>

          <div class="sensor_block externalCard" id="light_level">
            <div class="sensor_name">조도 센서</div>
            <div class="sensor_data" id="LIGHT">67890</div>
          </div>
        </div>

        <!--  차트가 들어갈 영역 ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ -->
        <div class="chart_area border_blue_dot">
          <!-- <button id="addData">First Out * Last In</button> -->
          <div class="chart-container border_red_dot">
            <canvas id="line1" class="border_pink_dot"></canvas>
          </div>
        </div>
        <!-- ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ차트가 들어갈 영역 -->
      </div>
      <!--  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 중앙 구역-->
      
    </div>
    <script type="text/javascript" src="js/AreaChart.js"></script>
  </body>
</html>
