import {getBanners} from "@/api/banner";

export default  {
    namespaced: true,
    state: {
        data:[],
    },

    mutations: {

        setData(state, payload) {
            state.data = payload;
        }
    },

    actions: {
       async  fetchBanner(ctx) {
           if(ctx.state.data.length> 0 ) {
               return; //避免重复去请求图片数据
           }
            const  banners =  await  getBanners();// 这里为什么不写await 就会有问题
        ctx.commit("setData", banners);
       }
    }
}