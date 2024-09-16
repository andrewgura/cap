"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./hooks/Auth";

export default function NotFound() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    // If the user is signed in, redirect to dashboard
    // Otherwise, redirect to login page
    const redirectPath = user ? "/dashboard" : "/login";
    router.push(redirectPath);
  }, [router, user]);

  return null;
}
