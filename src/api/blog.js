
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



/**
 * 获取单个博客
 * @param id
 * @returns {Promise<void>}
 */
export async function getBlog(id){
   return await request.get(`/api/blog/${id}`)

}

/**
 * 提交评论
 * @param comment 评论对象
 * @returns {Promise<void>}
 */
export async function emitComment(comment){
   return await  request.post('/api/comment', comment);
}

/**
 * 获取博客评论
 * @param blogId 所属文章   -1 表示不限制
 * @param page  当前页码
 * @param limit 页容量
 * @returns {Promise<void>}
 */
export async function getComments(blogId,page=1,limit=10){
        return await request.get('/api/comment', {
            params:{
                blogId:blogId,
                limit:limit,
                page:page,
            }
        })
}