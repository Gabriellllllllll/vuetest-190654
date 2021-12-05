import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itens: [{Nome:"Arroz", Preço:"R$ 15,00", ID:"Item1"},{Nome:"Feijão", Preço:"R$ 10,00", ID:"Item1"},
            {Nome:"Carne", Preço:"R$ 20,00", ID:"Item2"},{Nome:"Peixe", Preço:"R$ 22,00", ID:"Item2"},
            {Nome:"Bolacha", Preço:"R$ 3,00", ID:"Item3"},{Nome:"Biscoito", Preço:"R$ 3,00", ID:"Item3"},
            {Nome:"Detergente", Preço:"R$ 4,00", ID:"Item4"},{Nome:"Desinfetante", Preço:"R$ 5,00", ID:"Item4"},],
    titulo: "Mercadorias",
    dados: []
  },
  mutations: {
    covid(state, dados) {
      dados.data.forEach(dado => {
        state.dados.push({
          state: dado.state,
          cases: dado.cases,
          deaths: dado.deaths,
          suspects: dado.suspects,
        })
      });
    }
  },
  actions: {
    buscarDados({ commit }) {
      axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
          .then(res=>{console.log("as", res.data)
                commit('covid', res.data)})
          .catch(err => {console.log(err);})
  }
  },
  getters: {
    bigTitle(state){
      return state.titulo.toUpperCase()
    }
  },
  
})
