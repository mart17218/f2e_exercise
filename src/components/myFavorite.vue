<template>
  <div class="main-content">
    <VuePerfectScrollbar>
      <div>
        <Card :bordered="false" v-for="(item, idx) in movieCards" :key="idx" class="favorite-card" style="display: inline-block;">
          <div class="poster-box float-left">
            <img :src="item.img_src" class="">
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
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '~sass-rem';
.favorite-card {
  // background-color: transparent;
  .poster-box {
    img {
      $p-width: 400px;
      width: $p-width;
      height: $p-width * 1.48;
    }
  }
}
</style>