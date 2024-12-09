import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchFilter from "./SearchFilter";
import LanguageToggler from "./LanguageToggler";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
      <Link href="/">
          <Image
          width={500}
          height={500}
          src="/assets/logo.svg"
          alt="LWS Xstream Logo"
          className="h-6"
        /> </Link>
       
        <nav className=" hidden md:flex space-x-6">
          <Link href="/" className="text-color-purple font-semibold">
            TOP STREAMING
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white">
            GAMES
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white">
            TEAMS
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {/* Search Filter */}
        <SearchFilter/>
        {/* যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন */}
        <Image
          width={500}
          height={500}
          src="/assets/avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />

        {/* language toggler */}
        <LanguageToggler/>
      </div>
    </header>
  );
}
