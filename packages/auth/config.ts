import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import prisma from "db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import './types'

const emailConfig = {
  server: {
    service: "Mandrill",
    auth: {
      user: "MandrillUser",
      pass: process.env.MANDRILL_API_KEY,
    },
    logger: process.env.NODE_ENV === "development",
  },
  from: process.env.MANDRILL_EMAIL_FROM,
}

const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
  authorizationUrl:
    "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
}

export const config: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: { strategy: "jwt" },
  providers: [EmailProvider(emailConfig), GoogleProvider(googleConfig)],
  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean|string}  Return `true` to allow sign in
     *                           Return `false` to deny access
     *                           Return `string` to redirect to (eg.: "/unauthorized")
     */
    async signIn() {
      return true
    },
    /**
     * @param  {string} url      URL provided as callback URL by the client
     * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
     * @return {string}          URL the client will be redirect to
     */
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url
      }

      return baseUrl
    },
    /**
     * @param  {object}  token     Decrypted JSON Web Token
     * @param  {object}  user      User object      (only available on sign in)
     * @param  {object}  account   Provider account (only available on sign in)
     * @param  {object}  profile   Provider profile (only available on sign in)
     * @param  {boolean} isNewUser True if new user (only available on sign in)
     * @return {object}            JSON Web Token that will be saved
     */
    async jwt({ token, user, account }) {
      // Add access_token to the token right after signin
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }

      if (user?.id) {
        token.id = user.id
      }

      return token
    },
    /**
     * @param  {object} session      Session object
     * @param  {object} user         User object    (if using database sessions)
     * @return {object}              Session that will be returned to the client
     */
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id
      }

      return session
    },
  },
}
