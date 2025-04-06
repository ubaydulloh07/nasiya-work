
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


import "../styles/pages/Settings-page.scss";

const Help = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/settings');
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
          <h1 className="subpage-title">Yordam</h1>
        </div>

        <div className="help-content">
          <h2 className="help-title">Biz bilan aloqa o'rnatish</h2>
          <p className="help-description">
            Savolingiz yoki taklifingiz bo'lsa, quyidagi usullardan foydalanishingiz mumkin. Biz ishchi kunlari soat 09:00 dan 18:00 gacha javob beramiz.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-title">Telefon raqami</div>
              <div className="method-value">+998 95 123 45 67</div>
            </div>
            
            <div className="contact-method">
              <div className="method-title">Elektron pochta</div>
              <div className="method-value">support@nasiya.uz</div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h3 className="faq-title">Ko'p so'raladigan savollar</h3>
          
          <div className="faq-item">
            <div className="faq-question">Nasiya dasturi orqali qanday qarz olish mumkin?</div>
            <div className="faq-answer">
              Nasiya dasturi orqali qarz olish uchun ro'yxatdan o'tib, mijozlar bo'limiga o'tishingiz va kerakli ma'lumotlarni to'ldirishingiz kerak.
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">To'lovlarni qanday amalga oshirish mumkin?</div>
            <div className="faq-answer">
              To'lovlarni istagan bank kartangiz orqali yoki naqd pul orqali amalga oshirishingiz mumkin.
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Help; 