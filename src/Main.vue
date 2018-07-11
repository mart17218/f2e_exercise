<template>
  <div class="view-box" id="index">
    <aside class="flex flex-vertical float-left">
      <div class="top-block">
        <div class="profile-photo float-left">
        </div>
        <span class="name">Guest</span>
      </div>
      <div class="main-block">
        <div v-for="(menu, idx) in asideMenu.main" :key="idx"><router-link :to="'/index/' + menu.path">{{ menu.name }}</router-link></div>
      </div>
      <div class="bottom-block">
        <div v-for="(menu, idx) in asideMenu.help" :key="idx"><router-link to="/index">{{ menu.name }}</router-link></div>
      </div>
    </aside>
    <article class="main-container">
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      asideMenu: {
        main: [{name: 'Favorite', path: 'collection'}, {name: 'Popular Now', path: 'popular'}],
        help: [{name: 'Contact Us'}]
      }
    }
  },
  created: function() {},
  methods: {}
}
</script>