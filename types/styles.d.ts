import "csstype";

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "csstype" {
  interface Properties {
    [customValiable: `--${string}`]: string | number | undefined;
  }
}