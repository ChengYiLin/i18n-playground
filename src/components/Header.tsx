import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">i18n Demo</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">
            {t('header.home')}
          </Link>
          <Link to="/about" className="hover:underline">
            {t('header.about')}
          </Link>
          <Link to="/contact" className="hover:underline">
            {t('header.contact')}
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
