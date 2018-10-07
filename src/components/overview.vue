<template>
<article class="main flex">
  <VuePerfectScrollbar>
    <section class="horizonal-slide">
      <h2>熱門影集</h2>
      <swiper :options="swiperOption" class="poster-gallery">
        <swiper-slide v-for="(obj, key) in seriesData" :key="key" class="poster-block">
          <div class="image-box" @mouseenter="showHoverBox('seriesData', obj.id)" @mouseleave="hideHoverBox('seriesData', obj.id)">
            <img :src="'https://image.tmdb.org/t/p/w185/' + obj.poster_path">
            <div class="box-mask" v-show="obj.show">
              <div v-if="obj.overview">
                <div class="title">{{ obj.title }}</div>
                <div class="subtitle">subtitle</div>
                <div class="details">{{ obj.overview }}</div>
              </div>
              <div v-else>
                目前沒有相關資訊
              </div>
              <Button class="more" disabled><router-link :to="{name: 'movieInfo', query: {mid: obj.id}}">瀏覽更多</router-link></Button>
            </div>
          </div>
          <div class="mov-title">{{ obj.title }}</div>
          <score-bar></score-bar>
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </section>
    <section class="horizonal-slide">
      <h2>熱門電影</h2>
      <swiper :options="swiperOption" class="poster-gallery">
        <swiper-slide v-for="(obj, key) in movieData" :key="key" class="poster-block">
          <div class="image-box" @mouseenter="showHoverBox('movieData', obj.id)" @mouseleave="hideHoverBox('movieData', obj.id)">
            <img :src="'https://image.tmdb.org/t/p/w185/' + obj.poster_path">
            <div class="box-mask" v-show="obj.show">
              <div v-if="obj.overview">
                <div class="title">{{ obj.title }}</div>
                <div class="subtitle">subtitle</div>
                <div class="details">{{ obj.overview }}</div>
              </div>
              <div v-else>
                目前沒有相關資訊
              </div>
              <Button class="more"><router-link :to="{name: 'movieInfo', query: {mid: obj.id}}">瀏覽更多</router-link></Button>
            </div>
          </div>
          <div class="mov-title">{{ obj.title }}</div>
          <score-bar></score-bar>
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </section>
    <Footer></Footer>
  </VuePerfectScrollbar>
</article>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import scoreBar from './common/score-bar'
import Footer from './common/footer'

import 'swiper/dist/css/swiper.css'

const RANK_NUM = 10

export default {
  name: 'overview',
  components: {
    swiper,
    swiperSlide,
    VuePerfectScrollbar,
    scoreBar,
    Footer
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // loop: true,
        pagination: {
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      movieData: [],
      seriesData: []
    };
  },
  created: function () {
    let vm = this;

    vm.getData('seriesData', {page: 1, limit: RANK_NUM, sort_by: 'popularity.desc'});
    vm.getData('movieData', {page: 1, limit: RANK_NUM, sort_by: 'popularity.desc'});
  },
  computed: {
    RANK_NUM () {
      return RANK_NUM
    }
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
        popularity: info.popularity,
        overview: info.overview
      };
    },
    getData: function (targetType, p) {
      let vm = this;
      const typeMapping = {
        movieData: 'movies',
        seriesData: 'tv'
      };

      vm.$axios
      .get('https://howing.co/api/v1/' + typeMapping[targetType], {
        params: { page: p.page, limit: p.limit, sort_by: p.sort_by}
      })
      .then(function (resp) {
        let _data = resp.data;
        _.forEach(_data.results, function(val, key) {
          let sData = vm.SDATA(val);

          vm.$set(vm[targetType], key, sData);
          vm.$set(vm[targetType][key], 'show', false);
        });
      });
    },
    showHoverBox: function (dataType, id) {
      let vm = this;
      const index = _.findIndex(vm[dataType], { 'id': id })

      this.$set(vm[dataType][index], 'show', true);
    },
    hideHoverBox: function (dataType, id) {
      let vm = this;
      const index = _.findIndex(vm[dataType], { 'id': id })

      vm.$set(vm[dataType][index], 'show', false);
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
  background: rgba(233, 233, 233, 0.3);
  padding: 12px 10px;
  
  .poster-block {
    $p-width: 195px;
    $p-margin: 8px;
    width: $p-width + ($p-margin * 2);
    border-radius: 2px;
    background-color: rgba(221, 221, 221, 0.52);
    box-shadow: 0px 1px 10px rgba(255, 255, 255, 0.5);
    color: $darkBlue;

    .image-box {
      position: relative;
      margin: $p-margin $p-margin 0;
      color: $white;

      img {
        width: $p-width;
        height: $p-width * 1.48;
        display: block;
        margin: auto;
      }
      .box-mask {
        position: absolute;
        top: 0; bottom: 0;
        right: 0; left: 0;
        background: rgba(0, 0, 0, 0.68);
        text-align: center;
        display: flex;
        flex-direction: column;

        > div {
          height: calc(100% - 45px);
          width: 100%;
          position: absolute;
          overflow: hidden;
          padding: 3px 7px 0;

          .title {
            font-size: rem(18px);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: left;
          }
          .subtitle {
            text-align: left;
          }
          .details {
            white-space: normal;
            text-align: justify;
          }
        }
        button.more {
          color: $black;
          font-size: rem(14px);
          background-color: #d2b706;
          border: none;
          position: absolute;
          bottom: 6px;
          left: 0; right: 0;
          margin: 0 auto;
          width: 86px;
        }
      }
    }
    .mov-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: rem(18px);
      margin: 0 8px 6px;
      font-weight: 600;
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
