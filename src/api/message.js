import request from './request'

//分页得到所有的留言板消息
export async function getMessage(page=1, limit=  10){
    return await request.get("/api/message", {
        params: {
            page,
            limit,
        },
    });
}

//提交留言板消息
export async function postMessage(msgInfo){
    return await request.post("/api/message",msgInfo);
}

