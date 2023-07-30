<template>
  <div id="Petrankpg">
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
        <h3 id="myRank">반려동물 랭킹</h3>
      </div>
      <div class="arrow-buttons-container">
        <!-- 왼쪽 화살표 버튼 -->
        <div @click="FriendRankPage" class="arrow-button left">
          &#60; 친구 랭킹
        </div>
        <!-- 오른쪽 화살표 버튼 -->
        <div @click="MyRankPage" class="arrow-button right">
          나의 랭킹 &#62;
        </div>
      </div>

      <div class="rank_margin">
        <div class="rank">
          <h3 class="top_10">TOP 10</h3>
          <div
            class="green-rank"
            v-for="(pet, index) in sortedPets.slice(0, 10)"
            :key="index"
          >
            <p v-if="index === 0" class="rank-icon">&#x1F947;</p>
            <p v-else-if="index === 1" class="rank-icon">&#x1F948;</p>
            <p v-else-if="index === 2" class="rank-icon">&#x1F949;</p>
            <div class="friend-container">
              <div class="profile">
                <img :src="pet.img" />
              </div>
              <div class="friend-info">
                <h3>{{ pet.name }}</h3>
                <p>LV.{{ pet.level }}</p>
                <p>산책 횟수 : {{ pet.number }}회</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="page-indicator">
      <span class="empty"></span>
      <span class="empty"></span>
      <span class="empty"></span>
      <span class="filled"></span>
    </div> -->
  </div>
</template>

<script>
import data from "../../assets/rankData.js";

export default {
  name: "petrankComponent",
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
    sortedPets() {
      // pets 배열을 level 값에 따라 내림차순으로 정렬하여 반환하는 새로운 배열을 생성
      const sortedArr = [...this.data[3].pets].sort(
        (a, b) => b.level - a.level
      );
      return sortedArr;
    },
  },
};
</script>

<style scoped>
#Petrankpg {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
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