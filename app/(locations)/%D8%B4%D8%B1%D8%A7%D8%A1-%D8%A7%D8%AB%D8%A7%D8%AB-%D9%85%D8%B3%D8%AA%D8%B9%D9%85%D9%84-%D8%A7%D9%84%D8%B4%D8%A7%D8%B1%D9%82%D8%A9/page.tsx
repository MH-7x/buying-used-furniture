import { ComparisonTable, Locations } from "@/components/main/ComparisonTable";
import CTA from "@/components/main/CTA";
import FAQSection from "@/components/main/FAQs";
import LocHeroSection from "@/components/main/LocHeroSection";
import PriceDeterminationAbuDhabi from "@/components/main/PriceDeterminationAbuDhabi";
import PricingRange from "@/components/main/PricingRange";
import SellProcessSection from "@/components/main/SellingProcess";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { SharjahFaqs } from "@/lib/faqsList";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import imgSrc from "@/public/loc/شراء-اثاث-مستعمل-الشارقة.jpg";
import {
  Building,
  Building2,
  Clock,
  GraduationCap,
  HomeIcon,
  Hotel,
  Refrigerator,
  Scale,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "شراء اثاث مستعمل الشارقة | أعلى سعر + دفع فوري",
      desc: "شراء اثاث مستعمل الشارقة بأفضل الأسعار. نشتري جميع أنواع الأثاث والأجهزة المنزلية من شقق وفيلات ومكاتب. تقييم احترافي، دفع فوري نقدي، واستلام مجاني من جميع مناطق الشارقة. اتصل الآن!",
    },
    image: {
      path: "/loc/شراء-اثاث-مستعمل-الشارقة.jpg",
      alt: "شراء اثاث مستعمل الشارقة",
    },
    path: "/شراء-اثاث-مستعمل-الشارقة",
  },
});
const FaqsSchema = generateFAQSchema(convertFaqsForSchema(SharjahFaqs));

const SharjahPage = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="overflow-hidden">
        <LocHeroSection
          title="شراء اثاث مستعمل الشارقة أفضل سعر مع دفع فوري "
          desc="هل عندك أثاث مستعمل في الشارقة وتبحث عن مشتري اثاث مستعمل  يعطيك سعر عادل بدون ما تتعب؟ نحن في شركة شراء اثاث مستعمل نوفر لك أسهل طريقة لبيع أثاثك المستعمل في الشارقة، حيث أن عملية البيع  لدينا تتميز بالسرعة والشفافية المطلقة."
          img={{
            src: imgSrc,
            alt: "شراء اثاث مستعمل الشارقة",
          }}
        />
        <div className="mt-16 max-w-6xl mx-auto md:px-0 px-4">
          <div className="md:text-2xl text-lg text-secondary md:px-16 leading-relaxed">
            <p className="md:inline">
              من مقرنا في شارع الاستقلال بمنطقة أبو شغارة، نخدم جميع مناطق
              الشارقة ودبي ومختلف أنحاء الإمارات العربية المتحدة بخبرة تتجاوز 10
              سنوات في سوق الأثاث المستعمل.
            </p>
            <p className="md:inline">
              شراء اثاث مستعمل الشارقة ليس مجرد خدمة نقدمها، بل هو تخصصنا. نحن
              نقدم حلولاً ذكية لكل من يرغب في التخلص من أثاثه القديم والحصول على
              سيولة فورية.
            </p>
          </div>
        </div>
        <section className="mt-36 max-w-6xl mx-auto md:px-0 px-4 grid md:grid-cols-2 grid-cols-1 gap-16">
          <div className="md:order-2 order-1">
            <p className="md:text-lg mt-5 text-muted-foreground">
              نشتري جميع أنواع اثاث المستعمل بما في ذلك الأثاث المنزلي والمكتبي
              والأجهزة الكهربائية. ونقيّم كل قطعة بشفافية كاملة بناءً على حالتها
              الفعلية وقيمتها في السوق لضمان حصولك على أفضل سعر اثاث المستعمل.
            </p>

            <p className="md:text-lg mt-5 text-muted-foreground">
              ما نبخس سعرك مثل تجار الشوارع، ولا نتركك تنتظر أسابيع مثل المنصات
              الإلكترونية. نشتري اثاث مستعمل بأسعار تنافسية جداً.
            </p>
            <p className="md:text-lg mt-5 text-muted-foreground">
              نقداً أو تحويل بنكي، كما تحب. وطبعاً، خدمة الفك والنقل لجميع
              الأثاث الخاص بك علينا بالكامل.
            </p>

            <Button whatsapp size={"lg"} className="mt-5">
              أرسل صور أثاثك عبر الواتساب الآن{" "}
            </Button>
          </div>
          <div className="bg-muted md:h-auto h-80 rounded-3xl md:order-1 order-2 relative  overflow-hidden">
            <Image
              src={"/loc/شركة-شراء-اثاث-مستعمل-الشارقة.jpg"}
              alt=" شركة شراء اثاث مستعمل الشارقة"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section className="flex mt-32 items-center justify-center">
          <div className="w-full max-w-6xl md:px-6 px-3 py-10">
            <h2 className="font-bold md:text-4xl text-3xl  sm:max-w-xl md:text-[2.5rem] md:leading-[1.2]">
              لماذا نحن أفضل شركة شراء اثاث مستعمل في الشارقة؟
            </h2>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl max-w-5xl">
              يتساءل الكثير من العملاء لماذا تختارنا شراء اثاث مستعمل؟ والسبب هو
              التزامنا بالمصداقية والاحترافية.
            </p>
            <p className=" text-lg text-muted-foreground sm:text-xl max-w-5xl">
              فمن بين كافة محلات اثاث مستعمل في الشارقة نحن نتميز بامتلاكنا
              مقراً ثابتاً وفريقاً متخصصاً، مما يضمن لك راحة البال.
            </p>
            <p className=" text-lg text-muted-foreground sm:text-xl max-w-5xl">
              نحن لا نطرح أرقاماً عشوائية، بل نهدف دائماً لمنحك أفضل سعر اثاث
              المستعمل بناءً على حالته الفعلية.
            </p>

            <div className="mx-auto mt-12 grid w-full gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "خبرة حقيقية:",
                  desc: "نشتغل في سوق الأثاث المستعمل في الشارقة من أكثر من 10 سنوات. نعرف قيمة كل قطعة، ونعرف الفرق بين الأثاث اللي يستاهل استثمار فيه والأثاث اللي ما يستاهل. هالخبرة تنعكس مباشرة على السعر اللي نعطيك إياه.",
                  icon: (
                    <>
                      <GraduationCap className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "مقر ثابت ومعروف",
                  desc: "مقرنا الرئيسي في شارع الاستقلال، أبو شغارة، الشارقة. مو عمليات مؤقتة أو أرقام تتغير كل كم شهر. لو حبيت تزورنا أو عندك أي مشكلة بعد التعامل، تعرف وين تلاقينا.",
                  icon: (
                    <>
                      <Building className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "تقييم شفاف وعادل",
                  desc: "ما نرمي أرقام عشوائية. نقيّم كل قطعة بناءً على العلامة التجارية، عمر القطعة، حالتها الفعلية، والطلب عليها في السوق. ونشرح لك كيف وصلنا لهذا السعر. لو ما عجبك، ما في أي التزام.",
                  icon: (
                    <>
                      <Scale className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "نشتري كل الماركات الكبيرة",
                  desc: "سواء عندك أثاث من IKEA أو Danube أو Home Centre أو Pan Emirates أو Royal Furniture، نشتريه. نعرف القيمة السوقية لكل علامة تجارية ونعطيك سعر يعكسها.",
                  icon: (
                    <>
                      <Truck className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "سرعة في الاستجابة",
                  desc: "أرسل لنا صور أثاثك على واتساب واحصل على رد خلال 5 إلى 10 دقائق. مو ساعات ومو أيام. وبعد الاتفاق، فريقنا يوصلك في نفس اليوم في أغلب الحالات.",
                  icon: (
                    <>
                      <Clock className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "فريق حقيقي وأسطول مركبات",
                  desc: "الصور على صفحاتنا في وسائل التواصل هي صور فريقنا الفعلي وسياراتنا الحقيقية. مو صور من الإنترنت. وهذا يعطيك فكرة عن حجم العملية اللي تتعامل معها.",
                  icon: (
                    <>
                      <Users className="text-secondary" />
                    </>
                  ),
                },
              ].map((feature) => (
                <Card
                  className="flex flex-col overflow-hidden rounded-xl border pb-6 shadow-none"
                  key={feature.title}
                >
                  <CardHeader>
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="mt-3! font-semibold text-xl tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{feature.desc}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <ComparisonTable />
        <section id="furniture-we-buy" className="mt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 md:leading-tight">
                ماذا نشتري؟ جميع أنواع <br className="md:block hidden" />
                الاثاث المستعمل في الشارقة
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                تخصصنا الأساسي هو شراء اثاث المستعمل بكل تفاصيله. نشتري جميع
                أنواع اثاث المستعمل، سواء كنت ترغب في تجديد منزلك أو تصفية
                مكتبك.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                يشمل ذلك غرف النوم الكاملة، وخزائن الملابس، وأطقم الكنب. إذا كان
                لديك غرف نوم مستعملة للبيع في الامارات الشارقة، فنحن الوجهة
                الأنسب لتقدير قيمتها الحقيقية. ببساطة، نحن نشتري اثاث مستعمل
                بحالة جيدة ونقوم بتجديده ليعود للحياة مرة أخرى.
              </p>
            </div>

            {/* Masonry-like Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
              {[
                {
                  id: 1,
                  title: "شراء اثاث منزلي مستعمل في الشارقة",
                  image: "/loc/شراء-اثاث-منزلي-مستعمل-في-الشارقة.jpg",
                  href: "/شراء-الأثاث-المنزلي",
                  icon: <HomeIcon className="w-6 h-6" />,

                  description: (
                    <>
                      <p>
                        نشتري جميع قطع الأثاث المنزلي. غرف النوم الكاملة بكل
                        مكوناتها: السرير والدولاب والتسريحة والكمودينو.
                      </p>
                      <p>
                        أطقم الكنب والمجالس العربية بكل أنواعها. طاولات الطعام
                        مع الكراسي. الخزائن والأرفف ووحدات التلفزيون. وحتى أثاث
                        غرف الأطفال وأثاث الحدائق والشرفات.
                      </p>
                      <p>
                        الكنب المستعمل والمجالس من أكثر القطع اللي نشتريها في
                        الشارقة. كثير من العائلات تغير المجالس كل فترة، خصوصاً
                        قبل المناسبات والأعياد.
                      </p>
                      <p>
                        وبدل ما تنحط في المخزن أو ترمى، الأفضل تبيعها بسعر كويس.
                      </p>
                    </>
                  ),
                },
                {
                  id: 2,
                  title: "شراء اثاث مكتبي مستعمل في الشارقة",
                  image: "/loc/شراء-اثاث-مكتبي-مستعمل-في-الشارقة.jpg",
                  href: "/شراء-الاثاث-المكتبي-المستعمل",
                  icon: <Building2 className="w-6 h-6" />,

                  description: (
                    <>
                      <p>الشركات والمكاتب في الشارقة تجدد أثاثها بشكل دوري.</p>
                      <p>
                        نحن نشتري المكاتب وكراسي المكتب وطاولات الاجتماعات
                        ووحدات التخزين ومحطات العمل الكاملة.
                      </p>
                      <p>
                        سواء كنت تصفّي مكتب صغير أو تجدد مقر شركة كاملة، نتعامل
                        مع جميع الأحجام.
                      </p>
                    </>
                  ),
                },
                {
                  id: 3,
                  title: "شراء أجهزة منزلية وإلكترونيات مستعملة",
                  image: "/loc/شراء-أجهزة-منزلية-وإلكترونيات-مستعملة.jpg",
                  href: "/شراء-الأجهزة-المنزلية",
                  icon: <Refrigerator className="w-6 h-6" />,

                  description: (
                    <>
                      <p>
                        بالإضافة للأثاث، نشتري الأجهزة المنزلية المستعملة:
                        ثلاجات، غسالات، مكيفات، أفران ومواقد، شاشات تلفزيون.
                      </p>
                      <p>
                        كل جهاز نفحصه ونقيّمه بناءً على حالته الفعلية وعمره
                        وماركته. الأجهزة الشغالة بحالة جيدة طبعاً تحصل على سعر
                        أعلى.
                      </p>
                    </>
                  ),
                },
                {
                  id: 4,
                  title: "شراء اثاث فنادق وشركات بالجملة",
                  image: "/loc/شراء-اثاث-فنادق-وشركات-بالجملة.jpg",
                  href: "/شراء-اثاث-فنادق-مستعمل",
                  icon: <Hotel className="w-6 h-6" />,

                  description: (
                    <>
                      <p>
                        لو أنت صاحب فندق أو شركة وتبي تجدد أثاثك بالكامل، نقدر
                        نشتري كل شي دفعة واحدة.
                      </p>
                      <p>
                        . نتعامل مع مشتريات الجملة من الفنادق والشركات بشكل
                        منتظم
                      </p>
                      <p>
                        هذا يشمل الأسرّة الفندقية، كراسي الاستقبال، أثاث
                        المطاعم، وكل ما يخص قطاع الضيافة.
                      </p>
                    </>
                  ),
                },
              ].map((section) => (
                <div
                  key={section.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col group"
                >
                  {/* Image Placeholder with Overlay */}
                  <div className="relative md:h-96 h-72 overflow-hidden bg-muted ">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary/80 backdrop-blur-sm p-2 rounded-lg shadow-sm text-primary ">
                      {section.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <Link href={section.href} className="hover:underline">
                      {" "}
                      <h3 className="text-xl font-medium text-secondary mb-5">
                        {section.title}
                      </h3>
                    </Link>

                    {section.description && (
                      <div className="text-muted-foreground flex flex-col gap-y-2 mb-4 leading-relaxed">
                        {section.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <SellProcessSection
          title="كيف تبيع اثاثك المستعمل لنا في الشارقة؟"
          description="يمكن أن يكون بيع اثاث المستعمل عملية مرهقة إذا تعاملت مع تجار غير محترفين. لكن معنا، الأمر بسيط؛ تبدأ الخطوة الأولى بإرسال صور الأثاث الخاص بك عبر الواتساب للحصول على تقييم فوري. بعد الاتفاق، يتولى فريقنا كافة مهام الفك والتحميل دون أي تكاليف إضافية عليك."
          details={[
            {
              title: "الخطوة الأولى: تواصل معنا.",
              desc: (
                <>
                  <p>
                    اتصل بنا أو أرسل صور أثاثك على واتساب. أخبرنا عن نوع الأثاث
                    وعدد القطع والماركة إن كنت تعرفها. كل ما كانت المعلومات
                    أوضح، كل ما كان التقييم الأولي أدق.
                  </p>
                </>
              ),
            },
            {
              title: "الخطوة الثانية: تقييم أولي سريع.",
              desc: (
                <>
                  <p>
                    خلال 5 إلى 10 دقائق، فريقنا يراجع الصور ويعطيك تقييم أولي
                    لسعر الأثاث. هذا التقييم مبني على خبرتنا في السوق وحالة
                    القطع من الصور.
                  </p>
                </>
              ),
            },
            {
              title: "الخطوة الثالثة: المعاينة الفعلية.",
              desc: (
                <>
                  <p>
                    لو وافقت على التقييم الأولي، نرسل فريقنا لمعاينة الأثاث في
                    مكانه. يفحصون كل قطعة بشكل كامل ويحددون السعر النهائي.
                  </p>
                  <p>
                    السعر النهائي ممكن يكون نفس التقييم الأولي أو أعلى منه لو .
                    الحالة الفعلية أفضل من الصور
                  </p>
                </>
              ),
            },
            {
              title: "الخطوة الرابعة: الفك والنقل الاحترافي.",
              desc: (
                <>
                  <p>
                    بعد الاتفاق على السعر، فريقنا يفك الأثاث ويغلفه وينقله
                    بأمان. نحمي ممتلكاتك خلال النقل: المصاعد والممرات والأبواب.
                    هذي الخدمة مجانية بالكامل لكل بائع.
                  </p>
                </>
              ),
            },
            {
              title: "الخطوة الخامسة: الدفع الفوري.",
              desc: (
                <>
                  <p>
                    لحظة ما نحمّل الأثاث، تستلم فلوسك. نقد في يدك، أو تحويل بنكي
                    فوري، أو شيك بنكي. أنت تختار الطريقة اللي تناسبك.
                  </p>
                </>
              ),
            },
          ]}
        />
        <Locations />
        <section className="max-w-4xl mt-16 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            سوق الشارقة للاثاث المستعمل - دليلك الشامل
          </h2>
          <p className="mt-10 text-muted-foreground max-w-3xl">
            سوق الشارقة للاثاث المستعمل من أنشط أسواق الأثاث في الإمارات.
            المنطقة الرئيسية تتركز في شارع الاستقلال وما حوله في أبو شغارة
            والقاسمية.
          </p>
          <p className="mt-2 text-muted-foreground">
            هناك تلاقي عشرات المحلات والمعارض اللي تبيع وتشتري أثاث مستعمل
            بمختلف الأنواع والأسعار.
          </p>
          <div className="mt-5">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mt-5">
                لكن الفرق بين محلات اثاث مستعمل في الشارقة العادية وبين شركة
                متخصصة مثلنا واضح. في المحلات العادية، السعر يعتمد على المفاوضة
                والحظ.
              </p>
              <p className="text-muted-foreground mt-5">
                ما في معايير واضحة، وما في ضمان على اللي تشتريه. ولو اشتريت قطعة
                وطلعت فيها مشكلة، غالباً ما تقدر ترجعها.
              </p>
              <p className="text-muted-foreground mt-5">
                نحن مختلفين. كل قطعة نشتريها تمر بفحص احترافي وتعقيم وتجديد قبل
                ما نبيعها.
              </p>
              <p className="text-muted-foreground mt-5">
                ونعطي ضمان عليها. ولو ما عجبتك، عندنا سياسة إرجاع واضحة. هذا
                النوع من الخدمة ما تلاقيه بسهولة في سوق الاثاث المستعمل في
                الشارقة.
              </p>
              <p className="text-muted-foreground mt-5">
                ونصيحتنا لأي شخص يبي يتعامل في سوق الأثاث المستعمل: قارن الأسعار
                بين أكثر من جهة قبل ما تبيع. واسأل عن طريقة التقييم. وتأكد إن
                المشتري عنده مقر ثابت وسمعة معروفة.
              </p>
            </div>
          </div>
        </section>
        <PriceDeterminationAbuDhabi />
        <PricingRange />
        <section className="max-w-4xl mt-36 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            ضمان الجودة والتعقيم - اثاث مستعمل نظيف وآمن
          </h2>
          <p className="text-muted-foreground mt-5">
            واحد من أكبر مخاوف أي شخص يشتري اثاث مستعمل في الشارقة هو النظافة.
            هل الأثاث نظيف؟ هل فيه حشرات؟ هل هو آمن للاستخدام؟ هذي مخاوف مشروعة،
            ونحن نتعامل معها بجدية.
          </p>
          <div className="grid md:grid-cols-2 gird-cols-1 gap-10 md:mt-16 mt-10">
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                الفحص الاحترافي
              </h3>

              <p className="text-muted-foreground mt-5">
                كل قطعة أثاث نشتريها تمر بفحص كامل. نتحقق من الهيكل والخامات
                وحالة القماش أو الجلد. أي قطعة ما تمر من معاييرنا، ما نبيعها.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                بروتوكول التعقيم المتخصص
              </h3>

              <p className="text-muted-foreground mt-5">
                كل الأثاث المنجد، يعني الكنب والمجالس والأسرّة المنجدة، يمر
                ببروتوكول تعقيم متخصص. نتأكد إنه خالي تماماً من الحشرات
                والبكتيريا. هذا مو مجرد رشة مبيد. هذا تعقيم احترافي يضمن إن
                القطعة آمنة تماماً.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                الإصلاح والتجديد
              </h3>

              <p className="text-muted-foreground mt-5">
                الخدوش البسيطة والكسور الصغيرة نصلحها. القطع اللي تحتاج تلميع،
                نلمعها. الهدف إن كل قطعة تكون بأفضل حالة ممكنة قبل ما توصل
                للمشتري الجديد.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                ضمان على المبيعات
              </h3>

              <p className="text-muted-foreground mt-5">
                كل قطعة نبيعها تأتي مع ضمان. ولو ما عجبتك بعد ما وصلت بيتك،
                عندنا سياسة إرجاع واضحة وبسيطة. هذا شي ما تلاقيه عند معظم محلات
                الأثاث المستعمل في الشارقة.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mt-36 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            خدمات النقل والفك والتركيب الاحترافية
          </h2>
          <p className="text-muted-foreground mt-5">
            من أكثر الأشياء اللي تقلق الناس عند بيع أو شراء اثاث مستعمل هي عملية
            النقل. كيف بتفك الدولاب الكبير؟ كيف بتنزل الكنب من الطابق العاشر
            بدون ما تخرب شي في البناية؟ نحن نتكفل بكل هذا.
          </p>
          <div className="grid md:grid-cols-2 gird-cols-1 gap-10 md:mt-16 mt-10">
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                فك مجاني للبائعين
              </h3>

              <p className="text-muted-foreground mt-5">
                لو تبيع لنا أثاثك، فريقنا يفك كل شي باحترافية كاملة بدون أي
                تكلفة عليك.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                حماية الممتلكات
              </h3>

              <p className="text-muted-foreground mt-5">
                نستخدم نظام الإزالة الآمنة المعتمد. يعني نحمي المصاعد والممرات
                والأبواب خلال عملية النقل. كثير من شركات النقل الصغيرة تخرب
                ممتلكات البناية وأنت اللي تدفع الفاتورة. معنا، هالشي ما يصير.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                أسطول مركبات مخصص
              </h3>

              <p className="text-muted-foreground mt-5">
                عندنا سيارات مجهزة خصيصاً لنقل الأثاث. مو سيارات بيك أب عادية.
                سيارات مغلقة تحمي أثاثك من الشمس والغبار والصدمات.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                توصيل سريع للمشترين
              </h3>

              <p className="text-muted-foreground mt-5">
                لو اشتريت أثاث منا، نوفر لك خدمة توصيل سريعة بأسعار مخفضة من
                خلال شبكة شركائنا.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mt-32 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            الاقتصاد الدائري والاستدامة - <br className="md:block hidden" />
            <Link href={"/"}>لماذا شراء الأثاث المستعمل</Link> مهم؟
          </h2>
          <p className="mt-10 text-muted-foreground max-w-3xl">
            كثير من الناس يشوفون <Link href="/">شراء وبيع الأثاث المستعمل</Link>{" "}
            كمجرد وسيلة لتوفير المال. وهو فعلاً كذلك. لكن الموضوع أكبر من كذا.
          </p>
          <p className="mt-2 text-muted-foreground">
            كل سنة، آلاف الأطنان من الأثاث في الإمارات ينتهي بها المطاف في مكبات
            النفايات. أثاث في حالة ممتازة يرمى لأن صاحبه ما لقى مشتري، أو لأن
            النقل صعب، أو ببساطة لأنه ما يبي يتعب نفسه.
          </p>
          <div className="mt-5">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mt-5">
                نحن نؤمن بالاقتصاد الدائري. كل قطعة أثاث نشتريها ونعيد بيعها هي
                قطعة أقل في المكب. وهذا يتماشى مع أهداف الاستدامة في دولة
                الإمارات. أنت لما تبيع أثاثك لنا، أنت ما بس تحصل على فلوس. أنت
                تساهم في تقليل النفايات وحماية البيئة.
              </p>
              <p className="text-muted-foreground mt-5">
                ولما تشتري أثاث مستعمل بدل الجديد، أنت توفر فلوسك وتحصل على قطع
                بجودة عالية بسعر أقل بكثير. والأثاث المستعمل اللي نبيعه مفحوص
                ومعقم ومضمون، فما في فرق حقيقي في الجودة.
              </p>
            </div>
          </div>
        </section>
        <FAQSection
          title="الأسئلة الشائعة حول شراء وبيع الاثاث المستعمل في الشارقة"
          desc="نجاوب هنا على أكثر الأسئلة اللي توصلنا من عملائنا:"
          faqs={SharjahFaqs}
        />
        <CTA
          title="تواصل معنا الآن - احصل على تقييم مجاني لأثاثك في الشارقة"
          desc="لو عندك أثاث مستعمل في الشارقة أو أي إمارة ثانية وتبي تبيعه بسعر عادل وبدون تعب، نحن جاهزين. كل اللي عليك تسويه هو إنك تتواصل معنا. اتصل بنا أو أرسل صور أثاثك عبر واتساب. نرد عليك خلال دقائق ونعطيك تقييم أولي مجاني بدون أي التزام. لو عجبك السعر، نكمل. لو ما عجبك، ما في مشكلة."
        />
      </main>
    </>
  );
};

export default SharjahPage;
