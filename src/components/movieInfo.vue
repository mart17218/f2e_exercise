<template>
  <article class="main flex">
    <Row style="width: 100%;">
      <Col span="12" offset="6">
        <VuePerfectScrollbar>
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
              照片 評分 等等
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
        </VuePerfectScrollbar>
      </Col>
    </Row>
  </article>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  name: 'movieInfo',
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      movie: {
        id: this.$route.query.mid,
        name: '--',
        release_date: 'N/A',
        runtime: 0,
        director: 'N/A',
        description: 'N/A'
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