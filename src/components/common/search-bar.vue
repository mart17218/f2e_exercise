<template>
  <div class="search-bar">
    <input placeholder="search">
    <button class="submit"><i class="icomoon-ic-search"></i></button>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
  }
</script>

<style lang="scss">
  @import '~sass-rem';
  @import '@/assets/scss/_variables.scss';
  .search-bar {
    input {
      padding-left: 2.6rem;
      line-height: 1.8;
    }
  }
  button {
    &.submit {
      height: 26px;
      width: 26px;
      border-radius: 50%;
      color: $white;
      background: $midGreen;
      background-image: linear-gradient(-180deg, #69d5b3 7%, $midGreen 100%);
      background-position: center center;
      background-repeat: no-repeat;
      box-shadow: 0 6px 15px 0 $black, inset 0 -5px 10px 0 #2A8265;
    }
  }
</style>