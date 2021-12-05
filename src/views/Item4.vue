<template>
 <div>
    <v-container justify-center fill-height
      ><strong>{{ $store.getters.bigTitle }}</strong
      ><Item_quatro
    /></v-container>
  </div>
</template>

<script>
import Item_quatro from "../components/Item_quatro";

export default{
   name: "Item4",

   components: {
       Item_quatro,
   },
}
</script>