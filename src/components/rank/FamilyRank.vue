<template>
  <div id="Familyrankingpg">
    <!-- top -->
    <div class="top">
      <div class="top_wrap">
        <div class="top_left"></div>
        <p class="top_center top_name">랭킹</p>
        <div class="top_right"></div>
      </div>
    </div>

    <div class="Rank_middle">
      <div class="myRank_wrap">
        <h3 id="myRank">가족 랭킹</h3>
      </div>
      <div class="arrow-buttons-container">
        <!-- 왼쪽 화살표 버튼 -->
        <div @click="MyRankPage" class="arrow-button left">&#60; 나의 랭킹</div>
        <!-- 오른쪽 화살표 버튼 -->
        <div @click="FriendRankPage" class="arrow-button right">
          친구 랭킹 &#62;
        </div>
      </div>

      <div class="rank_margin">
        <div class="rank">
          <div
            class="green-rank"
            v-for="(family, index) in sortedFamilys"
            :key="index"
          >
            <p v-if="index === 0" class="rank-icon">&#x1F947;</p>
            <p v-else-if="index === 1" class="rank-icon">&#x1F948;</p>
            <p v-else-if="index === 2" class="rank-icon">&#x1F949;</p>
            <div class="friend-container">
              <div class="profile">
                <img :src="family.img" />
              </div>
              <div class="friend-info">
                <h3>{{ family.name }}</h3>
                <p>총 {{ family.range }}KM 산책</p>
                <p>총 {{ family.time }}시간 산책</p>
                <p>동반 산책 : {{ family.mate }}회</p>
                <p>반려동물 산책 : {{ family.pet }}회</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="page-indicator">
      <span class="empty"></span>
      <span class="filled"></span>
      <span class="empty"></span>
      <span class="empty"></span>
    </div> -->
  </div>
</template>

<script>
import data from "../../assets/rankData.js";

export default {
  name: "familyrankComponent",
  data() {
    return {
      data: data,
    };
  },
  methods: {
    MyRankPage() {
      this.$router.push("/ranking");
    },
    FriendRankPage() {
      this.$router.push("/rank/friend");
    },
  },
  computed: {
    sortedFamilys() {
      // familys 배열을 range 값에 따라 내림차순으로 정렬하여 반환하는 새로운 배열을 생성
      const sortedArr = [...this.data[2].familys].sort(
        (a, b) => b.range - a.range
      );
      return sortedArr;
    },
  },
};
</script>

<style scoped>
#Familyrankingpg {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* scoped 속성을 사용하여 컴포넌트 내에서만 스타일이 적용되도록 설정 */
.green-rank {
  position: relative; /* 부모 요소에 대해 상대적인 위치 설정 */
  margin: 40px 15px;
}

.profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px 50px 10px 30px;
}
.rank-icon {
  position: absolute; /* 이미지에 대해 절대적인 위치 설정 */
  left: -10px;
  top: -65px;
  font-size: 50px;
  height: 100px; /* 이미지 크기 설정 */
  z-index: 1; /* 이미지를 다른 요소들 위로 렌더링하기 위한 z-index 설정 */
}
</style>