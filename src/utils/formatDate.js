/**
 * 时间戳转换工具类
 * @param timestamp
 * @param shoTime true 展示时分秒 false 不展示
 *
 *
 */
export default function formatDate (timestamp, shoTime= false) {
    const data = new Date(+timestamp);
    const month = (data.getMonth() + 1).toString().padStart(2, '0');
    const day = (data.getDate()).toString().padStart(2, '0');
    let str = `${data.getFullYear()}-${month}-${day}`
    if (shoTime) {
        const hour = data.getHours().toString().padStart(2, '0');
        const minuter = data.getMinutes().toString().padStart(2, '0');

        const second = data.getSeconds().toString().padStart(2, '0');

        str += `-${hour}:${minuter}:${second}`;
    }
    return str;
}