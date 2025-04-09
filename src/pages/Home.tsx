import { useEffect, useState } from "react";
import {
    CalendarOutlined,
    EyeOutlined,
    EyeInvisibleOutlined,
    WalletOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import "dayjs/locale/uz-latn";
import "../styles/pages/Home.scss";
import { useStore } from "../hooks/useStore";
import { UserDatabase } from "../types";
import { useNavigate } from "react-router-dom";

dayjs.locale("uz");

function Home() {
    const [isVisible, setIsVisible] = useState(true);
    const { user } = useStore() as { user: UserDatabase | null };
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Home">
            <div>
                <div className="container">
                    <div className="Home__user">
                        <div className="Home__user-info">
                            <img src={user?.data?.image || "/imgs/user.svg"} alt="User" />
                            <p>{user?.data?.login || "Foydalanuvchi"}</p>
                        </div>
                        <button className="calendar" onClick={() => navigate("/calendar")}>
                            <CalendarOutlined style={{ fontSize: "24px", color: "#735CD8" }} />
                        </button>
                    </div>

                    <div className="Home__cards">
                        <div className="prices">
                            <div className="prices-item">
                                <h3>{isVisible ? `${user?.data?.wallet || "0.00"} so'm` : "******"}</h3>
                                <p>Umumiy nasiya:</p>
                            </div>
                            <button className="toggle-btn" onClick={() => setIsVisible(!isVisible)}>
                                {isVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                            </button>
                        </div>
                        <div className="cards">
                            <div className="cards-item">
                                <h2>Kechiktirilgan to'lovlar</h2>
                                <p className="cards-item__amount">26</p>
                            </div>
                            <div className="cards-item">
                                <h2>Mijozlar soni</h2>
                                <p className="cards-item__amount2">151</p>
                            </div>
                        </div>
                    </div>

                    <div className="Home__wallet">
                        <h2>Hamyoningiz</h2>
                        <div className="Home__wallet-info">
                            <div className="wallet">
                                <div className="wallet-icon">
                                    <WalletOutlined style={{ fontSize: "24px", color: "#735CD8"}} className="wallet-icon2"  />
                                </div>
                                <div className="wallet-amount">
                                    <p>Hisobingizda</p>
                                    <h3>{user?.data?.wallet || "0.00"} so'm</h3>
                                </div>
                            </div>
                            <button className="wallet-btn">
                                <PlusOutlined style={{ fontSize: "24px", color: "#FFF" }} />
                            </button>
                        </div>
                        <div className="Home__wallet-history">
                            <p>Bu oy uchun to'lov:</p>
                            <h3>To'lov qilingan</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img className="home-img" src="https://media.istockphoto.com/id/487123799/vector/shopping-mall.jpg?s=612x612&w=0&k=20&c=j4hGp2jsA28OLHc9U58zwb7NgI9cF_qx2toc4GLp6l0=" alt="" />
            </div>
        </div>
    );
}

export default Home;
