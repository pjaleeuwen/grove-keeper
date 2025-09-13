# Grove Keeper Design System (gk-ds)

A modern, accessible web component library built with TypeScript and Shadow DOM. Grove Keeper Design System provides a collection of reusable UI components that can be used across different frameworks and vanilla JavaScript applications.

## 🚀 Features

- **🌐 Framework Agnostic**: Works with any framework or vanilla JavaScript
- **🎨 Modern Design**: Clean, accessible, and responsive components
- **🌙 Dark Mode**: Automatic dark mode support with `prefers-color-scheme`
- **♿ Accessible**: WCAG 2.1 compliant with full keyboard navigation
- **📱 Responsive**: Mobile-first design with flexible layouts
- **🔧 TypeScript**: Full type definitions included
- **🎭 Shadow DOM**: Style encapsulation and isolation
- **📚 Storybook**: Interactive component documentation
- **🧪 Tested**: Comprehensive test coverage with Vitest
- **📦 Tree Shakeable**: Import only what you need

## 📦 Installation

```bash
npm install gk-ds
```

## 🎯 Quick Start

### ES Modules (Recommended)

```javascript
import { GkButton, GkInputText } from 'gk-ds';

// Components are automatically registered
// Use them directly in your HTML
```

### HTML Usage

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="https://unpkg.com/gk-ds/dist/gk-ds.es.js"></script>
</head>
<body>
  <gk-button variant="primary" size="large">Click me!</gk-button>
  <gk-input-text placeholder="Enter your name..." required></gk-input-text>
</body>
</html>
```

### React Usage

```jsx
import { GkButton, GkInputText } from 'gk-ds';

function App() {
  return (
    <div>
      <gk-button variant="primary" size="large">
        Click me!
      </gk-button>
      <gk-input-text 
        placeholder="Enter your name..." 
        required 
        onInput={(e) => console.log(e.detail.value)}
      />
    </div>
  );
}
```

### Vue Usage

```vue
<template>
  <div>
    <gk-button variant="primary" size="large">
      Click me!
    </gk-button>
    <gk-input-text 
      placeholder="Enter your name..." 
      required 
      @input="handleInput"
    />
  </div>
</template>

<script setup>
import { GkButton, GkInputText } from 'gk-ds';

function handleInput(event) {
  console.log(event.detail.value);
}
</script>
```

## 🧩 Components

### Component Overview

The Grove Keeper Design System provides a growing collection of web components. Each component is designed to be framework-agnostic, accessible, and highly customizable.

| Component | Tag | Description | Documentation |
|-----------|-----|-------------|---------------|
| **Button** | `<gk-button>` | Versatile button with multiple variants and sizes | [📖 Button README](lib/components/button/README.md) |
| **Input Text** | `<gk-input-text>` | Text input with validation and accessibility features | [📖 Input Text README](lib/components/input-text/README.md) |

### Quick Component Examples

#### Button (`gk-button`)

A versatile button component with multiple variants and sizes.

```html
<!-- Basic usage -->
<gk-button>Click me!</gk-button>

<!-- With variants -->
<gk-button variant="primary">Primary</gk-button>
<gk-button variant="secondary">Secondary</gk-button>

<!-- With sizes -->
<gk-button size="small">Small</gk-button>
<gk-button size="medium">Medium</gk-button>
<gk-button size="large">Large</gk-button>

<!-- With states -->
<gk-button disabled>Disabled</gk-button>
<gk-button type="submit">Submit</gk-button>
```

**Key Attributes:**
- `variant`: `'primary' | 'secondary'` (default: `'primary'`)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)

> 📖 **For complete documentation, examples, and API reference, see the [Button Component README](lib/components/button/README.md)**

#### Input Text (`gk-input-text`)

A flexible text input component with validation support.

```html
<!-- Basic usage -->
<gk-input-text></gk-input-text>

<!-- With validation -->
<gk-input-text 
  placeholder="Enter your email" 
  required 
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  maxlength="50">
</gk-input-text>

<!-- With sizes -->
<gk-input-text size="small" placeholder="Small input"></gk-input-text>
<gk-input-text size="large" placeholder="Large input"></gk-input-text>
```

**Key Attributes:**
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `placeholder`: `string` (default: `''`)
- `value`: `string` (default: `''`)
- `required`: `boolean` (default: `false`)
- `maxlength`: `number` (optional)
- `minlength`: `number` (optional)
- `pattern`: `string` (optional)

**Events:**
- `input`: Fired when value changes (detail: `{ value: string }`)
- `change`: Fired when value changes and loses focus (detail: `{ value: string }`)
- `focus`: Fired when input receives focus
- `blur`: Fired when input loses focus

> 📖 **For complete documentation, validation examples, and API reference, see the [Input Text Component README](lib/components/input-text/README.md)**

## 🎨 Theming

Components support CSS custom properties for theming:

```css
:root {
  /* Button colors */
  --gk-color-primary: #646cff;
  --gk-color-primary-hover: #535bf2;
  
  /* Text colors */
  --gk-color-text: #213547;
  --gk-color-text-muted: #9ca3af;
  
  /* Border colors */
  --gk-color-border: #d1d5db;
  --gk-color-border-focus: #646cff;
  
  /* Error colors */
  --gk-color-error: #ef4444;
  
  /* Background colors */
  --gk-color-background: #ffffff;
  --gk-color-background-disabled: #f9fafb;
}
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/pjaleeuwen/grove-keeper.git
cd grove-keeper/gk-ds

# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Run tests
npm test

# Run linting
npm run lint

# Build for production
npm run build
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `preview` | Preview production build |
| `test` | Run tests with Vitest |
| `test:ui` | Run tests with UI |
| `test:coverage` | Run tests with coverage |
| `storybook` | Start Storybook development server |
| `build-storybook` | Build Storybook for production |
| `lint` | Run ESLint |
| `lint:fix` | Fix ESLint errors |
| `format` | Format code with Prettier |
| `type-check` | Run TypeScript type checking |

## 🧪 Testing

The project uses Vitest for testing with excellent coverage:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

Test files are located in the same directory as components:
- `lib/components/button/button.test.ts`
- `lib/components/input-text/input-text.test.ts`

## 📚 Storybook

Interactive component documentation is available through Storybook:

```bash
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006) to view the documentation.

## 🌐 Browser Support

- **Chrome**: 54+
- **Firefox**: 63+
- **Safari**: 10.1+
- **Edge**: 79+

## 📋 Roadmap

### Planned Components
- [ ] Checkbox
- [ ] Radio
- [ ] Select/Dropdown
- [ ] Textarea
- [ ] Modal
- [ ] Tooltip
- [ ] Card
- [ ] Badge
- [ ] Avatar
- [ ] Progress
- [ ] Spinner

### Planned Features
- [ ] Additional button variants (outline, ghost, danger)
- [ ] Loading states for buttons
- [ ] Form validation utilities
- [ ] Animation system
- [ ] Internationalization (i18n)
- [ ] Additional input types (email, password, number)
- [ ] Theme switching (light/dark)
- [ ] RTL support

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for new functionality
5. Run tests: `npm test`
6. Run linting: `npm run lint`
7. Commit your changes: `git commit -m 'Add amazing feature'`
8. Push to the branch: `git push origin feature/amazing-feature`
9. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://github.com/pjaleeuwen/grove-keeper/tree/main/gk-ds)
- 🐛 [Issue Tracker](https://github.com/pjaleeuwen/grove-keeper/issues)
- 💬 [Discussions](https://github.com/pjaleeuwen/grove-keeper/discussions)

## 🙏 Acknowledgments

- Built with [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- Styled with modern CSS and Shadow DOM
- Tested with [Vitest](https://vitest.dev/)
- Documented with [Storybook](https://storybook.js.org/)
- Bundled with [Vite](https://vitejs.dev/)

---

Made with ❤️ by the Grove Keeper team
