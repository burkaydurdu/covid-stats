import axios from "axios"
import { createStore } from "vuex"

const state = {
    stats: null
}

const actions = {
    getAllStats({ commit }) {
        axios.get("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
                headers: {
                    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                    "x-rapidapi-key": "d6ac23d3e7mshda433a1366b8c32p19c1bdjsn0b786003663b"
                }
            })
            .then(response => {
                commit("SET_STATS", response.data)
            });
    }
}

//to handle mutations
const mutations = {
    SET_STATS(state, stats) {
        state.stats = stats
    }
}

//export store module
export default createStore({
    state,
    actions,
    mutations
})