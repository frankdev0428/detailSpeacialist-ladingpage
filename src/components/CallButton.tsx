"use client";

interface CallButtonProps {
  phone: string;
  phoneRaw: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export default function CallButton({
  phone,
  phoneRaw,
  size = "md",
  label,
  className = "",
}: CallButtonProps) {
  const sizeClasses = {
    sm: "py-3 px-6 text-base",
    md: "py-4 px-8 text-lg",
    lg: "py-5 px-10 text-xl",
  };

  return (
    <a
      href={`tel:${phoneRaw}`}
      className={`inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-500/40 transition-colors duration-200 w-full sm:w-auto ${sizeClasses[size]} ${className}`}
      onClick={() => {
        if (typeof window !== "undefined" && (window as Window & { gtag?: Function }).gtag) {
          (window as Window & { gtag?: Function }).gtag!("event", "click_to_call", {
            event_category: "engagement",
            event_label: phone,
          });
        }
      }}
    >
      {label ?? `📞 ${phone}`}
    </a>
  );
}
