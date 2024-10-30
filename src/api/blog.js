
import request from './request'

/**
 * 获取博客列表数据
 * @param page    当前页码
 * @param limit   页容量
 * @param categoryId  所属分类  -1 表示全部
 * @returns {Promise<void>}
 */
export async function getBlogs(page=1, limit=10, categoryId= -1){
   return await request.get( '/api/blog', {
        params: { page: page, limit: limit, categoryId: categoryId },
    });
}

/**
 * 获取博客分类
 */
export async function getBlogType(){
   return await request.get('/api/blogType');
}