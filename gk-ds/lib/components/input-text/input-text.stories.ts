import type { Meta, StoryObj } from '@storybook/web-components';

interface InputTextArgs {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  required?: boolean;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
}

const meta: Meta<InputTextArgs> = {
  title: 'Components/Input Text',
  component: 'gk-input-text',
  args: {
    size: 'medium',
    disabled: false,
    placeholder: 'Enter text...',
    value: '',
    required: false,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the input field',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
    value: {
      control: { type: 'text' },
      description: 'The current value of the input',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
    maxlength: {
      control: { type: 'number' },
      description: 'Maximum number of characters allowed',
    },
    minlength: {
      control: { type: 'number' },
      description: 'Minimum number of characters required',
    },
    pattern: {
      control: { type: 'text' },
      description: 'Regular expression pattern for validation',
    },
  },
  render: args => {
    const input = document.createElement('gk-input-text');
    if (args.size) input.setAttribute('size', args.size);
    if (args.disabled) input.setAttribute('disabled', '');
    if (args.placeholder) input.setAttribute('placeholder', args.placeholder);
    if (args.value) input.setAttribute('value', args.value);
    if (args.required) input.setAttribute('required', '');
    if (args.maxlength) input.setAttribute('maxlength', args.maxlength.toString());
    if (args.minlength) input.setAttribute('minlength', args.minlength.toString());
    if (args.pattern) input.setAttribute('pattern', args.pattern);
    return input;
  },
};

export default meta;
type Story = StoryObj<InputTextArgs>;

// Default story
export const Default: Story = {};

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
export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your name...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'John Doe',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled input',
  },
};

export const Required: Story = {
  args: {
    required: true,
    placeholder: 'This field is required',
  },
};

// Validation stories
export const WithMaxLength: Story = {
  args: {
    maxlength: 10,
    placeholder: 'Max 10 characters',
  },
};

export const WithMinLength: Story = {
  args: {
    minlength: 3,
    placeholder: 'Min 3 characters',
  },
};

export const WithPattern: Story = {
  args: {
    pattern: '[a-zA-Z0-9]+',
    placeholder: 'Only letters and numbers',
  },
};

// Combined validation
export const EmailPattern: Story = {
  args: {
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
    placeholder: 'Enter email address',
  },
};

