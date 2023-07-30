<template>
  <div class="alarmpage">
    <!--top-->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <img
            class="icon"
            src="../assets/LeftIcon.png"
            @click="$router.go(-1)"
          />
        </div>
        <p class="top_center top_name"> 📬 알림이 왔어요!</p>
      </div>
    </div>
    
    <div class="alarmlist">
      <div class="alarmbox" v-for="(request, index) in walkRequests" :key="index">
        <img
          src="../assets/people/Preview-6.png"
          alt="jinnypc"
          class="alarmpng"
        />
        <div
          v-for="(request, index) in walkRequests"
          :key="index"
          class="friend-request"
        >
          <div class="asktitle">
            '{{ request }}' 님이 <br />
            산책 신청을 했어요!<br /><br />
          </div>

          <div>
            장소 : 석촌호수 <br />
            시간 : 6월 28일 오후 3시
          </div>
          <br />

          <div class="alarm_yn">
            <button class="friendreject" @click="openModal = false">
              거절
            </button>
            <button class="friendaccept" @click="openModal = false">
              수락
            </button>
          </div>
        </div>
      </div>

      <div class="alarmbox" v-for="(request, index) in friendRequests" :key="index">
        <img
          src="../assets/people/Preview-3.png"
          alt="naheepc"
          class="alarmpng"
        />
        <div
          v-for="(request, index) in friendRequests"
          :key="index"
          class="friend-request"
        >
          <div class="asktitle">친구신청이왔어요!</div>
          <br />'{{ request }}' 님에게 <br />
          친구 신청이 왔습니다 <br />
          수락하시겠습니까? <br /><br />

          <div class="alarm_yn">
          <button class="friendreject" @click="rejectRequest(index)">
            거절
          </button>
          <button class="friendaccept" @click="acceptRequest(index)">
           수락
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "alarmComponent",
  data() {
    return {
      pageName: "alarm",
      showBanner: true,
      walkRequests: ["김루나"],
      friendRequests: ["이지은"],
    };
  },
  methods: {
    goToAlarmPage() {
      // "/Alarm" 페이지로 이동
      window.location.href = '../component/Alarm';
    },
  rejectRequest(index) {
    this.friendRequests.splice(index, 1);
  },
  acceptRequest(index) {
    this.friendRequests.splice(index, 1);
  },
},
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@500&display=swap');
.alarmpage {
  background-color: #F1F8FF;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
}
.pg_alarm {
  text-align: left;
  font-weight: bold;
  font-size: 3vh;
  color: #005F7F;
}



.alarmlist {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;
}
.alarmbox {
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  padding: 2%;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 2%;
}
.alarmpng {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 2%;
}

.friend-request {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.asktitle {
  font-weight: bold;
  font-size: larger;
}

.alarm_yn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.friendreject {
  width: 40%;
  background-color: #DFEFFF;
  border: none;
  border-radius: 25px;
  color: #00BFFF;
  font-size: 2vh;
  font-weight: bold;
}
.friendaccept {
  width: 40%;
  background-color: #00BFFF;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2vh;
  font-weight: bold;
}
.top_name {
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
  
.top {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center; /* 가로 중앙에 위치 */
    align-items: flex-end; /* 세로 위에서 70% 지점에 위치 */
    background: #70B4CB;
    padding: 1em;
  }
  .top_wrap {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
  }
  .top_center {
    width: 70%;
    height: fit-content;
    color: white;
  }
  .top_left {
    width: 15%;
    height: fit-content;
  }
  .top_right {
    
    display: flex;
   align-items: center;
   text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 21px;

    text-align: center;
    letter-spacing: -0.32px;

    color:rgb(48, 48, 48);
  }

</style>