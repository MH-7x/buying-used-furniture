import React from "react";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Pin,
  Store,
} from "lucide-react";
import Image from "next/image";
import { LocationLinks, servicesLinks } from "@/lib/Lists";

export const quickLinks = [
  { title: "عن الشركة", link: "/عن-الشركة" },
  { title: " اتصل بنا", link: "/اتصل-بنا" },
  { title: "صالة العرض لدينا", link: "https://share.google/uLNlamfwJl2DVzPi6" },

  { title: "مشاركات المدونة", link: "#" },
  { title: "خريطة الموقع", link: "/" },
  { title: "شريكنا المتحرك", link: "https://abumuhammadmovers.com/" },

  {
    title: "حول مطور الويب",
    link: "https://wa.me/+923471309916?text=Hello%20Mashal,%20I%20Need%20Your%20Service%20!",
  },
];

const socialLinks = [
  "https://www.facebook.com/rukun.al.arooba.used.furniture/",
  "https://www.instagram.com/",
  "https://www.pinterest.com/rukun_al_arooba_used_furniture/",
  "https://wa.me/+971509684380?text=I%20Contact%20You%20For%20Used%20Furniture",
  "https://share.google/uLNlamfwJl2DVzPi6",
];

const FooterNew = () => {
  return (
    <footer className="relative bg-secondary overflow-hidden mt-20">
      {/* Decorative Background Elements (Blur/Gradient) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        {/* --- Top Section: Logo & Description --- */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Logo Placeholder */}
          <a className="mb-6 group cursor-pointer inline-block w-full relative h-[150px]">
            <Image
              src="/logo-pink.svg"
              alt=" شعار شركة تشتري الاثاث المستعمل"
              fill
              className="object-contain"
            />
          </a>

          <p className="max-w-2xl  text-white/90 leading-relaxed font-light">
            هل تفكر في تجديد منزلك أو الانتقال لبيت جديد؟ بيع الأثاث المستعمل لا
            يجب أن يكون عملية معقدة أو مقلقة. في شركة شراء اثاث مستعمل، نحن لا
            نضيع وقتك بمفاوضات طويلة وغير مجدية
          </p>
        </div>

        {/* --- Contact Info Bar --- */}
        <div className=" mb-16">
          <div className="flex flex-col md:flex-row justify-center md:items-center items-start gap-4 md:gap-12 text-sm font-medium text-white/90">
            <div className="flex items-center gap-3 cursor-pointer ">
              <div className="p-2 bg-secondary/10 rounded-full ">
                <Phone size={18} className="text-primary" />
              </div>
              <span dir="ltr">055 6461731</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-3 cursor-pointer ">
              <div className="p-2 bg-whitesecbg-secondary510rounded-full ">
                <MapPin size={18} className="text-primary" />
              </div>
              <span>شارع الاستقلال، بو شغارة، الحي القاسمية</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-3 cursor-pointer ">
              <div className="p-2 bg-secondary/10 rounded-full ">
                <Clock size={18} className="text-primary" />
              </div>
              <span>مفتوح 24/7</span>
            </div>
          </div>
        </div>

        {/* --- Main Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16 text-white/90">
          {/* Column 1: Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-r-4 border-primary/40 pr-3">
              خدمات
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((link, index) => (
                <li key={index} className="w-max ">
                  <a
                    href={link.href}
                    className="text-sm hover:text-white hover:pr-2 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:bg-white transition-colors"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Locations */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-r-4 border-primary/40 pr-3">
              المواقع
            </h3>
            <ul className="space-y-2.5">
              {LocationLinks.map((loc, index) => (
                <li key={index} className="w-max ">
                  <a
                    href={loc.href}
                    className="text-sm hover:text-white hover:pr-2 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:bg-white transition-colors"></span>
                    {loc.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-r-4 border-primary/40 pr-3">
              روابط سريعة
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index} className="w-max ">
                  <a
                    href={link.link}
                    className="text-sm hover:text-white hover:pr-2 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:bg-white transition-colors"></span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Visit Store (Map Placeholder) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-r-4 border-primary/40 pr-3">
              قم بزيارة المتجر
            </h3>
            <iframe
              className="w-full h-48  bg-slate-800 rounded-lg overflow-hidden relative group border border-white/10 hover:border-yellow-500/50 transition-colors"
              title="Our Store Location in Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8696529263066!2d55.39297417447848!3d25.3421546258158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b39dde3733b%3A0x70627f406a04df1e!2sRukun%20AL%20arooba%20used%20furniture%20and%20electronics%20trading!5e0!3m2!1sen!2s!4v1757767922306!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-gray-200">
            <p className="text-center md:text-left">
              حقوق الطبع والنشر © {new Date().getFullYear()}{" "}
              <span className="text-gray-300 font-medium">
                شركة شراء اثاث مستعمل
              </span>
            </p>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#ffdb5e] transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-[#ffdb5e] transition-colors">
                الشروط والأحكام
              </a>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
            <a
              href="https://wa.me/+923471309916?text=Hello%20Mashal,%20I%20Need%20Your%20Service%20!"
              rel="noopener noreferrer"
              className=" "
            >
              التطوير والصيانة بواسطة مشعل حريرة
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Pin, MessageCircle, Store].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href={socialLinks[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Us on Social Media"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-200 hover:bg-primary hover:text-secondary hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
