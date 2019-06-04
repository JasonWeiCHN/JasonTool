export default {
    namespaced: true,
    state:{
        hello:"hello 圣童降临"
    },
    actions:{
        test ({ commit }) {
            setTimeout(() => {
                console.log("弄啥嘞？")
            }, 1000)
        },
        login({ commit,state },data) {
           console.log(commit);
           console.log(state);
           console.log(data);
        },
    }
}
