import "./banner";// 当后端正式服务器开发完成后，注释至一行，直接请求正式后端服务器
import './blog';
import './setting'
import Mock from 'mockjs';

/**
 * 使用mock 模拟1000 到 2000 ms 毫秒数据才返回
 */
Mock.setup({
    timeout: '1000-2000',
})