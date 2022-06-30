import NextAuth from "next-auth"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"


export default NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers  
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }), 
    FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
  ],
  pages: {
    signIn: "/auth/signin",
  }
})