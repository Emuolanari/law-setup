import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'text', placeholder: 'Enter your email'},
        password: {label: 'Password', type: 'password', placeholder: 'Enter your password'},
      },
      async authorize(credentials) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const user = await res.json();

        if (!res.ok) {
          throw new Error('Wrong username or password');
        }

        if (res.ok && user) {
          return user;
        }

        return null;
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.NEXT_JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.data.access_token,
          refreshToken: user.data.refresh_token,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;

      return session;
    },
  },
  pages: {
    signIn: '/signIn',
  }
}

export default (req, res) => NextAuth(req, res, options);