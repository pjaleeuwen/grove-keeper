import type { Meta, StoryObj } from '@storybook/web-components';

interface CheckboxArgs {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  children?: string;
}

const meta: Meta<CheckboxArgs> = {
  title: 'Components/Checkbox',
  component: 'gk-checkbox',
  args: {
    size: 'medium',
    disabled: false,
    checked: false,
    required: false,
    name: 'checkbox',
    value: 'on',
    children: 'Checkbox label',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the checkbox',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is required',
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute for form submission',
    },
    value: {
      control: { type: 'text' },
      description: 'The value attribute for form submission',
    },
    children: {
      control: { type: 'text' },
      description: 'The checkbox label text',
    },
  },
  render: args => {
    const checkbox = document.createElement('gk-checkbox');
    checkbox.innerHTML = args.children || 'Checkbox label';
    if (args.size) checkbox.setAttribute('size', args.size);
    if (args.disabled) checkbox.setAttribute('disabled', '');
    if (args.checked) checkbox.setAttribute('checked', '');
    if (args.required) checkbox.setAttribute('required', '');
    if (args.name) checkbox.setAttribute('name', args.name);
    if (args.value) checkbox.setAttribute('value', args.value);
    return checkbox;
  },
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

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
export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
    children: 'I agree to the terms and conditions',
  },
};

// Form examples
export const WithName: Story = {
  args: {
    name: 'newsletter',
    value: 'subscribe',
    children: 'Subscribe to newsletter',
  },
};

export const WithValue: Story = {
  args: {
    name: 'preferences',
    value: 'email-notifications',
    children: 'Email notifications',
  },
};

// Multiple checkboxes
export const CheckboxGroup: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';

    const checkboxes = [
      { name: 'hobbies', value: 'reading', label: 'Reading' },
      { name: 'hobbies', value: 'gaming', label: 'Gaming' },
      { name: 'hobbies', value: 'sports', label: 'Sports' },
      { name: 'hobbies', value: 'music', label: 'Music' },
    ];

    checkboxes.forEach(({ name, value, label }) => {
      const checkbox = document.createElement('gk-checkbox');
      checkbox.setAttribute('name', name);
      checkbox.setAttribute('value', value);
      checkbox.textContent = label;
      container.appendChild(checkbox);
    });

    return container;
  },
};

// Terms and conditions
export const TermsAndConditions: Story = {
  args: {
    required: true,
    name: 'terms',
    value: 'accepted',
    children: 'I agree to the Terms and Conditions',
  },
};

// Privacy policy
export const PrivacyPolicy: Story = {
  args: {
    name: 'privacy',
    value: 'accepted',
    children: 'I have read and agree to the Privacy Policy',
  },
};

// Newsletter subscription
export const NewsletterSubscription: Story = {
  args: {
    name: 'newsletter',
    value: 'subscribe',
    children: 'Subscribe to our newsletter for updates',
  },
};

// Email preferences
export const EmailPreferences: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';

    const preferences = [
      { name: 'email-prefs', value: 'marketing', label: 'Marketing emails' },
      { name: 'email-prefs', value: 'updates', label: 'Product updates' },
      { name: 'email-prefs', value: 'newsletter', label: 'Newsletter' },
    ];

    preferences.forEach(({ name, value, label }) => {
      const checkbox = document.createElement('gk-checkbox');
      checkbox.setAttribute('name', name);
      checkbox.setAttribute('value', value);
      checkbox.textContent = label;
      container.appendChild(checkbox);
    });

    return container;
  },
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';

    const sizes = ['small', 'medium', 'large'] as const;
    sizes.forEach(size => {
      const checkbox = document.createElement('gk-checkbox');
      checkbox.setAttribute('size', size);
      checkbox.textContent = `${size.charAt(0).toUpperCase() + size.slice(1)} checkbox`;
      container.appendChild(checkbox);
    });

    return container;
  },
};
