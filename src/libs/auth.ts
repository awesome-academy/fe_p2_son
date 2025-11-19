import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { hash, compare } from 'bcryptjs';
import { User } from '../types/User';
import { getTranslations } from 'next-intl/server';

export async function findUserByEmail(email: string) {
  const dbPath = path.join(process.cwd(), 'db.json');
  const dbContent = await readFile(dbPath, 'utf-8');
  const db = JSON.parse(dbContent);
  const user = db.users.find((u: any) => u.email === email);
  return user;
}

export async function registerUser(username: string, email: string, password: string) {
  const t = await getTranslations('Auth');
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error(t('emailAlreadyExists'));
  }

  const hashedPassword = await hash(password, 10);

  const dbPath = path.join(process.cwd(), 'db.json');
  const dbContent = await readFile(dbPath, 'utf-8');
  const db = JSON.parse(dbContent);

  const newUser: User = {
    id: (db.users.length + 1).toString(),
    username,
    email,
    password: hashedPassword,
    role: 'user',
  };

  db.users.push(newUser);

  await writeFile(dbPath, JSON.stringify(db, null, 2), 'utf-8');

  return newUser;
}

export async function loginUser(email: string, password: string) {
  const t = await getTranslations('Auth');
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error(t('invalidEmailOrPassword'));
  }

  const isValidPassword = await compare(password, user.password);
  if (!isValidPassword) {
    throw new Error(t('invalidEmailOrPassword'));
  }

  return user;
}
