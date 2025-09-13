# Input Text Component (`gk-input-text`)

A powerful and accessible text input web component for the Grove Keeper Design System. Built with modern web standards and designed for optimal user experience with comprehensive validation support and accessibility features.

## 🚀 Features

- **📏 Flexible Sizing**: Small, Medium, and Large sizes
- **✅ Built-in Validation**: Required, Min/Max Length, Pattern matching
- **♿ Accessibility**: WCAG 2.1 compliant with full keyboard navigation
- **🎯 Focus Management**: Proper focus indicators and management
- **🔧 TypeScript**: Full type definitions and IntelliSense support
- **🎭 Shadow DOM**: Style encapsulation and isolation
- **⚡ Performance**: Lightweight and optimized for fast rendering
- **📱 Responsive**: Mobile-first design with touch-friendly interactions

## 📦 Installation

```bash
npm install gk-ds
```

## 🎯 Quick Start

### Basic Usage

```html
<gk-input-text></gk-input-text>
```

### With Attributes

```html
<gk-input-text 
  size="large" 
  placeholder="Enter your name..." 
  required 
  maxlength="50">
</gk-input-text>
```

### Framework Integration

#### React
```jsx
import { GkInputText } from 'gk-ds';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.detail.value);
  };

  return (
    <gk-input-text 
      placeholder="Enter your email"
      value={value}
      onInput={handleInput}
      required
    />
  );
}
```

#### Vue
```vue
<template>
  <gk-input-text 
    v-model="email"
    placeholder="Enter your email"
    required
    type="email"
    @input="handleInput"
  />
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

function handleInput(event) {
  console.log('Input value:', event.detail.value);
}
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <gk-input-text 
      [(ngModel)]="email"
      placeholder="Enter your email"
      required
      (input)="onInput($event)"
    ></gk-input-text>
  `
})
export class MyComponent {
  email = '';

  onInput(event: any) {
    console.log('Input value:', event.detail.value);
  }
}
```

## 📚 API Reference

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input field size |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `placeholder` | `string` | `''` | Placeholder text for the input |
| `value` | `string` | `''` | The current value of the input |
| `required` | `boolean` | `false` | Whether the input is required |
| `maxlength` | `number` | - | Maximum number of characters allowed |
| `minlength` | `number` | - | Minimum number of characters required |
| `pattern` | `string` | - | Regular expression pattern for validation |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `value` | `string` | Get/set the input value |
| `validity` | `ValidityState` | Current validation state |
| `disabled` | `boolean` | Get/set the disabled state |

### Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `focus()` | Programmatically focus the input | None | `void` |
| `blur()` | Remove focus from the input | None | `void` |
| `select()` | Select all text in the input | None | `void` |
| `checkValidity()` | Check if the input is valid | None | `boolean` |
| `reportValidity()` | Check validity and show error message | None | `boolean` |

### Events

The input emits custom events that bubble up:

| Event | Description | Event Detail |
|-------|-------------|--------------|
| `input` | Fired when the input value changes | `{ value: string }` |
| `change` | Fired when the input value changes and loses focus | `{ value: string }` |
| `focus` | Fired when the input receives focus | Standard `FocusEvent` |
| `blur` | Fired when the input loses focus | Standard `FocusEvent` |

## 🎨 Examples

### Sizes

```html
<!-- Small input -->
<gk-input-text size="small" placeholder="Small input"></gk-input-text>

<!-- Medium input (default) -->
<gk-input-text size="medium" placeholder="Medium input"></gk-input-text>

<!-- Large input -->
<gk-input-text size="large" placeholder="Large input"></gk-input-text>
```

### States

```html
<!-- Normal state -->
<gk-input-text placeholder="Normal input"></gk-input-text>

<!-- Disabled state -->
<gk-input-text disabled value="Disabled input"></gk-input-text>

<!-- Required field -->
<gk-input-text required placeholder="Required field"></gk-input-text>

<!-- With initial value -->
<gk-input-text value="Initial value"></gk-input-text>
```

### Validation Examples

```html
<!-- Required field -->
<gk-input-text required placeholder="This field is required"></gk-input-text>

<!-- Email validation -->
<gk-input-text 
  type="email"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  placeholder="Enter your email"
  required>
</gk-input-text>

<!-- Length validation -->
<gk-input-text 
  minlength="3" 
  maxlength="20" 
  placeholder="3-20 characters">
</gk-input-text>

<!-- Pattern validation -->
<gk-input-text 
  pattern="[a-zA-Z0-9]+"
  placeholder="Letters and numbers only">
</gk-input-text>

<!-- Complex validation -->
<gk-input-text 
  required
  minlength="8"
  maxlength="50"
  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$"
  placeholder="Strong password">
</gk-input-text>
```

### Form Integration

```html
<!-- Simple form -->
<form id="userForm">
  <gk-input-text 
    name="firstName" 
    placeholder="First Name" 
    required>
  </gk-input-text>
  
  <gk-input-text 
    name="lastName" 
    placeholder="Last Name" 
    required>
  </gk-input-text>
  
  <gk-input-text 
    name="email" 
    type="email" 
    placeholder="Email" 
    required>
  </gk-input-text>
  
  <gk-button type="submit">Submit</gk-button>
</form>

<script>
  document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
  });
</script>
```

### Event Handling

```html
<gk-input-text id="myInput" placeholder="Type something..."></gk-input-text>

<script>
  const input = document.getElementById('myInput');

  // Handle input events
  input.addEventListener('input', (e) => {
    console.log('Current value:', e.detail.value);
  });

  // Handle change events
  input.addEventListener('change', (e) => {
    console.log('Final value:', e.detail.value);
  });

  // Handle focus events
  input.addEventListener('focus', () => {
    console.log('Input focused');
  });

  // Handle blur events
  input.addEventListener('blur', () => {
    console.log('Input blurred');
  });
</script>
```

### Dynamic Value Management

```html
<gk-input-text id="dynamicInput"></gk-input-text>
<button id="setValue">Set Value</button>
<button id="clearValue">Clear Value</button>

<script>
  const input = document.getElementById('dynamicInput');
  const setBtn = document.getElementById('setValue');
  const clearBtn = document.getElementById('clearValue');

  setBtn.addEventListener('click', () => {
    input.value = 'Dynamic value set!';
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
  });

  // Watch for value changes
  input.addEventListener('input', (e) => {
    console.log('Value changed to:', e.detail.value);
  });
</script>
```

## 🎨 Theming

### CSS Custom Properties

The input component supports theming through CSS custom properties:

```css
:root {
  /* Input colors */
  --gk-input-bg: #ffffff;
  --gk-input-text: #213547;
  --gk-input-border: #d1d5db;
  --gk-input-border-focus: #646cff;
  
  /* Placeholder colors */
  --gk-input-placeholder: #9ca3af;
  
  /* Disabled colors */
  --gk-input-disabled-bg: #f9fafb;
  --gk-input-disabled-text: #9ca3af;
  --gk-input-disabled-border: #e5e7eb;
  
  /* Error colors */
  --gk-input-error-border: #ef4444;
  --gk-input-error-focus: rgba(239, 68, 68, 0.1);
  
  /* Focus styles */
  --gk-input-focus-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
  
  /* Typography */
  --gk-input-font-family: inherit;
  --gk-input-font-size: 14px;
  --gk-input-line-height: 1.5;
  
  /* Border and spacing */
  --gk-input-border-radius: 6px;
  --gk-input-padding: 8px 12px;
  --gk-input-transition: all 0.2s ease-in-out;
}
```

### Size Customization

```css
:root {
  /* Small size */
  --gk-input-small-padding: 6px 10px;
  --gk-input-small-font-size: 12px;
  --gk-input-small-min-height: 28px;
  
  /* Medium size (default) */
  --gk-input-medium-padding: 8px 12px;
  --gk-input-medium-font-size: 14px;
  --gk-input-medium-min-height: 36px;
  
  /* Large size */
  --gk-input-large-padding: 12px 16px;
  --gk-input-large-font-size: 16px;
  --gk-input-large-min-height: 44px;
}
```


## ♿ Accessibility

### Features

- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and arrow keys
- **Screen Readers**: Proper ARIA attributes and semantic markup
- **Focus Management**: Visible focus indicators and proper focus handling
- **High Contrast**: Compatible with high contrast mode
- **Form Integration**: Works seamlessly with HTML forms and validation

### Best Practices

```html
<!-- Accessible input with proper labeling -->
<label for="email-input">Email Address</label>
<gk-input-text 
  id="email-input"
  type="email"
  required
  aria-describedby="email-help"
  placeholder="Enter your email address">
</gk-input-text>
<div id="email-help">We'll never share your email with anyone else.</div>

<!-- Input with validation feedback -->
<gk-input-text 
  id="password"
  type="password"
  required
  minlength="8"
  aria-describedby="password-error"
  aria-invalid="true">
</gk-input-text>
<div id="password-error" role="alert">
  Password must be at least 8 characters long.
</div>

<!-- Input group with proper structure -->
<div class="input-group">
  <label for="username">Username</label>
  <gk-input-text 
    id="username"
    required
    pattern="[a-zA-Z0-9_]+"
    aria-describedby="username-help">
  </gk-input-text>
  <div id="username-help">
    Username can contain letters, numbers, and underscores only.
  </div>
</div>
```

### ARIA Support

The input component automatically handles:
- `role="textbox"` for proper screen reader support
- `tabindex="0"` for keyboard navigation
- `aria-disabled` when disabled
- `aria-required` when required
- `aria-invalid` based on validation state
- Focus management and indicators

## 🧪 Testing

### Unit Tests

The input component includes comprehensive tests:

```bash
# Run input tests
npm test -- input-text.test.ts

# Run with coverage
npm run test:coverage
```

### Manual Testing

```javascript
// Test value management
const input = document.querySelector('gk-input-text');
input.value = 'Test value';
console.log(input.value); // 'Test value'

// Test validation
input.required = true;
input.value = '';
console.log(input.checkValidity()); // false

// Test events
input.addEventListener('input', (e) => {
  console.log('Input event:', e.detail.value);
});

input.addEventListener('change', (e) => {
  console.log('Change event:', e.detail.value);
});

// Test focus management
input.focus();
console.log(document.activeElement === input); // true
```

### Validation Testing

```javascript
// Test different validation scenarios
const input = document.querySelector('gk-input-text');

// Test required validation
input.required = true;
input.value = '';
console.log(input.checkValidity()); // false

// Test length validation
input.minlength = 5;
input.value = 'abc';
console.log(input.checkValidity()); // false

input.value = 'abcdef';
console.log(input.checkValidity()); // true

// Test pattern validation
input.pattern = '[a-zA-Z]+';
input.value = 'abc123';
console.log(input.checkValidity()); // false

input.value = 'abc';
console.log(input.checkValidity()); // true
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

View interactive examples and test the input component:

```bash
npm run storybook
```

Then navigate to **Components > Input Text** in the sidebar to explore:
- All sizes and states
- Validation examples
- Interactive controls
- Accessibility testing
- Code examples

## 🔧 Development

### Component Structure

```
input-text/
├── input-text.ts          # Main component implementation
├── input-text.test.ts     # Unit tests
├── input-text.stories.ts  # Storybook stories
└── README.md             # This documentation
```

### Key Implementation Details

- **Shadow DOM**: Uses `attachShadow({ mode: 'open' })` for style encapsulation
- **Observed Attributes**: Monitors all input attributes for changes
- **Event Delegation**: Efficiently handles user interactions
- **Validation Integration**: Seamless HTML5 validation support
- **Performance**: Minimal DOM manipulation and efficient re-rendering

## 🚀 Roadmap

### Planned Features

- [ ] Additional input types (email, password, number, tel, url)
- [ ] Input masking support
- [ ] Autocomplete functionality
- [ ] Input groups with labels and help text
- [ ] Search input with clear button
- [ ] File input component
- [ ] Textarea component
- [ ] Multi-line text input
- [ ] Rich text editor integration

### Migration Notes

When new features are added, they will be backward compatible. Breaking changes will be clearly documented with migration guides.

---

**Made with ❤️ by the Grove Keeper team**