import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Provides GSAP and ScrollTrigger registered once on the client.
 */
export function useGSAP() {
  if (import.meta.client && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    registered = true;
  }

  return {
    gsap,
    ScrollTrigger,
  };
}
