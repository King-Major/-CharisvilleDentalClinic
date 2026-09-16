import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const PILLARS = [
  {
    name: "Priority booking",
    copy: "Members get first pick of appointment times, including our earliest morning and last evening slots.",
  },
  {
    name: "Family coverage",
    copy: "Add your spouse, kids, or parents to the same plan, each with their own regular check-ups and cleanings included.",
  },
  {
    name: "Straightforward billing",
    copy: "Pay by transfer or card in one predictable installment, so there's never a surprise invoice waiting for you.",
  },
  {
    name: "A dentist who knows you",
    copy: "Regular visits with the same clinical team, so your dentist already knows your history the moment you sit down.",
  },
];

export default function InnerCircle() {
  return (
    <section id="inner-circle" className="relative py-28 md:py-36 border-t border-cream-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="III." title="Membership" />
            <h2 className="font-display text-navy font-semibold text-[clamp(1.9rem,3.4vw,3.2rem)] leading-tight">
              One plan. No surprises.
            </h2>
            <p className="font-body text-slate leading-relaxed mt-8 max-w-md">
              Skip the guesswork with a simple annual membership — one
              predictable payment covers your regular care, with priority
              booking whenever you need us. Pricing is shared plainly at
              your first visit.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <dl className="border-t border-cream-line">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.name}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 py-8 border-b border-cream-line"
                >
                  <dt className="sm:col-span-4 font-display font-semibold text-navy text-lg">
                    {pillar.name}
                  </dt>
                  <dd className="sm:col-span-8 font-body text-slate leading-relaxed">
                    {pillar.copy}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
