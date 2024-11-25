/**
 * 获取网站的全局设置
 */
import request from './request'
export async  function  getSettings() {
    return await request.get("/api/setting")
}