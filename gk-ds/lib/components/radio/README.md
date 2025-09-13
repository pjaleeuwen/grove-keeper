# Radio Component (`gk-radio`)

A versatile and accessible radio button web component for the Grove Keeper Design System. Built with modern web standards and designed for optimal user experience with comprehensive form integration and accessibility features.

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
- **🎨 Custom Styling**: Beautiful custom radio button design with smooth animations

## 📦 Installation

```bash
npm install gk-ds
```

## 🎯 Quick Start

### Basic Usage

```html
<gk-radio>Option 1</gk-radio>
```

### With Attributes

```html
<gk-radio 
  size="large" 
  name="color" 
  value="red"
  required>
  Red
</gk-radio>
```

### Framework Integration

#### React
```jsx
import { GkRadio } from 'gk-ds';
import { useState } from 'react';

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChange = (e) => {
    setSelectedColor(e.detail.value);
  };

  return (
    <div>
      <gk-radio 
        name="color"
        value="red"
        checked={selectedColor === 'red'}
        onChange={handleChange}
      >
        Red
      </gk-radio>
      <gk-radio 
        name="color"
        value="blue"
        checked={selectedColor === 'blue'}
        onChange={handleChange}
      >
        Blue
      </gk-radio>
    </div>
  );
}
```

#### Vue
```vue
<template>
  <div>
    <gk-radio 
      v-model:checked="selectedColor === 'red'"
      name="color"
      value="red"
      @change="handleChange"
    >
      Red
    </gk-radio>
    <gk-radio 
      v-model:checked="selectedColor === 'blue'"
      name="color"
      value="blue"
      @change="handleChange"
    >
      Blue
    </gk-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedColor = ref('');

function handleChange(event) {
  selectedColor.value = event.detail.value;
}
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <div>
      <gk-radio 
        [(checked)]="selectedColor === 'red'"
        name="color"
        value="red"
        (change)="onChange($event)"
      >
        Red
      </gk-radio>
      <gk-radio 
        [(checked)]="selectedColor === 'blue'"
        name="color"
        value="blue"
        (change)="onChange($event)"
      >
        Blue
      </gk-radio>
    </div>
  `
})
export class MyComponent {
  selectedColor = '';

  onChange(event: any) {
    this.selectedColor = event.detail.value;
  }
}
```

## 📚 API Reference

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Radio button size |
| `disabled` | `boolean` | `false` | Whether the radio button is disabled |
| `checked` | `boolean` | `false` | Whether the radio button is checked |
| `required` | `boolean` | `false` | Whether the radio button is required |
| `name` | `string` | `''` | The name attribute for radio group |
| `value` | `string` | `''` | The value attribute for form submission |

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
| `focus()` | Programmatically focus the radio button | None | `void` |
| `blur()` | Remove focus from the radio button | None | `void` |
| `click()` | Programmatically trigger a click | None | `void` |
| `checkValidity()` | Check if the radio button is valid | None | `boolean` |
| `reportValidity()` | Check validity and show error message | None | `boolean` |

### Events

The radio button emits custom events that bubble up:

| Event | Description | Event Detail |
|-------|-------------|--------------|
| `change` | Fired when the radio button state changes | `{ checked: boolean, value: string }` |
| `focus` | Fired when the radio button receives focus | Standard `FocusEvent` |
| `blur` | Fired when the radio button loses focus | Standard `FocusEvent` |

## 🎨 Examples

### Sizes

```html
<!-- Small radio button -->
<gk-radio size="small" name="size" value="small">Small</gk-radio>

<!-- Medium radio button (default) -->
<gk-radio size="medium" name="size" value="medium">Medium</gk-radio>

<!-- Large radio button -->
<gk-radio size="large" name="size" value="large">Large</gk-radio>
```

### States

```html
<!-- Normal state -->
<gk-radio name="option" value="1">Option 1</gk-radio>

<!-- Checked state -->
<gk-radio name="option" value="2" checked>Option 2</gk-radio>

<!-- Disabled state -->
<gk-radio name="option" value="3" disabled>Option 3</gk-radio>

<!-- Disabled and checked -->
<gk-radio name="option" value="4" disabled checked>Option 4</gk-radio>

<!-- Required field -->
<gk-radio name="required" value="yes" required>Required option</gk-radio>
```

### Radio Groups

```html
<!-- Color selection -->
<fieldset>
  <legend>Choose your favorite color:</legend>
  
  <gk-radio name="color" value="red">Red</gk-radio>
  <gk-radio name="color" value="blue">Blue</gk-radio>
  <gk-radio name="color" value="green">Green</gk-radio>
  <gk-radio name="color" value="yellow">Yellow</gk-radio>
</fieldset>

<!-- Gender selection -->
<fieldset>
  <legend>Gender:</legend>
  
  <gk-radio name="gender" value="male">Male</gk-radio>
  <gk-radio name="gender" value="female">Female</gk-radio>
  <gk-radio name="gender" value="other">Other</gk-radio>
  <gk-radio name="gender" value="prefer-not-to-say">Prefer not to say</gk-radio>
</fieldset>
```

### Form Integration

```html
<!-- User preferences form -->
<form id="preferencesForm">
  <fieldset>
    <legend>Notification Preferences</legend>
    
    <gk-radio name="notifications" value="all">All notifications</gk-radio>
    <gk-radio name="notifications" value="important">Important only</gk-radio>
    <gk-radio name="notifications" value="none">No notifications</gk-radio>
  </fieldset>
  
  <fieldset>
    <legend>Theme Preference</legend>
    
    <gk-radio name="theme" value="light">Light theme</gk-radio>
    <gk-radio name="theme" value="dark">Dark theme</gk-radio>
    <gk-radio name="theme" value="auto">Auto (system)</gk-radio>
  </fieldset>
  
  <gk-button type="submit">Save Preferences</gk-button>
</form>

<script>
  document.getElementById('preferencesForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Preferences:', data);
  });
</script>
```

### Event Handling

```html
<gk-radio id="myRadio" name="test" value="test-value">
  Click me!
</gk-radio>

<script>
  const radio = document.getElementById('myRadio');

  // Handle change events
  radio.addEventListener('change', (e) => {
    console.log('Checked:', e.detail.checked);
    console.log('Value:', e.detail.value);
  });

  // Handle focus events
  radio.addEventListener('focus', () => {
    console.log('Radio focused');
  });

  // Handle blur events
  radio.addEventListener('blur', () => {
    console.log('Radio blurred');
  });
</script>
```

### Dynamic State Management

```html
<gk-radio id="dynamicRadio" name="dynamic" value="dynamic-value">
  Dynamic radio
</gk-radio>
<button id="checkRadio">Check</button>
<button id="uncheckRadio">Uncheck</button>
<button id="disableRadio">Disable/Enable</button>

<script>
  const radio = document.getElementById('dynamicRadio');
  const checkBtn = document.getElementById('checkRadio');
  const uncheckBtn = document.getElementById('uncheckRadio');
  const disableBtn = document.getElementById('disableRadio');

  checkBtn.addEventListener('click', () => {
    radio.checked = true;
  });

  uncheckBtn.addEventListener('click', () => {
    radio.checked = false;
  });

  disableBtn.addEventListener('click', () => {
    radio.disabled = !radio.disabled;
  });

  // Watch for changes
  radio.addEventListener('change', (e) => {
    console.log('Radio state changed:', e.detail.checked);
  });
</script>
```

### Radio Group Management

```html
<div id="radioGroup">
  <gk-radio name="choice" value="option1">Option 1</gk-radio>
  <gk-radio name="choice" value="option2">Option 2</gk-radio>
  <gk-radio name="choice" value="option3">Option 3</gk-radio>
</div>

<button id="selectFirst">Select First</button>
<button id="selectLast">Select Last</button>
<button id="clearSelection">Clear Selection</button>

<script>
  const radioGroup = document.getElementById('radioGroup');
  const selectFirstBtn = document.getElementById('selectFirst');
  const selectLastBtn = document.getElementById('selectLast');
  const clearBtn = document.getElementById('clearSelection');

  selectFirstBtn.addEventListener('click', () => {
    const firstRadio = radioGroup.querySelector('gk-radio');
    firstRadio.checked = true;
  });

  selectLastBtn.addEventListener('click', () => {
    const radios = radioGroup.querySelectorAll('gk-radio');
    const lastRadio = radios[radios.length - 1];
    lastRadio.checked = true;
  });

  clearBtn.addEventListener('click', () => {
    const radios = radioGroup.querySelectorAll('gk-radio');
    radios.forEach(radio => {
      radio.checked = false;
    });
  });
</script>
```

## 🎨 Theming

### CSS Custom Properties

The radio component supports theming through CSS custom properties:

```css
:root {
  /* Radio colors */
  --gk-radio-bg: #ffffff;
  --gk-radio-border: #d1d5db;
  --gk-radio-checked-bg: #646cff;
  --gk-radio-checked-border: #646cff;
  
  /* Checkmark colors */
  --gk-radio-dot: #ffffff;
  
  /* Disabled colors */
  --gk-radio-disabled-bg: #f9fafb;
  --gk-radio-disabled-border: #e5e7eb;
  --gk-radio-disabled-checked-bg: #d1d5db;
  --gk-radio-disabled-checked-border: #d1d5db;
  --gk-radio-disabled-dot: #9ca3af;
  
  /* Focus styles */
  --gk-radio-focus-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
  
  /* Label colors */
  --gk-radio-label-color: #213547;
  --gk-radio-label-disabled-color: #9ca3af;
  
  /* Typography */
  --gk-radio-font-family: inherit;
  --gk-radio-font-size: 14px;
  --gk-radio-line-height: 1.5;
  
  /* Spacing */
  --gk-radio-gap: 8px;
  --gk-radio-transition: all 0.2s ease-in-out;
}
```

### Size Customization

```css
:root {
  /* Small size */
  --gk-radio-small-size: 16px;
  --gk-radio-small-font-size: 12px;
  
  /* Medium size (default) */
  --gk-radio-medium-size: 18px;
  --gk-radio-medium-font-size: 14px;
  
  /* Large size */
  --gk-radio-large-size: 20px;
  --gk-radio-large-font-size: 16px;
}
```

### Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
  :root {
    --gk-radio-bg: #1f2937;
    --gk-radio-border: #374151;
    --gk-radio-disabled-bg: #111827;
    --gk-radio-disabled-border: #374151;
    --gk-radio-label-color: #f9fafb;
    --gk-radio-label-disabled-color: #6b7280;
  }
}
```

## ♿ Accessibility

### Features

- **Keyboard Navigation**: Full keyboard support with Tab and arrow keys
- **Screen Readers**: Proper ARIA attributes and semantic markup
- **Focus Management**: Visible focus indicators and proper focus handling
- **High Contrast**: Compatible with high contrast mode
- **Form Integration**: Works seamlessly with HTML forms and validation

### Best Practices

```html
<!-- Accessible radio group with proper structure -->
<fieldset>
  <legend>Choose your preferred contact method:</legend>
  
  <gk-radio 
    id="contact-email"
    name="contact-method"
    value="email"
    aria-describedby="email-help">
    Email
  </gk-radio>
  <div id="email-help">We'll send you updates via email</div>
  
  <gk-radio 
    id="contact-phone"
    name="contact-method"
    value="phone"
    aria-describedby="phone-help">
    Phone
  </gk-radio>
  <div id="phone-help">We'll call you directly</div>
  
  <gk-radio 
    id="contact-sms"
    name="contact-method"
    value="sms"
    aria-describedby="sms-help">
    SMS
  </gk-radio>
  <div id="sms-help">We'll send you text messages</div>
</fieldset>

<!-- Required radio group with validation -->
<fieldset>
  <legend>Do you agree to the terms? <span aria-label="required">*</span></legend>
  
  <gk-radio 
    id="terms-yes"
    name="terms-agreement"
    value="yes"
    required
    aria-describedby="terms-error">
    Yes, I agree
  </gk-radio>
  
  <gk-radio 
    id="terms-no"
    name="terms-agreement"
    value="no"
    required
    aria-describedby="terms-error">
    No, I do not agree
  </gk-radio>
  
  <div id="terms-error" role="alert">
    You must select an option to continue.
  </div>
</fieldset>
```

### ARIA Support

The radio component automatically handles:
- `role="radio"` for proper screen reader support
- `tabindex="0"` for keyboard navigation
- `aria-disabled` when disabled
- `aria-checked` based on checked state
- `aria-required` when required
- Focus management and indicators

## 🧪 Testing

### Unit Tests

The radio component includes comprehensive tests:

```bash
# Run radio tests
npm test -- radio.test.ts

# Run with coverage
npm run test:coverage
```

### Manual Testing

```javascript
// Test state management
const radio = document.querySelector('gk-radio');
radio.checked = true;
console.log(radio.checked); // true

// Test validation
radio.required = true;
radio.checked = false;
console.log(radio.checkValidity()); // false

// Test events
radio.addEventListener('change', (e) => {
  console.log('Radio changed:', e.detail.checked);
});

// Test focus management
radio.focus();
console.log(document.activeElement === radio); // true
```

### Radio Group Testing

```javascript
// Test radio group behavior
const radio1 = document.querySelector('gk-radio[name="group1"]');
const radio2 = document.querySelector('gk-radio[name="group1"]');

// Check first radio
radio1.checked = true;
console.log(radio1.checked); // true
console.log(radio2.checked); // false

// Check second radio - should uncheck first
radio2.checked = true;
console.log(radio1.checked); // false
console.log(radio2.checked); // true
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

View interactive examples and test the radio component:

```bash
npm run storybook
```

Then navigate to **Components > Radio** in the sidebar to explore:
- All sizes and states
- Radio group examples
- Interactive controls
- Accessibility testing
- Code examples

## 🔧 Development

### Component Structure

```
radio/
├── radio.ts          # Main component implementation
├── radio.test.ts     # Unit tests
├── radio.stories.ts  # Storybook stories
└── README.md        # This documentation
```

### Key Implementation Details

- **Shadow DOM**: Uses `attachShadow({ mode: 'open' })` for style encapsulation
- **Observed Attributes**: Monitors all radio attributes for changes
- **Event Delegation**: Efficiently handles user interactions
- **Form Integration**: Seamless HTML form support
- **Custom Styling**: Beautiful custom radio button design with CSS
- **Performance**: Minimal DOM manipulation and efficient re-rendering

## 🚀 Roadmap

### Planned Features

- [ ] Radio group validation utilities
- [ ] Custom radio button icons
- [ ] Animation options
- [ ] RTL support
- [ ] Custom color variants
- [ ] Loading states
- [ ] Error states with visual feedback
- [ ] Radio group management helpers

### Migration Notes

When new features are added, they will be backward compatible. Breaking changes will be clearly documented with migration guides.

---

**Made with ❤️ by the Grove Keeper team**
