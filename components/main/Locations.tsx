import Image from "next/image";
import Link from "next/link";
const locations = [
  {
    title: "اثاث مستعمل الشارقة",
    description:
      "نقدم خدمة فورية في الشارقة ونعرف كل حي فيها. نقدم خدمة فورية في النهدة، المويلح، المجاز، أبو شغارة، الرولة، التعاون، المنطقة الصناعية، والقاسمية. إذا كنت في الشارقة وتبحث عن سوق الشارقة للاثاث المستعمل أو محل موثوق لشراء الاثاث المستعمل في الشارقة، يمكنك زيارة معرضنا مباشرة.",
    src: "/اثاث-مستعمل-الشارقة.jpg",
    link: "/شراء-اثاث-مستعمل-الشارقة",
  },
  {
    title: "اثاث مستعمل دبي",
    description:
      "نصل لجميع مناطق دبي: مارينا، بالم جميرا، داون تاون، ديرة، بر دبي، الكرامة، المدينة العالمية، نايف، والمنخول. سكان دبي يتواصلون معنا يومياً لبيع اثاث مستعمل دبي بسبب سرعة الاستجابة والأسعار التنافسية. نوفر أيضاً اثاث مستعمل في دبي للبيع لمن يبحث عن قطع بحالة ممتازة.",
    src: "/اثاث-مستعمل-دبي.jpg",
    link: "/شراء-اثاث-مستعمل-دبي",
  },
  {
    title: "اثاث مستعمل عجمان",
    description:
      "قرب مقرنا من عجمان يعني خدمة سريعة لسكان الإمارة. نشتري اثاث مستعمل عجمان من جميع المناطق ونوفر اثاث مستعمل للبيع في عجمان أيضاً. يمكنك التواصل معنا لشراء أو بيع الأثاث في أي منطقة بعجمان.",
    src: "/اثاث-مستعمل-عجمان.jpg",
    link: "/شراء-اثاث-مستعمل-عجمان",
  },
  {
    title: "شراء اثاث مستعمل ابوظبي",
    description:
      "أبوظبي ومصفح من أكبر أسواق الأثاث المستعمل في الإمارات. نقدم خدمة شراء اثاث مستعمل ابوظبي في المصفح، مدينة خليفة، جزيرة الريم، المرور، والخالدية. إذا كنت تبحث عن محلات شراء الاثاث المستعمل في ابوظبي، نحن خيارك الموثوق.",
    src: "/اثاث-مستعمل-ابوظبي.jpg",
    link: "/شراء-اثاث-مستعمل-ابوظبي",
  },
  {
    title: "اثاث مستعمل العين",
    description:
      "العين أيضاً من المناطق التي نخدمها بشكل ممتاز. نشتري ونبيع اثاث مستعمل العين في كل المناطق، ونوفر خدمة نقل سريعة ومجانية. إذا كنت في العين وتبحث عن شراء اثاث مستعمل العين أو بيع أثاثك القديم، تواصل معنا وسنقدم لك أفضل عرض.",
    src: "/اثاث-مستعمل-العين.jpg",
    link: "/شراء-اثاث-مستعمل-العين",
  },
  {
    title: "اثاث مستعمل رأس الخيمة",
    description:
      "نشتري ونبيع أثاث مستعمل في رأس الخيمة. نوصل لجميع المناطق، ونعطيك سعر عادل بدون مساومة. تواصل معنا على الواتساب وراح نرد عليك بسرعة.",
    src: "/اثاث-مستعمل-رأس-الخيمة.jpg",
    link: "/شراء-اثاث-مستعمل-راس-الخيمة",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="max-w-6xl mx-auto mt-36 md:px-0 px-4">
      <h2 className="md:text-4xl text-3xl font-bold text-secondary mb-5 max-w-xl leading-tight">
        نخدم جميع مناطق الإمارات — من دبي إلى الفجيرة
      </h2>
      <p className="text-muted-foreground max-w-3xl">
        واحدة من أهم مميزاتنا هي التغطية الشاملة لجميع إمارات الدولة. مقرنا
        الرئيسي في دبي يتيح لنا الوصول السريع لأغلب المناطق، ونوفر خدمة شراء
        اثاث مستعمل في كل إمارة بنفس مستوى الجودة والسرعة.
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
                  شراء {loc.title}
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
            <Link href={"/"}>
              {" "}
              <h3 className="text-secondary text-xl font-bold">
                شراء اثاث مستعمل الفجيرة
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
            <Link href={"/"}>
              {" "}
              <h3 className="text-secondary text-xl font-bold">
                شراء اثاث مستعمل أم القيوين
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
