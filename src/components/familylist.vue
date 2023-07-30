<template>
    <div class="family-list">
        <div class="familyheader">
      <div class="back-button">
        <img src="../assets/LeftIcon.png" alt="Back Button" @click="goBack">
      </div>
      <div>
        <h3>나의 가족리스트</h3>
      </div>
    </div>
      <div v-for="person in family" :key="person.id" class="person">
        <div class="photo-container">
          <img :src="require(`../assets/people/${person.photo}`)" alt="Person Photo" class="photo">
        </div>
        <div class="details">
          <h2>{{ person.name }}</h2>
          <p>관계: {{ person.ver }}</p>
          <p v-if="person.id === 1">레벨: {{ person.age }}</p>
          <p>산책 횟수: {{ person.dob }}</p>
          <p v-if="person.id === 2">반려동물 산책: {{ person.dog }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "familyComponent",
    methods: {
    goBack() {
        this.$router.back();
    }
  },
    data() {
      return {
        family: [
          {
            id: 1,
            name: "별콩뭉치",
            ver: "반려동물",
            age: 1,
            dob: "10회",
            photo: "Preview11.png"
          },
          {
            id: 2,
            name: "김다은",
            ver: "언니",
            dob: "13회",
            dog: "2회",
            photo: "Preview-2.png"
          },
          {
            id: 2,
            name: "김루나",
            ver: "동생",
            dob: "23회",
            dog: "1회",
            photo: "Preview-3.png"
          },
          {
            id: 2,
            name: "장다은",
            ver: "엄마",
            dob: "3회",
            dog: "1회",
            photo: "Preview-4.png"
          },
          {
            id: 2,
            name: "김아아",
            ver: "아빠",
            dob: "8회",
            dog: "2회",
            photo: "Preview-5.png"
          },
          {
            id: 2,
            name: "장재인",
            ver: "외부인",
            dob: "1회",
            dog: "1회",
            photo: "Preview-6.png"
          },
          // 추가적인 가족 멤버를 배열에 추가할 수 있습니다.
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@500&display=swap');
.family-list { 
  display: flex;
  flex-direction: column;
  align-items: center; /* Added */
  gap: 20px;
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #F1F8FF;
  font-family: 'IBM Plex Sans KR', sans-serif;
}

.person {
  display: flex;
  align-items: center;
  justify-content: center; /* Added */
  width: 80%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-bottom: 20px; 
  justify-content: space-evenly;
}

.photo-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

p {
  margin: 5px 0;
  color: #666;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  margin-top: -0.5vh;
  cursor: pointer;
}

.familyheader {
position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #687089;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  color: white;
}

</style>
