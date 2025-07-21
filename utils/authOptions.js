import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful sign-in
    async signIn({ profile }) {
      // 1 Connect to the database
      // 2 Check if the user exists in the database
      // 3 If not, create a new user
      // 4 Return true to indicate successful sign-in
    },
    // Session callback function that modifies the session object
    async session({ session }) {
      // 1. Get the user from database
      // 2. Add user ID to session object
      // 3. Return the modified session object
    },
  },
};
