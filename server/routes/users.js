const express = require('express');
const router = express.Router();

// 用户注册
router.post('/register', async (req, res) => {
  try {
    res.status(201).json({ message: '注册成功' });
  } catch (error) {
    res.status(400).json({ message: '注册失败' });
  }
});

// 用户登录
router.post('/login', async (req, res) => {
  try {
    res.json({ message: '登录成功' });
  } catch (error) {
    res.status(401).json({ message: '登录失败' });
  }
});

module.exports = router;