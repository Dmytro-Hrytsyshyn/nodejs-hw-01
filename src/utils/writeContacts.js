import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contact) => {
  await fs.writeFile(PATH_DB, JSON.stringify(contact, null, 2));
};
