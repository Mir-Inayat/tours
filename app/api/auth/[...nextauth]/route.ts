import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      role?: string
    }
    expires: ISODateString
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own logic here or connect to a database
        if (credentials?.username === "admin" && credentials?.password === "password123") {
          return { id: "1", name: "Admin User", email: "admin@example.com" };
        }
        return null;
      }
    }),
  ],
  // Add this secret configuration
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = "admin";
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };