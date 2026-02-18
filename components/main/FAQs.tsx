import { ReactNode } from "react";

export default function FAQSection({
  faqs,
  title,
  desc,
}: {
  faqs: { question: string; answer: ReactNode }[];
  title?: string;
  desc?: string;
}) {
  return (
    <section className="mt-32 ">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl leading-tight">
            {title ? title : "الأسئلة الشائعة حول شراء الأثاث المستعمل"}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {desc
              ? desc
              : " فيما يلي بعض الأسئلة والأجوبة الشائعة من العملاء عند شراء الأثاث          المستعمل."}
          </p>
        </div>

        {/* FAQ List using Semantic HTML details/summary for Server Component compatibility */}
        <div className="mt-8 divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <details
              key={index}
              open={index === 0}
              className="group py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between text-right text-gray-900 font-medium list-none">
                <h3 className="text-lg font-medium text-secondary">
                  {faq.question}
                </h3>
                <span className="mr-6 flex h-7 w-7 items-center justify-center text-gray-400 group-open:text-gray-900">
                  {/* Plus Icon (Shown when closed) */}
                  <svg
                    className="block h-6 w-6 group-open:hidden transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                  {/* Minus Icon (Shown when open) */}
                  <svg
                    className="hidden h-6 w-6 group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pl-12 text-base leading-7 text-muted-foreground faq text-right">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
