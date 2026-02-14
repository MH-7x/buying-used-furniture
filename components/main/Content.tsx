const Content = () => {
  return (
    <section className="max-w-4xl mt-36 mx-auto md:px-0 px-4">
      <h2 className="md:text-4xl text-3xl text-secondary font-bold">
        ليش تشتري أثاث مستعمل؟
      </h2>
      <div className="grid md:grid-cols-2 gird-cols-1 gap-10 md:mt-16 mt-10">
        <div>
          <h3 className="text-xl text-secondary  font-semibold">
            مناسب للحياة في الإمارات
          </h3>
          <p className="text-muted-foreground mt-5">الناس هنا تتنقل:</p>

          <ul
            className="
      mt-5 text-muted-foreground list-inside list-disc"
          >
            <li>وظيفة جديدة</li>
            <li>نهاية عقد الإيجار</li>
            <li>رجوع للبلد</li>
            <li>انتقال لبيت ثاني</li>
          </ul>
          <p className="text-muted-foreground mt-5">
            تشتري أثاث جديد كل مرة؟ ما ينفع. بيع وشراء اثاث مستعمل أسهل وأوفر.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-secondary  font-semibold">توفر فلوس</h3>
          <p className="text-muted-foreground mt-5">
            اثاث مستعمل للبيع بجودة جيدة يوفر عليك كثير. مثلاً:
          </p>
          <ul
            className="
      mt-5 text-muted-foreground list-inside list-disc"
          >
            <li>طقم كنب جديد براند معروف = 8,000 - 15,000 درهم</li>
            <li>نفس الطقم مستعمل بحالة ممتازة = 2,500 - 5,000 درهم</li>
            <li>نفس الجودة، لكن بسعر أقل بكثير.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-secondary  font-semibold">
            يحافظ على البيئة{" "}
          </h3>

          <p className="text-muted-foreground mt-5">
            إعادة استخدام الأثاث أفضل من رميه. يدعم الاستدامة ويقلل الهدر.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
