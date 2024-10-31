/**
 * 使用Mock.js 来模拟博客请求数据
 */
import Mock from 'mockjs'
import qs from "querystring";
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
Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
    const query = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: 'success',
        data: {
            "total|2000-3000": 0,
            [`rows|${query.limit | 10}`]: [{
                id: '@guid',
                title: '@ctitle(1,50)',
                description: '@cparagraph(1,10)',
                category: {
                    'id|1-10': 0,
                    name: '分类@id'
                },
                "scanNumber|0-3000": 0,
                "commentNumber|0-300": 30,
                "thumb|1": [Mock.Random.image("30*25", "#000", '#fff', "Random Image"), null],
                createDate: `@date('T')`
            }]
        }
    });
});

//模拟请求单个博客的信息
Mock.mock(/^\/api\/blog\/[^/]+$/, 'get', {
    code: 0,
    msg: 'success',
    data: {
        id: '@guid',
        name: '分类@id',
        description: '@cparagraph(1,10)',
        'scanNumber|0-1000': 0,
        'commentNumber|0-100': 0,
        createDate: `@date('T')`,
        toc: [
            {name: '章节1', anchor: 'title-1'},
            {
                name: '章节2',
                anchor: 'title-2',
                children: [
                    {name: '章节2-1', anchor: 'title-2-1'},
                    {name: '章节2-2', anchor: 'title-2-2'},
                ],
            },
            {name: '章节3', anchor: 'title-3'},
        ],
        'thumb|1': [
            Mock.Random.image('30*25', '#000', '#fff', "Random Image"), null
        ],
        htmlContent: `<p>在过去的十年里，技术的迅猛发展改变了人们的生活方式。无论是智能手机、互联网还是人工智能技术，它们都在重塑我们的日常生活，从沟通、购物到工作方式，都发生了巨大的变化。随着5G网络的普及，信息传播的速度达到了一个全新的高度，人们可以在几秒钟内获取海量的信息。同时，人工智能的进步也让自动化和智能化成为可能，许多领域的效率得到了显著提升。未来，随着技术的进一步发展，我们可以期待更多的创新为人类带来便利和改变。</p>
`
    }
});

//模拟评论博客提交 接口返回data
Mock.mock('/api/comment', 'post', {
    code: 0,
    msg: 'success',
    data: {
        id: '@guid',
        nickName: '@cname',
        content: '@cparagraph(1,10)',
        creatDate: Date.now(),
        'avatar|1': [
            'https://blog.zeruns.tech/tx.jpg',
            'https://gravatar.zeruns.tech/avatar/',
        ]
    },
});

///模拟  获取博客评论  /api/getComment
Mock.mock(/^\/api\/comment\/?(\?.+)?$/, 'get', function (options) {
    const query = qs.parse(options.url);
    return Mock.mock({
            code: 0,
            msg: 'success',
            data: {
                "total|50-200": 0,
                [`rows|${query.limit | 10}`]: [{
                    id: '@guid',
                    nickName: '@cname',
                    content: '@cparagraph(1,10)',
                    creatDate: Date.now(),
                    'avatar|1': [
                        'https://blog.zeruns.tech/tx.jpg',
                        'https://gravatar.zeruns.tech/avatar/',
                    ]
                }]
            }
        }
    )
});