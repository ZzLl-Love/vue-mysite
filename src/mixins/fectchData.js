/**
 * 公共获取远程数据代码
 */
export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoaded: true,  //正在远程获取数据
                data: defaultDataValue   //get data
            }
        },

        async created() {
            this.data = await this.fetchData();
            this.isLoaded = false;
        }
    }
};