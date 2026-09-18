import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import MaterialRender from "./MaterialRender.jsx";
import implantsProcess from "../images/Implants Process.webp";
import veneersAfter from "../images/Veneers After.webp";
import veneersBefore from "../images/Veneers before.webp";

const MATERIALS = [
  {
    name: "Zirconia crowns",
    note: "Metal-free and tooth-colored — gentle on sensitive gums",
  },
  {
    name: "Titanium implants",
    note: "The same trusted material used in hip and joint replacements",
  },
  {
    name: "Lithium disilicate veneers",
    note: "Thin, light-catching ceramic that reads just like natural enamel",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 md:py-36 border-t border-cream-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="I." title="Our Approach" />
            <h2 className="font-display text-navy font-semibold text-[clamp(1.9rem,3.4vw,3.2rem)] leading-tight max-w-lg">
              Care built around your whole health.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-6 max-w-prose2">
            <p className="font-body text-navy-soft leading-relaxed">
              We don't treat the mouth as separate from the rest of you.
              Comfort, sleep, stress, and nutrition all show up here first —
              so we look at the whole picture, not just the tooth in front
              of us.
            </p>
            <p className="font-body text-slate leading-relaxed">
              Every filling, crown, and material we use is chosen for how
              well your body takes to it, not just how it looks, because
              what stays in your mouth for years deserves that kind of
              care.
            </p>
            <p className="font-body text-slate leading-relaxed">
              Where it's helpful, we coordinate with your doctor or
              specialist too, so your dental care supports your overall
              health rather than sitting apart from it.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.15} className="relative h-[380px] md:h-[500px]">
            <MaterialRender
              images={[implantsProcess, veneersBefore, veneersAfter]}
              alt="Dental treatment results"
              className="absolute inset-0"
            />
          </Reveal>

          <Reveal delay={0.25} className="mt-10 border-t border-cream-line pt-8">
            <p className="font-body text-sm text-slate-light tracking-wide mb-5">
              A few materials we love working with
            </p>
            <dl className="space-y-5">
              {MATERIALS.map((m) => (
                <div
                  key={m.name}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-cream-line pb-5"
                >
                  <dt className="font-display font-medium text-navy">{m.name}</dt>
                  <dd className="font-body text-sm text-slate-light sm:text-right sm:max-w-xs">
                    {m.note}
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
