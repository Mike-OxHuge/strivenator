import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, { iconfont: "md" });

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2196f3",
      },
      dark: {
        primary: "#41B883",
      },
    },
  },
});
export default vuetify;
