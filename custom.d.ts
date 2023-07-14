declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.ico' {
  const content: StaticImageData;
  export default content;
}
