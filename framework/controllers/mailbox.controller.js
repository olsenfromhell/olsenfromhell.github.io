import fetch from 'node-fetch';
import urls from '../config/urls';

const MailboxController = {
  get: async (apiKey, email) => {
    const r = await fetch(`${urls.mailbox}api/check?access_key=${apiKey}&email=${email}`, { method: 'GET' });
    return r;
  },
};

export default MailboxController;
