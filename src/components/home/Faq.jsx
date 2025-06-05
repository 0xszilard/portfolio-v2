import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import JsonLd from "../ui/json-ld";

export default async function Faq() {
  const faqs = [
    {
      question: "I’m just exploring ideas — is it too early to talk?",
      answer:
        "Not too early at all — but we work best with people who are actively moving forward. If you're serious about launching in the near future, we’ll help you map the right path and avoid common mistakes.",
    },
    {
      question: "Do you only work with people who have a budget?",
      answer:
        "Yes — we’re a consulting and development team, not a free coaching service. If you have a rough idea of your budget (even a small one), we can help scope a solution that fits.",
    },
    {
      question:
        "I’ve never built an app or website before — can I still work with you?",
      answer:
        "Absolutely — many of our clients are non-technical. We’ll walk you through the process, explain things clearly, and help you make smart decisions from day one.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Smaller MVPs can take 4–6 weeks, while larger platforms may take 2–3 months or more. If you have a timeline in mind, we’ll let you know what’s realistic and how to reach it.",
    },
    {
      question: "What kind of clients do you do your best work with?",
      answer:
        "We love working with coaches, creators, and startups who are proactive, open to collaboration, and ready to invest in their growth. If you value quality and want a true partner — you’ll love working with us.",
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
                <AccordionTrigger className="text-xl">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <a
          href="/#contact"
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
