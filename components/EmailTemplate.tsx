import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { Payload } from "./Form";

interface ContactFormEmailProps {
  payload: Payload;
}

const ContactFormEmail = ({ payload }: ContactFormEmailProps) => {
  const { firstName, lastName, email, message } = payload;

  const fullName = `${firstName ?? ""} ${lastName ?? ""}`.trim() || "غير معروف";
  const senderEmail = (email ?? "غير متوفر").toString();
  const senderMessage = (message ?? "لا توجد رسالة").toString();

  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');
        `}</style>
      </Head>
      <Preview>رسالة جديدة من {fullName} — شركة شراء اثاث مستعمل</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* ── Header Band ── */}
          <Section style={headerBand}>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tr>
                <td align="center">
                  <Text style={logoText}>شركة شراء اثاث مستعمل</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* ── Accent Stripe ── */}
          <Section style={accentStripe} />

          {/* ── Main Content Card ── */}
          <Section style={contentCard}>
            {/* Badge */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tr>
                <td align="center">
                  <span style={badge}>✉ رسالة جديدة</span>
                </td>
              </tr>
            </table>

            <Heading as="h1" style={mainHeading}>
              لقد تلقيت رسالة جديدة
            </Heading>
            <Text style={subText}>
              قام أحد الزوار بإرسال رسالة عبر نموذج الاتصال الخاص بك.
              <br />
              فيما يلي تفاصيل الرسالة:
            </Text>

            <Hr style={divider} />

            {/* ── Info Fields ── */}
            <Section style={fieldsWrapper}>
              {/* Name Field */}
              <Section style={fieldRow}>
                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  role="presentation"
                >
                  <tr>
                    <td style={fieldIconCell}>
                      <span style={fieldIcon}>👤</span>
                    </td>
                    <td style={fieldContentCell}>
                      <Text style={fieldLabel}>الاسم الكامل</Text>
                      <Text style={fieldValue}>{fullName}</Text>
                    </td>
                  </tr>
                </table>
              </Section>

              {/* Email Field */}
              <Section style={fieldRow}>
                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  role="presentation"
                >
                  <tr>
                    <td style={fieldIconCell}>
                      <span style={fieldIcon}>📧</span>
                    </td>
                    <td style={fieldContentCell}>
                      <Text style={fieldLabel}>البريد الإلكتروني</Text>
                      <Text style={fieldValueEmail}>{senderEmail}</Text>
                    </td>
                  </tr>
                </table>
              </Section>

              {/* Message Field */}
              <Section style={fieldRow}>
                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  role="presentation"
                >
                  <tr>
                    <td
                      style={{
                        ...fieldIconCell,
                        verticalAlign: "top",
                        paddingTop: "4px",
                      }}
                    >
                      <span style={fieldIcon}>💬</span>
                    </td>
                    <td style={fieldContentCell}>
                      <Text style={fieldLabel}>الرسالة</Text>
                      <Text style={messageBox}>{senderMessage}</Text>
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>

            <Hr style={divider} />

            {/* ── Reply CTA ── */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tr>
                <td align="center">
                  <a href={`mailto:${senderEmail}`} style={replyButton}>
                    الرد على المرسل ←
                  </a>
                </td>
              </tr>
            </table>
          </Section>

          {/* ── Footer ── */}
          <Section style={footer}>
            <Text style={footerBrand}>شركة شراء اثاث مستعمل</Text>
            <Text style={footerText}>
              هذه الرسالة تم إنشاؤها تلقائيًا من نموذج الاتصال على موقعك.
            </Text>
            <Hr style={footerDivider} />
            <Text style={footerCopy}>
              © {new Date().getFullYear()} شركة شراء اثاث مستعمل — جميع الحقوق
              محفوظة
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

/* ─────────────── Styles ─────────────── */

const colors = {
  primary: "#f5d7cc",
  secondary: "#413332",
  text: "#606060",
  white: "#ffffff",
  lightBg: "#faf6f4",
  border: "#efe6e2",
};

const main: React.CSSProperties = {
  backgroundColor: colors.lightBg,
  fontFamily: "'Tajawal', 'Segoe UI', Tahoma, Arial, sans-serif",
  padding: "40px 0",
  direction: "rtl",
};

const container: React.CSSProperties = {
  maxWidth: "580px",
  margin: "0 auto",
};

const headerBand: React.CSSProperties = {
  backgroundColor: colors.secondary,
  borderRadius: "16px 16px 0 0",
  padding: "32px 40px 28px",
  textAlign: "center" as const,
};

const logoText: React.CSSProperties = {
  color: colors.primary,
  fontSize: "22px",
  fontWeight: 800,
  margin: "0",
  letterSpacing: "0.5px",
};

const accentStripe: React.CSSProperties = {
  backgroundColor: colors.primary,
  height: "5px",
};

const contentCard: React.CSSProperties = {
  backgroundColor: colors.white,
  padding: "40px 36px 36px",
};

const badge: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: colors.primary,
  color: colors.secondary,
  fontSize: "13px",
  fontWeight: 700,
  padding: "6px 18px",
  borderRadius: "20px",
  letterSpacing: "0.3px",
};

const mainHeading: React.CSSProperties = {
  color: colors.secondary,
  fontSize: "26px",
  fontWeight: 800,
  textAlign: "center" as const,
  margin: "20px 0 8px",
  lineHeight: "1.4",
};

const subText: React.CSSProperties = {
  color: colors.text,
  fontSize: "15px",
  textAlign: "center" as const,
  lineHeight: "1.7",
  margin: "0 0 24px",
};

const divider: React.CSSProperties = {
  borderTop: `1.5px solid ${colors.border}`,
  margin: "4px 0 24px",
};

const fieldsWrapper: React.CSSProperties = {
  padding: "0",
};

const fieldRow: React.CSSProperties = {
  backgroundColor: colors.lightBg,
  borderRadius: "12px",
  padding: "16px 20px",
  marginBottom: "12px",
  border: `1px solid ${colors.border}`,
};

const fieldIconCell: React.CSSProperties = {
  width: "40px",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
};

const fieldIcon: React.CSSProperties = {
  fontSize: "20px",
};

const fieldContentCell: React.CSSProperties = {
  verticalAlign: "middle" as const,
  paddingRight: "8px",
};

const fieldLabel: React.CSSProperties = {
  color: colors.secondary,
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  margin: "0 0 2px",
  letterSpacing: "0.5px",
};

const fieldValue: React.CSSProperties = {
  color: colors.text,
  fontSize: "16px",
  fontWeight: 500,
  margin: "0",
  lineHeight: "1.5",
};

const fieldValueEmail: React.CSSProperties = {
  ...fieldValue,
  direction: "ltr" as const,
  textAlign: "right" as const,
};

const messageBox: React.CSSProperties = {
  color: colors.text,
  fontSize: "15px",
  lineHeight: "1.8",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const replyButton: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontSize: "16px",
  fontWeight: 700,
  padding: "14px 40px",
  borderRadius: "10px",
  textDecoration: "none",
  marginTop: "8px",
  letterSpacing: "0.3px",
};

const footer: React.CSSProperties = {
  padding: "28px 36px 24px",
  textAlign: "center" as const,
};

const footerBrand: React.CSSProperties = {
  color: colors.secondary,
  fontSize: "16px",
  fontWeight: 700,
  margin: "0 0 6px",
};

const footerText: React.CSSProperties = {
  color: colors.text,
  fontSize: "13px",
  lineHeight: "1.6",
  margin: "0 0 16px",
  opacity: "0.8",
};

const footerDivider: React.CSSProperties = {
  borderTop: `1px solid ${colors.border}`,
  margin: "0 0 16px",
};

const footerCopy: React.CSSProperties = {
  color: colors.text,
  fontSize: "12px",
  margin: "0",
  opacity: "0.6",
};
