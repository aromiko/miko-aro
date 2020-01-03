<template>
  <v-app class="main-app">
    <main-bar></main-bar>
    <navigation-drawer></navigation-drawer>
    <v-content class="pa-0">
      <v-container class="flex-column">
        <introduction></introduction>
        <v-row>
          <v-col class="d-flex justify-center col-md-6">
            <v-img src="../assets/images/bonfire.jpg" />
          </v-col>
          <v-col class="d-flex justify-center col-md-6">
            <v-img src="../assets/images/crossing2.jpg" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center col-md-6">
            <v-img src="../assets/images/sunset.jpeg" />
          </v-col>
          <v-col class="d-flex justify-center col-md-6">
            <v-img src="../assets/images/port.jpeg" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center col-md-6">
            <v-img src="../assets/images/venice.jpg" />
          </v-col>
          <v-col class="d-flex justify-center col-md-6">
            <v-img src="../assets/images/daraitan.jpeg" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-card height="75">
      <v-footer absolute>
        <v-col class="text-center footer" cols="12">
          © {{ new Date().getFullYear() }} Miko Aro
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<style lang="scss">
@import "../styles/Home.scss";
</style>

<script>
import MainBar from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import Introduction from "../components/Introduction";

export default {
  name: "Home",
  components: {
    MainBar,
    NavigationDrawer,
    Introduction
  }
};
</script>
