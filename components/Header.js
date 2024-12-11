"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";

import LanguageSwitcher from "./LanguageSwitcher";
import { getDictionary } from "@/app/[lang]/disctionaries";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [lang, setLang] = useState(pathname.includes("bn") ? "bn" : "en");
  const [dic, setDic] = useState({});

  useEffect(() => {
    const currentLang = pathname.includes("bn") ? "bn" : "en";
    setLang(currentLang);
  }, [pathname]);

  useEffect(() => {
    const getLanguage = async () => {
      const d = await getDictionary(lang);
      setDic(d);
    };
    getLanguage();
  }, [lang]);

  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <Link href={`/${lang}`}>
          <Image
            width={500}
            height={500}
            src="/assets/logo.svg"
            alt="LWS Xstream Logo"
            className="h-6"
          />{" "}
        </Link>

        <nav
          className={` hidden md:flex space-x-6 ${
            lang === "bn" ? "font-tiro" : ""
          }`}
        >
          <Link href={`/${lang}`} className="text-color-purple font-semibold">
            {dic?.top_streaming}
          </Link>
          <Link href={`/${lang}`} className="text-gray-400 hover:text-white">
            {dic?.games}
          </Link>
          <Link href={`/${lang}`} className="text-gray-400 hover:text-white">
            {dic?.teams}
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {/* Search Filter */}
        <SearchFilter lang={lang} />
        {/* যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন */}
        <Image
          width={500}
          height={500}
          src="/assets/avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />

        {/* language toggler */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
