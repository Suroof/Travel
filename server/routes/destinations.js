const express = require('express');
const router = express.Router();

// 获取所有目的地
router.get('/', async (req, res) => {
  try {
    res.json([
      { id: 1, name: '北京', description: '中国首都' },
      { id: 2, name: '上海', description: '国际大都市' },
      { id: 3, name: '广州', description: '南方门户' }
    ]);
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
});

module.exports = router;