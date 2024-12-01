import {getProjects} from "@/api/project";

export default  {

    namespaced: true,
    state: {
        data: [],
    },

    mutations: {
        setData(state, payload) {
            state.data = payload;
        }
    },

    actions: {
        async  fetchProjects(ctx) {
            if(ctx.state.data.length > 0) {
                return;
            }
          const resp = await getProjects();
          ctx.commit("setData", resp);
        }
    }
}