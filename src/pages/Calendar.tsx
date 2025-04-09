import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/uz-latn";
import "../styles/pages/Calendar.scss";

dayjs.locale("uz");

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const navigate = useNavigate();

    return (
        <div className="Calendar">
            <div className="container">
                <div className="Calendar__header">
                    <button onClick={() => navigate(-1)} className="back">
                        <ArrowLeftOutlined style={{ fontSize: "20px" }} />
                    </button>
                    <h2>Kalendar</h2>
                </div>

                <div className="Calendar__content">
                    <div className="Calendar__price">
                        <p>Oylik jami:</p>
                        <h3>50 125 000 so'm</h3>
                    </div>

                    <div className="Calendar__calendar">
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uz-latn">
                            <DemoItem>
                                <DateCalendar
                                    value={selectedDate}
                                    views={["year", "month", "day"]}
                                    onChange={(date) => setSelectedDate(date)}
                                />
                            </DemoItem>
                        </LocalizationProvider>
                    </div>

                    <div className="Calendar__payments">
                        <h3>{selectedDate ? `${dayjs(selectedDate).locale("uz-latn").format("D MMMM")} kuni to'lov kutilmoqda` : "Sana tanlanmagan"}</h3>
                        <div className="Calendar__payments-list">
                            <div className="Calendar__payments-item">
                                <h4>Avazbek Jahongirov</h4>
                                <p>UZS 1 000 000</p>
                            </div>
                            <div className="Calendar__payments-item">
                                <h4>Otabek Sulaymonov</h4>
                                <p>UZS 1 000 000</p>
                            </div>
                            <div className="Calendar__payments-item">
                                <h4>Sardor Murodov</h4>
                                <p>UZS 1 000 000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar; 