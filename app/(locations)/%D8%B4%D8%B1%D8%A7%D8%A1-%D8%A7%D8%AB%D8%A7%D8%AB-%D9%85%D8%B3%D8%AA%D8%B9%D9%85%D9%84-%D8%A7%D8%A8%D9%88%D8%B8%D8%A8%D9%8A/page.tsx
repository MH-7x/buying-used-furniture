import CTA from "@/components/main/CTA";
import FAQSection from "@/components/main/FAQs";
import FurniturePriceGuide from "@/components/main/FurniturePricingGuide";

import LocHeroSection from "@/components/main/LocHeroSection";
import SellProcessSection from "@/components/main/SellingProcess";
import WhyChooseUsAbuDhabi from "@/components/main/WhyChooseUsAbuDhabi";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { AbuDhabiFaqs } from "@/lib/faqsList";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import imgSrc from "@/public/loc/شراء-اثاث-مستعمل-ابوظبي.jpg";
import {
  Bed,
  BedDouble,
  Bolt,
  Building2,
  CookingPot,
  Info,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "شراء اثاث مستعمل ابوظبي | دفع نقدي فوري",
      desc: "شراء اثاث مستعمل ابوظبي بأفضل الأسعار. دفع نقدي فوري، استلام مجاني، ضمان على جميع القطع. نشتري الأرائك وغرف النوم والأجهزة الكهربائية. تواصل عبر الواتساب الآن!",
    },
    image: {
      path: "/loc/شراء-اثاث-مستعمل-ابوظبي.jpg",
      alt: "شراء اثاث مستعمل ابوظبي",
    },
    path: "/شراء-اثاث-مستعمل-ابوظبي",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(AbuDhabiFaqs));

const AbuDhabiPage = () => {
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
          title="شراء اثاث مستعمل ابوظبي – دفع نقدي فوري "
          desc="هل تبحث عن شراء اثاث مستعمل ابوظبي بسعر عادل ومعاملة واضحة من البداية؟ في شركة شراء اثاث مستعمل، نشتري جميع أنواع الأثاث المنزلي والمكتبي والأجهزة الكهربائية في كل مناطق أبوظبي. "
          img={{
            src: imgSrc,
            alt: "شراء اثاث مستعمل ابوظبي",
          }}
        />
        <div className="mt-16 max-w-6xl mx-auto md:px-0 px-4">
          <div className="md:text-2xl text-lg text-secondary md:px-16 leading-relaxed">
            <p className="md:inline">
              لا نحتاج منك غير صور عبر الواتساب، ونرد عليك خلال 5 إلى 10 دقائق
              بعرض سعر واضح.
            </p>
            <p className="md:inline">
              اثاث مستعمل من الشقق والفلل والمكاتب، ونبيع اثاث مستعمل للبيع
              ابوظبي بأسعار معقولة وجودة مضمونة.
            </p>
            <p className="md:inline">
              نحن نعمل في هذا المجال منذ أكثر من 10 سنوات، ونعرف السوق الإماراتي
              جيداً. لا نفاوض عند الباب ولا نغيّر السعر بعد الاتفاق.
            </p>
            <p className="md:inline">
              نوصلك بفريقنا، نفك الأثاث، ننقله بأمان، وندفع لك نقداً في نفس
              اللحظة.
            </p>
          </div>
        </div>
        <section className="mt-36 max-w-6xl mx-auto md:px-0 px-4 grid md:grid-cols-2 grid-cols-1 gap-16">
          <div className="md:order-2 order-1">
            <p className="md:text-lg mt-5 text-muted-foreground">
              وكل قطعة نبيعها للمشترين تأتي مع ضمان – وهذا شيء لن تجده عند أي
              شركة أخرى في أبوظبي.
            </p>
            <p className="md:text-lg mt-5 text-muted-foreground">
              سواء كنت عائلة وافدة تستعد للانتقال، أو صاحب شقة يجدد ديكوره، أو
              شركة تصفي أثاث مكتبها القديم – نحن نتعامل مع كل الحالات. نشتري من
              الشقق والفلل والمكاتب والفنادق.
            </p>
            <p className="md:text-lg mt-5 text-muted-foreground">
              ونبيع لعائلات وأفراد يبحثون عن أثاث بحالة ممتازة بأسعار تناسب
              ميزانيتهم. خدمة بيع وشراء اثاث مستعمل ابوظبي عندنا مصممة لتكون
              سهلة وسريعة من أول تواصل لآخر خطوة.
            </p>
            <Button size={"lg"} className="mt-5">
              أرسل صور أثاثك عبر الواتساب الآن{" "}
            </Button>
          </div>
          <div className="bg-muted md:h-auto h-80 rounded-3xl md:order-1 order-2 relative  overflow-hidden">
            <Image
              src={"/loc/أرسل-صور-أثاثك-عبر-الواتساب-الآن.jpg"}
              alt=" ارسل صور اثاثك عبر الواتساب الان"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <WhyChooseUsAbuDhabi />
        <section id="furniture-we-buy" className="mt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                أنواع الاثاث المستعمل التي نشتريها في ابوظبي
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                نشتري تقريباً كل شيء. سواء كنت تصفّي شقة كاملة قبل السفر، أو
                تبدّل غرفة نوم واحدة، أو عندك مكتب كامل تحتاج تفرغه – نحن
                جاهزين.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                نتعامل مع جميع الماركات المعروفة مثل ايكيا ودانوب وهوم سنتر وبان
                امارات ورويال فيرنتشر، وعندنا خبرة في تقييم كل ماركة حسب جودتها
                وطلب السوق عليها.
              </p>
            </div>

            {/* Masonry-like Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
              {[
                {
                  id: 1,
                  title: "شراء كنب وأرائك ومجالس مستعملة",
                  image: "/loc/شراء-كنب-وأرائك-ومجالس-مستعملة.jpg",
                  icon: <Bed className="w-6 h-6" />,

                  description: (
                    <>
                      <p>
                        الكنب والأرائك من أكثر القطع اللي نشتريها في ابوظبي.
                        سواء كان عندك طقم كنب على شكل L، أو أريكة جلد، أو مجلس
                        عربي كامل – نشتري الكل.
                      </p>
                      <p>
                        ونهتم بشكل خاص بتعقيم المفروشات القماشية والمجالس قبل
                        إعادة بيعها، باستخدام بروتوكول تنظيف احترافي يضمن أن
                        القطعة تكون نظيفة وخالية من أي حشرات.
                      </p>
                      <p>
                        لو عندك كنب مستعمل للبيع في ابوظبي، أرسل لنا صور عبر
                        الواتساب وراح نعطيك عرض سعر خلال دقائق.
                      </p>
                    </>
                  ),
                  highlight:
                    "طقم الكنب الكامل من ماركة معروفة مثل هوم سنتر أو ايكيا يحصل على تقييم أعلى من القطع بدون ماركة. والحالة العامة للقماش أو الجلد تلعب دور كبير في تحديد السعر. نصيحتنا: لو تبي تبيع الكنب، نظفه قبل ما تصوره وتواصل معنا.",
                },
                {
                  id: 2,
                  title: "شراء غرف نوم وأسرّة مستعملة",
                  image: "/loc/شراء-غرف-نوم-وأسرّة-مستعملة.jpg",
                  icon: <BedDouble className="w-6 h-6" />,

                  description: (
                    <>
                      <p>
                        نشتري غرف النوم الكاملة – السرير والدولاب والتسريحة
                        والكومودينو – أو القطع المنفردة حسب حالتها.
                      </p>
                      <p>
                        غرف نوم ايكيا ودانوب عليها طلب كبير في السوق، ونعطي
                        أسعار جيدة للقطع اللي بحالة ممتازة. لو عندك غرف نوم
                        مستعملة للبيع في الامارات، لا تتردد في التواصل معنا.
                      </p>
                      <p>فريقنا يتولى الفك والنقل بالكامل.</p>
                    </>
                  ),
                },
                {
                  id: 3,
                  title: "شراء أجهزة كهربائية ومنزلية مستعملة",
                  image: "/loc/شراء-أجهزة-كهربائية-ومنزلية-مستعملة.jpg",
                  icon: <Bolt className="w-6 h-6" />,

                  description: (
                    <>
                      <p>
                        الأجهزة الكهربائية المستعملة لها سوق كبير في ابوظبي،
                        خاصة الثلاجات والغسالات والمكيفات.
                      </p>
                      <p>
                        نشتري جميع الأجهزة المنزلية بشرط أنها تعمل بشكل سليم.
                        فريقنا يفحص كل جهاز ويتأكد من أدائه قبل الشراء.
                      </p>
                      <p>
                        لو عندك ثلاجة مستعملة أو غسالة مستعملة أو مكيفات مستعملة
                        تبي تبيعها في ابوظبي – تواصل معنا مباشرة.
                      </p>
                    </>
                  ),
                },
                {
                  id: 4,
                  title: "شراء أثاث مكتبي مستعمل في ابوظبي",
                  image: "/loc/شراء-أثاث-مكتبي-مستعمل-في-ابوظبي.jpg",
                  icon: <Building2 className="w-6 h-6" />,

                  description: (
                    <>
                      <p>
                        نخدم الشركات والمكاتب بنفس الاحترافية. نشتري المكاتب
                        وكراسي المكتب وطاولات الاجتماعات وخزائن الملفات ومحطات
                        العمل الكاملة.
                      </p>
                      <p>
                        لو شركتك تنتقل لمقر جديد أو تحتاج تصفية أثاث مكتبي
                        مستعمل في ابوظبي، نقدم خدمة تقييم شاملة وسريعة مع استلام
                        من الموقع مباشرة.
                      </p>
                      <p>نتعامل مع تصفيات المكاتب والفنادق والفلل الكاملة.</p>
                    </>
                  ),
                },
                {
                  id: 5,
                  title: "شراء أثاث مطابخ وغرف طعام مستعملة",
                  image: "/loc/شراء-أثاث-مطابخ-وغرف-طعام-مستعملة.jpg",
                  icon: <CookingPot className="w-6 h-6" />,

                  description: (
                    <>
                      <p>
                        طاولات الطعام والبوفيهات وخزائن المطبخ – كلها قطع
                        نشتريها بانتظام.
                      </p>
                      <p>
                        الطقم الكامل دائماً يحصل على تقييم أعلى من القطعة
                        المنفردة.
                      </p>
                      <p>
                        لو عندك طاولة طعام مستعملة بحالة جيدة مع الكراسي، تواصل
                        معنا وراح تحصل على عرض سعر عادل.
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
                  <div className="relative md:h-80 h-72 overflow-hidden bg-muted ">
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
                    <h3 className="text-xl font-medium text-secondary mb-5">
                      {section.title}
                    </h3>

                    {section.description && (
                      <div className="text-muted-foreground flex flex-col gap-y-2 mb-4 leading-relaxed">
                        {section.description}
                      </div>
                    )}

                    {section.highlight && (
                      <div
                        className={`mt-auto p-4  text-sm leading-relaxed flex gap-3 bg-primary/50 text-secondary border-r-4 border-primary`}
                      >
                        <Info className="w-5 h-5 shrink-0 mt-0.5" />
                        <p>{section.highlight}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <SellProcessSection
          title="كيف تبيع اثاثك المستعمل في ابوظبي – 3 خطوات سهلة"
          description="بيع اثاث مستعمل ابوظبي ما يحتاج يكون معقد. خدمة بيع وشراء اثاث مستعمل في ابوظبي عندنا مبنية على 3 خطوات بسيطة:"
          details={[
            {
              title: "الخطوة الأولى: أرسل صور أثاثك عبر الواتساب ",
              desc: (
                <>
                  <p>
                    صوّر القطع اللي تبي تبيعها من أكثر من زاوية. لا تحتاج تكون
                    صور احترافية – المهم تكون واضحة.{" "}
                  </p>
                  <p>
                    . أرسلها لنا عبر الواتساب، وفريقنا يرد عليك خلال 5 إلى 10
                    دقائق بعرض سعر مبدئي واضح وشفاف
                  </p>
                </>
              ),
            },
            {
              title: "الخطوة الثانية: فريقنا يصل إليك",
              desc: (
                <>
                  <p>بعد موافقتك على العرض المبدئي، ننسق معك موعد مناسب.</p>
                  <p>
                    فريقنا يوصل لموقعك، يعاين الأثاث بشكل مباشر، ويعطيك السعر
                    النهائي. السعر اللي اتفقنا عليه هو السعر اللي تحصل عليه – ما
                    نغيّره عند الباب.
                  </p>
                  <p>
                    هذه نقطة مهمة لأن كثير من المشترين في السوق يغيرون السعر لما
                    يوصلون.
                  </p>
                </>
              ),
            },
            {
              title: "الخطوة الثالثة: دفع نقدي فوري + استلام مجاني",
              desc: (
                <>
                  <p>
                    فريقنا يتولى فك الأثاث بالكامل وتغليفه ونقله بخدمة النقل
                    الآمن المعتمد اللي تحمي عقارك.
                  </p>
                  <p>
                    وتحصل على المبلغ نقداً في نفس اللحظة. العملية كلها ممكن
                    تنتهي في نفس اليوم.
                  </p>
                </>
              ),
            },
          ]}
        />

        <section className="max-w-4xl mt-36 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            مناطق خدماتنا في ابوظبي – نغطي جميع الأحياء
          </h2>
          <p className="mt-5 text-muted-foreground max-w-3xl">
            خدمة شراء اثاث مستعمل ابوظبي اللي نقدمها تغطي جميع مناطق الإمارة
            بدون استثناء. سواء كنت في شقة صغيرة في المدينة أو فيلا كبيرة في
            الضواحي، فريقنا يوصلك.
          </p>
          <p className="mt-5 text-muted-foreground">
            خدمة بيع وشراء اثاث مستعمل في ابوظبي عندنا شاملة ومتكاملة. وهذي أبرز
            المناطق اللي نخدمها:
          </p>
          <div className=" md:mt-16 mt-10">
            <div className="max-w-3xl">
              <h3 className="text-xl text-secondary  font-semibold">
                شراء اثاث مستعمل مصفح ابوظبي
              </h3>
              <p className="text-muted-foreground mt-5">
                مصفح هي واحدة من أكثر المناطق طلباً لخدماتنا. المنطقة الصناعية
                فيها كثير من العمال والعائلات اللي تنتقل بشكل متكرر، وهذا يعني
                حركة مستمرة في بيع وشراء الاثاث المستعمل.
              </p>
              <p className="text-muted-foreground mt-5">
                نحن موجودين بشكل دائم في مصفح ونوفر استلام سريع من جميع مناطقها
                – المصفح الصناعية، مصفح الشعبية، وسوق الاثاث المستعمل في مصفح.
              </p>
              <p className="text-muted-foreground mt-5">
                لو تبحث عن اثاث مستعمل ابوظبي مصفح سواء للبيع أو الشراء، نحن
                الخيار الأقرب والأسرع.
              </p>
              <p className="text-muted-foreground mt-5">
                منطقة مصفح كمان فيها كثير من محلات شراء الاثاث المستعمل في
                ابوظبي، لكن الفرق بيننا وبينهم هو الشفافية في التسعير والالتزام
                بالمواعيد.
              </p>
              <p className="text-muted-foreground mt-5">
                ما نعطيك سعر على الهاتف ونغيره لما نوصل. اللي نقوله هو اللي
                يحصل. ولو عندك شراء اثاث مستعمل ابوظبي مصفح بكميات كبيرة مثل
                تصفية مستودع أو مكتب كامل، عندنا فريق مخصص لهالنوع من الطلبات.
              </p>
              <p className="text-muted-foreground mt-5">
                نحن من أوائل اللي يشترون اثاث مستعمل ابوظبي في منطقة مصفح،
                ونشتري اثاث مستعمل بجميع أنواعه.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 mt-10">
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                شراء اثاث مستعمل جزيرة الريم والمرينا
              </h3>
              <p className="text-muted-foreground mt-5">
                جزيرة الريم وجزيرة المرينا وجزيرة السعديات من أرقى المناطق في
                ابوظبي، والأثاث فيها غالباً يكون من ماركات عالية الجودة. نحن
                نفهم قيمة هذا الأثاث ونقدم أسعار تعكس جودته الحقيقية.
              </p>
              <p className="text-muted-foreground mt-5">
                . خدمتنا في هذه المناطق تشمل التعامل الاحترافي مع أبراج السكن
                الفاخرة، مع الالتزام بقواعد النقل في كل مبنى
              </p>
              <p className="text-muted-foreground mt-5">
                ونغطي أيضاً مناطق أبوظبي الأخرى مثل الوحدة والمشرف والشامخة
                ومدينة محمد بن زايد والريف وجزيرة ياس ومنطقة النادي السياحي
                وشارع حمدان والكورنيش والبطين والكرامة وبني ياس والوثبة. أينما
                كنت في ابوظبي، نحن نوصلك.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                شراء اثاث مستعمل مدينة خليفة والخالدية
              </h3>
              <p className="text-muted-foreground mt-5">
                مدينة خليفة والخالدية من المناطق السكنية الراقية في ابوظبي. كثير
                من السكان هنا عائلات وافدة تنتقل بشكل دوري، وتحتاج تبيع أثاثها
                بسرعة وبسعر عادل.
              </p>
              <p className="text-muted-foreground mt-5">
                نقدم خدمة شراء اثاث مستعمل في الخالدية وخليفة سيتي مع أوقات
                استجابة سريعة ونقل آمن يراعي طبيعة الأبراج والمجمعات السكنية في
                هذه المناطق.
              </p>
            </div>
          </div>
        </section>
        <FurniturePriceGuide />
        <section className="max-w-4xl mt-36 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            نصائح للحصول على أفضل سعر عند بيع اثاثك المستعمل
          </h2>
          <p className="text-muted-foreground mt-5">
            سواء كنت تبيع لنا أو لأي جهة أخرى، هذه النصائح تساعدك تحصل على أفضل
            سعر ممكن لأثاثك المستعمل في ابوظبي:
          </p>
          <div className="grid md:grid-cols-2 gird-cols-1 gap-10 md:mt-16 mt-10">
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                نظّف الأثاث قبل التصوير.
              </h3>

              <p className="text-muted-foreground mt-5">
                المشتري يقيّم بعينه أولاً. قطعة نظيفة وممسوحة تعطي انطباع أفضل
                بكثير من قطعة عليها غبار. لا تحتاج تنظيف احترافي – مسح سريع
                يكفي.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                صوّر من أكثر من زاوية وبإضاءة جيدة.
              </h3>

              <p className="text-muted-foreground mt-5">
                صور واضحة تساعدنا نعطيك تقييم دقيق من أول مرة بدون ما نحتاج نطلب
                صور إضافية. هذا يسرّع العملية لك.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                احتفظ بكتيبات الماركة وبطاقات الضمان إن وجدت.
              </h3>

              <p className="text-muted-foreground mt-5">
                وجود أوراق الماركة الأصلية يرفع قيمة القطعة لأنه يؤكد أصالتها.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                بِع الطقم كامل بدل القطع المنفردة.
              </h3>

              <p className="text-muted-foreground mt-5">
                طقم غرفة نوم كامل يحصل على سعر أعلى بكثير من بيع كل قطعة لوحدها.
                نفس الشيء ينطبق على طقم الكنب وطقم الطعام.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                اختر التوقيت المناسب.
              </h3>

              <p className="text-muted-foreground mt-5">
                الطلب على الأثاث المستعمل يرتفع قبل رمضان وقبل العيد وفي موسم
                الصيف عندما تنتقل العائلات. البيع في هذه الأوقات يعني عروض أسعار
                أفضل.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-secondary  font-semibold">
                أصلح الأشياء البسيطة.
              </h3>

              <p className="text-muted-foreground mt-5">
                شد البراغي المخلخلة، أصلح الأدراج اللي ما تقفل صح، غيّر المقابض
                المكسورة. إصلاحات بسيطة بأقل تكلفة ممكن ترفع قيمة العرض بنسبة
                15% إلى 20%.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mt-16 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            الاستدامة والاقتصاد الدائري – اشترِ وبِع بمسؤولية
          </h2>
          <p className="mt-10 text-muted-foreground max-w-3xl">
            شراء وبيع الاثاث المستعمل مو بس توفير مال – هو كمان خطوة عملية نحو
            الاستدامة. كل قطعة أثاث تُعاد استخدامها بدل ما ترمى في المكب هي
            مساهمة حقيقية في تقليل النفايات.
          </p>
          <p className="mt-2 text-muted-foreground">
            تتجه بقوة نحو الاقتصاد الدائري ضمن أهداف الاستدامة الوطنية.
          </p>
          <div className="mt-5">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mt-5">
                نحن في شركة شراء اثاث مستعمل نؤمن بهذا التوجه. كل قطعة نشتريها
                نعيد تأهيلها وننظفها ونوصلها لشخص ثاني يحتاجها. والقطع اللي ما
                تصلح لإعادة البيع، نوجهها لجهات خيرية أو جهات إعادة تدوير
                معتمدة.
              </p>
              <p className="text-muted-foreground mt-5">
                لو عندك أثاث تبي تتبرع فيه في ابوظبي، تواصل معنا ونساعدك نوصله
                للجهة المناسبة.
              </p>
              <p className="text-muted-foreground mt-5">
                التبرع بالاثاث المستعمل في ابوظبي خيار ممتاز للقطع اللي قد لا
                تكون مناسبة للبيع لكنها لا زالت صالحة للاستخدام. بدل ما ترمي
                أثاثك القديم، خله يخدم عائلة ثانية.
              </p>
              <p className="text-muted-foreground mt-5">
                نحن نساعد في تنسيق التبرعات مع جهات معتمدة في الإمارات، وهذا جزء
                من مسؤوليتنا تجاه المجتمع والبيئة.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mt-16 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            طرق الدفع المتاحة – مرونة مالية تناسبك
          </h2>
          <p className="mt-10 text-muted-foreground max-w-3xl">
            عند البيع لنا، نوفر لك الدفع نقداً في نفس اللحظة، أو التحويل البنكي،
            أو الإيداع الإلكتروني – حسب ما يناسبك. نحن نتفهم أن كل عميل له
            ظروفه، ونوفر المرونة اللازمة.
          </p>
          <p className="mt-5 text-muted-foreground">
            وعند الشراء منا، بالإضافة للدفع النقدي والتحويل البنكي والشيكات
            المصرفية، نعمل حالياً على توفير خيارات التقسيط (اشترِ الآن وادفع
            لاحقاً) لمساعدة العائلات في شراء قطع أثاث كبيرة بدون ضغط مالي. هذه
            خدمة قيد التطوير وسنعلن عنها قريباً.
          </p>
        </section>
        <section className="max-w-4xl mt-16 mx-auto md:px-0 px-4">
          <h2 className="md:text-4xl text-3xl text-secondary font-bold">
            ضماننا وسياسة الإرجاع – تسوّق بثقة
          </h2>
          <p className="mt-10 text-muted-foreground max-w-3xl">
            هذه النقطة مهمة جداً ونريد نكون واضحين فيها: كل قطعة أثاث نبيعها
            تأتي مع ضمان. يعني لو اشتريت أريكة أو طقم غرفة نوم من عندنا واكتشفت
            مشكلة ما ذكرناها لك – تقدر ترجعها.
          </p>
          <p className="mt-5 text-muted-foreground">
            نظامنا يعمل بهذه الطريقة: كل قطعة تمر بفحص شامل قبل البيع. نوثّق
            حالتها بصور ووصف دقيق. لما تشتري، تعرف بالضبط ايش تحصل عليه. ولو في
            أي شيء ما يطابق الوصف، سياسة الإرجاع عندنا واضحة وسهلة.
          </p>
          <p className="mt-5 text-muted-foreground">
            هذا الضمان هو اللي يخلينا مختلفين عن باقي محلات شراء الاثاث المستعمل
            في ابوظبي. لأن الضمان يعني أننا واثقين من جودة اللي نبيعه. وهذه
            الثقة ننقلها لك كمشتري.
          </p>
        </section>
        <FAQSection
          faqs={AbuDhabiFaqs}
          title="الأسئلة الشائعة حول شراء اثاث مستعمل ابوظبي"
          desc="هذي أكثر الأسئلة اللي يسألنا إياها العملاء في ابوظبي:"
        />
        <CTA
          title="تواصل معنا الآن – احصل على عرض سعر مجاني خلال 5 دقائق"
          desc="سواء كنت تبي تبيع اثاثك المستعمل في ابوظبي أو تبحث عن قطع أثاث بحالة ممتازة بأسعار معقولة – نحن هنا لمساعدتك. . لا تضيع وقتك في البحث عن مشترين على الإنترنت أو في التفاوض مع تجار ما تعرفهم. تواصل مع شركة شراء اثاث مستعمل واحصل على تجربة مختلفة تماماً عن اللي اعتدت عليه في سوق الأثاث المستعمل."
        />
      </main>
    </>
  );
};

export default AbuDhabiPage;
