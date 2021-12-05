<template>
  <div>
    <v-container justify-center fill-height
      ><strong>{{ $store.getters.bigTitle }}</strong
      ><Item_um
    /></v-container>
  </div>
</template>

<script>
import Item_um from "../components/Item_um";

export default {
  name: "Item1",

  components: {
    Item_um,
  },
};
</script>
