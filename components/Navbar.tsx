import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { TbHome, TbMenu2 } from "react-icons/tb";
import MyDropdown from "./Dropdown";
import Resume from "./Resume";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-30 bg-stone-50 py-5 max-container padding-container text-gray-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-grow h-full">
          <TbHome size={30} />
          <ul className="hidden h-full ml-auto gap-12 sm:flex items-center">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="cursor-pointer flexCenter regular-16 transition-all hover:text-orange-300"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Resume />
        </div>

        <MyDropdown/>
      </div>
    </nav>
  );
};

export default Navbar;