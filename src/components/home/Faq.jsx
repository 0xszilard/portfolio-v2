import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JsonLd from "../ui/json-ld";

export default async function Faq() {
  const faqs = [
    {
      question: "I’m still validating my idea — is this for me?",
      answer:
        "If you're actively researching your market or audience, that’s a great start. But we only take on projects where there’s clear momentum — whether that’s a budget, early user base, or clear validation. If you’re serious about building, we’re here to help you do it right.",
    },
    {
      question: "Do I need a budget to work with you?",
      answer:
        "Yes. We specialize in building real products — not providing free advice. Whether you're bootstrapped or VC-backed, we expect clients to have a budget set aside so we can build efficiently and seriously.",
    },
    {
      question: "I don’t have a dev background — can we still work together?",
      answer:
        "Definitely. Most of our clients are non-technical. We guide you through the build in plain language, help you make smart decisions, and keep things transparent from start to finish.",
    },
    {
      question: "How long will it take to build my product?",
      answer:
        "That depends on scope. MVPs usually take 3–6 weeks. Full-feature platforms take longer. We’ll break it down for you clearly — and never promise shortcuts that compromise quality.",
    },
    {
      question: "What kind of clients do you work best with?",
      answer:
        "We do our best work with founders who come prepared — whether that’s with market research, a small audience, or early traction. If you’re committed to launching and ready to move fast, we’ll be the partner that gets you there.",
    },
  ];

  const data = faqs.map((question) => ({
    "@type": "Question",
    name: question.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.answer,
    },
  }));

  const faqjson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...data],
  };

  return (
    <>
      <section className="bg-muted via-muted to-background from-background bg-gradient-to-b px-4 py-10">
        <div className="m-auto mb-8 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your most asked questions...
          </h2>
          <Accordion collapsible type="single">
            {faqs.map((q) => (
              <AccordionItem value={q.question} key={q.question}>
                <AccordionTrigger className="text-xl">{q.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg">{q.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <a
          href="/booking"
          className="mx-auto flex w-fit transform cursor-pointer flex-col rounded-lg border-2 border-gray-600 bg-gradient-to-t from-gray-800 to-gray-600 px-4 py-2 text-center font-semibold text-white shadow-md transition-all duration-150 ease-in-out hover:opacity-90 active:scale-95 dark:border-gray-100 dark:from-gray-300 dark:to-gray-100 dark:text-black"
        >
          Get In Touch
          <span className="text-background/80 text-xs font-medium">
            Turn you ideas into revenue generating machines
          </span>
        </a>
      </section>
      <JsonLd data={faqjson} />
    </>
  );
}
