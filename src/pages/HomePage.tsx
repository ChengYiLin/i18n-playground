
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t('home.title')}</h1>
        <h2 className="text-2xl font-semibold mb-4 text-muted-foreground">{t('home.subtitle')}</h2>
        <p className="text-lg mb-8">{t('home.description')}</p>
        <Button size="lg" className="mx-auto">{t('home.button')}</Button>
      </div>
      
      {/* Demo section with some i18n examples */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-4">react-i18next</h3>
          <p>A powerful internationalization framework for React based on i18next.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-4">LocalStorage</h3>
          <p>User language preferences are saved to localStorage for persistence.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-4">多語言支持</h3>
          <p>支持多種語言，包括繁體中文和英文。</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
