import request from "./request";
/**
 * 首页标语 api
 */

export async function getBanners() {
    // const resp = await request.get("/api/banner");
    return await request.get("/api/banner");
}


// getBanners().then(resp => {
//     console.log("after resp:", resp);
// });