import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const VALUES = [
  ["Excellence", "The highest standards are consistently delivered to every patient."],
  ["Patient satisfaction", "Your health is our priority, not just your satisfaction."],
  ["Professionalism", "Ethical practice, competence and clear communication at every step."],
  ["Compassion", "We bring health and wholeness, with consideration when the means is lacking."],
  ["Training", "Dentists gain hands-on experience when patients volunteer to be part of the process."],
  ["Respect", "Everybody in the practice should feel seen, known, loved and valued."],
  ["Gratitude", "A culture of unbroken gratitude shapes how we serve and care."],
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t border-cream-line bg-cream-tint/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel index="II." title="About Charisville" />
          <h2 className="font-display text-navy font-semibold text-[clamp(1.9rem,3.4vw,3.2rem)] leading-tight">
            Redefining dental care, one patient at a time.
          </h2>
          <p className="font-body text-slate leading-relaxed mt-8 max-w-2xl">
            Charisville began as a freelance dental consult while partnering
            with a number of dental facilities in Lagos. That journey grew
            into our pioneering clinic space in Ogun State, created to make
            dependable dental care more accessible to all and sundry.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Reveal className="bg-white rounded-3xl shadow-soft p-8 md:p-10">
            <p className="font-body text-sm text-teal-deep tracking-wide mb-4">Our vision</p>
            <p className="font-display text-2xl text-navy font-semibold leading-snug">
              To provide comprehensive, accessible and affordable dental services to all, everywhere.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-navy rounded-3xl shadow-soft p-8 md:p-10">
            <p className="font-body text-sm text-teal-light tracking-wide mb-4">Our mission</p>
            <p className="font-display text-2xl text-white font-semibold leading-snug">
              Redefining dental care, one patient at a time.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <p className="font-body text-sm text-slate-light tracking-wide mb-6">Our core values</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {VALUES.map(([name, copy]) => (
              <div key={name} className="border-t border-cream-line pt-5">
                <h3 className="font-display font-semibold text-navy">{name}</h3>
                <p className="font-body text-sm text-slate leading-relaxed mt-2">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}