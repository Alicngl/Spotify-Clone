import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }: any) {
      console.log(account, user, "signIn");

      return true;
    },

    async session({ session, token }) {
      console.log(session, "SESSION");

      return session;
    },
    async jwt({ token, account }) {
      return token;
    },
  },
};
export default NextAuth(authOptions);
