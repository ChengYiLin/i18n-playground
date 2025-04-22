
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">{t('about.title')}</h1>
        <h2 className="text-2xl font-semibold mb-8 text-muted-foreground text-center">{t('about.subtitle')}</h2>
        
        <div className="mb-12">
          <p className="text-lg mb-6">{t('about.description')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>{t('about.mission')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('about.missionText')}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('about.vision')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('about.visionText')}</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-muted p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">i18n Demo</h3>
          <p>
            This application demonstrates internationalization (i18n) capabilities with react-i18next.
            The interface language can be changed using the language switcher in the header, and your preference
            will be saved to localStorage for future visits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
