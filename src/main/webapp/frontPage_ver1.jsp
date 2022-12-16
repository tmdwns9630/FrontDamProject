<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/DamStyle.css?after" />
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
  </head>
  <body>
    <!--  ■■■■■■■■■■■■■■■■■ 상단 네비게이션 바 ■■■■■■■■■■■■■■■■■■■ -->
    <header>
      <nav class="navbar">
        <h3>Dam Dashboard</h3>
      </nav>
    </header>
    <div class="TotalPage">
      <!-- 왼쪽 구역 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
      <div class="left_page border_purple_dot">
        <ul class="dam_list">
          <li>댐 1</li>
          <li>댐 2</li>
          <li>댐 3</li>
          <li>댐</li>
          <li>댐 5</li>
        </ul>
      </div>
      <!--  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 왼쪽 구역-->
      <!-- 중앙 구역 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
      <div class="middle_page border_blue_dot">
        <div class="sensor_view border_pink_dot">
          <div class="sensor_block externalCard" id="water_level">
            <div class="sensor_name">수위 센서</div>
            <div class="sensor_data">12345</div>
          </div>

          <div class="sensor_block externalCard" id="light_level">
            <div class="sensor_name">조도 센서</div>
            <div class="sensor_data">67890</div>
          </div>
        </div>

        <!--  차트가 들어갈 영역 ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ -->
        <div class="chart_area container border_pink_dot">
     
          <div class="chart-container border_red_dot">
            <canvas id="line1" class="border_pink_dot"></canvas>
          </div>
        </div>
        <!-- ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ차트가 들어갈 영역 -->
      </div>
      <!--  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 중앙 구역-->
      <!-- 오른쪽 구역 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ -->
      <div class="right_page border_red_dot">
        <img
          class="icon_sun"
          src="https://blog.kakaocdn.net/dn/61zMy/btrh7wm0fCv/IgGApTNnNkY2Y9UVKKWjbK/img.png"
          alt="icon_sun"
        />

        <div class="current_worker">
          <span class="icon_worker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span class="current_worker_num">N 명 근무 중</span>
        </div>
      </div>
      <!--  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 오른쪽 구역-->
    </div>
    <script type="text/javascript" src="js/AreaChart.js"></script>
  </body>
</html>
