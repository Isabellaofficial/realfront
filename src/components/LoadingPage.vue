<template>
  <div class="Loading" @click="redirectToOtherRoute">
    <img class="logo-image" src="../assets/home.png" alt="로고 이미지" />
    <div class="loadingtitle">Walkoo</div>
  </div>
</template>

<script>
export default {
  name: 'LoadingPage',
  methods: {
    redirectToOtherRoute() {
      this.$router.push('/StartPage')
    }
  }
}
</script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dongle&display=swap');
  .Loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 100vh;
    margin: 0 auto;
    background-color: #D9B3B9;
    
  }

  .loadingtitle {
  position: absolute; /* 부모 요소를 기준으로 절대 위치에 배치하기 위해 position 속성을 absolute로 지정합니다. */
  font-size: 7vh;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 1px #000; /* 텍스트 그림자 추가 */
  font-family: 'Permanent Marker', cursive;
}

.logo-image {
    width: 44px;
    height: 50px;
    margin-top: -10vh;
    margin-left: -22vh;
}
  
  body {
    overflow: hidden;
  }
  </style>