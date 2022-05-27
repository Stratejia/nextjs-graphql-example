import getServerSideTranslations from '../getServerSideTranslations';
import { Namespace } from '../../types/i18n';

const stubServerSideTranslations = 'dummyValue';
const mockServerSideTranslations = jest.fn().mockResolvedValue(stubServerSideTranslations);

// TODO: Mock not working
jest.mock('next-i18next/serverSideTranslations', () => ({
  serverSideTranslations: mockServerSideTranslations,
}));

describe('getServerSideTranslations', () => {
  describe('Given locale and namespaces', () => {
    const locale = 'en';
    const namespaces: Namespace[] = ['common'];

    it('Should get server side translations', async () => {
      const serverSideTranslations = await getServerSideTranslations({ locale, namespaces });

      expect(serverSideTranslations).toBe(stubServerSideTranslations);
      expect(mockServerSideTranslations).toHaveBeenCalledWith(locale, namespaces);
    });
  });
});
