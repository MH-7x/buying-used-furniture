import Image from "next/image";
import Link from "next/link";
const locations = [
  {
    title: "اثاث مستعمل الشارقة",
    description:
      "خدمتنا في الشارقة سريعة - نوصل نفس اليوم. ولو تدور عندنا قريب من سوق الشارقة للاثاث المستعمل. خدمتنا الأسرع في المجاز، الخان، التعاون، مويلح، والنهضة. نحن بجانبك.",
    src: "/اثاث-مستعمل-الشارقة.jpg",
    link: "#",
  },
  {
    title: "اثاث مستعمل دبي",
    description:
      "نغطي دبي مارينا، نخلة جميرا، البرشاء، ديرة، والقصيص. لدينا فريق متخصص للتعامل مع أبراج دبي السكنية وإجراءات التصاريح. اثاث مستعمل دبي - نشتريه بأسعار منافسة ونوفر فك وتركيب.",
    src: "/اثاث-مستعمل-دبي.jpg",
    link: "#",
  },
  {
    title: "اثاث مستعمل عجمان",
    description:
      "خدمة يومية في النعيمية، الراشدية، والجرف. لو عندك اثاث مستعمل للبيع في عجمان أو أي منطقة ثانية، راسلنا ونعطيك سعر.",
    src: "/اثاث-مستعمل-عجمان.jpg",
    link: "#",
  },
  {
    title: "اثاث مستعمل ابوظبي",
    description:
      "نصل إلى المصفح، مدينة خليفة، وبني ياس للمجموعات الكبيرة والأثاث الفاخر. اثاث مستعمل ابوظبي مصفح - منطقة نشتغل فيها كثير، فيها طلب عالي على الأثاث بأسعار معقولة.",
    src: "/اثاث-مستعمل-ابوظبي.jpg",
    link: "#",
  },
  {
    title: "اثاث مستعمل العين",
    description:
      "نوصل للعين كمان. التوصيل يكون من الشارقة، لكن سريع ونفس الخدمة. ليش تشتري أثاث مستعمل؟",
    src: "/اثاث-مستعمل-العين.jpg",
    link: "#",
  },
  {
    title: "اثاث مستعمل رأس الخيمة",
    description:
      "نشتري ونبيع أثاث مستعمل في رأس الخيمة. نوصل لجميع المناطق، ونعطيك سعر عادل بدون مساومة. تواصل معنا على الواتساب وراح نرد عليك بسرعة.",
    src: "/اثاث-مستعمل-رأس-الخيمة.jpg",
    link: "#",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="max-w-6xl mx-auto mt-36 md:px-0 px-4">
      <h2 className="md:text-4xl text-3xl font-bold text-secondary mb-5">
        نصل إليك أينما كنت <br className="md:hidden block" />
        في الإمارات
      </h2>
      <p className="text-muted-foreground">
        نشتري ونبيع اثاث مستعمل في كل الإمارات.
      </p>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1"
          >
            {/* Image Section */}
            <div className="relative h-72 w-full bg-muted group rounded-t-2xl overflow-hidden">
              <Image
                src={loc.src}
                alt={loc.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
            </div>

            <div className="p-6 text-right" dir="rtl">
              <Link href={loc.link}>
                <h3 className="text-xl font-bold text-secondary mb-3 ">
                  {loc.title}
                </h3>
              </Link>

              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {loc.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 grid lg:grid-cols-2  grid-cols-1 gap-10">
        <div className="items-center grid grid-cols-4 gap-x-5 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 p-6">
          <div className="h-28 w-28 rounded-2xl overflow-hidden col-span-1 bg-muted relative">
            <Image
              src={"/اثاث-مستعمل-الفجيرة.jpg"}
              alt={"اثاث-مستعمل-الفجيرة"}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-3 col-span-full md:mt-0 mt-5">
            <Link href={"#"}>
              {" "}
              <h3 className="text-secondary text-xl font-bold">
                اثاث مستعمل الفجيرة
              </h3>
            </Link>
            <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed">
              خدمتنا توصل للفجيرة. نشتري كل أنواع الأثاث المنزلي والمكتبي.
              التوصيل متوفر بأسعار معقولة، والدفع فوري - نقد أو تحويل بنكي
            </p>
          </div>
        </div>
        <div className="items-center grid grid-cols-4 gap-x-5 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 p-6">
          <div className="h-28 w-28 rounded-2xl overflow-hidden col-span-1 bg-muted relative">
            <Image
              src={"/اثاث-مستعمل-أم-القيوين.jpg"}
              alt={"اثاث-مستعمل-الفجيرة"}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-3 col-span-full md:mt-0 mt-5">
            <Link href={"#"}>
              {" "}
              <h3 className="text-secondary text-xl font-bold">
                اثاث مستعمل أم القيوين
              </h3>
            </Link>
            <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed">
              نخدم أم القيوين في شراء وبيع الأثاث المستعمل. أسعار منافسة، وفريق
              نقل محترف. راسلنا وأرسل صور للأثاث، وراح نعطيك عرض سعر خلال دقائق
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
