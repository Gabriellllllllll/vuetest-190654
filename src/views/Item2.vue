<template>
  <div>
    <v-container justify-center fill-height
      ><strong>{{ $store.getters.bigTitle }}</strong
      ><Item_dois
    /></v-container>
  </div>
</template>

<script>
import Item_dois from "../components/Item_dois";

export default {
  name: "Item2",

  components: {
    Item_dois,
  },
};
</script>
