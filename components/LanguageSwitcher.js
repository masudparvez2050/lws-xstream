"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [language, setLanguage] = useState(
    pathname.includes("bn") ? "bn" : "en"
  );

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "bn" : "en";
    setLanguage(newLanguage);

    // Replace the current language in the path or add it if not present
    const newPath = pathname.includes(language)
      ? pathname.replace(language, newLanguage)
      : `/${newLanguage}${pathname}`;

    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`"px-4 py-2 rounded-full w-16 h-8 transition-colors duration-200 ease-in-out",
        "focus:outline-none ring-2 ring-offset-2 ring-offset-gray-800 ring-white flex justify-center items-center",
        ${
          language === "en"
            ? " bg-gray-600"
            : " bg-color-purple"
        }`}
    >
      {/* <span className="sr-only">Toggle language</span> */}
      <span className="flex items-center justify-center ml-2 -mt-1 font-exo">
        {language === "en" ? (
          <>
            <span className="mr-2">EN</span>
          </>
        ) : (
          <>
            <span className="mr-2">BN</span>
          </>
        )}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
