# Grove Keeper Design System (gk-ds)

A modern, accessible web component library built with TypeScript and Shadow DOM. Grove Keeper Design System provides a collection of reusable UI components that can be used across different frameworks and vanilla JavaScript applications.

## 🚀 Features

- **🌐 Framework Agnostic**: Works with any framework or vanilla JavaScript
- **🎨 Modern Design**: Clean, accessible, and responsive components
- **🎨 CSS Variables**: Fully customizable color system with CSS custom properties
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
  <link rel="stylesheet" href="https://unpkg.com/gk-ds/dist/gk-ds.css">
  <script type="module" src="https://unpkg.com/gk-ds/dist/gk-ds.es.js"></script>
</head>
<body>
  <gk-button variant="primary" size="large">Click me!</gk-button>
  <gk-input-text placeholder="Enter your name..." required></gk-input-text>
</body>
</html>
```

## 🎨 CSS Variables & Theming

The design system includes a comprehensive set of CSS custom properties that allow you to customize the entire color scheme. All components use these variables with fallback values, ensuring they work even without the CSS file.

### Including Styles

```html
<!-- Include the CSS file -->
<link rel="stylesheet" href="node_modules/gk-ds/dist/gk-ds.css">
```

Or in your CSS:

```css
@import 'gk-ds/styles';
```

### Customizing Colors

Override any color variable to customize the design system:

```css
:root {
  --gk-color-primary: #your-brand-color;
  --gk-color-primary-hover: #your-hover-color;
  --gk-color-accent: #your-accent-color;
}
```

### Available Color Variables

- **Primary Colors**: `--gk-color-primary`, `--gk-color-primary-hover`, `--gk-color-primary-light`
- **Accent Colors**: `--gk-color-accent`, `--gk-color-accent-light`
- **Neutral Colors**: `--gk-color-gray-50` through `--gk-color-gray-900`
- **Text Colors**: `--gk-color-text-primary`, `--gk-color-text-secondary`, `--gk-color-text-disabled`
- **Background Colors**: `--gk-color-bg-primary`, `--gk-color-bg-secondary`, `--gk-color-bg-disabled`
- **Border Colors**: `--gk-color-border-default`, `--gk-color-border-focus`, `--gk-color-border-error`
- **State Colors**: `--gk-color-success`, `--gk-color-warning`, `--gk-color-error`, `--gk-color-info`

See the [styles documentation](./lib/styles/README.md) for a complete list of available variables.

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
| **Textarea** | `<gk-textarea>` | Multi-line text input with validation and accessibility features | [📖 Textarea README](lib/components/textarea/README.md) |
| **Checkbox** | `<gk-checkbox>` | Checkbox input with custom styling and form integration | [📖 Checkbox README](lib/components/checkbox/README.md) |
| **Radio** | `<gk-radio>` | Radio button input with group support and accessibility | [📖 Radio README](lib/components/radio/README.md) |
| **Select** | `<gk-select>` | Dropdown select with dynamic options and form integration | [📖 Select README](lib/components/select/README.md) |

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

#### Textarea (`gk-textarea`)

A multi-line text input component with validation support.

```html
<!-- Basic usage -->
<gk-textarea placeholder="Enter your message..."></gk-textarea>

<!-- With validation -->
<gk-textarea 
  placeholder="Enter your feedback" 
  required 
  minlength="10"
  maxlength="500"
  rows="5">
</gk-textarea>

<!-- With sizes -->
<gk-textarea size="small" placeholder="Small textarea"></gk-textarea>
<gk-textarea size="large" placeholder="Large textarea"></gk-textarea>
```

**Key Attributes:**
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `placeholder`: `string` (default: `''`)
- `value`: `string` (default: `''`)
- `required`: `boolean` (default: `false`)
- `maxlength`: `number` (optional)
- `minlength`: `number` (optional)
- `rows`: `number` (optional)
- `cols`: `number` (optional)

> 📖 **For complete documentation, validation examples, and API reference, see the [Textarea Component README](lib/components/textarea/README.md)**

#### Checkbox (`gk-checkbox`)

A checkbox input component with custom styling and form integration.

```html
<!-- Basic usage -->
<gk-checkbox>I agree to the terms</gk-checkbox>

<!-- With form attributes -->
<gk-checkbox 
  name="newsletter" 
  value="subscribe"
  required>
  Subscribe to newsletter
</gk-checkbox>

<!-- With sizes -->
<gk-checkbox size="small">Small checkbox</gk-checkbox>
<gk-checkbox size="large">Large checkbox</gk-checkbox>
```

**Key Attributes:**
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `checked`: `boolean` (default: `false`)
- `required`: `boolean` (default: `false`)
- `name`: `string` (default: `''`)
- `value`: `string` (default: `'on'`)

> 📖 **For complete documentation, form integration examples, and API reference, see the [Checkbox Component README](lib/components/checkbox/README.md)**

#### Radio (`gk-radio`)

A radio button component with group support and accessibility features.

```html
<!-- Radio group -->
<gk-radio name="color" value="red">Red</gk-radio>
<gk-radio name="color" value="blue">Blue</gk-radio>
<gk-radio name="color" value="green">Green</gk-radio>

<!-- With form attributes -->
<gk-radio 
  name="gender" 
  value="male"
  required>
  Male
</gk-radio>
```

**Key Attributes:**
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `checked`: `boolean` (default: `false`)
- `required`: `boolean` (default: `false`)
- `name`: `string` (default: `''`)
- `value`: `string` (default: `''`)

> 📖 **For complete documentation, radio group examples, and API reference, see the [Radio Component README](lib/components/radio/README.md)**

#### Select (`gk-select`)

A dropdown select component with dynamic options and form integration.

```html
<!-- Basic usage -->
<gk-select>
  <option value="">Choose an option...</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</gk-select>

<!-- With form attributes -->
<gk-select 
  name="country" 
  required
  size="large">
  <option value="">Select your country...</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</gk-select>
```

**Key Attributes:**
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `required`: `boolean` (default: `false`)
- `name`: `string` (default: `''`)
- `value`: `string` (default: `''`)
- `multiple`: `boolean` (default: `false`)

> 📖 **For complete documentation, dynamic options examples, and API reference, see the [Select Component README](lib/components/select/README.md)**

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
- [x] Checkbox
- [x] Radio
- [x] Select/Dropdown
- [x] Textarea
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
