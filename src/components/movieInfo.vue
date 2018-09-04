<template>
  <article class="main flex">
    <VuePerfectScrollbar>
      <section></section>
    </VuePerfectScrollbar>
  </article>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  name: 'movieInfo',
  components: {
    VuePerfectScrollbar
  }
}
</script>