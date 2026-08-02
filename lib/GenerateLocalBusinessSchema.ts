import { App } from "./App";

export const generateLocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FurnitureStore",
        "@id": "https://buyingusedfurnitureuae.com/#business",
        name: App.name,
        alternateName: ["Buying Used Furniture Company"],
        description:
          "شركة شراء اثاث مستعمل في الإمارات بأفضل الأسعار. نشتري ونبيع اثاث المنزلي والمكتبي والأجهزة الكهربائية في جميع الإمارات.",
        url: App.url,
        logo: {
          "@id": `${App.url || "https://buyingusedfurnitureuae.com"}/logo.svg`,
        },
        image: [
          `${App.url || "https://buyingusedfurnitureuae.com"}/شراء-الاثاث-المستعمل.jpg`,
        ],
        telephone: App.phone,
        email: "buying.used.furniture.uae@gmail.com",
        priceRange: "$$",
        currenciesAccepted: "AED",
        paymentAccepted: "Cash, Bank Transfer, Credit Card",
        foundingDate: "2015",
        knowsLanguage: ["ar", "en"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "94 19th St Al Barsha Second",
          addressLocality: "Al Barsha",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.097163,
          longitude: 55.22011,
        },

        hasMap: "https://share.google/uLNlamfwJl2DVzPi6",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Dubai",
            sameAs: "https://en.wikipedia.org/wiki/Dubai",
          },
          {
            "@type": "City",
            name: "Abu Dhabi",
            sameAs: "https://en.wikipedia.org/wiki/Abu_Dhabi",
          },
          {
            "@type": "City",
            name: "Sharjah",
            sameAs: "https://en.wikipedia.org/wiki/Sharjah",
          },
          {
            "@type": "City",
            name: "Ajman",
            sameAs: "https://en.wikipedia.org/wiki/Ajman",
          },
          {
            "@type": "City",
            name: "Al Ain",
            sameAs: "https://en.wikipedia.org/wiki/Al_Ain",
          },
          {
            "@type": "City",
            name: "Ras Al Khaimah",
            sameAs: "https://en.wikipedia.org/wiki/Ras_Al_Khaimah",
          },
          {
            "@type": "City",
            name: "Umm Al Quwain",
            sameAs: "https://en.wikipedia.org/wiki/Umm_Al_Quwain",
          },
          {
            "@type": "City",
            name: "Fujairah",
            sameAs: "https://en.wikipedia.org/wiki/Fujairah",
          },
        ],

        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: App.phone,
            contactType: "customer service",
            availableLanguage: ["Arabic", "English"],
            areaServed: "AE",
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          },
          {
            "@type": "ContactPoint",
            telephone: App.phone,
            contactType: "sales",
            contactOption: "TollFree",
            availableLanguage: ["Arabic", "English"],
          },
        ],
        sameAs: [
          "https://share.google/uLNlamfwJl2DVzPi6",
          "https://www.facebook.com/buying.used.furniture.uae",
          "https://www.instagram.com/buying.used.furniture.uae",
          "https://www.youtube.com/@شركة-شراء-اثاث-مستعمل",
        ],

        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "342",
          bestRating: "5",
          worstRating: "1",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://buyingusedfurnitureuae.com/#organization",
        name: "شركة النمره نقل اثاث في دبي",
        alternateName: "Buying Used Furniture Company",
        url: "https://buyingusedfurnitureuae.com/",
        logo: {
          "@id": "https://buyingusedfurnitureuae.com/#logo",
        },
        image: [
          `${App.url || "https://buyingusedfurnitureuae.com"}/شراء-الاثاث-المستعمل.jpg`,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "94 19th St Al Barsha Second",
          addressLocality: "Al Barsha",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        email: "buying.used.furniture.uae@gmail.com",
        telephone: App.phone,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: App.phone,
          contactType: "customer service",
          availableLanguage: ["Arabic", "English"],
          areaServed: "AE",
        },
        foundingDate: "2015",
        areaServed: "AE",
        sameAs: [
          "https://share.google/uLNlamfwJl2DVzPi6",
          "https://www.facebook.com/buying.used.furniture.uae",
          "https://www.instagram.com/buying.used.furniture.uae",
          "https://www.youtube.com/@شركة-شراء-اثاث-مستعمل",
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://buyingusedfurnitureuae.com/#website",
        url: "https://buyingusedfurnitureuae.com",
        name: "شركة شراء اثاث مستعمل",
        description:
          "شركة شراء اثاث مستعمل في الإمارات بأفضل الأسعار. نشتري ونبيع اثاث المنزلي والمكتبي والأجهزة الكهربائية في جميع الإمارات.",
        publisher: {
          "@id": "https://buyingusedfurnitureuae.com/#organization",
        },
        inLanguage: "ar-AE",
      },

      {
        "@type": "WebPage",
        "@id": "https://buyingusedfurnitureuae.com/#webpage",
        url: "https://buyingusedfurnitureuae.com",
        name: "شركة شراء اثاث مستعمل",
        description:
          "شركة شراء اثاث مستعمل في الإمارات بأفضل الأسعار. نشتري ونبيع اثاث المنزلي والمكتبي والأجهزة الكهربائية في جميع الإمارات.",
        isPartOf: {
          "@id": "https://buyingusedfurnitureuae.com/#website",
        },
        about: {
          "@id": "https://buyingusedfurnitureuae.com/#business",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${App.url || "https://buyingusedfurnitureuae.com"}/شراء-الاثاث-المستعمل.jpg`,
        },
        inLanguage: "ar-AE",
      },
    ],
  };

  return JSON.stringify(schema, null, 2);
};
