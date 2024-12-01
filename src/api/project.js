// 项目和效果的请求地址
import  request from './request'

export async function getProjects() {
   let resp =  await request.get('/api/projects');
   return resp;

}


