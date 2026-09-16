import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual.jsx";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      <HeroVisual />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-24 pt-40"
      >
        <motion.p
          variants={item}
          className="font-body text-sm font-medium text-teal-deep tracking-wide mb-8"
        >
          Charisville Dental Clinic
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-navy font-semibold leading-[1.08] text-[clamp(2.4rem,6vw,5rem)] max-w-3xl"
        >
          Dental care that feels like home.
        </motion.h1>

        <motion.p
          variants={item}
          className="font-body text-slate text-lg md:text-xl mt-8 max-w-xl leading-relaxed"
        >
          A dental home for all. We provide comprehensive, accessible and
          affordable dental care in Ibafo, Ogun State, with your comfort and
          health at the centre of every visit.
        </motion.p>

        <motion.div variants={item} className="mt-12 flex items-center gap-8 flex-wrap">
          <a
            href="#contact"
            className="font-body text-sm font-medium bg-teal text-white px-8 py-4 rounded-full hover:bg-teal-deep transition-colors duration-300 shadow-soft"
          >
            Book an Appointment
          </a>
          <span className="font-body text-sm text-slate-light">
            Walk-ins and emergencies welcome
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="relative z-10 flex justify-center pb-10"
      >
        <motion.span
          animate={{ height: [8, 40, 8] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-teal-light block"
        />
      </motion.div>
    </section>
  );
}
