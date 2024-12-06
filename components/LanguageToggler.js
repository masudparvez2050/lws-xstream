"use client";

import { useState } from "react";

export default function LanguageToggler() {
  const [language, setLanguage] = useState();

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "bn" : "en"));
  };
  return (
    <button
      onClick={toggleLanguage}
      className={`"px-4 py-2 rounded-full w-16 h-8 transition-colors duration-200 ease-in-out",
        "focus:outline-none ring-2 ring-offset-2 ring-offset-gray-800 ring-white flex justify-center items-center",
        ${
          language === "en"
            ? "bg-color-purple hover:bg-gray-600"
            : "bg-gray-600 hover:bg-color-purple"
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
}
