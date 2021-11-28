<template>
  <v-container fill-height>
    <v-card flat class="mx-auto" max-width="900" max-height="81vh">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(n, i) in $store.state.itens" :key="i">
            <v-card width="400" height="20vh" v-if="n.ID === 'Item1'" color="grey">
              <v-img>
                <v-card-title v-text="n.Nome"></v-card-title>
                <v-card-subtitle> Preço: {{ n.Preço }} </v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>