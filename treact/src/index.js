import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./Rates";
import Modal from "react-modal";
import News from "./News";
import Question from "./Questions";
import Rates from "./Rates";
Modal.setAppElement("#root");

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Question/>);