import { App } from "@/lib/App";
import { MetadataRoute } from "next";

const pages: MetadataRoute.Sitemap = [
  {
    url: "",
    changeFrequency: "weekly",
    priority: 1.0,
    images: ["/شراء-الاثاث-المستعمل.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/عن-الشركة",
    changeFrequency: "yearly",
    priority: 0.9,
    images: ["/بيع-وشراء-الأثاث-المستعمل.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/اتصل-بنا",
    changeFrequency: "yearly",
    priority: 0.7,
    images: ["/شراء-الاثاث-المستعمل.jpg"],
    lastModified: "2026-02-25",
  },
  // LOCATION-BASED-PAGES
  {
    url: "/شراء-اثاث-مستعمل-ابوظبي",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/شراء-اثاث-مستعمل-ابوظبي.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-اثاث-مستعمل-الشارقة",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/شراء-اثاث-مستعمل-الشارقة.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-اثاث-مستعمل-العين",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/شراء-اثاث-مستعمل-العين.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-اثاث-مستعمل-دبي",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/شراء-اثاث-مستعمل-دبي.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-اثاث-مستعمل-راس-الخيمة",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/شراء-اثاث-مستعمل-رأس-الخيمة.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-اثاث-مستعمل-عجمان",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/loc/شراء-اثاث-مستعمل-عجمان.jpg"],
    lastModified: "2026-02-25",
  },
  // SERVICES PAGES
  {
    url: "/شراء-اثاث-فنادق-مستعمل",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/شراء-اثاث-فنادق-مستعمل.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-الأثاث-المنزلي",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/شراء-الأثاث-المنزلي-المستعمل-في-الإمارات.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-الأجهزة-المنزلية",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/شراء-الأجهزة-المنزلية-المستعملة.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-الاثاث-المكتبي-المستعمل",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/شراء-الاثاث-المكتبي-المستعمل.jpg"],
    lastModified: "2026-02-25",
  },
  {
    url: "/شراء-الالكترونيات-المستعملة",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/ser/شراء-الالكترونيات-المستعملة.jpg"],
    lastModified: "2026-02-25",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    ...page,
    url: `${App.url}${page.url}`,
    images: page.images ? page.images.map((img) => `${App.url}${img}`) : [],
    lastModified: page.lastModified,
  }));
}
