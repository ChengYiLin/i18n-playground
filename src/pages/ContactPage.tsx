
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (This is just a demo)');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">{t('contact.title')}</h1>
        <h2 className="text-2xl font-semibold mb-8 text-muted-foreground text-center">{t('contact.subtitle')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.name')}</Label>
                <Input id="name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.email')}</Label>
                <Input id="email" type="email" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.message')}</Label>
                <Textarea id="message" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full">{t('contact.send')}</Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5" />
                  {t('contact.address')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('contact.addressLine')}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  {t('contact.phone')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('contact.phoneNumber')}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5" />
                  {t('contact.emailAddress')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t('contact.emailAddressValue')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
