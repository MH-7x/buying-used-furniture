import LocHeroSection from "@/components/main/LocHeroSection";

import imgSrc from "@/public/loc/شراء-اثاث-مستعمل-عجمان.jpg";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import FAQSection from "@/components/main/FAQs";
import { AjmanFaqs } from "@/lib/faqsList";
import Script from "next/script";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import CTA from "@/components/main/CTA";
import Link from "next/link";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "شراء اثاث مستعمل عجمان | أفضل أسعار وتقييم فوري ",
      desc: "نشتري جميع أنواع الاثاث المستعمل في عجمان بأعلى الأسعار. تقييم فوري خلال 10 دقائق عبر الواتساب، دفع نقدي فوري، فك ونقل مجاني. نخدم الجرف، الراشدية، النعيمية وجميع مناطق عجمان. اتصل الآن!",
    },
    path: "/شراء-اثاث-مستعمل-عجمان",
    image: {
      path: "/loc/شراء-اثاث-مستعمل-عجمان.jpg",
      alt: "شراء اثاث مستعمل عجمان - أفضل شركة شراء اثاث مستعمل في عجمان",
    },
  },
});

/* ───────── reusable data ───────── */

const evaluationFactors = [
  {
    factor: "الماركة",
    effect:
      "أثاث الماركات المعروفة يحتفظ بقيمة أعلى في السوق — ايكيا، هوم سنتر، دانوب وغيرها",
  },
  {
    factor: "الحالة",
    effect: "كل ما كان الاثاث بحالة أفضل بدون خدوش أو تلف، كل ما ارتفع سعره",
  },
  {
    factor: "العمر",
    effect:
      "الاثاث اللي عمره أقل من 5 سنوات عادةً يكون مطلوب أكثر ويحصل سعر أفضل",
  },
  {
    factor: "طلب السوق",
    effect:
      "بعض القطع يزيد طلبها حسب الموسم — المجالس العربية قبل رمضان، واثاث الشقق بداية السنة الدراسية",
  },
];

const priceGuide = [
  {
    type: "طقم غرفة نوم كاملة",
    good: "500 – 2,000",
    excellent: "2,000 – 5,000",
  },
  { type: "طقم كنب أو صالون", good: "300 – 1,500", excellent: "1,500 – 4,000" },
  { type: "مجلس عربي كامل", good: "400 – 2,000", excellent: "2,000 – 6,000" },
  { type: "طاولة طعام مع كراسي", good: "200 – 800", excellent: "800 – 2,500" },
  { type: "ثلاجة أو غسالة", good: "100 – 500", excellent: "500 – 1,500" },
  { type: "مكيف سبليت", good: "100 – 400", excellent: "400 – 1,000" },
  {
    type: "اثاث مكتبي (مكتب + كرسي)",
    good: "150 – 600",
    excellent: "600 – 2,000",
  },
  {
    type: "اثاث فيلا كاملة",
    good: "3,000 – 10,000",
    excellent: "10,000 – 30,000+",
  },
];

const qualitySteps = [
  {
    num: 1,
    title: "فحص شامل",
    desc: "نتأكد من سلامة الهيكل وجميع الأجزاء. أي قطعة فيها ضعف يتم إصلاحها أو استبعادها من البيع.",
  },
  {
    num: 2,
    title: "تعقيم متخصص",
    desc: "كل القطع المنجّدة — الكنب، المجالس، المراتب — تمر على معالجة تعقيم للتأكد من خلوها من الحشرات والبكتيريا.",
  },
  {
    num: 3,
    title: "إصلاح الأضرار البسيطة",
    desc: "خدوش، مفصلات ضعيفة، أقمشة متآكلة — يتم إصلاحها على يد فنيين متخصصين.",
  },
  {
    num: 4,
    title: "تلميع وتنظيف احترافي",
    desc: "القطع الخشبية تتلمّع والمعدنية تتنظف والأقمشة تتغسل.",
  },
  {
    num: 5,
    title: "فحص نهائي قبل العرض",
    desc: "كل قطعة تمر على مراجعة أخيرة قبل ما تُعرض للبيع. لو ما وصلت لمعاييرنا، ما نبيعها.",
  },
];

const steps = [
  {
    num: 1,
    title: "تواصل معنا",
    desc: "أرسل لنا صور الأثاث عبر الواتساب أو اتصل بنا. صور عادية من الموبايل تكفي. اكتب لنا نوع القطعة وحالتها بشكل مختصر.",
  },
  {
    num: 2,
    title: "تقييم فوري",
    desc: "خلال 5 إلى 10 دقائق، فريقنا يراجع الصور ويرسلك عرض سعر واضح. نشرح لك كيف وصلنا للسعر لو حبيت تعرف التفاصيل. لا مفاوضات طويلة ولا مفاجآت.",
  },
  {
    num: 3,
    title: "فك ونقل مجاني",
    desc: "بعد موافقتك، ننسق موعد يناسبك. فريقنا يوصل بسيارات نقل مجهزة، يفكّ الاثاث بعناية، ويحمّله بطريقة تحمي الممتلكات — المصاعد، الجدران، الأرضيات. نحن مو مجرد تجار — عندنا فريق نقل محترف.",
  },
  {
    num: 4,
    title: "دفع فوري",
    desc: "تستلم فلوسك لحظة الاستلام. نقداً أو تحويل بنكي أو شيك — أنت تختار. ما في انتظار ولا تأخير.",
  },
];

const areas = [
  {
    title: "اثاث مستعمل الجرف عجمان",
    desc: "الجرف من أنشط المناطق السكنية في عجمان وتقع على حدود الشارقة. فيها حركة سكانية مستمرة — عائلات تنتقل وأخرى تجدد أثاثها. المنطقة قريبة من مقرّنا في أبو شغارة، يعني وقت الوصول لها من أسرع الأوقات عندنا.",
  },
  {
    title: "اثاث مستعمل الراشدية عجمان",
    desc: "الراشدية منطقة سكنية كبيرة فيها شقق وفلل متنوعة. كثير من سكانها يتواصلون معنا بشكل منتظم لبيع أو شراء اثاث مستعمل. نخدم الراشدية 1 والراشدية 2 والمناطق المحيطة.",
  },
  {
    title: "اثاث مستعمل النعيمية عجمان",
    desc: "النعيمية فيها كثافة سكانية عالية وتجمع بين السكني والتجاري. لو عندك شقة أو مكتب في النعيمية وتبي تبيع أثاثك المستعمل، تواصل معنا وفريقنا يوصلك في نفس اليوم في أغلب الحالات.",
  },
  {
    title: "اثاث مستعمل المويهات والروضة عجمان",
    desc: "المويهات والروضة من المناطق اللي تنمو بسرعة. فيها فلل جديدة ومجمعات سكنية، وكثير من العائلات اللي تنتقل لبيوت أكبر أو أصغر تحتاج تبيع أثاثها القديم. نستقبل طلبات كثيرة من هالمنطقتين.",
  },
  {
    title: "اثاث مستعمل كورنيش عجمان وداون تاون",
    desc: "أبراج الكورنيش ومنطقة داون تاون فيها شقق مفروشة كثيرة وحركة إيجارية نشطة. نتعامل مع ملّاك العقارات والمستأجرين اللي ينتقلون ويحتاجون يبيعون أثاثهم بسرعة.",
  },
  {
    title: "مناطق أخرى في عجمان",
    desc: "نخدم أيضاً: الرميلة، البستان، العوان، الزهراء، مدينة عوالي، مدينة الإمارات، والمنطقة الصناعية. أي مكان في عجمان — نوصله ونخدمه.",
  },
];

const tips = [
  {
    title: "نظّف الاثاث قبل ما تصوّره",
    desc: "مسحة بسيطة بقماشة رطبة تفرق كثير في الانطباع الأول. القطعة النظيفة تعطي إحساس إنها بحالة أفضل — وهذا ينعكس على السعر.",
  },
  {
    title: "صوّر بإضاءة طبيعية ومن عدة زوايا",
    desc: "لا تحتاج كاميرا احترافية. صور واضحة من الموبايل مع إضاءة جيدة كافية. صوّر القطعة من الأمام، الجنب، والأعلى — ولو في خدش أو عيب صوّره عشان التقييم يكون دقيق.",
  },
  {
    title: "احتفظ بالفاتورة لو عندك",
    desc: "الفاتورة تثبت الماركة وتاريخ الشراء، وهالشي يساعد في رفع التقييم.",
  },
  {
    title: "بيع في الوقت الصح",
    desc: "قبل رمضان يزيد الطلب على المجالس وطاولات الطعام. وبداية السنة الدراسية يزيد الطلب على أثاث الشقق. التوقيت يفرق في السعر.",
  },
  {
    title: "كن صريح عن الحالة",
    desc: "لا تخفي عيوب القطعة. الصراحة توفر وقت الجميع وتبني ثقة مع المشتري — سواء كان نحن أو غيرنا.",
  },
  {
    title: "قارن الأسعار — لكن احسب التكلفة الكاملة",
    desc: "بعض التجار يعطونك سعر يبان أعلى لكن يخصمون منك تكاليف النقل والفك. عندنا الفك والنقل مجاني، والسعر اللي نعطيك إياه هو اللي تستلمه.",
  },
];

const furnitureTypes = [
  {
    id: "full-home",
    title: "شراء اثاث فلل وشقق كاملة في عجمان",
    src: "/loc/شراء-أثاث-فلل-وشقق-كاملة.jpg",
    href: "/شراء-الأثاث-المنزلي",
    desc: "تنتقل من عجمان وتبي تبيع كل أثاث بيتك مرة وحدة؟ هالخدمة كثير من عملاءنا يستخدمونها. نرسل فريق لتقييم جميع القطع — اثاث الصالة، غرف النوم، المطبخ، الأجهزة — ونعطيك عرض شامل لكل شي. بعد الموافقة، نسوي كل شي من الفك للنقل وتستلم المبلغ فوراً.",
    extra:
      "وهالخدمة مفيدة بشكل خاص لأصحاب الفلل في مناطق مثل المويهات والروضة والجرف، وللمستأجرين في أبراج كورنيش عجمان اللي ينتقلون خارج الإمارات ومحتاجين يتخلصون من كل شي بسرعة.",
  },

  {
    id: "sofa",
    title: "شراء كنب ومجالس مستعملة في عجمان",
    src: "/loc/شراء كنب-ومجالس-مستعملة.jpg",
    href: "/شراء-الأثاث-المنزلي",
    desc: "عندك طقم كنب مو محتاجه أو مجلس عربي تبي تغيّره؟ نشتريه. المجالس العربية لها قيمة خاصة في سوق الإمارات، ونقيّمها بعناية. نشتري كل الأنواع — جلد، قماش، كراسي استرخاء — المهم إنها بحالة تسمح بإعادة الاستخدام.",
    extra:
      "واللي يبحث عن اثاث مستعمل للبيع في عجمان — سواء على انستقرام أو السوق المفتوح — غالباً يلاقي صعوبة في التسعير والثقة بالمشتري. عندنا العملية أسهل: أرسل الصور، نعطيك سعر، ونجي نستلم. ما في وسطاء ولا انتظار لمشتري مجهول.",
  },
  {
    id: "office",
    title: "شراء اثاث مكتبي مستعمل في عجمان",
    src: "/loc/شراء-أثاث-مكتبي-مستعمل.jpg",
    href: "/شراء-الاثاث-المكتبي-المستعمل",
    desc: "لأصحاب الشركات والمكاتب في عجمان: نشتري المكاتب، الكراسي المكتبية، الأرفف، طاولات الاجتماعات، وخزائن الملفات. ونقدر نشتري أثاث مكتب كامل في زيارة وحدة بدون ما نعطّلك عن شغلك.",
  },
  {
    id: "appliances",
    title: "شراء أجهزة كهربائية مستعملة في عجمان",
    src: "/loc/شراء-أجهزة-كهربائية-مستعملة.jpg",
    href: "/شراء-الأجهزة-المنزلية",
    desc: "بالإضافة للأثاث، نشتري الأجهزة الكهربائية المنزلية: ثلاجات، غسالات، مكيفات سبليت، مجففات، أفران، شاشات تلفزيون. الشرط إنها تكون شغّالة أو قابلة للإصلاح البسيط.",
  },
  {
    id: "bedroom",
    title: "شراء غرف نوم مستعملة في عجمان",
    src: "/loc/شراء-غرف-نوم-مستعملة.jpg",
    href: "/شراء-الأثاث-المنزلي",
    desc: "غرف النوم من أكثر القطع اللي نشتريها. نأخذ الطقم الكامل — السرير، الدولاب، الكومودينو، التسريحة — أو قطع منفصلة. جميع المقاسات مقبولة: سنجل، كوين، كينج. ونتكفّل بالفك والتغليف والنقل — ما تحتاج تسوي شي.",
  },
];

/* ───────── page component ───────── */

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(AjmanFaqs));

export default function AjmanPage() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className=" text-[#694c4c]">
        {/* ═══════════ HERO ═══════════ */}

        <LocHeroSection
          img={{
            src: imgSrc,
            alt: "شراء اثاث مستعمل عجمان",
          }}
          title="شراء اثاث مستعمل عجمان - احصل على نقود فورية"
          desc=" هل عندك اثاث مستعمل في عجمان وتبحث عن مشترٍ يعطيك سعر عادل بدون لف
            ودوران؟ في شركة شراء اثاث مستعمل، نحن لا نشتغل بطريقة التخمين أو
            المفاوضة العشوائية. نشتري جميع أنواع الاثاث المستعمل في عجمان — غرف
            نوم، كنب، مجالس، أجهزة كهربائية، اثاث مكتبي — وندفع لك نقداً في نفس
            اليوم."
        />
        {/* ═══════════ INTRO PARAGRAPHS ═══════════ */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed"></p>
          <p className="text-base sm:text-lg leading-relaxed">
            الفرق بيننا وبين غيرنا واضح: نستخدم نظام تقييم يأخذ بالاعتبار حالة
            القطعة، ماركتها، وسعرها في السوق. أرسل لنا صور أثاثك عبر الواتساب
            واحصل على عرض سعر خلال 5 إلى 10 دقائق — بدون أي التزام.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            كثير من الناس يسألون عن محلات اثاث مستعمل في عجمان أو يبحثون عن
            أرقام تجار يشترون الاثاث. الفرق إننا مو مجرد محل صغير — نحن شركة
            متكاملة عندها فريق تقييم، فريق نقل، وورشة صيانة وتجديد. يعني سواء
            كنت تبي تبيع اثاث مستعمل في عجمان أو تشتري قطعة بحالة ممتازة، عندنا
            كل شي تحت سقف واحد.
          </p>
        </section>

        {/* ═══════════ WHY US ═══════════ */}
        <section className="bg-[#f5d7cc]/20 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#413332] mb-8 text-center">
              لماذا نحن <Link href="/">أفضل شركة شراء اثاث مستعمل</Link> في
              عجمان؟
            </h2>
            <div className="space-y-5 text-base sm:text-lg leading-relaxed">
              <p>
                لو سألت أي شخص باع أثاثه المستعمل في الإمارات، غالباً راح يقولك
                إنها تجربة متعبة. تتصل بأكثر من تاجر، كل واحد يعطيك سعر مختلف،
                وبعضهم يجي لبيتك ويبدأ يقلل من قيمة أغراضك عشان يحصل صفقة أرخص.
              </p>
              <p>
                هذا بالضبط الشي اللي نرفضه. نحن في شركة شراء اثاث مستعمل لا
                نشتغل مثل تجار الشارع. عندنا نظام واضح ومعايير محددة لتقييم كل
                قطعة، وعندنا فريق متخصص يفهم قيمة الأثاث.
              </p>
              <p>
                ولأننا نقدم خدمة بيع وشراء اثاث مستعمل في عجمان بشكل متكامل،
                العميل يتعامل مع جهة وحدة من البداية للنهاية — من التقييم،
                مروراً بالفك والنقل، وصولاً للدفع. ما يحتاج يتصل بتاجر ثم ينقّال
                ثم ناقل. كل شي عندنا.
              </p>
            </div>

            {/* placeholder image */}
            <div className="mt-10 relative rounded-2xl overflow-hidden md:h-[500px] bg-gray-200 flex items-center justify-center">
              <Image
                src="/loc/فريق-شراء-اثاث-مستعمل-في-عجمان.jpg"
                alt="فريق شراء اثاث مستعمل في عجمان"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ═══════════ 10+ YEARS EXPERIENCE ═══════════ */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#413332] mb-6">
            خبرة أكثر من 10 سنوات في سوق الاثاث المستعمل
          </h3>
          <div className="space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              بدأنا من الشارقة قبل أكثر من عشر سنوات، وخلال هالفترة تعاملنا مع
              آلاف العائلات والشركات في مختلف الإمارات. نعرف السوق المحلي جيداً
              — أسعار ايكيا المستعملة، قيمة أثاث دانوب، هوم سنتر، بان إمارتس،
              رويال فيرنتشر. كل ماركة لها تقييمها عندنا بناءً على خبرتنا الفعلية
              في البيع والشراء.
            </p>
            <p>
              هالمعرفة ما جاءت من كتب أو مواقع. جاءت من عملنا اليومي مع البائعين
              والمشترين في سوق حقيقي ومتغير. ومدينة مثل عجمان فيها حركة سكانية
              مستمرة — عائلات تنتقل، شركات تتوسع، ناس تجدد بيوتها — وكل هالحركة
              تعني إن في اثاث مستعمل يحتاج مشتري يفهم قيمته.
            </p>
            <p>
              ولأن عجمان قريبة من الشارقة ودبي، كثير من السكان يتنقلون بينها
              بشكل مستمر. هالشي يخلّي سوق الاثاث المستعمل في عجمان نشط طوال
              السنة. نحن موجودين في هالسوق من سنوات ونعرف تفاصيله — أي مناطق
              فيها طلب أكثر، أي أنواع اثاث تتباع أسرع، وكيف تتغير الأسعار حسب
              الموسم.
            </p>
          </div>
        </section>

        {/* ═══════════ FAIR EVALUATION + TABLE ═══════════ */}
        <section className="bg-[#f5d7cc]/20 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#413332] mb-4">
              تقييم عادل وشفاف لأثاثك المستعمل
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-8">
              كيف نحدد سعر أثاثك؟ ما نخمّن وما نرمي أرقام عشوائية. نعتمد على
              أربعة عوامل أساسية:
            </p>

            {/* evaluation factors table */}
            <div className="overflow-x-auto rounded-xl border border-[#413332]/10 shadow-sm mb-8">
              <table className="w-full text-right">
                <thead>
                  <tr className="bg-[#413332] text-[#f5d7cc]">
                    <th className="px-5 py-3.5 font-semibold text-sm sm:text-base">
                      العامل
                    </th>
                    <th className="px-5 py-3.5 font-semibold text-sm sm:text-base">
                      كيف يؤثر على السعر
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {evaluationFactors.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#f5d7cc]/30"}
                    >
                      <td className="px-5 py-3.5 font-semibold text-[#413332] text-sm sm:text-base whitespace-nowrap">
                        {row.factor}
                      </td>
                      <td className="px-5 py-3.5 text-sm sm:text-base">
                        {row.effect}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              هالطريقة تضمن لك سعر عادل يعكس القيمة الحقيقية لأثاثك. وإذا ما
              ناسبك العرض، ما في أي التزام — القرار يرجعلك.
            </p>
          </div>
        </section>

        {/* ═══════════ WARRANTY ═══════════ */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#413332] mb-6">
            ضمان وسياسة إرجاع على كل قطعة نبيعها
          </h3>
          <div className="space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              وهالنقطة تميّزنا عن أي تاجر اثاث مستعمل في عجمان. كل قطعة نبيعها
              تجي مع ضمان وسياسة إرجاع واضحة. يعني لو اشتريت منا اثاث واكتشفت
              فيه مشكلة ما لاحظتها وقت الشراء، تقدر ترجعه.
            </p>
            <p>
              ليش نسوي كذا؟ لأننا نبي عملاء يثقون فينا ويرجعون مرة ثانية. ولأن
              كل قطعة تمر عندنا على فحص وتعقيم قبل ما نعرضها. لو كنا مو واثقين
              من الجودة، ما كنا نقدم ضمان.
            </p>
          </div>
        </section>

        {/* ═══════════ TYPES OF FURNITURE ═══════════ */}
        <section className="bg-[#f5d7cc]/20 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#413332] mb-4 text-center">
              أنواع الاثاث المستعمل الذي نشتريه في عجمان
            </h2>
            <p className="text-center text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              نشتري كل أنواع الاثاث المستعمل تقريباً — سواء كانت قطعة وحدة أو
              أثاث بيت كامل. لا نقتصر على نوع معين. هذي التفاصيل:
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {furnitureTypes.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-[#413332]/5 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* placeholder image */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-200 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <Link href={item.href}>
                      <h3 className="text-lg font-bold text-[#413332] mb-3">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                    {item.extra && (
                      <p className="mt-3 text-sm sm:text-base leading-relaxed">
                        {item.extra}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHY BUYING USED IS SMART ═══════════ */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#413332] mb-6">
            لماذا شراء اثاث مستعمل في عجمان خيار ذكي؟
          </h3>
          <div className="space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              لو كنت تبحث عن اثاث لبيتك أو مكتبك الجديد في عجمان، الاثاث
              المستعمل يوفّر عليك مبالغ كبيرة. طقم غرفة نوم جديد ممكن يكلّفك
              8,000 إلى 15,000 درهم — نفس الطقم مستعمل بحالة ممتازة تحصله عندنا
              بـ 2,000 إلى 5,000 درهم. الفرق واضح.
            </p>
            <p>
              والموضوع مو بس توفير. كثير من القطع المستعملة تكون من ماركات
              جودتها أعلى من الاثاث الجديد الرخيص. يعني تحصل قطعة من ايكيا أو
              هوم سنتر مستعملة بسعر أقل من اثاث جديد من ماركة غير معروفة —
              وجودتها أفضل.
            </p>
            <p>
              وفي عجمان تحديداً، السوق فيه خيارات كثيرة لأن حركة السكان مستمرة.
              ناس تنتقل وتبيع أثاث ممتاز بأسعار مناسبة جداً. نحن ندور نوفر
              هالأثاث للمشترين بعد ما نفحصه ونعقّمه ونتأكد من جودته.
            </p>
          </div>
        </section>

        {/* ═══════════ HOW TO SELL — 4 STEPS ═══════════ */}
        <section className="bg-[#413332] text-white py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5d7cc] mb-4 text-center">
              كيف تبيع اثاثك المستعمل في عجمان؟ — أربع خطوات بس
            </h2>
            <p className="text-center text-white/70 text-base sm:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              العملية عندنا مصممة تكون سهلة وسريعة. ما تحتاج تنزل من بيتك ولا
              تنقل أي شي. كل شي نسويه نحن. هذي الخطوات:
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="relative bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#f5d7cc] text-[#413332] font-bold text-lg mb-4">
                    {step.num}
                  </span>
                  <h4 className="text-lg font-bold text-[#f5d7cc]! mb-2">
                    الخطوة{" "}
                    {step.num === 1
                      ? "الأولى"
                      : step.num === 2
                        ? "الثانية"
                        : step.num === 3
                          ? "الثالثة"
                          : "الرابعة"}{" "}
                    — {step.title}
                  </h4>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Video placeholder */}
            <div className="mt-12 rounded-2xl overflow-hidden aspect-video bg-black/30 flex items-center justify-center border border-white/10">
              <div className="text-center">
                <svg
                  className="mx-auto w-16 h-16 text-[#f5d7cc]/60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="text-white/50 mt-2 text-sm">
                  مكان فيديو يوتيوب: فيديو قصير يوضح عملية شراء الاثاث المستعمل
                  في عجمان
                </p>
              </div>
            </div>

            <p className="mt-8 text-center text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              العملية كلها من أولها لآخرها ممكن تنتهي في نفس اليوم. يعني تتواصل
              معنا الصبح، وتستلم فلوسك قبل المغرب. وهالسرعة مهمة خصوصاً لو كنت
              في وقت ضيق — مثلاً تنتقل من بيتك خلال أيام ومحتاج تبيع اثاث مستعمل
              عجمان بسرعة.
            </p>
          </div>
        </section>

        {/* ═══════════ PRICE GUIDE 2026 ═══════════ */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#413332] mb-4 text-center">
            دليل أسعار الاثاث المستعمل في عجمان — تحديث 2026
          </h2>
          <p className="text-center text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            أكثر سؤال يوصلنا هو: &quot;كم تقريباً بتعطوني؟&quot; — وهالسؤال
            طبيعي ومشروع. ما أحد يبي يتفاجأ. عشان كذا قررنا ننشر دليل أسعار
            تقريبي يعطيك فكرة واضحة قبل ما تتواصل معنا. وبكذا نكون من أول
            الشركات في عجمان اللي توفر هالمعلومة بشفافية.
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#413332]/10 shadow-sm">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-[#413332] text-[#f5d7cc]">
                  <th className="px-5 py-3.5 font-semibold text-sm sm:text-base">
                    نوع الاثاث
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-sm sm:text-base">
                    الحالة الجيدة (درهم)
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-sm sm:text-base">
                    الحالة الممتازة (درهم)
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceGuide.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#f5d7cc]/30"}
                  >
                    <td className="px-5 py-3.5 font-semibold text-[#413332] text-sm sm:text-base whitespace-nowrap">
                      {row.type}
                    </td>
                    <td className="px-5 py-3.5 text-sm sm:text-base">
                      {row.good}
                    </td>
                    <td className="px-5 py-3.5 text-sm sm:text-base">
                      {row.excellent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm sm:text-base text-[#413332] bg-[#f5d7cc]/40 rounded-xl px-5 py-4 leading-relaxed">
            <strong>تنبيه:</strong> هالأسعار تقريبية وتتغير حسب الماركة، عمر
            القطعة، وحالتها الفعلية. للحصول على سعر دقيق — أرسل لنا صور عبر
            الواتساب والتقييم مجاني.
          </p>
        </section>

        {/* ═══════════ AREAS IN AJMAN ═══════════ */}
        <section className="bg-[#f5d7cc]/20 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#413332] mb-4 text-center">
              خدمة شراء اثاث مستعمل في جميع مناطق عجمان
            </h2>
            <p className="text-center text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              ما يهم وين موقعك في عجمان — فريقنا يوصلك. نغطي جميع الأحياء
              السكنية والتجارية، ووقت الوصول عادةً لا يتجاوز ساعات قليلة بعد
              تأكيد الموعد.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[#413332]/5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f5d7cc] flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-[#413332]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#413332] mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {area.desc}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              واللي يبحث عن حراج اثاث مستعمل عجمان أو سوق اثاث مستعمل قريب — نحن
              البديل المضمون. بدل ما تروح لسوق وتقضي ساعات تدور، تقدر تتصفح ما
              عندنا أو تتواصل معنا مباشرة ونوريك المتوفر.
            </p>
          </div>
        </section>

        {/* ═══════════ QUALITY COMMITMENT ═══════════ */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#413332] mb-4 text-center">
            التزامنا بجودة الاثاث المستعمل — فحص وتعقيم وتجديد
          </h2>
          <p className="text-center text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            واحدة من أكبر مخاوف الناس لما يشترون اثاث مستعمل هي: هل هو نظيف؟ هل
            فيه حشرات؟ هل راح يتحمل الاستخدام؟ نفهم هالقلق تماماً. عشان كذا
            طوّرنا عملية من خمس مراحل تضمن جودة كل قطعة نبيعها:
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {qualitySteps.map((step) => (
              <div
                key={step.num}
                className="relative bg-[#f5d7cc]/20 rounded-2xl p-5 border border-[#413332]/5 text-center"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#413332] text-[#f5d7cc] font-bold text-base mb-3">
                  {step.num}
                </span>
                <h4 className="font-bold text-[#413332] mb-2 text-base">
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              هالعملية هي السبب اللي يخلّينا واثقين نقدم ضمان على كل قطعة
              نبيعها. ما نبيع شي إلا ونحن مرتاحين إنه بمستوى جيد.
            </p>
            <p>
              وهالموضوع مهم خصوصاً في عجمان لأن كثير من المشترين يتخوفون من
              الاثاث المستعمل بسبب تجارب سابقة مع تجار ما يهتمون بالنظافة أو
              الجودة. نحن نبي نغيّر هالصورة ونثبت إن اثاث مستعمل عجمان ممكن يكون
              نظيف وبحالة ممتازة لو تعاملت مع الشركة الصح.
            </p>
          </div>
        </section>

        {/* ═══════════ TIPS ═══════════ */}
        <section className="bg-[#f5d7cc]/20 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#413332] mb-4 text-center">
              نصائح عملية للحصول على أفضل سعر لأثاثك المستعمل في عجمان
            </h2>
            <p className="text-center text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              حتى لو ما قررت تبيع عندنا، هالنصائح راح تساعدك تحصل على سعر أفضل
              من أي مشترٍ:
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {tips.map((tip, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-[#413332]/5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#413332] text-[#f5d7cc] flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#413332] mb-1 text-base">
                      {tip.title}
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CUSTOMER REVIEWS ═══════════ */}

        {/* ═══════════ MAP PLACEHOLDER ═══════════ */}
        <section className="bg-[#f5d7cc]/20 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl overflow-hidden aspect-[2/1] bg-gray-200 border-2 border-dashed border-[#413332]/20 flex items-center justify-center">
              {" "}
              <iframe
                className="w-full h-full  bg-slate-800 rounded-lg overflow-hidden relative group border border-white/10 hover:border-yellow-500/50 transition-colors"
                title="Our Store Location in Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8696529263066!2d55.39297417447848!3d25.3421546258158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b39dde3733b%3A0x70627f406a04df1e!2sRukun%20AL%20arooba%20used%20furniture%20and%20electronics%20trading!5e0!3m2!1sen!2s!4v1757767922306!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <FAQSection faqs={AjmanFaqs} />
        <CTA desc="أرسل صور أثاثك عبر الواتساب الآن واحصل على عرض سعر خلال دقائق. حوّل أثاثك المستعمل إلى نقد اليوم." />
      </main>
    </>
  );
}
