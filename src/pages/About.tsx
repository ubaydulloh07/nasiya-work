
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import "../styles/pages/Settings-page.scss";
// App logo
const AppLogo = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#3478F7" />
    <path d="M20 30 L30 40 L40 20" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const About = () => {
  const navigate = useNavigate();
  const appVersion = '1.0.0';

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
          <h1 className="subpage-title">Dastur haqida</h1>
        </div>

        <div className="about-content">
          <div className="app-logo-container">
            <AppLogo />
          </div>
          
          <h2 className="app-name">Nasiya</h2>
          <p className="app-version">Versiya {appVersion}</p>
          
          <div className="app-description">
            <p>
              Nasiya dasturi do'kon egalariga mijozlarga nasiya sotish va 
              to'lovlarni nazorat qilish imkonini beradi. Dastur 
              foydalanuvchilarimizni biznes jarayonlarini yengillashtirish 
              maqsadida ishlab chiqilgan.
            </p>
            <p>
              Dasturga oid takliflaringiz bo'lsa, taklif va shikoyatlar 
              bo'limiga murojaat qiling.
            </p>
          </div>
          
          <div className="copyright">
            &copy; {new Date().getFullYear()} Nasiya. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default About; 