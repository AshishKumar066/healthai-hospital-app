import { Routes, Route } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Patients from "../pages/Patients";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import Departments from "../pages/Departments";
import Prescriptions from "../pages/Prescriptions";
import MedicalRecords from "../pages/MedicalRecords";
import Billing from "../pages/Billing";
import Emergency from "../pages/Emergency";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/prescriptions" element={<Prescriptions />} />
                <Route path="/medical-records" element={<MedicalRecords />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;