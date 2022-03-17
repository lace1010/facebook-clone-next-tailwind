import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import { getSession } from "next-auth/react";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // ...add more providers here
  ],
});
