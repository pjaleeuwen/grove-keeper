import type { Meta, StoryObj } from '@storybook/web-components';
import type { GkSelect } from './select';

interface SelectArgs {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  multiple?: boolean;
  children?: string;
}

const meta: Meta<SelectArgs> = {
  title: 'Components/Select',
  component: 'gk-select',
  args: {
    size: 'medium',
    disabled: false,
    required: false,
    name: 'select',
    value: '',
    multiple: false,
    children: `
      <option value="">Choose an option...</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    `,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the select field',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the select is required',
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute for form submission',
    },
    value: {
      control: { type: 'text' },
      description: 'The current selected value',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Whether multiple options can be selected',
    },
    children: {
      control: { type: 'text' },
      description: 'The select options (HTML)',
    },
  },
  render: args => {
    const select = document.createElement('gk-select');
    select.innerHTML = args.children || `
      <option value="">Choose an option...</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    `;
    if (args.size) select.setAttribute('size', args.size);
    if (args.disabled) select.setAttribute('disabled', '');
    if (args.required) select.setAttribute('required', '');
    if (args.name) select.setAttribute('name', args.name);
    if (args.value) select.setAttribute('value', args.value);
    if (args.multiple) select.setAttribute('multiple', '');
    return select;
  },
};

export default meta;
type Story = StoryObj<SelectArgs>;

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
export const WithValue: Story = {
  args: {
    value: 'option2',
    children: `
      <option value="">Choose an option...</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    `,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'option1',
    children: `
      <option value="">Choose an option...</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    `,
  },
};

export const Required: Story = {
  args: {
    required: true,
    children: `
      <option value="">Please select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    `,
  },
};

// Multiple selection
export const Multiple: Story = {
  args: {
    multiple: true,
    children: `
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
    `,
  },
};

// Color selection
export const ColorSelection: Story = {
  args: {
    name: 'color',
    children: `
      <option value="">Choose a color...</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="yellow">Yellow</option>
      <option value="purple">Purple</option>
      <option value="orange">Orange</option>
    `,
  },
};

// Country selection
export const CountrySelection: Story = {
  args: {
    name: 'country',
    children: `
      <option value="">Select your country...</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="de">Germany</option>
      <option value="fr">France</option>
      <option value="jp">Japan</option>
      <option value="au">Australia</option>
    `,
  },
};

// Size preference
export const SizePreference: Story = {
  args: {
    name: 'size',
    children: `
      <option value="">Select size...</option>
      <option value="xs">Extra Small (XS)</option>
      <option value="s">Small (S)</option>
      <option value="m">Medium (M)</option>
      <option value="l">Large (L)</option>
      <option value="xl">Extra Large (XL)</option>
      <option value="xxl">2X Large (XXL)</option>
    `,
  },
};

// Priority selection
export const PrioritySelection: Story = {
  args: {
    name: 'priority',
    required: true,
    children: `
      <option value="">Select priority...</option>
      <option value="low">Low Priority</option>
      <option value="medium">Medium Priority</option>
      <option value="high">High Priority</option>
      <option value="urgent">Urgent</option>
    `,
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
      const select = document.createElement('gk-select');
      select.setAttribute('size', size);
      select.innerHTML = `
        <option value="">${size.charAt(0).toUpperCase() + size.slice(1)} select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      `;
      container.appendChild(select);
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

    // Country selection
    const countryLabel = document.createElement('label');
    countryLabel.textContent = 'Country';
    countryLabel.style.fontWeight = '500';
    countryLabel.style.marginTop = '8px';
    form.appendChild(countryLabel);

    const countrySelect = document.createElement('gk-select');
    countrySelect.setAttribute('name', 'country');
    countrySelect.setAttribute('required', '');
    countrySelect.innerHTML = `
      <option value="">Select your country...</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="de">Germany</option>
      <option value="fr">France</option>
    `;
    form.appendChild(countrySelect);

    // Submit button
    const submitButton = document.createElement('gk-button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '16px';
    form.appendChild(submitButton);

    return form;
  },
};

// Dynamic options
export const DynamicOptions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';

    const select = document.createElement('gk-select');
    select.setAttribute('name', 'dynamic');
    select.innerHTML = '<option value="">Loading...</option>';
    container.appendChild(select);

    const addButton = document.createElement('gk-button');
    addButton.textContent = 'Add Option';
    addButton.addEventListener('click', () => {
      const gkSelect = select as GkSelect;
      const optionValue = `option${gkSelect.options.length}`;
      const optionText = `Dynamic Option ${gkSelect.options.length}`;
      gkSelect.addOption(optionValue, optionText);
    });
    container.appendChild(addButton);

    const clearButton = document.createElement('gk-button');
    clearButton.textContent = 'Clear All';
    clearButton.setAttribute('variant', 'secondary');
    clearButton.addEventListener('click', () => {
      const gkSelect = select as GkSelect;
      gkSelect.clearOptions();
      select.innerHTML = '<option value="">No options available</option>';
    });
    container.appendChild(clearButton);

    // Initialize with some options
    const gkSelect = select as GkSelect;
    gkSelect.clearOptions();
    gkSelect.addOption('', 'Choose an option...');
    gkSelect.addOption('option1', 'Option 1');
    gkSelect.addOption('option2', 'Option 2');

    return container;
  },
};
