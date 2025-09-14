// Grove Keeper Design System - Text Input Web Component

const styles = `
  :host {
    display: inline-block;
  }

  .input-container {
    position: relative;
    display: inline-block;
  }

  input {
    font-family: inherit;
    font-size: var(--gk-font-size-sm, 14px);
    line-height: var(--gk-line-height-normal, 1.5);
    border: 1px solid var(--gk-color-border-default, #e5e7eb);
    border-radius: var(--gk-radius-md, 6px);
    padding: var(--gk-spacing-md, 8px) var(--gk-spacing-lg, 12px);
    background-color: var(--gk-color-bg-primary, white);
    color: var(--gk-color-text-primary, #213547);
    outline: none;
    transition: all var(--gk-transition-normal, 0.2s ease-in-out);
    width: 100%;
    box-sizing: border-box;
  }

  input:focus {
    border-color: var(--gk-color-border-focus, #4a7c59);
    box-shadow: 0 0 0 3px var(--gk-color-shadow-focus, rgba(74, 124, 89, 0.1));
  }

  input:disabled {
    background-color: var(--gk-color-bg-disabled, #f9fafb);
    color: var(--gk-color-text-disabled, #9ca3af);
    cursor: not-allowed;
    border-color: var(--gk-color-border-disabled, #e5e7eb);
  }

  input::placeholder {
    color: var(--gk-color-text-disabled, #9ca3af);
  }

  input:invalid {
    border-color: var(--gk-color-border-error, #ef4444);
  }

  input:invalid:focus {
    border-color: var(--gk-color-border-error, #ef4444);
    box-shadow: 0 0 0 3px var(--gk-color-shadow-error, rgba(239, 68, 68, 0.1));
  }

  /* Sizes */
  input[size="small"] {
    padding: var(--gk-spacing-sm, 6px) var(--gk-spacing-md, 10px);
    font-size: var(--gk-font-size-xs, 12px);
    min-height: var(--gk-height-xs, 28px);
  }

  input[size="medium"] {
    padding: var(--gk-spacing-md, 8px) var(--gk-spacing-lg, 12px);
    font-size: var(--gk-font-size-sm, 14px);
    min-height: var(--gk-height-sm, 36px);
  }

  input[size="large"] {
    padding: var(--gk-spacing-lg, 12px) var(--gk-spacing-xl, 16px);
    font-size: var(--gk-font-size-md, 16px);
    min-height: var(--gk-height-md, 44px);
  }

`;

const template = `
  <style>${styles}</style>
  <div class="input-container">
    <input type="text" />
  </div>
`;

export class GkInputText extends HTMLElement {
  private shadow: ShadowRoot;
  private input!: HTMLInputElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = template;
    this.input = this.shadow.querySelector('input')!;
  }

  static get observedAttributes() {
    return ['size', 'disabled', 'placeholder', 'value', 'required', 'maxlength', 'minlength', 'pattern'];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.updateInput();
    }
  }

  private render() {
    this.updateInput();
  }

  private updateInput() {
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const placeholder = this.getAttribute('placeholder') || '';
    const value = this.getAttribute('value') || '';
    const required = this.hasAttribute('required');
    const maxlength = this.getAttribute('maxlength');
    const minlength = this.getAttribute('minlength');
    const pattern = this.getAttribute('pattern');

    this.input.setAttribute('size', size);
    this.input.disabled = disabled;
    this.input.placeholder = placeholder;
    this.input.value = value;
    this.input.required = required;
    
    if (maxlength) {
      this.input.setAttribute('maxlength', maxlength);
    } else {
      this.input.removeAttribute('maxlength');
    }
    
    if (minlength) {
      this.input.setAttribute('minlength', minlength);
    } else {
      this.input.removeAttribute('minlength');
    }
    
    if (pattern) {
      this.input.setAttribute('pattern', pattern);
    } else {
      this.input.removeAttribute('pattern');
    }
  }

  private setupEventListeners() {
    this.input.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent('input', {
        detail: { value: this.input.value },
        bubbles: true,
        composed: true
      }));
    });

    this.input.addEventListener('change', () => {
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: this.input.value },
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

  public select() {
    this.input.select();
  }

  public get value(): string {
    return this.input.value;
  }

  public set value(val: string) {
    this.input.value = val;
    this.setAttribute('value', val);
    // Trigger validation update
    this.updateInput();
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
if (!customElements.get('gk-input-text')) {
  customElements.define('gk-input-text', GkInputText);
}
