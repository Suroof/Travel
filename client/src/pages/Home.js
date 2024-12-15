import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import guangzhouImg from '../assets/广州.jpg';

const placeholderImages = {
  beijing: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  shanghai: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  guangzhou: guangzhouImg
};

const features = [
  {
    icon: '🌟',
    title: '专业服务',
    description: '资深旅游顾问为您定制完美行程',
    details: '我们拥有超过10年的旅游行业经验，专业的团队24小时待命。所有顾问都经过严格培训，熟悉各个目的地的特色和文化。我们会根据您的个人喜好和需求，量身定制最适合的旅行计划。'
  },
  {
    icon: '💰',
    title: '优惠价格',
    description: '最优惠的价格，最优质的服务',
    details: '我们与各大酒店、景点有长期合作关系，能够提供最具竞争力的价格。同时我们承诺价格保证，如果您找到更低价格，我们将双倍补差。所有价格透明公开，绝无隐藏费用。'
  },
  {
    icon: '🎯',
    title: '目的地推荐',
    description: '精选全球热门旅游目的地',
    details: '我们的目的地专家实地考察每一个推荐地点，确保给您最真实的体验。从热门景点到隐秘小众地，我们都能为您规划独特的行程。每个季节都有不同的推荐，让您的旅行永远新鲜有趣。'
  }
];

const destinations = {
  beijing: {
    name: '北京',
    description: '探索中国历史文化的心脏',
    details: '作为中国的首都，北京拥有众多世界级文化遗产。长城、故宫、天坛等标志性景点让您深入了解中国历史。特色胡同游让您体验老北京的市井生活。',
    attractions: ['故宫博物院', '长城', '天坛', '颐和园', '南锣鼓巷'],
    bestTime: '春秋两季',
    price: '¥3000起'
  },
  shanghai: {
    name: '上海',
    description: '感受现代都市的繁华魅力',
    details: '上海是中国最国际化的大都市，外滩的万国建筑群展现了城市的历史底蕴，陆家嘴的摩天大楼诠释着现代中国的发展速度。',
    attractions: ['外滩', '东方明珠', '豫园', '迪士尼', '南京路'],
    bestTime: '全年适宜',
    price: '¥2800起'
  },
  guangzhou: {
    name: '广州',
    description: '品味岭南文化的独特韵味',
    details: '广州是中国南方最大的城市，独特的岭南文化和美食天堂的美誉吸引着世界各地的游客。从古老的陈家祠到现代的广州塔，处处彰显着这座城市的魅力。',
    attractions: ['陈家祠', '沙面', '白云山', '广州塔', '上下九步行街'],
    bestTime: '10月-次年3月',
    price: '¥2500起'
  }
};

function Home() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="glowing-text">探索世界的每个角落</h1>
        <p className="hero-description">让我们为您打造完美的旅行体验</p>
        <Link to="/tours" className="cta-button">开始探索</Link>
      </div>

      <div className="features-section">
        <h2 className="section-title">为什么选择我们？</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="card-content">
                <i className="feature-icon">{feature.icon}</i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="hover-content">
                <p>{feature.description}</p>
                <button className="learn-more" onClick={() => setSelectedFeature(feature)}>了解更多</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="popular-destinations">
        <h2 className="section-title">热门目的地</h2>
        <div className="destinations-grid">
          {Object.entries(destinations).map(([key, destination]) => (
            <div className="destination-card" key={key} onClick={() => setSelectedDestination(destination)}>
              <div className="card-image">
                <img src={placeholderImages[key]} alt={destination.name} />
              </div>
              <div className="card-info">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <button className="explore-destination">探索详情</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 特色服务详情弹窗 */}
      {selectedFeature && (
        <div className="modal-overlay" onClick={() => setSelectedFeature(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedFeature(null)}>×</button>
            <i className="feature-icon large">{selectedFeature.icon}</i>
            <h2>{selectedFeature.title}</h2>
            <p>{selectedFeature.details}</p>
          </div>
        </div>
      )}

      {/* 目的地详情弹窗 */}
      {selectedDestination && (
        <div className="modal-overlay" onClick={() => setSelectedDestination(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedDestination(null)}>×</button>
            <h2>{selectedDestination.name}</h2>
            <p className="destination-details">{selectedDestination.details}</p>
            <h3>主要景点：</h3>
            <ul className="attractions-list">
              {selectedDestination.attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
            <p className="best-time">最佳旅游时间：{selectedDestination.bestTime}</p>
            <div className="price-tag">{selectedDestination.price}</div>
            <Link to="/destinations" className="book-button">立即预订</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;