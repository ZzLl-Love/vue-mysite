import {getSettings, gettings} from '@/api/setting'
export default {
    namespaced: true,
    state: {
        data: null
    },

    mutations: {
        setData(state, payload) {
            state.data = payload;
        }
    },

    actions: {
        async  fetchSettings(ctx) {
            const resp = await getSettings();
            ctx.commit("setData", resp);
            if(resp.favicon) {
                //统一设置图标的地址
                let link = document.querySelector("link[ref='shortcut icon']");
                if(link) {
                    return;
                }else {
                    link = document.createElement("link");
                    link.rel = "shortcut icon";
                    link.type ="images/x-icon";
                    link.href = resp.favicon;
                    document.querySelector("head").appendChild(link);
                }
            }
        }
    }
}