<template>
  <div>
    <v-container justify-center fill-height
      ><strong>{{ $store.getters.bigTitle }}</strong
      ><Item_tres
    /></v-container>
  </div>
</template>

<script>
import Item_tres from "../components/Item_tres";

export default {
  name: "Item3",

  components: {
    Item_tres,
  },
};
</script>
