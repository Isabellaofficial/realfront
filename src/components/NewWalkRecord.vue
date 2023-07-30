<template>
  <div class="NewWalkRecordPage">
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
        <p class="top_center top_name">산책기록</p>
      </div>
    </div>
    <!-- middle-->
    <div class="date-icon-container">
      <div class="top_right">
        <p class="date-text"><br>&emsp;&emsp;오늘은 {{ currentDate }} </p>
        <div class="modal-wrapper">
          <div class="calendar-icon"  @click="toggleModal"><br>📅</div>
        </div>
      </div>
    </div>

    <!-- 모달창 부분을 추가합니다. v-if로 showModal 변수가 true일 때만 모달창이 나타납니다. -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">

   
        
        <!-- 캘린더 내용 -->
        <div class="calendar">
          <div class="calendar-header">
            <button @click="prevMonth">&lt;</button>
            <span>{{ currentMonth }}</span>
            <button @click="nextMonth">&gt;</button>
          </div>
            <!-- 요일 표시 부분 -->
        <div class="calendar-days week-days">
          <div v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek" class="day">{{ dayOfWeek }}</div>
        </div>
          <div class="calendar-days">
            <div v-for="day in daysInMonth" 
                      :key="day" class="['day', { 'today': isToday(day), 'selected-day': isSelectedDay(day) }]">{{ day }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { defineComponent, ref, computed } from "vue";
import { startOfMonth, endOfMonth, eachDayOfInterval, format, addMonths, subMonths, getDay, } from 'date-fns';

export default defineComponent({
  name: "NewWalkRecordpage",
  components: {
    // Modal 컴포넌트 등록
  },
  setup() {
    const currentDate = ref(new Date());
    const showModal = ref(false);
    const currentMonth = ref(new Date());

    const daysOfWeek = ["일","월", "화", "수", "목", "금", "토"];

    const daysInMonth = computed(() => {
      const start = startOfMonth(currentMonth.value);
      const end = endOfMonth(currentMonth.value);
      const days = eachDayOfInterval({ start, end });

      // 각 월의 첫째 날짜의 요일을 얻습니다.
      const firstDayOfWeek = getDay(start);

      // 첫째 날짜 이전에는 빈 칸을 생성합니다.
      for (let i = 0; i < firstDayOfWeek; i++) {
        days.unshift(null);
      }

      return days.map((date) => (date ? format(date, 'dd') : ''));
    });

    function showCalendarModal() {
      showModal.value = true;
    }
     function closeModal() {
      showModal.value = false;
    }

    function prevMonth() {
      currentMonth.value = subMonths(currentMonth.value, 1);
    }

    function nextMonth() {
      currentMonth.value = addMonths(currentMonth.value, 1);
    }

    function toggleModal() {
      showModal.value = !showModal.value;
    }
   


    return {
      currentDate: computed(() => format(currentDate.value, 'yyyy년 MM월 dd일')),
      showModal,
      currentMonth: computed(() => format(currentMonth.value, 'MMMM yyyy')),
      daysInMonth,
      daysOfWeek,
      showCalendarModal,
      prevMonth,
      nextMonth,
      closeModal,
      toggleModal
    };
  },
  methods: {
    toggleButton(button) {
      if (this.selectedButton === button) {
        this.selectedButton = null;
      } else {
        this.selectedButton = button;
      }
      this.showController = this.selectedButton === 'controller';
      this.showState = this.selectedButton === 'state';
      this.showHistory = this.selectedButton === 'history';
    },
  },
});
</script>




<style scoped>
.NewWalkRecordPage {
  background-color: #F1F8FF;
  width: 100%;
  height: 100vh;
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
  .modal {
  /* 기존 배경색과 테두리를 없앱니다. */
  background-color: transparent;
  border: none;
  box-shadow: none;
  position: absolute;
  top: -15%;
  left: 0;
  right: 0;
  bottom: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.modal[style*="display: block;"] {
  /* 모달창 열릴 때 애니메이션 효과 추가 */
  animation: modalOpenAnim 0.3s ease-out;
}
@keyframes modalOpenAnim {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.modal-content {
  background-color: rgb(249, 252, 255);
  padding: 160px;
  width: 10px;
  height: 1%;
  border: 2px solid #B1C9E0;
  border-radius: 17px;
  animation: modalOpenAnim 0.5s ease-out;
}
/* 기존의 modal-overlay 스타일을 수정하여 투명도를 최대로 설정합니다. */
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent; /* 배경색을 투명하게 설정합니다. */
  z-index: 999;
}
.close-button{
  position: left;
}

/* 요일 표시를 위한 스타일 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 8px;
  background-color: #ffffff;
}

/* 날짜들 가로로 나열되도록 스타일 조정 */
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 8px;
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 50%;
}

.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.calendar-icon {
  cursor: pointer;
}

/* 이전, 다음 달 버튼 스타일 */
.calendar-header button {
  background: none;
  border: none;
  cursor: pointer;
}

/* 버튼에 마우스를 올렸을 때 스타일 */
.calendar-header button:hover {
  background-color: #f0f0f0;
}
.today {
  font-weight: bold;
  background-color: #f0f0f0; /* 예시로 배경 색상을 녹색으로 설정 */
}

/* 선택된 날짜 강조 스타일 */
.selected-day {
  font-weight: bold;
  background-color: #f0f0f0; /* 예시로 배경 색상을 녹색으로 설정 */
}
</style>