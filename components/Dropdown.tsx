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
    }, 300);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <TbMenu2
        size={30}
        className="inline-block cursor-pointer sm:hidden text-gray-50"
      />

      {visible && (
        <div className="fixed right-1 bg-stone-50 shadow-lg p-2">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="regular-16 text-gray-50 
                hover:text-orange-300 text-center">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
