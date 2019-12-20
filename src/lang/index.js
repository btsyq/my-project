import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";
import elementEn from "element-ui/lib/locale/lang/en";
import elementZh from "element-ui/lib/locale/lang/zh-CN";
import enLocale from "./en";
import zhLocale from "./zh";

Vue.use(VueI18n); //引入语言国际化

const messages = {
  en: {
    ...enLocale,
    ...elementEn
  },
  zh: {
    ...zhLocale,
    ...elementZh
  }
};
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: Cookies.get("language") || "zh", // set locale
  messages
});

export default i18n;
