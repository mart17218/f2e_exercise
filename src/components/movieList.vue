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
      <div v-for="(item, key) in dataList" class="movie-card" :key="key">
        <div class="title">{{ item.title }}</div>
        <div>
          <score-bar></score-bar>
        </div>
        <div>
          <p>導演：</p>
          <p>主演：</p>
        </div>
        <div>介紹</div>
        <div>
          <Button>瀏覽更多</Button>
        </div>
      </div>
    </div>
  </article>
  </VuePerfectScrollbar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import scoreBar from './common/score-bar';

export default {
  name: 'movieList',
  components: {
    VuePerfectScrollbar,
    scoreBar
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
    .get('https://howing.co/api/v1/movies', {
      params: { page: 1, limit: 4, sort_by: 'popularity.desc'}
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
  width: 90vw;
}
.search-block {
  width: 100%;
  height: 32px;
  margin: 24px 0;
}
.movie-card {
  color: #000;
  width: 46%;
  margin: 20px 2%;
  border-radius: 3px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.6);
  .title {
    font-size: 24px;
  }
}
</style>
