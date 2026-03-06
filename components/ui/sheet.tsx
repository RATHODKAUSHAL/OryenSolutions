"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SheetContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>;
}

export function SheetTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) return null;

  return (
    <button type="button" className={className} onClick={() => ctx.setOpen(true)}>
      {children}
    </button>
  );
}

export function SheetContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(SheetContext);
  const [mounted, setMounted] = React.useState(false);
  const [closing, setClosing] = React.useState(false);

  React.useEffect(() => {
    if (ctx?.open) {
      setMounted(true);
      setClosing(false);
    }
  }, [ctx?.open]);

  if (!ctx) return null;

  const closeWithAnimation = () => {
    setClosing(true);
    window.setTimeout(() => {
      ctx.setOpen(false);
      setMounted(false);
      setClosing(false);
    }, 220);
  };

  if (!ctx.open && !mounted) return null;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/35 transition-opacity duration-200",
          closing ? "opacity-0" : "opacity-100",
        )}
        onClick={closeWithAnimation}
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-svh w-[84%] max-w-sm border-l border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-200",
          closing ? "translate-x-full" : "translate-x-0",
          className,
        )}
      >
        <button
          type="button"
          className="mb-6 inline-flex rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          onClick={closeWithAnimation}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
        {children}
      </aside>
    </>
  );
}
