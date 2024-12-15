const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// 获取所有旅游路线
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.findAll();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
});

// 获取单个旅游路线
router.get('/:id', async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: '未找到该旅游路线' });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
});

// 创建新旅游路线
router.post('/', async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json(tour);
  } catch (error) {
    res.status(400).json({ message: '创建失败', error: error.message });
  }
});

// 更新旅游路线
router.put('/:id', async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: '未找到该旅游路线' });
    }
    await tour.update(req.body);
    res.json(tour);
  } catch (error) {
    res.status(400).json({ message: '更新失败', error: error.message });
  }
});

// 删除旅游路线
router.delete('/:id', async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: '未找到该旅游路线' });
    }
    await tour.destroy();
    res.json({ message: '删除成功' });
  } catch (error) {
    res.status(500).json({ message: '删除失败', error: error.message });
  }
});

module.exports = router;