"use client";

import React, { useState } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { CheckCircle, User, Mail, Shield, KeyRound, AlertCircle, ArrowRight } from "lucide-react";
import { useAuthStore } from "@/cms/store/authStore";

export default function ProfilePage() {
  const { user } = useAuthStore();
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  
  // OTP Step State
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [otp, setOtp] = useState("");

  const handleRequestChange = async (e) => {
    e.preventDefault();
    setError("");
    
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    
    if (newPassword.length < 6) {
      setError("New password must be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/request-password-change`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, currentPassword })
      });
      const data = await res.json();
      
      if (res.ok) {
        setIsOtpStep(true);
      } else {
        setError(data.message || "Failed to request password change.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/verify-password-change`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, otp, newPassword })
      });
      const data = await res.json();
      
      if (res.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setIsOtpStep(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setOtp("");
      } else {
        setError(data.message || "Invalid or expired OTP.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      {/* Custom UI Toast */}
      {showToast && (
        <div className="fixed top-20 right-4 z-[9999] animate-fade-in-up flex items-center gap-3 bg-white border border-green-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] rounded-xl p-4 min-w-[300px]">
          <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-slate-800">Password Changed</h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Your password has been securely updated.</p>
          </div>
        </div>
      )}

      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-2xl font-black text-navy uppercase tracking-tight">My Profile</h1>
        <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Manage your account details and security</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center animate-fade-in-up">
          <div className="w-24 h-24 bg-gradient-to-br from-[#f1af3c] to-amber-500 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-lg mb-6">
            {user?.name?.[0]?.toUpperCase() || "A"}
          </div>
          <h2 className="text-xl font-bold text-slate-800">{user?.name || "Admin"}</h2>
          
          <div className="w-full mt-8 space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Mail className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</p>
                <p className="text-sm font-semibold text-slate-700">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Shield className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Role</p>
                <p className="text-sm font-semibold text-slate-700 uppercase">{user?.role || "Admin"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security / Password Change */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
              <KeyRound className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Change Password</h3>
              <p className="text-xs font-medium text-slate-500">Ensure your account is using a long, random password to stay secure.</p>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm font-medium">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {!isOtpStep ? (
            <form onSubmit={handleRequestChange} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Current Password</label>
                <input 
                  type="password" 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:border-[#f1af3c] focus:bg-white transition-all"
                  placeholder="Enter your current password"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">New Password</label>
                  <input 
                    type="password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:border-[#f1af3c] focus:bg-white transition-all"
                    placeholder="Enter new password"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Confirm New Password</label>
                  <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:border-[#f1af3c] focus:bg-white transition-all"
                    placeholder="Confirm new password"
                    required
                  />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 bg-[#f1af3c] hover:bg-amber-500 text-[#0a1835] text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(241,175,60,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(241,175,60,0.6)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Verifying..." : "Update Password"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-5 animate-fade-in-up">
              <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                <h4 className="text-sm font-bold text-slate-800 mb-2">Security Verification</h4>
                <p className="text-xs text-slate-600 font-medium">
                  We've sent a 6-digit OTP to <strong>{user?.email}</strong>. Please enter it below to confirm your password change.
                </p>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Enter OTP</label>
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-center tracking-[0.5em] text-lg font-black focus:outline-none focus:border-[#f1af3c] focus:bg-white transition-all"
                  placeholder="------"
                  maxLength={6}
                  required
                />
              </div>
              <div className="pt-4 flex justify-between items-center">
                <button 
                  type="button"
                  onClick={() => setIsOtpStep(false)}
                  className="px-6 py-3 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 bg-[#0a1835] hover:bg-navy text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(10,24,53,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(10,24,53,0.6)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Verifying..." : "Verify & Change"}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </PageContainer>
  );
}
