<template>
  <v-app-bar flat app class="header px-8 pt-4" :light="isDrawerDisplayed">
    <v-toolbar-title class="headline text-lowercase">
      <span>
        <h3>miko aro</h3>
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      text
      icon
      class="pa-0 clickable"
      v-on:click="$emit('displayDrawer'), changeIcon()"
    >
      <v-icon>{{ menuIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: { isDrawerDisplayed: { type: Boolean } },
  data() {
    return {
      menuIcon: "mdi-menu"
    };
  },
  methods: {
    changeIcon() {
      if (!this.isDrawerDisplayed) {
        this.menuIcon = "mdi-close";
      } else {
        this.menuIcon = "mdi-menu";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/Header.scss";
</style>
