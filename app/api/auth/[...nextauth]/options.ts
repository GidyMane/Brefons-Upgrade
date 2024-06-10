import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "@/lib/supabaseClient";
import axios from "axios";

export const Options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", name: "email" },
                password: { label: "password", type: "password", placeholder: "*******" },
            },
            authorize: async (credentials) => {

                // const supabase = await createClient();
                // const { data: userdata, error: loginError } = await supabase.auth.signInWithPassword({
                //   email: credentials?.email as string,
                //   password: credentials?.password as string,

                
                // });

                const res = await axios.post(`${process.env.NEXTAUTH_URL}/api/authentication/login`, {
                    userEmail: credentials?.email,
                    userPassword: credentials?.password
                })

                console.log("auth ",res.status)
                if (res.status === 200) {
                    if (res.data.userdata) {
                        const user: User = {
                            id: res.data.userdata.username,
                            email: res.data.userdata.user_email,
                            group: res.data.userdata.user_group,
                            levels: res.data.userdata.user_level,
                            station: res.data.userdata.station,
                            county: res.data.userdata.county_id,

                        };
                        return user;
                    }

                }



                return null;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: async ({ session, token }) => {
          
            session.user = {
                ...token,

                email: token.email as string,
                group: token.group as string,
                levels: token.levels as string,
                station: token.station as string,
                county: token.county as string


            };
            return session;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.role = user.group;
                token.email = user.email;
                token.group = user.group;
                token.levels = user.levels;
                token.station = user.station;
                token.county = user.county;


            }
            return token;
        },
    },
    // adapter: SupabaseAdapter({
    //     url: process.env.SUPABASE_URL ?? "",
    //     secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
    // }),
    pages: {
        signIn: "/Login",
    },
};

export default NextAuth(Options);
