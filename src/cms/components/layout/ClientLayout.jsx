"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/cms/store/authStore";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PageContainer from "./PageContainer";

export default function ClientLayout({ children }) {
  const { isAuthenticated } = useAuthStore();
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if store is already hydrated
    if (useAuthStore.persist.hasHydrated()) {
      setHasHydrated(true);
    } else {
      // Listen for hydration to complete
      const unsub = useAuthStore.persist.onFinishHydration(() => setHasHydrated(true));
      return () => {
        if (unsub) unsub();
      };
    }
  }, []);

  useEffect(() => {
    if (mounted && hasHydrated) {
      const isAuthPage = pathname.startsWith("/s-cms/login") || pathname.startsWith("/s-cms/forgot-password") || pathname.startsWith("/s-cms/reset-password") || pathname.startsWith("/login");
      if (!isAuthenticated && !isAuthPage) {
        router.push("/s-cms/login");
      } else if (isAuthenticated && isAuthPage) {
        router.push("/s-cms/dashboard");
      }
    }
  }, [isAuthenticated, pathname, mounted, hasHydrated, router]);

  if (!mounted || !hasHydrated) return <div className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#f1af3c] border-t-transparent rounded-full animate-spin"></div></div>;

  const isAuthPage = pathname.startsWith("/s-cms/login") || pathname.startsWith("/s-cms/forgot-password") || pathname.startsWith("/s-cms/reset-password") || pathname.startsWith("/login");

  if (isAuthPage) {
    return <>{children}</>;
  }

  if (!isAuthenticated) return null;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <PageContainer>
          {children}
        </PageContainer>
      </div>
    </div>
  );
}
