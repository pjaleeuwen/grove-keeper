// Grove Keeper Design System - Button Web Component

const styles = `
  :host {
    display: inline-block;
  }

  button {
    font-family: inherit;
    font-size: var(--gk-font-size-sm, 14px);
    font-weight: 500;
    line-height: var(--gk-line-height-normal, 1.5);
    border: 1px solid transparent;
    border-radius: var(--gk-radius-md, 6px);
    cursor: pointer;
    transition: all var(--gk-transition-normal, 0.2s ease-in-out);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    outline: none;
  }

  button:focus-visible {
    outline: 2px solid var(--gk-color-primary, #4a7c59);
    outline-offset: 2px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Variants */
  button[variant="primary"] {
    background-color: var(--gk-color-primary, #4a7c59);
    color: var(--gk-color-text-inverse, white);
    border-color: var(--gk-color-primary, #4a7c59);
  }

  button[variant="primary"]:hover:not(:disabled) {
    background-color: var(--gk-color-primary-hover, #3d6549);
    border-color: var(--gk-color-primary-hover, #3d6549);
  }

  button[variant="secondary"] {
    background-color: transparent;
    color: var(--gk-color-primary, #4a7c59);
    border-color: var(--gk-color-primary, #4a7c59);
  }

  button[variant="secondary"]:hover:not(:disabled) {
    background-color: var(--gk-color-primary, #4a7c59);
    color: var(--gk-color-text-inverse, white);
  }


  /* Sizes */
  button[size="small"] {
    padding: var(--gk-spacing-sm, 6px) var(--gk-spacing-lg, 12px);
    font-size: var(--gk-font-size-xs, 12px);
    min-height: var(--gk-height-xs, 28px);
  }

  button[size="medium"] {
    padding: var(--gk-spacing-md, 8px) var(--gk-spacing-xl, 16px);
    font-size: var(--gk-font-size-sm, 14px);
    min-height: var(--gk-height-sm, 36px);
  }

  button[size="large"] {
    padding: var(--gk-spacing-lg, 12px) var(--gk-spacing-3xl, 24px);
    font-size: var(--gk-font-size-md, 16px);
    min-height: var(--gk-height-md, 44px);
  }

`;

const template = `
  <style>${styles}</style>
  <button>
    <slot></slot>
  </button>
`;

export class GkButton extends HTMLElement {
  private shadow: ShadowRoot;
  private button!: HTMLButtonElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = template;
    this.button = this.shadow.querySelector('button')!;
  }

  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'type'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.updateButton();
    }
  }

  private render() {
    this.updateButton();
  }

  private updateButton() {
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const type = this.getAttribute('type') || 'button';

    this.button.setAttribute('variant', variant);
    this.button.setAttribute('size', size);
    this.button.type = type as 'button' | 'submit' | 'reset';
    this.button.disabled = disabled;
  }

  // Public methods
  public focus() {
    this.button.focus();
  }

  public blur() {
    this.button.blur();
  }

  public click() {
    this.button.click();
  }
}

// Register the custom element
if (!customElements.get('gk-button')) {
  customElements.define('gk-button', GkButton);
}
