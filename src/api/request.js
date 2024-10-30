/**
 * 配置一个拦截器
 *
 * 请求远程地址后get的数据会先到拦截器中，然后再给到请求中
 */
import axios from 'axios'

//创建一个axios 实例
const ins = axios.create();

//设置拦截器
ins.interceptors.response.use(function (resp) {


    if(resp.data.code !== 0 ){
        //有错误
        alert(resp.data.msg);
    }
    // console.log("resp before",resp.data.data);
    return resp.data.data;

});

//导出拦截器
export default ins;