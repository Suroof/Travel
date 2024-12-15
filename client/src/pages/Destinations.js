import React, { useState } from 'react';
import '../styles/Destinations.css';

import guangzhou from '../assets/广州.jpg';
const destinations = [
  {
    id: 1,
    name: '北京',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d',
    description: '探索中国历史文化的心脏',
    attractions: ['故宫', '长城', '天坛', '颐和园'],
    price: '¥3000起'
  },
  {
    id: 2,
    name: '上海',
    image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9',
    description: '感受现代都市的繁华魅力',
    attractions: ['外滩', '东方明珠', '豫园', '迪士尼'],
    price: '¥2800起'
  },
  {
    id: 3,
    name: '广州',
    image: guangzhou,
    description: '品味岭南文化的独特韵味',
    attractions: ['陈家祠', '沙面', '白云山', '广州塔'],
    price: '¥2500起'
  }
];

function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({
    date: '',
    people: 1,
    notes: ''
  });

  const handleBooking = (e) => {
    e.preventDefault();
    // 这里可以添加预订逻辑，比如发送到后端
    console.log('Booking info:', {
      destination: selectedDestination.name,
      ...bookingInfo
    });
    alert('预订成功！我们会尽快联系您确认行程。');
    setSelectedDestination(null);
    setBookingInfo({ date: '', people: 1, notes: '' });
  };

  return (
    <div className="destinations-page">
      <div className="destinations-hero">
        <h1>探索目的地</h1>
        <p>发现令人惊叹的旅游胜地</p>
      </div>

      <div className="search-section">
        <div className="search-container">
          <input type="text" placeholder="搜索目的地..." className="search-input" />
          <button className="search-button">
            <span>搜索</span>
          </button>
        </div>
      </div>

      <div className="dest-grid">
        {destinations.map(destination => (
          <div key={destination.id} className="dest-card">
            <div className="dest-overlay"></div>
            <div className="dest-circle">
              <img src={destination.image} alt={destination.name} />
            </div>
            <div className="dest-content">
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
              <div className="dest-price">{destination.price}</div>
              <button
                className="dest-button"
                onClick={() => setSelectedDestination(destination)}
              >
                立即预订
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedDestination && (
        <div className="modal-overlay" onClick={() => setSelectedDestination(null)}>
          <div className="modal-content booking-modal" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedDestination(null)}>×</button>
            <h2>预订 - {selectedDestination.name}</h2>
            <div className="destination-preview">
              <img src={selectedDestination.image} alt={selectedDestination.name} />
              <div className="preview-info">
                <p>{selectedDestination.description}</p>
                <div className="price">{selectedDestination.price}</div>
                <div className="attractions">
                  <h3>主要景点：</h3>
                  <ul>
                    {selectedDestination.attractions.map((attraction, index) => (
                      <li key={index}>{attraction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <form onSubmit={handleBooking} className="booking-form">
              <div className="form-group">
                <label>出发日期</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={bookingInfo.date}
                  onChange={e => setBookingInfo({...bookingInfo, date: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>出行人数</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  required
                  value={bookingInfo.people}
                  onChange={e => setBookingInfo({...bookingInfo, people: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>联系方式</label>
                <input
                  type="tel"
                  required
                  placeholder="请输入您的手机号码"
                  value={bookingInfo.phone || ''}
                  onChange={e => setBookingInfo({...bookingInfo, phone: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>特殊需求（选填）</label>
                <textarea
                  value={bookingInfo.notes}
                  onChange={e => setBookingInfo({...bookingInfo, notes: e.target.value})}
                  placeholder="如有特殊需求请在此说明（如：素食、婴儿座椅等）"
                ></textarea>
              </div>
              <div className="price-calculation">
                <div className="calc-item">
                  <span>单价：</span>
                  <span>{selectedDestination.price}</span>
                </div>
                <div className="calc-item">
                  <span>人数：</span>
                  <span>× {bookingInfo.people}</span>
                </div>
                <div className="calc-total">
                  <span>预估总价：</span>
                  <span>¥{parseInt(selectedDestination.price) * bookingInfo.people}起</span>
                </div>
              </div>
              <button type="submit" className="submit-button">确认预订</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Destinations;