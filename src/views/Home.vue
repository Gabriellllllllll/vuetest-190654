<template>
  <div>
    <v-card>
      <SystemBar />
      <AppBar />
    </v-card>
    <v-card height="610px">
      <NavigationDrawer />
      <Content />
    </v-card>
    <Footer />
    <BottomNavigation />
  </div>
</template>

<script>
import SystemBar from "../components/SystemBar";
import AppBar from "../components/AppBar";
import NavigationDrawer from "../components/NavigationDrawer";
import Footer from "../components/Footer";
import BottomNavigation from "../components/BottomNavigation";
import Content from "../components/Content";

export default {
  name: "Home",

  components: {
    SystemBar,
    AppBar,
    NavigationDrawer,
    Footer,
    BottomNavigation,
    Content,
  },
};
</script>
