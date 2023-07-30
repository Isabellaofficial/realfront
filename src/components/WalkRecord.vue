<template>
  <div class="WalkRecordPage">
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
        <p class="top_center top_name">산책기록</p>
        <div class="top_right"></div>
      </div>
    </div>
    <!-- middle -->
    <div class="middle">
      <div class="calendar">
        <div class="head">
          <button @click="prevMonth">&lt;</button>
          <div class="thismonth">{{ year }}년 {{ month }}월</div>
          <button @click="nextMonth">&gt;</button>
        </div>
        <div class="days of_week">
          <div class="day" v-for="(day, index) in days" :key="index">
            {{ day }}
          </div>
        </div>

        <div class="days">
          <div
            class="date"
            v-for="day in getDaysInMonth()"
            :key="day"
            :class="{
              today: isToday(day),
              selected: isSelected(day),
              sunday: isSunday(day),
            }"
            @click="selectDate(day)"
          >
            <div v-if="!isSelected(day)">{{ day }}</div>
            <div v-if="isSelected(day)" class="report-container">
              <div>{{ day }}</div>
              <div class="report-button-container">
                <button class="report-button" @click="openReport()">
                  🤩<br/>산책<br/>기록
                </button>
              </div>
            </div>
            <div
              class="report-image"
              v-show="
                !isSelected(day) &&
                ((year === 2023 && month === 4 && day === 6) ||
                  (year === 2023 && month === 4 && day === 18) ||
                  (year === 2023 && month === 5 && day === 30))
              "
            >
              <img
                v-if="day === 6"
                src="../assets/rundog.png"
                alt="friend"
              />
              <img
                v-if="day === 18"
                src="../assets/run.png"
                alt="walkpet"
              />
              <img
                v-if="day === 30"
                src="../assets/runrun.png"
                alt="walkpet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modals" v-if="report.isOpen">
      <div class="modals-content">
        <div class="modals-header">
          <h2 style="padding: 3vh;">
             <span class="highlight">{{ report.date }}</span> <br />
              산책 기록  
          </h2>
          <span class="close" @click="closeReport()">&times;</span>
        </div>
        <div class="modal-body">
          <div class="image-container">
            <div v-for="image in reportImages" :key="image" class="image-item">
              <img
                :src="image"
                alt="리포트 이미지"
                class="report-image"
              />
            </div>
          </div>
          <p style="font-size: 16px; padding: 1vh;">도토리🫘: {{ report.d }}</p>
          <p style="font-size: 16px; padding: 1vh;">칼로리❤️‍🔥: {{ report.k }}</p>
          <p style="font-size: 16px; padding: 1vh;">걸음수: {{ report.start }}</p>
          <p style="font-size: 16px; padding: 1vh;">산책 시간: {{ report.duration }}</p>
          <p style="font-size: 16px; padding: 1vh;">산책 거리: {{ report.distance }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import walkfriend from "../assets/people/Preview-3.png";
import walkpet from "../assets/people/Preview-8.png";
import asset3 from "../assets/people/Preview11.png";
import asset4 from "../assets/people/Preview-7.png";
import asset5 from "../assets/BadgePage/icon_2.png";
import asset6 from "../assets/BadgePage/icon_4.png";

export default {
  name: "walkrecordComponent",
  data() {
    return {
      year: moment().year(),
      month: moment().month() + 1,
      selectedDate: null,
      report: {
        date: "",
        duration: "",
        isOpen: false,
      },
      reportImages: [],
    };
  },
  computed: {
    days() {
      return ["일", "월", "화", "수", "목", "금", "토"];
    },
  },
  methods: {
    prevMonth() {
      if (this.month === 1) {
        this.month = 12;
        this.year -= 1;
      } else {
        this.month -= 1;
      }
    },
    nextMonth() {
      if (this.month === 12) {
        this.month = 1;
        this.year += 1;
      } else {
        this.month += 1;
      }
    },
    getDaysInMonth() {
      const date = moment(`${this.year}-${this.month}-01`, "YYYY-MM-DD");
      const daysInMonth = date.daysInMonth();
      const startDay = date.day();
      const days = [];
      for (let i = 0; i < startDay; i++) {
        days.push("");
      }
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
      }
      return days;
    },
    isToday(day) {
      const today = moment();
      const date = moment(`${this.year}-${this.month}-${day}`, "YYYY-MM-DD");
      return today.isSame(date, "day");
    },
    isSelected(day) {
      if (!this.selectedDate) {
        return false;
      }
      const date = moment(`${this.year}-${this.month}-${day}`, "YYYY-MM-DD");
      return (
        this.selectedDate.isSame(date, "day") &&
        ["2023-04-06", "2023-04-18", "2023-05-30"].includes(date.format("YYYY-MM-DD"))
      );
    },
    selectDate(day) {
      const date = moment(`${this.year}-${this.month}-${day}`, "YYYY-MM-DD");
      this.selectedDate = date;
    },
    isSunday(day) {
      const date = moment(`${this.year}-${this.month}-${day}`, "YYYY-MM-DD");
      return date.day() === 0; // 0 is Sunday
    },
    openReport() {
      const reportDate = this.selectedDate.format("YYYY년 MM월 DD일");
      const reportImages = []; // Array to store the report images

      if (reportDate === "2023년 04월 18일") {
        reportImages.push(asset5); // Add image to the array
        this.report.d = "4개";
        this.report.duration = "30분";
        this.report.k = "56 칼로리";
        this.report.distance = "1.12km";
        this.report.start = "564걸음";
      } else if (reportDate === "2023년 04월 06일") {
        reportImages.push(asset3);
        reportImages.push(walkpet);
        reportImages.push(asset4);
        this.report.d = "5개";
        this.report.duration = "1시간 5분";
        this.report.k = "123 칼로리";
        this.report.distance = "2km";
        this.report.start = "234걸음";
      } else if (reportDate === "2023년 05월 30일") {
        reportImages.push(asset6);
        reportImages.push(walkpet);
        reportImages.push(walkfriend);
        this.report.d = "1개";
        this.report.duration = "5초";
        this.report.k = "9 칼로리";
        this.report.distance = "0.13km";
        this.report.start = "176걸음";
      }

      this.report.date = reportDate;
      this.reportImages = reportImages; // Assign the array of images to reportImages
      this.report.isOpen = true;
    },
    closeReport() {
      this.report.isOpen = false;
    },
  },
};
</script>

<style scoped>
.WalkRecordPage {
  background-color: #F1F8FF;
  width: 100%;
  height: 90vh;
  overflow-y: auto;
}
.WalkRecordPage .top {
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
.WalkRecordPage .top_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.WalkRecordPage .top_center {
  width: 70%;
  height: fit-content;
}
.WalkRecordPage .top_left,
.WalkRecordPage .top_right {
  width: 15%;
  height: fit-content;
}
.WalkRecordPage .top_name {
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
.WalkRecordPage .middle {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.calendar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  box-sizing: border-box;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 5px 20px;
  height: auto;
}
.thismonth {
  font-weight: bold;
  font-size: 25px;
}

.head > button {
  border: none;
  font-weight: 900;
  font-size: 30px;
  color: grey;
  padding: 0px 10px;
}

.calheader > button:hover {
  color: rgb(255, 255, 255);
  background-color: #687089;
  border-radius: 50px;
}
.days .day:nth-child(1),
.days .day:nth-child(2),
.days .day:nth-child(3),
.days .day:nth-child(4),
.days .day:nth-child(5),
.days .day:nth-child(6),
.days .day:nth-child(7) {
  background-color: #fcdede; /* 배경색을 칠함 */
  font-weight: bold; /* 글씨체를 굵게 함 */
  font-size: 18px; /* 글씨 크기를 조정함 */
  height: 100%; /* 그리드 셀 높이를 조정함 */
  display: flex; /* 내부 콘텐츠를 가운데 정렬하기 위해 추가 */
  justify-content: center; /* 내부 콘텐츠를 가운데 정렬하기 위해 추가 */
  align-items: center; /* 내부 콘텐츠를 가운데 정렬하기 위해 추가 */
  font-family: 'IBM Plex Sans KR', sans-serif;
}
.days .day:nth-child(1) {
  color: red;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  /* grid-auto-rows: 130px; 변경된 높이 */
  flex-grow: 1;
}

.days.of_week {
  grid-template-rows: repeat(1, 50px);
  flex-grow: unset;
}

.date {
  display: inline-block;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding-top: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
}

.date:hover {
  box-shadow: inset 0 0 0 2px rgb(78, 78, 78);
  transition: all 0.1s;
}
.date.sunday {
  color: red;
}

.selected {
  color: #313131;
  font-weight: 900;
}

.modals {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.modals .close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: #333;
  cursor: pointer;
}
.report-button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.report-image {
  width: 45px;
  height: 45px;
  display: inline-block;
  justify-content: center;
  padding-top: 10px;
}

.report-button{
  width: 50px;
  height: 60px;
  border-radius: 20px;
  border: none;
  background-color: rgb(252, 236, 168);
  font-weight: bold;

}
.report-button:hover{
  border: 1px solid grey;
  transform: scale(1, 1);
  transition: all 0.3s
}

.date.today {
  position: relative;
}

.date.today::before {
  content: "";
  position: absolute;
  top: 1.9vh;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.3); /* 색상 및 투명도 조정 */
  width: 30px;
  height: 30px;
}

.icon {
  margin-top: 15px;
}

.modals-content {
    background-color: rgb(255, 255, 255);
    padding: 0px;
    border-radius: 5px;
    display: flex;
    font-family: 'IBM Plex Sans KR', sans-serif;
    flex-direction: column;
    z-index: 1;
}

.image-container {
    display: flex;
    flex-direction: row;
    padding: 4vh;
    justify-content: center;
    align-items: center;
}

.image-item {
  margin-right: 10px;
}

.report-image {
  width: 80px;
  height: 80px;
}

.highlight {
  background-color: #f2f9c7;
  padding: 2px;
  border-radius: 2px;
}
</style>