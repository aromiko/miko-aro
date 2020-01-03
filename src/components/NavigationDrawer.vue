<template>
  <v-navigation-drawer
    app
    :value="drawerDisplayed"
    temporary
    width="100vw"
    right
    fixed
    light
    touchless
    stateless
  >
    <v-container fill-height>
      <v-row class="flex-column flex-sm-row">
        <v-col class="d-flex justify-center">
          <v-btn
            text
            icon
            class="pa-0 clickable"
            height="7em"
            width="7em"
            href="https://facebook.com/miko.aro"
            target="_blank"
          >
            <v-img
              src="../assets/facebook.svg"
              max-height="4em"
              max-width="4em"
            />
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-btn
            text
            icon
            class="pa-0 clickable"
            height="7em"
            width="7em"
            href="https://twitter.com/aromiko"
            target="_blank"
          >
            <v-img
              src="../assets/twitter.svg"
              max-height="4em"
              max-width="4em"
            />
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-btn
            text
            icon
            class="pa-0 clickable"
            height="7em"
            width="7em"
            href="https://www.instagram.com/mikoaro/"
            target="_blank"
          >
            <v-img
              src="../assets/instagram.svg"
              max-height="4em"
              max-width="4em"
            />
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-btn
            text
            icon
            class="pa-0 clickable"
            height="7em"
            width="7em"
            href="https://www.linkedin.com/in/mikoaro"
            target="_blank"
          >
            <v-img
              src="../assets/linkedin.svg"
              max-height="4em"
              max-width="4em"
            />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
@import "../styles/NavigationDrawer.scss";
</style>

<script>
import store from "../store";

export default {
  computed: {
    drawerDisplayed() {
      return store.state.drawerDisplayed;
    }
  }
};
</script>
