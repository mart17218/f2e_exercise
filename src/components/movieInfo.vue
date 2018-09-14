<template>
  <article class="main flex">
    <VuePerfectScrollbar>
      <Row style="width: 100%;">
        <Col
          :xs="{span: 22, offset: 1}"
          :sm="{span: 12, offset: 6}"
          :lg="{span: 12, offset: 6}"
        >
          <section>
            <header class="movie-details">
              <span class="title">{{ movie.name }}</span>
              <span class="date">{{ movie.release_date }}</span>
            </header>
            <div>
              <p>片長： {{ movie.runtime }}{{ $t('minute') }}</p>
              <p>導演： {{ movie.director }}</p>
            </div>
            <div style="margin: 20px 0;">
              {{ movie.description }}
            </div>
          </section>
          <section class="flex">
            <aside class="float-left fixed">
              <img :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path">
              分數 觀看 收藏
              <score-bar></score-bar>
              評論
            </aside>
            <div class="float-left stretch" style="margin-left: 36px;">
              <div>
                <Tabs>
                  <TabPane label="演員"></TabPane>
                  <TabPane label="劇組" disabled></TabPane>
                  <TabPane label="類型" disabled></TabPane>
                </Tabs>
              </div>
              <div>
                <Tabs>
                  <TabPane label="熱門評論"></TabPane>
                  <TabPane label="近期評論"></TabPane>
                </Tabs>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </VuePerfectScrollbar>
  </article>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import scoreBar from './common/score-bar';

export default {
  name: 'movieInfo',
  components: {
    VuePerfectScrollbar,
    scoreBar
  },
  data() {
    return {
      movie: {
        id: this.$route.query.mid,
        name: '--',
        release_date: 'N/A',
        runtime: 0,
        director: 'N/A',
        description: 'N/A',
        poster_path: ''
      }
    }
  },
  created: function () {
    let vm = this

    vm.$axios
      .get('https://howing.co/api/v1/movies/' + vm.movie.id)
      .then(function (resp) {
        let _data = resp.data

        vm.movie.name = _data.title
        vm.movie.release_date = vm.$moment(_data.releaseDate).format('YYYY/MM')
        vm.movie.description = _data.overview
        vm.movie.poster_path = _data.posterPath
      }
    )
  }
}
</script>

<style lang="scss" scoped>
.movie-details {
  .title {
    font-size: 24px;
  }
  .date {
    font-size: 14px;
    margin-left: 10px;
  }
  &:before {
    content: '';
    height: 100%;
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
}
</style>