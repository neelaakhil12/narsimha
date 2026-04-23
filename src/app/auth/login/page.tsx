"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/5 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="StayVago Hotels Logo" 
                width={140} 
                height={140} 
                className="h-24 w-auto object-contain"
              />
              <span className="text-3xl font-serif font-bold text-primary">StayVago Hotels</span>
            </Link>
            <p className="mt-4 text-muted-foreground">Sign in to manage your luxury stays</p>
        </div>

        <Card className="rounded-3xl border-none shadow-2xl overflow-hidden">
          <CardHeader className="bg-primary text-white p-8 text-center">
            <CardTitle className="text-2xl font-serif">Welcome Back</CardTitle>
            <CardDescription className="text-white/70">Enter your details to access your account</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="name@example.com" className="pl-10 rounded-xl h-12 bg-primary/5 border-none" />
                </div>
              </div>
              <Button className="w-full h-12 rounded-xl text-lg font-bold" disabled={isLoading}>
                Request OTP
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground font-bold">Or continue with</span></div>
            </div>

            <Button 
                variant="outline" 
                className="w-full h-12 rounded-xl border-primary/10 hover:bg-primary/5 flex items-center justify-center"
                onClick={handleGoogleLogin}
                disabled={isLoading}
            >
              <Globe className="mr-2 h-5 w-5" />
              Google
            </Button>

            <p className="text-center text-xs text-muted-foreground px-8">
              By clicking continue, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
