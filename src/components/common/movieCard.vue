<template>
  <div>
    <div class="poster float-left flex fixed flex-content__center">
      <img :src="'https://image.tmdb.org/t/p/w185/' + path">
    </div>
    <div class="description float-left">
      <div class="title">{{ title }}</div>
      <p>2018/10</p>
      <div>
        <score-bar></score-bar>
      </div>
      <div>
        <p>導演：</p>
        <p>主演：</p>
      </div>
      <div class="overview">{{ overview }}</div>
      <div>
        <Button class="more">瀏覽更多</Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: [
      'overview',
      'title',
      'path'
      ]
  }
</script>

<style lang="scss">
@import '~sass-rem';
@import '@/assets/scss/_variables.scss';

.movie-card {
  color: #000;
  width: 46%;
  min-width: 420px;
  margin: 20px 2%;
  padding: 20px;
  border-radius: 3px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.6);
  .poster {
    margin-right: 20px;
  }
  .description {
    width: 190px;
    .title {
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .overview {
      height: 60px;
      overflow: hidden;
    }
    button.more {
      color: $black;
      font-size: rem(14px);
      background-color: #d2b706;
      border: none;
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
