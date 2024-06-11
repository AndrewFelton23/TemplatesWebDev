declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el?: Element;
      name?: string;
      offset?: [number, number];
      repeat?: boolean;
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
      class?: string;
      scrollbarClass?: string;
      initClass?: string;
      getSpeed?: boolean;
      getDirection?: boolean;
      multiplier?: number;
      touchMultiplier?: number;
      smoothMobile?: boolean;
      smartphone?: {
        smooth?: boolean;
        direction?: 'vertical' | 'horizontal';
      };
      tablet?: {
        smooth?: boolean;
        direction?: 'vertical' | 'horizontal';
      };
      [key: string]: any;
    }
  
    export default class LocomotiveScroll {
      constructor(options?: LocomotiveScrollOptions);
      init(): void;
      destroy(): void;
      scrollTo(target: string | HTMLElement | number, options?: any): void;
      update(): void;
      start(): void;
      stop(): void;
      on(event: string, callback: () => void): void;
      off(event: string, callback: () => void): void;
    }
  }
  