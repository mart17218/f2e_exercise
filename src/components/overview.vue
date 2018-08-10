<template>
<article class="main flex">
  <VuePerfectScrollbar>
    <section class="horizonal-slide">
      <h2>熱門影集</h2>
      <div class="poster-gallery">
        <div class="pointer nav-to-left" @click="shift2('left')"><i class="icomoon-arrow-left2"></i></div>
        <VuePerfectScrollbar ref="scroll1" class="carousel-list">
          <div v-for="(obj, key) in seriesData" :key="key" @mouseenter="showHoverBox(obj.id)" @mouseleave="hideHoverBox(obj.id)" class="poster-block">
            <div><img :src="'https://image.tmdb.org/t/p/w185/' + obj.poster_path"></div>
            <div class="mov-title">{{ obj.title }}</div>
            <div class="rank-block">
              <i class="icomoon-ic-smile"></i>
              <div class="progbar-container">
                <div class="rank-percentage"><span>0%</span><span class="float-right">0%</span></div>
                <Progress :percent="0" :stroke-width="6" hide-info/>
                <div class="rank-comment">目前尚未有人評分</div>
              </div>
              <i class="icomoon-ic-sad"></i>
            </div>
            <div class="block-mask" v-show="obj.show">
              <div v-if="obj.overview">
                <div class="title">{{ obj.title }}</div>
                <div class="subtitle">subtitle</div>
                <div class="details">{{ obj.overview }}</div>
              </div>
              <div v-else>
                loading ...
              </div>
              <Button class="more">瀏覽更多</Button>
            </div>
          </div>
        </VuePerfectScrollbar>
        <div class="pointer nav-to-right" @click="shift2('right')"><i class="icomoon-arrow-right2"></i></div>
      </div>
    </section>
    <section class="horizonal-slide">
      <h2>熱門電影</h2>
      <div class="poster-gallery">
        <div class="pointer nav-to-left"><i class="icomoon-arrow-left2"></i></div>
        <VuePerfectScrollbar class="carousel-list">
          <div v-for="(obj, key) in movieData" :key="key" class="poster-block">
            <div><img :src="'https://image.tmdb.org/t/p/w185/' + obj.poster_path"></div>
            <div class="mov-title">{{ obj.title }}</div>
            <div class="rank-block">
              <i class="icomoon-ic-smile"></i>
              <div class="progbar-container">
                <div class="rank-percentage"><span>0%</span><span class="float-right">0%</span></div>
                <Progress :percent="0" :stroke-width="6" hide-info/>
                <div class="rank-comment">目前尚未有人評分</div>
              </div>
              <i class="icomoon-ic-sad"></i>
            </div>
          </div>
        </VuePerfectScrollbar>
        <div class="pointer nav-to-right"><i class="icomoon-arrow-right2"></i></div>
      </div>
    </section>
  </VuePerfectScrollbar>
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
      scrollHorizonDistance: 185,
      scrollbarPosition: {
        'scroll1': 0,
        'scroll2': 0
      },
      movieData: {},
      seriesData: {}
    };
  },
  created: function () {
    let vm = this;
    vm.getData('seriesData', {page: 1, limit: 10, sort_by: 'popularity.desc'});
    vm.getData('movieData', {page: 2, limit: 10, sort_by: 'popularity.desc'});
    
  },
  mounted () {},
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
    getData: function (targetData, p) {
      let vm = this;
      vm.$axios
      .get('https://howing.co/api/v1/movies', {
        params: { page: p.page, limit: p.limit, sort_by: p.sort_by}
      })
      .then(function (resp) {
        let _data = resp.data;
        _.forEach(_data.results, function(val, key) {
          let sData = vm.SDATA(val);
          vm.$set(vm[targetData], sData.id, sData);
          vm.$set(vm[targetData][sData.id], 'show', false);
        });
      });
    },
    shift2: function (direction) {
      // @TODO
      let vm = this;
      if (direction == 'left') {
        vm.$refs.scroll1.$el.scrollLeft = 0;
      }
      else if (direction == 'right') {
        vm.$refs.scroll1.$el.scrollLeft = vm.scrollHorizonDistance;
      }
    },
    showHoverBox: function (id) {
      let vm = this;
      // @TODO: add loading animation
      // @TODO: extends to movieData
      vm.$set(vm.seriesData[id], 'show', true);
      if(!vm.seriesData[id].overview) {
        vm.$axios
        .get('https://howing.co/api/v1/movies/' + id)
        .then(function (resp) {
          let _data = resp.data;
          
          vm.$set(vm.seriesData[id], 'overview', _data.overview);
        });
      }
    },
    hideHoverBox: function (id) {
      let vm = this;

      vm.$set(vm.seriesData[id], 'show', false);
    }
  }
}
</script>

<style lang="scss" scoped>
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
  padding: 0 10px;
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
    background: linear-gradient(to right, rgba(30, 40, 49, 1) 0%,rgba(30, 40, 49, 0.01) 100%);
  }
  .nav-to-right {
    right: 0;
    background: linear-gradient(to right, rgba(30, 40, 49, 0.01) 0%,rgba(30, 40, 49, 1) 100%);
  }
  .poster-block {
    $p-width: 195px;
    width: $p-width + 2px;
    margin: rem(12px) rem(16px);
    border: 1px solid $white;
    display: inline-block;
    position: relative;

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
  }
  .block-mask {
    position: absolute;
    top: 0; bottom: 0;
    right: 0; left: 0;
    background: rgba(0, 0, 0, 0.68);
    margin: -8px -10px;
    text-align: center;

    .details {
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .more {
      color: $black;
      font-size: rem(14px);
      background-color: #d2b706;
      border: none;
    }
  }
}
</style>

<style lang="scss">
.progbar-container {
  .ivu-progress {
    display: flex;
  }
}
</style>
