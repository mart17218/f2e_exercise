<template>
  <footer class="about-us">
    <div>
      <div>
        <Button type="text">
          <router-link to="/aboutUs">關於我們</router-link>
        </Button>
        <Button type="text">聯繫我們</Button>
        <Button type="text">隱私權政策</Button>
      </div>
      <div>
        <Button type="text">Copyright</Button>
        <Button type="text">資料取用自TMDB</Button>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '@/assets/scss/_variables.scss';

footer {
  &.about-us {
    height: 130px;
    padding-left: 20%;
    background-color: #090a0e;

    > div {
      height: 100%;
      display: inline-block;
      > div {
        height: 50%;
        button {
          color: $white;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>