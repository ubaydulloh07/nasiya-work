import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Layout from "../components/layout";
import CustomerDetail from "../components/CustomerDetail";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Customers from "../pages/Customers";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import DebtDetail from "../components/DebtsDetail/DebtDetail";
import PersonalInfo from "../pages/PersonalInfo";
import Help from "../pages/Help";
import Feedback from "../pages/Feedback";
import About from "../pages/About";
import Calendar from "../pages/Calendar";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/customer/:id" element={<CustomerDetail />} />
          <Route path="/debt/:debtId" element={<DebtDetail />} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="help" element={<Help />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="about" element={<About />} />
        <Route path="calendar" element={<Calendar />} />

        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
