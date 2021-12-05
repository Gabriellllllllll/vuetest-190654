<template>
  <v-navigation-drawer absolute permanent left>
    <v-container fluid fill-height>
      <v-card-text>
        <center>
          <v-btn
            ><router-link to="/APICovid" tag="button">APICovid</router-link></v-btn
          >
        </center>
        <center>
          <v-btn
            ><router-link to="/Item1" tag="button">Item1</router-link></v-btn
          >
        </center>
        <center>
          <v-btn
            ><router-link to="/Item2" tag="button">Item2</router-link></v-btn
          >
        </center>
        <center>
          <v-btn
            ><router-link to="/Item3" tag="button">Item3</router-link></v-btn
          >
        </center>
        <center>
          <v-btn
            ><router-link to="/Item4" tag="button">Item4</router-link></v-btn
          >
        </center>
      </v-card-text>
    </v-container>
  </v-navigation-drawer>
</template>