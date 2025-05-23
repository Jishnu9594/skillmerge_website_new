import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-gray-300 relative z-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* Logo & Socials */}
          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <Logo />
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="#"
                className="hover:text-green-400 text-gray-400 text-3xl transition-colors"
              >
                <Icon icon="tabler:brand-facebook" />
              </Link>
              <Link
                href="#"
                className="hover:text-green-400 text-gray-400 text-3xl transition-colors"
              >
                <Icon icon="tabler:brand-twitter" />
              </Link>
              <Link
                href="#"
                className="hover:text-green-400 text-gray-400 text-3xl transition-colors"
              >
                <Icon icon="tabler:brand-instagram" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-semibold text-green-400">
              Links
            </h3>
            <ul>
              {headerData.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 text-gray-400 hover:text-green-400 w-fit transition-colors"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-semibold text-green-400">
              Other
            </h3>
            <ul>
              {["About Us", "Our Team", "Career", "Services", "Contact"].map(
                (text, i) => (
                  <li
                    key={i}
                    className="mb-2 text-gray-400 hover:text-green-400 w-fit transition-colors"
                  >
                    <Link href="#">{text}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-4 md:col-span-4 lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:brand-google-maps"
                className="text-green-400 text-3xl inline-block"
              />
              <h5 className="text-lg text-gray-400">
                Q1 Mall by Nippon Q1 , Chakkalakkal, Service Rd East, NH 66,
                Palarivattom, Vennala, Kochi, Kerala 682028
              </h5>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:phone"
                className="text-green-400 text-3xl inline-block"
              />
              <h5 className="text-lg text-gray-400">+91 90379 37434</h5>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:folder"
                className="text-green-400 text-3xl inline-block"
              />
              <h5 className="text-lg text-gray-400">info@gmail.com</h5>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 lg:flex items-center justify-between text-gray-500 text-sm">
          <h4 className="text-center lg:text-left font-normal">
            &copy; 2025 Agency. All Rights Reserved by{" "}
            <Link
              href="#"
              target="_blank"
              className="hover:text-green-400 transition-colors"
            >
              Expert's Skill Merge Hub PVT LTD
            </Link>
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <Link href="/" className="hover:text-green-400 transition-colors">
              Privacy policy
            </Link>
            <Link href="/" className="hover:text-green-400 transition-colors">
              Terms & conditions
            </Link>
          </div>
          <h4 className="text-center lg:text-left font-normal">
            <Link
              href="#"
              target="_blank"
              className="hover:text-green-400 transition-colors"
            ></Link>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
