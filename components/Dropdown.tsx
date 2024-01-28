'use client';

import { NAV_LINKS } from '@/constants';
import { Menu } from '@headlessui/react';
import { useState, useRef } from 'react';
import { TbMenu2 } from 'react-icons/tb';

export default function MyDropdown() {
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 100);
  };

  return (
    <Menu as="div" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Menu.Button>
        <TbMenu2
          size={30}
          className="inline-block cursor-pointer sm:hidden"
        />
      </Menu.Button>

      {visible && (
        <div>
          <Menu.Items>
            {NAV_LINKS.map((link) => (
              <Menu.Item
                as="a"
                key={link.href}
                href={link.href}
                className="hover:text-orange-300"
              >
                {link.label}
              </Menu.Item>
            ))}
          </Menu.Items>
        </div>
      )}
    </Menu>
  );
}


