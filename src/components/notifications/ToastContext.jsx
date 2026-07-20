"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((toast) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, ...toast }]);
    
    if (toast.duration !== Infinity) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ toast: addToast, removeToast }}>
      {children}
      {typeof window !== "undefined" && createPortal(
        <div className="fixed bottom-0 right-0 z-[100] flex flex-col p-4 gap-2 w-full max-w-sm pointer-events-none">
          <AnimatePresence>
            {toasts.map((t) => (
              <ToastItem key={t.id} toast={t} onRemove={() => removeToast(t.id)} />
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

function ToastItem({ toast, onRemove }) {
  const variants = {
    success: "bg-success/10 border-success/20 text-success",
    error: "bg-error/10 border-error/20 text-error",
    warning: "bg-warning/10 border-warning/20 text-warning",
    info: "bg-info/10 border-info/20 text-info",
    default: "bg-card border-border text-foreground shadow-lg"
  };

  const icons = {
    success: <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>,
    error: <svg className="w-5 h-5 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>,
    warning: <svg className="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>,
    info: <svg className="w-5 h-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className={cn(
        "pointer-events-auto flex w-full items-start gap-3 rounded-lg border p-4 shadow-lg transition-all",
        variants[toast.type || "default"]
      )}
    >
      {icons[toast.type] && <div className="mt-0.5 shrink-0">{icons[toast.type]}</div>}
      <div className="flex-1 space-y-1">
        {toast.title && <h3 className="font-semibold text-sm">{toast.title}</h3>}
        {toast.description && <p className="text-sm opacity-90">{toast.description}</p>}
      </div>
      <button
        onClick={onRemove}
        className="shrink-0 rounded-md p-1 opacity-50 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </motion.div>
  );
}
