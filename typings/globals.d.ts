/// <reference types="jest-dom/extend-expect" />;

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
