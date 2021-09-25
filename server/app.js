// 引入express模块
const express = require('express');
// 引入核心模块path
const path = require('path');

// 引入路由器
const usersRouter = require('./routes/users.js');
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
server.use('/users', usersRouter);

