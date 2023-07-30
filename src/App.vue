<template>
  <div>
    <router-view />
    <p>
    </p>
    <Menu />
  </div>

</template>

<script>
// import Menu from "@/components/MainMenu.vue";

export default {
  name: 'App',
  components: {
    // Menu,
  },
}
</script>

<style>
body {
  padding:0; margin:0; -ms-user-select: none; -moz-user-select: none; -khtml-user-select: none; -webkit-user-select: none; user-select: none;
}

#app {
  margin:0 auto; min-height:100%; border-left:1px #D8D8D8 solid; border-right:1px #D8D8D8 solid; 
  position: relative; 
  text-align:center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Mobile First CSS */

/* default - 가로 해상도가 768px 이하*/
.elem {font-size:0.75rem}

/* 가로 해상도가 768px 이상*/
@media (min-width: 768px) {
  .elem {font-size:0.875rem}
}

/* 가로 해상도가 1024px 이상*/
@media (min-width: 1024px) {
  .elem {font-size:1rem}
  #app {width:750px}
}
</style>