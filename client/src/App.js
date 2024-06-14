import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/SignUp";

import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";
import MainContent from "././components/shared/MainContent";
import AdiminSidebar from "./components/shared/SidebarAdmin";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Customer from "./components/shared/Customer";
import Layout from "./components/shared/Layout";
import Home from "./components/pages/Home";
import AdminLayout from "./components/shared/LayoutAdmin";
import UserList from "./components/userlist";
import Dashboard from "./components/AllComponents/dashboard";
import Report from "./components/AllComponents/Report";
import MoviesRegister from "./components/AllComponents/MoviesRegister";
import UserDashboard from "./components/AllComponents/User/UserDashboard/UserDashboard";
import MovieRegistrationForm from "./components/AllComponents/MoviesRegister";
import Settings from "./components/AllComponents/Settings";
import MovieList from "./components/AllComponents/MovieList";
import CustomerReport from "./components/AllComponents/CustomerReport";
import Setting from "./components/AllComponents/User/UserSidebarlinks/Setting";
import Watchlist from "./components/AllComponents/User/UserSidebarlinks/Watchlist";
import Favorites from "./components/AllComponents/User/UserSidebarlinks/Favorites";
import ProfileUpdate from "./components/AllComponents/User/UserDashboard/ProfileUpade";
import About from "./components/pages/About";
import Help from "./components/pages/help";
import Contact from "./components/pages/contact";
// import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route index element={<Home />}></Route>
          <Route path="/report" element={<Report />} />
          <Route path="/MoviesRegster" element={<MovieRegistrationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/allusers" element={<UserList />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/totalusers" element={<CustomerReport />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/usersettings" element={<Setting />} />
          <Route path="/watchlists" element={<Watchlist />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profileupdate" element={<ProfileUpdate />} />
          {/* Movies add */}
          <Route path="/moviecreate" element={<MovieRegistrationForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
