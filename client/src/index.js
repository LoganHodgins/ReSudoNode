import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CurrentContextProvider } from './store/current-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CurrentContextProvider><App /></CurrentContextProvider>);