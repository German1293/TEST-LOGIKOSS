import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are usi
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {

    icons: {
      iconfont: 'md', // default - only for display purposes
    },
    themes: {
      light: {
        primary: "#0f0f0f",
        secondary: "#ece323",//#0f0f0f
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
