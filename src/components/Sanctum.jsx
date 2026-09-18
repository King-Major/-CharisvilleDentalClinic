import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import MaterialRender from "./MaterialRender.jsx";
import bracesProcessOne from "../images/Braces Process 1.webp";
import bracesProcessTwo from "../images/Braces Process 2.webp";
import childrenTeethAfter from "../images/Restoring Children's Teeth After.webp";
import childrenTeethBefore from "../images/Restoring Children's Teeth Before.webp";
import teethWhitening from "../images/Teeth Whitening.webp";

const CHAMBERS = [
  {
    name: "Braces, planned with patience",
    tone: "sand",
    images: [bracesProcessOne],
    alt: "Braces treatment progress",
    copy: "Orthodontic care is a process, not a quick fix. Regular reviews help us guide each movement carefully while keeping comfort and oral hygiene in view.",
  },
  {
    name: "Progress you can follow",
    tone: "navy",
    images: [bracesProcessTwo],
    alt: "Braces treatment progress",
    copy: "From the starting position through active treatment and visible improvement, each stage gives you a clearer sense of where your smile is going.",
  },
  {
    name: "Gentle care for growing smiles",
    tone: "teal",
    images: [childrenTeethBefore, childrenTeethAfter],
    alt: "Children's teeth restoration before and after",
    copy: "Early attention can restore comfort, function and confidence. We take a calm, age-appropriate approach to helping children feel at ease in the chair.",
  },
  {
    name: "A brighter, natural smile",
    tone: "deepteal",
    images: [teethWhitening],
    alt: "Teeth whitening result",
    copy: "Whitening is planned around your starting shade, sensitivity and desired result, with guidance that keeps the finish bright without losing its natural character.",
  },
];

export default function Sanctum() {
  return (
    <section id="sanctum" className="relative py-28 md:py-36 border-t border-cream-line bg-cream-tint/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16 md:mb-24">
          <SectionLabel index="II." title="Treatment Stories" />
          <h2 className="font-display text-navy font-semibold text-[clamp(1.9rem,3.4vw,3.2rem)] leading-tight">
            Care you can see in progress.
          </h2>
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {CHAMBERS.map((chamber, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal
                key={chamber.name}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                <div
                  className={`lg:col-span-7 h-[300px] md:h-[420px] relative ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <MaterialRender
                    tone={chamber.tone}
                    images={chamber.images}
                    alt={chamber.alt}
                    className="absolute inset-0"
                  />
                </div>
                <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                  <span className="font-display text-sm font-semibold text-teal-deep">
                    0{i + 1}
                  </span>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-navy mt-3 mb-4">
                    {chamber.name}
                  </h3>
                  <p className="font-body text-slate leading-relaxed max-w-md">
                    {chamber.copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
