const useAnimation = (animationName = '', entry, observer) => {
  let animation = '';

  if (entry.isInterscting) {
    observer.unobserve(entry.target);
    animation = animationName;
  }

  return animation;
}

export default useAnimation;