import type { Meta, StoryObj } from '@storybook/web-components';

interface ButtonArgs {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: string;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  component: 'gk-button',
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
    children: 'Click me!',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type',
    },
    children: {
      control: { type: 'text' },
      description: 'The button content (HTML)',
    },
  },
  render: args => {
    const button = document.createElement('gk-button');
    button.innerHTML = args.children || 'Button';
    if (args.variant) button.setAttribute('variant', args.variant);
    if (args.size) button.setAttribute('size', args.size);
    if (args.disabled) button.setAttribute('disabled', '');
    if (args.type) button.setAttribute('type', args.type);
    return button;
  },
};

export default meta;
type Story = StoryObj<ButtonArgs>;

// Default story
export const Default: Story = {};

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

// State stories
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    type: 'submit',
  },
};

export const Reset: Story = {
  args: {
    type: 'reset',
  },
};
