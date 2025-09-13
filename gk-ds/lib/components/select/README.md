# Select Component (`gk-select`)

A powerful and accessible select dropdown web component for the Grove Keeper Design System. Built with modern web standards and designed for optimal user experience with comprehensive form integration and accessibility features.

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
- **🎨 Custom Styling**: Beautiful custom select design with animated dropdown arrow
- **🔧 Dynamic Options**: Programmatic option management with add/remove methods

## 📦 Installation

```bash
npm install gk-ds
```

## 🎯 Quick Start

### Basic Usage

```html
<gk-select>
  <option value="">Choose an option...</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</gk-select>
```

### With Attributes

```html
<gk-select 
  size="large" 
  name="color" 
  value="red"
  required>
  <option value="">Choose a color...</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</gk-select>
```

### Framework Integration

#### React
```jsx
import { GkSelect } from 'gk-ds';
import { useState } from 'react';

function App() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.detail.value);
  };

  return (
    <gk-select 
      name="color"
      value={selectedValue}
      onChange={handleChange}
      required
    >
      <option value="">Choose a color...</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </gk-select>
  );
}
```

#### Vue
```vue
<template>
  <gk-select 
    v-model="selectedColor"
    name="color"
    @change="handleChange"
  >
    <option value="">Choose a color...</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
  </gk-select>
</template>

<script setup>
import { ref } from 'vue';

const selectedColor = ref('');

function handleChange(event) {
  console.log('Selected:', event.detail.value);
}
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <gk-select 
      [(ngModel)]="selectedColor"
      name="color"
      (change)="onChange($event)"
    >
      <option value="">Choose a color...</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </gk-select>
  `
})
export class MyComponent {
  selectedColor = '';

  onChange(event: any) {
    console.log('Selected:', event.detail.value);
  }
}
```

## 📚 API Reference

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Select field size |
| `disabled` | `boolean` | `false` | Whether the select is disabled |
| `required` | `boolean` | `false` | Whether the select is required |
| `name` | `string` | `''` | The name attribute for form submission |
| `value` | `string` | `''` | The current selected value |
| `multiple` | `boolean` | `false` | Whether multiple options can be selected |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `value` | `string` | Get/set the selected value |
| `selectedIndex` | `number` | Get/set the selected option index |
| `selectedOptions` | `HTMLCollectionOf<HTMLOptionElement>` | Get currently selected options |
| `options` | `HTMLCollectionOf<HTMLOptionElement>` | Get all available options |
| `validity` | `ValidityState` | Current validation state |

### Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `focus()` | Programmatically focus the select | None | `void` |
| `blur()` | Remove focus from the select | None | `void` |
| `click()` | Programmatically trigger a click | None | `void` |
| `checkValidity()` | Check if the select is valid | None | `boolean` |
| `reportValidity()` | Check validity and show error message | None | `boolean` |
| `addOption(value, text, selected?)` | Add a new option | `value: string, text: string, selected?: boolean` | `HTMLOptionElement` |
| `removeOption(index)` | Remove option by index | `index: number` | `void` |
| `clearOptions()` | Remove all options | None | `void` |

### Events

The select emits custom events that bubble up:

| Event | Description | Event Detail |
|-------|-------------|--------------|
| `change` | Fired when the selection changes | `{ value: string, selectedIndex: number, selectedOptions: Array }` |
| `focus` | Fired when the select receives focus | Standard `FocusEvent` |
| `blur` | Fired when the select loses focus | Standard `FocusEvent` |

## 🎨 Examples

### Sizes

```html
<!-- Small select -->
<gk-select size="small">
  <option value="">Small select</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</gk-select>

<!-- Medium select (default) -->
<gk-select size="medium">
  <option value="">Medium select</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</gk-select>

<!-- Large select -->
<gk-select size="large">
  <option value="">Large select</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</gk-select>
```

### States

```html
<!-- Normal state -->
<gk-select>
  <option value="">Choose an option...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</gk-select>

<!-- With selected value -->
<gk-select value="2">
  <option value="">Choose an option...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</gk-select>

<!-- Disabled state -->
<gk-select disabled value="1">
  <option value="">Choose an option...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</gk-select>

<!-- Required field -->
<gk-select required>
  <option value="">Please select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</gk-select>
```

### Multiple Selection

```html
<!-- Multiple selection -->
<gk-select multiple>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
</gk-select>
```

### Form Integration

```html
<!-- User registration form -->
<form id="registrationForm">
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="name">Name</label>
    <gk-input-text id="name" name="name" required></gk-input-text>
    
    <label for="country">Country</label>
    <gk-select id="country" name="country" required>
      <option value="">Select your country...</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="de">Germany</option>
      <option value="fr">France</option>
    </gk-select>
    
    <label for="size">T-Shirt Size</label>
    <gk-select id="size" name="size">
      <option value="">Select size...</option>
      <option value="xs">Extra Small (XS)</option>
      <option value="s">Small (S)</option>
      <option value="m">Medium (M)</option>
      <option value="l">Large (L)</option>
      <option value="xl">Extra Large (XL)</option>
    </gk-select>
  </fieldset>
  
  <gk-button type="submit">Register</gk-button>
</form>

<script>
  document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Registration data:', data);
  });
</script>
```

### Event Handling

```html
<gk-select id="mySelect" name="test">
  <option value="">Choose an option...</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</gk-select>

<script>
  const select = document.getElementById('mySelect');

  // Handle change events
  select.addEventListener('change', (e) => {
    console.log('Selected value:', e.detail.value);
    console.log('Selected index:', e.detail.selectedIndex);
    console.log('Selected options:', e.detail.selectedOptions);
  });

  // Handle focus events
  select.addEventListener('focus', () => {
    console.log('Select focused');
  });

  // Handle blur events
  select.addEventListener('blur', () => {
    console.log('Select blurred');
  });
</script>
```

### Dynamic Option Management

```html
<gk-select id="dynamicSelect">
  <option value="">Choose an option...</option>
</gk-select>

<button id="addOption">Add Option</button>
<button id="removeLast">Remove Last</button>
<button id="clearAll">Clear All</button>

<script>
  const select = document.getElementById('dynamicSelect');
  const addBtn = document.getElementById('addOption');
  const removeBtn = document.getElementById('removeLast');
  const clearBtn = document.getElementById('clearAll');

  let optionCount = 0;

  addBtn.addEventListener('click', () => {
    optionCount++;
    select.addOption(`option${optionCount}`, `Dynamic Option ${optionCount}`);
  });

  removeBtn.addEventListener('click', () => {
    if (select.options.length > 1) { // Keep at least the placeholder
      select.removeOption(select.options.length - 1);
    }
  });

  clearBtn.addEventListener('click', () => {
    select.clearOptions();
    select.innerHTML = '<option value="">No options available</option>';
  });

  // Initialize with some options
  select.addOption('option1', 'Option 1');
  select.addOption('option2', 'Option 2');
</script>
```

### Programmatic Control

```html
<gk-select id="programmaticSelect">
  <option value="">Choose an option...</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</gk-select>

<button id="selectFirst">Select First</button>
<button id="selectLast">Select Last</button>
<button id="clearSelection">Clear Selection</button>

<script>
  const select = document.getElementById('programmaticSelect');
  const selectFirstBtn = document.getElementById('selectFirst');
  const selectLastBtn = document.getElementById('selectLast');
  const clearBtn = document.getElementById('clearSelection');

  selectFirstBtn.addEventListener('click', () => {
    select.selectedIndex = 1; // Skip placeholder option
  });

  selectLastBtn.addEventListener('click', () => {
    select.selectedIndex = select.options.length - 1;
  });

  clearBtn.addEventListener('click', () => {
    select.selectedIndex = 0; // Select placeholder
  });

  // Watch for changes
  select.addEventListener('change', (e) => {
    console.log('Selection changed to:', e.detail.value);
  });
</script>
```

## 🎨 Theming

### CSS Custom Properties

The select component supports theming through CSS custom properties:

```css
:root {
  /* Select colors */
  --gk-select-bg: #ffffff;
  --gk-select-text: #213547;
  --gk-select-border: #d1d5db;
  --gk-select-border-focus: #646cff;
  
  /* Disabled colors */
  --gk-select-disabled-bg: #f9fafb;
  --gk-select-disabled-text: #9ca3af;
  --gk-select-disabled-border: #e5e7eb;
  
  /* Error colors */
  --gk-select-error-border: #ef4444;
  --gk-select-error-focus: rgba(239, 68, 68, 0.1);
  
  /* Focus styles */
  --gk-select-focus-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
  
  /* Arrow colors */
  --gk-select-arrow: #6b7280;
  --gk-select-arrow-focus: #646cff;
  
  /* Typography */
  --gk-select-font-family: inherit;
  --gk-select-font-size: 14px;
  --gk-select-line-height: 1.5;
  
  /* Border and spacing */
  --gk-select-border-radius: 6px;
  --gk-select-padding: 8px 32px 8px 12px;
  --gk-select-transition: all 0.2s ease-in-out;
}
```

### Size Customization

```css
:root {
  /* Small size */
  --gk-select-small-padding: 6px 28px 6px 10px;
  --gk-select-small-font-size: 12px;
  --gk-select-small-min-height: 28px;
  
  /* Medium size (default) */
  --gk-select-medium-padding: 8px 32px 8px 12px;
  --gk-select-medium-font-size: 14px;
  --gk-select-medium-min-height: 36px;
  
  /* Large size */
  --gk-select-large-padding: 12px 36px 12px 16px;
  --gk-select-large-font-size: 16px;
  --gk-select-large-min-height: 44px;
}
```

### Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
  :root {
    --gk-select-bg: #1f2937;
    --gk-select-text: #f9fafb;
    --gk-select-border: #374151;
    --gk-select-disabled-bg: #111827;
    --gk-select-disabled-text: #6b7280;
    --gk-select-arrow: #9ca3af;
  }
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
<!-- Accessible select with proper labeling -->
<label for="country-select">Country</label>
<gk-select 
  id="country-select"
  name="country"
  required
  aria-describedby="country-help">
  <option value="">Select your country...</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</gk-select>
<div id="country-help">Choose the country where you live</div>

<!-- Select with validation feedback -->
<gk-select 
  id="priority-select"
  name="priority"
  required
  aria-describedby="priority-error"
  aria-invalid="true">
  <option value="">Select priority...</option>
  <option value="low">Low Priority</option>
  <option value="medium">Medium Priority</option>
  <option value="high">High Priority</option>
</gk-select>
<div id="priority-error" role="alert">
  Please select a priority level.
</div>

<!-- Select group with proper structure -->
<div class="select-group">
  <label for="size-select">Size</label>
  <gk-select 
    id="size-select"
    name="size"
    aria-describedby="size-help">
    <option value="">Select size...</option>
    <option value="xs">Extra Small (XS)</option>
    <option value="s">Small (S)</option>
    <option value="m">Medium (M)</option>
    <option value="l">Large (L)</option>
    <option value="xl">Extra Large (XL)</option>
  </gk-select>
  <div id="size-help">
    Choose the size that best fits you.
  </div>
</div>
```

### ARIA Support

The select component automatically handles:
- `role="combobox"` for proper screen reader support
- `tabindex="0"` for keyboard navigation
- `aria-disabled` when disabled
- `aria-required` when required
- `aria-invalid` based on validation state
- Focus management and indicators

## 🧪 Testing

### Unit Tests

The select component includes comprehensive tests:

```bash
# Run select tests
npm test -- select.test.ts

# Run with coverage
npm run test:coverage
```

### Manual Testing

```javascript
// Test value management
const select = document.querySelector('gk-select');
select.value = 'option1';
console.log(select.value); // 'option1'

// Test validation
select.required = true;
select.value = '';
console.log(select.checkValidity()); // false

// Test events
select.addEventListener('change', (e) => {
  console.log('Selection changed:', e.detail.value);
});

// Test focus management
select.focus();
console.log(document.activeElement === select); // true
```

### Option Management Testing

```javascript
// Test dynamic option management
const select = document.querySelector('gk-select');

// Add options
select.addOption('new1', 'New Option 1');
select.addOption('new2', 'New Option 2', true); // Selected

// Remove options
select.removeOption(1);

// Clear all options
select.clearOptions();

// Test programmatic selection
select.selectedIndex = 1;
console.log(select.value); // Value of second option
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

View interactive examples and test the select component:

```bash
npm run storybook
```

Then navigate to **Components > Select** in the sidebar to explore:
- All sizes and states
- Form integration examples
- Interactive controls
- Accessibility testing
- Code examples

## 🔧 Development

### Component Structure

```
select/
├── select.ts          # Main component implementation
├── select.test.ts     # Unit tests
├── select.stories.ts  # Storybook stories
└── README.md         # This documentation
```

### Key Implementation Details

- **Shadow DOM**: Uses `attachShadow({ mode: 'open' })` for style encapsulation
- **Observed Attributes**: Monitors all select attributes for changes
- **Event Delegation**: Efficiently handles user interactions
- **Form Integration**: Seamless HTML form support
- **Custom Styling**: Beautiful custom select design with animated arrow
- **Dynamic Options**: Programmatic option management methods
- **Performance**: Minimal DOM manipulation and efficient re-rendering

## 🚀 Roadmap

### Planned Features

- [ ] Search/filter functionality
- [ ] Custom option rendering
- [ ] Virtual scrolling for large lists
- [ ] Multi-select with tags
- [ ] Custom dropdown positioning
- [ ] Loading states
- [ ] Error states with visual feedback
- [ ] Option groups support
- [ ] Custom icons for options

### Migration Notes

When new features are added, they will be backward compatible. Breaking changes will be clearly documented with migration guides.

---

**Made with ❤️ by the Grove Keeper team**
