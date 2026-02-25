import CTA from "@/components/main/CTA";
import FAQs from "@/components/main/FAQs";
import { WhyChooseUs } from "@/components/main/Feature";
import HeroSection from "@/components/main/HeroSection";
import InspectionProcess from "@/components/main/InspectionProcess";
import Locations from "@/components/main/Locations";
import { Logos8 } from "@/components/main/Logos";
import Services from "@/components/main/Services";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { HomePageFAQs } from "@/lib/faqsList";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "شراء اثاث مستعمل في الإمارات | بيع وشراء أثاث بأفضل الأسعار",
      desc: "شراء اثاث مستعمل في الإمارات بأفضل الأسعار. نشتري ونبيع الأثاث المنزلي والمكتبي والأجهزة الكهربائية في دبي والشارقة وأبوظبي وعجمان. فك ونقل مجاني، دفع فوري، وضمان على كل قطعة. تواصل معنا الآن!",
    },
    image: {
      path: "/شراء-الاثاث-المستعمل.jpg",
      alt: "شراء اثاث مستعمل في الإمارات ",
    },
    path: "",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(HomePageFAQs));

export default function Hero() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="mt-28 overflow-hidden">
        <HeroSection />
        <section className={" mt-36"}>
          <div className="max-w-6xl mx-auto md:px-0 px-4">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-2 md:order-2 order-1">
                <h2 className="md:text-4xl text-3xl leading-tight font-bold mb-5">
                  حوّل أثاثك القديم إلى كاش <br />
                  فوري في 10 دقيقة
                </h2>
                <p className="md:text-lg text-base text-muted-foreground">
                  لأكثر من عشر سنوات، ساعدنا آلاف العملاء في بيع أثاثهم المستعمل
                  بطريقة سهلة وسريعة. نقدم تقييماً مجانياً، فك ونقل مجاني، ودفع
                  فوري — نقداً أو تحويل بنكي أو أونلاين.
                </p>
                <p className="md:text-lg text-base text-muted-foreground">
                  والأهم: كل قطعة نبيعها تأتي مع ضمان وسياسة إرجاع، وهذا شيء لن
                  تجده عند غيرنا. سواء كنت تنتقل لمنزل جديد، أو تغادر الإمارات،
                  أو تريد تجديد أثاث بيتك — تواصل معنا الآن واحصل على عرض سعر
                  خلال 5 إلى 10 دقائق فقط.
                </p>

                <div className="flex items-center gap-x-3 mt-5">
                  <Button size={"lg"}>واتساب لنا</Button>
                  <Button size={"lg"} variant={"secondary"}>
                    اتصل بنا مباشرة
                  </Button>
                </div>
              </div>
              <div className="rounded-4xl md:order-1 order-2 relative md:h-100 h-[300px] bg-primary/50 overflow-hidden">
                <Image
                  src={"/بيع-الأثاث-المستعمل-فوراً.jpg"}
                  alt="بيع الأثاث المستعمل فوراً"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <Services />

        <section className="bg-[#413332] py-24 mt-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
              بيع اثاث مستعمل في 3 خطوات — من بيتك إلى الدفع خلال ساعات
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-white/80">
              عملية بيع الأثاث المستعمل معنا بسيطة ومباشرة. لا تحتاج تنزل من
              بيتك أو تبحث عن مشتري أو تتفاوض مع غرباء. فقط اتبع هذه الخطوات
              الثلاث:
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5d7cc] text-xl font-extrabold text-[#413332]">
                  1
                </span>
                <h3 className="mb-3 text-lg font-bold">
                  تواصل معنا عبر الواتساب أو الهاتف
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">
                  أرسل لنا صوراً واضحة للأثاث أو الأجهزة التي تريد بيعها عبر
                  الواتساب. اذكر لنا النوع والعلامة التجارية إن أمكن. فريقنا يرد
                  خلال 5 إلى 10 دقائق — نحن من أسرع الشركات رداً في السوق. يمكنك
                  أيضاً الاتصال بنا مباشرة.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5d7cc] text-xl font-extrabold text-[#413332]">
                  2
                </span>
                <h3 className="mb-3 text-lg font-bold">
                  تقييم مجاني وعرض سعر فوري
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">
                  بناءً على الصور والمعلومات، نقدم لك عرض سعر مبدئي. إذا وافقت،
                  يزور فريقنا المختص موقعك لفحص الأثاث شخصياً. التقييم مجاني
                  بالكامل ولا يلزمك بشيء. نعتمد في التسعير على أربعة عوامل
                  واضحة: حالة القطعة، العلامة التجارية، عمر الأثاث، والطلب
                  الحالي في السوق. بهذه الطريقة تعرف بالضبط كيف وصلنا للسعر —
                  بدون مفاجآت.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5d7cc] text-xl font-extrabold text-[#413332]">
                  3
                </span>
                <h3 className="mb-3 text-lg font-bold">
                  فك مجاني، تحميل، ودفع فوري
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">
                  بعد الاتفاق، فريقنا يتولى كل شيء: فك الأثاث بأيدي متخصصة،
                  تغليف وتحميل آمن، ونقل بسيارات مجهزة. الدفع يتم في نفس اللحظة
                  — اختر الطريقة التي تناسبك: نقداً، تحويل بنكي فوري، أو دفع
                  أونلاين. نوفر أيضاً خيار الدفع بشيك مصدّق للمبالغ الكبيرة.
                </p>
              </div>
            </div>
            <p className="max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 text-primary mx-auto mt-10 text-center">
              من التواصل إلى الدفع — العملية كاملة تتم في أقل من 24 ساعة في أغلب
              الحالات.
            </p>
          </div>
        </section>
        <WhyChooseUs />
        <Logos8 />
        <InspectionProcess />
        <Locations />
        <section className="max-w-4xl mt-32 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            عن شركتنا — أكثر من 10 سنوات في خدمة سوق الاثاث المستعمل
          </h2>
          <p className="mt-10 text-muted-foreground max-w-3xl">
            شركة شراء اثاث مستعمل تأسست في دبي لتقديم حل متكامل لبيع وشراء
            الأثاث المستعمل في الإمارات. بدأنا قبل أكثر من عشر سنوات برؤية
            واضحة: نريد أن نكون البديل الموثوق للأسواق العشوائية والتجار غير
            المرخصين.
          </p>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            اليوم، لدينا فريق متخصص يضم مقيّمين محترفين، فنيي ترميم وتنجيد،
            ومنسقي خدمات لوجستية. لدينا معرض فعلي في دبي يمكنك زيارته، وورشة
            ترميم مجهزة بالكامل، وأسطول سيارات نقل مخصصة.
          </p>
          <div className="mt-5">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mt-5">
                هذه ليست شركة &quot;واتساب وشاحنة&quot; — هذا عمل مؤسسي حقيقي
                بترخيص تجاري وعنوان ثابت.
              </p>
              <p className="text-muted-foreground mt-5">
                رسالتنا بسيطة: نريد تحويل تجربة بيع وشراء الأثاث المستعمل من
                عملية مرهقة ومليئة بعدم الثقة إلى تجربة سهلة وسريعة وآمنة. ونؤمن
                أن إعادة استخدام الأثاث ليست فقط ذكاء مالي — هي أيضاً مسؤولية
                بيئية تتماشى مع أهداف الإمارات في الاستدامة.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mt-16 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            نحو اقتصاد دائري — كيف نساهم في حماية البيئة
          </h2>
          <p className="mt-10 text-muted-foreground max-w-3xl">
            كل قطعة أثاث نعيد تدويرها بدل رميها هي مساهمة في حماية البيئة. في
            الإمارات، حيث معدل التنقل مرتفع وتبديل الأثاث متكرر، يمكن لسوق
            الأثاث المستعمل أن يقلل كميات كبيرة من النفايات.
          </p>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            نحن نعمل وفق نموذج الاقتصاد الدائري: نشتري الأثاث المستعمل، نجدده،
            ونعيد بيعه لعائلة جديدة. بهذه الطريقة، الأثاث يستمر في الخدمة بدل أن
            ينتهي في المكب. هذا يتماشى مع رؤية الإمارات 2050 للحياد المناخي
            واستراتيجية دبي للطاقة النظيفة.
          </p>
          <div className="mt-5">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mt-5">
                عندما تبيع أثاثك لنا أو تشتري أثاثاً مستعملاً منا، أنت تساهم في
                هذا الجهد. وفي نفس الوقت، توفر على نفسك أموالاً كثيرة. هذه
                معادلة يربح فيها الجميع.
              </p>
            </div>
          </div>
        </section>
        <FAQs faqs={HomePageFAQs} />
        <CTA />
      </main>
    </>
  );
}
