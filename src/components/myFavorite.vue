<template>
  <div class="main-content">
    <VuePerfectScrollbar>
      <div class="flex-start-block">
        <Card :bordered="false" v-for="(item, idx) in movieCards" :key="idx" class="info-card">
          <div class="post-box">
            <img :src="item.img_src" class="pointer" @click="showDetails">
            <div class="score-box">{{ item.score }}</div>
          </div>
          <div>
            <div class="card-title">{{ item.name }}</div>
            <div class="card-subtitle">{{ item.director }}</div>
          </div>
        </Card>
      </div>
    </VuePerfectScrollbar>
    <Modal
      v-model="infoModal"
      title="">
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
export default {
  name: 'myFavorite',
  components: {
    VuePerfectScrollbar
  },
  data () {
    return {
      infoModal: false,
      movieCards: {}
    }
  },
  created () {},
  mounted() {
    let vm = this;
    let _data = [
      {id: 'm1', name: 'The Greatest Showman', director: 'Michael Gracey', score: 9.8, poster: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/4b/f24a35e9bf4306ffd54a4e75e228586a_500x735.jpg?t=1519020212'}
    ];

    vm.$emit('returnCurrPath', vm.returnCurrPath);
    _.forEach(_data, function (val, key) {
      let card = vm.MOVIE_CARD(val);
      vm.$set(vm.movieCards, key, card);
    });
  },
  computed: {
    returnCurrPath: function () {
      return this.$route.path
    }
  },
  methods: {
    MOVIE_CARD: function (m) {
      return {
        id: m.id,
        name: m.name,
        director: m.director,
        score: m.score,
        img_src: m.poster
      }
    },
    showDetails: function () {
      let vm = this;
      vm.infoModal = true;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '~sass-rem';
.flex-start-block {
  display: block;
  .info-card {
    $card-margin-h: rem(20px);
    $card-margin-v: rem(18px);
    $card-num-per-row: 4;
    width: calc((100% - (#{$card-margin-h} * 8)) / #{$card-num-per-row});
    min-width: 220px;
    height: 430px;
    margin: $card-margin-v $card-margin-h;
    background-color: transparent;
    border-radius: 2px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: flex-start;

    .card-title {
      margin-left: 5%;
      font-size: rem(28px);
      line-height: 36px;
    }
    .card-subtitle {
      margin-left: 5%;
      font-size: rem(22px);
      opacity: 0.72;
    }
    .post-box {
      width: 100%;
      text-align: center;
      overflow: hidden;
      position: relative;

      img {
        width: 84%;
        height: auto;
        margin-top: 5%;
        box-shadow:  0px 6px 23px 0px rgba(0,0,0,0.75);
      }
      .score-box {
        width: 36px;
        height: 36px;
        bottom: 10%;
        right: calc(8% - 18px);
        position: absolute;
        text-align: center;
        line-height: 36px;
        border-radius: 50%;
        color: $white;
        background-color: $orange;
        box-shadow: 0 6px 15px 0 $black, inset 0 -5px 10px 0 #c77802;
      }
    }
  }
}
</style>