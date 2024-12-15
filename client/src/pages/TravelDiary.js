import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt, FaCamera } from 'react-icons/fa';
import '../styles/TravelDiary.css';

const TravelDiary = () => {
  const [diaries, setDiaries] = useState([]);
  const [newDiary, setNewDiary] = useState({
    title: '',
    content: '',
    date: '',
    location: '',
    images: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiaries([...diaries, { ...newDiary, id: Date.now() }]);
    setNewDiary({ title: '', content: '', date: '', location: '', images: [] });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setNewDiary({ ...newDiary, images: [...newDiary.images, ...imageUrls] });
  };

  return (
    <Container className="travel-diary-container py-5">
      <div className="diary-header">
        <h1>我的旅行日记</h1>
        <p className="text-muted">记录精彩旅程，分享美好时刻</p>
      </div>

      <Card className="diary-form-card mb-5">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="给这次旅行起个标题吧..."
                    value={newDiary.title}
                    onChange={(e) => setNewDiary({...newDiary, title: e.target.value})}
                    className="diary-title-input"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <div className="d-flex gap-2">
                  <Form.Control
                    type="text"
                    placeholder="地点"
                    value={newDiary.location}
                    onChange={(e) => setNewDiary({...newDiary, location: e.target.value})}
                    className="location-input"
                  />
                  <Form.Control
                    type="date"
                    value={newDiary.date}
                    onChange={(e) => setNewDiary({...newDiary, date: e.target.value})}
                    className="date-input"
                  />
                </div>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="写下这次旅行的故事..."
                value={newDiary.content}
                onChange={(e) => setNewDiary({...newDiary, content: e.target.value})}
                className="diary-content-input"
              />
            </Form.Group>

            <div className="image-upload-section mb-3">
              <label className="image-upload-btn">
                <FaCamera /> 添加照片
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
              <div className="image-preview-container">
                {newDiary.images.map((url, index) => (
                  <img key={index} src={url} alt="preview" className="image-preview" />
                ))}
              </div>
            </div>

            <Button variant="primary" type="submit" className="publish-btn">
              发布日记
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="diary-list">
        {diaries.map((diary, index) => (
          <Card key={diary.id || index} className="diary-card mb-4">
            <Card.Body>
              <div className="diary-meta">
                <h3>{diary.title}</h3>
                <div className="diary-info">
                  <span><FaMapMarkerAlt /> {diary.location}</span>
                  <span><FaCalendarAlt /> {diary.date}</span>
                </div>
              </div>
              <Card.Text className="diary-content">{diary.content}</Card.Text>
              {diary.images.length > 0 && (
                <div className="diary-images">
                  {diary.images.map((url, imgIndex) => (
                    <img key={imgIndex} src={url} alt="" className="diary-image" />
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default TravelDiary;