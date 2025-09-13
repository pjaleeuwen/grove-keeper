// Grove Keeper Design System - Button Web Component

const styles = `
  :host {
    display: inline-block;
  }

  button {
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    outline: none;
  }

  button:focus-visible {
    outline: 2px solid #646cff;
    outline-offset: 2px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Variants */
  button[variant="primary"] {
    background-color: #646cff;
    color: white;
    border-color: #646cff;
  }

  button[variant="primary"]:hover:not(:disabled) {
    background-color: #535bf2;
    border-color: #535bf2;
  }

  button[variant="secondary"] {
    background-color: transparent;
    color: #646cff;
    border-color: #646cff;
  }

  button[variant="secondary"]:hover:not(:disabled) {
    background-color: #646cff;
    color: white;
  }


  /* Sizes */
  button[size="small"] {
    padding: 6px 12px;
    font-size: 12px;
    min-height: 28px;
  }

  button[size="medium"] {
    padding: 8px 16px;
    font-size: 14px;
    min-height: 36px;
  }

  button[size="large"] {
    padding: 12px 24px;
    font-size: 16px;
    min-height: 44px;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    /* Dark mode styles can be added here for remaining variants */
  }
`;

const template = `
  <style>${styles}</style>
  <button>
    <slot></slot>
  </button>
`;

export class GkButton extends HTMLElement {
  private shadow: ShadowRoot
  private button!: HTMLButtonElement

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.innerHTML = template
    this.button = this.shadow.querySelector('button')!
  }

  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'type']
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.updateButton()
    }
  }


  private render() {
    this.updateButton()
  }

  private updateButton() {
    const variant = this.getAttribute('variant') || 'primary'
    const size = this.getAttribute('size') || 'medium'
    const disabled = this.hasAttribute('disabled')
    const type = this.getAttribute('type') || 'button'

    this.button.setAttribute('variant', variant)
    this.button.setAttribute('size', size)
    this.button.type = type as 'button' | 'submit' | 'reset'
    this.button.disabled = disabled
  }

  // Public methods
  public focus() {
    this.button.focus()
  }

  public blur() {
    this.button.blur()
  }

  public click() {
    this.button.click()
  }
}

// Register the custom element
if (!customElements.get('gk-button')) {
  customElements.define('gk-button', GkButton)
}
