<template>
  <div class="account-box">
    <div class="btn-like"><router-link to="/index">登入</router-link></div>
    <div class="btn-like"><router-link to="/index">註冊</router-link></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
@import '~sass-rem';
@import '@/assets/scss/_variables.scss';
.account-box {
  margin: auto 25px;

  .btn-like {
    display: inline-block;
    margin: auto 24px;
    font-size: rem(20px);
  }
}
</style>
