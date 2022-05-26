import MailboxUser from './mailbox.controller';

const api = () => ({
  MailboxUser: () => ({ ...MailboxUser }),
});

export default api;
