import Head from 'next/head';
import { Page } from '../components/common/layouts';
import { AppTitle, Body1 } from '../components/common/typography';

function Home() {
  return (
    <Page>
      <Head>
        <title>Next.js + GraphQL example</title>
        <meta name="description" content="Next.js and Apollo GraphQL example made by Stratéjia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppTitle>Next Recipes</AppTitle>

        <Body1>A website about recipes (obviously under construction)</Body1>
      </main>
    </Page>
  );
}

export default Home;
