import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { TbHome, TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-30 bg-stone-50 py-5 max-container padding-container">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-grow h-full">
          <TbHome size={30} />
          <ul className="hidden h-full ml-auto gap-12 sm:flex items-center">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="cursor-pointer flexCenter regular-16 text-gray-50 transition-all hover:text-orange-300"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        <TbMenu2
          size={30}
          className="inline-block cursor-pointer sm:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;