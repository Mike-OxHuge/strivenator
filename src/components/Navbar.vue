<template>
  <v-container>
    <v-row>
      <v-col cols="2" class="ml-auto">
        <v-btn rounded text @click="toggleTheme">
          <span v-if="!this.$vuetify.theme.dark">
            <v-icon>dark_mode</v-icon>
          </span>
          <span v-else>
            <v-icon>light_mode</v-icon>
          </span>
        </v-btn>
      </v-col>

      <v-col cols="6" class="text-center">
        <h2>
          <a href="https://strive.school">Strive.school</a>
        </h2>
      </v-col>

      <v-col cols="2">
        <h2><router-link to="/about">User manual</router-link></h2>
      </v-col>

      <v-col cols="2">
        <h2><router-link to="/">Checker</router-link></h2>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="10">
        
      </v-col>
      <v-col cols="2">
       
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
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
</style>
