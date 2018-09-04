import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhTWLocale from './zh-TW';

Vue.use(VueI18n);

const messages = {
  'zh-TW': zhTWLocale
};

const i18n = new VueI18n({
  locale: 'zh-TW', // set locale
  messages
});

export default i18n;
