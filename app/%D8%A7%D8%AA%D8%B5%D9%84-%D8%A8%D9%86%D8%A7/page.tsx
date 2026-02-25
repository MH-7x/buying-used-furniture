import Form from "@/components/Form";
import CTA from "@/components/main/CTA";
import Locations from "@/components/main/Locations";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اتصل بنا - شراء وبيع الأثاث المستعمل في الإمارات",
      desc: "شركة رائدة في شراء اثاث مستعمل في دبي، الشارقة، وأبوظبي. نشتري الأثاث المنزلي والمكتبي والأجهزة الكهربائية. تقييم عادل، تعقيم شامل، ونقل مجاني. تواصل معنا الآن",
    },
    image: {
      path: "/شراء-الاثاث-المستعمل.jpg",
      alt: "اتصل بنا - شراء وبيع الأثاث المستعمل في الإمارات",
    },
    path: "/اتصل-بنا",
  },
});

const Contact = () => (
  <>
    <main className="flex min-h-screen items-center justify-center py-16 mt-16">
      <div className="mx-auto max-w-6xl px-6 xl:px-0">
        <b className="font-semibold text-muted-foreground text-sm uppercase">
          اتصل بنا
        </b>
        <h2 className="mt-3 font-semibold text-3xl tracking-tight md:text-4xl text-secondary">
          تواصل معنا لشراء وبيع الأثاث المستعمل في الإمارات
        </h2>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg max-w-3xl">
          تواصل مع <Link href="/">شركة شراء اثاث مستعمل</Link> للحصول على تقييم
          عادل واحترافي لأثاثك مع استجابة سريعة ومضمونة خلال 10 دقائق فقط. بفضل
          خبرتنا التي تزيد عن عقد في كافة أنحاء الإمارات، نضمن لك تجربة
          &quot;شراء-بيع-نقل&quot; سلسة وموثوقة يمكنك الاعتماد عليها تماماً.
        </p>
        <div className="mt-16 flex flex-col gap-16 md:gap-10 lg:flex-row">
          <div className="grid w-full max-w-3xl grid-cols-1 gap-3 *:rounded-3xl *:bg-background *:p-6 sm:grid-cols-2 lg:col-span-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-secondary">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">بريد إلكتروني</h3>
              <p className="my-2.5 text-muted-foreground">
                اتصل بنا عبر البريد الإلكتروني
              </p>
              <Link
                title="buying.used.furniture.uae@gmail.com"
                className="font-medium text-secondary line-clamp-1 truncate"
                href="mailto:buying.used.furniture.uae@gmail.com"
              >
                buying.used.furniture.uae@gmail.com
              </Link>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-secondary">
                <MessageCircle />
              </div>
              <h3 className="mt-6 font-semibold text-xl">واتساب لنا</h3>
              <p className="my-2.5 text-muted-foreground">
                اتصل بنا عبر واتساب
              </p>
              <Link
                dir="ltr"
                className="font-medium text-secondary"
                href="https://wa.me/+971509684380"
                target="_blank"
              >
                +971 509684380
              </Link>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-secondary">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">مكتب</h3>
              <p className="my-2.5 text-muted-foreground">
                تفضل بزيارة متجرنا في أي وقت
              </p>
              <Link
                className="font-medium text-secondary"
                href="https://www.google.com/maps/search/55+29th+St+Al+Barsha+Second+Dubai"
                target="_blank"
              >
                55 شارع 29 - البرشاء الثانية
                <br /> دبي، الإمارات
              </Link>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-secondary">
                <PhoneIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">رقم التليفون</h3>
              <p className="my-2.5 text-muted-foreground">
                اتصل بنا عبر الهاتف
              </p>
              <Link
                dir="ltr"
                className="font-medium text-secondary"
                href="tel:+971509684380"
              >
                +971 50 9684380
              </Link>
            </div>
          </div>

          {/* Form */}
          <Form />
        </div>
      </div>
    </main>
    <Locations />
    <CTA />
  </>
);

export default Contact;
