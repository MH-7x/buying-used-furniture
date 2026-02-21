import { LocationLinks, servicesLinks } from "@/lib/Lists";
import Link from "next/link";

import { quickLinks } from "../FooterNew";

const ServiceSidebar = () => {
  return (
    <div className="md:col-span-2 col-span-full bg-white rounded-3xl p-4 md:order-1 order-2">
      <div className="bg-primary/30 rounded-3xl px-4 py-8">
        <h3 className="text-lg font-bold text-secondary text-center">
          المواقع
        </h3>
        <ul className="mt-4">
          {LocationLinks.map((loc, idx) => (
            <li key={idx}>
              <Link
                href={loc.href}
                className="block px-6 py-2 text-secondary rounded-2xl hover:bg-white/80 transition-colors"
              >
                {loc.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-primary/30 rounded-3xl px-4 py-8 mt-10">
        <h3 className="text-lg font-bold text-secondary text-center">خدمات</h3>
        <ul className="mt-4">
          {servicesLinks.map((loc, idx) => (
            <li key={idx}>
              <Link
                href={loc.href}
                className="block px-6 py-2 text-secondary rounded-2xl hover:bg-white/80 transition-colors"
              >
                {loc.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-primary/30 rounded-3xl px-4 py-8 mt-10">
        <h3 className="text-lg font-bold text-secondary text-center">
          روابط سريعة
        </h3>
        <ul className="mt-4">
          {quickLinks.map((loc, idx) => (
            <li key={idx}>
              <Link
                href={loc.link}
                className="block px-6 py-2 text-secondary rounded-2xl hover:bg-white/80 transition-colors"
              >
                {loc.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSidebar;
