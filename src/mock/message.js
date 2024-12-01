import Mock from 'mockjs'
import qs from 'querystring'
import {options} from "axios";
Mock.mock("/api/message", "post", {
    code: 0,
    msg: '',
    data: {
        id: '@guid',
        nickname: '@cname',
        content: "@cparagraph(1,10)",
        creatDate: Date.now(),
        "avatar|1": [
            'https://blog.zeruns.tech/tx.jpg',
            'https://gravatar.zeruns.tech/avatar/',
        ]
    }
});


Mock.mock(/^\/api\/message(\/.*)?(\?.+)?$/, "get", function (options) {
    const query = qs.parse(options.url);

    return Mock.mock({
        code: 0,
        msg: '',
        data: {
            total: 52,
            [`rows|${query.limit | 10}`]: [{
                id: '@guid',
                nickname: '@cname',
                content: "@cparagraph(1,10)",
                creatDate: Date.now(),
                "avatar|1": [
                    'https://blog.zeruns.tech/tx.jpg',
                    'https://gravatar.zeruns.tech/avatar/',
                ]
            }]
        }
    })
});







