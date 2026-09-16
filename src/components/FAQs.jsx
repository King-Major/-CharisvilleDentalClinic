import { useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const QUESTIONS = [
  ["What treatments are available?", "We offer a wide range of treatments, including check-ups, cleaning, fillings, root canal treatment, orthodontics, pediatric dentistry, cosmetic dentistry, dental implants and sedation dentistry. Appropriate referral options are available when required."],
  ["Will my treatment be painful?", "Modalities of pain management are available and suited to your needs. Pain is what a patient says it is and how they say it is, so we listen and take appropriate action to ensure comfortable, pain-free treatment."],
  ["Do you accept insurance?", "Requirements, availability and percentages are communicated and properly documented at the point of booking. Please contact the clinic before your appointment so we can clarify your cover."],
  ["How do I pay?", "Only online transfers and POS transactions are allowed. Cash payments are prohibited."],
  ["Can I walk in?", "Yes. Walk-ins and emergencies are allowed. Preferably, call in or book online to avoid or reduce waiting time."],
  ["What should I know about appointments?", "Please arrive 10–15 minutes before your scheduled appointment to complete paperwork. If you are more than 15 minutes late, we may need to reschedule and a late fee may apply."],
  ["What is the cancellation and no-show policy?", "Please give at least 24–48 hours notice to cancel or reschedule. Missing an appointment or canceling late is free; rescheduling requires an additional ₦2,000 fee per cancellation."],
];

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="relative py-28 md:py-36 border-t border-cream-line bg-cream-tint/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionLabel index="IV." title="Patient Information" />
          <h2 className="font-display text-navy font-semibold text-[clamp(1.9rem,3.4vw,3.2rem)] leading-tight">Questions, answered clearly.</h2>
          <p className="font-body text-slate leading-relaxed mt-8 max-w-md">Everything you need before your first visit. Our team is also happy to help by phone or WhatsApp.</p>
        </Reveal>

        <div className="lg:col-span-8 border-t border-cream-line">
          {QUESTIONS.map(([question, answer], index) => (
            <Reveal key={question} delay={index * 0.04}>
              <div className="border-b border-cream-line">
                <button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} className="w-full flex items-center justify-between gap-6 py-6 text-left">
                  <span className="font-display font-semibold text-navy">{question}</span>
                  <span className="font-body text-2xl text-teal-deep shrink-0">{open === index ? "−" : "+"}</span>
                </button>
                {open === index && <p className="font-body text-slate leading-relaxed pb-6 max-w-2xl">{answer}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}