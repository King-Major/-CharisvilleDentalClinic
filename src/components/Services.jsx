import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const SERVICES = [
  ["Check-ups and cleaning", "Preventive care for healthier teeth and gums. We examine, clean and explain what your smile needs next.", "For everyone, including routine and first-time visits."],
  ["Fillings", "We repair cavities and restore damaged teeth to help relieve sensitivity and protect your natural tooth.", "For patients with decay, cracks or worn fillings."],
  ["Root canal treatment", "A careful procedure to remove infection, relieve pain and preserve a tooth that might otherwise be lost.", "For teeth with deep decay or an infected nerve."],
  ["Orthodontics and braces", "Straighter teeth, improved bite and easier cleaning through an appropriate orthodontic plan.", "For children, teenagers and adults needing alignment care."],
  ["Pediatric dentistry", "Gentle, age-appropriate dental care that helps children build healthy habits without fear.", "For infants, children and young people."],
  ["Cosmetic dentistry", "Thoughtful smile improvements, including whitening and tooth-coloured restorations, designed to look natural.", "For patients who want to improve the appearance of their smile."],
  ["Dental implants", "A durable replacement for missing teeth that supports confident eating, speaking and smiling.", "For suitable patients with one or more missing teeth."],
  ["Sedation dentistry", "Comfort-focused care with pain-management options suited to your needs and level of anxiety.", "For nervous patients or longer and more involved procedures."],
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 border-t border-cream-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-3xl mb-16">
          <SectionLabel index="III." title="Dental Services" />
          <h2 className="font-display text-navy font-semibold text-[clamp(1.9rem,3.4vw,3.2rem)] leading-tight">
            Complete care for every stage of your smile.
          </h2>
          <p className="font-body text-slate leading-relaxed mt-6 max-w-2xl">
            Our treatment range is broad and tailored to each patient. When a
            procedure requires advanced care, appropriate referral options are available.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {SERVICES.map(([name, copy, audience], index) => (
            <Reveal key={name} delay={index * 0.04} className="border-t border-cream-line py-7">
              <div className="flex gap-5">
                <span className="font-display text-sm font-semibold text-teal-deep mt-1">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">{name}</h3>
                  <p className="font-body text-slate leading-relaxed mt-3">{copy}</p>
                  <p className="font-body text-sm text-slate-light leading-relaxed mt-3"><span className="text-navy font-medium">Who it is for:</span> {audience}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="font-body text-sm text-slate-light mt-10 border-l-2 border-teal pl-4">
          Treatment pricing is discussed transparently at booking and confirmed in your treatment plan. Request current pricing by phone or WhatsApp.
        </p>
      </div>
    </section>
  );
}