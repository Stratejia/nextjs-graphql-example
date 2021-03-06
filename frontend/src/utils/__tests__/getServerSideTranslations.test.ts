import { Namespace } from 'types/i18n';

const stubServerSideTranslations = 'dummyValue';
const mockServerSideTranslations = jest.fn().mockResolvedValue(stubServerSideTranslations);

jest.mock('next-i18next/serverSideTranslations', () => ({
  __esModule: true,
  serverSideTranslations: mockServerSideTranslations,
}));

// TODO: Necessary for mock to work, but imports should be first
// eslint-disable-next-line import/first
import getServerSideTranslations from 'utils/getServerSideTranslations';

describe('getServerSideTranslations', () => {
  describe('Given locale and namespaces', () => {
    const locale = 'en';
    const namespaces: readonly Namespace[] = ['common'];

    test('Then get server side translations', async () => {
      const serverSideTranslations = await getServerSideTranslations({ locale, namespaces });

      expect(serverSideTranslations).toBe(stubServerSideTranslations);
      expect(mockServerSideTranslations).toHaveBeenCalledWith(locale, namespaces);
    });
  });
});
