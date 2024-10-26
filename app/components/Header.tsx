"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 left-0 w-full z-50 sticky ${
        isScrolled ? "shadow-sm bg-white" : "bg-transparent"
      }`}
    >
      <div className="p-5 pb-3 pl-10 flex justify-around items-center py-5">
        <div className="font-extrabold text-[24px]">Trainix</div>

        <div className="flex gap-10 items-center">
          <div>
            <Link href="/models" className="font-medium text-[16px]">
              Models
            </Link>
          </div>
          <div>
            <Link href="/contact" className="font-medium text-[16px]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
