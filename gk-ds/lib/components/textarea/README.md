# Textarea Component (`gk-textarea`)

A powerful and accessible textarea web component for the Grove Keeper Design System. Built with modern web standards and designed for optimal user experience with comprehensive validation support and accessibility features.

## 🚀 Features

- **📏 Flexible Sizing**: Small, Medium, and Large sizes
- **✅ Built-in Validation**: Required, Min/Max Length support
- **♿ Accessibility**: WCAG 2.1 compliant with full keyboard navigation
- **🎯 Focus Management**: Proper focus indicators and management
- **🔧 TypeScript**: Full type definitions and IntelliSense support
- **🎭 Shadow DOM**: Style encapsulation and isolation
- **⚡ Performance**: Lightweight and optimized for fast rendering
- **📱 Responsive**: Mobile-first design with touch-friendly interactions
- **📝 Multi-line Support**: Native textarea functionality with resize capability

## 📦 Installation

```bash
npm install gk-ds
```

## 🎯 Quick Start

### Basic Usage

```html
<gk-textarea></gk-textarea>
```

### With Attributes

```html
<gk-textarea 
  size="large" 
  placeholder="Enter your message..." 
  required 
  maxlength="500"
  rows="5">
</gk-textarea>
```

### Framework Integration

#### React
```jsx
import { GkTextarea } from 'gk-ds';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.detail.value);
  };

  return (
    <gk-textarea 
      placeholder="Enter your feedback"
      value={value}
      onInput={handleInput}
      required
      rows={4}
    />
  );
}
```

#### Vue
```vue
<template>
  <gk-textarea 
    v-model="message"
    placeholder="Enter your message"
    required
    rows="5"
    @input="handleInput"
  />
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');

function handleInput(event) {
  console.log('Textarea value:', event.detail.value);
}
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <gk-textarea 
      [(ngModel)]="message"
      placeholder="Enter your message"
      required
      rows="4"
      (input)="onInput($event)"
    ></gk-textarea>
  `
})
export class MyComponent {
  message = '';

  onInput(event: any) {
    console.log('Textarea value:', event.detail.value);
  }
}
```

## 📚 API Reference

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Textarea field size |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled |
| `placeholder` | `string` | `''` | Placeholder text for the textarea |
| `value` | `string` | `''` | The current value of the textarea |
| `required` | `boolean` | `false` | Whether the textarea is required |
| `maxlength` | `number` | - | Maximum number of characters allowed |
| `minlength` | `number` | - | Minimum number of characters required |
| `rows` | `number` | - | Number of visible text lines |
| `cols` | `number` | - | Visible width of the textarea |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `value` | `string` | Get/set the textarea value |
| `validity` | `ValidityState` | Current validation state |
| `disabled` | `boolean` | Get/set the disabled state |

### Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `focus()` | Programmatically focus the textarea | None | `void` |
| `blur()` | Remove focus from the textarea | None | `void` |
| `select()` | Select all text in the textarea | None | `void` |
| `checkValidity()` | Check if the textarea is valid | None | `boolean` |
| `reportValidity()` | Check validity and show error message | None | `boolean` |

### Events

The textarea emits custom events that bubble up:

| Event | Description | Event Detail |
|-------|-------------|--------------|
| `input` | Fired when the textarea value changes | `{ value: string }` |
| `change` | Fired when the textarea value changes and loses focus | `{ value: string }` |
| `focus` | Fired when the textarea receives focus | Standard `FocusEvent` |
| `blur` | Fired when the textarea loses focus | Standard `FocusEvent` |

## 🎨 Examples

### Sizes

```html
<!-- Small textarea -->
<gk-textarea size="small" placeholder="Small textarea"></gk-textarea>

<!-- Medium textarea (default) -->
<gk-textarea size="medium" placeholder="Medium textarea"></gk-textarea>

<!-- Large textarea -->
<gk-textarea size="large" placeholder="Large textarea"></gk-textarea>
```

### States

```html
<!-- Normal state -->
<gk-textarea placeholder="Normal textarea"></gk-textarea>

<!-- Disabled state -->
<gk-textarea disabled value="Disabled textarea"></gk-textarea>

<!-- Required field -->
<gk-textarea required placeholder="Required field"></gk-textarea>

<!-- With initial value -->
<gk-textarea value="Initial value"></gk-textarea>
```

### Validation Examples

```html
<!-- Required field -->
<gk-textarea required placeholder="This field is required"></gk-textarea>

<!-- Length validation -->
<gk-textarea 
  minlength="10" 
  maxlength="200" 
  placeholder="10-200 characters">
</gk-textarea>

<!-- Contact form textarea -->
<gk-textarea 
  required
  minlength="20"
  maxlength="500"
  placeholder="Please provide detailed feedback (20-500 characters)"
  rows="5">
</gk-textarea>
```

### Rows and Columns

```html
<!-- Custom rows -->
<gk-textarea rows="6" placeholder="6 rows textarea"></gk-textarea>

<!-- Custom columns -->
<gk-textarea cols="50" placeholder="50 columns textarea"></gk-textarea>

<!-- Both rows and columns -->
<gk-textarea rows="4" cols="60" placeholder="4 rows, 60 columns"></gk-textarea>
```

### Form Integration

```html
<!-- Contact form -->
<form id="contactForm">
  <gk-input-text 
    name="name" 
    placeholder="Your Name" 
    required>
  </gk-input-text>
  
  <gk-input-text 
    name="email" 
    type="email" 
    placeholder="Your Email" 
    required>
  </gk-input-text>
  
  <gk-textarea 
    name="message" 
    placeholder="Your Message" 
    required
    rows="5"
    minlength="10">
  </gk-textarea>
  
  <gk-button type="submit">Send Message</gk-button>
</form>

<script>
  document.getElementById('contactForm').addEventListener('submit', (e) => {
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
<gk-textarea id="myTextarea" placeholder="Type something..."></gk-textarea>

<script>
  const textarea = document.getElementById('myTextarea');

  // Handle input events
  textarea.addEventListener('input', (e) => {
    console.log('Current value:', e.detail.value);
  });

  // Handle change events
  textarea.addEventListener('change', (e) => {
    console.log('Final value:', e.detail.value);
  });

  // Handle focus events
  textarea.addEventListener('focus', () => {
    console.log('Textarea focused');
  });

  // Handle blur events
  textarea.addEventListener('blur', () => {
    console.log('Textarea blurred');
  });
</script>
```

### Dynamic Value Management

```html
<gk-textarea id="dynamicTextarea"></gk-textarea>
<button id="setValue">Set Value</button>
<button id="clearValue">Clear Value</button>

<script>
  const textarea = document.getElementById('dynamicTextarea');
  const setBtn = document.getElementById('setValue');
  const clearBtn = document.getElementById('clearValue');

  setBtn.addEventListener('click', () => {
    textarea.value = 'Dynamic value set!\nThis is a multi-line text.';
  });

  clearBtn.addEventListener('click', () => {
    textarea.value = '';
  });

  // Watch for value changes
  textarea.addEventListener('input', (e) => {
    console.log('Value changed to:', e.detail.value);
  });
</script>
```

## 🎨 Theming

### CSS Custom Properties

The textarea component supports theming through CSS custom properties:

```css
:root {
  /* Textarea colors */
  --gk-textarea-bg: #ffffff;
  --gk-textarea-text: #213547;
  --gk-textarea-border: #d1d5db;
  --gk-textarea-border-focus: #646cff;
  
  /* Placeholder colors */
  --gk-textarea-placeholder: #9ca3af;
  
  /* Disabled colors */
  --gk-textarea-disabled-bg: #f9fafb;
  --gk-textarea-disabled-text: #9ca3af;
  --gk-textarea-disabled-border: #e5e7eb;
  
  /* Error colors */
  --gk-textarea-error-border: #ef4444;
  --gk-textarea-error-focus: rgba(239, 68, 68, 0.1);
  
  /* Focus styles */
  --gk-textarea-focus-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
  
  /* Typography */
  --gk-textarea-font-family: inherit;
  --gk-textarea-font-size: 14px;
  --gk-textarea-line-height: 1.5;
  
  /* Border and spacing */
  --gk-textarea-border-radius: 6px;
  --gk-textarea-padding: 8px 12px;
  --gk-textarea-transition: all 0.2s ease-in-out;
  
  /* Resize behavior */
  --gk-textarea-resize: vertical;
  --gk-textarea-min-height: 80px;
}
```

### Size Customization

```css
:root {
  /* Small size */
  --gk-textarea-small-padding: 6px 10px;
  --gk-textarea-small-font-size: 12px;
  --gk-textarea-small-min-height: 60px;
  
  /* Medium size (default) */
  --gk-textarea-medium-padding: 8px 12px;
  --gk-textarea-medium-font-size: 14px;
  --gk-textarea-medium-min-height: 80px;
  
  /* Large size */
  --gk-textarea-large-padding: 12px 16px;
  --gk-textarea-large-font-size: 16px;
  --gk-textarea-large-min-height: 100px;
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
<!-- Accessible textarea with proper labeling -->
<label for="feedback-textarea">Feedback</label>
<gk-textarea 
  id="feedback-textarea"
  required
  aria-describedby="feedback-help"
  placeholder="Please provide your feedback">
</gk-textarea>
<div id="feedback-help">Your feedback helps us improve our service.</div>

<!-- Textarea with validation feedback -->
<gk-textarea 
  id="message"
  required
  minlength="10"
  aria-describedby="message-error"
  aria-invalid="true">
</gk-textarea>
<div id="message-error" role="alert">
  Message must be at least 10 characters long.
</div>

<!-- Textarea group with proper structure -->
<div class="textarea-group">
  <label for="description">Description</label>
  <gk-textarea 
    id="description"
    required
    rows="4"
    aria-describedby="description-help">
  </gk-textarea>
  <div id="description-help">
    Provide a detailed description of your request.
  </div>
</div>
```

### ARIA Support

The textarea component automatically handles:
- `role="textbox"` for proper screen reader support
- `tabindex="0"` for keyboard navigation
- `aria-disabled` when disabled
- `aria-required` when required
- `aria-invalid` based on validation state
- Focus management and indicators

## 🧪 Testing

### Unit Tests

The textarea component includes comprehensive tests:

```bash
# Run textarea tests
npm test -- textarea.test.ts

# Run with coverage
npm run test:coverage
```

### Manual Testing

```javascript
// Test value management
const textarea = document.querySelector('gk-textarea');
textarea.value = 'Test value';
console.log(textarea.value); // 'Test value'

// Test validation
textarea.required = true;
textarea.value = '';
console.log(textarea.checkValidity()); // false

// Test events
textarea.addEventListener('input', (e) => {
  console.log('Input event:', e.detail.value);
});

textarea.addEventListener('change', (e) => {
  console.log('Change event:', e.detail.value);
});

// Test focus management
textarea.focus();
console.log(document.activeElement === textarea); // true
```

### Validation Testing

```javascript
// Test different validation scenarios
const textarea = document.querySelector('gk-textarea');

// Test required validation
textarea.required = true;
textarea.value = '';
console.log(textarea.checkValidity()); // false

// Test length validation
textarea.minlength = 10;
textarea.value = 'abc';
console.log(textarea.checkValidity()); // false

textarea.value = 'abcdefghij';
console.log(textarea.checkValidity()); // true

// Test multiline content
textarea.value = 'Line 1\nLine 2\nLine 3';
console.log(textarea.value); // 'Line 1\nLine 2\nLine 3'
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

View interactive examples and test the textarea component:

```bash
npm run storybook
```

Then navigate to **Components > Textarea** in the sidebar to explore:
- All sizes and states
- Validation examples
- Interactive controls
- Accessibility testing
- Code examples

## 🔧 Development

### Component Structure

```
textarea/
├── textarea.ts          # Main component implementation
├── textarea.test.ts     # Unit tests
├── textarea.stories.ts  # Storybook stories
└── README.md           # This documentation
```

### Key Implementation Details

- **Shadow DOM**: Uses `attachShadow({ mode: 'open' })` for style encapsulation
- **Observed Attributes**: Monitors all textarea attributes for changes
- **Event Delegation**: Efficiently handles user interactions
- **Validation Integration**: Seamless HTML5 validation support
- **Performance**: Minimal DOM manipulation and efficient re-rendering
- **Resize Support**: Native textarea resize functionality

## 🚀 Roadmap

### Planned Features

- [ ] Auto-resize based on content
- [ ] Character count indicator
- [ ] Rich text editor integration
- [ ] Markdown support
- [ ] Syntax highlighting for code
- [ ] Drag and drop file support
- [ ] Undo/redo functionality
- [ ] Custom resize handles

### Migration Notes

When new features are added, they will be backward compatible. Breaking changes will be clearly documented with migration guides.

---

**Made with ❤️ by the Grove Keeper team**
