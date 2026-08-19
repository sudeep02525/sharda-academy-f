"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/cms/store/authStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { API_BASE_URL } from "@/cms/utils/config";

const loginSchema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [authView, setAuthView] = useState("login"); // 'login' | 'forgot'
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Need to import axios at the top if we use it here. Or we can just use fetch.
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password })
      });

      const responseData = await res.json();
      
      if (responseData.success && responseData.token) {
        login(responseData.user, responseData.token);
        router.push("/s-cms/dashboard");
      } else {
        alert(responseData.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Something went wrong during login. Is the backend running?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-beige dotbg noise overflow-x-hidden relative">
      {/* 🎨 Left Panel: High-End Showcase */}
      <div className="hidden lg:flex lg:col-span-6 bg-[#060f22] text-white flex-col justify-between p-12 relative overflow-hidden border-r border-white/5">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-gold/10 to-amber-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -right-40 w-[650px] h-[650px] bg-gradient-to-tr from-navy/30 to-gold/5 rounded-full blur-[160px] pointer-events-none"></div>

        {/* Branding */}
        <div className="flex items-center gap-3 relative z-10">
          <img src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png" alt="Logo" className="w-12 h-12 rounded-xl object-contain shrink-0" />
          <div className="text-left">
            <h2 className="text-lg font-black text-gold tracking-widest uppercase leading-none">
              SHARDA ACADEMY
            </h2>
            <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase leading-none mt-1.5">
              CMS Management Portal
            </p>
          </div>
        </div>

        {/* Central Showcase */}
        <div className="my-auto space-y-8 relative z-10 max-w-lg text-left">
          <div className="space-y-3">
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-lg inline-block">
              Content Control
            </span>
            <h1 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white font-display">
              Manage the Academy's{" "}
              <span className="bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            <p className="text-xs text-slate-200/90 leading-relaxed font-semibold">
              Welcome to the CMS hub of Sharda Academy. Securely manage website pages, 
              update hero sections, organize the media library, configure global SEO settings, 
              and control all public-facing information from one unified platform.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl space-y-4">
            <div className="text-xs font-black uppercase tracking-wider text-gold">
              CMS Capabilities:
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div>
                  <div className="font-bold text-white text-[11px]">Page Builder</div>
                  <p className="text-[10px] text-slate-200/70 mt-0.5">Edit dynamic page contents</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <div>
                  <div className="font-bold text-white text-[11px]">Media Library</div>
                  <p className="text-[10px] text-slate-200/70 mt-0.5">Manage assets and galleries</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div>
                  <div className="font-bold text-white text-[11px]">Global SEO</div>
                  <p className="text-[10px] text-slate-200/70 mt-0.5">Control search visibility</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <div>
                  <div className="font-bold text-white text-[11px]">System Integrity</div>
                  <p className="text-[10px] text-slate-200/70 mt-0.5">Manage users and RBAC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative z-10 pointer-events-none"></div>
      </div>

      {/* 📝 Right Panel: Sign-in Section */}
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center p-6 sm:p-12 relative z-10">
        
        {/* Mobile Header Branding */}
        <div className="flex flex-col items-center mb-6 text-center lg:hidden">
          <img src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png" alt="Logo" className="w-14 h-14 object-contain shrink-0 mb-2" />
          <h2 className="text-lg font-black text-navy uppercase tracking-tight">SHARDA ACADEMY</h2>
          <p className="text-[9px] font-bold text-gold uppercase tracking-widest mt-0.5">CMS Management Portal</p>
        </div>

        {/* Unified White Card */}
        <div className="w-full max-w-md p-8 rounded-2xl bg-white border border-gold/30 shadow-2xl space-y-6">
          {authView === "login" && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs animate-fade-in-up" autoComplete="off">
              <div className="text-center pb-2 border-b border-slate-100">
                <h3 className="text-sm font-black uppercase tracking-wider text-navy">Secure CMS Sign In</h3>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Authorized Access Only</p>
              </div>

              <div className="space-y-4">
                {/* Fake inputs to trick browser autocomplete */}
                <input type="email" style={{ display: 'none' }} />
                <input type="password" style={{ display: 'none' }} />
                
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Admin Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="cms@gmail.com"
                    autoComplete="new-password"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.email.message}</p>}
                </div>
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className="w-full px-4 py-2.5 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 focus:outline-none cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.password.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl text-xs font-extrabold text-[#0a1835] bg-[#f1af3c] hover:bg-amber-400 shadow-md shadow-[#f1af3c]/20 uppercase tracking-widest transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer mt-2"
              >
                {isLoading ? "AUTHENTICATING..." : "SIGN IN TO CMS"}
              </button>

              <button
                type="button"
                onClick={() => setAuthView("forgot")}
                className="block w-full text-center text-[10px] font-bold text-slate-500 hover:text-[#0a1835] uppercase tracking-wider transition-colors duration-200 cursor-pointer pt-2"
              >
                Forgot Password?
              </button>
            </form>
          )}

          {authView === "forgot" && (
            <div className="space-y-4 text-xs animate-fade-in-up">
               <div className="text-center pb-2 border-b border-slate-100">
                <h3 className="text-sm font-black uppercase tracking-wider text-navy">Reset Password</h3>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Enter email to receive reset link</p>
              </div>
              <div className="text-left">
                <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Admin Email</label>
                <input
                  type="email"
                  placeholder="cms@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all"
                />
              </div>
              <button
                type="button"
                className="w-full py-3 rounded-xl text-xs font-extrabold text-[#0a1835] bg-[#f1af3c] hover:bg-amber-400 shadow-md shadow-[#f1af3c]/20 uppercase tracking-widest transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer"
              >
                SEND RESET LINK
              </button>
              <button
                type="button"
                onClick={() => setAuthView("login")}
                className="block w-full text-center text-[10px] font-bold text-slate-500 hover:text-[#0a1835] uppercase tracking-wider transition-colors duration-200 cursor-pointer pt-2"
              >
                Back to Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
