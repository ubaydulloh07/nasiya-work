import { Button, Avatar, Input } from 'antd';
import { ArrowLeftOutlined, CameraOutlined, InstagramOutlined, PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import "../styles/pages/Settings-page.scss";

// Custom Telegram icon
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" height="1em" width="1em" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const PersonalInfo = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/settings');
  };

  return (
    <div className="page-personal-info">
      <div className="page-personal-info__container">
        <div className="page-personal-info__header">
          <button onClick={handleBack} className="page-personal-info__back-button">
            <ArrowLeftOutlined />
          </button>
          <h1 className="page-personal-info__title">Shaxsiy ma'lumotlar</h1>
        </div>

        <div className="page-personal-info__profile">
          <div className="page-personal-info__avatar-container">
            <img src="./avatar.png" alt="User Avatar" className="page-personal-info__avatar" />
            
            <div className="page-personal-info__camera-icon">
              <CameraOutlined />
            </div>
          </div>
          <p className="page-personal-info__user-name">User Name</p>
        </div>

        <div className="page-personal-info__form">
          <div className="page-personal-info__form-group">
            <label>Ism Familiya</label>
            <Input defaultValue="Test Foydalanuvchi" />
          </div>

          <div className="page-personal-info__form-group">
            <label>Telefon raqam</label>
            <Input defaultValue="+998 90 123 45 67" />
          </div>

          <div className="page-personal-info__form-group">
            <label>Elektron pochta</label>
            <Input defaultValue="foydalanuvchi@gmail.com" />
          </div>
        </div>

        <div className="page-personal-info__social">
          <div className="page-personal-info__social-title">Ijtimoiy tarmoqlar</div>
          <div className="page-personal-info__social-links">
            <div className="page-personal-info__social-item page-personal-info__social-item--instagram">
              <div className="page-personal-info__social-icon">
                <InstagramOutlined />
              </div>
              <div className="page-personal-info__social-text">Instagram</div>
            </div>
            <div className="page-personal-info__social-item page-personal-info__social-item--telegram">
              <div className="page-personal-info__social-icon">
                <TelegramIcon />
              </div>
              <div className="page-personal-info__social-text">Telegram</div>
            </div>
            <div className="page-personal-info__social-item page-personal-info__social-item--phone">
              <div className="page-personal-info__social-icon">
                <PhoneOutlined />
              </div>
              <div className="page-personal-info__social-text">Phone</div>
            </div>
          </div>
        </div>

        <Button type="primary" className="page-personal-info__save-button">
          Saqlash
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfo; 