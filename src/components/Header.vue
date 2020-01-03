<template>
  <v-app-bar flat app class="header px-8 pt-4" :light="drawerDisplayed">
    <v-toolbar-title class="headline">
      <span>
        <h3>miko aro</h3>
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text icon class="pa-0 clickable" v-on:click="toggleNavDrawer()">
      <v-icon>{{ menuIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      menuIcon: "mdi-menu"
    };
  },
  methods: {
    toggleNavDrawer() {
      store.commit("toggleNavDrawer", store.state.drawerDisplayed);
      if (store.state.drawerDisplayed) {
        this.menuIcon = "mdi-close";
      } else {
        this.menuIcon = "mdi-menu";
      }
    }
  },
  computed: {
    drawerDisplayed() {
      return store.state.drawerDisplayed;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/Header.scss";
</style>
