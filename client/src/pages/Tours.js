import React, { useState } from 'react';
import '../styles/Tours.css';
import xiongmao from '../assets/熊猫.jpg';
const tours = [
  {
    id: 1,
    title: '北京精华4日游',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d',
    duration: '4天3晚',
    price: '¥3999',
    type: 'popular', // 热门推荐
    theme: '文化游',
    highlights: ['故宫博物院', '八达岭长城', '颐和园', '天安门广场'],
    description: '深度体验北京历史文化，打卡必游景点，品尝地道美食。',
    schedule: [
      { day: '第一天', activities: ['接机', '天安门广场', '故宫博物院', '王府井步行街'] },
      { day: '第二天', activities: ['八达岭长城', '明十三陵', '鸟巢外观', '水立方外观'] },
      { day: '第三天', activities: ['颐和园', '清华北大外景', '什刹海', '南锣鼓巷'] },
      { day: '第四天', activities: ['天坛公园', '大栅栏', '送机'] }
    ]
  },
  {
    id: 2,
    title: '上海迪士尼3日欢乐游',
    image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9',
    duration: '3天2晚',
    price: '¥2999',
    type: 'theme', // 主题游
    theme: '亲子游',
    highlights: ['迪士尼乐园', '外滩', '城隍庙', '南京路'],
    description: '畅游迪士尼乐园，体验魔幻童话世界。',
    schedule: [
      { day: '第一天', activities: ['接机', '外滩', '南京路', '城隍庙'] },
      { day: '第二天', activities: ['迪士尼乐园一整天'] },
      { day: '第三天', activities: ['豫园', '田子坊', '送机'] }
    ]
  },
  {
    id: 3,
    title: '成都熊猫5日休闲游',
    image: xiongmao,
    duration: '5天4晚',
    price: '¥3599',
    type: 'popular',
    theme: '美食游',
    highlights: ['大熊猫基地', '锦里古街', '宽窄巷子', '都江堰'],
    description: '萌萌熊猫+地道美食，感受慢生活。',
    schedule: [
      { day: '第一天', activities: ['接机', '春熙路', '太古里'] },
      { day: '第二天', activities: ['大熊猫繁育研究基地', '锦里古街', '武侯祠'] },
      { day: '第三天', activities: ['都江堰', '青城山'] },
      { day: '第四天', activities: ['宽窄巷子', '杜甫草堂', '川剧变脸秀'] },
      { day: '第五天', activities: ['人民公园', '送机'] }
    ]
  },
  // ... 更多路线
];

function Tours() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [filter, setFilter] = useState('all');
  const [bookingInfo, setBookingInfo] = useState({
    date: '',
    people: 1,
    phone: '',
    notes: ''
  });

  const filteredTours = tours.filter(tour => {
    if (filter === 'all') return true;
    if (filter === 'popular') return tour.type === 'popular';
    if (filter === 'theme') return tour.type === 'theme';
    return true;
  });

  const handleBooking = (e) => {
    e.preventDefault();
    console.log('Booking info:', {
      tour: selectedTour.title,
      ...bookingInfo
    });
    alert('预订成功！我们会尽快联系您确认行程。');
    setSelectedTour(null);
    setBookingInfo({ date: '', people: 1, phone: '', notes: '' });
  };

  return (
    <div className="tours-page">
      <div className="tours-hero">
        <h1>精选旅游路线</h1>
        <p>为您打造完美旅行体验</p>
      </div>

      <div className="filter-section">
        <button
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          全部路线
        </button>
        <button
          className={`filter-button ${filter === 'popular' ? 'active' : ''}`}
          onClick={() => setFilter('popular')}
        >
          热门推荐
        </button>
        <button
          className={`filter-button ${filter === 'theme' ? 'active' : ''}`}
          onClick={() => setFilter('theme')}
        >
          主题游
        </button>
      </div>

      <div className="tours-grid">
        {filteredTours.map(tour => (
          <div key={tour.id} className="tour-card" onClick={() => setSelectedTour(tour)}>
            <div className="tour-image">
              <img src={tour.image} alt={tour.title} />
              <div className="tour-duration">{tour.duration}</div>
              <div className="tour-theme">{tour.theme}</div>
            </div>
            <div className="tour-info">
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <div className="tour-highlights">
                {tour.highlights.slice(0, 3).map((highlight, index) => (
                  <span key={index} className="highlight-tag">{highlight}</span>
                ))}
              </div>
              <div className="tour-footer">
                <span className="tour-price">{tour.price}</span>
                <button className="book-now-button">
                  立即预订
                  <span className="button-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTour && (
        <div className="tour-modal-overlay" onClick={() => setSelectedTour(null)}>
          <div className="tour-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedTour(null)}>×</button>
            <img src={selectedTour.image} alt={selectedTour.title} className="tour-modal-image" />
            <h2>{selectedTour.title}</h2>
            <div className="tour-details">
              <span className="detail-item">
                <i className="far fa-clock"></i>
                {selectedTour.duration}
              </span>
              <span className="detail-item">
                <i className="fas fa-tag"></i>
                {selectedTour.theme}
              </span>
              <span className="detail-item">
                <i className="fas fa-yen-sign"></i>
                {selectedTour.price}
              </span>
            </div>
            <p className="tour-description">{selectedTour.description}</p>
            <div className="tour-schedule">
              <h3>行程安排</h3>
              {selectedTour.schedule.map((day, index) => (
                <div key={index} className="schedule-day">
                  <h4>{day.day}</h4>
                  <ul>
                    {day.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
                <label>联系电话</label>
                <input
                  type="tel"
                  required
                  placeholder="请输入您的手机号码"
                  value={bookingInfo.phone}
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
                  <span>{selectedTour.price}</span>
                </div>
                <div className="calc-item">
                  <span>人数：</span>
                  <span>× {bookingInfo.people}</span>
                </div>
                <div className="calc-total">
                  <span>预估总价：</span>
                  <span>¥{parseInt(selectedTour.price.replace('¥', '')) * bookingInfo.people}</span>
                </div>
              </div>
              <button type="submit" className="reserve-button">确认预订</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tours;