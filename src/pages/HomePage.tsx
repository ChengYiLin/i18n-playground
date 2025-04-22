import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
        <h2 className="text-2xl font-semibold mb-4 text-muted-foreground">{t('subtitle')}</h2>
        <p className="text-lg mb-8">{t('description')}</p>
        <Button size="lg" className="mx-auto">{t('button')}</Button>
      </div>
    </div>
  );
};

export default HomePage;
