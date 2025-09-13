# Button Component (`gk-button`)

A versatile and accessible button web component for the Grove Keeper Design System. Built with modern web standards and designed for optimal user experience across all devices and assistive technologies.

## 🚀 Features

- **🎨 Multiple Variants**: Primary and Secondary styles
- **📏 Flexible Sizing**: Small, Medium, and Large sizes
- **🔘 Button Types**: Button, Submit, and Reset functionality
- **♿ Accessibility**: WCAG 2.1 compliant with full keyboard navigation
- **🎯 Focus Management**: Proper focus indicators and management
- **🔧 TypeScript**: Full type definitions and IntelliSense support
- **🎭 Shadow DOM**: Style encapsulation and isolation
- **⚡ Performance**: Lightweight and optimized for fast rendering

## 📦 Installation

```bash
npm install gk-ds
```

## 🎯 Quick Start

### Basic Usage

```html
<gk-button>Click me</gk-button>
```

### With Attributes

```html
<gk-button variant="primary" size="large" type="submit">
  Submit Form
</gk-button>
```

### Framework Integration

#### React
```jsx
import { GkButton } from 'gk-ds';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <gk-button 
      variant="primary" 
      size="large" 
      onClick={handleClick}
    >
      Click me!
    </gk-button>
  );
}
```

#### Vue
```vue
<template>
  <gk-button 
    variant="secondary" 
    size="medium" 
    @click="handleClick"
  >
    Vue Button
  </gk-button>
</template>

<script setup>
function handleClick() {
  console.log('Button clicked!');
}
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <gk-button 
      variant="primary" 
      size="large" 
      (click)="handleClick()"
    >
      Angular Button
    </gk-button>
  `
})
export class MyComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

## 📚 API Reference

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `disabled` | `boolean` | Get/set the disabled state |

### Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `focus()` | Programmatically focus the button | None | `void` |
| `blur()` | Remove focus from the button | None | `void` |
| `click()` | Programmatically trigger a click | None | `void` |

### Events

The button emits standard DOM events:

| Event | Description | Event Detail |
|-------|-------------|--------------|
| `click` | Fired when the button is clicked | Standard `MouseEvent` |
| `focus` | Fired when the button receives focus | Standard `FocusEvent` |
| `blur` | Fired when the button loses focus | Standard `FocusEvent` |
| `keydown` | Fired when a key is pressed while focused | Standard `KeyboardEvent` |
| `keyup` | Fired when a key is released while focused | Standard `KeyboardEvent` |

## 🎨 Examples

### Variants

```html
<!-- Primary button (default) -->
<gk-button variant="primary">Primary Button</gk-button>

<!-- Secondary button -->
<gk-button variant="secondary">Secondary Button</gk-button>
```

### Sizes

```html
<!-- Small button -->
<gk-button size="small">Small Button</gk-button>

<!-- Medium button (default) -->
<gk-button size="medium">Medium Button</gk-button>

<!-- Large button -->
<gk-button size="large">Large Button</gk-button>
```

### Button Types

```html
<!-- Regular button -->
<gk-button type="button">Click Me</gk-button>

<!-- Submit button -->
<gk-button type="submit">Submit Form</gk-button>

<!-- Reset button -->
<gk-button type="reset">Reset Form</gk-button>
```

### States

```html
<!-- Normal state -->
<gk-button>Normal Button</gk-button>

<!-- Disabled state -->
<gk-button disabled>Disabled Button</gk-button>

<!-- Focused state (programmatically) -->
<script>
  const button = document.querySelector('gk-button');
  button.focus();
</script>
```

### Complex Examples

```html
<!-- Form submission -->
<form>
  <gk-input-text name="email" placeholder="Email" required></gk-input-text>
  <gk-button type="submit" variant="primary" size="large">
    Submit
  </gk-button>
</form>

<!-- Action buttons -->
<div class="button-group">
  <gk-button variant="secondary" size="small">Cancel</gk-button>
  <gk-button variant="primary" size="small">Save</gk-button>
</div>

<!-- Icon button -->
<gk-button variant="primary">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
  Star
</gk-button>
```

## 🎨 Theming

### CSS Custom Properties

The button component supports theming through CSS custom properties:

```css
:root {
  /* Primary colors */
  --gk-button-primary-bg: #646cff;
  --gk-button-primary-hover: #535bf2;
  --gk-button-primary-text: #ffffff;
  
  /* Secondary colors */
  --gk-button-secondary-bg: transparent;
  --gk-button-secondary-border: #646cff;
  --gk-button-secondary-text: #646cff;
  --gk-button-secondary-hover-bg: #646cff;
  --gk-button-secondary-hover-text: #ffffff;
  
  /* Common properties */
  --gk-button-border-radius: 6px;
  --gk-button-font-family: inherit;
  --gk-button-font-weight: 500;
  --gk-button-transition: all 0.2s ease-in-out;
  
  /* Focus styles */
  --gk-button-focus-outline: 2px solid #646cff;
  --gk-button-focus-outline-offset: 2px;
  
  /* Disabled styles */
  --gk-button-disabled-opacity: 0.6;
}
```

### Custom Styling

Since the button uses Shadow DOM, styles are encapsulated. However, you can customize the appearance using CSS custom properties:

```css
/* Custom theme */
:root {
  --gk-button-primary-bg: #ff6b6b;
  --gk-button-primary-hover: #ff5252;
  --gk-button-border-radius: 12px;
}

```

## ♿ Accessibility

### Features

- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and Space
- **Screen Readers**: Proper ARIA attributes and semantic markup
- **Focus Management**: Visible focus indicators and proper focus handling
- **High Contrast**: Compatible with high contrast mode
- **Reduced Motion**: Respects `prefers-reduced-motion` settings

### Best Practices

```html
<!-- Accessible button with descriptive text -->
<gk-button variant="primary" size="large">
  Save Document
</gk-button>

<!-- Accessible icon button -->
<gk-button variant="secondary" size="small" aria-label="Close dialog">
  <svg aria-hidden="true" width="16" height="16">
    <path d="M6 18L18 6M6 6l12 12"/>
  </svg>
</gk-button>

<!-- Form button with proper association -->
<form>
  <gk-input-text id="email" name="email" required></gk-input-text>
  <gk-button type="submit" variant="primary">
    Subscribe to Newsletter
  </gk-button>
</form>
```

### ARIA Support

The button component automatically handles:
- `role="button"` for proper screen reader support
- `tabindex="0"` for keyboard navigation
- `aria-disabled` when disabled
- Focus management and indicators

## 🧪 Testing

### Unit Tests

The button component includes comprehensive tests:

```bash
# Run button tests
npm test -- button.test.ts

# Run with coverage
npm run test:coverage
```

### Manual Testing

```javascript
// Test focus management
const button = document.querySelector('gk-button');
button.focus();
console.log(document.activeElement === button); // true

// Test click events
button.addEventListener('click', (e) => {
  console.log('Button clicked!', e);
});

// Test disabled state
button.disabled = true;
button.click(); // Should not trigger click event
```

## 🌐 Browser Support

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 54+ | Full support |
| Firefox | 63+ | Full support |
| Safari | 10.1+ | Full support |
| Edge | 79+ | Full support |
| IE | Not supported | Use polyfills if needed |

## 📚 Storybook

View interactive examples and test the button component:

```bash
npm run storybook
```

Then navigate to **Components > Button** in the sidebar to explore:
- All variants and sizes
- Interactive controls
- Accessibility testing
- Code examples

## 🔧 Development

### Component Structure

```
button/
├── button.ts          # Main component implementation
├── button.test.ts     # Unit tests
├── button.stories.ts  # Storybook stories
└── README.md         # This documentation
```

### Key Implementation Details

- **Shadow DOM**: Uses `attachShadow({ mode: 'open' })` for style encapsulation
- **Observed Attributes**: Monitors `variant`, `size`, `disabled`, and `type` changes
- **Event Delegation**: Efficiently handles user interactions
- **Performance**: Minimal DOM manipulation and efficient re-rendering

## 🚀 Roadmap

### Planned Features

- [ ] Loading state with spinner
- [ ] Icon-only buttons
- [ ] Button groups
- [ ] Outline and ghost variants
- [ ] Danger variant for destructive actions
- [ ] Custom color variants
- [ ] Animation support

### Migration Notes

When new features are added, they will be backward compatible. Breaking changes will be clearly documented with migration guides.

---

**Made with ❤️ by the Grove Keeper team**