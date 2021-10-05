// 引入express模块
const express = require('express');
// 引入核心模块path
const path = require('path');

// 引入路由器
const usersRouter = require('./routes/users');
// 创建web服务器
const server = express();
server.listen(3000, ()=>{
    console.log('linkStart');
});

// 存放公共资源
server.use(express.static(path.join(__dirname, 'public')));
// 将post请求数据解析为对象
server.use(express.urlencoded({extended:false}));


// 挂载路由器 ./users
server.use('/api/users', usersRouter);

// 挂载错误处理中间件
server.use((err, req, res, next) => {
    // 后台输出得到的错误信息
    console.log(err);
    // 同时响应500，返回前台告知服务器错误
    res.status(500).send({
        code: 500,
        msg: '服务器错误'
    });
});

// 以下是测试代码



/*
// 尝试使用Jwt
const expressJwt = require('express-jwt');

//  加入中间件
server.use(expressJwt({
    secret: 'seret12345' //  密钥
})).unless({
    path: ['./login', '/signup'] //指定路径不经过token解析
})

//生成token
const jwt = require('jsonwebtoken') 

server.post('./login', (req, res) => {
    // 之一默认情况token必须以bearer+空格 开头
    const token = "Bearer " + jwt.sign(
        {
            _id: usersRouter._id,
            admin: user.role === 'admin'
        },
        'secret12345',
        {
            expiresIn: 3600 * 24 * 3
        }
    )
    res.json({
        status: 'ok',
        data: {token: token}
    })
})

//  获取解析内容
// 当收到带token的请求，如果解析成功，就可以在路由回调里通过， req.user来访问

server.get('/protected', (req, res) => {
    if(!req.user.admin){
        return res.sendStatus(401);
    }
    res.sendStatus(200);

})
*/

// 尝试使用jsonwebtoken
// const jwt = require('jsonwebtoken');

// let token = jwt.sign(
//     {
//         userId: users[0].id
//     },
//     appconfig.serectOrPrivateKey, 
//     {
//         expiresIn: 60 * 60 * 6
//     }
// )