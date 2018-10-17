<template>
  <div class="view-box flex flex-vertical">
    <header class="gray">
      <div class="ic-m-menu" @click="toggleMobileMenu()">
        <i class="icomoon-ic-menu"></i>
      </div>
      <div class="logo" @click="navTo('index')"></div>
      <div class="menu">
        <div v-for="(item, key) in topMenu" :key="key">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </div>
      </div>
      <div class="rside-box float-right">
        <search-bar></search-bar>
        <account-box></account-box>
      </div>
    </header>
    <mobile-menu v-show="isActive.mMenu" :menuData="topMenu"></mobile-menu>
    <overlay v-show="isActive.mMenu"></overlay>
    <router-view></router-view>
  </div>
</template>

<script>
import searchBar from '@/components/common/search-bar';
import accountBox from '@/components/common/account-box';
import mobileMenu from '@/components/common/m-main-menu';
import overlay from '@/components/common/overlay';
export default {
  name: 'Main',
  components: {
    searchBar,
    accountBox,
    mobileMenu,
    overlay
  },
  data() {
    return {
      topMenu: {
        0: {name: '發掘', path: '/index'},
        1: {name: '電影', path: '/movieList'},
        2: {name: '電視影集', path: '/seriesList'},
        3: {name: '演員', path: '/performer'}
      },
      isActive: {
        mMenu: false
      }
    }
  },
  created: function() {},
  methods: {
    navTo: function (path) {
      this.$router.push(path)
    },
    toggleMobileMenu: function () {
      let vm = this;
      vm.isActive.mMenu = !vm.isActive.mMenu;
    }
  }
}
</script>
