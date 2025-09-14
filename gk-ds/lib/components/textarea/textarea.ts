// Grove Keeper Design System - Textarea Web Component

const styles = `
  :host {
    display: inline-block;
  }

  .textarea-container {
    position: relative;
    display: inline-block;
  }

  textarea {
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
    resize: vertical;
    min-height: var(--gk-height-xl, 80px);
  }

  textarea:focus {
    border-color: var(--gk-color-border-focus, #4a7c59);
    box-shadow: 0 0 0 3px var(--gk-color-shadow-focus, rgba(74, 124, 89, 0.1));
  }

  textarea:disabled {
    background-color: var(--gk-color-bg-disabled, #f9fafb);
    color: var(--gk-color-text-disabled, #9ca3af);
    cursor: not-allowed;
    border-color: var(--gk-color-border-disabled, #e5e7eb);
  }

  textarea::placeholder {
    color: var(--gk-color-text-disabled, #9ca3af);
  }

  textarea:invalid {
    border-color: var(--gk-color-border-error, #ef4444);
  }

  textarea:invalid:focus {
    border-color: var(--gk-color-border-error, #ef4444);
    box-shadow: 0 0 0 3px var(--gk-color-shadow-error, rgba(239, 68, 68, 0.1));
  }

  /* Sizes */
  textarea[size="small"] {
    padding: var(--gk-spacing-sm, 6px) var(--gk-spacing-md, 10px);
    font-size: var(--gk-font-size-xs, 12px);
    min-height: var(--gk-height-lg, 60px);
  }

  textarea[size="medium"] {
    padding: var(--gk-spacing-md, 8px) var(--gk-spacing-lg, 12px);
    font-size: var(--gk-font-size-sm, 14px);
    min-height: var(--gk-height-xl, 80px);
  }

  textarea[size="large"] {
    padding: var(--gk-spacing-lg, 12px) var(--gk-spacing-xl, 16px);
    font-size: var(--gk-font-size-md, 16px);
    min-height: var(--gk-height-2xl, 100px);
  }

`;

const template = `
  <style>${styles}</style>
  <div class="textarea-container">
    <textarea></textarea>
  </div>
`;

export class GkTextarea extends HTMLElement {
  private shadow: ShadowRoot;
  private textarea!: HTMLTextAreaElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = template;
    this.textarea = this.shadow.querySelector('textarea')!;
  }

  static get observedAttributes() {
    return ['size', 'disabled', 'placeholder', 'value', 'required', 'maxlength', 'minlength', 'rows', 'cols'];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.updateTextarea();
    }
  }

  private render() {
    this.updateTextarea();
  }

  private updateTextarea() {
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const placeholder = this.getAttribute('placeholder') || '';
    const value = this.getAttribute('value') || '';
    const required = this.hasAttribute('required');
    const maxlength = this.getAttribute('maxlength');
    const minlength = this.getAttribute('minlength');
    const rows = this.getAttribute('rows');
    const cols = this.getAttribute('cols');

    this.textarea.setAttribute('size', size);
    this.textarea.disabled = disabled;
    this.textarea.placeholder = placeholder;
    this.textarea.value = value;
    this.textarea.required = required;
    
    if (maxlength) {
      this.textarea.setAttribute('maxlength', maxlength);
    } else {
      this.textarea.removeAttribute('maxlength');
    }
    
    if (minlength) {
      this.textarea.setAttribute('minlength', minlength);
    } else {
      this.textarea.removeAttribute('minlength');
    }
    
    if (rows) {
      this.textarea.setAttribute('rows', rows);
    } else {
      this.textarea.removeAttribute('rows');
    }
    
    if (cols) {
      this.textarea.setAttribute('cols', cols);
    } else {
      this.textarea.removeAttribute('cols');
    }
  }

  private setupEventListeners() {
    this.textarea.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent('input', {
        detail: { value: this.textarea.value },
        bubbles: true,
        composed: true
      }));
    });

    this.textarea.addEventListener('change', () => {
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: this.textarea.value },
        bubbles: true,
        composed: true
      }));
    });

    this.textarea.addEventListener('focus', () => {
      this.dispatchEvent(new CustomEvent('focus', {
        bubbles: true,
        composed: true
      }));
    });

    this.textarea.addEventListener('blur', () => {
      this.dispatchEvent(new CustomEvent('blur', {
        bubbles: true,
        composed: true
      }));
    });
  }

  // Public methods
  public focus() {
    this.textarea.focus();
  }

  public blur() {
    this.textarea.blur();
  }

  public select() {
    this.textarea.select();
  }

  public get value(): string {
    return this.textarea.value;
  }

  public set value(val: string) {
    this.textarea.value = val;
    this.setAttribute('value', val);
    // Trigger validation update
    this.updateTextarea();
  }

  public get validity(): ValidityState {
    return this.textarea.validity;
  }

  public checkValidity(): boolean {
    return this.textarea.checkValidity();
  }

  public reportValidity(): boolean {
    return this.textarea.reportValidity();
  }
}

// Register the custom element
if (!customElements.get('gk-textarea')) {
  customElements.define('gk-textarea', GkTextarea);
}
