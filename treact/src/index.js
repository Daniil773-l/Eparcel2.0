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

import CustomsRegulations from "./pages/CustomsRegulations";
import ProhibitedProductsPage from "./pages/ProhibitedProductsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PublicOffer from "./pages/PublicOffer";
import ClothesSizes from "./pages/ClothesSizes";
import TermsOfService from "./pages/TermsOfService";
import BrandedHandbagsPage from "./pages/BrandedHandbagsPage";

// Locate the root element from the DOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);  // Create a root.

// Render your component tree using the root
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<BrandedHandbagsPage />} />
            <Route path="/Tariffs" element={<Tariffs />} />
            <Route path="/Shops" element={<Shops />} />
            <Route path="/RedemptionOfGoods" element={<RedemptionOfGoods />} />
            <Route path="/AboutUS" element={<AboutUS />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
        </Routes>
    </Router>
);
