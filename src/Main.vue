<template>
  <div class="view-box flex flex-vertical">
    <header>
      <div class="logo">logo</div>
      <div class="menu">
        <div v-for="(item, key) in topMenu" :key="key">
          <router-link to="/index">{{ item.name }}</router-link>
        </div>
      </div>
      <div class="rside-box float-right">
        <search-bar></search-bar>
        <account-box></account-box>
      </div>
    </header>
    <router-view></router-view>
    <footer>關於我們</footer>
  </div>
</template>

<script>
import searchBar from '@/components/common/search-bar';
import accountBox from '@/components/common/account-box';
export default {
  name: 'Main',
  components: {
    searchBar,
    accountBox
  },
  data() {
    return {
      topMenu: {
        0: {name: '發掘'}, 1: {name: '電影'}, 2: {name: '電視影集'}, 3: {name: '演員'}
      }
    }
  },
  created: function() {},
  methods: {}
}
</script>