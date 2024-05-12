import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import Login from './LoginPage';
import Registration from './RegistrationPage';
import AboutUS from "./AboutUS";
import Tariffs from "./tariffs";
import Shops from "./Shops";
import RedemptionOfGoods from "./RedemptionOfGoods";
import Contacts from "./Contacts";

// Locate the root element from the DOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);  // Create a root.

// Render your component tree using the root
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/tariffs" element={<Tariffs />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/redemption-of-goods" element={<RedemptionOfGoods />} />
            <Route path="/AboutUS" element={<AboutUS />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
        </Routes>
    </Router>
);
