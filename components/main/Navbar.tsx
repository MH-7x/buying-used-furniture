import { LocationLinks, servicesLinks } from "@/lib/Lists";
import { ChevronDown, Menu, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header
      className="fixed md:w-[90%] w-[95%] top-2 left-1/2 translate-x-[-50%] z-40 md:bg-white/70 bg-white/60 rounded-full md:py-2 py-1 backdrop-blur-md"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <input type="checkbox" id="mobile-menu" className="hidden peer" />
      <nav
        id="desktop-navbar"
        className="hidden md:flex w-full px-3 items-center justify-between"
      >
        <ul className="bg-white/40 rounded-full px-5 py-3 flex items-center gap-x-5">
          <li className="group relative flex items-center gap-x-1 hover:bg-primary transition-colors text-secondary px-4 py-1.5 rounded-2xl font-medium cursor-pointer">
            المواقع
            <ChevronDown size={18} />
            <div className="absolute top-full hidden group-hover:block bg-white rounded-2xl shadow-lg p-5 min-w-max z-20">
              {LocationLinks.map((loc, idx) => (
                <Link
                  key={idx}
                  href={loc.href}
                  className="block px-4 py-2 hover:bg-primary/50 hover:text-secondary text-secondary transition-colors rounded-2xl"
                >
                  {loc.text}
                </Link>
              ))}
            </div>
          </li>
          <li className="group relative flex items-center gap-x-1 hover:bg-primary transition-colors text-secondary px-4 py-1.5 rounded-2xl font-medium cursor-pointer">
            خدمات <ChevronDown size={18} />
            <div className="absolute top-full hidden group-hover:block bg-white rounded-2xl shadow-lg p-5 min-w-max z-20">
              {servicesLinks.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="block px-4 py-2 hover:bg-primary/50 hover:text-secondary text-secondary transition-colors rounded-2xl"
                >
                  {service.text}
                </Link>
              ))}
            </div>
          </li>
          <li className="flex items-center gap-x-1 hover:bg-primary transition-colors text-secondary px-4 py-1.5 rounded-2xl font-medium cursor-pointer">
            عن الشركة
          </li>
        </ul>
        <Link href={"/"} className="w-[85px] h-[65px]  relative">
          <Image
            src={"/logo.svg"}
            alt="شعار شركة تشتري الأثاث المستعمل"
            fill
            className="absolute object-contain"
          />
        </Link>
        <div className="bg-white/40 rounded-full px-5 py-3 flex items-center gap-x-5">
          <Link href={"#"}>
            <button className="flex cursor-pointer items-center gap-x-1 bg-secondary transition-colors text-primary px-4 py-1.5 rounded-2xl font-medium">
              واتساب لنا
              <MessageCircle size={18} />
            </button>
          </Link>
          <Link href={"#"}>
            <button className="flex cursor-pointer items-center gap-x-1 bg-primary transition-colors text-secondary px-4 py-1.5 rounded-2xl font-medium">
              اتصل بنا
              <Phone size={18} />
            </button>
          </Link>
          <span className="flex items-center gap-x-1 text-sm text-muted-foreground px-4 py-1.5 rounded-2xl ">
            مفتوح 24/7
          </span>
        </div>
      </nav>
      <nav
        id="mobile navbar"
        className="md:hidden flex items-center justify-between px-5 py-1"
      >
        <Link href={"/"} className="w-[85px] h-[65px]  relative">
          <Image
            alt=" شعار شركة تشتري الاثاث المستعمل"
            src={"/logo.svg"}
            fill
            className="object-cover"
          />
        </Link>
        <div className="flex items-center gap-x-2">
          <button className="flex items-center gap-x-1 bg-secondary transition-colors text-primary px-4 py-1.5 rounded-2xl font-medium">
            واتساب لنا
            <MessageCircle size={18} />
          </button>
          <label
            htmlFor="mobile-menu"
            className="cursor-pointer size-10 bg-primary text-secondary inline-flex items-center justify-center rounded-xl 
            
            "
          >
            <Menu size={18} />
          </label>
        </div>
      </nav>

      <div className="fixed inset-0 hidden peer-checked:block bg-black/50 z-20 top-0 left-0 w-screen h-screen md:hidden animate-fade-in"></div>

      <div className="fixed -top-1 -right-1 h-screen w-80 bg-white/95 hidden peer-checked:flex flex-col shadow-2xl z-30 md:hidden transform  peer-checked:translate-x-0 translate-x-full ">
        <div className="p-5 border-b flex justify-between items-center">
          <label
            htmlFor="mobile-menu"
            className="cursor-pointer text-secondary"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {/* المواقع with submenu */}
          <input
            type="checkbox"
            id="locations-submenu"
            className="hidden peer"
          />
          <label htmlFor="locations-submenu" className="flex cursor-pointer">
            <div className="flex items-center justify-between w-full p-3 hover:bg-primary/10 rounded-lg transition-colors">
              <span className="font-medium text-secondary">المواقع</span>
              <ChevronDown
                size={18}
                className="peer-checked:rotate-180 transition-transform"
              />
            </div>
          </label>
          <div className="hidden peer-checked:block bg-gray-50 rounded-lg overflow-hidden">
            {LocationLinks.map((loc, idx) => (
              <Link
                key={idx}
                href={loc.href}
                className="block px-6 py-2 text-secondary hover:bg-primary/20 transition-colors"
              >
                {loc.text}
              </Link>
            ))}
          </div>

          {/* خدمات with submenu */}
          <input
            type="checkbox"
            id="services-submenu"
            className="hidden peer/services"
          />
          <label htmlFor="services-submenu" className="flex cursor-pointer">
            <div className="flex items-center justify-between w-full p-3 hover:bg-primary/10 rounded-lg transition-colors">
              <span className="font-medium text-secondary">خدمات</span>
              <ChevronDown
                size={18}
                className="peer-checked/services:rotate-180 transition-transform"
              />
            </div>
          </label>
          <div className="hidden peer-checked/services:block bg-gray-50 rounded-lg overflow-hidden">
            {servicesLinks.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="block px-6 py-2 text-secondary hover:bg-primary/20 transition-colors"
              >
                {service.text}
              </Link>
            ))}
          </div>

          {/* عن الشركة without submenu */}
          <Link
            href="#"
            className="flex items-center justify-between p-3 hover:bg-primary/10 rounded-lg transition-colors"
          >
            <span className="font-medium text-secondary">عن الشركة</span>
          </Link>
        </div>

        {/* Bottom Buttons */}
        <div className="p-5 border-t space-y-3">
          <button className="w-full flex items-center justify-center gap-x-2 bg-secondary transition-colors text-primary px-4 py-2.5 rounded-2xl font-medium hover:bg-secondary/90">
            واتساب لنا
            <MessageCircle size={18} />
          </button>
          <button className="w-full flex items-center justify-center gap-x-2 bg-primary transition-colors text-secondary px-4 py-2.5 rounded-2xl font-medium hover:bg-primary/90">
            اتصل بنا
            <Phone size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
