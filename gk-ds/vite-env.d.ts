/// <reference types="vite/client" />

declare module 'virtual:vite-plugin-cem/custom-elements-manifest' {
  interface CustomElementsManifest {
    schemaVersion: string;
    modules: Array<{
      kind: string;
      path: string;
      declarations: any[];
    }>;
  }
  
  const customElementsManifest: CustomElementsManifest;
  export default customElementsManifest;
}
