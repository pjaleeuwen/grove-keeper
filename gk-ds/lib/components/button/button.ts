// Grove Keeper Design System - Button Web Component

export class GkButton extends HTMLElement {
  private shadow: ShadowRoot
  private button: HTMLButtonElement

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.button = document.createElement('button')
    this.setupComponent()
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

  private setupComponent() {
    const style = document.createElement('style')
    style.textContent = `
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

      button[variant="outline"] {
        background-color: transparent;
        color: #213547;
        border-color: #d1d5db;
      }

      button[variant="outline"]:hover:not(:disabled) {
        background-color: #f9fafb;
        border-color: #9ca3af;
      }

      button[variant="ghost"] {
        background-color: transparent;
        color: #646cff;
        border-color: transparent;
      }

      button[variant="ghost"]:hover:not(:disabled) {
        background-color: #f3f4f6;
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
        button[variant="outline"] {
          color: #e5e7eb;
          border-color: #4b5563;
        }

        button[variant="outline"]:hover:not(:disabled) {
          background-color: #374151;
          border-color: #6b7280;
        }

        button[variant="ghost"]:hover:not(:disabled) {
          background-color: #374151;
        }
      }
    `

    this.shadow.appendChild(style)
    this.shadow.appendChild(this.button)
  }

  private render() {
    this.updateButton()
    this.button.textContent = this.textContent || 'Button'
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

    // Update text content if it changed
    if (this.textContent !== this.button.textContent) {
      this.button.textContent = this.textContent || 'Button'
    }
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
