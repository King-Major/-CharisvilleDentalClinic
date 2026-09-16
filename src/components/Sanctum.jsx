import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import MaterialRender from "./MaterialRender.jsx";

const CHAMBERS = [
  {
    name: "A Warm Arrival",
    tone: "sand",
    copy: "Friendly faces, comfortable seating, and a routine that respects your time — most visits start within minutes of walking in, not after a long wait.",
  },
  {
    name: "Private Treatment Rooms",
    tone: "navy",
    copy: "Individual rooms rather than open bays, so treatment stays calm, unhurried, and just between you and your dentist.",
  },
  {
    name: "Comfort, Tailored to You",
    tone: "teal",
    copy: "Lighting, seating, and even the music in the room can be adjusted — small things that make a real difference if the dentist isn't usually your favorite stop.",
  },
  {
    name: "Aftercare That Follows Up",
    tone: "deepteal",
    copy: "A quiet space to recover after a longer procedure, plus a follow-up call in the days after, so you're never left wondering how healing is going.",
  },
];

export default function Sanctum() {
  return (
    <section id="sanctum" className="relative py-28 md:py-36 border-t border-cream-line bg-cream-tint/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16 md:mb-24">
          <SectionLabel index="II." title="The Clinic" />
          <h2 className="font-display text-navy font-semibold text-[clamp(1.9rem,3.4vw,3.2rem)] leading-tight">
            A space designed to put you at ease.
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
                  <MaterialRender tone={chamber.tone} className="absolute inset-0" />
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

        <Reveal className="mt-24 border-t border-cream-line pt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <p className="font-body text-sm text-teal-deep tracking-wide mb-4">Team &amp; gallery</p>
              <h3 className="font-display text-2xl md:text-3xl text-navy font-semibold leading-tight">Real people, real spaces, coming soon.</h3>
            </div>
            <p className="md:col-span-5 font-body text-slate leading-relaxed">
              Dentist and team bios, clinic photography, treatment images and before-and-after results will be added when the clinic supplies the approved media and qualifications. We will never use graphic clinical imagery.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
