import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./Shops";
import Modal from "react-modal";

Modal.setAppElement("#root");

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);