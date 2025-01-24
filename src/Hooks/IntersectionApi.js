import { useEffect } from "react";

function useIntersectionApi({
  func,
  root = null,
  rootMargin = "0px",
  threshold = 0.5,
  targetRef,
}) {
  useEffect(() => {
    const target = targetRef?.current; // Access current element from ref
    if (!target) return; // Exit if the target is not yet available

    const options = {
      root, // The viewport is the default root
      rootMargin, // Margin around the root
      threshold, // Visibility threshold
    };

    const observer = new IntersectionObserver(func, options);

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [func, root, rootMargin, threshold, targetRef]); // Include targetRef as a dependency
}

export default useIntersectionApi;
