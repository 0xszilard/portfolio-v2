import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JsonLd from "../ui/json-ld";

export default async function Faq() {
  const faqs = [
    {
      question: "I have an audience but no tech background — is this for me?",
      answer:
        "Absolutely. Most of our clients are creators or coaches, not developers. If you have the audience, expertise, or traction — we’ll help you turn that into a product people can actually use (and pay for). No tech skills required.",
    },
    {
      question: "I’m still shaping the idea — is it too early?",
      answer:
        "If you’re already creating content, coaching clients, or seeing traction with your audience, it’s not too early — it’s the *perfect* time. We’ll help you scope a product that aligns with your audience’s pain points and revenue goals.",
    },
    {
      question: "Do I need a budget to work with you?",
      answer:
        "Yes — we only partner with serious creators and entrepreneurs who are ready to invest in building something real. Whether you're just getting started or scaling up, having a budget helps us move fast and build properly from day one.",
    },
    {
      question: "How long does it take to build a platform?",
      answer:
        "It depends on what you're building — MVPs usually take 3–6 weeks. More complex platforms take longer. We’ll map out realistic timelines with you upfront so there are no surprises.",
    },
    {
      question: "What kind of clients do you work best with?",
      answer:
        "We work best with content creators, coaches, and niche experts who already have an audience or client base — and are ready to turn that into a scalable product or platform. If that’s you, let’s talk.",
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
