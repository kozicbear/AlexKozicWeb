"use client";

import { NAV_LINKS } from '@/constants';
import { useState, useRef } from 'react';
import { TbMenu2 } from 'react-icons/tb';

export default function MyDropdown() {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setVisible(false);
    }, 300); // Adjust the delay (in milliseconds) according to your preference
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <TbMenu2
        size={30}
        className="inline-block cursor-pointer sm:hidden"
      />

      {visible && (
        <div className="absolute mt-2 bg-white border rounded shadow-lg">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="hover:text-orange-300">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

