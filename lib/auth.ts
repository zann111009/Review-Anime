import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers:[Credentials({ credentials:{ login:{label:"Username or email"}, password:{label:"Password",type:"password"} }, async authorize(credentials) { const login=String(credentials?.login||""); const password=String(credentials?.password||""); const user=await prisma.user.findFirst({where:{OR:[{email:login},{username:login}]}}); if(!user || !(await bcrypt.compare(password,user.password))) return null; return {id:user.id,name:user.name??user.username,email:user.email,role:user.role,username:user.username}; } })],
  session:{strategy:"jwt"}, pages:{signIn:"/login"}, callbacks:{ jwt({token,user}) { if(user){token.id=user.id;token.role=(user as {role:string}).role;token.username=(user as {username:string}).username;} return token; }, session({session,token}) { if(session.user){session.user.id=token.id as string;session.user.role=token.role as "USER"|"ADMIN";session.user.username=token.username as string;} return session; } }
});
