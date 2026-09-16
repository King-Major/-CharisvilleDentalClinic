import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const initialForm = { name: "", contact: "", visitType: "", message: "", consent: false };

export default function Access() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect this validated intake to the clinic booking system or inbox.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-cream-line bg-cream-tint/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="V." title="Book a Visit" />
            <h2 className="font-display text-navy font-semibold text-[clamp(1.9rem,3.4vw,3.2rem)] leading-tight">
              Let's find you a time.
            </h2>
            <p className="font-body text-slate leading-relaxed mt-8 max-w-md">
              New patient or returning, walk-ins and emergencies are always
              welcome. Prefer to plan ahead? Send a message and a member of
              our team will confirm a time that works for you.
            </p>
            <div className="font-body text-sm text-slate leading-relaxed mt-8 space-y-3 max-w-md">
              <p><strong className="text-navy">Address:</strong> Ibafo Bus Stop, next to SLOT office, Km 32 Lagos–Ibadan Expressway, Ogun State.</p>
              <p><strong className="text-navy">Hours:</strong> 9:00am – 5:00pm</p>
              <p><strong className="text-navy">Phone:</strong> <a href="tel:+2347088810479" className="text-teal-deep hover:text-navy">0708 881 0479</a></p>
              <p><strong className="text-navy">Email:</strong> <a href="mailto:charisvilledc@gmail.com" className="text-teal-deep hover:text-navy">charisvilledc@gmail.com</a></p>
              <p><strong className="text-navy">WhatsApp:</strong> <a href="https://wa.me/2347088810479" target="_blank" rel="noreferrer" className="text-teal-deep hover:text-navy">Message Graceville Dental Consults</a></p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="https://wa.me/2347088810479" target="_blank" rel="noreferrer" className="font-body text-sm font-medium bg-teal text-white px-5 py-3 rounded-full hover:bg-teal-deep transition-colors">WhatsApp us</a>
              <a href="mailto:charisvilledc@gmail.com?subject=New%20patient%20registration%20and%20consent%20forms" className="font-body text-sm font-medium border border-teal text-teal-deep px-5 py-3 rounded-full hover:bg-teal hover:text-white transition-colors">Request patient forms</a>
            </div>
            <p className="font-body text-xs text-slate-light leading-relaxed mt-6 max-w-md">Online/downloadable registration and consent forms will be supplied by the clinic. Ask for the current version when booking.</p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl bg-white shadow-soft p-10 md:p-14"
                >
                  <p className="font-display font-semibold text-xl text-navy mb-3">
                    Thank you!
                  </p>
                  <p className="font-body text-slate leading-relaxed max-w-md">
                    We've received your message and will reach out shortly
                    to confirm your appointment. If it's urgent, feel free
                    to call or WhatsApp us directly in the meantime.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 bg-white rounded-3xl shadow-soft p-8 md:p-10"
                >
                  <Field
                    label="Full name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Phone or email"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="What would you like help with?"
                    name="visitType"
                    value={form.visitType}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="What brings you in?"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    textarea
                    required
                  />

                  <label className="flex items-start gap-3 font-body text-xs text-slate leading-relaxed">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))} required className="mt-1 accent-teal" />
                    <span>I consent to Charisville Dental Clinic using these details to respond to my appointment request and provide care information.</span>
                  </label>

                  <button
                    type="submit"
                    className="font-body text-sm font-medium bg-teal text-white px-8 py-4 rounded-full hover:bg-teal-deep transition-colors duration-300 shadow-card"
                  >
                    Request an Appointment
                  </button>
                  <p className="font-body text-xs text-slate-light leading-relaxed">Please arrive 10–15 minutes early. Payment is due immediately after treatment by online transfer or POS; cash payments are not accepted.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, required, textarea }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="font-body text-sm text-slate-light tracking-wide block mb-2">
        {label}
      </span>
      <Tag
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={textarea ? 4 : undefined}
        className="w-full bg-cream-tint border border-cream-line rounded-xl focus:border-teal text-navy font-body px-4 py-3 outline-none transition-colors duration-300 resize-none placeholder:text-slate-light"
        placeholder={textarea ? "A cleaning, a toothache, a check-up for the kids — anything." : ""}
      />
    </label>
  );
}
