import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const CTA = ({ title, desc }: { title?: string; desc?: string }) => {
  return (
    <section className="mt-32">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="border-none bg-primary/50 shadow-none rounded-4xl">
          <CardContent>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Left Column - Image */}
              <div className="relative h-64 sm:h-80  rounded-2xl overflow-hidden">
                <Image
                  src={"/خدمات-شراء-الأثاث-المستعمل.jpg"}
                  alt="خدمات شراء الأثاث المستعمل"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <Card className="bg-white/50 rounded-2xl border-0 shadow-none">
                <CardContent className="flex h-full flex-col items-start justify-center gap-4">
                  <h2 className="text-xl leading-tight font-semibold lg:text-2xl text-secondary">
                    {title ? title : " تواصل معنا اليوم لصفقة رابحة"}
                  </h2>
                  <div>
                    <p className="text-muted-foreground mb-3 text-base">
                      {desc
                        ? desc
                        : " سواء تبي تبيع أو تشتري اثاث مستعمل، كلمنا. نحن هنا نساعدك. شراء اثاث مستعمل صار أسهل مع شركة موثوقة وعندها سمعة في  السوق."}
                    </p>
                    <div className="mt-5 flex gap-x-3">
                      <Button>واتساب لنا</Button>
                      <Button variant={"secondary"}>اتصل بنا مباشرة</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
