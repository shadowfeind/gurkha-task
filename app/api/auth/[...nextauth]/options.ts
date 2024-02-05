import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your password"
                }
            },
           async authorize(credentials) {
               const user = {id: "43", name: "kiran", password: "nicela"}

               if(credentials?.username === user.name && credentials.password === user.password){
                    return user
               }else{
                return null
               }
           },
        })
    ],
}