import Mock from 'mockjs'
Mock.mock ("/api/setting", 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: 'https://cdn-icons-png.flaticon.com/512/17818/17818893.png',
        siteTitle: '我的个人空间',
        github: 'https://github.com/ZzLl-Love',
        qq: '501058587',
        qqQrcode: '',
        weixin : 'zzTop',
        weixinQrcoe: '',
        mail: '501058587@qq.com',
        icp: '备案号: 501058587@qq.com',
        githubName: 'zzloveLlBaby',
        favicon: 'https://cdn-icons-png.flaticon.com/512/17818/17818893.png'
    }
})