"use client";

const whatsappHref = "https://wa.me/919265885370";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 hover:bg-[#20ba59] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.07 2c-5.45 0-9.88 4.43-9.88 9.88 0 1.74.45 3.43 1.32 4.92L2 22l5.35-1.4a9.84 9.84 0 0 0 4.72 1.2h.01c5.45 0 9.88-4.43 9.88-9.88a9.8 9.8 0 0 0-2.9-7.01Zm-6.98 15.22h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.2 8.2 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.85 5.8 2.4a8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.68 8.21-8.16 8.21Zm4.5-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.57.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.1-.5.12-.12.25-.3.37-.45.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.77-1.88-.2-.48-.41-.42-.57-.42h-.48c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.12.17 1.76 2.69 4.27 3.77.6.26 1.07.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.57.21-1.07.15-1.17-.06-.1-.23-.17-.48-.3Z" />
      </svg>
    </a>
  );
}
