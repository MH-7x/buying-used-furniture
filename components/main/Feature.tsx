const brandColors = {
  primary: "#f5d7cc",
  secondary: "#413332",
  text: "#606060",
  cream: "#fdf6f3",
  warm: "#e8bfb0",
  deep: "#2d2322",
};

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
      style={{
        background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.warm})`,
        color: brandColors.secondary,
      }}
    >
      {children}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="group relative rounded-3xl p-6 md:p-8 transition-all duration-700"
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(245,215,204,0.5)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${brandColors.primary}44, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <FeatureIcon>{icon}</FeatureIcon>
          <h3
            className="text-lg md:text-xl font-bold leading-snug"
            style={{
              color: brandColors.secondary,
            }}
          >
            {title}
          </h3>
        </div>

        <div
          className="text-base leading-relaxed md:leading-loose"
          style={{
            color: brandColors.text,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-1">
      <span
        className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: brandColors.warm }}
      />
      <span>{children}</span>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <div style={{}}>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden flex items-center justify-center px-4 pt-20 mt-16">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-sm font-medium"
            style={{
              background: `${brandColors.primary}88`,
              color: brandColors.secondary,
              border: `1px solid ${brandColors.warm}66`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: brandColors.secondary }}
            />
            شركة شراء أثاث مستعمل
          </div>

          <h2
            className="text-3xl sm:text-3xl md:text-5xl  font-extrabold leading-tight"
            style={{ color: brandColors.secondary }}
          >
            لماذا نحن{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10"
                style={{
                  background: `linear-gradient(90deg, ${brandColors.secondary}, #6b4d4b)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                الخيار الأول
              </span>
              <span
                className="absolute bottom-1 right-0 left-0 h-3 md:h-4 rounded-sm -z-0 opacity-40"
                style={{ background: brandColors.primary }}
              />
            </span>
            <br />
            لشراء اثاث مستعمل في الإمارات؟
          </h2>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="relative px-4 pb-16 pt-6 ">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-lg  leading-relaxed"
            style={{ color: brandColors.text }}
          >
            سوق الأثاث المستعمل في الإمارات فيه خيارات كثيرة — بعضها جيد وبعضها
            لا. المشكلة أن أغلب الشركات في هذا المجال لا تقدم ضمانات، ولا تشرح
            كيف تقيّم الأسعار، ولا تهتم بجودة الأثاث قبل إعادة بيعه. نحن نعمل
            بطريقة مختلفة. هذه أبرز الأسباب التي تجعل عملاءنا يختارونا مرة بعد
            مرة:
          </p>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative px-4 ">
        {/* Background accent */}

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
          {/* 1 — Guarantee */}
          <FeatureCard
            title="ضمان وسياسة إرجاع — شيء لن تجده عند غيرنا"
            icon={
              <svg
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            }
          >
            <p>
              نحن الشركة الوحيدة في سوق الأثاث المستعمل في الإمارات التي تقدم
              ضمان على الأثاث المبيع. إذا اشتريت قطعة أثاث منا ولم تكن راضياً
              خلال 7 أيام، نعيد لك أموالك. ببساطة.
            </p>
            <p className="mt-3">
              هذا ليس كلام تسويقي — هذه سياسة ثابتة نطبقها يومياً لأننا واثقون
              من جودة ما نبيع. في سوق يعمل بمبدأ &quot;بيعت وخلاص&quot;، هذا
              الضمان يحمي حقك كمشتري.
            </p>
          </FeatureCard>

          {/* 2 — Cleaning */}
          <FeatureCard
            title="تعقيم وتنظيف شامل لكل قطعة"
            icon={
              <svg
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            }
          >
            <p>
              من أكبر المخاوف عند شراء أثاث مستعمل: النظافة. هل الكنب نظيف؟ هل
              في حشرات؟ هل الخشب متضرر؟ عندنا، كل قطعة أثاث تمر بعملية تعقيم
              كاملة قبل عرضها للبيع. هذا يشمل:
            </p>

            <div className="mt-4 space-y-1">
              <BulletItem>
                تنظيف عميق للأقمشة والمفروشات المنجدة — كنب، مجالس، كراسي
              </BulletItem>
              <BulletItem>
                معالجة ضد الحشرات لضمان خلو الأثاث من أي مشاكل
              </BulletItem>
              <BulletItem>تلميع الخشب ومعالجة الخدوش السطحية</BulletItem>
              <BulletItem>
                فحص وتنظيف الأجهزة الكهربائية — تغيير فلاتر المكيفات، تنظيف
                أنابيب الثلاجات
              </BulletItem>
            </div>

            <div
              className="mt-5 px-5 py-4 rounded-xl"
              style={{
                background: `${brandColors.primary}55`,
                borderRight: `3px solid ${brandColors.warm}`,
              }}
            >
              النتيجة: أثاث مستعمل بحالة ممتازة، نظيف وآمن، جاهز للاستخدام
              فوراً.
            </div>
          </FeatureCard>

          {/* 3 — Transparent pricing */}
          <FeatureCard
            title="أسعار شفافة وعادلة — بدون مساومات"
            icon={
              <svg
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            }
          >
            <p>
              كثير من شركات شراء الاثاث المستعمل تعطيك سعراً بدون ما تعرف كيف
              وصلوا له. نحن نختلف.
            </p>
            <p className="mt-3">
              نشرح لك بالضبط كيف نقيّم أثاثك بناءً على أربعة معايير واضحة: حالة
              القطعة (ممتاز — جيد — مقبول)، العلامة التجارية، عمر الأثاث، والطلب
              في السوق. بهذه الطريقة، ما في مجال للمفاجآت أو الشعور بأنك حصلت
              على سعر أقل مما تستحق.
            </p>
          </FeatureCard>

          {/* 4 — Payment options */}
          <FeatureCard
            title="خيارات دفع متعددة"
            icon={
              <svg
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="4" width="22" height="16" rx="3" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            }
          >
            <p>
              نقداً فوراً عند الاستلام، تحويل بنكي مباشر، دفع أونلاين، أو شيك
              مصدّق — اختر الطريقة التي تريحك.
            </p>
            <p className="mt-3">
              نحن نعمل أيضاً على توفير خيار اشتري الآن وادفع لاحقاً قريباً
              لمساعدة العائلات التي تبحث عن تأثيث بيت بميزانية محدودة.
            </p>
          </FeatureCard>

          {/* 5 — Free transport */}
          <FeatureCard
            title="فك ونقل مجاني بأيدي متخصصة"
            icon={
              <svg
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 5v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            }
          >
            <p>
              عندما نشتري أثاثك، لا نطلب منك فك أي شيء أو إنزاله للسيارة. فريقنا
              من النقل والتغليف يتولى كل شيء. نستخدم أدوات احترافية لفك الأثاث
              بدون أي ضرر، ونغلف كل قطعة قبل تحميلها.
            </p>
            <p className="mt-3">
              والأهم — نحمي ممتلكات المبنى خلال النقل: المصاعد، الممرات،
              والأبواب. هذا ما نسميه &quot;النقل الآمن المعتمد&quot; — لأن آخر
              شيء تريده هو خدش في باب المصعد أو كسر في زاوية الممر بسبب نقل غير
              محترف.
            </p>
          </FeatureCard>

          {/* 6 — Coverage */}
          <FeatureCard
            title="تغطية جميع الإمارات من مقرنا في الشارقة"
            icon={
              <svg
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
          >
            <p>
              مقرنا في الشارقة يتيح لنا خدمة سريعة في الشارقة وعجمان ودبي خلال
              ساعات. أبوظبي والعين ورأس الخيمة والفجيرة وأم القيوين — نصل إليها
              خلال يوم عمل واحد.
            </p>
            <p className="mt-3">
              نحن لسنا شركة أونلاين فقط — لدينا معرض فعلي في الشارقة يمكنك
              زيارته والاطلاع على المعروضات بنفسك.
            </p>
          </FeatureCard>
        </div>
      </section>
    </div>
  );
}
