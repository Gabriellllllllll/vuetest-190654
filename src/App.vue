<template>
  <v-app>
    <v-main>
      <tool-bar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  name: 'App',

  components: {
    ToolBar,
  },

  data: () => ({
    //
  }),
};
</script>
