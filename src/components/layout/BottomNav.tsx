import { NavLink } from "react-router-dom";
import { HomeOutlined, TeamOutlined, FolderOutlined, SettingOutlined } from "@ant-design/icons";
import "../../styles/components/BottomNav.scss";

function BottomNav() {
    return (
        <div className="BottomNav">
            <NavLink to="/" className="BottomNav__item">
                <HomeOutlined />
                <span>Asosiy</span>
            </NavLink>
            <NavLink to="/customers" className="BottomNav__item">
                <TeamOutlined />
                <span>Mijozlar</span>
            </NavLink>
            <NavLink to="/reports" className="BottomNav__item">
                <FolderOutlined />
                <span>Hisobot</span>
            </NavLink>
            <NavLink to="/settings" className="BottomNav__item">
                <SettingOutlined />
                <span>Sozlama</span>
            </NavLink>
        </div>
    );
}

export default BottomNav; 