import CTA from "@/components/main/CTA";
import FAQSection from "@/components/main/FAQs";
import LocHeroSection from "@/components/main/LocHeroSection";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { RAKFaqs } from "@/lib/faqsList";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { LocationLinks } from "@/lib/Lists";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import imgSrc from "@/public/loc/شراء-اثاث-مستعمل-رأس الخيمة.jpg";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "شراء اثاث مستعمل رأس الخيمة | أفضل الأسعار والدفع الفوري",
      desc: "شراء اثاث مستعمل رأس الخيمة بأعلى الأسعار. تقييم مجاني، دفع نقدي فوري، واستلام مجاني من الحمراء والمرجان وجميع مناطق رأس الخيمة. تواصل عبر واتساب الآن!",
    },
    image: {
      path: "/loc/شراء-اثاث-مستعمل-رأس الخيمة.jpg",
      alt: "شراء اثاث مستعمل رأس الخيمة ",
    },
    path: "/شراء-اثاث-مستعمل-راس-الخيمة",
  },
});

const priceRows = [
  {
    item: "غرفة نوم كاملة",
    range: "800 – 3,000",
    note: "يعتمد على الماركة والحالة",
  },
  {
    item: "كنب / أريكة (3+2)",
    range: "400 – 2,000",
    note: "الجلد أعلى سعراً من القماش",
  },
  { item: "ثلاجة (بابين)", range: "300 – 700", note: "يجب أن تكون تعمل" },
  { item: "غسالة", range: "200 – 500", note: "التحميل الأمامي أعلى سعراً" },
  { item: "مكيف سبليت", range: "250 – 600", note: "حسب قوة التبريد (الطن)" },
  {
    item: "طاولة طعام + كراسي",
    range: "300 – 1,500",
    note: "6 مقاعد أعلى من 4 مقاعد",
  },
  {
    item: "مكتب + كرسي مكتبي",
    range: "150 – 800",
    note: "الطراز التنفيذي أعلى سعراً",
  },
  {
    item: "مجلس عربي كامل",
    range: "500 – 2,500",
    note: "حسب الحجم ونوع القماش",
  },
  {
    item: "تلفزيون LED / سمارت",
    range: "100 – 600",
    note: "حسب الحجم والماركة",
  },
];

/* ──────────────────────────── area data ──────────────────────────── */
const areas = [
  {
    name: "قرية الحمراء (Al Hamra Village)",
    desc: "مجتمع فلل فاخرة يسكنه عدد كبير من الأجانب والمقيمين. الأثاث هنا عادة من ماركات عالمية وبحالة ممتازة، وكثير من السكان يبيعون أثاثهم عند مغادرة الدولة.",
  },
  {
    name: "جزيرة المرجان (Al Marjan Island)",
    desc: "جزيرة اصطناعية فيها فنادق وشقق فاخرة. نجد فيها أجهزة حديثة وأثاث عصري من السكان والمنشآت الفندقية.",
  },
  {
    name: "ميناء العرب (Mina Al Arab)",
    desc: "مجتمع سكني على الواجهة البحرية. أثاث عصري وحديث، وكثير من السكان ينتقلون بشكل متكرر مما يوفر فرصاً جيدة للبيع والشراء.",
  },
  {
    name: "الضيت (Al Dhait)",
    desc: "من أكبر المناطق السكنية العائلية في رأس الخيمة. معدل دوران الأثاث مرتفع بسبب الكثافة السكانية الكبيرة.",
  },
  {
    name: "الجزيرة الحمراء (Al Jazeera Al Hamra)",
    desc: "منطقة سكنية متنامية بأثاث متنوع بين الاقتصادي والمتوسط.",
  },
  {
    name: "منطقة الكورنيش",
    desc: "قلب المدينة. أبراج سكنية وشقق حديثة ومكاتب تجارية.",
  },
  {
    name: "الخران (Al Kharan)",
    desc: "منطقة تجارية وصناعية. طلب كبير على بيع وشراء اثاث مكتبي مستعمل.",
  },
  {
    name: "النخيل والنعيم والرفاعة",
    desc: "أحياء سكنية مركزية فيها مزيج من الشقق والفلل.",
  },
  {
    name: "الرمس وشعم وغليلة",
    desc: "مناطق شمال رأس الخيمة. قليل من الشركات تصل إليها، لكن نحن نخدمها بنفس الكفاءة والسرعة.",
  },
];

/* ──────────────────────────── tips data ──────────────────────────── */
const tips = [
  {
    title: "نظّف الأثاث قبل التقييم",
    body: "الأثاث النظيف يعطي انطباعاً أفضل بكثير ويُصوَّر بشكل أحسن. مسح بسيط بقطعة قماش مبللة أو تنظيف سريع بالمكنسة الكهربائية للكنب يفرق كثيراً في تقييم الأثاث والعرض الذي ستحصل عليه. لا تحتاج تنظيفاً احترافياً — فقط اجعله يبدو مرتباً.",
  },
  {
    title: "التقط صوراً واضحة من زوايا متعددة",
    body: "صور واضحة بإضاءة طبيعية جيدة تساعدنا على تقييم اثاث مستعمل بدقة وسرعة عبر واتساب. صوّر كل قطعة من الأمام والجانبين والخلف. وإذا كان هناك أي خدش أو عيب، صوّره بوضوح حتى لا تكون هناك مفاجآت عند المعاينة. الشفافية من البداية تسرّع العملية.",
  },
  {
    title: "اذكر العلامة التجارية وسنة الشراء",
    body: "أثاث ايكيا أو الدانوب أو هوم سنتر أو بان إمارات له قيمة سوقية محددة ومعروفة. أخبرنا بالماركة عندما تتواصل معنا. وإذا عندك فاتورة الشراء الأصلية أو كرت الضمان، أرسله معنا — هذا يرفع العرض لأنه يثبت أصل القطعة وعمرها الفعلي.",
  },
  {
    title: "أصلح العيوب البسيطة قبل البيع",
    body: "شد البراغي المرخية، أصلح السحّابات المكسورة، ثبّت الأرجل المفكوكة، اخلع الملصقات القديمة. إصلاحات بسيطة ما تكلفك شيئاً لكنها ترفع قيمة القطعة وتعطي انطباعاً بأن الأثاث تم الاعتناء به.",
  },
  {
    title: "بع مجموعات كاملة بدلاً من قطع فردية",
    body: "غرفة نوم كاملة (سرير + خزانة + تسريحة + كوميدينات) تحصل على سعر أفضل بكثير من سرير وحده. نفس الشيء ينطبق على طقم الطعام وطقم الجلوس. كلما بعت مجموعة كاملة، كلما كان العرض أفضل.",
  },
];

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(RAKFaqs));

const RAKPage = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="overflow-hidden text-[#694c4c]">
        <LocHeroSection
          img={{
            src: imgSrc,
            alt: "شراء اثاث مستعمل رأس الخيمة",
          }}
          title="شراء اثاث مستعمل رأس الخيمة — أعلى سعر مع خدمة استلام مجانية"
          desc=" إذا كنت تبحث عن شراء اثاث مستعمل رأس الخيمة بسعر عادل وبدون تعقيدات، فأنت في المكان الصحيح. نحن في شركة شراء اثاث مستعمل نشتري جميع أنواع الأثاث والأجهزة المستعملة من المنازل والشقق والفلل والمكاتب في كل مناطق رأس الخيمة — من قرية الحمراء وجزيرة المرجان إلى ميناء العرب والضيت وغيرها."
        />

        <div className="max-w-6xl mt-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "+10 سنوات خبرة  ",
              "+5000 عميل راضٍ  ",
              "شركة مرخصة ومسجلة  ",
              "ضمان أفضل سعر",
            ].map((method, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                {/* Decorative background hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, transparent, #f5d7cc15)`,
                  }}
                />

                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 bg-primary text-secondary">
                  <CheckIcon size={18} />
                </div>

                <h3 className="text-lg font-medium  relative z-10 text-secondary">
                  {method}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* ───────────── INTRO PARAGRAPHS ───────────── */}
        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="mb-5 leading-relaxed">
            لدينا أكثر من عشر سنوات خبرة في سوق اثاث مستعمل في الإمارات. مقرنا
            الرئيسي في شارع الاستقلال، أبو شغارة، الشارقة، ونقدم خدماتنا في جميع
            أنحاء الدولة. نعرف قيمة أثاثك الحقيقية ونقدم لك أفضل سعر ممكن مع دفع
            نقدي فوري واستلام مجاني من باب بيتك.
          </p>
          <p className="mb-5 leading-relaxed">
            الكثير من الناس في رأس الخيمة يحتاجون لبيع أثاثهم المستعمل لأسباب
            مختلفة: الانتقال لمنزل جديد، السفر خارج الدولة، تحديث ديكور البيت،
            أو ببساطة التخلص من قطع لم يعودوا بحاجة لها. المشكلة أن الخيارات
            المتاحة في السوق ليست كلها موثوقة. بعض المشترين يقدمون أسعاراً
            منخفضة جداً، وبعض منصات البيع الإلكتروني تأخذ وقتاً طويلاً ولا تضمن
            لك شيئاً.
          </p>
          <p className="leading-relaxed">
            هنا يأتي دورنا. تواصل معنا عبر واتساب، أرسل صور أثاثك، وخلال 5 إلى
            10 دقائق ستحصل على عرض سعر واضح. إذا وافقت، فريقنا يصل إليك ويتولى
            كل شيء — من الفك والتحميل إلى الدفع الفوري.
          </p>
        </section>

        {/* ───────────── WHY US ───────────── */}
        <section className="bg-[#f5d7cc]/15 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* image placeholder */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#f5d7cc]/50 shadow-lg">
                <Image
                  src="/loc/فضل-لشراء-اثاث-مستعمل-في-رأس-الخيمة.jpg"
                  alt="شراء اثاث مستعمل رأس الخيمة - فريقنا الحقيقي وأسطول النقل"
                  fill
                  className="object-cover"
                />
              </div>

              {/* text */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#413332] md:text-3xl">
                  لماذا نحن الخيار الأفضل لشراء اثاث مستعمل في رأس الخيمة؟
                </h2>
                <p className="mb-4 leading-relaxed">
                  كثير من الناس يترددون قبل بيع أثاثهم المستعمل. السبب واضح:
                  معظم المشترين في السوق يعتمدون على التخمين والمفاوضة الحادة،
                  وفي النهاية يحصل البائع على سعر أقل بكثير من القيمة الفعلية.
                  نحن في شركة شراء اثاث مستعمل مختلفون عن هؤلاء تماماً.
                </p>
                <p className="mb-4 leading-relaxed">
                  نحن لسنا شركة نقل تشتري أثاثك بأبخس الأسعار وتعيد بيعه بربح
                  كبير. نحن تجار أثاث متخصصون نفهم السوق المحلي ونعرف القيمة
                  المتبقية في كل قطعة. عندنا طريقة تقييم واضحة ومنهجية تعتمد على
                  حالة القطعة وعلامتها التجارية وعمرها والطلب عليها في السوق
                  حالياً.
                </p>
                <p className="mb-4 leading-relaxed">
                  نشتري من جميع العلامات التجارية المعروفة في الإمارات: ايكيا،
                  الدانوب، هوم سنتر، بان إمارات، ورويال فيرنتشر. لا يهم الماركة
                  — لكن ذكرها يساعدنا على تقييم القطعة بشكل أدق وأسرع.
                </p>
                <p className="mb-4 leading-relaxed">
                  نعمل بترخيص تجاري رسمي في الإمارات. هذا يعني أنك تتعامل مع جهة
                  موثوقة ومسؤولة قانونياً — وليس مع مشترين عشوائيين من الشارع لا
                  تعرف من أين أتوا ولا تستطيع الرجوع إليهم إذا حدثت مشكلة.
                  المساءلة مهمة في هذا النوع من المعاملات.
                </p>
                <p className="leading-relaxed">
                  وعلى عكس كثير من الشركات التي تستخدم صوراً من الإنترنت على
                  مواقعها، الصور على موقعنا ومنصاتنا الاجتماعية هي لفريقنا
                  الحقيقي وأسطول النقل الخاص بنا. هذه الشفافية ليست مجرد كلام —
                  إنها جزء من طريقة عملنا اليومية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── WHAT WE BUY ───────────── */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-[#413332] md:text-3xl">
            ماذا نشتري من اثاث مستعمل في رأس الخيمة؟
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center leading-relaxed">
            نشتري كل شيء تقريباً. سواء كنت تبيع قطعة واحدة أو تصفّي شقة كاملة أو
            فيلا أو مكتب أو حتى فندق، نحن مستعدون. لا نرفض أي نوع من الأثاث ولا
            نشترط أن يكون بحالة ممتازة. هذه أبرز الفئات التي نتعامل معها يومياً:
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* card component */}
            {[
              {
                title: "شراء غرف نوم مستعملة في رأس الخيمة",
                img: "/loc/شراء-غرف-نوم-مستعملة-في-رأس-الخيمة.jpg",
                alt: "شراء اثاث مستعمل رأس الخيمة - غرف نوم مستعملة",
                text: "نشتري غرف النوم بجميع مكوناتها: الأسرّة بمقاساتها المختلفة (كينج، كوين، مفرد)، والمراتب بجميع أنواعها، وخزائن الملابس الكبيرة والصغيرة، والتسريحات، والكوميدينات. إذا كانت غرفة النوم من ماركة معروفة مثل ايكيا أو هوم سنتر أو بان إمارات فإن قيمتها تكون أعلى بطبيعة الحال. لكن حتى لو لم تكن من ماركة معروفة، نحن نشتريها إذا كانت بحالة مقبولة.",
              },
              {
                title: "شراء كنب ومجالس مستعملة في رأس الخيمة",
                img: "/loc/شراء-كنب-ومجالس-مستعملة-في-رأس-الخيمة.jpg",
                alt: "شراء اثاث مستعمل رأس الخيمة - كنب ومجالس مستعملة",
                text: "الكنب والمجالس من أكثر القطع التي نشتريها في رأس الخيمة: أرائك جلدية فاخرة، أرائك قماشية، كراسي استرخاء، مجالس عربية تقليدية، كنب على شكل حرف L، وأطقم جلوس كاملة. القطع الجلدية عادة تحصل على سعر أعلى من القماشية.",
                extra:
                  "وكل قطعة كنب أو مجلس نشتريها تمر بعملية تعقيم متخصصة قبل إعادة بيعها. نستخدم بروتوكول تنظيف احترافي يضمن أن كل قطعة منجّدة خالية تماماً من الحشرات والأتربة والبكتيريا. نعرف أن كثيراً من الناس يترددون في شراء كنب مستعمل بسبب مخاوف النظافة — وهذا البروتوكول يحل هذه المشكلة نهائياً.",
              },
              {
                title: "شراء أجهزة كهربائية مستعملة في رأس الخيمة",
                img: "/loc/شراء-أجهزة-كهربائية-مستعملة-في-رأس-الخيمة.jpg",
                alt: "شراء اثاث مستعمل رأس الخيمة - أجهزة كهربائية مستعملة",
                text: "نشتري جميع الأجهزة الكهربائية المنزلية: الثلاجات بجميع أحجامها (باب واحد، بابين، فرنش دور)، الغسالات (تحميل أمامي وعلوي)، مكيفات السبليت والشباك، الأفران الغازية والكهربائية، غسالات الصحون، الميكرويف، وأي جهاز آخر تستخدمه في المطبخ أو البيت.",
                extra:
                  "والأهم من ذلك: نشتري أيضاً الأجهزة التي لا تعمل أو بها أعطال. كثير من الشركات الأخرى ترفض شراء الأجهزة المعطلة، لكن نحن نقبلها ونقدم لك سعراً مناسباً عليها. السبب بسيط: لدينا القدرة على إصلاح وإعادة تأهيل هذه الأجهزة.",
              },
              {
                title: "شراء اثاث مكتبي مستعمل في رأس الخيمة",
                img: "/loc/شراء-اثاث-مكتبي-مستعمل-في-رأس-الخيمة.jpg",
                alt: "شراء اثاث مستعمل رأس الخيمة - اثاث مكتبي مستعمل",
                text: "إذا كنت تصفّي مكتباً أو تنتقل لمقر جديد أو تقلّص حجم عملك، نشتري كل شيء: المكاتب بأنواعها، الكراسي التنفيذية والعادية، خزائن الملفات، طاولات الاجتماعات، الأرفف، وحدات الاستقبال، والكبائن المكتبية. نتعامل مع تصفيات المكاتب الصغيرة والكبيرة بنفس الاحترافية والاهتمام.",
              },
              {
                title: "شراء الكترونيات مستعملة في رأس الخيمة",
                img: "/loc/شراء-الكترونيات-مستعملة-في-رأس-الخيمة.jpg",
                alt: "شراء اثاث مستعمل رأس الخيمة - الكترونيات مستعملة",
                text: "نشتري أيضاً الإلكترونيات المستعملة: تلفزيونات LED وسمارت وبلازما، أنظمة المسرح المنزلي والمكبرات الصوتية، أجهزة الكمبيوتر المحمولة والمكتبية، وأجهزة الألعاب. كل جهاز إلكتروني يمر بفحص فني دقيق لتقييم حالته وتحديد سعره العادل.",
              },
              {
                title: "شراء أثاث الفلل والفنادق في رأس الخيمة",
                img: "/loc/شراء-أثاث-الفلل-والفنادق-في-رأس-الخيمة.jpg",
                alt: "شراء اثاث مستعمل رأس الخيمة - أثاث فلل وفنادق",
                text: "نتعامل أيضاً مع المشاريع الكبيرة. إذا كانت لديك فيلا كاملة تريد تصفيتها، أو فندق يجدد أثاثه، أو شركة تنتقل لمقر جديد — نحن قادرون على شراء كميات كبيرة في عملية واحدة. لدينا أسطول نقل وفريق عمل كافٍ للتعامل مع أي حجم.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-2xl border border-[#f5d7cc]/60 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#f5d7cc]/30">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-[#413332]">
                    {card.title}
                  </h3>
                  <p className="mb-2 text-sm leading-relaxed">{card.text}</p>
                  {card.extra && (
                    <p className="text-sm leading-relaxed">{card.extra}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ───────────── HOW TO SELL (3 STEPS) ───────────── */}
        <section className="bg-[#413332] py-14 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
              كيف تبيع اثاثك المستعمل في رأس الخيمة في 3 خطوات
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-white/80">
              عملية بيع اثاث مستعمل في رأس الخيمة معنا بسيطة ومباشرة. لا نعقّد
              الأمور ولا نضيّع وقتك. ثلاث خطوات فقط وتنتهي:
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5d7cc] text-xl font-extrabold text-[#413332]">
                  1
                </span>
                <h3 className="mb-3 text-lg font-bold">
                  تواصل معنا عبر واتساب أو الهاتف
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">
                  أرسل لنا صوراً للأثاث الذي تريد بيعه عبر واتساب. حاول تصوير
                  القطع من عدة زوايا وبإضاءة جيدة حتى نتمكن من تقييمها بدقة.
                  فريقنا يرد عليك خلال 5 إلى 10 دقائق بعرض سعر مبدئي. هذا أسرع
                  من أغلب الشركات في السوق التي تحتاج نصف ساعة أو أكثر فقط للرد
                  عليك.
                </p>
                <p className="text-sm leading-relaxed text-white/80">
                  يمكنك أيضاً الاتصال بنا مباشرة إذا كنت تفضل التحدث هاتفياً. في
                  كلتا الحالتين، فريقنا جاهز لمساعدتك.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5d7cc] text-xl font-extrabold text-[#413332]">
                  2
                </span>
                <h3 className="mb-3 text-lg font-bold">
                  تقييم مجاني وعرض سعر عادل
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">
                  بعد مراجعة الصور، نحدد سعراً مبدئياً واضحاً. إذا كانت هناك
                  حاجة لمعاينة ميدانية للتأكد من الحالة بشكل دقيق، يأتي فريقنا
                  إلى موقعك مجاناً — بدون أي التزام من طرفك.
                </p>
                <p className="text-sm leading-relaxed text-white/80">
                  التقييم يعتمد على أربعة عوامل رئيسية: حالة القطعة الفعلية،
                  علامتها التجارية، عمرها منذ الشراء، والطلب الحالي عليها في سوق
                  اثاث مستعمل راس الخيمة. نحن لا نخمّن ولا نساوم بشكل عشوائي —
                  نحسب القيمة المتبقية الفعلية لأثاثك ونقدم لك عرضاً يعكس هذه
                  القيمة.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5d7cc] text-xl font-extrabold text-[#413332]">
                  3
                </span>
                <h3 className="mb-3 text-lg font-bold">
                  دفع فوري واستلام مجاني من منزلك
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">
                  بمجرد الاتفاق على السعر، تختار طريقة الدفع المناسبة لك: نقداً
                  يداً بيد، تحويل بنكي فوري، أو إيداع إلكتروني. فريقنا المتخصص
                  يتولى فك الأثاث وتحميله ونقله بالكامل — مجاناً.
                </p>
                <p className="text-sm leading-relaxed text-white/80">
                  ونستخدم ما نسميه الإزالة الآمنة المعتمدة: نحمي المصاعد
                  والممرات والجدران والأرضيات أثناء عملية النقل حتى لا يتضرر أي
                  شيء في العقار. هذا أمر مهم لأن بعض شركات النقل الصغيرة تتسبب
                  في خدوش وأضرار أثناء العمل، وأنت لا تحتاج هذه المشاكل — خصوصاً
                  إذا كنت مستأجراً وتريد استرداد التأمين.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── PRICE TABLE ───────────── */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-[#413332] md:text-3xl">
            دليل أسعار الاثاث المستعمل في رأس الخيمة 2026
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center leading-relaxed">
            من أكثر الأسئلة التي يسألها الناس: &quot;كم يساوي أثاثي
            المستعمل؟&quot; — وهذا سؤال منطقي جداً. المشكلة أن معظم شركات شراء
            اثاث مستعمل في رأس الخيمة تقول لك &quot;أفضل سعر&quot; أو &quot;أعلى
            الأسعار&quot; بدون أي تفاصيل حقيقية. نحن نفضّل الوضوح والشفافية. هذا
            الجدول يعطيك فكرة عامة عن نطاقات الأسعار للقطع الأكثر شيوعاً:
          </p>

          <div className="overflow-hidden rounded-2xl border border-[#f5d7cc]/60 shadow-sm">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-[#413332] text-white">
                  <th className="px-5 py-4 text-sm font-semibold">
                    نوع القطعة
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    نطاق السعر (درهم)
                  </th>
                  <th className="hidden px-5 py-4 text-sm font-semibold sm:table-cell">
                    ملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row, idx) => (
                  <tr
                    key={row.item}
                    className={idx % 2 === 0 ? "bg-white" : "bg-[#f5d7cc]/15"}
                  >
                    <td className="px-5 py-3.5 text-sm font-medium text-[#413332]">
                      {row.item}
                    </td>
                    <td className="px-5 py-3.5 text-sm">{row.range}</td>
                    <td className="hidden px-5 py-3.5 text-sm sm:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 rounded-xl border-r-4 border-[#f5d7cc] bg-[#f5d7cc]/10 px-5 py-4 text-sm leading-relaxed">
            <strong className="text-[#413332]">تنبيه مهم:</strong> هذه الأسعار
            تقديرية وتتغير حسب عوامل كثيرة مثل العلامة التجارية، سنة الشراء،
            حالة القطعة، والطلب في السوق وقت البيع. السعر النهائي يتحدد فقط بعد
            المعاينة الفعلية. لكن هذا الجدول يعطيك توقعاً واقعياً حتى لا تُفاجأ.
          </p>
        </section>

        {/* ───────────── AREAS WE SERVE ───────────── */}
        <section className="bg-[#f5d7cc]/15 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-[#413332] md:text-3xl">
              المناطق التي نخدمها في رأس الخيمة
            </h2>
            <p className="mx-auto mb-4 max-w-3xl text-center leading-relaxed">
              نغطي جميع مناطق إمارة رأس الخيمة بدون استثناء. سواء كنت في منطقة
              سكنية راقية أو في حي عائلي هادئ أو حتى في المناطق البعيدة شمال
              الإمارة، فريقنا يصل إليك. كثير من الشركات تقول أنها تخدم رأس
              الخيمة لكن في الواقع تقتصر على المناطق المركزية فقط. نحن مختلفون —
              نصل فعلاً لكل مكان.
            </p>
            <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed">
              هذه أبرز المناطق التي نقدم فيها خدمة شراء اثاث مستعمل في رأس
              الخيمة:
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="rounded-xl border border-[#f5d7cc]/60 bg-white p-5 shadow-sm"
                >
                  <h3 className="mb-2 font-bold text-[#413332]">{area.name}</h3>
                  <p className="text-sm leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed">
              لا يهم أين تسكن في رأس الخيمة — اتصل بنا أو أرسل لنا على واتساب
              وأخبرنا بموقعك، وسنرتب كل شيء.
            </p>
          </div>
        </section>
        <div className="max-w-3xl mx-auto mb-10 flex item-center justify-center">
          <Button size={"lg"} variant={"secondary"}>
            تواصل معنا عبر واتساب وأرسل صور أثاثك
          </Button>
        </div>

        {/* ───────────── TIPS ───────────── */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-[#413332] md:text-3xl">
            نصائح للحصول على أفضل سعر عند بيع اثاثك المستعمل
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed">
            من خبرتنا الطويلة في سوق اثاث مستعمل راس الخيمة، هذه نصائح عملية
            تفرق فعلاً في السعر الذي تحصل عليه. اتبعها وستلاحظ الفرق:
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip, idx) => (
              <div
                key={tip.title}
                className="rounded-2xl border border-[#f5d7cc]/60 bg-white p-6 shadow-sm"
              >
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f5d7cc] text-sm font-bold text-[#413332]">
                  {idx + 1}
                </span>
                <h3 className="mb-2 font-bold text-[#413332]">{tip.title}</h3>
                <p className="text-sm leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── QUALITY GUARANTEE ───────────── */}
        <section className="bg-[#f5d7cc]/15 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#413332] md:text-3xl">
                  ضمان الجودة وسياسة الإرجاع
                </h2>
                <p className="mb-5 leading-relaxed">
                  هذا شيء لن تجده عند أغلب محلات اثاث مستعمل في رأس الخيمة. كل
                  قطعة نشتريها لا نبيعها مباشرة — بل تمر بعملية معالجة كاملة
                  أولاً:
                </p>
                <ul className="mb-6 space-y-3">
                  {[
                    "فحص فني شامل لكل قطعة: هيكلياً ووظيفياً وجمالياً.",
                    "إصلاح وتلميع احترافي لأي خدوش أو عيوب بسيطة يمكن معالجتها.",
                    "تعقيم كامل لكل القطع المنجّدة مثل الكنب والمجالس — ضمان خلوها من الحشرات والأوساخ والروائح.",
                    "كل قطعة نبيعها تأتي مع ضمان جودة وسياسة إرجاع واضحة ومكتوبة.",
                    "إذا لم تكن راضياً عن مشترياتك، تواصل معنا وسنجد حلاً يناسبك.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                    >
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-[#413332]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed">
                  نحن شركة مرخصة ومسؤولة قانونياً عن كل قطعة نبيعها. هذا الفرق
                  بيننا وبين تجار السوق غير المرخصين الذين يبيعون بدون أي ضمان
                  ولا مرجعية — إذا حدثت مشكلة بعد الشراء، لا تجد أحداً ترجع له.
                  معنا، أنت محمي.
                </p>
              </div>

              {/* image placeholder */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#f5d7cc]/50 shadow-lg">
                <Image
                  src="/loc/اثاث-مستعمل-رأس-الخيمة-ضمان.jpg"
                  alt="شراء اثاث مستعمل رأس الخيمة - ضمان الجودة والتعقيم"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── SUSTAINABILITY ───────────── */}
        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#413332] md:text-3xl">
            الاستدامة والاقتصاد الدائري في رأس الخيمة
          </h2>
          <div className="rounded-2xl border border-[#f5d7cc]/60 bg-[#f5d7cc]/10 p-8">
            <p className="mb-4 leading-relaxed">
              عندما تبيع أثاثك المستعمل لنا بدلاً من رميه أو تركه في الشارع، أنت
              تساهم في شيء أكبر من مجرد صفقة مالية. نحن نعمل بنموذج الاقتصاد
              الدائري: نشتري الأثاث المستعمل، نعيد تأهيله وتنظيفه وإصلاحه،
              ونبيعه لأشخاص يحتاجونه فعلاً. هذا يعني أثاثاً أقل في المكبّات،
              ونفايات أقل، وضرراً أقل للبيئة.
            </p>
            <p className="leading-relaxed">
              هذا النهج يتوافق مع أهداف الاستدامة في دولة الإمارات ورؤية رأس
              الخيمة البيئية. بيع اثاثك المستعمل مفيد لك مادياً ومفيد للبيئة في
              نفس الوقت. والأثاث الذي لم تعد تحتاجه قد يكون هو بالضبط ما تبحث
              عنه عائلة أخرى في رأس الخيمة بميزانية محدودة. بدلاً من شراء أثاث
              جديد بسعر مرتفع، يحصلون على أثاث بحالة جيدة بسعر مناسب.
            </p>
          </div>
        </section>

        {/* ───────────── OTHER CITIES ───────────── */}
        <section className="border-t border-[#f5d7cc]/40 bg-white py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-center text-xl font-bold text-[#413332]">
              خدماتنا في مدن أخرى
            </h2>
            <nav
              aria-label="خدماتنا في مدن أخرى"
              className="flex flex-wrap justify-center gap-3"
            >
              {LocationLinks.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="rounded-full border border-[#413332]/15 bg-[#f5d7cc]/20 px-5 py-2 text-sm font-medium text-[#413332] transition-colors hover:bg-[#413332] hover:text-white"
                >
                  {city.text}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <FAQSection
          title="الأسئلة الشائعة حول شراء وبيع الاثاث المستعمل في رأس الخيمة"
          faqs={RAKFaqs}
        />
        <CTA
          title="تواصل معنا الآن — احصل على أفضل سعر لأثاثك المستعمل في رأس الخيمة"
          desc="سواء كنت تنتقل من رأس الخيمة أو إليها، تجدد بيتك، تصفّي مكتبك، أو ببساطة تريد التخلص من أثاث لم تعد تحتاجه — نحن هنا لنساعدك. نشتري اثاثك المستعمل بأفضل سعر ممكن ونوفر عليك كل التعب.
ما الذي تحصل عليه عندما تتعامل معنا:
•	تقييم مجاني وسريع خلال 5 إلى 10 دقائق عبر واتساب.
"
        />
      </main>
    </>
  );
};

export default RAKPage;
