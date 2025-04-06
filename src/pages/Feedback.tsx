import { useState } from 'react';
import { Button, Input, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


import "../styles/pages/Settings-page.scss";

const { TextArea } = Input;

const Feedback = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigate('/settings');
  };

  const handleSubmit = () => {
    if (!feedback.trim()) {
      message.error('Iltimos, fikringizni kiriting');
      return;
    }

    setLoading(true);
    
    // Mock submit - would be replaced with an actual API call
    setTimeout(() => {
      message.success('Fikringiz uchun rahmat!');
      setFeedback('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="settings-subpage">
      <div className="subpage-container">
        <div className="subpage-header">
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={handleBack}
            type="text"
            className="back-button"
          />
          <h1 className="subpage-title">Taklif va shikoyatlar</h1>
        </div>

        <div className="feedback-content">
          <h2 className="feedback-title">Qiziqib berganimiz uchun uzr so'raymiz!</h2>
          <p className="feedback-description">
            O'zimizni doimiy ravishda yaxshilab borishimiz uchun, fikringizni bildiring. Barcha mulohazalar qarab chiqiladi va o'z vaqtida javob beriladi.
          </p>
          
          <div className="feedback-form">
            <TextArea 
              rows={6} 
              placeholder="Fikringizni yozing..." 
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              className="feedback-input"
            />
            
            <Button 
              type="primary" 
              className="submit-button"
              onClick={handleSubmit}
              loading={loading}
            >
              Yuborish
            </Button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Feedback; 