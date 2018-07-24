<template>
<article class="main">
  <section>
    <h2>熱門影集</h2>
    <div class="poster-gallery">
      <VuePerfectScrollbar>
        <div v-for="(item, key) in [1, 2, 3, 4]" :key="key" class="poster-block">
          <div>img</div>
          <div>{{ item }}</div>
        </div>
      </VuePerfectScrollbar>
    </div>
  </section>
  <section>
    <h2>熱門電影</h2>
    <div></div>
  </section>
</article>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  name: 'overview',
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      seriesData: {}
    };
  },
  created: function () {
    this.getData();
  },
  methods: {
    SDATA: function (info) {
      return {
        id: info.id,
        title: info.title,
        title_en: info.originalTitle,
        poster_path: info.posterPath,
        backdrop_path: info.backdropPath,
        popularity: info.popularity
      };
    },
    getData: function () {
      let vm = this;
      vm.$axios
      .get('https://howing.co/api/v1/movies', {
        params: { page: 1, limit: 6, sort_by: 'popularity.desc'}
      })
      .then(function (resp) {
        let _data = resp.data;
        _.forEach(_data.results, function(val, key) {
          let sData = vm.SDATA(val);
          vm.$set(vm.seriesData, key, sData);
          // console.log(val)
        });
        console.log(vm.seriesData);
      });
    }
  }
}
</script>

<style lang="scss">
@import '~sass-rem';
@import '@/assets/scss/_variables.scss';
.poster-gallery {
  background: rgba(233, 233, 233, 0.3);

  .poster-block {
    $p-width: 163px;
    width: $p-width;
    height: $p-width * 1.48;
    margin: rem(8px) rem(12px);
    border: 1px solid $white;
    display: inline-block;
  }
}
</style>
