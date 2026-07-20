"use client";

import { REAL_ACHIEVEMENTS } from "@/constants/homeData";
import { Fade } from "@/components/animations/Fade";
import { CheckCircle2, Trophy, ThermometerSnowflake, MonitorPlay, Fingerprint, ClipboardList, MessageSquare } from "lucide-react";

const ICON_MAP = {
  Trophy,
  ThermometerSnowflake,
  MonitorPlay,
  Fingerprint,
  ClipboardList,
  MessageSquare
};

export function TrustedBy() {
  return (
    <section className="py-8 md:py-10 bg-white dark:bg-surface border-y border-border-color/30 shadow-sm relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up">
          <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-10">
            {REAL_ACHIEVEMENTS.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || CheckCircle2;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-heading">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
}
