import { motion, useReducedMotion } from "framer-motion";

/**
 * A single, deliberate reveal — used once per section (on the section's
 * heading block), not per card or per line. Keeps motion orchestrated
 * rather than scattered.
 */
export default function Reveal({
  children,
  as: Component = "div",
  delay = 0,
  y = 22,
  className = "",
  once = true,
  amount = 0.4,
}) {
  const prefersReduced = useReducedMotion();
  const MotionComponent = motion[Component] || motion.div;

  if (prefersReduced) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
