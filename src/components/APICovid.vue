<template>
  <div><v-data-table :headers="headers" :items="dados" class="elevation-1"></v-data-table></div>
  
</template>

<script>
export default {
  name: "dadosCovid",

  computed: {
    dados() {
      return this.$store.state.dados;
    },
  },

  data() {
    return {
      headers: [
        {
          text: "Estados",
          align: "end",
          sortable: false,
          value: "state",
        },
        { text: "Casos", value: "cases" },
        { text: "Mortes", value: "deaths" },
        { text: "Suspeitos", value: "suspects" },
      ],
    };
  },
};
</script>
