type TagName = keyof HTMLElementTagNameMap;
type Props<T extends TagName> = Partial<HTMLElementTagNameMap[T]>;
type Children = Parameters<ParentNode['append']>;

function createElementFactory<T extends TagName>(tagName: T) {
  return function createElement(props?: Props<T> | null, children?: Children): HTMLElementTagNameMap[T] {
    const element = Object.assign(document.createElement(tagName), props);

    if (children) {
      element.append(...children);
    }

    return element;
  };
}

export const a = createElementFactory('a');
export const button = createElementFactory('button');
export const div = createElementFactory('div');
export const h1 = createElementFactory('h1');
export const header = createElementFactory('header');
export const input = createElementFactory('input');
export const label = createElementFactory('label');
export const li = createElementFactory('li');
export const main = createElementFactory('main');
export const nav = createElementFactory('nav');
export const section = createElementFactory('section');
export const ul = createElementFactory('ul');
