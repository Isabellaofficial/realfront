<template>
  <div class="WalkMate">
    <div class="header">
      <div class="line"></div>
      <div class="top_wrap">
        <div class="top_left">
          <img src="../assets/004.png" @click="$router.go(-1)" />
        </div>
        <p class="top_center header_name">산책 동행인 추가</p>
        <div class="top_right"></div>
      </div>
    </div>

    <div class="WalkMate_middle_1">
      <div class="container">
        <div class="box" ref="box">
          <div
            v-for="index in selectedCircles"
            :key="index"
            class="circle-img circle"
          >
            <img :src="getPerson(index).image" :alt="getPerson(index).name" />
            <div class="name">{{ getPerson(index).name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="WalkMate_middle_2">
      <div class="text-box">가족 추가</div>
      <div class="white-box">
        <div
          v-for="(person, index) in peopleFamily"
          :key="index"
          class="circle-img circle"
          :class="{ selected: selectedCircles.includes(index) }"
          @click="selectCircle(index)"
        >
          <img :src="person.image" :alt="person.name" />
          <p class="name">{{ person.name }}</p>
        </div>
      </div>
    </div>
    <div class="WalkMate_middle_3">
      <div class="text-box">친구 추가</div>
      <div class="white-box">
        <div
          v-for="(person, index) in peopleFriends"
          :key="index"
          class="circle-img circle"
          :class="{
            selected: selectedCircles.includes(index + peopleFamily.length),
          }"
          @click="selectCircle(index + peopleFamily.length)"
        >
          <img :src="person.image" :alt="person.name" />
          <p class="name">{{ person.name }}</p>
        </div>
      </div>
    </div>
    <div class="WalkMate_middle_4">
      <button class="walkend-button">
        <router-link to="/WalkMate" class="WalkEnd-link" @click="showConfirmation">
          <div>시 작</div>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WalkMate",
  data() {
    return {
      pageName: "WalkMate",
      selectedCircles: [],
      peopleFamily: [
        {
          name: "별콩뭉치",
          image: require("../assets/icon/dog1.png"),
        },
        {
          name: "김다은",
          image: require("../assets/walkmate/Preview-2.png"),
        },
        {
          name: "김루나",
          image: require("../assets/walkmate/Preview-3.png"),
        },
        {
          name: "장다은",
          image: require("../assets/walkmate/Preview-4.png"),
        },
        {
          name: "김아아",
          image: require("../assets/walkmate/Preview-5.png"),
        },
        {
          name: "장재인",
          image: require("../assets/walkmate/Preview-6.png"),
        },
      ],
      peopleFriends: [
        {
          name: "박김태연",
          image: require("../assets/walkmate/Preview-3.png"),
        },
        {
          name: "김현빈",
          image: require("../assets/walkmate/Preview.0.png"),
        },
        {
          name: "이현석",
          image: require("../assets/walkmate/Preview-2.png"),
        },
        {
          name: "문하늘",
          image: require("../assets/walkmate/Preview-6.png"),
        },
        {
          name: "강민지",
          image: require("../assets/walkmate/Preview-7.png"),
        },
        {
          name: "문우진",
          image: require("../assets/walkmate/Preview-4.png"),
        },
        {
          name: "박다율",
          image: require("../assets/walkmate/Preview-5.png"),
        },
        {
          name: "이수아",
          image: require("../assets/walkmate/Preview-8.png"),
        },
        {
          name: "김은지",
          image: require("../assets/walkmate/Preview-9.png"),
        },
      ],
    };
  },
  methods: {
    showConfirmation() {
  if (this.selectedCircles.length === 0) {
    this.showConfirmModal("동행자를 추가하지 않으시겠습니까?")
      .then((confirmed) => {
        if (confirmed) {
          this.navigateToKakaoMap();
        }
      });
  } else {
    this.navigateToKakaoMap();
  }
},
showConfirmModal(message) {
  return new Promise((resolve) => {
    const confirmModal = document.createElement("div");
    confirmModal.classList.add("confirm-modal");

    const confirmHeading = document.createElement("h2");
    confirmHeading.textContent = message;
    confirmModal.appendChild(confirmHeading);

    const confirmButtonContainer = document.createElement("div");
    confirmButtonContainer.classList.add("button-container");

    const yesButton = document.createElement("button");
    yesButton.textContent = "네";
    yesButton.addEventListener("click", () => {
      resolve(true);
      document.body.removeChild(confirmModal);
    });
    confirmButtonContainer.appendChild(yesButton);

    const noButton = document.createElement("button");
    noButton.textContent = "아니요";
    noButton.addEventListener("click", () => {
      resolve(false);
      document.body.removeChild(confirmModal);
    });
    confirmButtonContainer.appendChild(noButton);

    confirmModal.appendChild(confirmButtonContainer);

    document.body.appendChild(confirmModal);
  });
},
    navigateToKakaoMap() {
      this.$router.push("/KakaoMap");
    },
    
    selectCircle(index) {
  if (this.selectedCircles.length >= 5) {
    this.showAlertModal("더 이상 선택할 수 없습니다.");
    this.selectedCircles = [];
    return;
  }
  if (this.selectedCircles.includes(index)) {
    const i = this.selectedCircles.indexOf(index);
    if (i > -1) {
      this.selectedCircles.splice(i, 1);
    }
  } else {
    this.selectedCircles.push(index);
  }
},
showAlertModal(message) {
  const alertModal = document.createElement("div");
  alertModal.classList.add("alert-modal");

  const alertHeading = document.createElement("h2");
  alertHeading.textContent = message;
  alertModal.appendChild(alertHeading);

  const closeButton = document.createElement("button");
  closeButton.textContent = "닫기";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(alertModal);
  });
  alertModal.appendChild(closeButton);

  document.body.appendChild(alertModal);
},
    removeCircle(index) {
      const i = this.selectedCircles.indexOf(index);
      if (i > -1) {
        this.selectedCircles.splice(i, 1);
      }
    },
    getPerson(index) {
      if (index < this.peopleFamily.length) {
        return this.peopleFamily[index];
      } else {
        return this.peopleFriends[index - this.peopleFamily.length];
      }
    },
  },
  watch: {
    selectedCircles(newVal) {
      const box = this.$refs.box;
      if (newVal.length === 0) {
        return;
      }
      box.innerHTML = "";
      for (let i = 0; i < newVal.length; i++) {
        const index = newVal[i];
        let person = null;
        if (index < this.peopleFamily.length) {
          person = this.peopleFamily[index];
        } else {
          person = this.peopleFriends[index - this.peopleFamily.length];
        }
        const circle = document.createElement("div");
        const image = document.createElement("img"); // 이미지 태그 생성
        circle.classList.add("circle-img", "circle");
        image.src = person.image; // 이미지 태그에 src 추가
        image.alt = person.name; // 이미지 태그에 alt 추가
        circle.appendChild(image); // 이미지 태그를 circle 요소에 추가
        box.appendChild(circle);
      }
    },
  },
});
</script>
         


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@500&display=swap');
.selected {
  background-color: #b4bdc6;
}

.name {
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
}
</style>

<style>
.WalkMate {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'IBM Plex Sans KR', sans-serif;
  background-color: #F1F8FF;
}

.header {
  width: 100%;
  height: 7%;
  display: flex;
  box-sizing: border-box;
  /* background-color: #ffffff; */
  flex-direction: column-reverse;
  align-items: center;
}
.header_name {
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.32px;
  font-family: 'IBM Plex Sans KR', sans-serif;
}
.WalkMate .top_left img {
  width: 32px;
  height: 32px;
  padding-left: 15%;
}

.WalkMate_middle_1 {
  width: 100%;
  height: 28%;
  padding: 5% 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.WalkMate_middle_2 {
  width: 100%;
  height: 25%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.WalkMate_middle_3 {
  width: 100%;
  height: 25%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.WalkMate_middle_4 {
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 100%;
  height: 100%;
  background-color: #e2f1ff;
}
.box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex;
  align-items: center;
  overflow-x: auto;
  justify-content: center;
}

.text-box {
  width: 100%;
  height: 15%;
  display: flex;
  background-color: #b4bdc6;
  justify-content: center;
  align-items: center;
}
.white-box {
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
}

.circle {
  background-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  margin: 1%;
  box-sizing: border-box;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.circle-img {
  width: 120px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.circle-img img {
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
}

.walkend-button {
  width: 38%;
  height: 70%;
  background-color: #ffebb6;
  color: rgb(52, 52, 52);
  font-size: 2rem;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  border: 3px solid rgb(0, 0, 0);
  margin-top: 5vh;
}
.WalkEnd-link {
  display: block;
  text-decoration: none;
  color: rgb(52, 52, 52);
}
.confirm-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.confirm-modal h2 {
  font-family: 'IBM Plex Sans KR', sans-serif;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.6vh;
}

.confirm-modal .button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.confirm-modal button {
  font-family: 'IBM Plex Sans KR', sans-serif;
  display: block;
  margin: 0 10px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px 10px;
  background-color: white;
  font-size: 0.8rem;
}
</style>