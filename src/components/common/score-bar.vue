<template>
  <div class="rank-block">
    <i class="icomoon-ic-smile"></i>
    <div class="progbar-container">
      <div class="rank-percentage"><span>0%</span><span class="float-right">0%</span></div>
      <Progress :percent="0" :stroke-width="6" hide-info/>
      <div class="rank-comment">目前尚未有人評分</div>
    </div>
    <i class="icomoon-ic-sad"></i>
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
.rank-block {
  font-size: rem(18px);
  display: flex;
  i {
    flex: 0;
    margin: auto 6px;
  }
  .progbar-container {
    flex: 1;
    display: inline-block;

    .rank-percentage {
      font-size: 14px;
    }
    .rank-comment {
      font-size: 14px;
      text-align: center;
      padding-bottom: 6px;
    }
  }
}
</style>
