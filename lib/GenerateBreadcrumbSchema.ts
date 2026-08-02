import { App } from "./App";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Generates a BreadcrumbList JSON-LD schema for Google rich snippets.
 * Automatically prepends the home page as the first breadcrumb item.
 *
 * @param items - Array of breadcrumb items (excluding the home page).
 *                Each item should have a `name` (display label) and `path` (URL path starting with `/`).
 * @returns Stringified JSON-LD BreadcrumbList schema.
 */
export const generateBreadcrumbSchema = (items: BreadcrumbItem[]): string => {
  const baseUrl = App.url || "https://buyingusedfurnitureuae.com";

  const allItems: BreadcrumbItem[] = [
    { name: "الرئيسية", path: "/" },
    ...items,
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };

  return JSON.stringify(schema, null, 2);
};
