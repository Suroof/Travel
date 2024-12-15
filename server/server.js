const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 数据库连接
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('数据库连接成功');
    // 同步所有模型
    await sequelize.sync({ alter: true });
    console.log('所有模型同步完成');
  } catch (error) {
    console.error('数据库连接失败:', error);
  }
}

connectDB();

// 路由
app.use('/api/tours', require('./routes/tours'));
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/users', require('./routes/users'));

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: '服务器内部错误' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});