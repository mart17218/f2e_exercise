<template>
  <article class="main flex">
    <aside>
      <div>{{ title }}</div>
    </aside>
    <section>
      <VuePerfectScrollbar>
        <div class="description">
          {{ description }}
        </div>
      </VuePerfectScrollbar>
    </section>
  </article>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'aboutUs',
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      title: '關於我們',
      description: '《日日好影》是由五個喜歡看電影和電視劇的人所成立。我們一致覺得台灣缺乏了讓影迷、劇迷討論電影或電視劇劇情的網站，故希望能夠創立一個方便大家發聲討論、留下評論的網站，希望大家會喜歡，如有什麼想要與我們說的也可以透過「聯絡我們」聯繫我。'
    }
  },
  created: function () {
    let vm = this
  }
}
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '@/assets/scss/_variables.scss';

article {
  > aside {
    float: left;
    width: 500px;
    padding: 35px 40px 35px 50px;
    font-size: 28px;
  }
  > section {
    padding: 40px 80px 80px 32px;
    .description {
      font-size: 18px;
      line-height: 1.8;
      text-align: justify;
    }
  }
}
</style>
