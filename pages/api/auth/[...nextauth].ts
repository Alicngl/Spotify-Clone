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
      return true;
    },
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          accessToken: account.access_token,
          //@ts-ignore
          accessTokenExpires: account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }
      // Access token has expired, try to update it
      return token;
    },
    async session({ session, token }) {
      //@ts-ignore
      session.user = token.user;
      //@ts-ignore
      session.accessToken = token.accessToken;
      //@ts-ignore
      session.error = token.error;
      console.log(session, "ssss");
      return session;
    },
  },
};
export default NextAuth(authOptions);
