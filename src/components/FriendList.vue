<template>
  <div id="friendlistpg">
    <div class="top">
      <div class="top_wrap">
        <div class="top_left">
          <img
            class="icon"
            src="../assets/LeftIcon.png"
            @click="$router.go(-1)"
          />
        </div>
        <p class="top_center top_name">  나의 친구</p>
      </div>
    </div>

    <!-- 아이디를 입력하라는 모달창 -->
    <div class="black-bg" v-if="openModal == true && selectedFriend">
      <div class="white-bg">
        <h2>
          약속장소와 시간을 <br />
          입력하세요!
        </h2>
        <div class="container2">
          <p class="place">장소</p>
          <input type="text" class="textfield" />
        </div>
        <div class="container2">
          <p class="time">시간</p>
          <input type="text" class="textfield" />
        </div>

        <div v-if="friends">
          <img class="image2" :src="selectedFriend.image" />
          <p class="found">
            [{{ selectedFriend.name }}] 님에게 산책약속을<br />
            보내시겠습니까?
          </p>
        </div>

        <div class="yes_no">
          <button class="yes" @click="openModal = false && hideDetails">
            네
          </button>
          <button class="no" @click="openModal = false && hideDetails">
            아니오
          </button>
        </div>
      </div>
    </div>

    <div class="upperbar">
      
 
      <div class="friendadd-button2_btn_wrap">
        <div></div>
        <button class="friendadd-button2" @click="$router.push('./friendadd')">
          친구추가
        </button>
      </div>
    </div>
    <div class="friend-list-box1">
      <div class="friend-list-box2">
        <div class="friend-list2">
          <div
            v-for="friend in friends"
            :key="friend.id"
            class="friend2"
            :src="`@/assets/friendimages/${name}`"
          >
            <img :src="friend.image" alt="friendimage" class="friend-image2" />
            <span class="friend-name2">{{ friend.name }}</span>

            <button
              class="walkrq-button"
              @click="
                openModal = true;
                showDetails(friend);
              "
            >
              산책 신청
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "friendaddComponent",

  setup() {
    const router = useRouter();
    function goBackto() {
      router.go(-1);
    }
    return {
      goBackto,
    };
  },
  methods: {
    goToFriendList() {
      this.$router.push("/friendlist");
    },
    showDetails(friend) {
      this.selectedFriend = friend;
    },
    hideDetails() {
      this.selectedFriend = null;
      this.$refs.radio1.checked = false;
      this.$refs.radio2.checked = false;
      this.$refs.radio3.checked = false;
    },
  },
  data() {
    return {
      openModal: false,
      inputValue: "",
      selectedFriend: null,
      friend: null,
      friends: [
        {
          id: 1,
          name: "박김태연",
          image: require("@/assets/people/Preview-3.png"),
        },
        {
          id: 2,
          name: "김현빈",
          image: require("@/assets/people/Preview.png"),
        },
        {
          id: 3,
          name: "이현석",
          image: require("@/assets/people/Preview1.png"),
        },
        {
          id: 4,
          name: "문하늘",
          image: require("@/assets/people/Preview-6.png"),
        },
        {
          id: 5,
          name: "강민지",
          image: require("@/assets/people/Preview-7.png"),
        },
        {
          id: 6,
          name: "강지연",
          image: require("@/assets/people/Preview-2.png"),
        },
        {
          id: 6,
          name: "문우진",
          image: require("@/assets/people/Preview-4.png"),
        },

        // 친구 목록 추가
      ],
    };
  },
};
</script>

<style scoped>
#friendlistpg {
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F1F8FF;
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
.upperbar {
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
}
.upperbar > h1 {
  font-size: 20px;
  padding-left: 20px;
}
.friendadd-button2_btn_wrap {
  display: flex;
  height: 100%;
  padding: 1% 2%;
  flex-grow: 1;
  box-sizing: border-box;
  justify-content: space-between;
}
.friendadd-button2_btn_wrap > .friendadd-button2 {
  width: 100px;
  height: 100%;
  border-radius: 30px;
  border: none;
  background-color: #DFEFFF;
  color: #00BFFF;
}
.friendadd-button2_btn_wrap > .friendadd-button2:hover {
  border: 5px solid grey;
  font-weight: bold;
  transform: scale(1, 1);
  transition: all 0.5s;
}
.friend-list-box1 {
  width: 100%;
  height: 95%;
  padding: 0 2%;
  padding-bottom: 2%;
  box-sizing: border-box;
}
.friend-list-box2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.friend-list2 {
  width: 100%;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow-y: scroll;
}
.friend2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgb(198, 196, 196);
  box-sizing: border-box;
  padding: 10px 0;
}
.friend-image2 {
  width: 100px;
  border-radius: 50%;
}
.friend-name2 {
  font-size: 30px;
  font-weight: bold;
}

.walkrq-button {
  padding: 5px 10px;
  background-color: #00BFFF;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.1rem;
}

.black-bg {
  width: 100%;
  height: 90vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  padding: 20px;
  box-sizing: border-box;
  z-index: 4;
}
.white-bg {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(235, 233, 232);
  border-radius: 30px;
  padding: 25px;
  font-size: 20px;
  box-sizing: border-box;
}

.container2 {
  display: flex;
  padding: 3px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.textfield {
  border-radius: 8px;
  width: 75%;
  height: 2em;
  padding: 1%;
}
.time,
.place {
  background-color: #585757;
  color: #ffffff;
  border-radius: 10px;
  width: 10vh;
  height: auto;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
}

.found {
  font-size: 25px;
}
.image2 {
  width: 150px;
  border-radius: 50%;
}

label {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 1%;
  margin: 4px 0;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fcf7e0;
  color: rgb(76, 76, 76);
}
label p {
  padding-left: 20px;
  font-size: 20px;
  font-weight: bolder;
}

input[type="radio"] {
  display: none;
}
.custom-radio {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #ccc;
  background-color: #ada1a1;
}
input[type="radio"]:checked + .custom-radio {
  background-color: #ffdf52;
  border-color: #ffdf52;
}

.yes_no {
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
}
.no {
  width: 200px;
  height: 60px;
  background-color: #7a7878;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
}
.no:hover {
  border: 5px solid grey;
  background-color: grey;
  color: white;
  transform: scale(1, 1);
  transition: all 0.3s;
}

.yes {
  width: 200px;
  height: 60px;
  background-color: #585757;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 2rem;
}
.yes:hover {
  border: 5px solid grey;
  background-color: grey;
  color: white;
  transform: scale(1, 1);
  transition: all 0.3s;
}
</style>