// LanguageSwitcher.js

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {i18n.language === 'ar' ? (
        <button onClick={() => changeLanguage('en')}>English</button>
      ) : (
        <button onClick={() => changeLanguage('ar')}>العربية</button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
