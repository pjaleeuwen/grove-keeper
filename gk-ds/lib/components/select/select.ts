// Grove Keeper Design System - Select Web Component

const styles = `
  :host {
    display: inline-block;
  }

  .select-container {
    position: relative;
    display: inline-block;
  }

  select {
    font-family: inherit;
    font-size: var(--gk-font-size-sm, 14px);
    line-height: var(--gk-line-height-normal, 1.5);
    border: 1px solid var(--gk-color-border-default, #e5e7eb);
    border-radius: var(--gk-radius-md, 6px);
    padding: var(--gk-spacing-md, 8px) var(--gk-spacing-5xl, 32px) var(--gk-spacing-md, 8px) var(--gk-spacing-lg, 12px);
    background-color: var(--gk-color-bg-primary, white);
    color: var(--gk-color-text-primary, #213547);
    outline: none;
    transition: all var(--gk-transition-normal, 0.2s ease-in-out);
    width: 100%;
    box-sizing: border-box;
    appearance: none;
    cursor: pointer;
  }

  select:focus {
    border-color: var(--gk-color-border-focus, #4a7c59);
    box-shadow: 0 0 0 3px var(--gk-color-shadow-focus, rgba(74, 124, 89, 0.1));
  }

  select:disabled {
    background-color: var(--gk-color-bg-disabled, #f9fafb);
    color: var(--gk-color-text-disabled, #9ca3af);
    cursor: not-allowed;
    border-color: var(--gk-color-border-disabled, #e5e7eb);
  }

  select:invalid {
    border-color: var(--gk-color-border-error, #ef4444);
  }

  select:invalid:focus {
    border-color: var(--gk-color-border-error, #ef4444);
    box-shadow: 0 0 0 3px var(--gk-color-shadow-error, rgba(239, 68, 68, 0.1));
  }

  /* Custom dropdown arrow */
  .select-container::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--gk-color-arrow, #6b7280);
    pointer-events: none;
    transition: transform 0.2s ease-in-out;
  }

  .select-container:has(select:focus)::after {
    transform: translateY(-50%) rotate(180deg);
  }

  /* Sizes */
  select[size="small"] {
    padding: var(--gk-spacing-sm, 6px) var(--gk-spacing-4xl, 28px) var(--gk-spacing-sm, 6px) var(--gk-spacing-md, 10px);
    font-size: var(--gk-font-size-xs, 12px);
    min-height: var(--gk-height-xs, 28px);
  }

  select[size="medium"] {
    padding: var(--gk-spacing-md, 8px) var(--gk-spacing-5xl, 32px) var(--gk-spacing-md, 8px) var(--gk-spacing-lg, 12px);
    font-size: var(--gk-font-size-sm, 14px);
    min-height: var(--gk-height-sm, 36px);
  }

  select[size="large"] {
    padding: var(--gk-spacing-lg, 12px) var(--gk-spacing-6xl, 36px) var(--gk-spacing-lg, 12px) var(--gk-spacing-xl, 16px);
    font-size: var(--gk-font-size-md, 16px);
    min-height: var(--gk-height-md, 44px);
  }

  /* Arrow positioning for different sizes */
  .select-container:has(select[size="small"])::after {
    right: 10px;
    border-left-width: 3px;
    border-right-width: 3px;
    border-top-width: 3px;
  }

  .select-container:has(select[size="large"])::after {
    right: 16px;
    border-left-width: 5px;
    border-right-width: 5px;
    border-top-width: 5px;
  }

`;

const template = `
  <style>${styles}</style>
  <div class="select-container">
    <select>
      <slot></slot>
    </select>
  </div>
`;

export class GkSelect extends HTMLElement {
  private shadow: ShadowRoot;
  private select!: HTMLSelectElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = template;
    this.select = this.shadow.querySelector('select')!;
  }

  static get observedAttributes() {
    return ['size', 'disabled', 'required', 'name', 'value', 'multiple'];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    this.syncOptionsFromSlot();
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.updateSelect();
    }
  }

  private render() {
    this.updateSelect();
  }

  private updateSelect() {
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const required = this.hasAttribute('required');
    const name = this.getAttribute('name') || '';
    const value = this.getAttribute('value') || '';
    const multiple = this.hasAttribute('multiple');

    this.select.setAttribute('size', size);
    this.select.disabled = disabled;
    this.select.required = required;
    this.select.name = name;
    this.select.multiple = multiple;
    this.select.value = value;
  }

  private setupEventListeners() {
    this.select.addEventListener('change', () => {
      this.dispatchEvent(new CustomEvent('change', {
        detail: { 
          value: this.select.value,
          selectedIndex: this.select.selectedIndex,
          selectedOptions: Array.from(this.select.selectedOptions).map(option => ({
            value: option.value,
            text: option.text,
            selected: option.selected
          }))
        },
        bubbles: true,
        composed: true
      }));
    });

    this.select.addEventListener('focus', () => {
      this.dispatchEvent(new CustomEvent('focus', {
        bubbles: true,
        composed: true
      }));
    });

    this.select.addEventListener('blur', () => {
      this.dispatchEvent(new CustomEvent('blur', {
        bubbles: true,
        composed: true
      }));
    });
  }

  private syncOptionsFromSlot() {
    // Copy options from slot content to the internal select
    const slotOptions = this.querySelectorAll('option');
    this.select.innerHTML = '';
    
    slotOptions.forEach(option => {
      const newOption = document.createElement('option');
      newOption.value = option.value;
      newOption.textContent = option.textContent;
      newOption.selected = option.selected;
      this.select.appendChild(newOption);
    });
  }

  // Public methods
  public focus() {
    this.select.focus();
  }

  public blur() {
    this.select.blur();
  }

  public click() {
    this.select.click();
  }

  public get value(): string {
    return this.select.value;
  }

  public set value(val: string) {
    this.select.value = val;
    this.setAttribute('value', val);
    // Trigger validation update
    this.updateSelect();
  }

  public get selectedIndex(): number {
    return this.select.selectedIndex;
  }

  public set selectedIndex(index: number) {
    this.select.selectedIndex = index;
  }

  public get selectedOptions(): HTMLCollectionOf<HTMLOptionElement> {
    return this.select.selectedOptions;
  }

  public get options(): HTMLCollectionOf<HTMLOptionElement> {
    return this.select.options;
  }

  public get validity(): ValidityState {
    return this.select.validity;
  }

  public checkValidity(): boolean {
    return this.select.checkValidity();
  }

  public reportValidity(): boolean {
    return this.select.reportValidity();
  }

  // Method to add options programmatically
  public addOption(value: string, text: string, selected: boolean = false): HTMLOptionElement {
    const option = document.createElement('option');
    option.value = value;
    option.text = text;
    option.selected = selected;
    this.select.appendChild(option);
    return option;
  }

  // Method to remove options
  public removeOption(index: number): void {
    if (index >= 0 && index < this.select.options.length) {
      this.select.remove(index);
    }
  }

  // Method to clear all options
  public clearOptions(): void {
    this.select.innerHTML = '';
  }
}

// Register the custom element
if (!customElements.get('gk-select')) {
  customElements.define('gk-select', GkSelect);
}
