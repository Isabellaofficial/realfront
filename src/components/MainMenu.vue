<template>
  <div class="menu-container" v-if="showMenu">
    <router-link
      v-for="(menu, index) in menus"
      :key="index"
      :to="menu.path"
      class="menu-item"
      :class="{ active: activeMenu === index }"
    >
      <img
        :src="require(`../assets/menuicon/${menu.image}`)"
        class="menu-image"
      />
      <div class="menu-text">{{ menu.text }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    showMenu() {
      return this.$route.meta.showMenu !== false;
    },
  },

  data() {
    return {
      menus: [
        {
          image: "ranking.png",
          text: "랭킹",
          path: "/Ranking",
        },
        {
          image: "friendlist.png",
          text: "친구",
          path: "/FriendList",
        },
        {
          image: "mainpage.png",
          text: "홈",
          path: "/MainPage",
        },
        {
          image: "store.png",
          text: "상점",
          path: "/Store",
        },
        {
          image: "mypage.png",
          text: "MY",
          path: "/MyPage",
        },
      ],
      activeMenu: 0,
    };
  },
  mounted() {
    this.activeMenu = this.menus.findIndex(
      (menu) => menu.path === this.$route.path
    );
  },
  watch: {
    $route(to) {
      this.activeMenu = this.menus.findIndex((menu) => menu.path === to.path);
    },
  },
};
</script>

<style>
.menu-container {
  position: fixed;
  width: 100vw;
  bottom: 0;
  z-index: 100;
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px -2px 15px rgb(180, 180, 180); /* Add shadow effect */
}

.menu-item {
  width: 20vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  box-sizing: border-box;
}

.menu-item.active {
  background-color: #f1f1f1;
}

.menu-image {
  position: relative;
  width: auto;
  height: 35%;
}

.menu-text {
  margin-top: 1vw;
  color: #5d5d5d; /* 글씨 색상 추가 */
  font-weight: bold; /* 글씨 두껍게 설정 */
}


@media (min-width: 1024px) {
.menu-container {
  width: 750px;
}
}
</style>