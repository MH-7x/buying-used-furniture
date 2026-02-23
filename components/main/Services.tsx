import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  {
    title: "شراء الأثاث المنزلي المستعمل",
    details:
      "نشتري كل ما يخص المنزل: أطقم كنب ومجالس عربية، غرف نوم كاملة بالسرير والخزانة والتسريحة، طاولات طعام مع الكراسي، خزائن أحذية، سجاد، ستائر، وديكورات. سواء كان أثاثك من ايكيا أو هوم سنتر أو دانوب أو أي علامة تجارية أخرى — نشتريه بسعر عادل. نوفر أيضاً اثاث مستعمل للبيع بحالة ممتازة بعد عملية الفحص والتجديد.",
    tutorialLink: "/شراء-الأثاث-المنزلي",
    src: "/شراء-الأثاث-المنزلي.jpg",
  },
  {
    title: "شراء الأثاث المكتبي المستعمل",
    details:
      "إذا كنت تصفّي مكتباً أو تنتقل لمقر جديد، نشتري جميع أنواع الأثاث المكتبي المستعمل: مكاتب بجميع الأحجام، كراسي مكتب عادية وإرجونوميك، طاولات اجتماعات، خزائن ملفات، أرفف عرض، وكاونترات استقبال. نتعامل مع الشركات الصغيرة والكبيرة ونقدم خدمة تصفية كاملة بأسعار مناسبة.",
    tutorialLink: "/شراء-الاثاث-المكتبي-المستعمل",
    src: "/شراء-الأثاث-المكتبي.jpg",
  },
  {
    title: "شراء الأجهزة الكهربائية المستعملة",
    details:
      "نشتري الأجهزة الكهربائية المستعملة من جميع العلامات: ثلاجات، غسالات، نشافات، مكيفات سبليت ومتنقلة، أفران، ميكرويف، وشاشات تلفزيون. نقبل أجهزة Samsung وLG وBosch وSiemens وPanasonic وDaikin وMitsubishi وغيرها. الأجهزة التي تعمل بشكل جيد تحصل على أفضل الأسعار.",
    tutorialLink: "/شراء-الالكترونيات-المستعملة",
    src: "/شراء-الأجهزة-الكهربائية-المستعملة.jpg",
  },
  {
    title: "شراء أثاث الفنادق والمطاعم",
    details:
      "نقدم خدمة شراء أثاث فنادق مستعمل بالجملة — من غرف النوم الفندقية إلى صالات الانتظار وأثاث المطاعم والكافيهات. إذا كنت تجدد فندقاً أو تغلق مطعماً، نشتري كل شيء بأسعار مناسبة مع خدمة إخلاء سريعة. هذه الخدمة متاحة في جميع الإمارات.",
    tutorialLink: "/شراء-اثاث-فنادق-مستعمل",
    src: "/شراء-أثاث-الفنادق-والمطاعم.jpg",
  },
  {
    title: "شراء الإلكترونيات والأدوات المنزلية",
    details:
      "بالإضافة للأثاث، نشتري الإلكترونيات والأدوات المنزلية المستعملة: أجهزة كمبيوتر ولابتوبات، طابعات، أدوات مطبخ كهربائية، ومعدات تنظيف. إذا ما كنت متأكد إذا نشتري القطعة اللي عندك — أرسل لنا صورة على الواتساب وبنرد عليك خلال دقائق.",
    tutorialLink: "/شراء-الالكترونيات-المستعملة",
    src: "/شراء-الإلكترونيات-والأدوات-المنزلية.jpg",
  },
  {
    title: "شراء أثاث الحدائق والأثاث الخارجي",
    details:
      "الجلسات الخارجية، أثاث الحدائق، المظلات، الأراجيح، وطاولات البلكونات — كلها مطلوبة ونشتريها. إذا عندك أثاث خارجي بحالة جيدة، تواصل معنا وسنقدم لك عرض سعر فوري.",
    tutorialLink: "/شراء-الأثاث-المنزلي",
    src: "/شراء-أثاث-الحدائق-والأثاث-الخارجي.jpg",
  },
];

const Services = () => {
  return (
    <div className="flex  mt-32 items-center justify-center">
      <div className="w-full max-w-6xl px-4 py-10">
        <h2 className="font-semibold text-3xl  sm:mx-auto sm:max-w-2xl sm:text-center md:text-[2.75rem] md:leading-[1.3]">
          نشتري جميع أنواع الأثاث المستعمل والأجهزة الكهربائية
        </h2>
        <p className="mt-5 text-lg text-muted-foreground sm:text-center sm:text-xl max-w-4xl mx-auto">
          مهما كان نوع الأثاث أو الأجهزة التي تريد بيعها، نحن نشتري كل شيء.
          فريقنا متخصص في تقييم جميع الفئات ونقدم أسعاراً عادلة تعكس القيمة
          الحقيقية لكل قطعة. هذه أبرز الفئات التي نتعامل معها:
        </p>
        <div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
          {features.slice(0, 3).map((feature, idx) => (
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
                <Link href={feature.tutorialLink}>
                  {" "}
                  <h3 className="my-3 font-semibold text-3xl tracking-[-0.02em]">
                    {feature.title}
                  </h3>
                </Link>
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 w-full mt-32">
          {features.slice(3, 6).map((feature, idx) => (
            <div
              key={idx}
              className="bg-white  rounded-3xl overflow-hidden pb-6 "
            >
              <div className="aspect-4/3 bg-muted relative overflow-hidden">
                <Image
                  src={feature.src}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-6 px-3">
                <Link href={feature.tutorialLink}>
                  {" "}
                  <h3 className="text-xl font-bold text-secondary ">
                    {feature.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mt-3 text-sm">
                  {feature.details}
                </p>
                <Button asChild className="mt-4  mx-auto">
                  <Link href={feature.tutorialLink}>
                    اتصل بنال {feature.title.substring(0, 20)} ...
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
