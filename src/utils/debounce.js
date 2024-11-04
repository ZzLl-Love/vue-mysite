/**
 * 函数防抖，避免过于频繁的请求方法
 */
export default function (fn, duration=100) {
    let timer = null;
    return (...args) =>{
        clearTimeout(timer);
        timer = setTimeout(() => {
           fn(...args);
        },duration);
    }
}