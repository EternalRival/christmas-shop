type TagName = keyof HTMLElementTagNameMap;

type Props<T extends TagName> = Partial<HTMLElementTagNameMap[T]>;

type Children = (string | Node | null | undefined)[];

function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

function createElementFactory<T extends TagName>(tagName: T) {
  return function createElement(props?: Props<T> | null, children?: Children): HTMLElementTagNameMap[T] {
    const element = Object.assign(document.createElement(tagName), props);

    if (children) {
      element.append(...children.filter(isNonNullable));
    }

    return element;
  };
}

export const a = createElementFactory('a');

export const article = createElementFactory('article');

export const button = createElementFactory('button');

export const dialog = createElementFactory('dialog');

export const div = createElementFactory('div');

export const fieldset = createElementFactory('fieldset');

export const footer = createElementFactory('footer');

export const form = createElementFactory('form');

export const h1 = createElementFactory('h1');

export const h2 = createElementFactory('h2');

export const h3 = createElementFactory('h3');

export const h4 = createElementFactory('h4');

export const header = createElementFactory('header');

export const img = createElementFactory('img');

export const input = createElementFactory('input');

export const label = createElementFactory('label');

export const legend = createElementFactory('legend');

export const li = createElementFactory('li');

export const main = createElementFactory('main');

export const nav = createElementFactory('nav');

export const p = createElementFactory('p');

export const section = createElementFactory('section');

export const span = createElementFactory('span');

export const ul = createElementFactory('ul');
