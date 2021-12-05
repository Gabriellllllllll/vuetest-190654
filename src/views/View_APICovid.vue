<template>
    <APICovid />
</template>

<script>
import APICovid from "../components/APICovid";

export default {
    name: "Covid",

  components: {
    APICovid,
  },
  
  created() {
    this.$store.dispatch("buscarDados");
  },
}
</script>