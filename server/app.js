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