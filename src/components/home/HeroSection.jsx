"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BookOpen, Trophy, Clock, ChevronRight, CheckCircle2, ArrowRight, Sparkles, Users, TrendingUp, MonitorPlay, ThermometerSnowflake, Fingerprint, Star, MapPin } from "lucide-react";
import { HERO_DATA } from "@/constants/homeData";
import { cn } from "@/lib/utils";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-b from-[#FFFDF6] to-[#FFF9E6] dark:from-background dark:to-surface">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.2] mix-blend-overlay dark:opacity-[0.1]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      {/* Almost invisible pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Soft golden glow — warm atmosphere */}
      <div className="absolute top-[10%] left-[5%] w-[800px] h-[800px] bg-primary/15 dark:bg-primary/5 blur-[180px] rounded-full pointer-events-none" />
      {/* Secondary warm glow */}
      <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
    </div>
  );
}

// Desktop Version — Full Animations & Floating Elements
function DashboardCompositionDesktop() {
  return (
    <div className="w-full relative z-20 mx-auto lg:ml-auto h-[450px] sm:h-[500px] hidden sm:block">
      {/* Decorative Glow Removed */}

      {/* Central Admissions Card */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] bg-gradient-to-b from-white/95 to-white/75 dark:from-surface/95 dark:to-surface/75 backdrop-blur-xl border border-white/80 dark:border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_40px_-10px_rgba(0,118,255,0.15)] dark:shadow-none ring-1 ring-white dark:ring-border rounded-2xl p-8 z-20 cursor-default"
        initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
        animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 }
        }}
      >
        <div className="flex items-center justify-between mb-6 border-b border-border-color pb-4">
          <div>
            <h3 className="text-xl font-bold text-heading">Admissions Open</h3>
            <p className="text-sm text-paragraph font-medium mt-1">Academic Session 2026-2027</p>
          </div>
          <span className="bg-accent-red/10 text-accent-red px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
            Filling Fast
          </span>
        </div>
        
        <div className="space-y-4 mb-8">
           <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
             </div>
             <span className="text-sm font-semibold text-heading">Classes 1st to 12th</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
             </div>
             <span className="text-sm font-semibold text-heading">Science & Commerce</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
             </div>
             <span className="text-sm font-semibold text-heading">Board Mastery</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
             </div>
             <span className="text-sm font-semibold text-heading">PCMB Batches</span>
           </div>
        </div>
        
        <Link href="/admission">
          <Button size="lg" className="w-full rounded-md bg-primary hover:bg-primary-hover text-[#0F2E4E] font-semibold shadow-lg dark:shadow-none hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)] dark:hover:shadow-none transition-all">
            Enroll Now <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>

        {/* Attached AC Classrooms Pill */}
        <motion.div 
          className="absolute -top-8 -left-12 bg-white/95 dark:bg-surface/95 backdrop-blur-md border border-border/80 shadow-xl dark:shadow-none rounded-full p-2 pr-4 flex items-center gap-3 z-30"
          animate={{ y: -5 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <ThermometerSnowflake className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-heading whitespace-nowrap">AC Classrooms</span>
        </motion.div>
      </motion.div>

      {/* Floating Micro-Elements */}
      {/* 2. Smart Panel Pill */}
      <motion.div 
        className="absolute bottom-[25%] -left-10 bg-white/95 dark:bg-surface/95 backdrop-blur-sm border border-border shadow-lg dark:shadow-none rounded-full p-2 pr-4 flex items-center gap-3 z-30"
        animate={{ y: -8 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
          <MonitorPlay className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold text-heading whitespace-nowrap">Smart Panels</span>
      </motion.div>

      {/* 3. Results Metric */}
      <motion.div 
        className="absolute top-[5%] -right-2 bg-white/95 dark:bg-surface/95 backdrop-blur-sm border border-border shadow-lg dark:shadow-none rounded-xl p-4 flex items-center gap-4 z-10"
        animate={{ y: -15 }}
        transition={{ duration: 3.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
      >
        <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-heading">Result-Oriented</div>
          <div className="text-[10px] font-bold text-paragraph uppercase tracking-wider whitespace-nowrap">Learning Focus</div>
        </div>
      </motion.div>

      {/* 4. Student Count Metric */}
      <motion.div 
        className="absolute bottom-[15%] -right-6 bg-white/95 dark:bg-surface/95 backdrop-blur-sm border border-border shadow-lg dark:shadow-none rounded-xl p-4 flex items-center gap-4 z-30"
        animate={{ y: 15 }}
        transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-extrabold text-heading">Trusted Coaching</div>
          <div className="text-[10px] font-bold text-paragraph uppercase tracking-wider whitespace-nowrap">Since 2021</div>
        </div>
      </motion.div>
      
      {/* 5. Biometric Attendance Pill */}
      <motion.div 
        className="absolute -bottom-2 left-[25%] bg-white/95 dark:bg-surface/95 backdrop-blur-sm border border-border shadow-lg dark:shadow-none rounded-full p-2 pr-4 flex items-center gap-3 z-10"
        animate={{ y: -5 }}
        transition={{ duration: 2.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-500/20 flex items-center justify-center text-slate-600 dark:text-slate-400">
          <Fingerprint className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold text-heading whitespace-nowrap">Biometric Sync</span>
      </motion.div>
    </div>
  );
}

// Mobile Version — Simplified, static, perfectly centered
function DashboardCompositionMobile() {
  return (
    <div className="w-full relative z-20 flex items-center justify-center sm:hidden mt-8">
      {/* Decorative Glow Removed */}

      {/* Central Admissions Card - Standard flow layout, NO absolute positioning */}
      <div className="w-full max-w-[340px] bg-gradient-to-b from-white/95 to-white/75 dark:from-surface/95 dark:to-surface/75 backdrop-blur-xl border border-white/80 dark:border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_40px_-10px_rgba(0,118,255,0.15)] dark:shadow-none ring-1 ring-white dark:ring-border rounded-2xl p-6 z-20 mx-auto">
        
        <div className="flex items-center justify-between mb-5 border-b border-border-color pb-4">
          <div>
            <h3 className="text-xl font-bold text-heading">Admissions Open</h3>
            <p className="text-xs text-paragraph font-medium mt-1">Academic Session 2026-2027</p>
          </div>
          <span className="bg-accent-red/10 text-accent-red px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
            Filling Fast
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
           <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
             </div>
             <span className="text-sm font-semibold text-heading">Classes 1st to 12th</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
             </div>
             <span className="text-sm font-semibold text-heading">Science & Commerce</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
             </div>
             <span className="text-sm font-semibold text-heading">Board Mastery</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
             </div>
             <span className="text-sm font-semibold text-heading">PCMB Batches</span>
           </div>
        </div>
        
        <Link href="/admission" className="block w-full">
          <Button size="lg" className="w-full rounded-md bg-primary text-[#0F2E4E] font-semibold shadow-lg dark:shadow-none">
            Enroll Now <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>

      </div>
    </div>
  );
}

export function HeroSection() {
  const [heroContent, setHeroContent] = useState(HERO_DATA);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/cms/home/hero");
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setHeroContent(content.data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch live hero data, falling back to static", error);
      }
    };
    fetchHeroData();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-40 pb-20 overflow-hidden bg-white dark:bg-surface selection:bg-primary-deep selection:text-white">
      <HeroBackground />
      
      <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24 w-full">
          
          {/* Left: Serious Academic Typography */}
          <motion.div 
            className="flex flex-col items-start text-left max-w-[600px] w-full pt-10 lg:pt-0"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Institute Tagline */}
            <motion.div variants={fadeUpVariant} className="mb-6">
              <div className="inline-flex items-start sm:items-center gap-2 py-2 px-4 sm:px-5 rounded-xl sm:rounded-full bg-[#FFF8E7] dark:bg-surface border border-primary/30 shadow-[0_4px_14px_0_rgba(212,175,55,0.2)] dark:shadow-none text-[#0F2E4E] dark:text-[#F6E8B1]">
                <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span className="font-semibold text-xs sm:text-sm tracking-wide">{heroContent.badge}</span>
              </div>
            </motion.div>

            {/* Academic Headline */}
            <motion.h1 
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-[1.15] tracking-tight mb-6"
            >
              {(() => {
                const words = (heroContent.title || "").split(" ");
                if (words.length <= 1) return heroContent.title;
                const lastWord = words.pop();
                return (
                  <>
                    {words.join(" ")} <span className="text-primary">{lastWord}</span>
                  </>
                );
              })()}
            </motion.h1>

            <motion.p 
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-paragraph mb-8 leading-relaxed font-medium"
            >
              {heroContent.description}
            </motion.p>

            {/* Structured CTAs */}
            <motion.div 
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/admission" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto min-w-[180px] rounded-md text-base" showArrow>
                  Enroll Now
                </Button>
              </Link>
              <Link href="/courses" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[180px] rounded-md text-base">
                  Explore Courses
                </Button>
              </Link>
            </motion.div>
            
            {/* Trust Identity Text (Replaced Fake Numbers) */}
            <motion.div variants={fadeUpVariant} className="mt-8 flex items-center gap-4 text-sm font-semibold text-paragraph">
               <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white dark:border-border" />
                 <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-white dark:border-border" />
                 <div className="w-8 h-8 rounded-full bg-accent-red/20 border-2 border-white dark:border-border" />
               </div>
               <span>Preferred Coaching in Mankhurd, Mumbai</span>
            </motion.div>
            
            {/* Real Trust Elements Strip */}
            <motion.div variants={fadeUpVariant} className="mt-10 pt-6 border-t border-border-color/60 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-heading">
               <div className="flex items-center gap-1.5">
                 <div className="flex text-accent-dark">
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                 </div>
                 <span>Highly Rated by Parents</span>
               </div>
               <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border-color" />
               <div className="flex items-center gap-1.5 text-paragraph">
                 <MapPin className="w-4 h-4 text-primary" />
                 <span>Mankhurd, Mumbai</span>
               </div>
               <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border-color" />
               <div className="flex items-center gap-1.5 text-paragraph">
                 <Trophy className="w-4 h-4 text-accent-red" />
                 <span>Result-Oriented Coaching</span>
               </div>
            </motion.div>

          </motion.div>

          {/* Right: Dashboard Composition */}
          <DashboardCompositionDesktop />
          <DashboardCompositionMobile />

        </div>
      </div>
    </section>
  );
}
