<template>
  <section>
    <h2 class="page-title">
      <span>{{ pageTitle }}</span>
      <div class="float-right"><search-bar></search-bar></div>
    </h2>
    <router-view @returnCurrPath="returnCPath"></router-view>
  </section>
</template>

<script>
import searchBar from '@/components/common/search-bar';
export default {
  name: 'mainNav',
  components: {
    searchBar
  },
  data () {
    return {
      pageTitle: ''
    }
  },
  created () {},
  mounted() {},
  computed: {},
  methods: {
    returnCPath: function (path) {
      let vm = this;

      if (path == '/index/favorite') {
        vm.pageTitle = 'Favorite';  
      }
      else if (path == '/index/popular') {
        vm.pageTitle = 'Popular Now';  
      }
    }
  }
}
</script>