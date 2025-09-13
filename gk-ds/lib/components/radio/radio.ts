// Grove Keeper Design System - Radio Web Component

const styles = `
  :host {
    display: inline-block;
  }

  .radio-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .radio-container:has(input:disabled) {
    cursor: not-allowed;
  }

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #d1d5db;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease-in-out;
    flex-shrink: 0;
  }

  input[type="radio"]:checked {
    background-color: #646cff;
    border-color: #646cff;
  }

  input[type="radio"]:checked::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
  }

  input[type="radio"]:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
  }

  input[type="radio"]:disabled {
    background-color: #f9fafb;
    border-color: #e5e7eb;
    cursor: not-allowed;
  }

  input[type="radio"]:disabled:checked {
    background-color: #d1d5db;
    border-color: #d1d5db;
  }

  input[type="radio"]:disabled:checked::after {
    background-color: #9ca3af;
  }

  .radio-label {
    font-family: inherit;
    font-size: 14px;
    line-height: 1.5;
    color: #213547;
    user-select: none;
  }

  input[type="radio"]:disabled + .radio-label {
    color: #9ca3af;
  }

  /* Sizes */
  input[size="small"] {
    width: 16px;
    height: 16px;
  }

  input[size="small"]:checked::after {
    width: 4px;
    height: 4px;
  }

  input[size="medium"] {
    width: 18px;
    height: 18px;
  }

  input[size="large"] {
    width: 20px;
    height: 20px;
  }

  input[size="large"]:checked::after {
    width: 8px;
    height: 8px;
  }

  .radio-label[size="small"] {
    font-size: 12px;
  }

  .radio-label[size="medium"] {
    font-size: 14px;
  }

  .radio-label[size="large"] {
    font-size: 16px;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    input[type="radio"] {
      background-color: #1f2937;
      border-color: #374151;
    }

    input[type="radio"]:checked {
      background-color: #646cff;
      border-color: #646cff;
    }

    input[type="radio"]:disabled {
      background-color: #111827;
      border-color: #374151;
    }

    input[type="radio"]:disabled:checked {
      background-color: #374151;
      border-color: #374151;
    }

    .radio-label {
      color: #f9fafb;
    }

    input[type="radio"]:disabled + .radio-label {
      color: #6b7280;
    }
  }
`;

const template = `
  <style>${styles}</style>
  <label class="radio-container">
    <input type="radio" />
    <span class="radio-label">
      <slot></slot>
    </span>
  </label>
`;

export class GkRadio extends HTMLElement {
  private shadow: ShadowRoot;
  private input!: HTMLInputElement;
  private label!: HTMLLabelElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = template;
    this.input = this.shadow.querySelector('input')!;
    this.label = this.shadow.querySelector('.radio-label')!;
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
      this.updateRadio();
    }
  }

  private render() {
    this.updateRadio();
  }

  private updateRadio() {
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const checked = this.hasAttribute('checked');
    const required = this.hasAttribute('required');
    const name = this.getAttribute('name') || '';
    const value = this.getAttribute('value') || '';

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
      if (this.input.checked) {
        this.uncheckOtherRadiosInGroup();
      }
      
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

  private uncheckOtherRadiosInGroup() {
    const name = this.input.name;
    if (!name) return;

    // Find all other radio buttons in the same group
    const allRadios = document.querySelectorAll(`gk-radio[name="${name}"]`);
    allRadios.forEach(radio => {
      if (radio !== this) {
        (radio as GkRadio).checked = false;
      }
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
      this.uncheckOtherRadiosInGroup();
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
if (!customElements.get('gk-radio')) {
  customElements.define('gk-radio', GkRadio);
}
