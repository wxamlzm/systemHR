// 引入express
const express = require('express');
const usersController = require('../controller/users.js')


// 创建路由对象
const router = express.Router();
// 挂载接口属性
router.post('/login', usersController.login);



module.exports = router;