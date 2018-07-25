<template>
  <div class="mobile-menu">
    <div v-for="(item, key) in menuData" :key="key">
      <router-link to="/index">{{ item.name }}</router-link>
    </div>
    <hr>
    <div>
      <router-link to="/index">登入</router-link>
    </div>
    <div>
      <router-link to="/index">註冊</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['menuData']
  }
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '@/assets/scss/_variables.scss';
.mobile-menu {
  top: 120px;
  font-size: rem(28px);
  padding: rem(10px 36px);
  background-color: $darkBlue;
  border-radius: 2px;
  position: absolute;
  z-index: 11;

  > div {
    margin: 8px auto;
  }
}
</style>
