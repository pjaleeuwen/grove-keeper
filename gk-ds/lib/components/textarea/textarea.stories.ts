import type { Meta, StoryObj } from '@storybook/web-components';

interface TextareaArgs {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  required?: boolean;
  maxlength?: number;
  minlength?: number;
  rows?: number;
  cols?: number;
}

const meta: Meta<TextareaArgs> = {
  title: 'Components/Textarea',
  component: 'gk-textarea',
  args: {
    size: 'medium',
    disabled: false,
    placeholder: 'Enter your message...',
    value: '',
    required: false,
    rows: 4,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the textarea field',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the textarea',
    },
    value: {
      control: { type: 'text' },
      description: 'The current value of the textarea',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is required',
    },
    maxlength: {
      control: { type: 'number' },
      description: 'Maximum number of characters allowed',
    },
    minlength: {
      control: { type: 'number' },
      description: 'Minimum number of characters required',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text lines',
    },
    cols: {
      control: { type: 'number' },
      description: 'Visible width of the textarea',
    },
  },
  render: args => {
    const textarea = document.createElement('gk-textarea');
    if (args.size) textarea.setAttribute('size', args.size);
    if (args.disabled) textarea.setAttribute('disabled', '');
    if (args.placeholder) textarea.setAttribute('placeholder', args.placeholder);
    if (args.value) textarea.setAttribute('value', args.value);
    if (args.required) textarea.setAttribute('required', '');
    if (args.maxlength) textarea.setAttribute('maxlength', args.maxlength.toString());
    if (args.minlength) textarea.setAttribute('minlength', args.minlength.toString());
    if (args.rows) textarea.setAttribute('rows', args.rows.toString());
    if (args.cols) textarea.setAttribute('cols', args.cols.toString());
    return textarea;
  },
};

export default meta;
type Story = StoryObj<TextareaArgs>;

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
    placeholder: 'Tell us about your experience...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is a pre-filled textarea with some content.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled',
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
    maxlength: 100,
    placeholder: 'Max 100 characters',
  },
};

export const WithMinLength: Story = {
  args: {
    minlength: 10,
    placeholder: 'Min 10 characters',
  },
};

// Size and rows
export const WithRows: Story = {
  args: {
    rows: 6,
    placeholder: '6 rows textarea',
  },
};

export const WithCols: Story = {
  args: {
    cols: 50,
    placeholder: '50 columns textarea',
  },
};

// Combined validation
export const ContactForm: Story = {
  args: {
    required: true,
    minlength: 20,
    maxlength: 500,
    placeholder: 'Please provide detailed feedback (20-500 characters)',
    rows: 5,
  },
};

// Long content
export const WithLongContent: Story = {
  args: {
    value: 'This is a longer piece of text that demonstrates how the textarea handles content that spans multiple lines. It shows the scrolling behavior and how the textarea adapts to different amounts of content. The textarea component provides a good user experience for entering longer text content.',
    rows: 6,
  },
};
