export const fader = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
  exit: {
    opacity: 0,
    transition: { duration: 0.6 },
    when: "beforeChildren",
  },
};
export const containerAnim = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
  exit: {
    y: 0,
  },
};
