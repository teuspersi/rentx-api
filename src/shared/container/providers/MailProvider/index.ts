import { container } from 'tsyringe';
import EtherealMailProvider from './implementations/EtherealMailProvider';
import IMailProvider from './IMailProvider';
import SESMailProvider from './implementations/SESMailProvider';

const mailProvider = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  mailProvider[process.env.MAIL_PROVIDER],
);
