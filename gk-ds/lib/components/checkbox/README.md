# Checkbox Component (`gk-checkbox`)

A versatile and accessible checkbox web component for the Grove Keeper Design System. Built with modern web standards and designed for optimal user experience with comprehensive form integration and accessibility features.

## 🚀 Features

- **📏 Flexible Sizing**: Small, Medium, and Large sizes
- **✅ Form Integration**: Full HTML form support with name/value attributes
- **♿ Accessibility**: WCAG 2.1 compliant with full keyboard navigation
- **🌙 Dark Mode**: Automatic theme detection with `prefers-color-scheme`
- **🎯 Focus Management**: Proper focus indicators and management
- **🔧 TypeScript**: Full type definitions and IntelliSense support
- **🎭 Shadow DOM**: Style encapsulation and isolation
- **⚡ Performance**: Lightweight and optimized for fast rendering
- **📱 Responsive**: Mobile-first design with touch-friendly interactions
- **🎨 Custom Styling**: Beautiful custom checkbox design with smooth animations

## 📦 Installation

```bash
npm install gk-ds
```

## 🎯 Quick Start

### Basic Usage

```html
<gk-checkbox>I agree to the terms</gk-checkbox>
```

### With Attributes

```html
<gk-checkbox 
  size="large" 
  name="newsletter" 
  value="subscribe"
  required>
  Subscribe to newsletter
</gk-checkbox>
```

### Framework Integration

#### React
```jsx
import { GkCheckbox } from 'gk-ds';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.detail.checked);
  };

  return (
    <gk-checkbox 
      checked={checked}
      onChange={handleChange}
      name="terms"
      value="accepted"
    >
      I agree to the terms and conditions
    </gk-checkbox>
  );
}
```

#### Vue
```vue
<template>
  <gk-checkbox 
    v-model:checked="agreed"
    name="terms"
    value="accepted"
    @change="handleChange"
  >
    I agree to the terms and conditions
  </gk-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const agreed = ref(false);

function handleChange(event) {
  console.log('Checkbox changed:', event.detail.checked);
}
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <gk-checkbox 
      [(checked)]="agreed"
      name="terms"
      value="accepted"
      (change)="onChange($event)"
    >
      I agree to the terms and conditions
    </gk-checkbox>
  `
})
export class MyComponent {
  agreed = false;

  onChange(event: any) {
    console.log('Checkbox changed:', event.detail.checked);
  }
}
```

## 📚 API Reference

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Checkbox size |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `required` | `boolean` | `false` | Whether the checkbox is required |
| `name` | `string` | `''` | The name attribute for form submission |
| `value` | `string` | `'on'` | The value attribute for form submission |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `checked` | `boolean` | Get/set the checked state |
| `disabled` | `boolean` | Get/set the disabled state |
| `value` | `string` | Get/set the value |
| `name` | `string` | Get/set the name |
| `validity` | `ValidityState` | Current validation state |

### Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `focus()` | Programmatically focus the checkbox | None | `void` |
| `blur()` | Remove focus from the checkbox | None | `void` |
| `click()` | Programmatically trigger a click | None | `void` |
| `checkValidity()` | Check if the checkbox is valid | None | `boolean` |
| `reportValidity()` | Check validity and show error message | None | `boolean` |

### Events

The checkbox emits custom events that bubble up:

| Event | Description | Event Detail |
|-------|-------------|--------------|
| `change` | Fired when the checkbox state changes | `{ checked: boolean, value: string }` |
| `focus` | Fired when the checkbox receives focus | Standard `FocusEvent` |
| `blur` | Fired when the checkbox loses focus | Standard `FocusEvent` |

## 🎨 Examples

### Sizes

```html
<!-- Small checkbox -->
<gk-checkbox size="small">Small checkbox</gk-checkbox>

<!-- Medium checkbox (default) -->
<gk-checkbox size="medium">Medium checkbox</gk-checkbox>

<!-- Large checkbox -->
<gk-checkbox size="large">Large checkbox</gk-checkbox>
```

### States

```html
<!-- Normal state -->
<gk-checkbox>Normal checkbox</gk-checkbox>

<!-- Checked state -->
<gk-checkbox checked>Checked checkbox</gk-checkbox>

<!-- Disabled state -->
<gk-checkbox disabled>Disabled checkbox</gk-checkbox>

<!-- Disabled and checked -->
<gk-checkbox disabled checked>Disabled checked</gk-checkbox>

<!-- Required field -->
<gk-checkbox required>Required checkbox</gk-checkbox>
```

### Form Integration

```html
<!-- Basic form checkbox -->
<form>
  <gk-checkbox name="newsletter" value="subscribe">
    Subscribe to newsletter
  </gk-checkbox>
  
  <gk-checkbox name="terms" value="accepted" required>
    I agree to the terms and conditions
  </gk-checkbox>
  
  <gk-button type="submit">Submit</gk-button>
</form>
```

### Checkbox Groups

```html
<!-- Hobbies selection -->
<fieldset>
  <legend>Select your hobbies:</legend>
  
  <gk-checkbox name="hobbies" value="reading">Reading</gk-checkbox>
  <gk-checkbox name="hobbies" value="gaming">Gaming</gk-checkbox>
  <gk-checkbox name="hobbies" value="sports">Sports</gk-checkbox>
  <gk-checkbox name="hobbies" value="music">Music</gk-checkbox>
</fieldset>

<!-- Email preferences -->
<fieldset>
  <legend>Email preferences:</legend>
  
  <gk-checkbox name="email-prefs" value="marketing">Marketing emails</gk-checkbox>
  <gk-checkbox name="email-prefs" value="updates">Product updates</gk-checkbox>
  <gk-checkbox name="email-prefs" value="newsletter">Newsletter</gk-checkbox>
</fieldset>
```

### Event Handling

```html
<gk-checkbox id="myCheckbox" name="test" value="test-value">
  Click me!
</gk-checkbox>

<script>
  const checkbox = document.getElementById('myCheckbox');

  // Handle change events
  checkbox.addEventListener('change', (e) => {
    console.log('Checked:', e.detail.checked);
    console.log('Value:', e.detail.value);
  });

  // Handle focus events
  checkbox.addEventListener('focus', () => {
    console.log('Checkbox focused');
  });

  // Handle blur events
  checkbox.addEventListener('blur', () => {
    console.log('Checkbox blurred');
  });
</script>
```

### Dynamic State Management

```html
<gk-checkbox id="dynamicCheckbox">Dynamic checkbox</gk-checkbox>
<button id="toggleCheckbox">Toggle</button>
<button id="disableCheckbox">Disable/Enable</button>

<script>
  const checkbox = document.getElementById('dynamicCheckbox');
  const toggleBtn = document.getElementById('toggleCheckbox');
  const disableBtn = document.getElementById('disableCheckbox');

  toggleBtn.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
  });

  disableBtn.addEventListener('click', () => {
    checkbox.disabled = !checkbox.disabled;
  });

  // Watch for changes
  checkbox.addEventListener('change', (e) => {
    console.log('Checkbox state changed:', e.detail.checked);
  });
</script>
```

### Form Validation

```html
<form id="registrationForm">
  <gk-checkbox 
    id="termsCheckbox" 
    name="terms" 
    value="accepted" 
    required>
    I agree to the terms and conditions
  </gk-checkbox>
  
  <gk-checkbox 
    id="privacyCheckbox" 
    name="privacy" 
    value="accepted" 
    required>
    I have read the privacy policy
  </gk-checkbox>
  
  <gk-button type="submit">Register</gk-button>
</form>

<script>
  document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const termsCheckbox = document.getElementById('termsCheckbox');
    const privacyCheckbox = document.getElementById('privacyCheckbox');
    
    if (termsCheckbox.checkValidity() && privacyCheckbox.checkValidity()) {
      console.log('Form is valid!');
      // Process form data
    } else {
      console.log('Please check all required fields');
    }
  });
</script>
```

## 🎨 Theming

### CSS Custom Properties

The checkbox component supports theming through CSS custom properties:

```css
:root {
  /* Checkbox colors */
  --gk-checkbox-bg: #ffffff;
  --gk-checkbox-border: #d1d5db;
  --gk-checkbox-checked-bg: #646cff;
  --gk-checkbox-checked-border: #646cff;
  
  /* Checkmark colors */
  --gk-checkbox-checkmark: #ffffff;
  
  /* Disabled colors */
  --gk-checkbox-disabled-bg: #f9fafb;
  --gk-checkbox-disabled-border: #e5e7eb;
  --gk-checkbox-disabled-checked-bg: #d1d5db;
  --gk-checkbox-disabled-checked-border: #d1d5db;
  --gk-checkbox-disabled-checkmark: #9ca3af;
  
  /* Focus styles */
  --gk-checkbox-focus-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
  
  /* Label colors */
  --gk-checkbox-label-color: #213547;
  --gk-checkbox-label-disabled-color: #9ca3af;
  
  /* Typography */
  --gk-checkbox-font-family: inherit;
  --gk-checkbox-font-size: 14px;
  --gk-checkbox-line-height: 1.5;
  
  /* Spacing */
  --gk-checkbox-gap: 8px;
  --gk-checkbox-transition: all 0.2s ease-in-out;
}
```

### Size Customization

```css
:root {
  /* Small size */
  --gk-checkbox-small-size: 16px;
  --gk-checkbox-small-font-size: 12px;
  
  /* Medium size (default) */
  --gk-checkbox-medium-size: 18px;
  --gk-checkbox-medium-font-size: 14px;
  
  /* Large size */
  --gk-checkbox-large-size: 20px;
  --gk-checkbox-large-font-size: 16px;
}
```

### Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
  :root {
    --gk-checkbox-bg: #1f2937;
    --gk-checkbox-border: #374151;
    --gk-checkbox-disabled-bg: #111827;
    --gk-checkbox-disabled-border: #374151;
    --gk-checkbox-label-color: #f9fafb;
    --gk-checkbox-label-disabled-color: #6b7280;
  }
}
```

## ♿ Accessibility

### Features

- **Keyboard Navigation**: Full keyboard support with Tab and Space keys
- **Screen Readers**: Proper ARIA attributes and semantic markup
- **Focus Management**: Visible focus indicators and proper focus handling
- **High Contrast**: Compatible with high contrast mode
- **Form Integration**: Works seamlessly with HTML forms and validation

### Best Practices

```html
<!-- Accessible checkbox with proper labeling -->
<gk-checkbox 
  id="newsletter-checkbox"
  name="newsletter"
  value="subscribe"
  aria-describedby="newsletter-help">
  Subscribe to our newsletter
</gk-checkbox>
<div id="newsletter-help">
  We'll send you updates about new features and products.
</div>

<!-- Checkbox group with proper structure -->
<fieldset>
  <legend>Select your interests:</legend>
  
  <gk-checkbox 
    id="tech-interest"
    name="interests"
    value="technology">
    Technology
  </gk-checkbox>
  
  <gk-checkbox 
    id="design-interest"
    name="interests"
    value="design">
    Design
  </gk-checkbox>
  
  <gk-checkbox 
    id="business-interest"
    name="interests"
    value="business">
    Business
  </gk-checkbox>
</fieldset>

<!-- Required checkbox with validation -->
<gk-checkbox 
  id="terms-checkbox"
  name="terms"
  value="accepted"
  required
  aria-describedby="terms-error">
  I agree to the terms and conditions
</gk-checkbox>
<div id="terms-error" role="alert">
  You must agree to the terms and conditions to continue.
</div>
```

### ARIA Support

The checkbox component automatically handles:
- `role="checkbox"` for proper screen reader support
- `tabindex="0"` for keyboard navigation
- `aria-disabled` when disabled
- `aria-checked` based on checked state
- `aria-required` when required
- Focus management and indicators

## 🧪 Testing

### Unit Tests

The checkbox component includes comprehensive tests:

```bash
# Run checkbox tests
npm test -- checkbox.test.ts

# Run with coverage
npm run test:coverage
```

### Manual Testing

```javascript
// Test state management
const checkbox = document.querySelector('gk-checkbox');
checkbox.checked = true;
console.log(checkbox.checked); // true

// Test validation
checkbox.required = true;
checkbox.checked = false;
console.log(checkbox.checkValidity()); // false

// Test events
checkbox.addEventListener('change', (e) => {
  console.log('Checkbox changed:', e.detail.checked);
});

// Test focus management
checkbox.focus();
console.log(document.activeElement === checkbox); // true
```

### Form Testing

```javascript
// Test form integration
const form = document.querySelector('form');
const checkbox = form.querySelector('gk-checkbox');

// Test form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log('Form data:', Object.fromEntries(formData));
});

// Test validation
checkbox.required = true;
checkbox.checked = false;
console.log(checkbox.checkValidity()); // false

checkbox.checked = true;
console.log(checkbox.checkValidity()); // true
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

View interactive examples and test the checkbox component:

```bash
npm run storybook
```

Then navigate to **Components > Checkbox** in the sidebar to explore:
- All sizes and states
- Form integration examples
- Interactive controls
- Accessibility testing
- Code examples

## 🔧 Development

### Component Structure

```
checkbox/
├── checkbox.ts          # Main component implementation
├── checkbox.test.ts     # Unit tests
├── checkbox.stories.ts  # Storybook stories
└── README.md           # This documentation
```

### Key Implementation Details

- **Shadow DOM**: Uses `attachShadow({ mode: 'open' })` for style encapsulation
- **Observed Attributes**: Monitors all checkbox attributes for changes
- **Event Delegation**: Efficiently handles user interactions
- **Form Integration**: Seamless HTML form support
- **Custom Styling**: Beautiful custom checkbox design with CSS
- **Performance**: Minimal DOM manipulation and efficient re-rendering

## 🚀 Roadmap

### Planned Features

- [ ] Indeterminate state support
- [ ] Checkbox groups with validation
- [ ] Custom checkmark icons
- [ ] Animation options
- [ ] RTL support
- [ ] Custom color variants
- [ ] Loading states
- [ ] Error states with visual feedback

### Migration Notes

When new features are added, they will be backward compatible. Breaking changes will be clearly documented with migration guides.

---

**Made with ❤️ by the Grove Keeper team**
