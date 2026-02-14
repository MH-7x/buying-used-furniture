import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  {
    title: "شراء الأثاث المنزلي",
    details:
      "نشتري غرف النوم الكاملة (سرير كينج، خزانة ملابس، تسريحة)، أطقم الكنب والمجالس العربية، طاولات الطعام، ووحدات التلفزيون. نهتم بشكل خاص بالعلامات التجارية المعروفة وحالة الأثاث الجيدة",
    tutorialLink: "#",
    src: "/شراء-الأثاث-المنزلي.jpg",
  },
  {
    title: "شراء الأجهزة الكهربائية المستعملة ",
    details:
      "هل لديك أجهزة تريد بيعها؟ نشتري الثلاجات، الغسالات، أفران الغاز، ومكيفات الهواء (الشباك والسبليت) بحالة جيدة. نفحص الجهاز ونعطيك سعره فوراً",
    tutorialLink: "#",
    src: "/شراء-الأجهزة-الكهربائية-المستعملة.jpg",
  },
  {
    title: "شراء الأثاث المكتبي والفندقي",
    details:
      "للشركات والفنادق التي تجدد مكاتبها: نشتري مكاتب العمل، الكراسي الدوارة، طاولات الاجتماعات، وخزائن الملفات بكميات كبيرة وبأسعار تنافسية",
    tutorialLink: "#",
    src: "/شراء-الأثاث-المكتبي.jpg",
  },
];

const Services = () => {
  return (
    <div className="flex  mt-32 items-center justify-center">
      <div className="w-full max-w-6xl px-4 py-10">
        <h2 className="font-semibold text-3xl  sm:mx-auto sm:max-w-2xl sm:text-center md:text-[2.75rem] md:leading-[1.3]">
          نشتري جميع أنواع الأثاث والأجهزة المستعملة في الإمارات
        </h2>
        <p className="mt-5 text-lg text-muted-foreground sm:text-center sm:text-xl">
          لا داعي للبحث عن مشترين مختلفين لكل قطعة. نحن نشتري كل شيء تقريباً:
        </p>
        <div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
          {features.map((feature, idx) => (
            <div
              className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse"
              key={idx}
            >
              <div className="aspect-[4/3] w-full basis-1/2 rounded-xl bg-muted relative overflow-hidden">
                <Image
                  src={feature.src}
                  alt={feature.title}
                  fill
                  className="absolute object-cover"
                />
              </div>
              <div className="shrink-0 basis-1/2">
                <h3 className="my-3 font-semibold text-3xl tracking-[-0.02em]">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.details}</p>
                <Button asChild className="mt-6 gap-3 rounded-full" size="lg">
                  <Link href={feature.tutorialLink}>
                    اتصل بنال {feature.title.substring(0, 20)} ...
                    <ArrowLeft />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
