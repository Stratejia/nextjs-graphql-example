import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Locale, Namespace } from 'types/i18n';

type Props = {
  readonly locale: Locale;
  readonly namespaces: readonly Namespace[];
};

function getServerSideTranslations({ locale, namespaces }: Props) {
  // eslint-disable-next-line functional/prefer-readonly-type
  return serverSideTranslations(locale, namespaces as string[]);
}

export default getServerSideTranslations;
