import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

const Page = () => {
  const { locale, push } = useRouter();
  const t = useTranslations('common');

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    push('app/baitap/bt3/en', 'app/baitap/bt3/vi', { locale: newLocale });
  };

  return (
    <div>
      <select value={locale} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Page;