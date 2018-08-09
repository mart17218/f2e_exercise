<template>
  <div class="view-box flex flex-vertical">
    <header class="gray">
      <div class="ic-m-menu" @click="toggleMobileMenu()">M</div>
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
    <mobile-menu v-show="isActive.mMenu" :menuData="topMenu"></mobile-menu>
    <overlay v-show="isActive.mMenu"></overlay>
    <router-view></router-view>
    <footer class="about-us">
      <div>
        <div>
          <Button type="text">關於我們</Button><Button type="text">連絡我們</Button><Button type="text">隱私權政策</Button>
        </div>
        <div>
          <Button type="text">Copyright</Button><Button type="text">資料取用自TMDB</Button>
        </div>
      </div>
    </footer>
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
        0: {name: '發掘'}, 1: {name: '電影'}, 2: {name: '電視影集'}, 3: {name: '演員'}
      },
      isActive: {
        mMenu: false
      }
    }
  },
  created: function() {},
  methods: {
    toggleMobileMenu: function () {
      let vm = this;
      vm.isActive.mMenu = !vm.isActive.mMenu;
    }
  }
}
</script>
