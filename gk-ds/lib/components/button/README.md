# Button Component

A versatile button web component for the Grove Keeper Design System.

## Features

- **4 Variants**: Primary, Secondary, Outline, Ghost
- **3 Sizes**: Small, Medium, Large
- **Multiple States**: Normal, Disabled, Focus
- **Accessibility**: Full keyboard navigation and screen reader support
- **Dark Mode**: Automatic theme detection
- **TypeScript**: Full type definitions included

## Usage

### Basic Usage

```html
<gk-button>Click me</gk-button>
```

### With Attributes

```html
<gk-button variant="primary" size="large" disabled>
  Submit Form
</gk-button>
```

### In JavaScript

```javascript
import { GkButton } from 'gk-ds';

// Register the component
if (!customElements.get('gk-button')) {
  customElements.define('gk-button', GkButton);
}

// Create programmatically
const button = new GkButton();
button.textContent = 'Dynamic Button';
document.body.appendChild(button);
```

## API

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

### Methods

| Method | Description |
|--------|-------------|
| `focus()` | Programmatically focus the button |
| `blur()` | Remove focus from the button |
| `click()` | Programmatically trigger a click |

### Events

The button emits standard DOM events:

- `click` - Fired when the button is clicked
- `focus` - Fired when the button receives focus
- `blur` - Fired when the button loses focus

## Examples

### Variants

```html
<gk-button variant="primary">Primary</gk-button>
<gk-button variant="secondary">Secondary</gk-button>
<gk-button variant="outline">Outline</gk-button>
<gk-button variant="ghost">Ghost</gk-button>
```

### Sizes

```html
<gk-button size="small">Small</gk-button>
<gk-button size="medium">Medium</gk-button>
<gk-button size="large">Large</gk-button>
```

### States

```html
<gk-button>Normal</gk-button>
<gk-button disabled>Disabled</gk-button>
<gk-button type="submit">Submit</gk-button>
```

## Styling

The button component uses Shadow DOM for style encapsulation. Styles are automatically applied and cannot be overridden from outside the component.

### CSS Custom Properties

The component respects the following CSS custom properties for theming:

```css
:root {
  --gk-color-primary: #646cff;
  --gk-color-primary-hover: #535bf2;
  --gk-color-text: #213547;
  --gk-color-border: #d1d5db;
}
```

## Accessibility

- Full keyboard navigation support
- Proper ARIA attributes
- Focus management
- Screen reader friendly
- High contrast support

## Browser Support

- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## Storybook

View all button variants and examples in Storybook:

```bash
npm run storybook
```

Then navigate to "Components > Button" in the sidebar.
