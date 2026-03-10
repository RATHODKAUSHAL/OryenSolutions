"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

function isStandaloneMode() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(display-mode: standalone)").matches || (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
}

export function PWAController() {
  const [showPrompt, setShowPrompt] = useState(() => {
    if (typeof window === "undefined" || isStandaloneMode()) {
      return false;
    }

    const promptDismissed = window.localStorage.getItem("pwa-install-dismissed") === "true";
    const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
    return !promptDismissed && isIos;
  });
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosHelp, setShowIosHelp] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        void navigator.serviceWorker.register("/sw.js");
      });
    }

    if (isStandaloneMode()) {
      return;
    }

    const promptDismissed = window.localStorage.getItem("pwa-install-dismissed") === "true";

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      if (!promptDismissed) {
        setDeferredPrompt(event as BeforeInstallPromptEvent);
        setShowPrompt(true);
      }
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setShowPrompt(false);
      setShowIosHelp(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  async function handleInstall() {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === "accepted") {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
      return;
    }

    setShowIosHelp((value) => !value);
  }

  function handleDismiss() {
    window.localStorage.setItem("pwa-install-dismissed", "true");
    setShowPrompt(false);
    setShowIosHelp(false);
  }

  if (!showPrompt || isStandaloneMode()) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:left-auto md:right-6 md:max-w-sm">
      <div className="rounded-[1.75rem] border border-[#7DA0CA]/35 bg-white/95 p-4 shadow-[0_20px_50px_rgba(2,16,36,0.18)] backdrop-blur-xl">
        <p className="text-sm font-semibold text-[#052659]">Install OryenSolutions</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          Add the app to your home screen for faster access and a cleaner mobile experience.
        </p>

        {showIosHelp ? (
          <p className="mt-3 rounded-2xl bg-[#f4f8fd] px-3 py-2 text-xs leading-5 text-slate-600">
            On iPhone or iPad, tap the browser share button and choose &quot;Add to Home Screen&quot;.
          </p>
        ) : null}

        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={handleInstall}
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#0077b6] px-4 text-sm font-semibold text-white transition hover:bg-[#005f92]"
          >
            {deferredPrompt ? "Install App" : "How to Install"}
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex h-10 items-center justify-center rounded-full border border-[#7DA0CA]/35 px-4 text-sm font-semibold text-slate-600 transition hover:bg-[#f4f8fd]"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
