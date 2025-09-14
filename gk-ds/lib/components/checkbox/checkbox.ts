// Grove Keeper Design System - Checkbox Web Component

const styles = `
  :host {
    display: inline-block;
  }

  .checkbox-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--gk-spacing-gap-sm, 8px);
    cursor: pointer;
  }

  .checkbox-container:has(input:disabled) {
    cursor: not-allowed;
  }

  input[type="checkbox"] {
    appearance: none;
    width: var(--gk-size-sm, 18px);
    height: var(--gk-size-sm, 18px);
    border: 1px solid var(--gk-color-border-default, #e5e7eb);
    border-radius: var(--gk-radius-sm, 4px);
    background-color: var(--gk-color-bg-primary, white);
    cursor: pointer;
    position: relative;
    transition: all var(--gk-transition-normal, 0.2s ease-in-out);
    flex-shrink: 0;
  }

  input[type="checkbox"]:checked {
    background-color: var(--gk-color-primary, #4a7c59);
    border-color: var(--gk-color-primary, #4a7c59);
  }

  input[type="checkbox"]:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid var(--gk-color-checkmark, white);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  input[type="checkbox"]:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--gk-color-shadow-focus, rgba(74, 124, 89, 0.1));
  }

  input[type="checkbox"]:disabled {
    background-color: var(--gk-color-bg-disabled, #f9fafb);
    border-color: var(--gk-color-border-disabled, #e5e7eb);
    cursor: not-allowed;
  }

  input[type="checkbox"]:disabled:checked {
    background-color: var(--gk-color-gray-300, #d1d5db);
    border-color: var(--gk-color-gray-300, #d1d5db);
  }

  input[type="checkbox"]:disabled:checked::after {
    border-color: var(--gk-color-text-disabled, #9ca3af);
  }

  .checkbox-label {
    font-family: inherit;
    font-size: var(--gk-font-size-sm, 14px);
    line-height: var(--gk-line-height-normal, 1.5);
    color: var(--gk-color-text-primary, #213547);
    user-select: none;
  }

  input[type="checkbox"]:disabled + .checkbox-label {
    color: var(--gk-color-text-disabled, #9ca3af);
  }

  /* Sizes */
  input[size="small"] {
    width: var(--gk-size-xs, 16px);
    height: var(--gk-size-xs, 16px);
  }

  input[size="small"]:checked::after {
    left: var(--gk-spacing-xs, 4px);
    top: var(--gk-spacing-xs, 1px);
    width: var(--gk-spacing-xs, 3px);
    height: var(--gk-spacing-sm, 6px);
  }

  input[size="medium"] {
    width: var(--gk-size-sm, 18px);
    height: var(--gk-size-sm, 18px);
  }

  input[size="large"] {
    width: var(--gk-size-md, 20px);
    height: var(--gk-size-md, 20px);
  }

  input[size="large"]:checked::after {
    left: var(--gk-spacing-sm, 6px);
    top: var(--gk-spacing-xs, 3px);
    width: var(--gk-spacing-sm, 5px);
    height: var(--gk-spacing-md, 10px);
  }

  .checkbox-label[size="small"] {
    font-size: var(--gk-font-size-xs, 12px);
  }

  .checkbox-label[size="medium"] {
    font-size: var(--gk-font-size-sm, 14px);
  }

  .checkbox-label[size="large"] {
    font-size: var(--gk-font-size-md, 16px);
  }

`;

const template = `
  <style>${styles}</style>
  <label class="checkbox-container">
    <input type="checkbox" />
    <span class="checkbox-label">
      <slot></slot>
    </span>
  </label>
`;

export class GkCheckbox extends HTMLElement {
  private shadow: ShadowRoot;
  private input!: HTMLInputElement;
  private label!: HTMLLabelElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = template;
    this.input = this.shadow.querySelector('input')!;
    this.label = this.shadow.querySelector('.checkbox-label')!;
  }

  static get observedAttributes() {
    return ['size', 'disabled', 'checked', 'required', 'name', 'value'];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.updateCheckbox();
    }
  }

  private render() {
    this.updateCheckbox();
  }

  private updateCheckbox() {
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const checked = this.hasAttribute('checked');
    const required = this.hasAttribute('required');
    const name = this.getAttribute('name') || '';
    const value = this.getAttribute('value') || 'on';

    this.input.setAttribute('size', size);
    this.label.setAttribute('size', size);
    this.input.disabled = disabled;
    this.input.checked = checked;
    this.input.required = required;
    this.input.name = name;
    this.input.value = value;
  }

  private setupEventListeners() {
    this.input.addEventListener('change', () => {
      this.dispatchEvent(new CustomEvent('change', {
        detail: { 
          checked: this.input.checked,
          value: this.input.value 
        },
        bubbles: true,
        composed: true
      }));
    });

    this.input.addEventListener('focus', () => {
      this.dispatchEvent(new CustomEvent('focus', {
        bubbles: true,
        composed: true
      }));
    });

    this.input.addEventListener('blur', () => {
      this.dispatchEvent(new CustomEvent('blur', {
        bubbles: true,
        composed: true
      }));
    });
  }

  // Public methods
  public focus() {
    this.input.focus();
  }

  public blur() {
    this.input.blur();
  }

  public click() {
    this.input.click();
  }

  public get checked(): boolean {
    return this.input.checked;
  }

  public set checked(val: boolean) {
    this.input.checked = val;
    if (val) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  public get disabled(): boolean {
    return this.input.disabled;
  }

  public set disabled(val: boolean) {
    this.input.disabled = val;
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  public get value(): string {
    return this.input.value;
  }

  public set value(val: string) {
    this.input.value = val;
    this.setAttribute('value', val);
  }

  public get name(): string {
    return this.input.name;
  }

  public set name(val: string) {
    this.input.name = val;
    this.setAttribute('name', val);
  }

  public get validity(): ValidityState {
    return this.input.validity;
  }

  public checkValidity(): boolean {
    return this.input.checkValidity();
  }

  public reportValidity(): boolean {
    return this.input.reportValidity();
  }
}

// Register the custom element
if (!customElements.get('gk-checkbox')) {
  customElements.define('gk-checkbox', GkCheckbox);
}
