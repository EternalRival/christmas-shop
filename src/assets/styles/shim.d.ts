declare module '*.module.css' {
  const classes: { readonly [key: string]: string };

  export default classes;
}

declare module '*.svg' {
  const svg: string;

  export default svg;
}

declare module '*.svg?resource' {
  const svg: string;

  export default svg;
}

declare module '*.webp' {
  const image: string;

  export default image;
}
