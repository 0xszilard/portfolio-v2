import Markdown from "@/components/ui/markdown";

export const metadata = {
  title: "Imprint",
  description: "Privacy policy for InfoBridge",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/imprint`,
  },
};

const md = `
## Imprint (Impressum)

**Company Name:**  
InforBridge s.r.o.

**Legal Form:**  
Spoločnosť s ručením obmedzeným (s.r.o.)

**Registered Office:**  
Námestie Slobody 1  
811 06 Bratislava  
Slovak Republic

**Commercial Register Entry:**  
Registered in the Commercial Register of the District Court Bratislava I  
Section: Sro, Insert No.: 123456/B

**Company ID (IČO):**  
12345678

**VAT ID (IČ DPH):**  
SK1234567890

**Legal Representative:**  
Mgr. Szilárd Máté, CEO

**Contact Information:**  
Phone: +421 2 123 456 78  
Email: hello@infobridge.dev  
Website: [infobridge.dev](https://infobridge.dev)

---

**Online Dispute Resolution**

The European Commission provides a platform for online dispute resolution:  
[https://ec.europa.eu/consumers/odr/](https://ec.europa.eu/consumers/odr/)  
You can find our contact email above.

We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.

---

`;

export default function PrivacyPage() {
  return (
    <section className="px-4 py-10">
      <div className="m-auto max-w-3xl">
        <Markdown>{md}</Markdown>
      </div>
    </section>
  );
}
