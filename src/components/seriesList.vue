<template>
  <VuePerfectScrollbar>
  <article class="main flex flex-content__start">
    <div class="item-list">
      <Row type="flex" justify="space-around" class="search-block">
        <Select v-model="search.year" placeholder="年份" style="width:120px">
          <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
        </Select>
        <Select v-model="search.type" placeholder="類型" style="width:120px">
          <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
        </Select>
        <Select v-model="search.sortType" placeholder="排序" style="width:120px">
          <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
        </Select>
        <Input v-model="search.keywords" placeholder="請輸入關鍵字" style="width:200px"></Input>
        <Button>送出</Button>
      </Row>
      <div 
        v-for="(item, key) in dataList"
        class="movie-card"
        :key="key"
      >
        <movie-card
          :title="item.title"
          :overview="item.overview"
          :path="item.poster_path"
        >
        </movie-card>
      </div>
    </div>
  </article>
  <Footer></Footer>
  </VuePerfectScrollbar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import scoreBar from './common/score-bar';
import movieCard from './common/movieCard';
import Footer from './common/footer';

export default {
  name: 'movieList',
  components: {
    VuePerfectScrollbar,
    scoreBar,
    Footer,
    movieCard
  },
  data() {
    return {
      search: {
        year: '',
        type: '',
        sortType: '',
        keywords: ''
      },
      dataList: []
    }
  },
  created: function () {
    let vm = this
    // data for test
    vm.$axios
    .get('https://howing.co/api/v1/tv', {
      params: { page: 1, limit: 10, sort_by: 'popularity.desc'}
    })
    .then(function (resp) {
      let _data = resp.data

      _.forEach(_data.results, function(val, key) {
        let sData = vm.SDATA(val);

        vm.$set(vm.dataList, key, sData);
      });
    })
  },
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '@/assets/scss/_variables.scss';

.item-list {
  width: 70vw;
}
.search-block {
  width: 100%;
  height: 32px;
  margin: 24px 0;
}
</style>
