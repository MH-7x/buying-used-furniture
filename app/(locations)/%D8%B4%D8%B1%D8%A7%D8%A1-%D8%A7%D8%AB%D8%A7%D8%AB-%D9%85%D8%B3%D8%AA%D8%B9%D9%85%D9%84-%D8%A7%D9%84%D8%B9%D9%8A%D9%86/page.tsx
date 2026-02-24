import CTA from "@/components/main/CTA";
import FAQSection from "@/components/main/FAQs";
import LocHeroSection from "@/components/main/LocHeroSection";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { AlAinFaqs } from "@/lib/faqsList";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { LocationLinks } from "@/lib/Lists";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import imgSrc from "@/public/loc/شراء-اثاث-مستعمل-العين.jpg";
import { ClockArrowUp, DollarSign, MapPinCheck, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "شراء اثاث مستعمل العين | أعلى سعر ودفع فوري نقداً",
      desc: "شراء اثاث مستعمل العين بأعلى الأسعار. نشتري جميع أنواع الأثاث والأجهزة الكهربائية المستعملة في العين. تقييم مجاني، دفع فوري نقداً، واستلام خلال ساعة. اتصل الآن!",
    },
    image: {
      path: "/loc/شراء-اثاث-مستعمل-العين.jpg",
      alt: "شراء اثاث مستعمل العين",
    },
    path: "/شراء-اثاث-مستعمل-العين",
  },
});

function Section({
  children,
  className = "",
  bg = "",
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section className={bg}>
      <div
        className={`mx-auto max-w-6xl px-4 py-12 md:py-16 mt-16 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

/* ───────── placeholder image helper ───────── */
function PlaceholderImage({
  alt,
  className = "",
  aspect = "aspect-video",
  src,
}: {
  alt: string;
  className?: string;
  aspect?: string;
  src?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#f5d7cc]/40 ${aspect} ${className}`}
    >
      <Image
        src={src || "/loc/أرسل-صور-أثاثك-عبر-الواتساب-الآن.jpg"}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, 50vw"
      />
    </div>
  );
}

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(AlAinFaqs));

const AlAinPage = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="overflow-hidden text-[#606060]">
        <LocHeroSection
          img={{ src: imgSrc, alt: "شراء اثاث مستعمل العين " }}
          title="شراء اثاث مستعمل العين - نشتري أثاثك بأعلى سعر اليوم"
          desc="هل عندك أثاث مستعمل في العين وتبحث عن مشتري يدفع لك سعر عادل؟ نحن في شركة شراء اثاث مستعمل متخصصون في شراء اثاث مستعمل العين بأعلى الأسعار الممكنة. ببساطة، أرسل لنا صور الأثاث على الواتساب، وخلال دقائق نعطيك سعر واضح بدون مساومة أو تعقيد."
        />
        {/* ── trust bar ── */}
        <div className="mt-16 max-w-6xl mx-auto md:px-0 px-4">
          <div className="md:text-xl text-lg text-secondary md:px-16 leading-relaxed">
            <p className="md:inline">
              نشتري اثاث مستعمل العين من جميع الأنواع: غرف نوم، كنب، طاولات
              سفرة، أجهزة كهربائية، وأثاث مكتبي.
            </p>
            <p className="md:inline">
              . سواء كنت تنتقل لبيت جديد، أو تجدد أثاث شقتك، أو تغادر الإمارات،
              نحن الحل الأسرع والأضمن لك.
            </p>
            <p className="md:inline">
              من خبرتنا اللي تزيد عن عشر سنوات في سوق الاثاث المستعمل في
              الإمارات، نعرف بالضبط كم يساوي أثاثك.
            </p>
            <p className="md:inline">
              ما نحاول نشتري بأقل سعر ممكن مثل التجار في الشارع. بالعكس، طريقتنا
              مبنية على تقييم حقيقي يراعي حالة القطعة وماركتها وعمرها.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: <Trophy size={18} />, label: "خبرة +10 سنوات" },
              { icon: <ClockArrowUp size={18} />, label: "خدمة في نفس اليوم" },
              { icon: <DollarSign size={18} />, label: "دفع نقدي فوري" },
              { icon: <MapPinCheck size={18} />, label: "جميع مناطق العين" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl md:flex-row flex-col bg-white md:p-4 px-2 py-4 shadow-sm"
              >
                <span className="w-10 h-10 bg-primary/30 rounded-2xl text-secondary flex items-center justify-center">
                  {item.icon}
                </span>
                <p className="font-medium text-[#413332] text-center ">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Section>
          <h2 className="mb-6 text-2xl font-bold text-[#413332] md:text-3xl">
            لماذا نحن أفضل شركة شراء اثاث مستعمل في العين؟
          </h2>

          <p className="mb-4 leading-relaxed max-w-4xl">
            لما تقرر تبيع أثاثك المستعمل في العين، عندك ثلاث خيارات: تنزل إعلان
            على الإنترنت وتنتظر أسابيع، أو تتعامل مع تاجر في الشارع يحاول يشتري
            بأقل سعر ممكن، أو تتواصل معنا ونحن نريحك من كل هالتعب.
          </p>
          <p className="mb-4 leading-relaxed max-w-4xl">
            الفرق بيننا وبين غيرنا واضح: نحن{" "}
            <strong>شركة شراء اثاث مستعمل في العين</strong> مرخصة وعندنا مقر
            ثابت وفريق متخصص. ما نشتغل من سيارة على جنب الشارع. عندنا أسطول نقل
            كامل، وفنيين متخصصين في الفك والتركيب، وفريق تقييم يفهم السوق.
          </p>
          <p className="mb-8 leading-relaxed max-w-4xl">
            وأهم شيء: نحن صريحين في التسعير. لما نقيّم قطعة أثاث، نشرح لك ليش
            وصلنا لهذا السعر. نراعي الماركة وحالة القطعة وعمرها وقيمتها في
            السوق. ما في مفاجآت ولا مساومة.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* card 1 */}
            <article className="rounded-3xl bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-[#413332]">
                تقييم عادل وشفاف للأثاث المستعمل
              </h3>
              <p className="mb-3 leading-relaxed">
                كل قطعة أثاث تمر على فحص دقيق قبل ما نحدد سعرها. فريقنا يشوف
                حالة القماش أو الخشب، يفحص الهيكل، ويتأكد من سلامة القطعة. بعدين
                نقارن بأسعار السوق الحالية ونعطيك عرض عادل.
              </p>
              <p className="leading-relaxed">
                نشتري جميع الماركات المعروفة: ايكيا، هوم سنتر، بان اماراتس،
                دانوب، ورويال فيرنتشر. وكل ماركة لها تقييم مختلف حسب جودة المواد
                وعمرها الافتراضي.
              </p>
            </article>

            {/* card 2 */}
            <article className="rounded-3xl bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-[#413332]">
                فريق متخصص ومرخص
              </h3>
              <p className="leading-relaxed">
                فريقنا مدرب على التعامل مع الأثاث بعناية. الفك والتغليف والنقل
                يتم بطريقة احترافية تحمي أثاثك وتحمي ممتلكاتك. نستخدم نظام
                الإزالة الآمنة اللي يشمل حماية المصاعد والممرات أثناء النقل، لأن
                الخدش أو الضرر في البناية مشكلة حقيقية مع النقل غير المتخصص.
              </p>
            </article>

            {/* card 3 */}
            <article className="rounded-3xl bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-[#413332]">
                خدمة سريعة في جميع مناطق العين
              </h3>
              <p className="leading-relaxed">
                نوصل لأي منطقة في العين خلال ساعة أو أقل. سواء كنت في الجيمي أو
                زاخر أو المقام أو أي حي ثاني، فريقنا جاهز. نرد على رسائل
                الواتساب خلال 5 إلى 10 دقائق، وهذي سرعة ما تلاقيها عند كثير من{" "}
                <strong>محلات اثاث مستعمل في العين</strong>.
              </p>
            </article>
          </div>
        </Section>

        {/* ─────────── COMPARISON TABLE ─────────── */}
        <Section bg="bg-[#f5d7cc]/15">
          <h3 className="mb-6 text-center text-xl font-bold text-[#413332] md:text-2xl">
            مقارنة سريعة
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-[#f5d7cc] bg-white shadow-sm">
            <table className="w-full min-w-[600px] text-right">
              <thead>
                <tr className="bg-[#413332] text-white">
                  <th className="px-5 py-4 font-semibold">المعيار</th>
                  <th className="px-5 py-4 font-semibold">شركتنا</th>
                  <th className="px-5 py-4 font-semibold">تجار الشارع</th>
                  <th className="px-5 py-4 font-semibold">
                    الإعلانات الإلكترونية
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5d7cc]">
                {[
                  [
                    "السعر",
                    "تقييم عادل مبني على السوق",
                    "أقل سعر ممكن بالمساومة",
                    "متفاوت وغير مضمون",
                  ],
                  [
                    "السرعة",
                    "نفس اليوم - خلال ساعة",
                    "يعتمد على توفرهم",
                    "أيام أو أسابيع من الانتظار",
                  ],
                  [
                    "الأمان",
                    "شركة مرخصة بمقر ثابت",
                    "لا ضمان ولا مرجعية",
                    "تتعامل مع غرباء",
                  ],
                  [
                    "النقل والفك",
                    "فك ونقل مجاني واحترافي",
                    "أحياناً بتكلفة إضافية",
                    "على حسابك أنت",
                  ],
                  [
                    "الدفع",
                    "نقداً فوري أو تحويل بنكي",
                    "نقداً فقط",
                    "حسب اتفاقك مع المشتري",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="even:bg-[#f5d7cc]/10">
                    <td className="px-5 py-4 font-semibold text-[#413332]">
                      {row[0]}
                    </td>
                    <td className="px-5 py-4 font-medium text-green-700">
                      {row[1]}
                    </td>
                    <td className="px-5 py-4">{row[2]}</td>
                    <td className="px-5 py-4">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ─────────── SERVICES ─────────── */}
        <Section>
          <h2 className="mb-4 text-2xl font-bold text-[#413332] md:text-3xl">
            خدماتنا في شراء وبيع الاثاث المستعمل في العين
          </h2>
          <p className="mb-10 leading-relaxed max-w-4xl">
            نقدم خدمة متكاملة تغطي كل ما يخص الاثاث المستعمل في العين. سواء كنت
            تبي تبيع أو تبي تشتري، عندنا الحل. وكل خدمة مصممة عشان توفر عليك
            الوقت والجهد والقلق.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 mt-16">
            {/* service 1 */}
            <article className="group overflow-hidden rounded-2xl border border-[#f5d7cc] transition hover:shadow-lg">
              <PlaceholderImage
                alt="شراء الأثاث المنزلي المستعمل في العين"
                aspect="aspect-4/3"
                src="/loc/شراء-الأثاث-المنزلي -المستعمل.jpg"
              />
              <div className="p-6">
                <Link href="/شراء-الأثاث-المنزلي">
                  <h3 className="mb-3 text-xl font-bold text-[#413332]">
                    شراء الأثاث المنزلي المستعمل
                  </h3>
                </Link>
                <p className="mb-3 leading-relaxed">
                  نشتري كل أنواع الأثاث المنزلي المستعمل في العين: كنب ومجالس
                  بجميع الأحجام، غرف نوم كاملة مع السرير والدولاب والتسريحة،
                  طاولات سفرة مع الكراسي، خزائن ودواليب تخزين، وأي قطعة أثاث
                  منزلي ثانية.
                </p>
                <p className="leading-relaxed">
                  إذا عندك كنب مستعمل للبيع في العين أو غرف نوم مستعملة للبيع في
                  العين، تواصل معنا وأرسل صور واضحة وبنعطيك سعر خلال دقائق. ما
                  نحتاج تنزل القطع من البيت أو تنقلها بنفسك، نحن نجي لعندك.
                </p>
              </div>
            </article>

            {/* service 2 */}
            <article className="group overflow-hidden rounded-2xl border border-[#f5d7cc] transition hover:shadow-lg">
              <PlaceholderImage
                alt="شراء الأجهزة الكهربائية المستعملة في العين"
                aspect="aspect-4/3"
                src="/loc/شراء-الأجهزة-الكهربائية-المستعملة-في-العين.jpg"
              />
              <div className="p-6">
                <Link href="/شراء-الأجهزة-المنزلية">
                  <h3 className="mb-3 text-xl font-bold text-[#413332]">
                    شراء الأجهزة الكهربائية المستعملة في العين
                  </h3>
                </Link>

                <p className="mb-3 leading-relaxed">
                  بجانب الأثاث، نشتري جميع الأجهزة الكهربائية المستعملة في
                  العين. ثلاجات، غسالات، مكيفات سبليت وشباك، تلفزيونات، أفران،
                  سخانات مياه، وغسالات صحون. كل جهاز يتم فحصه والتأكد من عمله
                  قبل تحديد السعر.
                </p>
                <p className="leading-relaxed">
                  <strong>ثلاجات مستعملة للبيع في العين</strong> من أكثر الأشياء
                  اللي نتعامل فيها يومياً. ونشتري جميع الماركات: سامسونج، ال جي،
                  بوش، سيمنس، بيكو وغيرها.
                </p>
              </div>
            </article>

            {/* service 3 */}
            <article className="group overflow-hidden rounded-2xl border border-[#f5d7cc] transition hover:shadow-lg">
              <PlaceholderImage
                alt="شراء أثاث المكاتب المستعمل في العين"
                aspect="aspect-4/3"
                src="/loc/شراء-أثاث-المكاتب-المستعمل-في-العين.jpg"
              />
              <div className="p-6">
                <Link href="/شراء-الاثاث-المكتبي-المستعمل">
                  <h3 className="mb-3 text-xl font-bold text-[#413332]">
                    شراء أثاث المكاتب المستعمل في العين
                  </h3>
                </Link>

                <p className="leading-relaxed">
                  عندك مكتب يتم إغلاقه أو تجديده؟ نشتري{" "}
                  <strong>اثاث مكتبي مستعمل في العين</strong>: مكاتب عمل، كراسي
                  مكتبية، محطات عمل كاملة، طاولات اجتماعات، وخزائن أرشيف. نتعامل
                  مع الشركات الصغيرة والكبيرة ونقدم عروض مناسبة للكميات.
                </p>
              </div>
            </article>

            {/* service 4 */}
            <article className="group overflow-hidden rounded-2xl border border-[#f5d7cc] transition hover:shadow-lg">
              <PlaceholderImage
                alt="اثاث مستعمل للبيع في العين"
                aspect="aspect-4/3"
                src="/loc/اثاث-مستعمل-للبيع-في-العين.jpg"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-[#413332]">
                  اثاث مستعمل للبيع في العين – مفحوص ومعقم
                </h3>
                <p className="mb-3 leading-relaxed">
                  ما نشتري فقط، نبيع أيضاً. إذا تبحث عن{" "}
                  <strong>اثاث مستعمل للبيع في العين</strong> بحالة ممتازة وسعر
                  معقول، عندنا تشكيلة متجددة من القطع المفحوصة والمعقمة.
                </p>
                <p className="leading-relaxed">
                  كل قطعة أثاث نبيعها تمر على فحص كامل وتنظيف احترافي. الكنب
                  والمجالس يتم تعقيمها بالكامل لضمان خلوها من أي حشرات أو أوساخ.
                  والأجهزة الكهربائية يتم اختبارها والتأكد من كفاءتها. وكل شيء
                  نبيعه يأتي مع ضمان وسياسة إرجاع واضحة. لو ما عجبك المنتج،
                  ترجعه.
                </p>
              </div>
            </article>
          </div>
        </Section>

        {/* ─────────── PRICING TABLE ─────────── */}
        <Section bg="bg-[#413332]">
          <h3 className="mb-2 text-center text-2xl font-bold text-[#f5d7cc] md:text-3xl">
            دليل الأسعار التقريبي
          </h3>
          <p className="mb-8 text-center text-white/80">
            هذي أسعار تقريبية تعتمد على حالة القطعة والماركة والعمر. السعر
            النهائي يتحدد بعد المعاينة.
          </p>

          <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
            <table className="w-full min-w-[500px] text-right">
              <thead>
                <tr className="border-b-2 border-[#f5d7cc] bg-[#f5d7cc]/30">
                  <th className="px-5 py-4 font-semibold text-[#413332]">
                    نوع القطعة
                  </th>
                  <th className="px-5 py-4 font-semibold text-[#413332]">
                    حالة جيدة
                  </th>
                  <th className="px-5 py-4 font-semibold text-[#413332]">
                    حالة ممتازة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5d7cc]/50">
                {[
                  ["كنبة 5 مقاعد", "500 - 1,000 درهم", "1,000 - 2,000 درهم"],
                  ["غرفة نوم كاملة", "800 - 1,500 درهم", "1,500 - 3,000 درهم"],
                  [
                    "طاولة سفرة + 6 كراسي",
                    "400 - 800 درهم",
                    "800 - 1,500 درهم",
                  ],
                  ["ثلاجة كبيرة", "300 - 600 درهم", "600 - 1,200 درهم"],
                  ["غسالة أوتوماتيك", "200 - 400 درهم", "400 - 800 درهم"],
                  ["مكيف سبليت", "250 - 500 درهم", "500 - 1,000 درهم"],
                  ["مجلس عربي كامل", "600 - 1,200 درهم", "1,200 - 2,500 درهم"],
                  ["مكتب عمل + كرسي", "200 - 500 درهم", "500 - 1,000 درهم"],
                ].map((row, i) => (
                  <tr key={i} className="even:bg-[#f5d7cc]/10">
                    <td className="px-5 py-3 font-medium text-[#413332]">
                      {row[0]}
                    </td>
                    <td className="px-5 py-3">{row[1]}</td>
                    <td className="px-5 py-3 font-semibold text-green-700">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-white/70">
            * الأسعار تقريبية وقابلة للتغيير حسب الماركة والحالة الفعلية عند
            المعاينة.
          </p>
        </Section>

        {/* ─────────── COVERAGE AREAS ─────────── */}
        <Section>
          <h2 className="mb-4 text-2xl font-bold text-[#413332] md:text-3xl">
            نغطي جميع مناطق العين – خدمة شراء اثاث مستعمل في كل حي
          </h2>
          <p className="mb-8 leading-relaxed max-w-4xl">
            خدمتنا في شراء اثاث مستعمل العين تغطي المدينة بالكامل. ما يهم في أي
            منطقة تسكن، نوصل لك ونشتري أثاثك ونفكه وننقله على حسابنا. هنا قائمة
            بالمناطق اللي نخدمها يومياً:
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "منطقة الجيمي",
                desc: "من أكبر المناطق السكنية في العين. نخدم سكان الجيمي بالقرب من الجيمي مول ونوصل خلال 30 دقيقة أو أقل.",
              },
              {
                name: "منطقة زاخر",
                desc: "منطقة سكنية هادئة فيها عائلات كثيرة. نشتري الاثاث المستعمل من سكان زاخر بشكل يومي.",
              },
              {
                name: "منطقة المقام",
                desc: "بالقرب من جامعة الإمارات. كثير من الطلاب والعائلات يحتاجون يبيعون أثاثهم عند الانتقال.",
              },
              {
                name: "منطقة الياهر",
                desc: "نوفر خدمة شراء اثاث مستعمل في الياهر مع استلام من الباب.",
              },
              {
                name: "منطقة المعترض",
                desc: "منطقة حيوية نخدمها بانتظام. فريقنا يعرف الشوارع والعمارات ويوصل بسرعة.",
              },
              {
                name: "منطقة فلج هزاع",
                desc: "من المناطق اللي نتلقى منها طلبات كثيرة لشراء الأثاث المستعمل والأجهزة.",
              },
              {
                name: "منطقة الخبيصي",
                desc: "نخدم سكان الخبيصي بنفس سرعة وجودة الخدمة.",
              },
              {
                name: "منطقة المويجعي",
                desc: "بما فيها المناطق القريبة من قلعة المويجعي، نوفر تغطية كاملة.",
              },
              {
                name: "مناطق أخرى",
                desc: "الطوية، التوحيد، الجاهلي، الهيلي، المسعودي، العين الفايضة، وأي منطقة ثانية في العين. فقط تواصل معنا وبنكون عندك.",
              },
            ].map((area) => (
              <div
                key={area.name}
                className="rounded-xl border border-[#f5d7cc] p-5 transition hover:shadow-md"
              >
                <h3 className="mb-2 font-bold text-[#413332]">{area.name}</h3>
                <p className="text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-xl bg-[#f5d7cc]/30 p-4 text-center font-semibold text-[#413332] md:w-max mx-auto">
            خدمة الاستلام مجانية من أي مكان في العين. ما نأخذ رسوم نقل أو فك. كل
            شيء على حسابنا.
          </p>

          {/* Google Map placeholder */}
          <div className="mt-8 flex aspect-[16/7] items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#f5d7cc] bg-[#f5d7cc]/10">
            <div className="rounded-2xl overflow-hidden w-full h-full bg-gray-200 border-2 border-dashed border-[#413332]/20 flex items-center justify-center">
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
        </Section>

        {/* ─────────── HOW TO SELL — 3 STEPS ─────────── */}
        <Section bg="bg-gradient-to-b from-[#f5d7cc]/20 to-white">
          <h2 className="mb-4 text-center text-2xl font-bold text-[#413332] md:text-3xl">
            كيف تبيع أثاثك المستعمل في العين في 3 خطوات فقط؟
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed">
            العملية بسيطة وما تاخذ من وقتك شيء. ثلاث خطوات وخلاص:
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "تواصل معنا",
                text: "أرسل لنا صور الأثاث اللي تبي تبيعه على الواتساب أو من خلال نموذج التواصل في الموقع. حاول تصور القطع في إضاءة واضحة ومن أكثر من زاوية. خلال 5 إلى 10 دقائق، نرد عليك بسعر مبدئي.",
              },
              {
                step: "2",
                title: "تقييم مجاني ومعاينة",
                text: "إذا وافقت على السعر المبدئي، فريقنا يجي لموقعك في العين لمعاينة الأثاث شخصياً. المعاينة مجانية وبدون أي التزام. لو ما ناسبك السعر النهائي، ما في مشكلة ولا أي تكلفة عليك.",
              },
              {
                step: "3",
                title: "دفع فوري واستلام",
                text: "بعد الاتفاق على السعر، ندفع لك فوراً: نقداً أو تحويل بنكي أو شيك حسب ما يناسبك. وفريقنا يتولى فك الأثاث وتغليفه ونقله بالكامل. أنت ما تحتاج تحرك شيء.",
              },
            ].map((item) => (
              <article key={item.step} className="text-center">
                <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#413332] text-2xl font-extrabold text-[#f5d7cc]">
                  {item.step}
                </span>
                <h3 className="mb-3 text-xl font-bold text-[#413332]">
                  {item.title}
                </h3>
                <p className="leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* ─────────── TIPS ─────────── */}
        <Section>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-[#413332] md:text-3xl">
                نصائح ذهبية لبيع أثاثك المستعمل بأعلى سعر في العين
              </h2>
              <p className="mb-6 leading-relaxed">
                من واقع تجربتنا الطويلة في{" "}
                <strong>شراء اثاث مستعمل في العين</strong>، هنا خمس نصائح تساعدك
                تحصل على أفضل سعر لأثاثك:
              </p>

              <ol className="space-y-5 list-none">
                {[
                  {
                    title: "نظف الأثاث وصوره صح",
                    text: "الانطباع الأول مهم. نظف القطع قبل ما تصورها، واستخدم إضاءة طبيعية. الصور الواضحة تعطي انطباع إن القطعة بحالة أفضل وتأثر على السعر.",
                  },
                  {
                    title: "احتفظ بالفواتير الأصلية",
                    text: "لو عندك فاتورة شراء من ايكيا أو هوم سنتر أو أي ماركة، احتفظ فيها. وجود الفاتورة يثبت الماركة والعمر ويرفع قيمة القطعة.",
                  },
                  {
                    title: "الإصلاحات البسيطة تفرق",
                    text: "شد البراغي اللي ماسكة، صلح المقابض المكسورة، نظف البقع. هالأشياء الصغيرة ممكن تزيد السعر بشكل ملحوظ.",
                  },
                  {
                    title: "بيع في الوقت المناسب",
                    text: "المكيفات قيمتها ترتفع قبل الصيف. السخانات قبل الشتاء. أثاث غرف النوم يكون عليه طلب في بداية السنة الدراسية. التوقيت يفرق في السعر.",
                  },
                  {
                    title: "بيع كل شيء مع بعض",
                    text: "لو عندك أثاث بيت كامل، بيعه كحزمة وحدة. عادةً نعطي سعر أفضل للكميات الكبيرة مقارنة بالقطع المفردة.",
                  },
                ].map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-xl border border-[#f5d7cc]/60 bg-[#f5d7cc]/10 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#413332] text-sm font-bold text-[#f5d7cc]">
                      {i + 1}
                    </span>
                    <div>
                      <strong className="block text-[#413332]">
                        {tip.title}
                      </strong>
                      <span className="text-sm leading-relaxed">
                        {tip.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <PlaceholderImage
              alt="نصائح بيع الأثاث المستعمل في العين"
              aspect="aspect-[3/4]"
              className="sticky top-24"
              src="/loc/أثاثك-المستعمل-بأعلى-سعر-في-العين.jpg"
            />
          </div>
        </Section>

        {/* ─────────── BRANDS ─────────── */}
        <Section bg="bg-[#f5d7cc]/15">
          <h2 className="mb-4 text-2xl font-bold text-[#413332] md:text-3xl">
            العلامات التجارية التي نشتريها في العين
          </h2>
          <p className="mb-6 leading-relaxed">
            نشتري أثاث من جميع الماركات، لكن بعض العلامات التجارية لها قيمة
            إعادة بيع أعلى من غيرها. هنا أبرز الماركات اللي نتعامل معها:
          </p>

          <div className="mb-6 space-y-3">
            <p className="leading-relaxed">
              <strong className="text-[#413332]">أثاث منزلي:</strong> ايكيا
              (IKEA)، هوم سنتر (Home Centre)، بان اماراتس (Pan Emirates)، دانوب
              هوم (Danube Home)، رويال فيرنتشر (Royal Furniture)، آشلي (Ashley)،
              ويست إلم (West Elm)، بوتري بارن (Pottery Barn)، وكريت آند باريل
              (Crate &amp; Barrel).
            </p>
            <p className="leading-relaxed">
              <strong className="text-[#413332]">أجهزة كهربائية:</strong>{" "}
              سامسونج (Samsung)، ال جي (LG)، بوش (Bosch)، سيمنس (Siemens)، بيكو
              (Beko)، هاير (Haier)، وتوشيبا (Toshiba).
            </p>
          </div>

          <p className="mb-4 leading-relaxed">
            <strong>اثاث ايكيا مستعمل في العين</strong> من أكثر القطع اللي عليها
            طلب لأن ايكيا معروفة بالتصاميم العملية واللي تناسب أغلب البيوت. لو
            عندك أثاث ايكيا تبي تبيعه، غالباً بنعطيك سعر مميز.
          </p>
          <p className="mb-8 leading-relaxed">
            الماركات الفاخرة مثل ويست إلم وبوتري بارن تحصل على تقييم أعلى لأن
            جودة المواد والتصنيع تحافظ على قيمتها لفترة أطول.
          </p>

          {/* brand logos placeholder */}
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {[
              "IKEA",
              "Home Centre",
              "Pan Emirates",
              "Danube Home",
              "Royal Furniture",
              "Ashley",
              "West Elm",
              "Pottery Barn",
              "Crate & Barrel",
              "Samsung",
              "LG",
              "Bosch",
            ].map((brand) => (
              <div
                key={brand}
                className="flex  items-center justify-center rounded-xl border border-[#f5d7cc] bg-white p-3 text-center text-xs font-semibold text-[#413332] shadow-sm"
              >
                {/* Replace with actual brand logo */}
                {brand}
              </div>
            ))}
          </div>
        </Section>

        {/* ─────────── TESTIMONIALS ─────────── */}
        <Section>
          <h2 className="mb-4 text-2xl font-bold text-[#413332] md:text-3xl">
            آراء عملائنا في العين
          </h2>
          <p className="mb-10 leading-relaxed">
            ما نحتاج نقول لك إننا ممتازين. عملاءنا يقولون هالشيء عنا. هنا بعض
            آراء اللي تعاملوا معنا في العين:
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "تواصلت معاهم على الواتساب وخلال ربع ساعة كان عندي سعر. وبنفس اليوم جاء الفريق واشتروا كل شيء ودفعوا كاش. تجربة ممتازة صراحة.",
                name: "خالد م.",
                area: "منطقة الجيمي، العين",
              },
              {
                quote:
                  "كنت أبي أبيع أثاث شقتي كامل لأني مسافر. تواصلت مع أكثر من جهة بس هم اللي أعطوني أعلى سعر وكانوا صريحين من البداية. ما حاولوا يساوموني.",
                name: "سارة ع.",
                area: "منطقة زاخر، العين",
              },
              {
                quote:
                  "اشتريت منهم كنبة وغرفة نوم. كل شيء كان نظيف ومعقم وبحالة ممتازة. والتوصيل كان سريع. وعرفت إن في ضمان، فاطمنت.",
                name: "أحمد ر.",
                area: "منطقة المقام، العين",
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-[#f5d7cc] bg-white p-6 shadow-sm"
              >
                <p className="mb-4 leading-relaxed italic text-[#606060]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <strong className="block text-[#413332]">{t.name}</strong>
                    <span className="text-sm text-[#606060]/70">{t.area}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* ─────────── ALSO SERVING + INTERNAL LINKS ─────────── */}
        <Section bg="bg-[#f5d7cc]/15">
          <h2 className="mb-3 text-xl font-bold text-[#413332] md:text-2xl">
            نخدم أيضاً
          </h2>
          <p className="mb-6 leading-relaxed">
            بالإضافة لمدينة العين، نقدم خدمة شراء وبيع الأثاث المستعمل في جميع
            إمارات الدولة: الشارقة، دبي، أبوظبي، عجمان، رأس الخيمة، الفجيرة، وأم
            القيوين. مقرنا الرئيسي في شارع الاستقلال، أبو شغارة، الشارقة.
          </p>

          <nav aria-label="روابط المدن الأخرى">
            <ul className="flex flex-wrap gap-3">
              {LocationLinks.map((city, i) => (
                <li key={i}>
                  <a
                    href={city.href}
                    className="inline-block rounded-full border border-[#413332] px-5 py-2 text-sm font-medium text-[#413332] transition hover:bg-[#413332] hover:text-white"
                  >
                    {city.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Section>
        <FAQSection
          faqs={AlAinFaqs}
          title="الأسئلة الشائعة عن شراء وبيع الاثاث المستعمل في العين"
        />
        <CTA
          title="تواصل معنا الآن - شراء اثاث مستعمل العين"
          desc="جاهز تبيع أثاثك المستعمل في العين؟ أو تبحث عن أثاث مستعمل بحالة ممتازة وسعر معقول؟ تواصل معنا اليوم.
الطريقة الأسرع هي الواتساب. أرسل لنا صور الأثاث وبنرد عليك خلال دقائق بسعر واضح. أو اتصل علينا مباشرة أو عبئ نموذج التواصل في الأسفل.
"
        />
      </main>
    </>
  );
};

export default AlAinPage;
