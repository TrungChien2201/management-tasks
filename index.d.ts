declare module "foo-module" {
    function resolve(): void; 
    namespace resolve { } // This is a hack to allow ES6 wildcard imports
    export = resolve;
  }