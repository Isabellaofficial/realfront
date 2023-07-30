<template>
  <div class="mypage">
    <!-- top -->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <!-- 마이페이지에는 뒤로가기 버튼이 없기 때문에 주석처리 -->
          <!-- <img class="icon" src="../assets/BadgePage/LeftIcon.png" />  -->
        </div>
        <p class="top_center top_name">마이페이지</p>
        <div class="top_right"></div>
      </div>
    </div>

    <!-- middle -->
    <div class="middle">
      <!-- middle_1 -->
      <div class="middle_1">

        <!-- 이번 달 사용자 산책 정보 -->
        <div class="user_information_box">
                    <!-- 캐릭터 수정 버튼 -->
                    <div class="user_character_change_box">
            <img
              src="../assets/pin.png"
              alt="캐릭터 수정 아이콘"
              @click="goToStartPage"
              class="change_box"
            />
          </div>
          <div class="user_info_row">
            <p class="user_info_label">누적 산책<br/>거리:</p>
            <p class="user_info_value">1KM</p>
          </div>
          <div class="division_line"></div>
          <div class="user_info_row">
            <p class="user_info_label">누적 산책<br/>시간:</p>
            <p class="user_info_value">30분</p>
          </div>
          <div class="division_line"></div>
          <div class="user_info_row">
            <p class="user_info_label">도토리:</p>
            <p class="user_info_value">4개</p>
          </div>
        </div>


      <!-- 사용자 캐릭터 -->
      <div class="user_character_box">
        <div class="user_character_shadow">
          <img
            src="../assets/people/Preview10.png"
            alt="사용자캐릭터"
            class="user_character"
          />
        </div>
      </div>

        <!-- 알림 버튼 -->
        <div class="alarm_box">
          <router-link to="/alarm" class="circle-button">
            <img src="../assets/bell.png" alt="알람 아이콘" style="width: 70px; height: 70px;" />
          </router-link>
        </div>
      </div>

      <!-- middle_2 -->
      <div class="middle_2">
        <!-- 애완동물 이미지 -->
        <div class="pet_profile">
          <img class="pet_profile_img" src="../assets/icon/dog1.png" alt="" />
        </div>

        <!-- 애완동물 정보 -->
        <div class="pet_status">
          <!-- 애완동물 산책레벨 -->
          <div class="pet_level">LV.1</div>

          <!-- 애완동물 레벨 바 -->
          <div class="level_progressbar_wrap">
            <div class="level_progressbar" style="width: 69%"></div>
          </div>
        </div>
      </div>

      <!-- middle_3 -->
      <div class="middle_3">
        <div><p>배지</p></div>
        <div><p>산책기록</p></div>
      </div>

      <!-- middle_4 -->
      <div class="middle_4">
        <!-- 배지 버튼 -->
        <div class="middle_4_wrap">
          <div class="btn_wrap btn_badge" @click="$router.push('./badgepage')">
            <img
              class="icon"
              src="../assets/MyPage/icon_badge.png"
              alt="배지"
            />
          </div>
          <div class="btn_text">
            대표 배지를<br />
            설정해 보세요!
          </div>
        </div>

        <!-- 산책 기록 버튼 -->
        <div class="middle_4_wrap">
          <div class="btn_wrap btn_badge" @click="$router.push('./WalkRecord')">
            <img
              class="icon"
              src="../assets/MyPage/icon_calendar.png"
              alt="산책기록"
            />
          </div>
          <div class="btn_text">
            산책 기록<br />
            확인하러 가기
          </div>
        </div>
      </div>

      <!-- middle_5 -->
      <div class="middle_5">
        <div><p>설정</p></div>
      </div>

      <!-- middle_6 -->
      <div class="middle_6">
        <!-- 공지사항 버튼 -->
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/infoicon.png"
              alt="공지사항"
            />
          </div>
          <div class="btn_text">공지사항</div>
        </div>

        <!-- 고객센터 버튼 -->
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/customericon.png"
              alt="고객센터"
            />
          </div>
          <div class="btn_text">고객센터</div>
        </div>

        <!-- 설정 버튼 -->
        <div class="middle_6_wrap">
          <div class="btn_wrap btn_badge">
            <img
              class="icon"
              src="../assets/MyPage/settingicon.png"
              alt="설정"
            />
          </div>
          <div class="btn_text">설정</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPage",
  methods: {
    goToStartPage() {
      this.$router.push('/Modify');
    }
  }
};
</script>

<style>
.mypage {
  width: 100%;
  height: 90vh;
}

.change_box {
    width: 78%;
    margin-top: -1vh;
    margin-right: 4vh;
    border: 1px solid  #c3c3c5;
    border-radius: 10px;
}

/* top */
.mypage .top {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center; /* 가로 중앙에 위치 */
  align-items: flex-end; /* 세로 위에서 70% 지점에 위치 */
  background: #00BFFF;
  padding: 1em;
}
.mypage .top_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.mypage .top_center {
  width: 70%;
  height: fit-content;
}
.mypage .top_left,
.mypage .top_right {
  width: 15%;
  height: fit-content;
}
.mypage .top_name {
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.32px;

  color: #ffffff;
}

/* middle */
.mypage .middle {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

/* middle 1 */
.mypage .middle_1 {
  position: relative;
  width: 100%;
  height: 32%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.mypage .user_information_box {
    width: 72%;
    height: 57%;
    margin-left: -6vh;
    transform: translateX(5%);
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    background: #ffffff;
    border: 1px solid #c3c3c5;
    border-radius: 10px;
    padding: 1em;
}
.mypage .user_information {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.3em;
  letter-spacing: -0.32px;
  color: #747474;
}
.mypage .user_name_box {
  position: absolute;
  width: 54%;
  height: 35%;
  top: 8%;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.mypage .user_name {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;
}
.mypage .user_character_box {
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  top: 8%;
  left: 5%;
  object-fit: cover;
}
.mypage .user_character {
  width: 13vh;
}
.mypage .user_character_change_box {
    width: 51px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
}

.mypage .alarm_box {
  position: absolute;
  width: 90px;
  height: 90px;
  right: 3%;
  top: 5%;
  size: 0.1;

  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
}

/* middle 2 */
.mypage .middle_2 {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 14%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
}

/* middle 3 */
.mypage .middle_3 {
  position: relative;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
}
.mypage .middle_3 div {
  width: 45%;
  height: 80%;

  background: #ffffff;
  border: 1px solid #c3c3c5;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.mypage .middle_3 p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}

/* middle 4 */
.mypage .middle_4 {
  position: relative;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  box-sizing: border-box;
  padding: 1em;
}
.mypage .pet_profile {
  width: fit-content;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
}
.mypage .pet_profile_img {
  width: 12vh;
  height: 9vh;
  background-color: #ddd;
  border-radius: 100%;
}
.mypage .pet_status {
  padding-left: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.mypage .pet_level {
  font-size: 1.2rem;
  font-weight: bold;
  color: #747474;
}
.mypage .level_progressbar_wrap {
  width: 100%;
  height: auto;
  background-color: #dedede;
}
.mypage .level_progressbar {
  height: 3vw;
  background-color: #638263;
  animation-name: pet_level_ani;
  animation-duration: 3s;
}
@keyframes pet_level_ani {
  0% {
    width: 0%;
  }
  100% {
  }
}
.mypage .middle_4_wrap {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypage .middle_4_wrap .btn_wrap {
  width: 70px;
  height: 70px;
  background-color: #bbb;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}
.mypage .middle_4_wrap .btn_wrap .icon {
  width: 45%;
  height: auto;
}
.mypage .middle_4_wrap .btn_text {
  font-size: large;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}

/* middle 5 */
.mypage .middle_5 {
  position: relative;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mypage .middle_5 div {
  width: 95%;
  height: 80%;

  background: #dedee1;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.mypage .middle_5 p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}

/* middle 6 */
.mypage .middle_6 {
  position: relative;
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0.5em 1em;
}
.mypage .middle_6_wrap {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypage .middle_6_wrap .btn_wrap {
  width: 50px;
  height: 50px;
  background-color: #bbb;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}
.mypage .middle_6_wrap .btn_wrap .icon {
  width: 45%;
  height: auto;
}
.mypage .middle_6_wrap .btn_text {
  font-size: large;
  font-weight: bold;
  color: #747474;
  text-align: center;
  padding-top: 0.5em;
}

.user_character_shadow {
  position: relative;
  width: 13vh;
  height: 14vh;
  border-radius: 50%;
  background-color: #d8e2ff;
}

.user_information_box {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.user_info_label {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.3em;
  letter-spacing: -0.32px;
  color: #747474;
  z-index: 1000;
  font-size: 1.5vh;
}

.user_info_value {
  font-family: "Inter";
  font-style: 9vh;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.3em;
  letter-spacing: -0.32px;
  color: #747474;
  z-index: 1000;
}

  .division_line {
    width: 1px;
    background-color: #c3c3c5;
    margin: 10px;
    height: 60%;
  }
  
</style>