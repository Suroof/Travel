import React from 'react';
import '../styles/About.css';

const teamMembers = [
  {
    name: '张经理',
    position: '创始人兼CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    description: '拥有15年旅游行业经验，致力于为客户提供优质的旅行体验。'
  },
  {
    name: '李总监',
    position: '运营总监',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    description: '专注于旅游路线设计和品质把控，确保每条线路都精心打造。'
  },
  {
    name: '王经理',
    position: '客服经理',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    description: '带领专业的客服团队，为游客提供24小时贴心服务。'
  }
];

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>关于我们</h1>
        <p>专注于为您打造完美的旅行体验</p>
      </div>

      <div className="about-content">
        <section className="company-intro">
          <div className="intro-card">
            <h2>我们的故事</h2>
            <p>成立于2010年，我们始终秉持"让旅行更美好"的理念，为游客提供优质的旅游服务。
              十余年来，我们服务了超过100万名游客，获得了广泛好评。</p>
          </div>
        </section>

        <section className="company-values">
          <h2>我们的价值观</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon">💫</div>
              <h3>专业服务</h3>
              <p>专业的团队，优质的服务</p>
            </div>
            <div className="value-card">
              <div className="icon">🤝</div>
              <h3>诚信为本</h3>
              <p>诚信经营，信守承诺</p>
            </div>
            <div className="value-card">
              <div className="icon">🎯</div>
              <h3>追求卓越</h3>
              <p>不断创新，追求完美</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>我们的团队</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <p>{member.description}</p>
                  <div className="social-links">
                    <button className="social-button">
                      <span>联系我</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements">
          <h2>我们的成就</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">100万+</div>
              <div className="achievement-text">服务游客</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">98%</div>
              <div className="achievement-text">客户满意度</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">1000+</div>
              <div className="achievement-text">精品路线</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">50+</div>
              <div className="achievement-text">合作伙伴</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;