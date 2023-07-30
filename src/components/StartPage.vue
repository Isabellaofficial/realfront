<template>
  <div class="startpage">
    <div class="button-container">
    <div
      v-if="showPeopleButton"
      class="button"
      characterType="people"
      @click="selectCharacterType('people')"
      :class="{ active: characterType === 'people' }"
    >
      <img src="../assets/startpeople.png">
    </div>
    <div
      v-if="showPetButton"
      class="button"
      characterType="pet"
      @click="selectCharacterType('pet'); selectedMenu = 'dog';"
      :class="{ active: characterType === 'pet' }"
    >
      <img src="../assets/startpet.png">
    </div>
  </div>
    <div class="bottom-box" :class="{ 'modal-overlay': showModal }">
      <div class="border-box" :class="{ 'out-box': characterType === 'out' }">
        <!-- border box content here -->

        <!-- Selected Clothes Type -->
        <img
          v-if="selectedClothesType"
          :src="require(`../assets/icon/${selectedClothesType}.png`)"
          style="width: 50%; position: absolute; top: 26%; left: 50%; transform: translate(-50%, -50%); z-index: 0;"
        >

        <!-- Selected Hair Type -->
        <img
          v-if="selectedHairType"
          :src="require(`../assets/icon/${selectedHairType}.png`)"
          style="width: 45%; position: absolute; top: 23.93%; left: 50%; transform: translate(-50%, -50%); z-index: 1;"
        >

        <!-- Selected Face Type -->
        <img
          v-if="selectedFaceType"
          :src="require(`../assets/icon/${selectedFaceType}.png`)"
          style="width: 50%; position: absolute; top: 24%; left: 50%; transform: translate(-50%, -50%); z-index: 0;"
        >

        <!-- Selected Style Type -->
        <img
          v-if="selectedStyleType"
          :src="require(`../assets/icon/${selectedStyleType}.png`)"
          style="width: 45%; position: absolute; top: 23.8%; left: 50%; transform: translate(-50%, -50%); z-index: 2;"
        >

        <!-- Selected Dog Type -->
        <img
          v-if="selectedDogType"
          :src="require(`../assets/icon/${selectedDogType}.png`)"
          style="width: 80%; position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); z-index: 0;"
        >
        <button class="complete-button" v-if="showCompleteButton" @click="validateAndShowModal">완료</button>
      </div>
    </div>

    <div class="menu-box">
      <div class="menu-bar-origin"></div>
      <div v-if="characterType === 'people'" class="menu-bar">
        <div class="menu" @click="selectedMenu = 'hair'">hair</div>
        <div class="menu" @click="selectedMenu = 'face'">face</div>
        <div class="menu" @click="selectedMenu = 'clothes'">clothes</div>
        <div class="menu" @click="selectedMenu = 'style'">style</div>
      </div>
      <div v-else-if="characterType === 'dog'" class="menu-bar2"></div>

      <div class="sub-box pet-sub-box" v-if="selectedMenu === 'dog' && characterType === 'pet'">
        <!-- 펫 선택 박스 내용 -->
        <div class="dog-images-container">
        <div class="dog-image" @click="setDogType('dog1')">
         <img src="@/assets/icon/dog1.png">
         </div>
         <div class="dog-image" @click="setDogType('dog2')">
         <img src="@/assets/icon/dog2.png">
         </div>
         <div class="dog-image" @click="setDogType('dog3')">
         <img src="@/assets/icon/dog3.png">
         </div>
         <div class="dog-image" @click="setDogType('dog4')">
         <img src="@/assets/icon/dog4.png">
         </div>
         <div class="dog-image" @click="setDogType('dog5')">
         <img src="@/assets/icon/dog5.png">
         </div>
         <div class="dog-image" @click="setDogType('dog6')">
         <img src="@/assets/icon/dog6.png">
         </div>
         <div class="dog-image" @click="setDogType('dog7')">
         <img src="@/assets/icon/dog7.png">
         </div>
         <div class="dog-image" @click="setDogType('dog8')">
         <img src="@/assets/icon/dog8.png">
         </div>
         <div class="dog-image" @click="setDogType('dog9')">
         <img src="@/assets/icon/dog9.png">
         </div>
        </div>
        </div>

        <div class="sub-box hair-sub-box" v-if="selectedMenu === 'hair' && characterType === 'people'">
        <!-- 헤어 선택 박스 내용 -->
        <div class="hair-images-container">
          <div class="hair-image" @click="setHairType('Hair33')">
    <img src="@/assets/icon/Hair33.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair01')">
    <img src="@/assets/icon/Hair01.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair02')">
    <img src= "@/assets/icon/Hair02.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair04')">
    <img src="@/assets/icon/Hair04.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair05')">
    <img src="@/assets/icon/Hair05.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair06')">
    <img src="@/assets/icon/Hair06.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair07')">
    <img src="@/assets/icon/Hair07.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair08')">
    <img src="@/assets/icon/Hair08.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair20')">
    <img src="@/assets/icon/Hair20.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair19')">
    <img src="@/assets/icon/Hair19.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair17')">
    <img src="@/assets/icon/Hair17.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair11')">
    <img src="@/assets/icon/Hair11.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair19')">
    <img src="@/assets/icon/Hair18.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair21')">
    <img src="@/assets/icon/Hair21.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair22')">
    <img src="@/assets/icon/Hair22.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair23')">
    <img src="@/assets/icon/Hair23.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair24')">
    <img src="@/assets/icon/Hair24.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair27')">
    <img src="@/assets/icon/Hair27.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair28')">
    <img src="@/assets/icon/Hair28.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair30')">
    <img src="@/assets/icon/Hair30.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair31')">
    <img src="@/assets/icon/Hair31.png">
  </div>
  <div class="hair-image" @click="setHairType('Hair32')">
    <img src="@/assets/icon/Hair32.png">
  </div>
</div>
  </div>

  <div class="sub-box" v-if="selectedMenu === 'face' && characterType === 'people'">
        <!-- 얼굴 선택 박스 내용 -->
        <div class="face-images-container">
          <div class="face-image" @click="setFaceType('Face02')">
            <img src="../assets/icon/Face02.png">
          </div>
          <div class="face-image" @click="setFaceType('Face03')">
            <img src="../assets/icon/Face03.png">
          </div>
          <div class="face-image" @click="setFaceType('Face04')">
            <img src="../assets/icon/Face04.png">
          </div>
          <div class="face-image" @click="setFaceType('Face05')">
            <img src="../assets/icon/Face05.png">
          </div>
          <div class="face-image" @click="setFaceType('Face06')">
            <img src="../assets/icon/Face06.png">
          </div>
          <div class="face-image" @click="setFaceType('Face07')">
            <img src="../assets/icon/Face07.png">
          </div>
          <div class="face-image" @click="setFaceType('Face08')">
            <img src="../assets/icon/Face08.png">
          </div>
          <div class="face-image" @click="setFaceType('Face09')">
            <img src="../assets/icon/Face09.png">
          </div>
          <div class="face-image" @click="setFaceType('Face10')">
            <img src="../assets/icon/Face10.png">
          </div>
        </div>
      </div>

      <div class="sub-box" v-if="selectedMenu === 'style' && characterType === 'people'">
        <!-- 스타일 선택 박스 내용 -->
        <div class="style-images-container">
          <div class="style-image" @click="setStyleType('Style01')">
            <img src="../assets/icon/Style01.png">
          </div>
          <div class="style-image" @click="setStyleType('Style02')">
            <img src="../assets/icon/Style02.png">
          </div>
          <div class="style-image" @click="setStyleType('Style03')">
            <img src="../assets/icon/Style03.png">
          </div>
          <div class="style-image" @click="setStyleType('Style04')">
            <img src="../assets/icon/Style04.png">
          </div>
          <div class="style-image" @click="setStyleType('Style05')">
            <img src="../assets/icon/Style05.png">
          </div>
          <div class="style-image" @click="setStyleType('Style06')">
            <img src="../assets/icon/Style06.png">
          </div>
          <div class="style-image" @click="setStyleType('Style07')">
            <img src="../assets/icon/Style07.png">
          </div>
          <div class="style-image" @click="setStyleType('Style08')">
            <img src="../assets/icon/Style08.png">
          </div>
          <div class="style-image" @click="setStyleType('Style09')">
            <img src="../assets/icon/Style01.png">
          </div>
          <div class="style-image" @click="setStyleType('Style10')">
            <img src="../assets/icon/Style10.png">
          </div>
          <div class="style-image" @click="setStyleType('Style11')">
            <img src="../assets/icon/Style11.png">
          </div>
          <div class="style-image" @click="setStyleType('Style12')">
            <img src="../assets/icon/Style12.png">
          </div>
          <div class="style-image" @click="setStyleType('Style13')">
            <img src="../assets/icon/Style13.png">
          </div>
          <div class="style-image" @click="setStyleType('Style14')">
            <img src="../assets/icon/Style14.png">
          </div>
        </div>
      </div>

      <div class="sub-box" v-if="selectedMenu === 'clothes' && characterType === 'people'">
        <!-- 옷 선택 박스 내용 -->
        <div class="clothes-images-container">
          <div class="clothes-image" @click="setClothesType('Outfit01')">
            <img src="../assets/icon/Outfit01.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit02')">
            <img src="../assets/icon/Outfit02.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit04')">
            <img src="../assets/icon/Outfit04.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit21')">
            <img src="../assets/icon/Outfit21.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit05')">
            <img src="../assets/icon/Outfit05.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit06')">
            <img src="../assets/icon/Outfit06.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit07')">
            <img src="../assets/icon/Outfit07.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit08')">
            <img src="../assets/icon/Outfit08.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit10')">
            <img src="../assets/icon/Outfit10.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit11')">
            <img src="../assets/icon/Outfit11.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit12')">
            <img src="../assets/icon/Outfit12.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit13')">
            <img src="../assets/icon/Outfit13.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit14')">
            <img src="../assets/icon/Outfit14.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit18')">
            <img src="../assets/icon/Outfit18.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit19')">
            <img src="../assets/icon/Outfit19.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit23')">
            <img src="../assets/icon/Outfit23.png">
          </div>
          <div class="clothes-image" @click="setClothesType('Outfit24')">
            <img src="../assets/icon/Outfit24.png">
          </div>
        </div>
      </div>
</div>
<div class="modal" v-if="showModal1">
    <div class="modal-content">
      <p>반려동물이 있으신가요?</p>
      <div class="button-container">
        <button @click="confirmPetYes">예</button>
        <button @click="confirmPetNo">아니요</button>
      </div>
    </div>
  </div>

  <div class="modal" v-if="showModal2">
    <div class="modal-content">
      <p>반려동물의 이름을 적어주세요.</p>
      <input class="textbx" type="text" v-model="petName">
      <div class="button-container">
        <button @click="confirmPetName">확인</button>
      </div>
    </div>
  </div>

    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <p>캐릭터 설정을 완료하겠습니까?</p>
        <div class="button-container">
          <button @click="confirmSettings">네</button>
          <button @click="showModal = false">아니요</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "startpageComponent",
  setup() {
    const showModal = ref(false);
    const router = useRouter();
    const characterType = ref("");
    const showOutButton = ref(true);
    const selectedMenu = ref("");
    const selectedHairType = ref("");
    const selectedFaceType = ref("");
    const selectedClothesType = ref("");
    const selectedStyleType = ref("");
    const selectedDogType = ref("");
    const selectedPeopleHairType = ref("");
    const selectedPeopleFaceType = ref("");
    const selectedPeopleClothesType = ref("");
    const selectedPeopleStyleType = ref("");
    const selectedPetDogType = ref("");
    const showCompleteButton = ref(false);
    const showModal1 = ref(true);
    const showModal2 = ref(false);
    const petName = ref('');
    const showPeopleButton = ref(true);
    const showPetButton = ref(true);


    // Watch for changes in characterType and update selected elements accordingly
    watch(characterType, (newValue) => {
      if (newValue === "people") {
        selectedHairType.value = selectedPeopleHairType.value;
        selectedFaceType.value = selectedPeopleFaceType.value;
        selectedClothesType.value = selectedPeopleClothesType.value;
        selectedStyleType.value = selectedPeopleStyleType.value;
        selectedDogType.value = "";
      } else if (newValue === "pet") {
        selectedDogType.value = selectedPetDogType.value;
        selectedHairType.value = "";
        selectedFaceType.value = "";
        selectedClothesType.value = "";
        selectedStyleType.value = "";
      }
    });

    const confirmPetYes = () => {
      showModal1.value = false;
      showModal2.value = true;
    };

    const confirmPetNo = () => {
      showModal1.value = false;
      showPetButton.value = false;
      // No navigation needed, stay on the current page
    };

    const confirmPetName = () => {
  if (petName.value === '') {
    const alertModal = document.createElement('div');
    alertModal.classList.add('alert-modal');
    
    const alertHeading = document.createElement('h2');
    alertHeading.textContent = '이름을 입력해주세요!';
    alertModal.appendChild(alertHeading);
    
    const closeButton = document.createElement('button');
    closeButton.textContent = '닫기';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(alertModal);
    });
    alertModal.appendChild(closeButton);
    
    document.body.appendChild(alertModal);
    
    return;
  }

  showModal2.value = false;
  // No navigation needed, stay on the current page
};


    const selectCharacterType = (type) => {
      characterType.value = type;
      selectedMenu.value = "";
      if (type === "people" || type === "pet") {
        showCompleteButton.value = true; // Show the complete button when people or pet button is clicked
      } else {
        showCompleteButton.value = false; // Hide the complete button for other character types
      }
    };

    const setFaceType = (type) => {
      if (characterType.value === "people") {
        selectedFaceType.value = type;
        selectedPeopleFaceType.value = type;
      }
    };

    const setHairType = (type) => {
      if (characterType.value === "people") {
        selectedHairType.value = type;
        selectedPeopleHairType.value = type;
      }
    };

    const setClothesType = (type) => {
      if (characterType.value === "people") {
        selectedClothesType.value = type;
        selectedPeopleClothesType.value = type;
      }
    };

    const setStyleType = (type) => {
      if (characterType.value === "people") {
        selectedStyleType.value = type;
        selectedPeopleStyleType.value = type;
      }
    };

    const setDogType = (type) => {
      if (characterType.value === "pet") {
        selectedDogType.value = type;
        selectedPetDogType.value = type;
      }
    };
    
    const validateAndShowModal = () => {
  if (characterType.value === "people") {
    if (
      selectedHairType.value === "" ||
      selectedFaceType.value === "" ||
      selectedClothesType.value === ""
    ) {
      showValidationModal("헤어, 얼굴, 옷을\n선택해주세요!");
      return;
    }
  } else if (characterType.value === "pet") {
    if (selectedDogType.value === "") {
      showValidationModal("펫을 선택해주세요!");
      return;
    }
  }

  showModal.value = true;
};

const showValidationModal = (message) => {
  const validationModal = document.createElement("div");
  validationModal.classList.add("validate-modal");

  const validationHeading = document.createElement("h2");
  validationHeading.innerHTML = message.replace(/\n/g, "<br/>"); // Replace newline characters with HTML line breaks
  validationModal.appendChild(validationHeading);

  const closeButton = document.createElement("button");
  closeButton.textContent = "닫기";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(validationModal);
  });
  validationModal.appendChild(closeButton);

  document.body.appendChild(validationModal);
};

    const confirmSettings = () => {
      showModal.value = false;
      showOutButton.value = false;
      router.push("/mainpage"); // Navigate to the main page
    };

    return {
      showModal,
      characterType,
      confirmSettings,
      router,
      showOutButton,
      showPeopleButton,
      showPetButton,
      confirmPetNo,
      selectedMenu,
      selectedHairType,
      selectedFaceType,
      selectedClothesType,
      selectedStyleType,
      selectedDogType,
      selectCharacterType,
      setFaceType,
      setHairType,
      setClothesType,
      setStyleType,
      setDogType,
      validateAndShowModal,
      selectedPeopleHairType,
      selectedPeopleFaceType,
      selectedPeopleClothesType,
      selectedPeopleStyleType,
      selectedPetDogType,
      showCompleteButton,
      showModal1,
      showModal2,
      petName,
      confirmPetYes,
      confirmPetName,
    };
  },
};
</script>



<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@500&display=swap');

  .hair-images-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 10%;
  }

  .hair-image {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: white;
    border: 2px solid black;
  }

  .hair-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

.menu-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50vh;
  background-color: #f3f3f3;
  position: relative;
  border-top: 1px solid black;
  font-family: 'IBM Plex Sans KR', sans-serif;
}

.menu-bar-origin {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6vh;
  background-color: #d9b3b9;
  border-bottom: 2px solid black;
  position: absolute; /* 추가 */
  top: 0; /* 추가 */
  left: 0; 
  border-top: 1px solid black;
}

.menu-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6vh;
  background-color: #d9b3b9;
  border-bottom: 2px solid black;
  position: absolute; /* 추가 */
  top: 0; /* 추가 */
  left: 0; 
  border-top: 1px solid black;
}

.menu-bar2 {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #d9b3b9;
  border-bottom: 2px solid black;
  position: absolute; /* 추가 */
  top: 0; /* 추가 */
  left: 0; 
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 90%x;
  margin: 0 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background-color: #d9b3b9;
  border-radius: 5px;
}

.menu:hover {
  background-color: #b07d7d;
}

.sub-box {
  width: 100%;
  height: 100%;
  padding: 29px;
  box-sizing: border-box;
  background-color: #f3f3f3;
  overflow-y: auto;
}

.complete-button {
  position: absolute;
  width: 70px;
  height: 70px;
  right: 2vh;
  top: 36.5vh;
  border-radius: 50%;
  background-color: #fbd269;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  font-family: 'IBM Plex Sans KR', sans-serif;
}

.complete-button:hover {
  transform: scale(1.1);
}
  
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96vh;
  height: 5vh;
  overflow: hidden;
  margin: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: #dfdfdf;
  border-radius: 40px;
}

.button:hover {
  transform: scale(1.1);
}

.button img {
  width: 3vh;
  height: 50%;
}

.bottom-box {
  display: flex;
  justify-content: center;
  height : 43.7vh;
  width: 100%;
  background-color: #ffffff;
}

.border-box {
  width: 100%;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
    background-color: rgb(226, 226, 226);
    padding: 30px;
    border-radius: 5px;
    width: 30vh;
    height: 7vh;
    display: flex;
    font-family: 'IBM Plex Sans KR', sans-serif;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.button-container button {
    margin-top: -1vh;
    width: 13vh;
    height: 3vh;
    background-color: rgb(226, 226, 226);
    border: 1px solid black;
    border-radius: 13px;
    margin-right: 10px;
    cursor: pointer;
    font-family: 'IBM Plex Sans KR', sans-serif;
}

.textbx {
  margin-top: 10px;
  padding: 5px;
  width: 80%;
  border-radius: 5px;
  border: 1px solid black;
  font-family: 'IBM Plex Sans KR', sans-serif;
  justify-content: center;
}

.face-images-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 10%;
  }

  .face-image {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: white;
    border: 2px solid black;
  }

  .face-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .clothes-images-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 10%;
  }

  .clothes-image {
    width: 100%;
    height: 90%;
    text-align: center;
    background-color: white;
    border: 2px solid black;
  }

  .clothes-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .style-images-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 10%;
  }

  .style-image {
    width: 100%;
    height: 90%;
    text-align: center;
    background-color: white;
    border: 2px solid black;
  }

  .style-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dog-images-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 10%;
  }

  .dog-image {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: white;
    border: 2px solid black;
  }

  .dog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .alert-modal,
.validate-modal {
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

.alert-modal h2,
.validate-modal h2 {
  font-family: 'IBM Plex Sans KR', sans-serif;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.6vh;
}

.alert-modal button,
.validate-modal button {
  font-family: 'IBM Plex Sans KR', sans-serif;
  display: block;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 8px;
  width: 4vh;
  height: 2vh;
  background-color: white;
  font-size: 0.5vh;
}
</style>
