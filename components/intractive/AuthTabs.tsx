"use client"
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const AuthTabs = () => {
  return (
    <Tabs defaultValue="signup" className="w-[400px] max-w-full min-w-fit">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <Card className="w-full max-w-md bg-white/70 rounded-3xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl tracking-tight">Alqami</CardTitle>
          <CardDescription className=" ">
            Welcome back! Please enter your details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-zinc-500">
            By continuing, you agree to our
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service 
            </Link>
             {" "}and{" "}
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy.
            </Link>
          </p>
        </CardFooter>
      </Card>
    </Tabs>
  );
};

export default AuthTabs;
