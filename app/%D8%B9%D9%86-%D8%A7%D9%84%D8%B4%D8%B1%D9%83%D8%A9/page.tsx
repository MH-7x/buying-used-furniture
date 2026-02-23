import {
  CheckCircle,
  Truck,
  Shield,
  CreditCard,
  MapPin,
  Leaf,
  Eye,
  Smartphone,
  Clock,
  Star,
  Phone,
  MessageCircle,
  Home,
  Briefcase,
  Hotel,
  Monitor,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    icon: Home,
    title: "شراء الأثاث المنزلي المستعمل",
    description:
      "نشتري جميع أنواع الأثاث المنزلي من غرف النوم والمعيشة والمجالس العربية والكنب والستائر والسجاد",
  },
  {
    icon: Zap,
    title: "شراء الأجهزة الكهربائية المستعملة",
    description:
      "نشتري الثلاجات والغسالات ومكيفات الهواء والأفران والميكروويف بأسعار مناسبة",
  },
  {
    icon: Briefcase,
    title: "شراء الأثاث المكتبي المستعمل",
    description: "خدمة شراء الأثاث المكتبي بالجملة للشركات والمكاتب والمؤسسات",
  },
  {
    icon: Hotel,
    title: "شراء أثاث الفنادق المستعمل",
    description:
      "نشتري أثاث الفنادق بكميات كبيرة بما فيها الأسرّة والأرائك ومعدات الضيافة",
  },
  {
    icon: Monitor,
    title: "شراء الأجهزة الإلكترونية المستعملة",
    description:
      "نشتري التلفزيونات وأجهزة الصوت والشاشات وأجهزة الألعاب بحالة جيدة",
  },
];

const features = [
  {
    icon: CheckCircle,
    title: "تقييم احترافي وشفاف",
    description:
      "نظام تقييم يأخذ في الاعتبار حالة القطعة وعمرها وعلامتها التجارية وقيمتها السوقية",
  },
  {
    icon: Star,
    title: "نشتري جميع الماركات",
    description:
      "ايكيا وداناب وهوم سنتر وبان إمارات ورويال فيرنتشر وغيرها من العلامات المحلية والعالمية",
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "كل منتج يأتي مع ضمان وسياسة إرجاع واضحة تحمي حقوق المشتري",
  },
];

const coverageAreas = [
  "الشارقة",
  "دبي",
  "أبوظبي",
  "العين",
  "عجمان",
  "أم القيوين",
  "رأس الخيمة",
  "الفجيرة",
];

function App() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative  overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#f5d7cc] blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#f5d7cc] blur-3xl"></div>
        </div>
        <div className="relative  mx-auto px-4 sm:px-6 lg:px-20 pb-20  pt-36 lg:py-32 bg-secondary">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-[#f5d7cc]/20 text-[#f5d7cc] px-4 py-2 rounded-full text-sm mb-6">
                <Star className="w-4 h-4" />
                <span>أكثر من 10 سنوات من الخبرة</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                شركة شراء اثاث مستعمل
                <span className="block text-[#f5d7cc] mt-2">في الإمارات</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                شريكك الأول في بيع وشراء الأثاث المستعمل بالإمارات. نتعامل بصدق
                وشفافية من مقرنا الرئيسي في الشارقة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size={"lg"}>تواصل معنا</Button>
                <Button
                  size={"lg"}
                  variant={"secondary"}
                  className="border border-primary"
                >
                  واتساب
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/3 bg-linear-to-br from-[#f5d7cc]/20 to-[#f5d7cc]/5 rounded-3xl relative overflow-hidden">
                <Image
                  src={"/شركة-شراء-اثاث-مستعمل-1.jpg"}
                  alt="شركة شراء اثاث مستعمل
في الإمارات"
                  fill
                  loading="eager"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-4/3 bg-linear-to-br from-[#f5d7cc]/30 to-[#f5d7cc]/10 rounded-3xl relative overflow-hidden">
                <Image
                  src={"/بيع-وشراء-الأثاث-المستعمل.jpg"}
                  alt="بيع وشراء الأثاث المستعمل"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-3 mb-6">
                شركة شراء اثاث مستعمل – شريكك الأول في بيع وشراء الأثاث المستعمل
                بالإمارات
              </h2>
              <div className="space-y-4 text-[#606060] leading-relaxed">
                <p>
                  إذا كنت تبحث عن شركة شراء اثاث مستعمل في الإمارات تتعامل معك
                  بصدق وشفافية، فأنت في المكان الصحيح. نحن شركة شراء اثاث
                  مستعمل، ونعمل في هذا المجال منذ أكثر من عشر سنوات من مقرنا
                  الرئيسي في الشارقة.
                </p>
                <p>
                  خلال هذه السنوات، بنينا سمعة قوية تعتمد على الثقة والالتزام مع
                  آلاف العملاء في جميع أنحاء الإمارات. بدأنا هذا العمل لأننا
                  لاحظنا مشكلة حقيقية يواجهها كثير من السكان في الإمارات.
                </p>
                <p>
                  شركتنا ليست مجرد شركة نقل أثاث أو وسيط عادي. نحن متخصصون في
                  تجارة الأثاث المستعمل بكل أنواعه. نفهم السوق جيداً ونعرف
                  القيمة الحقيقية لكل قطعة أثاث.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#606060] text-sm font-medium tracking-wide">
              لماذا نحن
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-3">
              لماذا نحن مختلفون عن غيرنا في شراء الاثاث المستعمل؟
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#f5d7cc] flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#606060] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-[#606060] leading-relaxed text-center">
              كثير من تجار الأثاث المستعمل يشترون بأسعار منخفضة جداً ثم يبيعون
              بأسعار مرتفعة لتحقيق ربح سريع دون أي اهتمام بجودة المنتج أو رضا
              العميل. نحن لا نعمل بهذه الطريقة. فلسفتنا تقوم على بناء علاقات
              طويلة المدى مع عملائنا، وهذا يتطلب أن يكون كل طرف راضياً عن
              الصفقة.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#606060] text-sm font-medium tracking-wide">
              خدماتنا
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-3">
              خدماتنا الشاملة في شراء الاثاث المستعمل والأجهزة الكهربائية
            </h2>
            <p className="text-[#606060] mt-4 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من خدمات شراء الأثاث المستعمل والأجهزة المنزلية
              في جميع إمارات الدولة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-[#faf8f7] border-0 hover:bg-[#f5d7cc]/20 transition-colors duration-300 rounded-2xl overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#413332] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[#f5d7cc]" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#606060] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#f5d7cc] text-sm font-medium tracking-wide">
                معايير الجودة
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-6">
                معايير الجودة والنظافة – كيف نضمن رضا المشتري والبائع
              </h2>
              <div className="space-y-6 mt-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5d7cc]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#f5d7cc]" />
                  </div>
                  <div>
                    <h4 className="text-white! font-semibold mb-2">
                      فحص احترافي شامل
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      كل قطعة أثاث تمر بعملية فحص احترافية شاملة للحالة الهيكلية
                      والمظهرية
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5d7cc]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#f5d7cc]" />
                  </div>
                  <div>
                    <h4 className="text-white! font-semibold mb-2">
                      تعقيم احترافي
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      الأثاث المنجد يخضع لبروتوكول تعقيم احترافي خاص يضمن خلوه
                      من الحشرات والبكتيريا
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5d7cc]/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#f5d7cc]" />
                  </div>
                  <div>
                    <h4 className="text-white! font-semibold mb-2">
                      فحص تقني دقيق
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      الأجهزة الكهربائية تخضع لفحص تقني دقيق ومتعدد المراحل
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-square bg-gradient-to-br from-[#f5d7cc]/20 to-[#f5d7cc]/5 rounded-3xl relative overflow-hidden">
                <Image
                  src="/معايير-الجودة-والنظافة.jpg"
                  alt="معايير الجودة والنظافة"
                  fill
                  className="object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Response Section */}
      <section className="py-20 lg:py-28 bg-[#f5d7cc]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#413332]/10 to-[#413332]/5 rounded-3xl relative overflow-hidden">
                <Image
                  src="/السرعة-في-الاستجابة.jpg"
                  alt=" السرعة في الاستجابة"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#606060] text-sm font-medium tracking-wide">
                السرعة في الاستجابة
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-3 mb-6">
                السرعة في الاستجابة – نصلك خلال دقائق
              </h2>
              <div className="space-y-4 text-[#606060] leading-relaxed">
                <p>
                  نعرف أن وقتك ثمين، خاصة إذا كنت في مرحلة انتقالية أو تحت ضغط
                  وقت محدد. لهذا نحرص على الرد السريع على جميع الاستفسارات.
                </p>
                <p>
                  عندما تتواصل معنا عبر الواتساب أو من خلال منصتنا الرقمية، تحصل
                  على رد خلال{" "}
                  <span className="font-bold text-secondary">
                    خمس إلى عشر دقائق
                  </span>{" "}
                  فقط. لا ننتظر ساعات أو أيام للرد على عملائنا كما يفعل كثير من
                  المنافسين.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-md mt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#f5d7cc] flex items-center justify-center">
                      <span className="text-lg font-bold text-secondary">
                        5-10
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-secondary">دقائق فقط</p>
                      <p className="text-sm text-[#606060]">
                        للرد على استفساراتك
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation & Safe Removal Section */}
      <section className="py-20 lg:py-28 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Transportation */}
            <Card className="bg-primary border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 rounded-2xl bg-[#413332] flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-[#f5d7cc]" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  خدمات النقل والفك والتركيب
                </h3>
                <p className="text-[#606060] leading-relaxed mb-6">
                  عندما تبيع أثاثك لنا، لا تحتاج للقلق بشأن كيفية نقله أو
                  تفكيكه. نحن نتولى كل شيء. فريقنا المتخصص يتعامل مع أثاثك
                  بعناية فائقة.
                </p>
                <ul className="space-y-3">
                  {[
                    "فك الأثاث مجاناً",
                    "تغليف احترافي",
                    "نقل آمن",
                    "توصيل سريع",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span className="text-[#606060]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Safe Removal */}
            <Card className="bg-secondary border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 rounded-2xl bg-[#f5d7cc]/20 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#f5d7cc]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  نظام الإزالة الآمنة المعتمد
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  حماية ممتلكاتك أولوية قصوى. فريقنا مدرب تدريباً خاصاً على
                  حماية ممتلكات العميل والمبنى أثناء عملية النقل.
                </p>
                <ul className="space-y-3">
                  {[
                    "أغطية واقية للمصاعد",
                    "حماية الممرات والأرضيات",
                    "التعامل بحذر مع الجدران",
                    "الالتزام بقواعد الأبراج السكنية",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#f5d7cc]" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment & Coverage Section */}
      <section className="py-20 lg:py-28 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Payment Options */}
            <div>
              <span className="text-[#606060] text-sm font-medium tracking-wide">
                المرونة في الدفع
              </span>
              <h2 className="text-3xl font-bold text-secondary mt-3 mb-6">
                خيارات متعددة تناسب الجميع
              </h2>
              <p className="text-[#606060] leading-relaxed mb-8">
                نؤمن بأن عملية البيع والشراء يجب أن تكون سهلة ومريحة من جميع
                النواحي، بما في ذلك طريقة الدفع.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: CreditCard,
                    title: "نقداً",
                    desc: "فوراً عند إتمام الصفقة",
                  },
                  {
                    icon: Smartphone,
                    title: "تحويل بنكي",
                    desc: "إيداع مباشر في حسابك",
                  },
                  {
                    icon: CheckCircle,
                    title: "شيكات مصرفية",
                    desc: "للصفقات الكبيرة",
                  },
                  {
                    icon: Clock,
                    title: "الشراء الآن والدفع لاحقاً",
                    desc: "قريباً للمشترين",
                  },
                ].map((option, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                    <option.icon className="w-8 h-8 text-secondary mb-3" />
                    <h4 className="font-semibold text-secondary mb-1">
                      {option.title}
                    </h4>
                    <p className="text-sm text-[#606060]">{option.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Areas */}
            <div>
              <span className="text-[#606060] text-sm font-medium tracking-wide">
                مناطق الخدمة
              </span>
              <h2 className="text-3xl font-bold text-secondary mt-3 mb-6">
                تغطية شاملة في جميع إمارات الدولة
              </h2>
              <p className="text-[#606060] leading-relaxed mb-8">
                مقرنا الرئيسي في إمارة الشارقة، وخدماتنا تمتد لتشمل جميع إمارات
                الدولة.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <span className="font-semibold text-secondary">
                    نغطي جميع الإمارات
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {coverageAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#f5d7cc]"></div>
                      <span className="text-[#606060]">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f5d7cc]/30 text-secondary px-4 py-2 rounded-full text-sm mb-6">
                <Leaf className="w-4 h-4" />
                <span>الاستدامة البيئية</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                الاقتصاد الدائري – مساهمتنا في الحفاظ على البيئة
              </h2>
              <div className="space-y-4 text-[#606060] leading-relaxed">
                <p>
                  عملنا في شراء وبيع الأثاث المستعمل ليس مجرد نشاط تجاري عادي.
                  نحن نساهم بشكل فعلي في بناء اقتصاد دائري يتماشى مع رؤية وأهداف
                  الاستدامة في دولة الإمارات العربية المتحدة.
                </p>
                <p>
                  كل قطعة أثاث نعيد تأهيلها ونبيعها مرة أخرى هي قطعة أثاث لم
                  تنتهِ في مكبات النفايات. نحن نساعد البائعين على تحويل أثاثهم
                  القديم إلى سيولة مالية فورية، وفي الوقت نفسه نوفر للمشترين
                  فرصة حقيقية للحصول على أثاث أنيق وعالي الجودة بأسعار أقل.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden relative">
                <Image
                  src="/الاقتصاد-الدائري.jpg"
                  alt="الاقتصاد الدائري"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#f5d7cc] text-sm font-medium tracking-wide">
              الشفافية والمصداقية
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              ما تراه هو ما تحصل عليه بالضبط
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "شفافية كاملة",
                desc: "حساباتنا على وسائل التواصل الاجتماعي تعرض فريق عملنا الفعلي وأسطول النقل الحقيقي ومخازننا الحقيقية",
              },
              {
                icon: CheckCircle,
                title: "تقييم واضح",
                desc: "نشرح لك بوضوح كيف وصلنا إلى السعر الذي نقدمه، وما هي العوامل التي أخذناها في الاعتبار",
              },
              {
                icon: Shield,
                title: "شركة مرخصة",
                desc: "نحن شركة مسجلة رسمياً ومرخصة في دولة الإمارات، مما يعني أنك تتعامل مع جهة قانونية معتمدة",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#f5d7cc]/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-[#f5d7cc]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Experience Section */}
      <section className="py-20 lg:py-28 bg-[#f5d7cc]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#413332]/10 to-[#413332]/5 rounded-3xl overflow-hidden relative">
                <Image
                  src="/تجربة-بيع-وشراء-رقمية.jpg"
                  alt="تجربة بيع وشراء رقمية"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#606060] text-sm font-medium tracking-wide">
                التجربة الرقمية
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-3 mb-6">
                تجربة بيع وشراء رقمية سلسة بالكامل
              </h2>
              <div className="space-y-4 text-[#606060] leading-relaxed">
                <p>
                  نحن نعيش في عصر رقمي سريع، وعملاؤنا في الإمارات يتوقعون تجربة
                  تواكب هذا العصر وتحترم وقتهم.
                </p>
                <p>
                  يمكنك التواصل معنا عبر الواتساب أو من خلال موقعنا الإلكتروني
                  وإرسال صور لأثاثك للحصول على تقييم مبدئي سريع ومجاني.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="text-secondary font-medium">واتساب</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Smartphone className="w-5 h-5 text-secondary" />
                  <span className="text-secondary font-medium">
                    موقع إلكتروني
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="text-secondary font-medium">نفس اليوم</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#606060] text-sm font-medium tracking-wide">
            رسالتنا
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mt-3 mb-8">
            أكثر من مجرد شراء وبيع أثاث مستعمل
          </h2>
          <div className="bg-[#faf8f7] rounded-3xl p-8 lg:p-12">
            <p className="text-lg text-[#606060] leading-relaxed mb-6">
              نحن لا نتاجر في الأثاث فقط. نحن نتاجر في{" "}
              <span className="font-bold text-secondary">القيمة والثقة</span>.
              رسالتنا هي تغيير الصورة السلبية المرتبطة بسوق الأثاث المستعمل في
              المنطقة وتقديم تجربة محترمة تليق بعملائنا وتحترم وقتهم وأموالهم.
            </p>
            <p className="text-[#606060] leading-relaxed">
              نريد أن يشعر كل عميل يتعامل معنا بالراحة والأمان والاحترام. سواء
              كنت تبيع أثاثك لأنك تنتقل إلى منزل جديد، أو تغادر البلاد، أو تجدد
              ديكور منزلك، أو تشتري أثاثاً مستعملاً لتأثيث شقتك الأولى في
              الإمارات، نحن هنا لنجعل هذه التجربة إيجابية ومرضية من البداية حتى
              النهاية.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8">
            <div className="text-center">
              <p className="md:text-4xl text-3xl font-bold text-secondary">
                10+
              </p>
              <p className="text-[#606060] text-sm mt-1">سنوات خبرة</p>
            </div>
            <div className="w-px h-16 bg-[#f5d7cc]"></div>
            <div className="text-center">
              <p className="md:text-4xl text-3xl font-bold text-secondary">
                آلاف
              </p>
              <p className="text-[#606060] text-sm mt-1">العملاء الراضين</p>
            </div>
            <div className="w-px h-16 bg-[#f5d7cc]"></div>
            <div className="text-center">
              <p className="md:text-4xl text-3xl font-bold text-secondary">7</p>
              <p className="text-[#606060] text-sm mt-1">إمارات مغطاة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#f5d7cc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
            تواصل معنا اليوم
          </h2>
          <p className="text-lg text-secondary/80 mb-8 max-w-2xl mx-auto">
            احصل على تقييم مجاني لأثاثك. فريقنا في انتظار مكالمتك أو رسالتك على
            الواتساب. نحن هنا لخدمتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size={"lg"} variant={"secondary"}>
              <Phone className="w-5 h-5 ml-2" />
              اتصل بنا الآن
            </Button>
            <Button size={"lg"} variant={"link"}>
              <MessageCircle className="w-5 h-5 ml-2" />
              تواصل عبر واتساب
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
