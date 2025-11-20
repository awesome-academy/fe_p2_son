import NextAuth, { AuthOptions } from "next-auth";
import Google from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { findUserByEmail } from "@/libs/auth";
import { getTranslations } from 'next-intl/server';

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const t = await getTranslations('Auth');

        if (!credentials?.email || !credentials?.password) {
          throw new Error(t('emailAndPasswordRequired'));
        }

        const user = await findUserByEmail(credentials.email);

        if (!user || !user.password) {
          throw new Error(t('invalidEmailOrPassword'));
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error(t('invalidEmailOrPassword'));
        }

        return {
          id: user.id,
          email: user.email,
          username: user.username,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.role = token.role as 'user' | 'admin';
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
