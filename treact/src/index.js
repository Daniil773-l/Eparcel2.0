import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import HeaderContainer from "./components/headers/RoomHeader";
import App from "./App";
import Login from "./LoginPage";
import Registration from "./RegistrationPage";
import AboutUS from "./AboutUS";
import Tariffs from "./tariffs";
import Shops from "./Shops";
import RedemptionOfGoods from "./RedemptionOfGoods";
import Contacts from "./Contacts";
import LegalInformation from "./pages/LegalInformation";
import Deliveryaddress from "./Deliveryaddress";
import DeliveryCalculator from "./pages/DeliveryCalculator";
import Purchaseofgoods from "./Purchaseofgoods";
import CustomsRegulations from "./pages/CustomsRegulations";
import ProhibitedProductsPage from "./pages/ProhibitedProductsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PublicOffer from "./pages/PublicOffer";
import TermsOfService from "./pages/TermsOfService";
import BrandedHandbagsPage from "./pages/BrandedHandbagsPage";
import Rates from "./Rates";
import DutyCalculatorPage from "./pages/DutyCalculatorPage";
import HowToBuyGoodsAbroadPage from "./pages/HowToBuyGoodsAbroadPage";
import ClothesSizes from "./pages/ClothesSizes";
import ForBussinesPage from "./pages/ForBussinesPage";
import News from "./News";
import Questions from "./Questions";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import ServiseApplication from "./ServiseApplication";
import ExpectedLink from "./ExpectedLink";
import SinglePage from "./SinglePageApplication";
import IncomingParcels from "./pages/IncomingParcels";
import OutgoingParcels from "./pages/OutgoingParcels";
import DeliveredParcels from "./pages/DeliveredParcels";
import WarehouseServices from "./pages/WarehouseServices";
import ChangePassword from "./pages/ChangePassword";
import ChangingContactDetails from "./pages/ChangingContactDetails";
import PersonalArea from "./pages/PersonalArea";

// Locate the root element from the DOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);  // Create a root.

root.render(
    <AuthProvider>
    <Router>
        <HeaderContainer />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/App" element={<App />} />
            <Route path="/Tariffs" element={<Tariffs />} />
            <Route path="/Shops" element={<Shops />} />
            <Route path="/RedemptionOfGoods" element={<RedemptionOfGoods />} />
            <Route path="/AboutUS" element={<AboutUS />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Deliveryaddress" element={<Deliveryaddress />} />
            <Route path="/OutgoingParcels" element={<OutgoingParcels />} />
            <Route path="/DeliveredParcels" element={<DeliveredParcels />} />
            <Route path="/WarehouseServices" element={<WarehouseServices />} />
            <Route path="/IncomingParcels" element={<IncomingParcels />} />
            <Route path="/PersonalArea" element={<PersonalArea />} />
            <Route path="/ExpectedLink" element={<ExpectedLink />} />
            <Route path="/ServisApplication" element={<ServiseApplication />} />
            <Route path="/Purchaseofgoods" element={<Purchaseofgoods />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/ChangingContactDetails" element={<ChangingContactDetails />} />
            <Route path="/RegistrationPage" element={<RegistrationPage />} />
            <Route path="/CustomRegulations" element={<CustomsRegulations />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsOfService" element={<TermsOfService />} />
            <Route path="/PublicOffer" element={<PublicOffer />} />
            <Route path="/ProhibitedProductsPage" element={<ProhibitedProductsPage />} />
            <Route path="/DutyCalculatorPage" element={<DutyCalculatorPage />} />
            <Route path="/DeliveryCalculator" element={<DeliveryCalculator />} />
            <Route path="/LegalInformation" element={<LegalInformation />} />
            <Route path="/HowToBuyGoodsAbroadPage" element={<HowToBuyGoodsAbroadPage />} />
            <Route path="/ClothesSizes" element={<ClothesSizes />} />
            <Route path="/ForBussinesPage" element={<ForBussinesPage />} />
            <Route path="/Rates" element={<Rates />} />
            <Route path="/ForBussinesPage" element={<BrandedHandbagsPage />} />
            <Route path="/News" element={<News />} />
            <Route path="/Questions" element={<Questions />} />
        </Routes>
    </Router>
    </AuthProvider>
);
