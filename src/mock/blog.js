/**
 * 使用Mock.js 来模拟博客请求数据
 */
import Mock from 'mockjs'
import qs  from "querystring";
//模拟博客分类
Mock.mock('/api/blogType', 'get', {
    code: 0,
    msg: '',
    "data|10-20": [
        {
            'id|+1': 1,
            name: '分类@id',
            'articleCount|0-300': 0, //该分类下的文章数量
            'order| +1': 1
        }
    ]
});

//模拟博客
Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function(options){
    const query = qs.parse(options.url);
    // console.log("------",query.limit)
    return Mock.mock({
        code: 0,
        msg: 'success',
        data: {
            "total|2000-3000": 0,
            [`rows|${query.limit|10}`]:[{
                id: '@guid',
                title:'@ctitle(1,50)',
                description:'@cparagraph(1,10)',
                category:{
                    'id|1-10':0,
                    name: '分类@id'
                },
                "scanNumber|0-3000": 0,
                "commentNumber|0-300": 30,
                "thumb|1":[Mock.Random.image("30*25", "#000", '#fff',"Random Image"),null],
                createDate: `@date('T')`
            }]
        }
    });
});
