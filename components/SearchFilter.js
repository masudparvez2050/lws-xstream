"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getVideos } from "@/data/data";
import { getDictionary } from "@/app/[lang]/disctionaries";
import { usePathname } from "next/navigation";

const SearchVideos = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dictionary, setDictionary] = useState("");
  const pathname = usePathname();
  const [lang, setLang] = useState(pathname.includes("bn") ? "bn" : "en");
  const searchRef = useRef(null);

  useEffect(() => {
    const currentLang = pathname.includes("bn") ? "bn" : "en";
    setLang(currentLang);
  }, [pathname]);

  useEffect(() => {
    const languageGet = async () => {
      const d = await getDictionary(lang);
      setDictionary(d);
    };

    languageGet();
  }, [lang]);

  // Fetch videos data when the component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos("client");
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Debounce the search input
  useEffect(() => {
    if (searchQuery.trim()) {
      const handler = setTimeout(() => {
        setDebouncedQuery(searchQuery.trim());
      }, 300);

      return () => {
        clearTimeout(handler);
      };
    } else {
      setDebouncedQuery("");
      setFilteredVideos([]);
    }
  }, [searchQuery]);

  // Filter videos based on debouncedQuery
  useEffect(() => {
    if (debouncedQuery) {
      const results = videos.filter((video) =>
        video.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setFilteredVideos(results);
    } else {
      setFilteredVideos([]);
    }
  }, [debouncedQuery, videos]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputFocus = () => {
    setIsDropdownVisible(true);
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className={`bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple ${
            lang.replace("/", "") === "bn" ? "font-tiro" : ""
          }`}
          placeholder={dictionary?.search_placeholder}
          value={searchQuery}
          onFocus={handleInputFocus}
          onChange={(e) => {
            const input = e.target.value.trimStart(); // Ignore leading spaces
            setSearchQuery(input); // Update query with meaningful input
          }}
        />
        <svg
          className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Filtered Videos List */}
      {isDropdownVisible && debouncedQuery && (
        <ul className="absolute left-0 w-full mt-1 rounded-lg bg-color-gray shadow-lg max-h-64 overflow-y-auto z-10">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <li
                key={video.videoId}
                className="flex items-center p-2 cursor-pointer"
                onClick={() => setIsDropdownVisible(false)} // Close dropdown on click
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-md object-cover mr-3"
                />
                <Link href={`/videos/${video.videoId}`} className="flex-grow">
                  <p className="text-sm text-white hover:text-color-purple hover:underline">
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-500">{video.channelTitle}</p>
                </Link>
              </li>
            ))
          ) : (
            <li
              className={`p-4 text-gray-500 text-center ${
                lang.replace("/", "") === "bn" ? "font-tiro" : ""
              }`}
            >
              {dictionary?.no_videos_found}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchVideos;
