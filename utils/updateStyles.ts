type Nil<T> = T | null | undefined;

const updateStyles = (
  el: Nil<HTMLElement>,
  styles: Partial<Record<keyof CSSStyleDeclaration, string>>
) => {
  if (!el) return;
  Object.entries(styles).forEach(([key, val]) => {
    el.style[key as any] = val!;
  });
};

export { updateStyles };
