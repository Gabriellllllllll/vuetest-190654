import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itens: [{Nome:"Arroz", Preço:"R$ 15,00", ID:"Item1"},{Nome:"Feijão", Preço:"R$ 10,00", ID:"Item1"},
            {Nome:"Carne", Preço:"R$ 20,00", ID:"Item2"},{Nome:"Peixe", Preço:"R$ 22,00", ID:"Item2"},
            {Nome:"Bolacha", Preço:"R$ 3,00", ID:"Item3"},{Nome:"Biscoito", Preço:"R$ 3,00", ID:"Item3"},
            {Nome:"Detergente", Preço:"R$ 4,00", ID:"Item4"},{Nome:"Desinfetante", Preço:"R$ 5,00", ID:"Item4"},]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
