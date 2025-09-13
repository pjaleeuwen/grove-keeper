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
    font-size: 14px;
    line-height: 1.5;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 8px 12px;
    background-color: white;
    color: #213547;
    outline: none;
    transition: all 0.2s ease-in-out;
    width: 100%;
    box-sizing: border-box;
    resize: vertical;
    min-height: 80px;
  }

  textarea:focus {
    border-color: #646cff;
    box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
  }

  textarea:disabled {
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
    border-color: #e5e7eb;
  }

  textarea::placeholder {
    color: #9ca3af;
  }

  textarea:invalid {
    border-color: #ef4444;
  }

  textarea:invalid:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  /* Sizes */
  textarea[size="small"] {
    padding: 6px 10px;
    font-size: 12px;
    min-height: 60px;
  }

  textarea[size="medium"] {
    padding: 8px 12px;
    font-size: 14px;
    min-height: 80px;
  }

  textarea[size="large"] {
    padding: 12px 16px;
    font-size: 16px;
    min-height: 100px;
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
