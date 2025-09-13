import type { Meta, StoryObj } from '@storybook/web-components';

interface RadioArgs {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  children?: string;
}

const meta: Meta<RadioArgs> = {
  title: 'Components/Radio',
  component: 'gk-radio',
  args: {
    size: 'medium',
    disabled: false,
    checked: false,
    required: false,
    name: 'radio-group',
    value: 'option1',
    children: 'Radio option',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the radio button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is required',
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute for radio group',
    },
    value: {
      control: { type: 'text' },
      description: 'The value attribute for form submission',
    },
    children: {
      control: { type: 'text' },
      description: 'The radio button label text',
    },
  },
  render: args => {
    const radio = document.createElement('gk-radio');
    radio.innerHTML = args.children || 'Radio option';
    if (args.size) radio.setAttribute('size', args.size);
    if (args.disabled) radio.setAttribute('disabled', '');
    if (args.checked) radio.setAttribute('checked', '');
    if (args.required) radio.setAttribute('required', '');
    if (args.name) radio.setAttribute('name', args.name);
    if (args.value) radio.setAttribute('value', args.value);
    return radio;
  },
};

export default meta;
type Story = StoryObj<RadioArgs>;

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
    children: 'Required option',
  },
};

// Radio group examples
export const RadioGroup: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';

    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    options.forEach(({ value, label }) => {
      const radio = document.createElement('gk-radio');
      radio.setAttribute('name', 'example-group');
      radio.setAttribute('value', value);
      radio.textContent = label;
      container.appendChild(radio);
    });

    return container;
  },
};

// Gender selection
export const GenderSelection: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';

    const genders = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
      { value: 'prefer-not-to-say', label: 'Prefer not to say' },
    ];

    genders.forEach(({ value, label }) => {
      const radio = document.createElement('gk-radio');
      radio.setAttribute('name', 'gender');
      radio.setAttribute('value', value);
      radio.textContent = label;
      container.appendChild(radio);
    });

    return container;
  },
};

// Payment method selection
export const PaymentMethod: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';

    const methods = [
      { value: 'credit-card', label: 'Credit Card' },
      { value: 'paypal', label: 'PayPal' },
      { value: 'bank-transfer', label: 'Bank Transfer' },
      { value: 'crypto', label: 'Cryptocurrency' },
    ];

    methods.forEach(({ value, label }) => {
      const radio = document.createElement('gk-radio');
      radio.setAttribute('name', 'payment-method');
      radio.setAttribute('value', value);
      radio.textContent = label;
      container.appendChild(radio);
    });

    return container;
  },
};

// Size preference
export const SizePreference: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';

    const sizes = [
      { value: 'xs', label: 'Extra Small' },
      { value: 's', label: 'Small' },
      { value: 'm', label: 'Medium' },
      { value: 'l', label: 'Large' },
      { value: 'xl', label: 'Extra Large' },
    ];

    sizes.forEach(({ value, label }) => {
      const radio = document.createElement('gk-radio');
      radio.setAttribute('name', 'size');
      radio.setAttribute('value', value);
      radio.textContent = label;
      container.appendChild(radio);
    });

    return container;
  },
};

// Notification preferences
export const NotificationPreferences: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';

    const preferences = [
      { value: 'all', label: 'All notifications' },
      { value: 'important', label: 'Important only' },
      { value: 'none', label: 'No notifications' },
    ];

    preferences.forEach(({ value, label }) => {
      const radio = document.createElement('gk-radio');
      radio.setAttribute('name', 'notifications');
      radio.setAttribute('value', value);
      radio.textContent = label;
      container.appendChild(radio);
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
      const radio = document.createElement('gk-radio');
      radio.setAttribute('size', size);
      radio.setAttribute('name', 'size-demo');
      radio.setAttribute('value', size);
      radio.textContent = `${size.charAt(0).toUpperCase() + size.slice(1)} radio`;
      container.appendChild(radio);
    });

    return container;
  },
};

// Form example
export const FormExample: Story = {
  render: () => {
    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = '16px';
    form.style.padding = '20px';
    form.style.border = '1px solid #e5e7eb';
    form.style.borderRadius = '8px';

    // Name field
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name';
    nameLabel.style.fontWeight = '500';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('gk-input-text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'Enter your name');
    nameInput.setAttribute('required', '');
    form.appendChild(nameInput);

    // Gender selection
    const genderLabel = document.createElement('label');
    genderLabel.textContent = 'Gender';
    genderLabel.style.fontWeight = '500';
    genderLabel.style.marginTop = '8px';
    form.appendChild(genderLabel);

    const genderContainer = document.createElement('div');
    genderContainer.style.display = 'flex';
    genderContainer.style.flexDirection = 'column';
    genderContainer.style.gap = '8px';

    const genders = ['Male', 'Female', 'Other'];
    genders.forEach(gender => {
      const radio = document.createElement('gk-radio');
      radio.setAttribute('name', 'gender');
      radio.setAttribute('value', gender.toLowerCase());
      radio.textContent = gender;
      genderContainer.appendChild(radio);
    });

    form.appendChild(genderContainer);

    // Submit button
    const submitButton = document.createElement('gk-button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '16px';
    form.appendChild(submitButton);

    return form;
  },
};
