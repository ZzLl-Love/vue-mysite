import {getAbout} from "@/api/about";

export default  {

    namespaced: true,
    state: {
        data: '',
    },

    mutations: {
        setData(state, payload) {
            state.data = payload;
        }
    },

    actions: {
        async  fetchAbout(ctx) {
            if(ctx.state.data){
                return;
            }
            const resp = await getAbout();
            ctx.commit("setData", resp);
        }
    }
}