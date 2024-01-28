import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';

const resources = {
  ar: {
    translation: require('./locales/ar/translation.json'),
  },
  en: {
    translation: require('./locales/en/translation.json'),
  },
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'ar', // Set the default language to Arabic
    fallbackLng: 'ar', // Set the fallback language to Arabic
    resources, // Pass the defined resources
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Adjust the path to your translations
    },
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
