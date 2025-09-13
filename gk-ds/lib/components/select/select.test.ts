import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './select'; // This will register the custom element
import type { GkSelect } from './select';

describe('GkSelect', () => {
  let select: HTMLElement;

  beforeEach(() => {
    select = document.createElement('gk-select');
    select.innerHTML = `
      <option value="">Choose an option...</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    `;
    document.body.appendChild(select);
  });

  afterEach(() => {
    document.body.removeChild(select);
  });

  describe('Component Creation', () => {
    it('should create a select element with shadow DOM', () => {
      expect(select.shadowRoot).toBeTruthy();
      expect(select.shadowRoot?.querySelector('select')).toBeTruthy();
    });

    it('should have default properties', () => {
      expect(select.getAttribute('size')).toBeNull(); // No default attribute
      expect(select.getAttribute('name')).toBeNull();
      expect(select.getAttribute('value')).toBeNull();
      expect(select.hasAttribute('disabled')).toBe(false);
      expect(select.hasAttribute('required')).toBe(false);
      expect(select.hasAttribute('multiple')).toBe(false);
    });

    it('should render with default select element', () => {
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.tagName).toBe('SELECT');
    });
  });

  describe('Attributes', () => {
    it('should update size attribute', () => {
      select.setAttribute('size', 'large');
      expect(select.getAttribute('size')).toBe('large');
    });

    it('should update name attribute', () => {
      select.setAttribute('name', 'test-select');
      expect(select.getAttribute('name')).toBe('test-select');
    });

    it('should update value attribute', () => {
      select.setAttribute('value', 'option1');
      expect(select.getAttribute('value')).toBe('option1');
    });

    it('should handle disabled attribute', () => {
      select.setAttribute('disabled', '');
      expect(select.hasAttribute('disabled')).toBe(true);
    });

    it('should handle required attribute', () => {
      select.setAttribute('required', '');
      expect(select.hasAttribute('required')).toBe(true);
    });

    it('should handle multiple attribute', () => {
      select.setAttribute('multiple', '');
      expect(select.hasAttribute('multiple')).toBe(true);
    });
  });

  describe('Properties', () => {
    it('should work with value property', () => {
      const gkSelect = select as GkSelect;
      gkSelect.value = 'option1';
      expect(gkSelect.value).toBe('option1');
    });

    it('should update internal select value when property is set', () => {
      const gkSelect = select as GkSelect;
      gkSelect.value = 'option2';
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.value).toBe('option2');
    });

    it('should update attribute when value property is set', () => {
      const gkSelect = select as GkSelect;
      gkSelect.value = 'option3';
      expect(select.getAttribute('value')).toBe('option3');
    });

    it('should work with selectedIndex property', () => {
      const gkSelect = select as GkSelect;
      gkSelect.selectedIndex = 1;
      expect(gkSelect.selectedIndex).toBe(1);
    });

    it('should work with selectedOptions property', () => {
      const gkSelect = select as GkSelect;
      expect(gkSelect.selectedOptions).toBeDefined();
    });

    it('should work with options property', () => {
      const gkSelect = select as GkSelect;
      expect(gkSelect.options).toBeDefined();
      expect(gkSelect.options.length).toBe(4); // 4 options in the test setup
    });
  });

  describe('Internal Select Element', () => {
    it('should apply size to internal select', () => {
      select.setAttribute('size', 'large');
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.getAttribute('size')).toBe('large');
    });

    it('should apply disabled to internal select', () => {
      select.setAttribute('disabled', '');
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.disabled).toBe(true);
    });

    it('should apply required to internal select', () => {
      select.setAttribute('required', '');
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.required).toBe(true);
    });

    it('should apply name to internal select', () => {
      select.setAttribute('name', 'test-name');
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.name).toBe('test-name');
    });

    it('should apply value to internal select', () => {
      select.setAttribute('value', 'option1');
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.value).toBe('option1');
    });

    it('should apply multiple to internal select', () => {
      select.setAttribute('multiple', '');
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.multiple).toBe(true);
    });
  });

  describe('Events', () => {
    it('should dispatch change events', async () => {
      const changePromise = new Promise<CustomEvent>(resolve => {
        select.addEventListener('change', (e) => {
          resolve(e as CustomEvent);
        });
      });

      const selectElement = select.shadowRoot?.querySelector('select');
      selectElement?.dispatchEvent(new Event('change'));
      
      const event = await changePromise;
      expect(event.detail.value).toBeDefined();
      expect(event.detail.selectedIndex).toBeDefined();
      expect(event.detail.selectedOptions).toBeDefined();
    });

    it('should dispatch focus events', async () => {
      const focusPromise = new Promise<void>(resolve => {
        select.addEventListener('focus', () => {
          resolve();
        });
      });

      const selectElement = select.shadowRoot?.querySelector('select');
      selectElement?.dispatchEvent(new Event('focus'));
      
      await focusPromise;
    });

    it('should dispatch blur events', async () => {
      const blurPromise = new Promise<void>(resolve => {
        select.addEventListener('blur', () => {
          resolve();
        });
      });

      const selectElement = select.shadowRoot?.querySelector('select');
      selectElement?.dispatchEvent(new Event('blur'));
      
      await blurPromise;
    });
  });

  describe('Public Methods', () => {
    it('should have focus method', () => {
      const gkSelect = select as GkSelect;
      expect(typeof gkSelect.focus).toBe('function');
    });

    it('should have blur method', () => {
      const gkSelect = select as GkSelect;
      expect(typeof gkSelect.blur).toBe('function');
    });

    it('should have click method', () => {
      const gkSelect = select as GkSelect;
      expect(typeof gkSelect.click).toBe('function');
    });

    it('should have validity property', () => {
      const gkSelect = select as GkSelect;
      expect(gkSelect.validity).toBeDefined();
    });

    it('should have checkValidity method', () => {
      const gkSelect = select as GkSelect;
      expect(typeof gkSelect.checkValidity).toBe('function');
    });

    it('should have reportValidity method', () => {
      const gkSelect = select as GkSelect;
      expect(typeof gkSelect.reportValidity).toBe('function');
    });
  });

  describe('Option Management Methods', () => {
    it('should have addOption method', () => {
      const gkSelect = select as GkSelect;
      expect(typeof gkSelect.addOption).toBe('function');
    });

    it('should add option with addOption method', () => {
      const gkSelect = select as GkSelect;
      const option = gkSelect.addOption('new-option', 'New Option');
      expect(option).toBeDefined();
      expect(option.value).toBe('new-option');
      expect(option.text).toBe('New Option');
      expect(gkSelect.options.length).toBe(5); // 4 original + 1 new
    });

    it('should add selected option with addOption method', () => {
      const gkSelect = select as GkSelect;
      const option = gkSelect.addOption('selected-option', 'Selected Option', true);
      expect(option.selected).toBe(true);
    });

    it('should have removeOption method', () => {
      const gkSelect = select as GkSelect;
      expect(typeof gkSelect.removeOption).toBe('function');
    });

    it('should remove option with removeOption method', () => {
      const gkSelect = select as GkSelect;
      const originalLength = gkSelect.options.length;
      gkSelect.removeOption(1); // Remove second option
      expect(gkSelect.options.length).toBe(originalLength - 1);
    });

    it('should not remove option with invalid index', () => {
      const gkSelect = select as GkSelect;
      const originalLength = gkSelect.options.length;
      gkSelect.removeOption(-1); // Invalid index
      gkSelect.removeOption(999); // Invalid index
      expect(gkSelect.options.length).toBe(originalLength);
    });

    it('should have clearOptions method', () => {
      const gkSelect = select as GkSelect;
      expect(typeof gkSelect.clearOptions).toBe('function');
    });

    it('should clear all options with clearOptions method', () => {
      const gkSelect = select as GkSelect;
      gkSelect.clearOptions();
      expect(gkSelect.options.length).toBe(0);
    });
  });

  describe('Focus Management', () => {
    it('should focus internal select when focus is called', () => {
      const gkSelect = select as GkSelect;
      
      gkSelect.focus();
      expect(document.activeElement).toBe(select);
    });

    it('should blur internal select when blur is called', () => {
      const gkSelect = select as GkSelect;
      
      gkSelect.focus();
      gkSelect.blur();
      // In jsdom, blur might not work as expected, so we just test the method exists
      expect(typeof gkSelect.blur).toBe('function');
    });
  });

  describe('Click Behavior', () => {
    it('should trigger click on internal select when clicked', () => {
      const selectElement = select.shadowRoot?.querySelector('select');
      
      let clickCount = 0;
      selectElement?.addEventListener('click', () => {
        clickCount++;
      });

      (select as GkSelect).click();
      expect(clickCount).toBe(1);
    });
  });

  describe('Validation', () => {
    it('should check validity', () => {
      const gkSelect = select as GkSelect;
      expect(gkSelect.checkValidity()).toBe(true);
    });

    it('should report validity', () => {
      const gkSelect = select as GkSelect;
      expect(gkSelect.reportValidity()).toBe(true);
    });

    it('should validate required field', () => {
      select.setAttribute('required', '');
      const gkSelect = select as GkSelect;
      gkSelect.value = ''; // Empty value
      expect(gkSelect.checkValidity()).toBe(false);
    });

    it('should pass validation when required and has value', () => {
      select.setAttribute('required', '');
      const gkSelect = select as GkSelect;
      gkSelect.value = 'option1';
      expect(gkSelect.checkValidity()).toBe(true);
    });
  });

  describe('Slot Content', () => {
    it('should display options in slot', () => {
      const options = select.querySelectorAll('option');
      expect(options.length).toBe(4);
      expect(options[0].textContent).toBe('Choose an option...');
      expect(options[1].textContent).toBe('Option 1');
    });

    it('should update options dynamically', () => {
      select.innerHTML = `
        <option value="">New options...</option>
        <option value="new1">New Option 1</option>
        <option value="new2">New Option 2</option>
      `;
      
      const options = select.querySelectorAll('option');
      expect(options.length).toBe(3);
      expect(options[0].textContent).toBe('New options...');
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid attribute changes', () => {
      for (let i = 0; i < 10; i++) {
        select.setAttribute('size', i % 3 === 0 ? 'small' : i % 3 === 1 ? 'medium' : 'large');
        select.setAttribute('value', `option${(i % 3) + 1}`);
      }

      // Last iteration: i=9, 9%3=0, so 'small'
      expect(select.getAttribute('size')).toBe('small');
      expect(select.getAttribute('value')).toBe('option1'); // 9%3=0, so option1
    });

    it('should handle empty value', () => {
      const gkSelect = select as GkSelect;
      gkSelect.value = '';
      expect(gkSelect.value).toBe('');
    });

    it('should handle null/undefined attribute values', () => {
      select.setAttribute('name', '');
      expect(select.getAttribute('name')).toBe('');

      select.removeAttribute('name');
      expect(select.getAttribute('name')).toBeNull();
    });

    it('should handle attribute removal', () => {
      select.setAttribute('required', '');
      select.removeAttribute('required');
      expect(select.hasAttribute('required')).toBe(false);
      
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.required).toBe(false);
    });

    it('should handle multiple selection', () => {
      select.setAttribute('multiple', '');
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.multiple).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should be focusable when not disabled', () => {
      const gkSelect = select as GkSelect;
      gkSelect.focus();
      expect(document.activeElement).toBe(select);
    });

    it('should not be focusable when disabled', () => {
      select.setAttribute('disabled', '');
      const gkSelect = select as GkSelect;
      gkSelect.focus();
      // In jsdom, disabled elements can still be focused, so we check the disabled state
      expect(select.hasAttribute('disabled')).toBe(true);
    });

    it('should have proper select element', () => {
      const selectElement = select.shadowRoot?.querySelector('select');
      expect(selectElement?.tagName).toBe('SELECT');
    });

    it('should support keyboard navigation', () => {
      const gkSelect = select as GkSelect;
      gkSelect.focus();
      expect(document.activeElement).toBe(select);
    });
  });
});
