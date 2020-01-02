<template>
  <v-app class="main-app">
    <main-bar
      v-on:displayDrawer="isDrawerVisible = !isDrawerVisible"
      v-bind:isDrawerDisplayed="isDrawerVisible"
    ></main-bar>
    <navigation-drawer
      v-bind:isDrawerDisplayed="isDrawerVisible"
    ></navigation-drawer>
    <v-content class="pa-0">
      <v-container
        fluid
        class="flex-column"
        v-bind:class="{ active: isDrawerVisible }"
      >
        <v-row>
          <v-col class="d-flex justify-center col-md-6">
            <v-img :src="require('../assets/images/bonfire.jpg')" />
          </v-col>
          <v-col class="d-flex justify-center col-md-6">
            <v-img :src="require('../assets/images/crossing2.jpg')" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center col-md-6">
            <v-img :src="require('../assets/images/sunset.jpeg')" />
          </v-col>
          <v-col class="d-flex justify-center col-md-6">
            <v-img :src="require('../assets/images/port.jpeg')" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center col-md-6">
            <v-img :src="require('../assets/images/venice.jpg')" />
          </v-col>
          <v-col class="d-flex justify-center col-md-6">
            <v-img :src="require('../assets/images/daraitan.jpeg')" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
@import "../styles/Home.scss";
</style>

<script>
import MainBar from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

export default {
  name: "Home",
  components: {
    MainBar,
    NavigationDrawer
  },
  data() {
    return {
      isDrawerVisible: false
    };
  }
};
</script>
