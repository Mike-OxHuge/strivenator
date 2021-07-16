<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  beforeMount: function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      (this.$vuetify.theme.dark = true),
        console.log(
          `The dark theme is set to ${this.$vuetify.theme.dark} by default, because my dear visitor prefers dark color scheme :)`
        );
    } else {
      (this.$vuetify.theme.dark = false),
        console.log(
          `The light theme is set to ${this.$vuetify.theme.light} by default, because my dear visitor prefers light color scheme :)`
        );
    }
  },

  data: () => ({
    //
  }),
};
</script>
