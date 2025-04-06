import { Button, Divider } from 'antd';
import { RightOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '.././styles/pages/Settings.scss';

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    // Redirect to login
    window.location.href = '/login';
  };

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className='settings-header'>
        <h1 className="settings-title">Sozlamalar</h1>

        <div className="logout-container">
          <Button 
            type="primary" 
            danger 
            className="logout-button"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Chiqish
          </Button>
        </div>

        </div>
        
        {/* Asosiy bo'lim */}
        <div className="settings-section">
          <h2 className="section-title">Asosiy</h2>
          
          <div className="settings-items">
            <div className="settings-item" onClick={() => navigateTo('/personal-info')}>
              <span className="item-text">Shaxsiy ma'lumotlar</span>
              <RightOutlined className="item-icon" />
            </div>
            
            <div className="settings-item">
              <span className="item-text">Xavfsizlik</span>
              <RightOutlined className="item-icon" />
            </div>
          </div>
        </div>
        
        <Divider className="section-divider" />
        
        {/* Boshqa bo'lim */}
        <div className="settings-section">
          <h2 className="section-title">Boshqa</h2>
          
          <div className="settings-items">
            <div className="settings-item" onClick={() => navigateTo('/help')}>
              <span className="item-text">Yordam</span>
              <RightOutlined className="item-icon" />
            </div>
            
            <div className="settings-item" onClick={() => navigateTo('/feedback')}>
              <span className="item-text">Taklif va shikoyatlar</span>
              <RightOutlined className="item-icon" />
            </div>
            
            <div className="settings-item" onClick={() => navigateTo('/about')}>
              <span className="item-text">Dastur haqida</span>
              <RightOutlined className="item-icon" />
            </div>
            
            <div className="settings-item">
              <span className="item-text">Ommaviy oferta</span>
              <RightOutlined className="item-icon" />
            </div>
            
            <div className="settings-item">
              <span className="item-text">Maxfiylik siyosati</span>
              <RightOutlined className="item-icon" />
            </div>
          </div>
        </div>
        
        <Divider className="section-divider" />
        
        {/* Chiqish tugmasi */}
        
      </div>
    </div>
  );
}

export default Settings;