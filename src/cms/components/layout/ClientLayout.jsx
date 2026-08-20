"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/cms/store/authStore";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PageContainer from "./PageContainer";
import { io } from "socket.io-client";
import { Toaster, toast } from "sonner";
import { BellRing } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const playNotificationSound = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
    oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); // A5
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.5);
  } catch (e) {
    console.log('Audio playback failed', e);
  }
};

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

  useEffect(() => {
    let socket;
    if (mounted && hasHydrated && isAuthenticated) {
      socket = io(API_BASE_URL);

      socket.on("connect", () => {
        socket.emit("join-room", "cms");
      });

      socket.on("new-admission", (inquiry) => {
        playNotificationSound();
        toast.custom((t) => (
          <div className="flex gap-4 p-4 bg-white border border-[#f1af3c] rounded-xl shadow-lg items-center relative overflow-hidden min-w-[300px]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f1af3c]" />
            <div className="w-10 h-10 bg-[#f1af3c]/10 rounded-full flex items-center justify-center shrink-0">
              <BellRing className="w-5 h-5 text-[#f1af3c]" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-navy">New Admission Inquiry!</h4>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">{inquiry.studentName} applied for {inquiry.course}</p>
            </div>
            <button 
              onClick={() => {
                toast.dismiss(t);
                router.push("/s-cms/admissions");
              }}
              className="px-3 py-1.5 bg-[#f1af3c] hover:bg-[#d99d36] text-white text-xs font-bold rounded-lg transition-colors shrink-0"
            >
              View
            </button>
          </div>
        ), { duration: 8000 });
      });
    }

    return () => {
      if (socket) socket.disconnect();
    };
  }, [isAuthenticated, mounted, hasHydrated, router]);

  if (!mounted || !hasHydrated) return <div className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#f1af3c] border-t-transparent rounded-full animate-spin"></div></div>;

  const isAuthPage = pathname.startsWith("/s-cms/login") || pathname.startsWith("/s-cms/forgot-password") || pathname.startsWith("/s-cms/reset-password") || pathname.startsWith("/login");

  if (isAuthPage) {
    return <>{children}</>;
  }

  if (!isAuthenticated) return null;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Toaster position="top-right" expand={false} />
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
