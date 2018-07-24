<template>
<article class="main">
  <section class="horizonal-slide">
    <h2>熱門影集</h2>
    <div class="poster-gallery">
      <div class="nav-to-left">左</div>
      <VuePerfectScrollbar class="carousel-list">
        <div v-for="(obj, key) in seriesData" :key="key" class="poster-block">
          <div><img :src="'https://image.tmdb.org/t/p/w185/' + obj.poster_path"></div>
          <div class="mov-title">{{ obj.title }}</div>
        </div>
      </VuePerfectScrollbar>
      <div class="nav-to-right">右</div>
    </div>
  </section>
  <section class="horizonal-slide">
    <h2>熱門電影</h2>
    <div class="poster-gallery">
      <div class="nav-to-left">左</div>
      <VuePerfectScrollbar class="carousel-list">
        <div v-for="(obj, key) in seriesData" :key="key" class="poster-block">
          <div><img :src="'https://image.tmdb.org/t/p/w185/' + obj.poster_path"></div>
          <div class="mov-title">{{ obj.title }}</div>
        </div>
      </VuePerfectScrollbar>
      <div class="nav-to-right">右</div>
    </div>
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
        params: { page: 1, limit: 10, sort_by: 'popularity.desc'}
      })
      .then(function (resp) {
        let _data = resp.data;
        _.forEach(_data.results, function(val, key) {
          let sData = vm.SDATA(val);
          vm.$set(vm.seriesData, key, sData);
        });
      });
    }
  }
}
</script>

<style lang="scss">
@import '~sass-rem';
@import '@/assets/scss/_variables.scss';
.horizonal-slide {
  h2 {
    font-size: rem(30px);
    margin: rem(24px) 13% rem(20px);
  }
}
.poster-gallery {
  overflow-x: hidden;
  white-space: nowrap;
  background: rgba(233, 233, 233, 0.3);
  padding: 0 50px;
  position: relative;

  [class*="nav-to-"] {
    width: 110px;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: 1;
    font-size: rem(86px);
    
    &:before {
      content: "";
      height: 100%;
      vertical-align: middle;
      display: inline-block;
    }
  }
  .nav-to-left {
    left: 0;
    text-align: right;
  }
  .nav-to-right {
    right: 0;
  }
  .poster-block {
    $p-width: 185px;
    width: $p-width + 2px;
    margin: rem(12px) rem(16px);
    border: 1px solid $white;
    display: inline-block;

    img {
      width: $p-width;
      height: $p-width * 1.48;
    }
    .mov-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: rem(18px);
      margin: 0 6px 6px;
    }
  }
}
</style>
