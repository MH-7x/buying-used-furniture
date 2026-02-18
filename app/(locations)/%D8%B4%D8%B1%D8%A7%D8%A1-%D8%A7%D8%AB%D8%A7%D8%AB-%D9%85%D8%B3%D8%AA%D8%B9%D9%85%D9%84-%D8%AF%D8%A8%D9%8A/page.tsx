import CTA from "@/components/main/CTA";
import FAQSection from "@/components/main/FAQs";
import FurnitureBuyingSection from "@/components/main/FurnitureWeBuyDubai";
import LocHeroSection from "@/components/main/LocHeroSection";
import PriceDetermination from "@/components/main/PriceDetermination";
import SellProcessSection from "@/components/main/SellingProcess";
import { SellingTips } from "@/components/main/SellingTips";
import WhySellToUs from "@/components/main/WhySellToUs";
import { Card, CardHeader } from "@/components/ui/card";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { DubaiPageFaqs } from "@/lib/faqsList";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  BrushCleaning,
  CheckCircle,
  CheckCircle2,
  HandCoins,
  ListCheckIcon,
  Medal,
  Megaphone,
  PhoneCall,
  TimerResetIcon,
  TrendingDown,
  Users2Icon,
  Verified,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import imgSrc from "@/public/loc/شراء-اثاث-مستعمل-دبي.jpg";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "شراء اثاث مستعمل دبي | أفضل الأسعار والخدمة السريعة",
      desc: "شراء اثاث مستعمل دبي بأفضل الأسعار! نصل خلال 5-10 دقائق. نشتري جميع أنواع الأثاث والأجهزة المنزلية في دبي مارينا، الخليج التجاري، جميرا. تقييم احترافي وضمان. اتصل الآن!",
    },
    image: {
      path: "/loc/شراء-اثاث-مستعمل-دبي.jpg",
      alt: "شراء اثاث مستعمل دبي",
    },
    path: "/شراء-اثاث-مستعمل-دبي",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(DubaiPageFaqs));

const page = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className=" overflow-hidden">
        <LocHeroSection
          title=" شراء اثاث مستعمل دبي - أفضل الأسعار والخدمة السريعة"
          desc=" هل تبحث عن شراء اثاث مستعمل دبي بسعر عادل وخدمة موثوقة؟ نحن شركة شراء
          اثاث مستعمل متخصصة في شراء وبيع الأثاث والأجهزة المنزلية في دبي منذ
          أكثر من عشر سنوات."
          img={{ src: imgSrc, alt: "شراء اثاث مستعمل دبي" }}
        />
        <div className="mt-16 max-w-6xl mx-auto md:px-0 px-4">
          <p className="text-2xl text-center font-medium text-secondary">
            نعمل في جميع مناطق دبي:
          </p>
          <ul className="mt-6 flex gap-5 items-center justify-center flex-wrap">
            <li className="py-2 flex items-center justify-center gap-x-2 px-4 border border-primary rounded-3xl bg-primary/30">
              <CheckCircle size={17} /> من دبي مارينا
            </li>
            <li className="py-2 flex items-center justify-center gap-x-2 px-4 border border-primary rounded-3xl bg-primary/30">
              <CheckCircle size={17} /> والخليج التجاري
            </li>
            <li className="py-2 flex items-center justify-center gap-x-2 px-4 border border-primary rounded-3xl bg-primary/30">
              <CheckCircle size={17} /> إلى ديرة
            </li>
            <li className="py-2 flex items-center justify-center gap-x-2 px-4 border border-primary rounded-3xl bg-primary/30">
              <CheckCircle size={17} /> والبرشاء
            </li>
          </ul>

          <div className="md:text-2xl text-lg text-secondary mt-16 md:px-16 leading-relaxed">
            <p className="md:inline">
              نشتري اثاث مستعمل دبي بأسعار واقعية ونقدم لك المبلغ في نفس اليوم،
              مع خدمة تفكيك ونقل مجانية. الفكرة بسيطة:
            </p>
            <p className="md:inline">
              تتصل بنا، ثم نأتي لمعاينة الأثاث، ونتفق على السعر المناسب، وبعدها
              نعطيك المبلغ فوراً.
            </p>
            <p className="md:inline">
              ثم نتولى نحن موضوع التفكيك والنقل بالكامل دون أي تكلفة إضافية
              عليك.
            </p>
          </div>
        </div>
        <section className="mt-36 max-w-6xl mx-auto md:px-0 px-4 grid md:grid-cols-2 grid-cols-1 gap-16">
          <div className="md:order-2 order-1">
            <h2
              className="md:text-4xl text-3xl text-secondary font-bold leading-tight
          "
            >
              لماذا تبيع أثاثك لنا بدلاً من دوبيزل أو الإعلانات المبوبة؟
            </h2>
            <p className="mt-5 text-muted-foreground">
              الكثير من الناس يجربون دوبيزل اثاث مستعمل دبي أو مواقع الإعلانات
              الأخرى. المشكلة أن العملية تأخذ وقتاً طويلاً ومجهوداً كبيراً:
            </p>
            <div className="mt-12 grid grid-cols-2 items-center border-b-2 pb-3 border-dashed">
              <div className="flex items-center justify-start gap-x-5">
                <div className="w-10 h-10 bg-primary text-secondary rounded-2xl flex items-center justify-center">
                  <Megaphone />
                </div>

                <p className=" font-medium"> تنشر الإعلان</p>
              </div>{" "}
              <div className="flex items-center justify-start gap-x-5">
                <div className="w-10 h-10 bg-primary text-secondary rounded-2xl flex items-center justify-center">
                  <PhoneCall />
                </div>

                <p className=" font-medium"> تنتظر الاتصالات</p>
              </div>{" "}
            </div>
            <div className="mt-5 grid md:grid-cols-7 items-center border-b-2 pb-3 border-dashed">
              <div className="col-span-1 md:mb-0 mb-2">
                <div className="w-10 h-10 bg-primary text-secondary rounded-2xl flex items-center justify-center">
                  <Users2Icon />
                </div>
              </div>
              <div className="col-span-6">
                <p className=" font-medium">
                  {" "}
                  تستقبل عشرات المعاينات من أشخاص مختلفين
                </p>
              </div>
            </div>{" "}
            <div className="mt-5 grid md:grid-cols-7 items-center border-b-2 pb-3 border-dashed">
              <div className="col-span-1 md:mb-0 mb-2">
                <div className="w-10 h-10 bg-primary text-secondary rounded-2xl flex items-center justify-center">
                  <TrendingDown />
                </div>
              </div>
              <div className="col-span-6">
                <p className=" font-medium">
                  {" "}
                  وفي النهاية كل واحد يحاول ينزل السعر لأقصى حد ممكن
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="bg-muted md:h-auto h-80 rounded-3xl md:order-1 order-2 relative  overflow-hidden">
            <Image
              src={"/loc/أفضل-شركة-للأثاث-المستعمل-في-دبي.jpg"}
              alt=" أفضل شركة للأثاث المستعمل في دبي"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <WhySellToUs />
        <SellProcessSection
          title="كيفية بيع الأثاث المستعمل في دبي؟"
          description="العملية بسيطة ومباشرة.
ما فيه تعقيدات أو إجراءات طويلة.
"
          details={[
            {
              title: "الخطوة الأولى: اتصل بنا",
              desc: (
                <>
                  <p>أرسل لنا رسالة على واتساب أو اتصل على الرقم مباشرة.</p>
                  <p>نحن نرد خلال 5-10 دقائق في العادة.</p>
                  <p>
                    لو تقدر ترسل صور للأثاث، يكون أفضل لأننا نعطيك سعراً
                    تقريبياً من البداية.
                  </p>
                </>
              ),
            },
            {
              title: "الخطوة الثانية: الزيارة والمعاينة",
              desc: (
                <>
                  <ul className="text-right space-y-3">
                    {[
                      "	نحدد موعد يناسبك",
                      "	نأتي لموقعك في دبي",
                      "	الزيارة مجانية",
                      "	نفحص القطع ونقيّم حالتها",
                      "	نعطيك سعراً نهائياً",
                    ].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="mt-1 flex-shrink-0">
                          <CheckCircle2
                            size={16}
                            style={{ color: "##413332" }}
                            className="opacity-60"
                          />
                        </span>
                        <span className="opacity-90 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ),
            },
            {
              title: "الخطوة الثالثة: الدفع",
              desc: (
                <>
                  <p className="mb-4">لو وافقت على السعر، ندفع لك فوراً:</p>
                  <ul className="text-right space-y-3">
                    {["	نقداً", "	تحويل بنكي", "	شيك"].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="mt-1 flex-shrink-0">
                          <CheckCircle2
                            size={16}
                            style={{ color: "##413332" }}
                            className="opacity-60"
                          />
                        </span>
                        <span className="opacity-90 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ),
            },
            {
              title: "الخطوة الرابعة: التفكيك والنقل",
              desc: (
                <>
                  <ul className="text-right space-y-3">
                    {[
                      "فريقنا يتولى تفكيك القطع",
                      "نقلها بشكل آمن",
                      "حماية المصاعد والممرات في المبنى",
                    ].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="mt-1 flex-shrink-0">
                          <CheckCircle2
                            size={16}
                            style={{ color: "##413332" }}
                            className="opacity-60"
                          />
                        </span>
                        <span className="opacity-90 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3">ما عليك إلا تسلم المبلغ وتستريح.</p>
                </>
              ),
            },
          ]}
        />
        <FurnitureBuyingSection />
        <section className="max-w-4xl mt-36 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            المناطق التي نغطيها في دبي
          </h2>
          <p className="text-muted-foreground mt-5">
            نعمل في كل مناطق دبي. مقرنا الرئيسي في الشارقة، لكن معظم عملائنا في
            دبي ونوصل لأي منطقة.
          </p>
          <div className="grid md:grid-cols-2 gird-cols-1 gap-10 md:mt-16 mt-10">
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                دبي مارينا وجي بي آر
              </h3>

              <ul
                className="
      mt-5 text-muted-foreground list-inside list-disc"
              >
                <li>المنطقة هذه فيها حركة عالية - ناس تنتقل، ناس تسافر</li>
                <li>نشتري اثاث مستعمل في دبي مارينا بشكل شبه يومي</li>
                <li>
                  الأبراج الكثيرة والشقق المفروشة تعني أن في طلب دائم على شراء
                  الأثاث
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                الخليج التجاري وداون تاون
              </h3>

              <ul
                className="
      mt-5 text-muted-foreground list-inside list-disc"
              >
                <li>منطقة راقية</li>
                <li>أثاثها عادة يكون بحالة جيدة</li>
                <li>
                  نشتري من الأبراج السكنية والفنادق الشقق في الخليج التجاري وحول
                  برج خليفة
                </li>
                <li>نفس الجودة، لكن بسعر أقل بكثير.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                جميرا ونخلة جميرا
              </h3>

              <ul
                className="
      mt-5 text-muted-foreground list-inside list-disc"
              >
                <li>الفلل والشقق الفاخرة في جميرا فيها أثاث نوعية ممتازة</li>
                <li>
                  نتعامل مع العائلات اللي تبيع محتويات فيلا كاملة أو شقة كبيرة
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                ديرة وبر دبي
              </h3>

              <ul
                className="
      mt-5 text-muted-foreground list-inside list-disc"
              >
                <li>المناطق القديمة في دبي فيها سوق نشط للأثاث المستعمل</li>
                <li>نشتري من الشقق والبيوت</li>
                <li>نقدم نفس الخدمة السريعة</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                البرشاء ودبي لاند
              </h3>

              <ul
                className="
      mt-5 text-muted-foreground list-inside list-disc"
              >
                <li>مناطق سكنية كبيرة</li>
                <li>فيها عائلات كثيرة</li>
                <li>نصل للبرشاء ودبي لاند بسرعة</li>
                <li>نتعامل مع بيع الأثاث بكميات كبيرة أو صغيرة</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                المرابع العربية ودبي هيلز
              </h3>

              <ul
                className="
      mt-5 text-muted-foreground list-inside list-disc"
              >
                <li>الفلل في هذه المناطق عادة فيها أثاث فاخر</li>
                <li>نشتري من المجمعات السكنية الراقية</li>
                <li>نعطي تقييماً عادلاً للقطع النوعية</li>
              </ul>
            </div>
          </div>
        </section>
        <PriceDetermination />
        <section className="flex mt-32 items-center justify-center">
          <div className="w-full max-w-6xl md:px-6 px-3 py-10">
            <h2 className="font-bold md:text-4xl text-3xl  sm:max-w-xl md:text-[2.5rem] md:leading-[1.2]">
              لماذا نختلف عن مشتري الأثاث الآخرين؟
            </h2>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              سوق شراء اثاث مستعمل في دبي فيه كثير من الناس - أفراد، شركات
              صغيرة، وسطاء. الفرق بيننا وبينهم في عدة نقاط:
            </p>
            <div className="mx-auto mt-12 grid w-full gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "نحن شركة مرخصة",
                  desc: "عندنا مقر في الشارقة وتراخيص رسمية. مو مجرد رقم واتساب وشخص يأتي بسيارة صغيرة.",
                  icon: (
                    <>
                      <Verified className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "الخبرة",
                  desc: "أكثر من عشر سنوات في هذا المجال. نعرف قيمة الأثاث الحقيقية ومتطلبات السوق.",
                  icon: (
                    <>
                      <Medal className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "الشفافية",
                  desc: ": نوضح لك كيف نحسب السعر. ما فيه مساومات طويلة أو محاولات تخفيض السعر بحجج واهية.",
                  icon: (
                    <>
                      <HandCoins className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "الخدمة المتكاملة",
                  desc: "التقييم، الدفع، التفكيك، النقل - كله نتولاه نحن. أنت فقط تستلم المبلغ.",
                  icon: (
                    <>
                      <ListCheckIcon className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "السرعة",
                  desc: "نرد بسرعة ونصل في نفس اليوم لو ممكن. ما تنتظر أيام أو أسابيع.",
                  icon: (
                    <>
                      <TimerResetIcon className="text-secondary" />
                    </>
                  ),
                },
                {
                  title: "الضمير في الشغل",
                  desc: "كل قطعة نشتريها، نصلحها ونلمعها ونعقمها قبل ما نبيعها. ما نشتري فقط عشان نبيع بسرعة ونكسب فلوس.",
                  icon: (
                    <>
                      <BrushCleaning className="text-secondary" />
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
        <section className="max-w-4xl mt-36 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            متى تبيع أثاثك؟
          </h2>
          <p className="text-muted-foreground mt-5">
            في عدة مواقف يحتاج فيها الناس يبيعون أثاثهم:
          </p>
          <div className="grid md:grid-cols-2 gird-cols-1 gap-10 md:mt-16 mt-10">
            <div>
              <p className="text-xl text-secondary  font-semibold">
                الانتقال لبلد آخر
              </p>

              <p className="text-muted-foreground mt-5">
                : كثير من الوافدين في الإمارات يقررون يسافرون بعد فترة. شحن
                الأثاث مكلف، فالبيع يكون الخيار الأفضل.
              </p>
            </div>

            <div>
              <p className="text-xl text-secondary  font-semibold">
                تغيير الأثاث
              </p>

              <p className="text-muted-foreground mt-5">
                بعد كم سنة، تحب تغير ديكور البيت. بدل ما تترك الأثاث القديم في
                المخزن، تبيعه وتستفيد من المبلغ.
              </p>
            </div>

            <div>
              <p className="text-xl text-secondary  font-semibold">
                الانتقال لمسكن أصغر
              </p>

              <p className="text-muted-foreground mt-5">
                : لما تنتقل من فيلا لشقة مثلاً، ما تقدر تاخذ كل الأثاث معك.
              </p>
            </div>

            <div>
              <p className="text-xl text-secondary  font-semibold">
                فض الشركة أو المكتب
              </p>

              <p className="text-muted-foreground mt-5">
                الشركات اللي تقفل أو تنقل مقرها تحتاج تتخلص من الأثاث المكتبي.
              </p>
            </div>

            <div>
              <p className="text-xl text-secondary  font-semibold">
                فك الشراكة أو الطلاق
              </p>

              <p className="text-muted-foreground mt-5">
                : للأسف، هذه مواقف تحصل. يحتاج الأطراف يبيعون الأثاث المشترك
                ويقسمون المبلغ.
              </p>
            </div>

            <div>
              <p className="text-xl text-secondary  font-semibold">
                الحاجة لسيولة مالية
              </p>

              <p className="text-muted-foreground mt-5">
                أحياناً تحتاج مبلغاً سريعاً، والأثاث موجود وممكن تحوله لنقد في
                نفس اليوم.
              </p>
            </div>
            <p className="text-muted-foreground mt-5">
              في كل الحالات هذه، نحن موجودون نساعدك. العملية بسيطة والدفع فوري.
            </p>
          </div>
        </section>
        <SellingTips />
        <section className="max-w-4xl mt-36 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            ماذا نفعل بالأثاث بعد الشراء؟
          </h2>
          <p className="text-muted-foreground mt-5">
            كثير من الناس يسألون: وش تسوون بالأثاث بعد ما تشترونه؟
          </p>
          <p className="text-muted-foreground mt-2">
            نحن ما نشتري الأثاث فقط عشان نبيعه بنفس الحالة. كل قطعة تمر بعملية
            تجهيز:
          </p>
          <div className="grid md:grid-cols-2 gird-cols-1 gap-10 md:mt-16 mt-10">
            <div>
              <p className="text-xl text-secondary  font-semibold">
                الفحص الشامل
              </p>

              <p className="text-muted-foreground mt-5">
                نفحص كل قطعة بعناية. لو فيها كسور أو مشاكل، نصلحها.
              </p>
            </div>

            <div>
              <p className="text-xl text-secondary  font-semibold">
                الإصلاح والصيانة
              </p>

              <p className="text-muted-foreground mt-5">
                : الخدوش نلمعها، القطع المكسورة نصلحها، الأجزاء التالفة نبدلها.
              </p>
            </div>

            <div>
              <p className="text-xl text-secondary  font-semibold">
                التنظيف والتعقيم
              </p>

              <p className="text-muted-foreground mt-5">
                خاصة القطع المنجدة مثل الصوفات والمراتب. نعقمها بطريقة احترافية
                ونتأكد أنها خالية من الحشرات والبكتيريا.
              </p>
            </div>

            <div>
              <p className="text-xl text-secondary  font-semibold">التلميع</p>

              <p className="text-muted-foreground mt-5">
                القطع الخشبية نلمعها عشان تطلع بمظهر جيد.
              </p>
            </div>

            <p className="text-muted-foreground mt-5">
              بعد كل هذا، نبيع القطع في معرضنا أو عن طريق قنوات البيع الأخرى.
              ونعطي ضماناً على القطع للمشتري الجديد.
            </p>
            <p className="text-muted-foreground mt-5">
              هذا يعني أن الأثاث اللي تبيعه لنا ما راح ينتهي في مكان عشوائي. راح
              يستفيد منه شخص آخر، وهذا شيء جيد للبيئة وللمجتمع
            </p>
          </div>
        </section>
        <FAQSection faqs={DubaiPageFaqs} />
        <CTA
          title="تواصل معنا لبيع أثاثك المستعمل في دبي"
          desc="بيع الأثاث المستعمل ما لازم يكون معقداً أو مرهقاً.
مع خدمة شراء اثاث مستعمل دبي اللي نقدمها، العملية بسيطة ومباشرة:
"
        />
      </main>
    </>
  );
};

export default page;
