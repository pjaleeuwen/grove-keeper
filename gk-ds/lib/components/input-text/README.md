# Input Text Component

A versatile text input web component for the Grove Keeper Design System.

## Features

- **3 Sizes**: Small, Medium, Large
- **Multiple States**: Normal, Disabled, Focus, Invalid
- **Validation**: Required, Min/Max Length, Pattern matching
- **Accessibility**: Full keyboard navigation and screen reader support
- **Dark Mode**: Automatic theme detection
- **TypeScript**: Full type definitions included

## Usage

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

### In JavaScript

```javascript
import { GkInputText } from 'gk-ds';

// Register the component
if (!customElements.get('gk-input-text')) {
  customElements.define('gk-input-text', GkInputText);
}

// Create programmatically
const input = new GkInputText();
input.placeholder = 'Enter text';
input.value = 'Initial value';
document.body.appendChild(input);
```

## API

### Attributes

| Attribute    | Type      | Default | Description                                    |
| ------------ | --------- | ------- | ---------------------------------------------- |
| `size`       | `'small' \| 'medium' \| 'large'` | `'medium'` | Input field size                    |
| `disabled`   | `boolean` | `false` | Whether the input is disabled                  |
| `placeholder`| `string`  | `''`    | Placeholder text for the input                 |
| `value`      | `string`  | `''`    | The current value of the input                 |
| `required`   | `boolean` | `false` | Whether the input is required                  |
| `maxlength`  | `number`  | -       | Maximum number of characters allowed           |
| `minlength`  | `number`  | -       | Minimum number of characters required          |
| `pattern`    | `string`  | -       | Regular expression pattern for validation      |

### Properties

| Property | Type     | Description                       |
| -------- | -------- | --------------------------------- |
| `value`  | `string` | Get/set the input value           |
| `validity` | `ValidityState` | Current validation state    |

### Methods

| Method            | Description                           |
| ----------------- | ------------------------------------- |
| `focus()`         | Programmatically focus the input      |
| `blur()`          | Remove focus from the input           |
| `select()`        | Select all text in the input          |
| `checkValidity()` | Check if the input is valid           |
| `reportValidity()`| Check validity and show error message |

### Events

The input emits custom events that bubble up:

- `input` - Fired when the input value changes (detail: `{ value: string }`)
- `change` - Fired when the input value changes and loses focus (detail: `{ value: string }`)
- `focus` - Fired when the input receives focus
- `blur` - Fired when the input loses focus

## Examples

### Sizes

```html
<gk-input-text size="small" placeholder="Small input"></gk-input-text>
<gk-input-text size="medium" placeholder="Medium input"></gk-input-text>
<gk-input-text size="large" placeholder="Large input"></gk-input-text>
```

### States

```html
<gk-input-text placeholder="Normal input"></gk-input-text>
<gk-input-text disabled value="Disabled input"></gk-input-text>
<gk-input-text required placeholder="Required field"></gk-input-text>
```

### Validation

```html
<gk-input-text 
  required 
  minlength="3" 
  maxlength="20" 
  pattern="[a-zA-Z]+"
  placeholder="Letters only, 3-20 chars">
</gk-input-text>
```

### Event Handling

```javascript
const input = document.querySelector('gk-input-text');

input.addEventListener('input', (e) => {
  console.log('Input value:', e.detail.value);
});

input.addEventListener('change', (e) => {
  console.log('Final value:', e.detail.value);
});

input.addEventListener('focus', () => {
  console.log('Input focused');
});
```

## Styling

The input component uses Shadow DOM for style encapsulation. Styles are automatically applied and cannot be overridden from outside the component.

### CSS Custom Properties

The component respects the following CSS custom properties for theming:

```css
:root {
  --gk-color-primary: #646cff;
  --gk-color-text: #213547;
  --gk-color-border: #d1d5db;
  --gk-color-error: #ef4444;
}
```

## Accessibility

- Full keyboard navigation support
- Proper ARIA attributes
- Focus management
- Screen reader friendly
- High contrast support
- Form validation integration

## Browser Support

- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## Storybook

View all input variants and examples in Storybook:

```bash
npm run storybook
```

Then navigate to "Components > Input Text" in the sidebar.
