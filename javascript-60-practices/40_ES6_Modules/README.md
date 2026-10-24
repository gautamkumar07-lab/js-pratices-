# ES6 Modules (import, export, tree-shaking)

Organize code into modular files with named exports, default exports, dynamic imports, and bundler tree-shaking.


### Modern ES6 Modules (ESM)
ES Modules provide a standardized, official module system for JavaScript in browsers and Node.js.

### Syntax Styles:
- **Named Exports**: `export const add = ...`, imported with curly braces: `import { add } from './math'`
- **Default Export**: `export default class App ...`, imported without braces: `import App from './App'`
- **Renaming**: `import { add as sum } from './math'`
- **Namespace Import**: `import * as MathUtils from './math'`
- **Dynamic Import**: `const module = await import('./heavyModule')`
    
