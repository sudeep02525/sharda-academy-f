export const ANIMATION_EASING = [0.22, 1, 0.36, 1]; // Premium cubic-bezier for smooth reveal
export const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const TRANSITION_DEFAULT = {
  duration: 0.6,
  ease: ANIMATION_EASING,
};

export const TRANSITION_SLOW = {
  duration: 0.8,
  ease: ANIMATION_EASING,
};
