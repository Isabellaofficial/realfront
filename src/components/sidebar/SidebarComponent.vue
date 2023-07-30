<template>
    <div class="sidebar" :style="{ width : sidebarWidth, height: sidebarHeight }">
      <!-- 산책동행신청 모달창 -->
      <div class="black-bg" v-if="openModal == true">
          <div class="white-bg">
              <h2>[효진]님을 동행자에</h2>
              <h2>추가하시겠습니까?</h2>
              <button class="send" @click="openModal = false">추가</button>
              <button class="close" @click="openModal = false ">취소</button>
          </div>
      </div>
      
      <span v-if="collapsed" />
      <!-- 사이드 열리면 띄워줄 거 -->
      <span v-else class="white">
          <div class="walkingwith">
              <div class="friend0">
                  <img src="../../assets/people/Preview10.png">
                  <p style="font-size: 2vh; font-family: 'IBM Plex Sans KR', sans-serif;">조나희</p>
              </div>
          </div>
          <div class="pink">
              <h2 style="display: inline;">Add a Companion</h2>
          </div>
          <div class="sidefriendlist">
              <div class="friend1">
                  <i class="fa-regular fa-user fa-2xl fa-pull-left"></i>
                  <p>문효진</p>
                  <button type="button" id="sendwith" @click="openModal = true">+</button>
                  
              </div>
              <div class="friend2">
                  <i class="fa-regular fa-user fa-2xl fa-pull-left"></i>
                  <p>김유진</p>
                  <button type="button" id="sendwith" @click="openModal = true">+</button>
  
              </div>
          </div>
      </span>
      <span 
      class="collapse-icon"
      :class="{ 'rotate-45': collapsed }"
      @click="toggleSidebar"
  >
      <i class="fa-regular fa-circle-xmark fa-2xl transparent-background"></i>
  </span>
    </div>
  </template>
  
  <script>
  import { collapsed, toggleSidebar, sidebarWidth, sidebarHeight } from './state';
  
  export default {
      props: {},
      setup() {
          return { collapsed, toggleSidebar, sidebarWidth, sidebarHeight }
      },
      data() {
          return {
              openModal : false,
          };
      },
      
  }
  </script>
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@500&display=swap');
  .transparent-background {
    background-color: transparent !important;
  }  
  .black-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
}

.white-bg {
  width: 36vh;
  background: white;
  border-radius: 8px;
  padding: 36px 0;
  font-size: 13px;
  text-align: center;
}

  
  .send, .close {
    margin: 18px 11px;
    border-radius: 20px;
    width: 13vh;
    height: 6vh;
    border: 4px solid lightgrey;
    font-size: 22px;
    font-weight: bold;
}
  
  .send:hover {
      color: white;
      transition: all 0.3s;
      background-color: #4ea24e;
  }
  
  .close:hover {
      color: white;
      transition: all 0.3s;
      background-color: #c55e5e;
  }
  
  .sidebar {
    width: 50%;
    float: right;
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s ease;
    display: flex;
    justify-content: flex-end;
  }
  
  .collapse-icon {
      position: absolute;
      top: 0;
      padding:30px;
      transition: 0.2s linear;
  }
  .rotate-45 {
      transform: rotate(45deg);
      transition: 0.2s linear;
  }
  
  .walkingwith {
      background-color: lightgrey;
      height: 20vh;
      padding: 5vh;
  }
  .walkingwith img {
      width: 10vh;  
      padding-top: 3vh;  
  }
  
  .pink {
      height: 8vh;
      background-color: rgb(248, 215, 220);
      text-align: center;
      padding-top: 5vh;
      font-family: 'IBM Plex Sans KR', sans-serif;
  }
  .pink h2 {
      font-size: 2.5vh;
  }
  
  .sidefriendlist {
    background-color: white;
    height: 100%;
    top: 60vh;
  }

  .sidefriendlist div {
    margin: 5vh 5vh;
    height: 87px;
    margin-bottom: 5vh;
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    background-color: white;
    margin-left: 5vh;
}
  .sidefriendlist p {
      font-size: 4vh;
      display: inline;
      font-family: 'IBM Plex Sans KR', sans-serif;
  }
  
  .sidefriendlist button {
    text-align: right;
    float: right;
    border: 0px;
    border-radius: 50px;
    font-size: 50px;
    background-color: white;
    margin-left: 3vh
  }
  
  .white {
    background-color: white;
  }

  .svg-inline--fa.fa-pull-left {
    margin-right: var(--fa-pull-margin,2.2em);
    width: auto;
}

.friend2 {
    display: flex;
    align-items: center;
}

.friend1 img,
.friend2 img {
    width: 10vh;
    padding-top: 3vh;
}

.friend1 p,
.friend2 p {
    font-size: 2vh;
    font-family: 'IBM Plex Sans KR', sans-serif;
}

.friend1[data-v-d43e4cf8] {
  display: flex;
  align-items: center;
}

.friend1[data-v-d43e4cf8] i,
.friend1[data-v-d43e4cf8] button {
  display: flex;
  align-items: center;
}

  
  </style>