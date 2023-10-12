export const container = (i) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.1 * i,
      duration: 0.30,
      ease: 'easeIn',
      type: "tween"
      
    },
  },
});

export const leftRight = (type) => ({
  hidden: {
    opacity: 0,
    x: type === "bottom" ? 50 : (
      type === "top" ? -50 : 0
    ),

  },
  show: {
    
    opacity: 1,
    x: 0,
    transition: {
   
      duration: 0.70,
      ease: 'easeOut',
      delay:0.35,
      opacity: {
        duration: 1 // custom duration for opacity property only
      }
    },
  },
});
