import React from "react";

export default function PageContainer({ children }) {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#faf9f6] p-4 sm:p-6 md:p-8 dotbg noise min-h-[calc(100vh-4rem)] relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </main>
  );
}
