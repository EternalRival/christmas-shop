type TagName = keyof HTMLElementTagNameMap;
type Props<T extends TagName> = Partial<HTMLElementTagNameMap[T]>;
type Children = Parameters<ParentNode['append']>;

export function createElement<T extends TagName>(tagName: T, props?: Props<T>, children?: Children) {
  const element = Object.assign(document.createElement(tagName), props);

  if (children) {
    element.append(...children);
  }

  return element;
}
