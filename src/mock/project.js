import Mock from 'mockjs';

Mock.mock('/api/projects', 'get', {
    code: 0,
    msg: '',
    "data|10-20": [
        {
            id: '@uuid',
            name: '@ctitle(1,10)',
            "url|1": ['@url', null],
            "github": ["@url", null],
            "description|1-4": [ // 数组中的每个元素为段落
                () => Mock.mock('@cparagraph(1,5)') // 使用函数返回生成段落
            ],
            thumb: '@image(30*25, @color, #fff, @natural)'
        }
    ]
})