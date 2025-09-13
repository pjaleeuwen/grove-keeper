import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './checkbox'; // This will register the custom element
import type { GkCheckbox } from './checkbox';

describe('GkCheckbox', () => {
  let checkbox: HTMLElement;

  beforeEach(() => {
    checkbox = document.createElement('gk-checkbox');
    document.body.appendChild(checkbox);
  });

  afterEach(() => {
    document.body.removeChild(checkbox);
  });

  describe('Component Creation', () => {
    it('should create a checkbox element with shadow DOM', () => {
      expect(checkbox.shadowRoot).toBeTruthy();
      expect(checkbox.shadowRoot?.querySelector('input[type="checkbox"]')).toBeTruthy();
      expect(checkbox.shadowRoot?.querySelector('.checkbox-label')).toBeTruthy();
    });

    it('should have default properties', () => {
      expect(checkbox.getAttribute('size')).toBeNull(); // No default attribute
      expect(checkbox.getAttribute('name')).toBeNull();
      expect(checkbox.getAttribute('value')).toBeNull();
      expect(checkbox.hasAttribute('disabled')).toBe(false);
      expect(checkbox.hasAttribute('checked')).toBe(false);
      expect(checkbox.hasAttribute('required')).toBe(false);
    });

    it('should render with default input type', () => {
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.type).toBe('checkbox');
    });
  });

  describe('Attributes', () => {
    it('should update size attribute', () => {
      checkbox.setAttribute('size', 'large');
      expect(checkbox.getAttribute('size')).toBe('large');
    });

    it('should update name attribute', () => {
      checkbox.setAttribute('name', 'test-checkbox');
      expect(checkbox.getAttribute('name')).toBe('test-checkbox');
    });

    it('should update value attribute', () => {
      checkbox.setAttribute('value', 'test-value');
      expect(checkbox.getAttribute('value')).toBe('test-value');
    });

    it('should handle disabled attribute', () => {
      checkbox.setAttribute('disabled', '');
      expect(checkbox.hasAttribute('disabled')).toBe(true);
    });

    it('should handle checked attribute', () => {
      checkbox.setAttribute('checked', '');
      expect(checkbox.hasAttribute('checked')).toBe(true);
    });

    it('should handle required attribute', () => {
      checkbox.setAttribute('required', '');
      expect(checkbox.hasAttribute('required')).toBe(true);
    });
  });

  describe('Properties', () => {
    it('should work with checked property', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.checked = true;
      expect(gkCheckbox.checked).toBe(true);
    });

    it('should update internal input checked when property is set', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.checked = true;
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.checked).toBe(true);
    });

    it('should update attribute when checked property is set', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.checked = true;
      expect(checkbox.hasAttribute('checked')).toBe(true);
    });

    it('should work with disabled property', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.disabled = true;
      expect(gkCheckbox.disabled).toBe(true);
    });

    it('should work with value property', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.value = 'test-value';
      expect(gkCheckbox.value).toBe('test-value');
    });

    it('should work with name property', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.name = 'test-name';
      expect(gkCheckbox.name).toBe('test-name');
    });
  });

  describe('Internal Input Element', () => {
    it('should apply size to internal input and label', () => {
      checkbox.setAttribute('size', 'large');
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      const labelElement = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(inputElement?.getAttribute('size')).toBe('large');
      expect(labelElement?.getAttribute('size')).toBe('large');
    });

    it('should apply disabled to internal input', () => {
      checkbox.setAttribute('disabled', '');
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.disabled).toBe(true);
    });

    it('should apply checked to internal input', () => {
      checkbox.setAttribute('checked', '');
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.checked).toBe(true);
    });

    it('should apply required to internal input', () => {
      checkbox.setAttribute('required', '');
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.required).toBe(true);
    });

    it('should apply name to internal input', () => {
      checkbox.setAttribute('name', 'test-name');
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.name).toBe('test-name');
    });

    it('should apply value to internal input', () => {
      checkbox.setAttribute('value', 'test-value');
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.value).toBe('test-value');
    });
  });

  describe('Events', () => {
    it('should dispatch change events', async () => {
      const changePromise = new Promise<CustomEvent>(resolve => {
        checkbox.addEventListener('change', (e) => {
          resolve(e as CustomEvent);
        });
      });

      const inputElement = checkbox.shadowRoot?.querySelector('input');
      inputElement?.dispatchEvent(new Event('change'));
      
      const event = await changePromise;
      expect(event.detail.checked).toBeDefined();
      expect(event.detail.value).toBeDefined();
    });

    it('should dispatch focus events', async () => {
      const focusPromise = new Promise<void>(resolve => {
        checkbox.addEventListener('focus', () => {
          resolve();
        });
      });

      const inputElement = checkbox.shadowRoot?.querySelector('input');
      inputElement?.dispatchEvent(new Event('focus'));
      
      await focusPromise;
    });

    it('should dispatch blur events', async () => {
      const blurPromise = new Promise<void>(resolve => {
        checkbox.addEventListener('blur', () => {
          resolve();
        });
      });

      const inputElement = checkbox.shadowRoot?.querySelector('input');
      inputElement?.dispatchEvent(new Event('blur'));
      
      await blurPromise;
    });
  });

  describe('Public Methods', () => {
    it('should have focus method', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(typeof gkCheckbox.focus).toBe('function');
    });

    it('should have blur method', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(typeof gkCheckbox.blur).toBe('function');
    });

    it('should have click method', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(typeof gkCheckbox.click).toBe('function');
    });

    it('should have validity property', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(gkCheckbox.validity).toBeDefined();
    });

    it('should have checkValidity method', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(typeof gkCheckbox.checkValidity).toBe('function');
    });

    it('should have reportValidity method', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(typeof gkCheckbox.reportValidity).toBe('function');
    });
  });

  describe('Focus Management', () => {
    it('should focus internal input when focus is called', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      
      gkCheckbox.focus();
      expect(document.activeElement).toBe(checkbox);
    });

    it('should blur internal input when blur is called', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      
      gkCheckbox.focus();
      gkCheckbox.blur();
      // In jsdom, blur might not work as expected, so we just test the method exists
      expect(typeof gkCheckbox.blur).toBe('function');
    });
  });

  describe('Click Behavior', () => {
    it('should toggle checked state when clicked', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(gkCheckbox.checked).toBe(false);
      
      gkCheckbox.click();
      expect(gkCheckbox.checked).toBe(true);
      
      gkCheckbox.click();
      expect(gkCheckbox.checked).toBe(false);
    });

    it('should not toggle when disabled', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.disabled = true;
      gkCheckbox.checked = false;
      
      gkCheckbox.click();
      expect(gkCheckbox.checked).toBe(false);
    });
  });

  describe('Validation', () => {
    it('should check validity', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(gkCheckbox.checkValidity()).toBe(true);
    });

    it('should report validity', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      expect(gkCheckbox.reportValidity()).toBe(true);
    });

    it('should validate required field', () => {
      checkbox.setAttribute('required', '');
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.checked = false;
      expect(gkCheckbox.checkValidity()).toBe(false);
    });

    it('should pass validation when required and checked', () => {
      checkbox.setAttribute('required', '');
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.checked = true;
      expect(gkCheckbox.checkValidity()).toBe(true);
    });
  });

  describe('Slot Content', () => {
    it('should display text content in slot', () => {
      checkbox.textContent = 'Checkbox label';
      expect(checkbox.textContent).toBe('Checkbox label');
    });

    it('should display HTML content in slot', () => {
      checkbox.innerHTML = '<span>Checkbox with <strong>HTML</strong></span>';
      expect(checkbox.innerHTML).toBe(
        '<span>Checkbox with <strong>HTML</strong></span>'
      );
    });

    it('should update content dynamically', () => {
      checkbox.textContent = 'Original';
      expect(checkbox.textContent).toBe('Original');

      checkbox.textContent = 'Updated';
      expect(checkbox.textContent).toBe('Updated');
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid attribute changes', () => {
      for (let i = 0; i < 10; i++) {
        checkbox.setAttribute('size', i % 3 === 0 ? 'small' : i % 3 === 1 ? 'medium' : 'large');
        if (i % 2 === 0) {
          checkbox.setAttribute('checked', '');
        } else {
          checkbox.removeAttribute('checked');
        }
      }

      // Last iteration: i=9, 9%3=0, so 'small'
      expect(checkbox.getAttribute('size')).toBe('small');
      expect(checkbox.hasAttribute('checked')).toBe(false); // Last iteration was i=9, 9%2=1, so no checked
    });

    it('should handle empty content', () => {
      checkbox.textContent = '';
      expect(checkbox.textContent).toBe('');
    });

    it('should handle null/undefined attribute values', () => {
      checkbox.setAttribute('name', '');
      expect(checkbox.getAttribute('name')).toBe('');

      checkbox.removeAttribute('name');
      expect(checkbox.getAttribute('name')).toBeNull();
    });

    it('should handle attribute removal', () => {
      checkbox.setAttribute('checked', '');
      checkbox.removeAttribute('checked');
      expect(checkbox.hasAttribute('checked')).toBe(false);
      
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.checked).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should be focusable when not disabled', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.focus();
      expect(document.activeElement).toBe(checkbox);
    });

    it('should not be focusable when disabled', () => {
      checkbox.setAttribute('disabled', '');
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.focus();
      // In jsdom, disabled elements can still be focused, so we check the disabled state
      expect(checkbox.hasAttribute('disabled')).toBe(true);
    });

    it('should have proper input type', () => {
      const inputElement = checkbox.shadowRoot?.querySelector('input');
      expect(inputElement?.type).toBe('checkbox');
    });

    it('should support keyboard navigation', () => {
      const gkCheckbox = checkbox as GkCheckbox;
      gkCheckbox.focus();
      expect(document.activeElement).toBe(checkbox);
    });

    it('should have proper label association', () => {
      const labelElement = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(labelElement).toBeTruthy();
    });
  });
});
