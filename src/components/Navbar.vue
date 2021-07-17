<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="">
        <v-btn rounded text @click="toggleTheme">
          <span v-if="!this.$vuetify.theme.dark">
            <v-icon>dark_mode</v-icon>
          </span>
          <span v-else>
            <v-icon>light_mode</v-icon>
          </span>
        </v-btn>
      </v-col>

      <v-col cols="3">
        <h2>
          <a href="https://strive.school">Strive.school</a>
        </h2>
      </v-col>

      <v-col cols="3" class="text-right ml-auto">
        <h5><router-link to="/about">UserManual</router-link></h5>
        <h5><router-link to="/">ExamChecker</router-link></h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  updated() {
    //
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.router-link-exact-active {
  text-decoration: underline;
  font-style: italic;
  font-weight: bolder;
}
</style>
