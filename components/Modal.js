"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/"); 
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80 p-10 flex justify-center"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="relative bg-[#14181f] rounded-md p-10 md:max-w-[75%] lg:max-h-[90%] overflow-y-auto border border-color-purple"
      >
       
        <button
          onClick={onDismiss}
          className="absolute top-2 right-2 mr-2 pr-2 text-white text-4xl hover:text-gray-400 focus:outline-none"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}
