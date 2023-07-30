<template>
  <div class="badgepage">
    <div class="MBcheck_bg" v-if="openModal == true">
      <div class="MBcheck">
        <p>선택한 배지를 대표 배지로 설정하시겠습니까?</p>
        <div class="MBcheck_flex">
          <button class="MBcheck_yes" @click="setMainBadge">네</button>
          <div class="MBcheck_wrap"></div>
          <button class="MBcheck_no" @click="openModal = false">아니오</button>
        </div>
      </div>
    </div>
    <!-- top -->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <img
            class="icon"
            src="../assets/LeftIcon.png"
            @click="$router.go(-1)"
          />
        </div>
        <p class="top_center top_name">마이페이지</p>
        <div class="top_right"></div>
      </div>
    </div>

    <!-- middle -->
    <div class="middle scroller">
      <transition name="fade">
        <div v-if="showMessage" class="badge-message">
          배지 획득
        </div>
      </transition>

     <!-- 대표 배지 박스 -->
     <div class="mainbadge">
        <div class="MB_main">
          <div class="MB_top">
            <p>대표 배지</p>
          </div>
          <div class="MB_wrap">
            <div class="MB_left">
              <img class="mainbadge_img" :src="mainBadge.img || require('@/assets/BadgePage/lock.png')" alt="대표 배지" />
            </div>
            <div class="MB_right">
              <p v-if="!mainBadge.img">대표 배지를<br />설정해 보세요!</p>
              <p v-else>{{ getMainBadgeName() }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 중간 줄 -->
      <div class="line"></div>

      <!-- 배지 리스트 -->
      <div class="badgelist">
        <div class="badge" v-for="(badge, index) in          badgedata[0].badges         " :key="index">
          <div class="badge_img"
            @click="getBadgeImage(badge) !== require('@/assets/BadgePage/lock.png') && (openModal = true, selectedBadge = badge)">
            <img :src="getBadgeImage(badge)" />
          </div>
          <div class="badge_name">{{ badge.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import badgedata from "../assets/BadgePage/BadgeData.js";

export default {
  name: "MyPage",
  props: {
    walkCount: {
      type: Number,
      default: 2,
    }
  }, // walkCount prop 선언
  data() {
    return {
      badgedata,
      openModal: false,
      selectedBadge: null,
      mainBadge: {
        img: "" // 대표 배지 이미지 URL
      },
      hasShownMessage: false,
    };
  },
  methods: {
    setMainBadge() {
      if (this.selectedBadge) {
        this.mainBadge.img = this.selectedBadge.img;
      }
      this.openModal = false;
      console.log(this.walkCount);
    },
    getMainBadgeName() {
      if (this.mainBadge.img) {
        // 대표 배지 이미지가 설정되어 있을 때 해당 배지의 이름 반환
        const badge = this.badgedata[0].badges.find(b => b.img === this.mainBadge.img);
        return badge ? badge.name : '';
      }
      return '';
    },

    getBadgeImage(badge) {
      if (this.walkCount >= 1 && [this.badgedata[0].badges[0], this.badgedata[0].badges[3], this.badgedata[0].badges[2], this.badgedata[0].badges[1]].some(b => b === badge)) {
        return badge.img;
      }
      return require("@/assets/BadgePage/lock.png");
    },
  },
};
</script>


<style>
.MBcheck_bg {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.MBcheck {
  width: 50%;
  background: white;
  border-radius: 5px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.MBcheck p {
  margin: 3% 0;
  
}

.MBcheck_flex {
  display: flex;
  width: 80%;
  justify-content: center;
}

.MBcheck button {
  width: 70%;
  padding: 2%;
  border-radius: 5px;
}

.MBcheck_wrap {
  width: 10%;
}
.badgepage {
  background-color: #F1F8FF;
  width: 100%;
  height: 90vh;
}
.badgepage .top {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center; /* 가로 중앙에 위치 */
  align-items: flex-end;
  background: #70B4CB;
  padding: 1em;
}
.badgepage .top_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.badgepage .top_center {
  width: 70%;
  height: fit-content;
}
.badgepage .top_left,
.badgepage .top_right {
  width: 15%;
  height: fit-content;
}
.badgepage .top_name {
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
.badgepage .middle {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.badgepage .scroller {
  scroll-behavior: smooth;
  overflow-y: scroll;
  -ms-overflow-style: none;
  /* IE and Edge */
}
.badgepage .scroller::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera*/
}
.badgepage .mainbadge {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.badgepage .MB_main {
  width: 89%;
  height: 85%;

  position: relative;
  box-sizing: border-box;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  padding: 1em;

  background: #e2e2e2;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.badgepage .MB_top {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 5px 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}
.badgepage .MB_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.badgepage .MB_left {
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: row-reverse;
}
.mainbadge_img {
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 100%;
  margin: 5px;
}
.badgepage .MB_right {
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: row;
}
.badgepage .MB_right p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  /* or 105% */

  text-align: center;
  letter-spacing: -0.32px;

  color: #747474;
}
.badgepage .line {
  width: 90%;
  height: 1px;
  background: #bcbcbc;
}
.badgepage .badgelist {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.badgepage .badge {
  width: 30%;
  height: 29%;
  margin: 1%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.badgepage .badge_img {
  width: 5rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f4f2ee;
  border-radius: 100%;
}
.badgepage .badge_img img {
  width: 45%;
  height: auto;
}
.badgepage .badge_name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  text-align: center;
  letter-spacing: -0.32px;
  color: #747474;

  padding: 5% 0;
}
.icon {
  margin-top: 15px;
}
</style>
