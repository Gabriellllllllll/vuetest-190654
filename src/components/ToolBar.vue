<template>
  <v-card color="grey lighten-4" flat height="45px" tile>
    <v-toolbar dense color="grey">
      <v-menu >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list color="grey"
          ><center><v-btn flat color="grey" ><router-link to="/Home" tag="button">Home</router-link></v-btn></center>
          <v-list-item
            v-for="(n, i) in $store.state.products"
            :key="i"
            @click="() => {}"
            :to="{ path: n.route }"
          >
            <v-list-item-title>{{ n.description }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="grey"><router-link to="/Item1" tag="button">Item1</router-link></v-btn>
      <v-btn color="grey"><router-link to="/Item2" tag="button">Item2</router-link></v-btn>
      <v-btn color="grey"><router-link to="/Item3" tag="button">Item3</router-link></v-btn>
      <v-btn color="grey"><router-link to="/Item4" tag="button">Item4</router-link></v-btn>
    </v-toolbar>
  </v-card>
</template>