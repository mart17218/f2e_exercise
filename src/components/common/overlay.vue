<template>
  <div class="overlay"></div>
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
.overlay {
  position: absolute;
  top: 120px; bottom: 0;
  left: 0; right: 0;
  z-index: 10;
  background: rgba(57, 63, 68, 0.65);
}
</style>
