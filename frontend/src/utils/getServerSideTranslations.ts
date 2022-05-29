import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Locale, Namespace } from 'types/i18n';

type Props = {
  locale: Locale;
  namespaces: Namespace[];
};

function getServerSideTranslations({ locale, namespaces }: Props) {
  return serverSideTranslations(locale, namespaces);
}

export default getServerSideTranslations;
