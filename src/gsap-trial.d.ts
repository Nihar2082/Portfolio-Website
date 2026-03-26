declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element, vars?: Record<string, unknown>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: Record<string, unknown>): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static refresh(hard?: boolean): void;
    scrollTop(value?: number): number;
    scrollTo(
      target: string | Element | number,
      smooth?: boolean,
      position?: string
    ): void;
    paused(value?: boolean): boolean;
    kill(): void;
  }
}
