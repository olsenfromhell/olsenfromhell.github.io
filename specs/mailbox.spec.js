import api from '../framework/controllers';
import BuildMail from '../builder/newMail';

describe('Тестирование сервиса mailbox', () => {

  const key = 'test123';

  test('Доступ с некорректным API key', async () => {

    const user = new BuildMail().addUsername().addDomainName()
        .generate();
    const mail = `${user.username}@${user.domainname}`;

    const response = await api().MailboxUser().get(key, mail);
    const data = await response.json();
    expect(response.status).toEqual(200);
    expect(data.success).toEqual(false);
    expect(data.error.code).toEqual(101);
    expect(data.error.type).toEqual('invalid_access_key');
    expect(data.error.info).toEqual('You have not supplied a valid API Access Key. [Technical Support: support@apilayer.com]');

  });

    test('Доступ без API key', async () => {
      const user = new BuildMail().addUsername().addDomainName()
          .generate();
      const mail = `${user.username}@${user.domainname}`;

      const response = await api().MailboxUser().get('', mail);
      const data = await response.json();
      expect(response.status).toEqual(200);
      expect(data.success).toEqual(false);
      expect(data.error.code).toEqual(101);
      expect(data.error.type).toEqual('missing_access_key');
      expect(data.error.info).toEqual('You have not supplied an API Access Key. [Required format: access_key=YOUR_ACCESS_KEY]');
    });
  });
