type TagName = keyof HTMLElementTagNameMap;
type Props<T extends TagName> = Partial<HTMLElementTagNameMap[T]>;
type Children = Parameters<ParentNode['append']>;

export default function h<T extends TagName>(
  tagName: T,
  props?: Props<T> | null,
  children?: Children,
): HTMLElementTagNameMap[T] {
  const element = Object.assign(document.createElement(tagName), props);

  if (children) {
    element.append(...children);
  }

  return element;
}
