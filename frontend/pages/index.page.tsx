import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Page from '../components/common/layouts/Page';
import AppTitle from '../components/common/typography/AppTitle';
import Body1 from '../components/common/typography/Body1';
import { Locale, Namespace } from '../types/i18n';
import getServerSideTranslations from '../utils/getServerSideTranslations';

function Home() {
  const { t } = useTranslation('home');

  return (
    <Page>
      <Head>
        <title>{t('nextJsGqlExample')}</title>
        <meta name="description" content={t('nextJsGqlExampleMadeByStratejia')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppTitle>{t('nextRecipes')}</AppTitle>

        <Body1>{t('websiteAboutRecipes')}</Body1>
      </main>
    </Page>
  );
}

async function getStaticProps({ locale }: { locale: Locale }) {
  return {
    props: {
      ...(await getServerSideTranslations({ locale, namespaces: [Namespace.Home] })),
    },
  };
}

export default Home;
export { getStaticProps };
