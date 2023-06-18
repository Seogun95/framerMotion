import { Variants } from 'framer-motion';

const firstVars: Variants = {
  start: { opacity: 0, scale: 0.9 },
  end: (index: number) => ({
    opacity: 1,
    scale: 1,
    rotateZ: 360,
    transition: {
      delay: 0.3 + index * 0.1,
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: 'spring',
        damping: 6,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  }),
};

const secondVars: Variants = {
  start: {
    opacity: 0,
    scale: 0.6,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      delay: 0.4,
      delayChildren: 0.6,
      staggerChildren: 0.1,
      duration: 0.5,
      bounce: 0.5,
    },
  },
};

const sectionCircleVars: Variants = {
  start: {
    opacity: 0,
    y: -10,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
    },
  },
};

const thirdVars = (theme: any) => ({
  start: {
    opacity: 0,
    scale: 0.6,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      delay: 0.4,
      delayChildren: 0.6,
      staggerChildren: 0.1,
      duration: 0.5,
      bounce: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    rotateZ: 360,
    backgroundColor: `${theme.colors.brand}`,
  },
  click: {
    borderRadius: '100%',
    scale: 1,
  },
  drag: {
    backgroundColor: `${theme.colors.blue}`,
  },
});

export const framerOptions = {
  firstVars,
  secondVars,
  sectionCircleVars,
  thirdVars,
};
