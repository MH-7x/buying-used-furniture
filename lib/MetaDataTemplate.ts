import { App } from "./App";
import type { Metadata } from "next";

export interface Data {
  meta : {
    title : string;
    desc : string;
  },
  path : string;
  image : {
    path : string,
    alt : string
  }
}

export default  function MetadataTemplate({data}: {
  data : Data;
}):Metadata {

  return {
    title: data.meta.title,
    description: data.meta.desc,
    alternates: {
      canonical: `${App.url}${data.path}`,
    },
    openGraph: {
      url: `${App.url}${data.path}`,
      title: data.meta.title,
      images: [{url : `${App.url}${data.image.path}`, alt : data.image.alt}],
      description: data.meta.desc,
      type: "website",
      countryName: "United Arab Emairtes",
      emails: ["buying.used.furniture@gmail.com"],
      phoneNumbers: [App.phone],
      siteName: App.name,
    },
    twitter: {
      card: "summary_large_image",
      creator: App.name,
    },
  };
}
