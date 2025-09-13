import type { Meta, StoryObj } from '@storybook/web-components';
import { GkButton } from './button';

// Register the custom element
if (!customElements.get('gk-button')) {
  customElements.define('gk-button', GkButton);
}

interface ButtonArgs {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: string;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  component: 'gk-button',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states for the Grove Keeper Design System.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The button text content',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<ButtonArgs>;

// Default story
export const Default: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    children: 'Button',
  },
};

// Variant stories
export const Primary: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Primary Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Secondary Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Outline Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Ghost Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

// Size stories
export const Small: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Small Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Medium Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Large Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

// State stories
export const Disabled: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Disabled Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Submit: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Submit Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    type: 'submit',
    children: 'Submit Button',
  },
};

export const Reset: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Reset Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    type: 'reset',
    children: 'Reset Button',
  },
};

// Combined examples
export const LargePrimary: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Large Primary';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Primary',
  },
};

export const SmallOutline: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Small Outline';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    variant: 'outline',
    size: 'small',
    children: 'Small Outline',
  },
};

export const DisabledGhost: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Disabled Ghost';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
  args: {
    variant: 'ghost',
    disabled: true,
    children: 'Disabled Ghost',
  },
};

// Interactive story
export const Interactive: Story = {
  render: (args) => {
    const button = document.createElement('gk-button');
    button.textContent = args.children || 'Click me!';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    
    button.addEventListener('click', () => {
      console.log('Button clicked!');
      button.textContent = 'Clicked!';
      setTimeout(() => {
        button.textContent = 'Click me!';
      }, 1000);
    });
    
    return button;
  },
  args: {
    children: 'Click me!',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      padding: 2rem;
    `;
    
    const variants = ['primary', 'secondary', 'outline', 'ghost'];
    const sizes = ['small', 'medium', 'large'];
    
    variants.forEach(variant => {
      const variantGroup = document.createElement('div');
      variantGroup.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
      `;
      
      const title = document.createElement('h3');
      title.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      title.style.cssText = 'margin: 0 0 0.5rem 0; font-size: 14px; color: #666;';
      variantGroup.appendChild(title);
      
      sizes.forEach(size => {
        const button = document.createElement('gk-button');
        button.setAttribute('variant', variant);
        button.setAttribute('size', size);
        button.textContent = `${size.charAt(0).toUpperCase() + size.slice(1)} ${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
        variantGroup.appendChild(button);
      });
      
      container.appendChild(variantGroup);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive showcase of all button variants and sizes.',
      },
    },
  },
};
